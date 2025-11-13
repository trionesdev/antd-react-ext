import { concat, debounce, find, get, isEmpty } from 'lodash-es';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { SessionStorageUtils } from '../util/SessionStorageUtils';
import ExtTreeSelect, { ExtTreeSelectProps } from "../ext-tree-select";

export type FetchTreeSelectProps = {
  /**
   * @description 初始化值选项,用于列表等场景的时候，Select 组件可以展示，不需要去请求选项
   * @default
   */
  initialValueOption?: any;
  /**
   * @description 固定选项
   * @default
   */
  fixedOptions?: any[];
  /**
   * @description 是否下拉的时候请求数据
   * @default false
   */
  dropdownFetch?: boolean;
  /**
   * @description 是否允许请求
   * @default true
   */
  fetchEnable?: boolean;
  /**
   * @description 是否每次都请求数据，默认只请求一次
   * @default false
   */
  fetchAlways?: boolean;
  /**
   * @description 请求方法
   * @default undefined
   */
  fetchRequest?: (searchValue?: string) => Promise<any>;
  /**
   * @description 缓存key
   * @default undefined
   */
  cacheKey?: string;
  /**
   * @description 缓存过期时间
   * @default 0
   */
  cacheExpire?: number;
} & Omit<ExtTreeSelectProps, 'treeData'>;
export const FetchTreeSelect: FC<FetchTreeSelectProps> = ({
  initialValueOption=[],
  fixedOptions,
  dropdownFetch = false,
  fetchEnable = true,
  fetchAlways,
  fetchRequest,
  cacheKey,
  cacheExpire = 0,
  ...props
}) => {
  const [fetched, setFetched] = useState(false);
  const [options, setOptions] = useState(
    concat([], fixedOptions || [], initialValueOption || []),
  );
  const valueFiled = props.fieldNames?.value ?? 'value';
  const labelFiled = props.fieldNames?.label ?? 'label';

  const handleQuery = useCallback(
    (searchValue?: string) => {
      const request = fetchRequest
        ? fetchRequest(searchValue)
        : Promise.resolve([]);
      const data = SessionStorageUtils.getExpireItem(cacheKey, true);
      if (!isEmpty(data) && cacheExpire) {
        setOptions([...(fixedOptions || []), ...(data || [])]);
        setFetched(true);
        return;
      }
      request
        .then((data) => {
          setOptions([...(fixedOptions || []), ...(data || [])]);
          SessionStorageUtils.setExpireItem(cacheKey, data, cacheExpire);
        })
        .finally(() => {
          setFetched(true);
        });
    },
    [fetchRequest],
  );

  useEffect(() => {

    if (initialValueOption) {
      if (isEmpty(options)) {
        setOptions(concat([], fixedOptions || [], initialValueOption || []));
      } else {
        const missOptions: any[] = []
        initialValueOption?.forEach((initialOption:any) => {
          if (!find(options, (option) => {
            return get(option, valueFiled) === get(initialOption, valueFiled);
          })) {
            missOptions.push(initialOption);
          }
        });
        setOptions(concat(options, missOptions));

      }
    }
  }, [initialValueOption]);

  useEffect(() => {
    if (!dropdownFetch) {
      handleQuery();
    }
  }, []);

  return (
    <ExtTreeSelect
      {...props}
      treeData={options}
      onSearch={props.showSearch ? debounce(handleQuery, 500) : undefined}
      onOpenChange={(open) => {
        if (open && dropdownFetch && fetchEnable && (fetchAlways || !fetched)) {
          handleQuery();
        }
        props.onOpenChange?.(open);
      }}
    />
  );
};
