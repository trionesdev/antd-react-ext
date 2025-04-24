"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[7007],{69327:function(_,t,e){var l;e.r(t),e.d(t,{demos:function(){return b}});var i=e(15009),c=e.n(i),u=e(99289),P=e.n(u),r=e(67294),K=e(23659),h=e(801),m=e(28061),y=e(34445),o=e(96486),f=e.n(o),b={"fetch-select-demo-base":{component:r.memo(r.lazy(function(){return e.e(5494).then(e.bind(e,44661))})),asset:{type:"BLOCK",id:"fetch-select-demo-base",refAtomIds:["fetch-select"],dependencies:{"index.tsx":{type:"FILE",value:e(44750).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(81867).Z},"./fetch-select.tsx":{type:"FILE",value:e(75415).Z},antd:{type:"NPM",value:"5.24.8"},lodash:{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"../index.tsx":h,"./fetch-select.tsx":m,react:l||(l=e.t(r,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/index.tsx":h,"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/fetch-select.tsx":m,antd:y,lodash:o},renderOpts:{compile:function(){var v=P()(c()().mark(function M(){var a,s=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,s));case 3:case"end":return n.stop()}},M)}));function O(){return v.apply(this,arguments)}return O}()}},"fetch-select-demo-set-initial-option":{component:r.memo(r.lazy(function(){return e.e(5494).then(e.bind(e,29400))})),asset:{type:"BLOCK",id:"fetch-select-demo-set-initial-option",refAtomIds:["fetch-select"],dependencies:{"index.tsx":{type:"FILE",value:e(8841).Z},antd:{type:"NPM",value:"5.24.8"},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(81867).Z},"./fetch-select.tsx":{type:"FILE",value:e(75415).Z},lodash:{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"../index.tsx":h,"./fetch-select.tsx":m,antd:y,react:l||(l=e.t(r,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/index.tsx":h,"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/fetch-select.tsx":m,lodash:o},renderOpts:{compile:function(){var v=P()(c()().mark(function M(){var a,s=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,s));case 3:case"end":return n.stop()}},M)}));function O(){return v.apply(this,arguments)}return O}()}}}},28061:function(_,t,e){e.r(t),e.d(t,{FetchSelect:function(){return O}});var l=e(97857),i=e.n(l),c=e(19632),u=e.n(c),P=e(5574),r=e.n(P),K=e(13769),h=e.n(K),m=e(34041),y=e(96486),o=e.n(y),f=e(67294),b=e(85893),v=["initialValueOption","fixedOptions","dropdownFetch","fetchEnable","fetchAlways","fetchRequest","cacheKey","cacheExpire"],O=function(a){var s=a.initialValueOption,p=a.fixedOptions,n=a.dropdownFetch,L=n===void 0?!1:n,B=a.fetchEnable,T=B===void 0?!0:B,U=a.fetchAlways,Z=U===void 0?!1:U,A=a.fetchRequest,j=a.cacheKey,V=a.cacheExpire,w=V===void 0?0:V,D=h()(a,v),Q=(0,f.useState)(!1),W=r()(Q,2),g=W[0],N=W[1],z=(0,f.useState)(o().concat([],p||[],s||[])),$=r()(z,2),S=$[0],C=$[1],R=(0,f.useCallback)(function(I){var d=A&&T?A(I):Promise.resolve([]),E=SessionStorageUtils.getExpireItem(j,!0);if(E){C([].concat(u()(p||[]),u()(E||[]))),N(!0);return}d.then(function(x){C([].concat(u()(p||[]),u()(x||[]))),SessionStorageUtils.setExpireItem(j,x,w)}).finally(function(){N(!0)})},[A]);return(0,f.useEffect)(function(){s&&(o().isEmpty(S)?C(o().concat([],p||[],s||[])):o().find(S||[],function(I){var d,E,x,F;return o().get(I,(d=(E=D.fieldNames)===null||E===void 0?void 0:E.value)!==null&&d!==void 0?d:"value")===o().get(s,(x=(F=D.fieldNames)===null||F===void 0?void 0:F.value)!==null&&x!==void 0?x:"value")})||C(o().concat([],S,s)))},[s]),(0,f.useEffect)(function(){L||R(),g&&R()},[]),(0,b.jsx)(m.default,i()(i()({},D),{},{options:S,onSearch:D.showSearch?o().debounce(R,500):void 0,onDropdownVisibleChange:function(d){d&&L&&T&&(Z||!g)&&R()}}))}},801:function(_,t,e){e.r(t);var l=e(28061);t.default=l.FetchSelect},58021:function(_,t,e){e.r(t),e.d(t,{texts:function(){return i}});var l=e(23659);const i=[{value:"\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u7684Select,\u4F8B\u5982\u5217\u8868\u573A\u666F\u4E0B\u4F7F\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u884C\u6570\u636E\u4E2D\u7EC4\u88C5initialValueOption,\u6EE1\u8DB3Select\u5728\u4E0D\u8BF7\u6C42\u6570\u636E\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F4\u63A5\u6E32\u67D3Select\u7684\u573A\u666F",paraId:0,tocIndex:0}]},44750:function(_,t){t.Z=`import React from 'react';
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
`},8841:function(_,t){t.Z=`import { Button } from 'antd';
import React, { useState } from 'react';
import FetchSelect from '../index';

export default () => {
  const [value, setValue] = React.useState(3);
  const [initialValueOption, setInitialValueOption] = useState<any>();
  return (
    <div>
      <FetchSelect
        fetchRequest={() => {
          return Promise.resolve([
            { id: 1, name: '\u5C0F\u660E' },
            { id: 2, name: '\u5C0F\u7EA2' },
          ]);
        }}
        fieldNames={{ label: 'name', value: 'id' }}
        dropdownFetch={true}
        initialValueOption={initialValueOption}
        fixedOptions={[{ id: 4, name: '\u5C0F\u84DD' }]}
        value={value}
        onChange={setValue}
      />
      <Button
        onClick={() => {
          setInitialValueOption({ id: 3, name: '\u5C0F\u7EA2' });
        }}
      >
        \u8BBE\u7F6E\u521D\u59CB\u9009\u9879
      </Button>
    </div>
  );
};
`},75415:function(_,t){t.Z=`import { Select, SelectProps } from 'antd';
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
  cacheKey?: string;
  cacheExpire?: number;
} & Omit<SelectProps, 'options' | 'onDropdownVisibleChange'>;
export const FetchSelect: FC<FetchSelectProps> = ({
  initialValueOption,
  fixedOptions,
  dropdownFetch = false,
  fetchEnable = true,
  fetchAlways = false,
  fetchRequest,
  cacheKey,
  cacheExpire = 0,
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
      const data = SessionStorageUtils.getExpireItem(cacheKey, true);
      if (data) {
        setOptions([...(fixedOptions || []), ...(data || [])]);
        setFetched(true);
        return;
      }
      request
        .then((data) => {
          setOptions([...(fixedOptions || []), ...(data || [])]);
          SessionStorageUtils.setExpireItem(cacheKey, data, cacheExpire);
        })
        .finally(() => {
          setFetched(true);
        });
    },
    [fetchRequest],
  );

  useEffect(() => {
    if (initialValueOption) {
      if (_.isEmpty(options)) {
        setOptions(_.concat([], fixedOptions || [], initialValueOption || []));
      } else {
        if (
          !_.find(
            options || [],
            (item) =>
              _.get(item, props.fieldNames?.value ?? 'value') ===
              _.get(initialValueOption, props.fieldNames?.value ?? 'value'),
          )
        ) {
          setOptions(_.concat([], options, initialValueOption));
        }
      }
    }
  }, [initialValueOption]);

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
      onSearch={props.showSearch ? _.debounce(handleQuery, 500) : undefined}
      onDropdownVisibleChange={(open) => {
        if (open && dropdownFetch && fetchEnable && (fetchAlways || !fetched)) {
          handleQuery();
        }
      }}
    />
  );
};
`},81867:function(_,t){t.Z=`import { FetchSelect, FetchSelectProps } from './fetch-select';

export type { FetchSelectProps };
export default FetchSelect;
`}}]);
