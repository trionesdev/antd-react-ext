import { concat, debounce, find, get, isEmpty } from 'lodash-es';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { SessionStorageUtils } from '../util/SessionStorageUtils';
import ExtSelect, {ExtSelectProps} from "../ext-select";


export type FetchSelectProps = {
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
  fetchRequest?: (searchValue?: string) => Promise<any>;
  cacheKey?: string;
  cacheExpire?: number;
} & Omit<ExtSelectProps, 'options' | 'onDropdownVisibleChange'>;
export const FetchSelect: FC<FetchSelectProps> = ({
  initialValueOption,
  fixedOptions,
  dropdownFetch = false,
  fetchEnable = true,
  fetchAlways = false,
  fetchRequest,
  cacheKey,
  cacheExpire = 0,
  ...props
}) => {
  const [fetched, setFetched] = useState(false);
  const [options, setOptions] = useState(
    concat([], fixedOptions || [], initialValueOption || []),
  );

  const handleQuery = useCallback(
    (searchValue?: string) => {
      const request =
        fetchRequest && fetchEnable
          ? fetchRequest(searchValue)
          : Promise.resolve([]);
      const data = SessionStorageUtils.getExpireItem(cacheKey, true);
      if (data) {
        setOptions([...(fixedOptions || []), ...(data || [])]);
        setFetched(true);
        return;
      }
      request
        .then((data: any) => {
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
        if (
          !find(
            options || [],
            (item: any) =>
              get(item, props.fieldNames?.value ?? 'value') ===
              get(initialValueOption, props.fieldNames?.value ?? 'value'),
          )
        ) {
          setOptions(concat([], options, initialValueOption));
        }
      }
    }
  }, [initialValueOption]);

  useEffect(() => {
    if (!dropdownFetch) {
      handleQuery();
    }
  }, []);

  return (
    <ExtSelect
      {...props}
      options={options}
      onSearch={props.showSearch ? debounce(handleQuery, 500) : undefined}
      onOpenChange={(open: boolean) => {
        if (open && dropdownFetch && fetchEnable && (fetchAlways || !fetched)) {
          handleQuery();
        }
        props.onOpenChange?.(open);
      }}
    />
  );
};
