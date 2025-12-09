import {Input} from 'antd';
import React, {FC} from 'react';
import {TextAreaProps} from 'antd/es/input/TextArea';
import ExtFormField from '../ext-form-field';

export type ExtInputTextAreaProps = TextAreaProps & {
    readonly?: boolean;
    valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
    defaultRender?: React.ReactNode;
};
export const ExtInputTextArea: FC<ExtInputTextAreaProps> = ({readonly, valueRender, defaultRender, ...rest}) => {
    return (
        <ExtFormField
            value={rest.value}
            defaultValue={rest.defaultValue}
            readonly={readonly}
            valueRender={valueRender}
            defaultRender={defaultRender}
        >
            <Input.TextArea {...rest} />
        </ExtFormField>
    );
}
