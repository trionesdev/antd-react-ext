"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[1900],{33242:function(f,n,e){var _;e.r(n),e.d(n,{demos:function(){return p}});var M=e(15009),y=e.n(M),P=e(99289),D=e.n(P),R=e(67294),E=e(71354),i=e(69702),O=e(88600),a=e(52149),r=e(14406),p={"ext-select-demo-base":{component:R.memo(R.lazy(function(){return e.e(6186).then(e.bind(e,82565))})),asset:{type:"BLOCK",id:"ext-select-demo-base",refAtomIds:["ext-select"],dependencies:{"index.tsx":{type:"FILE",value:e(11909).Z},antd:{type:"NPM",value:"6.1.0"},react:{type:"NPM",value:"18.3.1"},"../ExtSelect.tsx":{type:"FILE",value:e(6721).Z},"lodash-es":{type:"NPM",value:"4.17.21"},"../ext-form-field.tsx":{type:"FILE",value:e(94291).Z},"./ExtFormField.tsx":{type:"FILE",value:e(72421).Z}},entry:"index.tsx"},context:{"../ExtSelect.tsx":i,"../ext-form-field.tsx":a,"./ExtFormField.tsx":r,antd:E,react:_||(_=e.t(R,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/ext-select/ExtSelect.tsx":i,"lodash-es":O,"/home/runner/work/antd-react-ext/antd-react-ext/src/ext-form-field/index.tsx":a,"/home/runner/work/antd-react-ext/antd-react-ext/src/ext-form-field/ExtFormField.tsx":r},renderOpts:{compile:function(){var x=D()(y()().mark(function c(){var h,u=arguments;return y()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(250).then(e.bind(e,90250));case 2:return o.abrupt("return",(h=o.sent).default.apply(h,u));case 3:case"end":return o.stop()}},c)}));function m(){return x.apply(this,arguments)}return m}()}}}},14406:function(f,n,e){e.r(n),e.d(n,{ExtFormField:function(){return O}});var _=e(52677),M=e.n(_),y=e(97857),P=e.n(y),D=e(5574),R=e.n(D),E=e(67294),i=e(85893),O=(0,E.memo)(function(a){var r=a.children,p=a.value,x=a.defaultValue,m=a.onChange,c=a.options,h=a.readonly,u=a.valueRender,C=a.defaultRender,o=a.fieldRender,I=a.emptyPlaceholder,L=I===void 0?(0,i.jsx)("div",{style:{color:"#6c6c6c"},children:"--"}):I,l=(0,E.useState)(p||x),b=R()(l,2),v=b[0],j=b[1],V=function(){var d=typeof c=="function"?c(v):c;return u?typeof u=="function"?u(v,d):u:o?o(v,d):v};if((0,E.useEffect)(function(){p!==void 0&&p!==v&&j(p)},[p]),h)return(0,i.jsx)("div",{style:{fontSize:14},children:V()||C||L});if(r)return(0,E.isValidElement)(r)?E.cloneElement(r,P()(P()({},r.props),{},{value:v,onChange:function(){for(var d=arguments.length,t=new Array(d),s=0;s<d;s++)t[s]=arguments[s];if(t[0]&&M()(t[0])==="object"&&"nativeEvent"in t[0]?j(t[0].target.value):j(t[0]),r.props.onChange){var F;(F=r.props).onChange.apply(F,t)}m==null||m.apply(void 0,t)}})):(0,i.jsx)(i.Fragment,{children:r})})},52149:function(f,n,e){e.r(n);var _=e(14406);n.default=_.ExtFormField},69702:function(f,n,e){e.r(n),e.d(n,{ExtSelect:function(){return r}});var _=e(97857),M=e.n(_),y=e(13769),P=e.n(y),D=e(34041),R=e(90096),E=e(67294),i=e(52149),O=e(85893),a=["readonly","valueRender","defaultRender"],r=function(x){var m,c,h,u,C=x.readonly,o=C===void 0?!1:C,I=x.valueRender,L=x.defaultRender,l=P()(x,a),b=(m=(c=l.fieldNames)===null||c===void 0?void 0:c.value)!==null&&m!==void 0?m:"value",v=(h=(u=l.fieldNames)===null||u===void 0?void 0:u.label)!==null&&h!==void 0?h:"label",j=function(d){if(l.mode==="multiple"||l.mode==="tags"){var t;return(t=l.options)===null||t===void 0?void 0:t.filter(function(F){return(0,R.Z)(d,F[b])})}else{var s;return(s=l.options)===null||s===void 0?void 0:s.find(function(F){return F[b]===d})}},V=function(d,t){return l.mode==="multiple"||l.mode==="tags"?t==null?void 0:t.map(function(s){return s[v]}).join(", "):t==null?void 0:t[v]};return(0,O.jsx)(i.default,{value:l.value,defaultValue:l.defaultValue,readonly:o,valueRender:I,defaultRender:L,options:j,fieldRender:function(d,t){return V(d,t)},children:(0,O.jsx)(D.default,M()({},l))})}},44815:function(f,n,e){e.r(n),e.d(n,{texts:function(){return _}});const _=[{value:"\u589E\u52A0Select\u7684\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u7528\u4E8E\u5C55\u793A",paraId:0,tocIndex:0}]},72421:function(f,n){n.Z=`import React, {FC, isValidElement, memo, PropsWithChildren, useEffect, useState,} from 'react';

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
`},94291:function(f,n){n.Z=`import {ExtFormField} from "./ExtFormField"

export type {CommonExtFormFieldProps, ExtFormFieldProps} from "./ExtFormField"
export default ExtFormField;
`},6721:function(f,n){n.Z=`import {Select, SelectProps} from 'antd';
import { includes } from 'lodash-es';
import React, {FC} from 'react';
import ExtFormField from '../ext-form-field';

export type ExtSelectProps = Omit<SelectProps, 'children'> & {
  readonly?: boolean;
  valueRender?:
    | ((value?: any, option?: any) => React.ReactNode)
    | React.ReactNode;
  defaultRender?: React.ReactNode;
};
export const ExtSelect: FC<ExtSelectProps> = ({
                                                  readonly = false,
                                                  valueRender,
                                                  defaultRender,
                                                  ...rest
                                              }) => {
    const valueField = rest.fieldNames?.value ?? 'value';
    const labelField = rest.fieldNames?.label ?? 'label';

    const handleValueOptions = (value: any) => {
        if (rest.mode === 'multiple' || rest.mode === 'tags') {
            return rest.options?.filter((option) => {
                return includes(value, option[valueField]);
            });
        } else {
            return rest.options?.find((option) => option[valueField] === value);
        }
    };

    const handleRender = (value: any, options: any) => {
        if (rest.mode === 'multiple' || rest.mode === 'tags') {
            return options?.map((option: any) => option[labelField]).join(', ');
        } else {
            return options?.[labelField];
        }
    };

    return (
        <ExtFormField
            value={rest.value}
            defaultValue={rest.defaultValue}
            readonly={readonly}
            valueRender={valueRender}
            defaultRender={defaultRender}
            options={handleValueOptions}
            fieldRender={(value, options) => {
                return handleRender(value, options);
            }}
        >
            <Select {...rest} />
        </ExtFormField>

    );
};
`},11909:function(f,n){n.Z=`import {Switch} from 'antd';
import React, {useState} from 'react';
import {ExtSelect} from "../ExtSelect";

export default () => {
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [options, setOptions] = React.useState([
    {value: 1, label: '\u5C0F\u660E'},
    {value: 2, label: '\u5C0F\u7EA2'},
  ]);
  return (
    <div>
      <div>
        <Switch value={readOnly} onChange={setReadOnly}/>
      </div>
      <div>
        <ExtSelect style={{width: 200}} placeholder="\u8BF7\u9009\u62E9" readonly={readOnly} options={options}
                   value={value}
                   onChange={setValue}
        />
        <ExtSelect style={{width: 200}} placeholder="\u8BF7\u9009\u62E9" readonly={readOnly} options={options}
                   mode="multiple"
                   value={value2} onChange={setValue2}
        />
        <ExtSelect style={{width: 200}} placeholder="\u8BF7\u9009\u62E9" readonly={true} options={options}
                   value={1}
                   onChange={setValue}
        />
      </div>
    </div>
  );
};
`}}]);
