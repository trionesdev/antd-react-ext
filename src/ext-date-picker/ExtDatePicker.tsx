import ExtFormField from '@trionesdev/antd-react-ext/ext-form-field';
import { DatePicker, DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import React, { FC } from 'react';

export type ExtDatePickerProps = DatePickerProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
};
export const ExtDatePicker: FC<ExtDatePickerProps> = ({
  readOnly,
  valueRender,
  ...rest
}) => {
  const handleFiledRender = (value: any, valueOptions: any) => {
    if (!value) {
      return undefined;
    }
    switch (rest.picker) {
      case 'month':
        return dayjs(value).format('YYYY-MM');
      case 'quarter':
        return dayjs(value).format('YYYY-Q');
      case 'week':
        return dayjs(value).format('YYYY-WW');
      case 'year':
        return dayjs(value).format('YYYY');
      default:
        return dayjs(value).format(
          rest.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD',
        );
    }
  };

  return (
    <ExtFormField
      readOnly={readOnly}
      value={rest.value}
      defaultValue={rest.defaultValue}
      valueRender={valueRender}
      fieldRender={handleFiledRender}
    >
      <DatePicker {...rest} />
    </ExtFormField>
  );
};
