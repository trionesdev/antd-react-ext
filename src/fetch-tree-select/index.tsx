import { useRequest } from 'ahooks';
import { TreeSelect, TreeSelectProps } from 'antd';
import React, { FC, useState } from 'react';

export type FetchTreeSelectProps = {
  valueOption?: any;
  dropdownFetch?: boolean;
  fetchRequest?: (searchValue?: string) => Promise<any>;
} & Omit<TreeSelectProps, 'treeData' | 'onDropdownVisibleChange'>;
export const FetchTreeSelect: FC<FetchTreeSelectProps> = ({
  valueOption,
  dropdownFetch = false,
  fetchRequest,
  ...props
}) => {
  const [fetched, setFetched] = useState(false);
  const [options, setOptions] = useState(valueOption ? [valueOption] : []);
  const { run: handleQuery } = useRequest(
    (searchValue?: string) => {
      return fetchRequest ? fetchRequest(searchValue) : Promise.resolve([]);
    },
    {
      manual: dropdownFetch,
      onSuccess: (data: any) => {
        setOptions(data);
      },
      onFinally: () => {
        setFetched(true);
      },
    },
  );

  return (
    <TreeSelect
      {...props}
      treeData={options}
      onSearch={props.showSearch ? handleQuery : undefined}
      onDropdownVisibleChange={(open) => {
        if (open && !fetched) {
          handleQuery();
        }
      }}
    />
  );
};
