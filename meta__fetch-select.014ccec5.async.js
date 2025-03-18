"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[7007],{69327:function(r,t,e){var l;e.r(t),e.d(t,{demos:function(){return S}});var i=e(15009),u=e.n(i),O=e(99289),x=e.n(O),_=e(67294),L=e(23659),c=e(801),m=e(28061),P=e(34445),o=e(96486),f=e.n(o),S={"fetch-select-demo-base":{component:_.memo(_.lazy(function(){return e.e(5494).then(e.bind(e,44661))})),asset:{type:"BLOCK",id:"fetch-select-demo-base",refAtomIds:["fetch-select"],dependencies:{"index.tsx":{type:"FILE",value:e(44750).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(81867).Z},"./fetch-select.tsx":{type:"FILE",value:e(75415).Z},antd:{type:"NPM",value:"5.24.4"},lodash:{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"../index.tsx":c,"./fetch-select.tsx":m,react:l||(l=e.t(_,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/index.tsx":c,"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/fetch-select.tsx":m,antd:P,lodash:o},renderOpts:{compile:function(){var h=x()(u()().mark(function M(){var a,s=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,s));case 3:case"end":return n.stop()}},M)}));function p(){return h.apply(this,arguments)}return p}()}},"fetch-select-demo-set-initial-option":{component:_.memo(_.lazy(function(){return e.e(5494).then(e.bind(e,29400))})),asset:{type:"BLOCK",id:"fetch-select-demo-set-initial-option",refAtomIds:["fetch-select"],dependencies:{"index.tsx":{type:"FILE",value:e(8841).Z},antd:{type:"NPM",value:"5.24.4"},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(81867).Z},"./fetch-select.tsx":{type:"FILE",value:e(75415).Z},lodash:{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"../index.tsx":c,"./fetch-select.tsx":m,antd:P,react:l||(l=e.t(_,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/index.tsx":c,"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/fetch-select.tsx":m,lodash:o},renderOpts:{compile:function(){var h=x()(u()().mark(function M(){var a,s=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,s));case 3:case"end":return n.stop()}},M)}));function p(){return h.apply(this,arguments)}return p}()}}}},28061:function(r,t,e){e.r(t),e.d(t,{FetchSelect:function(){return p}});var l=e(97857),i=e.n(l),u=e(19632),O=e.n(u),x=e(5574),_=e.n(x),L=e(13769),c=e.n(L),m=e(34041),P=e(96486),o=e.n(P),f=e(67294),S=e(85893),h=["initialValueOption","fixedOptions","dropdownFetch","fetchEnable","fetchAlways","fetchRequest"],p=function(a){var s=a.initialValueOption,E=a.fixedOptions,n=a.dropdownFetch,B=n===void 0?!1:n,T=a.fetchEnable,j=T===void 0?!0:T,K=a.fetchAlways,g=K===void 0?!1:K,A=a.fetchRequest,D=c()(a,h),N=(0,f.useState)(!1),V=_()(N,2),W=V[0],$=V[1],Z=(0,f.useState)(o().concat([],E||[],s||[])),U=_()(Z,2),y=U[0],b=U[1],C=(0,f.useCallback)(function(R){var d=A&&j?A(R):Promise.resolve([]);d.then(function(v){b([].concat(O()(E||[]),O()(v||[])))}).finally(function(){$(!0)})},[A]);return(0,f.useEffect)(function(){s&&(o().isEmpty(y)?b(o().concat([],E||[],s||[])):o().find(y||[],function(R){var d,v,I,F;return o().get(R,(d=(v=D.fieldNames)===null||v===void 0?void 0:v.value)!==null&&d!==void 0?d:"value")===o().get(s,(I=(F=D.fieldNames)===null||F===void 0?void 0:F.value)!==null&&I!==void 0?I:"value")})||b(o().concat([],y,s)))},[s]),(0,f.useEffect)(function(){B||C(),W&&C()},[]),(0,S.jsx)(m.default,i()(i()({},D),{},{options:y,onSearch:D.showSearch?C:void 0,onDropdownVisibleChange:function(d){d&&B&&j&&(g||!W)&&C()}}))}},801:function(r,t,e){e.r(t);var l=e(28061);t.default=l.FetchSelect},58021:function(r,t,e){e.r(t),e.d(t,{texts:function(){return i}});var l=e(23659);const i=[{value:"\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u7684Select,\u4F8B\u5982\u5217\u8868\u573A\u666F\u4E0B\u4F7F\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u884C\u6570\u636E\u4E2D\u7EC4\u88C5initialValueOption,\u6EE1\u8DB3Select\u5728\u4E0D\u8BF7\u6C42\u6570\u636E\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F4\u63A5\u6E32\u67D3Select\u7684\u573A\u666F",paraId:0,tocIndex:0}]},44750:function(r,t){t.Z=`import React from 'react';
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
`},8841:function(r,t){t.Z=`import { Button } from 'antd';
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
`},75415:function(r,t){t.Z=`import { Select, SelectProps } from 'antd';
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
      onSearch={props.showSearch ? handleQuery : undefined}
      onDropdownVisibleChange={(open) => {
        if (open && dropdownFetch && fetchEnable && (fetchAlways || !fetched)) {
          handleQuery();
        }
      }}
    />
  );
};
`},81867:function(r,t){t.Z=`import { FetchSelect, FetchSelectProps } from './fetch-select';

export type { FetchSelectProps };
export default FetchSelect;
`}}]);
