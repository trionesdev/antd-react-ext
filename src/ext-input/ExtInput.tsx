import {Input, InputProps} from "antd";
import {FC, useEffect, useState} from "react";

export type ExtInputProps = InputProps & {
    readOnly?: boolean;
};
export const ExtInput: FC<ExtInputProps> = ({readOnly, ...rest}) => {
    const [value, setValue] = useState(rest.value || rest.defaultValue);

    useEffect(() => {
        if (rest.value === undefined) {
            return
        }
        if (rest.value !== value) {
            setValue(rest.value)
        }
    }, [rest.value])

    if (readOnly) {
        return <div>{value?.toString()}</div>
    } else {
        return <Input {...rest}
                      onChange={(e) => {
                          setValue(e.target.value)
                          rest.onChange?.(e)
                      }
                      }/>
    }
}