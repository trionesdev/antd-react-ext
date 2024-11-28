import { TreeSelect, TreeSelectProps } from 'antd';
import _ from 'lodash';
import React, { FC, useCallback, useEffect, useState } from 'react';

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
  fetchRequest?: (searchValue?: string) => Promise<any>;
} & Omit<TreeSelectProps, 'treeData' | 'onDropdownVisibleChange'>;
export const FetchTreeSelect: FC<FetchTreeSelectProps> = ({
  initialValueOption,
  fixedOptions,
  dropdownFetch = false,
  fetchEnable = true,
  fetchAlways,
  fetchRequest,
  ...props
}) => {
  const [fetched, setFetched] = useState(false);
  const [options, setOptions] = useState(
    _.concat([], fixedOptions || [], initialValueOption || []),
  );

  const handleQuery = useCallback(
    (searchValue?: string) => {
      const request = fetchRequest
        ? fetchRequest(searchValue)
        : Promise.resolve([]);
      request
        .then((data) => {
          setOptions([...(fixedOptions || []), ...(data || [])]);
        })
        .finally(() => {
          setFetched(true);
        });
    },
    [fetchRequest],
  );

  useEffect(() => {
    if (!dropdownFetch) {
      handleQuery();
    }
    if (fetched) {
      handleQuery();
    }
  }, []);

  return (
    <TreeSelect
      {...props}
      treeData={options}
      onSearch={props.showSearch ? handleQuery : undefined}
      onDropdownVisibleChange={(open) => {
        if (open && dropdownFetch && fetchEnable && (fetchAlways || !fetched)) {
          handleQuery();
        }
      }}
    />
  );
};
