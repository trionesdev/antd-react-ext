import React, {FC} from "react";
import {DatePicker} from "antd";
import {RangePickerProps} from "antd/es/date-picker";
import dayjs from "dayjs";
import {ExtFormField} from '@trionesdev/antd-react-ext';

export type ExtDateRangePickerProps = RangePickerProps & {
  readonly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
  defaultRender?: React.ReactNode;
  emptyPlaceholder?: React.ReactNode;
};

export const ExtDateRangePicker: FC<ExtDateRangePickerProps> = ({readonly, valueRender,defaultRender,emptyPlaceholder, ...rest}) => {

    const handleFiledRender = (value: any, valueOptions: any) => {
        if (!value) {
            return undefined;
        }
        switch (rest.picker) {
            case 'month':
                return `${value?.[0] ? dayjs(value?.[0]).format('YYYY-MM') : ''}~${value?.[1] ? dayjs(value?.[1]).format('YYYY-MM') : ''}`;
            case 'quarter':
                return `${value?.[0] ? dayjs(value?.[0]).format('YYYY-Q') : ''}~${value?.[1] ? dayjs(value?.[1]).format('YYYY-Q') : ''}`;
            case 'week':
                return `${value?.[0] ? dayjs(value?.[0]).format('YYYY-WW') : ''}~${value?.[1] ? dayjs(value?.[1]).format('YYYY-WW') : ''}`;
            case 'year':
                return `${value?.[0] ? dayjs(value?.[0]).format('YYYY') : ''}~${value?.[1] ? dayjs(value?.[1]).format('YYYY') : ''}`;
            default: {
                const format = (rest.format as any)?.format || rest.format || 'YYYY-MM-DD';
                return `${value?.[0] ? dayjs(value?.[0]).format(format) : ''}~${value?.[1] ? dayjs(value?.[1]).format(format) : ''}`;
            }
        }
    };

    return (
        <ExtFormField
            readonly={readonly}
            value={rest.value}
            defaultValue={rest.defaultValue}
            valueRender={valueRender}
            defaultRender={defaultRender}
            fieldRender={handleFiledRender}
            emptyPlaceholder={emptyPlaceholder}
        >
            <DatePicker.RangePicker {...rest}  />
        </ExtFormField>
    );
}
