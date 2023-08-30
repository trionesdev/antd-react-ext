import React, {FC, MouseEventHandler, useEffect, useReducer, useRef, useState} from "react"
import {useStyleRegister} from "@ant-design/cssinjs";
import {genFieldsMappingStyle} from "./styles";
import {Space, theme} from "antd";
import classNames from "classnames";
import _ from "lodash";

const {useToken} = theme;

type Config = {
  source?: { mutiple?: boolean }
  target?: { mutiple?: boolean }
}

export type Column = {
  key?: string,
  title?: string,
  width?: string | number
  primaryKey?: boolean
}

type MappingItem = {
  sourceKey: string,
  targetKey: string
}

type Line = {
  source: {
    key: string,
    x: number,
    y: number
  }
  target: {
    key: string,
    x: number,
    y: number
  }
}

type FieldsMappingProps = {
  sourceColumns?: Column[],
  targetColumns?: Column[],
  sourceData?: any[],
  targetData?: any[],
  mappingData?: MappingItem[],
  onMappingChange?: (values: MappingItem[]) => void
  config?: Config
}

enum MouseState {
  NORMAL,
  DOWN,
  UP
}

export const FieldsMapping: FC<FieldsMappingProps> = ({
                                                        sourceColumns,
                                                        targetColumns,
                                                        sourceData,
                                                        targetData,
                                                        mappingData,
                                                        onMappingChange,
                                                        config
                                                      }) => {
  const dataKey = "data-key"
  const prefixCls = 'ms-ant-fields-mapping';
  const rootRef = useRef<any>()
  const sourceRef = useRef<any>()
  const targetRef = useRef<any>()
  const [tmpSourceKey, setTmpSourceKey] = useState()
  const [tmpTargetKey, setTmpTargetKey] = useState()
  const [drawing, setDrawing] = useState(false)
  const [lineFrom, setLineForm] = useState<{ x?: number, y?: number } | undefined>()
  const [lineTo, setLineTo] = useState<{ x?: number, y?: number } | undefined>({})
  const [scopeMappingData, setScopeMappingData] = useState(mappingData)
  const [lines, setLiens] = useState<Line[]>([])


  const sourcePrimaryKey = sourceColumns?.find(row => {
    return row.primaryKey === true
  })?.key
  const targetPrimaryKey = targetColumns?.find(row => {
    return row.primaryKey === true
  })?.key


  const handleGetPortReactivePosition = (el: any) => {
    const rootClient = rootRef.current!.getBoundingClientRect();
    const elClient = el.getBoundingClientRect();
    return {
      x: (elClient.left + (elClient.width / 2) - rootClient.left),
      y: (elClient.top + (elClient.height / 2) - rootClient.top)
    }
  }

  const handleAddLine = (source: string, target: string) => {
    scopeMappingData?.push({sourceKey: source, targetKey: target})
    setScopeMappingData(_.cloneDeep(scopeMappingData))
    setTmpSourceKey(undefined)
  }

  const handleMouseDown = (e: any) => {
    const sourceKey = e.target['closest'](`.${prefixCls}-table-row`)?.getAttribute(dataKey)
    if (_.find(mappingData, (item: MappingItem) => {
      return item.sourceKey === sourceKey
    }) && !config?.source?.mutiple) {
      return
    }
    setTmpSourceKey(sourceKey)
    const position = handleGetPortReactivePosition(e.target)

    setDrawing(true)
    setLineForm(position)
    setLineTo(position)
  }

  const handleMouseMove = (e: any) => {
    if (!drawing) {
      return
    }
    console.log(e)
    const rootDiv = rootRef.current
    const targetPoint = {x: e.pageX - rootDiv.offsetLeft, y: e.pageY - rootDiv.offsetTop}
    setLineTo(targetPoint)
  }

  const handleMouseUp = (e: any) => {
    setDrawing(false)
    setLineForm(undefined)
    setLineTo(undefined)

    // @ts-ignore
    const targetKey = e.target['closest'](`.${prefixCls}-table-row`)?.getAttribute(dataKey) // 找到上层最近的row
    if (!targetKey || _.find(mappingData, (item: MappingItem) => {
      return item.sourceKey === targetKey
    }) && !config?.target?.mutiple) {
      return
    }
    if (tmpSourceKey) {
      handleAddLine(tmpSourceKey!, targetKey)
    }

  }


  useEffect(() => {
    const newLines: Line[] = []
    _.forEach(scopeMappingData, (item) => {
      const sourcePort = sourceRef.current.querySelector(`[${dataKey}=${item.sourceKey}]`)?.querySelector(`.${prefixCls}-table-row-port`)
      const targetPort = targetRef.current.querySelector(`[${dataKey}=${item.targetKey}]`)?.querySelector(`.${prefixCls}-table-row-port`)
      if (sourcePort && targetPort) {
        const sourcePoint = handleGetPortReactivePosition(sourcePort)
        const targetPoint = handleGetPortReactivePosition(targetPort)
        newLines.push({
          source: {key: item.sourceKey, x: sourcePoint.x, y: sourcePoint.y},
          target: {key: item.targetKey, x: targetPoint.x, y: targetPoint.y}
        })
      }
    })
    setLiens(newLines)
    onMappingChange?.(scopeMappingData || [])
  }, [scopeMappingData]);

  useEffect(() => {
    if (!_.isEqual(mappingData, scopeMappingData)) {
      setScopeMappingData(mappingData)
    }
  }, [mappingData]);

  useEffect(() => {
    if (drawing) {
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [drawing]);


  const {theme, token, hashId} = useToken();
  const wrapSSR = useStyleRegister(
    {theme, token, hashId, path: [prefixCls]},
    () => [genFieldsMappingStyle(prefixCls, token)],
  );
  return wrapSSR(<div ref={rootRef} className={classNames(prefixCls, {'drawing': drawing}, hashId)}
                      onMouseMove={handleMouseMove}>
    <div ref={sourceRef} className={classNames(`${prefixCls}-table`, `${prefixCls}-source`, hashId)}>
      <div className={classNames(`${prefixCls}-table-head`, hashId)}>
        <div className={classNames(`${prefixCls}-table-row`, hashId)}>
          {sourceColumns?.map((column) => <span key={column.key}
                                                className={classNames(`${prefixCls}-table-cell`, hashId)}
                                                style={{width: column.width}}>{column.title}</span>)}
        </div>
      </div>
      <div className={classNames(`${prefixCls}-table-body`, hashId)}>
        {sourceData?.map((row, index) => {
          return <div key={`${row[sourcePrimaryKey!]}-${index}`} data-id={index} data-key={row[sourcePrimaryKey!]}
                      className={classNames(`${prefixCls}-table-row`, hashId)}>{
            sourceColumns?.map(((column, index) => <span key={`${column.key}-${index}`}
                                                         className={classNames(`${prefixCls}-table-cell`, hashId)}
                                                         style={{width: column.width}}>{row[column.key!]}</span>))
          }
            <div className={classNames(`${prefixCls}-table-row-port`, hashId)} onMouseDown={handleMouseDown}/>
          </div>
        })}
      </div>
    </div>
    <div ref={targetRef} className={classNames(`${prefixCls}-table`, `${prefixCls}-target`, hashId)}>
      <div className={classNames(`${prefixCls}-table-head`, hashId)}>
        <div className={classNames(`${prefixCls}-table-row`, hashId)}>
          {targetColumns?.map((column) => <span key={column.key}
                                                className={classNames(`${prefixCls}-table-cell`, hashId)}
                                                style={{width: column.width}}>{column.title}</span>)}
        </div>
      </div>
      <div className={classNames(`${prefixCls}-table-body`, hashId)}>
        {targetData?.map((row, index) => {
          return <div key={`${row[targetPrimaryKey!]}-${index}`} data-id={index} data-key={row[targetPrimaryKey!]}
                      className={classNames(`${prefixCls}-table-row`, hashId)}>{
            targetColumns?.map(((column, index) => <span key={`${column.key}-${index}`}
                                                         className={classNames(`${prefixCls}-table-cell`, hashId)}
                                                         style={{width: column.width}}>{row[column.key!]}</span>))
          }
            <div className={classNames(`${prefixCls}-table-row-port`, hashId)}/>
          </div>
        })}
      </div>
    </div>
    <div className={classNames(`${prefixCls}-lines`, hashId)}>
      <svg style={{width: '100%', height: '100%'}}>
        {drawing && <g>
          <path className={classNames(`${prefixCls}-line`, hashId)}
                d={`M${lineFrom?.x}, ${lineFrom?.y} L${lineTo?.x}, ${lineTo?.y}`}/>
        </g>}
        {lines.map((line, index) => <g key={`line-${index}`}>
          <path className={classNames(`${prefixCls}-line`, hashId)}
                d={`M${line.source.x}, ${line.source.y} L${line.target.x}, ${line.target.y}`}/>
          <image width={16} height={16} x={500} y={54} xlinkHref={'data:image/png;base64,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'} onClick={()=>{ console.log("sss") }}/>

        </g>)}
      </svg>
    </div>
  </div>)
}
