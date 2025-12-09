import React, {FC, isValidElement, memo, PropsWithChildren, useEffect, useState,} from 'react';

export type CommonExtFormFieldProps = {
    readonly?: boolean;
    valueRender?:
        | ((value?: any, options?: any) => React.ReactNode)
        | React.ReactNode;
    defaultRender?: React.ReactNode;
    emptyPlaceholder?:React.ReactNode
};

export type ExtFormFieldProps = CommonExtFormFieldProps & {
    value?: any;
    defaultValue?: any;
    onChange?: (...params:any) => void;
    options?: any | ((value?: any) => any[]);
    fieldRender?: (value?: any, options?: any) => React.ReactNode;
};
export const ExtFormField: FC<PropsWithChildren<ExtFormFieldProps>> = memo(
    ({
         children,
         value,
         defaultValue,
         onChange,
         options,
         readonly,
         valueRender,
         defaultRender,
         fieldRender,
         emptyPlaceholder = <div style={{color: '#6c6c6c'}}>--</div>
     }) => {

        const [internalValue, setInternalValue] = useState(value || defaultValue);
        const handleRender = () => {
            const valueOptions = typeof options === 'function' ? options(internalValue) : options;
            if (valueRender) {
                if (typeof valueRender === 'function') {
                    return valueRender(internalValue, valueOptions);
                } else {
                    return valueRender;
                }
            }
            if (fieldRender) {
                return fieldRender(internalValue, valueOptions);
            }
            return internalValue;
        };

        useEffect(() => {
            if (value === undefined) {
                return;
            }
            if (value !== internalValue) {
                setInternalValue(value);
            }
        }, [value]);

        if (readonly) {
            return <div style={{fontSize: 14}}>{handleRender() || defaultRender || emptyPlaceholder}</div>;
        }

        if (children){
            if(isValidElement(children)){
                return React.cloneElement(children  , {
                    ...children.props,
                    value: internalValue,
                    onChange: (...params: any) => {
                        if (params[0] && typeof params[0] === 'object' && 'nativeEvent' in params[0]) {
                            setInternalValue(params[0].target.value);
                        } else {
                            setInternalValue(params[0]);
                        }
                        if (children.props.onChange){
                            children.props.onChange(...params);
                        }
                        onChange?.(...params);
                    }
                })
            }
            return <>{children}</>
        }
        return ;

    },
);
