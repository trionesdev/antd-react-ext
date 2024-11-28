"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[7007],{69327:function(o,t,e){var a;e.r(t),e.d(t,{demos:function(){return p}});var s=e(15009),d=e.n(s),c=e(99289),f=e.n(c),r=e(67294),b=e(23659),u=e(801),i=e(28061),E=e(33939),h=e(96486),l=e.n(h),p={"fetch-select-demo-base":{component:r.memo(r.lazy(function(){return e.e(5494).then(e.bind(e,44661))})),asset:{type:"BLOCK",id:"fetch-select-demo-base",refAtomIds:["fetch-select"],dependencies:{"index.tsx":{type:"FILE",value:e(44750).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(81867).Z},"./fetch-select.tsx":{type:"FILE",value:e(75415).Z},antd:{type:"NPM",value:"5.22.2"},lodash:{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"../index.tsx":u,"./fetch-select.tsx":i,react:a||(a=e.t(r,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/index.tsx":u,"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/fetch-select.tsx":i,antd:E,lodash:h},renderOpts:{compile:function(){var O=f()(d()().mark(function C(){var n,P=arguments;return d()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,e.e(7335).then(e.bind(e,37335));case 2:return _.abrupt("return",(n=_.sent).default.apply(n,P));case 3:case"end":return _.stop()}},C)}));function x(){return O.apply(this,arguments)}return x}()}}}},28061:function(o,t,e){e.r(t),e.d(t,{FetchSelect:function(){return x}});var a=e(97857),s=e.n(a),d=e(19632),c=e.n(d),f=e(5574),r=e.n(f),b=e(13769),u=e.n(b),i=e(34041),E=e(96486),h=e.n(E),l=e(67294),p=e(85893),O=["initialValueOption","fixedOptions","dropdownFetch","fetchEnable","fetchAlways","fetchRequest"],x=function(n){var P=n.initialValueOption,v=n.fixedOptions,_=n.dropdownFetch,R=_===void 0?!1:_,A=n.fetchEnable,y=A===void 0?!0:A,S=n.fetchAlways,W=S===void 0?!1:S,D=n.fetchRequest,I=u()(n,O),B=(0,l.useState)(!1),L=r()(B,2),T=L[0],K=L[1],U=(0,l.useState)(h().concat([],v||[],P||[])),j=r()(U,2),V=j[0],g=j[1],m=(0,l.useCallback)(function(F){var M=D&&y?D(F):Promise.resolve([]);M.then(function(w){g([].concat(c()(v||[]),c()(w||[])))}).finally(function(){K(!0)})},[D]);return(0,l.useEffect)(function(){R||m(),T&&m()},[]),(0,p.jsx)(i.default,s()(s()({},I),{},{options:V,onSearch:I.showSearch?m:void 0,onDropdownVisibleChange:function(M){M&&R&&y&&(W||!T)&&m()}}))}},801:function(o,t,e){e.r(t);var a=e(28061);t.default=a.FetchSelect},58021:function(o,t,e){e.r(t),e.d(t,{texts:function(){return s}});var a=e(23659);const s=[{value:"\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u7684Select,\u4F8B\u5982\u5217\u8868\u573A\u666F\u4E0B\u4F7F\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u884C\u6570\u636E\u4E2D\u7EC4\u88C5initialValueOption,\u6EE1\u8DB3Select\u5728\u4E0D\u8BF7\u6C42\u6570\u636E\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F4\u63A5\u6E32\u67D3Select\u7684\u573A\u666F",paraId:0,tocIndex:0}]},44750:function(o,t){t.Z=`import React from 'react';
import FetchSelect from '../index';

export default () => {
  const [value, setValue] = React.useState(2);
  return (
    <FetchSelect
      fetchRequest={() => {
        return Promise.resolve([
          { id: 1, name: '\u5C0F\u660E' },
          { id: 2, name: '\u5C0F\u7EA2' },
        ]);
      }}
      fieldNames={{ label: 'name', value: 'id' }}
      initialValueOption={{ id: 2, name: '\u5C0F\u7EA2' }}
      value={value}
      onChange={setValue}
    />
  );
};
`},75415:function(o,t){t.Z=`import { Select, SelectProps } from 'antd';
import _ from 'lodash';
import React, { FC, useCallback, useEffect, useState } from 'react';

export type FetchSelectProps = {
  /**
   * @description \u521D\u59CB\u5316\u503C\u9009\u9879,\u7528\u4E8E\u5217\u8868\u7B49\u573A\u666F\u7684\u65F6\u5019\uFF0CSelect \u7EC4\u4EF6\u53EF\u4EE5\u5C55\u793A\uFF0C\u4E0D\u9700\u8981\u53BB\u8BF7\u6C42\u9009\u9879
   * @default
   */
  initialValueOption?: any;
  /**
   * @description \u56FA\u5B9A\u9009\u9879
   * @default
   */
  fixedOptions?: any[];
  /**
   * @description \u662F\u5426\u4E0B\u62C9\u7684\u65F6\u5019\u8BF7\u6C42\u6570\u636E
   * @default false
   */
  dropdownFetch?: boolean;
  /**
   * @description \u662F\u5426\u5141\u8BB8\u8BF7\u6C42
   * @default true
   */
  fetchEnable?: boolean;
  /**
   * @description \u662F\u5426\u6BCF\u6B21\u90FD\u8BF7\u6C42\u6570\u636E\uFF0C\u9ED8\u8BA4\u53EA\u8BF7\u6C42\u4E00\u6B21
   * @default false
   */
  fetchAlways?: boolean;
  fetchRequest?: (searchValue?: string) => Promise<any>;
} & Omit<SelectProps, 'options' | 'onDropdownVisibleChange'>;
export const FetchSelect: FC<FetchSelectProps> = ({
  initialValueOption,
  fixedOptions,
  dropdownFetch = false,
  fetchEnable = true,
  fetchAlways = false,
  fetchRequest,
  ...props
}) => {
  const [fetched, setFetched] = useState(false);
  const [options, setOptions] = useState(
    _.concat([], fixedOptions || [], initialValueOption || []),
  );

  const handleQuery = useCallback(
    (searchValue?: string) => {
      const request =
        fetchRequest && fetchEnable
          ? fetchRequest(searchValue)
          : Promise.resolve([]);
      request
        .then((data) => {
          setOptions([...(fixedOptions || []), ...(data || [])]);
        })
        .finally(() => {
          setFetched(true);
        });
    },
    [fetchRequest],
  );

  useEffect(() => {
    if (!dropdownFetch) {
      handleQuery();
    }
    if (fetched) {
      handleQuery();
    }
  }, []);

  return (
    <Select
      {...props}
      options={options}
      onSearch={props.showSearch ? handleQuery : undefined}
      onDropdownVisibleChange={(open) => {
        if (open && dropdownFetch && fetchEnable && (fetchAlways || !fetched)) {
          handleQuery();
        }
      }}
    />
  );
};
`},81867:function(o,t){t.Z=`import { FetchSelect, FetchSelectProps } from './fetch-select';

export type { FetchSelectProps };
export default FetchSelect;
`}}]);
