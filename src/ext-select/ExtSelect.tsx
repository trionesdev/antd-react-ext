import {Select, SelectProps} from "antd";
import {FC, useEffect, useState} from "react";

export type ExtSelectProps = SelectProps & {
    readOnly?: boolean;
}
export const ExtSelect: FC<ExtSelectProps> = ({readOnly = false, ...rest}) => {
    const [value, setValue] = useState(rest.value || rest.defaultValue);
    useEffect(() => {
        if (rest.value === undefined) {
            return
        }
        if (rest.value !== value) {
            setValue(rest.value)
        }
    }, [rest.value]);
    if (readOnly) {
        return <div>{rest.options?.find(option => option[rest.fieldNames?.value ?? 'value'] === rest.value)?.[rest.fieldNames?.label ?? 'label']}</div>
    } else {
        return <Select {...rest} onChange={(value) => {
            setValue(value)
            rest.onChange?.(value)
        }}/>
    }
}