import ExtFormField from '../ext-form-field';
import {DatePicker, DatePickerProps} from 'antd';
import dayjs from 'dayjs';
import React, {FC} from 'react';

export type ExtDatePickerProps = DatePickerProps & {
    readOnly?: boolean;
    valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
    defaultRender?: React.ReactNode;
};
export const ExtDatePicker: FC<ExtDatePickerProps> = ({
                                                          readOnly,
                                                          valueRender,
                                                          defaultRender,
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
            default: {
                const format = (rest.format as any)?.format || rest.format || 'YYYY-MM-DD HH:mm:ss';
                return dayjs(value).format(format);
            }
        }
    };

    return (
        <ExtFormField
            readOnly={readOnly}
            value={rest.value}
            defaultValue={rest.defaultValue}
            valueRender={valueRender}
            defaultRender={defaultRender}
            fieldRender={handleFiledRender}
        >
            <DatePicker {...rest} />
        </ExtFormField>
    );
};
