"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[7007],{69327:function(o,t,e){var a;e.r(t),e.d(t,{demos:function(){return O}});var s=e(15009),l=e.n(s),d=e(99289),f=e.n(d),r=e(67294),C=e(23659),u=e(801),c=e(28061),E=e(81097),p=e(33939),i=e(96486),h=e.n(i),O={"fetch-select-demo-base":{component:r.memo(r.lazy(function(){return e.e(5494).then(e.bind(e,44661))})),asset:{type:"BLOCK",id:"fetch-select-demo-base",refAtomIds:["fetch-select"],dependencies:{"index.tsx":{type:"FILE",value:e(44750).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(81867).Z},"./fetch-select.tsx":{type:"FILE",value:e(75415).Z},ahooks:{type:"NPM",value:"3.8.1"},antd:{type:"NPM",value:"5.22.2"},lodash:{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"../index.tsx":u,"./fetch-select.tsx":c,react:a||(a=e.t(r,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/index.tsx":u,"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/fetch-select.tsx":c,ahooks:E,antd:p,lodash:i},renderOpts:{compile:function(){var P=f()(l()().mark(function y(){var n,D=arguments;return l()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,e.e(7335).then(e.bind(e,37335));case 2:return _.abrupt("return",(n=_.sent).default.apply(n,D));case 3:case"end":return _.stop()}},y)}));function x(){return P.apply(this,arguments)}return x}()}}}},28061:function(o,t,e){e.r(t),e.d(t,{FetchSelect:function(){return x}});var a=e(97857),s=e.n(a),l=e(19632),d=e.n(l),f=e(5574),r=e.n(f),C=e(13769),u=e.n(C),c=e(20578),E=e(34041),p=e(96486),i=e.n(p),h=e(67294),O=e(85893),P=["initialValueOption","fixedOptions","dropdownFetch","fetchEnable","fetchAlways","fetchRequest"],x=function(n){var D=n.initialValueOption,M=n.fixedOptions,_=n.dropdownFetch,S=_===void 0?!1:_,b=n.fetchEnable,I=b===void 0?!0:b,L=n.fetchAlways,B=L===void 0?!1:L,v=n.fetchRequest,T=u()(n,P),K=(0,h.useState)(!1),F=r()(K,2),W=F[0],U=F[1],V=(0,h.useState)(i().concat([],M||[],D||[])),j=r()(V,2),g=j[0],w=j[1],Z=(0,c.Z)(function(m){return v&&I?v(m):Promise.resolve([])},{manual:S,onSuccess:function(A){w([].concat(d()(M||[]),d()(A||[])))},onFinally:function(){U(!0)}}),R=Z.run;return(0,h.useEffect)(function(){W&&R()},[v]),(0,O.jsx)(E.default,s()(s()({},T),{},{options:g,onSearch:T.showSearch?R:void 0,onDropdownVisibleChange:function(A){A&&S&&I&&(B||!W)&&R()}}))}},801:function(o,t,e){e.r(t);var a=e(28061);t.default=a.FetchSelect},58021:function(o,t,e){e.r(t),e.d(t,{texts:function(){return s}});var a=e(23659);const s=[{value:"\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u7684Select,\u4F8B\u5982\u5217\u8868\u573A\u666F\u4E0B\u4F7F\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u884C\u6570\u636E\u4E2D\u7EC4\u88C5initialValueOption,\u6EE1\u8DB3Select\u5728\u4E0D\u8BF7\u6C42\u6570\u636E\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F4\u63A5\u6E32\u67D3Select\u7684\u573A\u666F",paraId:0,tocIndex:0}]},44750:function(o,t){t.Z=`import React from 'react';
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
`},75415:function(o,t){t.Z=`import { useRequest } from 'ahooks';
import { Select, SelectProps } from 'antd';
import _ from 'lodash';
import React, { FC, useEffect, useState } from 'react';

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
  const { run: handleQuery } = useRequest(
    (searchValue?: string) => {
      return fetchRequest && fetchEnable
        ? fetchRequest(searchValue)
        : Promise.resolve([]);
    },
    {
      manual: dropdownFetch,
      onSuccess: (data: any) => {
        setOptions([...(fixedOptions || []), ...(data || [])]);
      },
      onFinally: () => {
        setFetched(true);
      },
    },
  );

  useEffect(() => {
    if (fetched) {
      handleQuery();
    }
  }, [fetchRequest]);

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
