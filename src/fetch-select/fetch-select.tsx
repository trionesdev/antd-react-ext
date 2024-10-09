import { useRequest } from 'ahooks';
import { Select, SelectProps } from 'antd';
import _ from 'lodash';
import React, { FC, useEffect, useState } from 'react';

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
} & Omit<SelectProps, 'options' | 'onDropdownVisibleChange'>;
export const FetchSelect: FC<FetchSelectProps> = ({
  initialValueOption,
  fixedOptions,
  dropdownFetch = false,
  fetchEnable = true,
  fetchAlways = false,
  fetchRequest,
  ...props
}) => {
  const [fetched, setFetched] = useState(false);
  const [options, setOptions] = useState(
    _.concat([], fixedOptions || [], initialValueOption || []),
  );
  const { run: handleQuery } = useRequest(
    (searchValue?: string) => {
      return fetchRequest && fetchEnable
        ? fetchRequest(searchValue)
        : Promise.resolve([]);
    },
    {
      manual: dropdownFetch,
      onSuccess: (data: any) => {
        setOptions([...(fixedOptions || []), ...(data || [])]);
      },
      onFinally: () => {
        setFetched(true);
      },
    },
  );

  useEffect(() => {
    if (fetched) {
      handleQuery();
    }
  }, [fetchRequest]);

  return (
    <Select
      {...props}
      options={options}
      onSearch={props.showSearch ? handleQuery : undefined}
      onDropdownVisibleChange={(open) => {
        if (open && dropdownFetch && fetchEnable && (fetchAlways || !fetched)) {
          handleQuery();
        }
      }}
    />
  );
};
