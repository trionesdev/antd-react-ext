import { useRequest } from 'ahooks';
import { Select, SelectProps } from 'antd';
import _ from 'lodash';
import React, { FC, useEffect, useState } from 'react';

export type FetchSelectProps = {
  valueOption?: any;
  dropdownFetch?: boolean;
  fetchEnable?: boolean;
  fetchRequest?: (searchValue?: string) => Promise<any>;
} & Omit<SelectProps, 'options' | 'onDropdownVisibleChange'>;
export const FetchSelect: FC<FetchSelectProps> = ({
  valueOption,
  dropdownFetch = false,
  fetchEnable = true,
  fetchRequest,
  ...props
}) => {
  const [fetched, setFetched] = useState(false);
  const [options, setOptions] = useState(valueOption ? [valueOption] : []);
  const { run: handleQuery } = useRequest(
    (searchValue?: string) => {
      return fetchRequest && fetchEnable
        ? fetchRequest(searchValue)
        : Promise.resolve([]);
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

  useEffect(() => {
    if (fetched) {
      handleQuery();
    }
  }, [fetchRequest]);

  useEffect(() => {
    if (!_.isEmpty(valueOption)) {
      let newOptions = [...options];
      if (_.isArray(valueOption)) {
        valueOption.forEach((item: any) => {
          if (!_.find(newOptions, (o: any) => o.value === item.value)) {
            newOptions.push(item);
          }
        });
      } else {
        if (!options.find((item: any) => item.value === valueOption.value)) {
          setOptions([...options, valueOption]);
        }
      }
    }

    return () => {
      setOptions([]);
      setFetched(false);
    };
  }, [valueOption]);

  return (
    <Select
      {...props}
      options={options}
      onSearch={props.showSearch ? handleQuery : undefined}
      onDropdownVisibleChange={(open) => {
        if (open && dropdownFetch && fetchEnable && !fetched) {
          handleQuery();
        }
      }}
    />
  );
};
