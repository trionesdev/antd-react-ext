import {InputNumber, InputNumberProps} from "antd";
import {FC, useEffect, useState} from "react";

export type ExtInputNumberProps = InputNumberProps & {
    readOnly?: boolean;
};

export const ExtInputNumber: FC<ExtInputNumberProps> = ({readOnly, ...rest}) => {
    const [value, setValue] = useState<any>(rest.value || rest.defaultValue);
    useEffect(() => {
        if (rest.value === undefined) {
            return
        }
        if (rest.value !== value) {
            setValue(rest.value)
        }
    }, [rest.value]);

    if (readOnly) {
        return <div>{value}</div>
    } else {
        return <InputNumber {...rest}
                            value={value}
                            onChange={(value) => {
                                setValue(value)
                                rest.onChange?.(value)
                            }
                            }
        />
    }
}