import {InputNumber, InputNumberProps} from "antd";
import React, {FC} from "react";
import ExtFormField from "@components/ext-form-field";

export type ExtInputNumberProps = InputNumberProps & {
    readOnly?: boolean;
    valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
    defaultRender?: React.ReactNode;
};

export const ExtInputNumber: FC<ExtInputNumberProps> = ({readOnly, valueRender, defaultRender, ...rest}) => {

    const handleRender = (value: any, options: any) => {
        return <>{value}{rest.suffix || rest.addonAfter}</>
    };

    return (
        <ExtFormField
            value={rest.value}
            defaultValue={rest.defaultValue}
            readOnly={readOnly}
            valueRender={valueRender}
            defaultRender={defaultRender}
            fieldRender={handleRender}
        >
            <InputNumber {...rest} />
        </ExtFormField>
    );
}