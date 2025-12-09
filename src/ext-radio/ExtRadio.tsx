import React, {FC} from "react";
import {Radio, RadioProps} from "antd";
import ExtFormField from "../ext-form-field";

export type ExtRadioProps = RadioProps & {
    readonly?: boolean;
    valueRender?:
        | ((value?: any, option?: any) => React.ReactNode)
        | React.ReactNode;
    defaultRender?: React.ReactNode;
};
export const ExtRadio: FC<ExtRadioProps> = ({
                                                readonly = false,
                                                    valueRender,
                                                    defaultRender,
                                                    ...rest
                                                }) =>{

    const handleValueOptions = (value: any) => {

    };

    const handleRender = (value: any, options: any) => {
        return <></>
    };

   return <ExtFormField
        value={rest.value}
        readonly={readonly}
        valueRender={valueRender}
        defaultRender={defaultRender}
        options={handleValueOptions}
        fieldRender={(value, options) => {
            return handleRender(value, options);
        }}
    >
        <Radio {...rest} />
    </ExtFormField>
};
