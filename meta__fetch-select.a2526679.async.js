"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[7007],{69327:function(r,t,e){var s;e.r(t),e.d(t,{demos:function(){return y}});var d=e(15009),c=e.n(d),E=e(99289),O=e.n(E),_=e(67294),A=e(23659),u=e(801),i=e(28061),x=e(34445),l=e(96486),m=e.n(l),y={"fetch-select-demo-base":{component:_.memo(_.lazy(function(){return e.e(5494).then(e.bind(e,44661))})),asset:{type:"BLOCK",id:"fetch-select-demo-base",refAtomIds:["fetch-select"],dependencies:{"index.tsx":{type:"FILE",value:e(44750).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(81867).Z},"./fetch-select.tsx":{type:"FILE",value:e(75415).Z},antd:{type:"NPM",value:"5.24.3"},lodash:{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"../index.tsx":u,"./fetch-select.tsx":i,react:s||(s=e.t(_,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/index.tsx":u,"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/fetch-select.tsx":i,antd:x,lodash:l},renderOpts:{compile:function(){var h=O()(c()().mark(function v(){var a,o=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},v)}));function f(){return h.apply(this,arguments)}return f}()}},"fetch-select-demo-set-initial-option":{component:_.memo(_.lazy(function(){return e.e(5494).then(e.bind(e,29400))})),asset:{type:"BLOCK",id:"fetch-select-demo-set-initial-option",refAtomIds:["fetch-select"],dependencies:{"index.tsx":{type:"FILE",value:e(8841).Z},antd:{type:"NPM",value:"5.24.3"},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(81867).Z},"./fetch-select.tsx":{type:"FILE",value:e(75415).Z},lodash:{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"../index.tsx":u,"./fetch-select.tsx":i,antd:x,react:s||(s=e.t(_,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/index.tsx":u,"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/fetch-select.tsx":i,lodash:l},renderOpts:{compile:function(){var h=O()(c()().mark(function v(){var a,o=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},v)}));function f(){return h.apply(this,arguments)}return f}()}}}},28061:function(r,t,e){e.r(t),e.d(t,{FetchSelect:function(){return f}});var s=e(97857),d=e.n(s),c=e(19632),E=e.n(c),O=e(5574),_=e.n(O),A=e(13769),u=e.n(A),i=e(34041),x=e(96486),l=e.n(x),m=e(67294),y=e(85893),h=["initialValueOption","fixedOptions","dropdownFetch","fetchEnable","fetchAlways","fetchRequest"],f=function(a){var o=a.initialValueOption,p=a.fixedOptions,n=a.dropdownFetch,b=n===void 0?!1:n,I=a.fetchEnable,F=I===void 0?!0:I,L=a.fetchAlways,W=L===void 0?!1:L,C=a.fetchRequest,B=u()(a,h),V=(0,m.useState)(!1),T=_()(V,2),j=T[0],U=T[1],g=(0,m.useState)(l().concat([],p||[],o||[])),K=_()(g,2),P=K[0],R=K[1],M=(0,m.useCallback)(function(D){var S=C&&F?C(D):Promise.resolve([]);S.then(function(Z){R([].concat(E()(p||[]),E()(Z||[])))}).finally(function(){U(!0)})},[C]);return(0,m.useEffect)(function(){l().isEmpty(P)?R(l().concat([],p||[],o||[])):l().find(P,function(D){return D.value===(o==null?void 0:o.value)})||R(l().concat(P,o))},[o]),(0,m.useEffect)(function(){b||M(),j&&M()},[]),(0,y.jsx)(i.default,d()(d()({},B),{},{options:P,onSearch:B.showSearch?M:void 0,onDropdownVisibleChange:function(S){S&&b&&F&&(W||!j)&&M()}}))}},801:function(r,t,e){e.r(t);var s=e(28061);t.default=s.FetchSelect},58021:function(r,t,e){e.r(t),e.d(t,{texts:function(){return d}});var s=e(23659);const d=[{value:"\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u7684Select,\u4F8B\u5982\u5217\u8868\u573A\u666F\u4E0B\u4F7F\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u884C\u6570\u636E\u4E2D\u7EC4\u88C5initialValueOption,\u6EE1\u8DB3Select\u5728\u4E0D\u8BF7\u6C42\u6570\u636E\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F4\u63A5\u6E32\u67D3Select\u7684\u573A\u666F",paraId:0,tocIndex:0}]},44750:function(r,t){t.Z=`import React from 'react';
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
  const [value, setValue] = React.useState(2);
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
        value={value}
        onChange={setValue}
      />
      <Button
        onClick={() => {
          setInitialValueOption({ id: 2, name: '\u5C0F\u7EA2' });
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
    if (_.isEmpty(options)) {
      setOptions(_.concat([], fixedOptions || [], initialValueOption || []));
    } else {
      if (
        !_.find(options, (item) => item.value === initialValueOption?.value)
      ) {
        setOptions(_.concat(options, initialValueOption));
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
