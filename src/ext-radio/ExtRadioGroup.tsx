import {Radio, RadioGroupProps} from "antd";
import React, {FC} from "react";
import ExtFormField from '../ext-form-field';


export type ExtRadioGroupProps = RadioGroupProps & {
    readOnly?: boolean;
    valueRender?:
        | ((value?: any, option?: any) => React.ReactNode)
        | React.ReactNode;
    defaultRender?: React.ReactNode;
};

export const ExtRadioGroup: FC<ExtRadioGroupProps> = ({
                                                          readOnly = false,
                                                          valueRender,
                                                          defaultRender,
                                                          ...rest
                                                      }) => {


    const handleRender = (value: any, options: any) => {
        return options?.find((item: any) => item.value === value)?.label || value;
    };

    return <ExtFormField
        value={rest.value}
        defaultValue={rest.defaultValue}
        options={rest.options}
        onChange={rest.onChange}
        readOnly={readOnly}
        valueRender={valueRender}
        defaultRender={defaultRender}
        fieldRender={(value, options) => {
            return handleRender(value, options);
        }}
    >
        <Radio.Group {...rest} />
    </ExtFormField>

};
