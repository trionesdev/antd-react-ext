import React, {FC, useEffect, useRef, useState} from "react"
import {useStyleRegister} from "@ant-design/cssinjs";
import {genFieldsMappingStyle} from "./styles";
import {theme} from "antd";
import classNames from "classnames";
import _ from "lodash";
import {ImageRemove} from "./images";


const {useToken} = theme;

type Config = {
  source?: { mutiple?: boolean }
  target?: { mutiple?: boolean }
  removeIconSize?: number
  defaultColumnWidth?: number
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
  /**
   * @description 来源列
   * @default
   */
  sourceColumns?: Column[],
  /**
   * @description 目标列
   * @default
   */
  targetColumns?: Column[],
  /**
   * @description 来源数据
   * @default
   */
  sourceData?: any[],
  /**
   * @description 目标数据
   * @default
   */
  targetData?: any[],
  /**
   * @description 映射数据
   * @default
   */
  mappingData?: MappingItem[],
  /**
   * @description 映射数据变化
   * @default
   */
  onMappingChange?: (values: MappingItem[]) => void
  /**
   * @description 配置
   * @default
   */
  config?: Config
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
  const [drawing, setDrawing] = useState(false)
  const [lineFrom, setLineForm] = useState<{ x?: number, y?: number } | undefined>()
  const [lineTo, setLineTo] = useState<{ x?: number, y?: number } | undefined>()
  const [scopeMappingData, setScopeMappingData] = useState(mappingData || [])
  const [lines, setLiens] = useState<Line[]>([])

  const removeIconSize = config?.removeIconSize || 24
  const defaultColumnWidth = config?.defaultColumnWidth || 80

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
    if (_.find(scopeMappingData, (item: MappingItem) => {
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
    const rootClient = rootRef.current!.getBoundingClientRect();
    const targetPoint = {x: e.pageX - rootClient.left, y: e.pageY - rootClient.top}
    setLineTo(targetPoint)
  }

  const handleMouseUp = (e: any) => {
    setDrawing(false)
    setLineForm(undefined)
    setLineTo(undefined)

    const targetKey = e.target['closest'](`.${prefixCls}-table-row`)?.getAttribute(dataKey) // 找到上层最近的row
    if (!targetKey || _.find(scopeMappingData, (item: MappingItem) => {
      return item.targetKey === targetKey
    }) && !config?.target?.mutiple) {
      return
    }
    if (tmpSourceKey) {
      handleAddLine(tmpSourceKey!, targetKey)
    }

  }

  const handleCloseLine = (line: Line) => {
    const newMappingData = scopeMappingData?.filter(lineItem => {
      return !_.eq(lineItem.sourceKey, line.source.key) && !_.eq(lineItem.targetKey, line.target.key)
    })
    setScopeMappingData(newMappingData)
  }

  const handleDrawLines = () => {
    if(_.isEmpty(sourceData) || _.isEmpty(targetData)){
      return
    }
    const newLines: Line[] = []
    _.forEach(scopeMappingData, (item) => {
      const sourcePort = sourceRef.current?.querySelector(`[${dataKey}=${item.sourceKey}]`)?.querySelector(`.${prefixCls}-table-row-port`)
      const targetPort = targetRef.current?.querySelector(`[${dataKey}=${item.targetKey}]`)?.querySelector(`.${prefixCls}-table-row-port`)
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

  }

  const handleResize = () => {
    handleDrawLines()
  }

  useEffect(() => {
    handleDrawLines()
    onMappingChange?.(scopeMappingData || [])
  }, [scopeMappingData]);

  useEffect(() => {
    if (!_.isEqual((mappingData || []), (scopeMappingData || []))) {
      setScopeMappingData(mappingData || [])
    }
  }, [mappingData]);

  useEffect(() => {

    //region 监听div resize事件
    let observer = new ResizeObserver(() => _.debounce(handleResize, 200)());
    observer.observe(rootRef.current)
    //endregion

    if (drawing) {
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (rootRef.current) {
        observer.unobserve(rootRef.current)
      }
      observer.disconnect()
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [drawing]);


  const {theme, token, hashId} = useToken();
  const wrapSSR = useStyleRegister(
    {theme, token, hashId, path: [prefixCls]},
    () => [genFieldsMappingStyle(prefixCls, token)],
  );
  return wrapSSR(<div ref={rootRef} className={classNames(prefixCls, {'drawing': drawing}, hashId)}
                      onMouseMove={handleMouseMove} onResize={handleResize}>
    <div ref={sourceRef} className={classNames(`${prefixCls}-table`, `${prefixCls}-source`, hashId)}>
      <div className={classNames(`${prefixCls}-table-head`, hashId)}>
        <div className={classNames(`${prefixCls}-table-row`, hashId)}>
          {sourceColumns?.map((column) => <span key={column.key}
                                                className={classNames(`${prefixCls}-table-cell`, hashId)}
                                                style={{width: column.width || defaultColumnWidth}}>{column.title}</span>)}
        </div>
      </div>
      <div className={classNames(`${prefixCls}-table-body`, hashId)}>
        {sourceData?.map((row, index) => {
          return <div key={`${row[sourcePrimaryKey!]}-${index}`} data-id={index}
                      data-key={row[sourcePrimaryKey!]}
                      className={classNames(`${prefixCls}-table-row`, hashId)}>{
            sourceColumns?.map(((column, index) => <span key={`${column.key}-${index}`}
                                                         className={classNames(`${prefixCls}-table-cell`, hashId)}
                                                         style={{width: column.width || defaultColumnWidth}}>{row[column.key!]}</span>))
          }
            <div className={classNames(`${prefixCls}-table-row-port`, hashId)}
                 onMouseDown={handleMouseDown}/>
          </div>
        })}
      </div>
    </div>
    <div ref={targetRef} className={classNames(`${prefixCls}-table`, `${prefixCls}-target`, hashId)}>
      <div className={classNames(`${prefixCls}-table-head`, hashId)}>
        <div className={classNames(`${prefixCls}-table-row`, hashId)}>
          {targetColumns?.map((column) => <span key={column.key}
                                                className={classNames(`${prefixCls}-table-cell`, hashId)}
                                                style={{width: column.width || defaultColumnWidth}}>{column.title}</span>)}
        </div>
      </div>
      <div className={classNames(`${prefixCls}-table-body`, hashId)}>
        {targetData?.map((row, index) => {
          return <div key={`${row[targetPrimaryKey!]}-${index}`} data-id={index}
                      data-key={row[targetPrimaryKey!]}
                      className={classNames(`${prefixCls}-table-row`, hashId)}>{
            targetColumns?.map(((column, index) => <span key={`${column.key}-${index}`}
                                                         className={classNames(`${prefixCls}-table-cell`, hashId)}
                                                         style={{width: column.width || defaultColumnWidth}}>{row[column.key!]}</span>))
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
        {lines.map((line, index) => <g key={`line-${index}`} className={classNames(`${prefixCls}-g`, hashId)}>
          <path className={classNames(`${prefixCls}-line`, hashId)}
                d={`M${line.source.x}, ${line.source.y} L${line.target.x}, ${line.target.y}`}/>
          <image className={classNames(`${prefixCls}-line-remove`, hashId)} width={removeIconSize}
                 height={removeIconSize}
                 x={(line.source.x + (line.target.x - line.source.x) / 2 - removeIconSize / 2)}
                 y={(line.source.y + (line.target.y - line.source.y) / 2 - removeIconSize / 2)}
                 xlinkHref={ImageRemove}
                 onClick={() => handleCloseLine(line)}/>

        </g>)}
      </svg>
    </div>
  </div>)
}
