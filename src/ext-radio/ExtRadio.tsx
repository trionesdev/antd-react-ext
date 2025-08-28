import React, {FC} from "react";
import {Radio, RadioProps} from "antd";
import ExtFormField from "@components/ext-form-field";

export type ExtRadioProps = RadioProps & {
    readOnly?: boolean;
    valueRender?:
        | ((value?: any, option?: any) => React.ReactNode)
        | React.ReactNode;
    defaultRender?: React.ReactNode;
};
export const ExtRadio: FC<ExtRadioProps> = ({
                                                    readOnly = false,
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

        onChange={rest.onChange}
        readOnly={readOnly}
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