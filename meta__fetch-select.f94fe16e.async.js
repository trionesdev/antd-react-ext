"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[7007],{69327:function(c,t,e){var _;e.r(t),e.d(t,{demos:function(){return b}});var m=e(15009),h=e.n(m),f=e(99289),x=e.n(f),o=e(67294),M=e(23659),r=e(801),i=e(28061),l=e(42025),n=e(96486),v=e.n(n),E=e(27697),b={"fetch-select-demo-base":{component:o.memo(o.lazy(function(){return e.e(5494).then(e.bind(e,44661))})),asset:{type:"BLOCK",id:"fetch-select-demo-base",refAtomIds:["fetch-select"],dependencies:{"index.tsx":{type:"FILE",value:e(44750).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(81867).Z},"./fetch-select.tsx":{type:"FILE",value:e(75415).Z},antd:{type:"NPM",value:"5.25.1"},lodash:{type:"NPM",value:"4.17.21"},"../util/SessionStorageUtils.ts":{type:"FILE",value:e(40105).Z}},entry:"index.tsx"},context:{"../index.tsx":r,"./fetch-select.tsx":i,"../util/SessionStorageUtils.ts":E,react:_||(_=e.t(o,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/index.tsx":r,"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/fetch-select.tsx":i,antd:l,lodash:n,"/home/runner/work/antd-react-ext/antd-react-ext/src/util/SessionStorageUtils.ts":E},renderOpts:{compile:function(){var y=x()(h()().mark(function I(){var s,d=arguments;return h()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,d));case 3:case"end":return a.stop()}},I)}));function D(){return y.apply(this,arguments)}return D}()}},"fetch-select-demo-set-initial-option":{component:o.memo(o.lazy(function(){return e.e(5494).then(e.bind(e,29400))})),asset:{type:"BLOCK",id:"fetch-select-demo-set-initial-option",refAtomIds:["fetch-select"],dependencies:{"index.tsx":{type:"FILE",value:e(8841).Z},antd:{type:"NPM",value:"5.25.1"},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(81867).Z},"./fetch-select.tsx":{type:"FILE",value:e(75415).Z},lodash:{type:"NPM",value:"4.17.21"},"../util/SessionStorageUtils.ts":{type:"FILE",value:e(40105).Z}},entry:"index.tsx"},context:{"../index.tsx":r,"./fetch-select.tsx":i,"../util/SessionStorageUtils.ts":E,antd:l,react:_||(_=e.t(o,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/index.tsx":r,"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/fetch-select.tsx":i,lodash:n,"/home/runner/work/antd-react-ext/antd-react-ext/src/util/SessionStorageUtils.ts":E},renderOpts:{compile:function(){var y=x()(h()().mark(function I(){var s,d=arguments;return h()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,d));case 3:case"end":return a.stop()}},I)}));function D(){return y.apply(this,arguments)}return D}()}}}},28061:function(c,t,e){e.r(t),e.d(t,{FetchSelect:function(){return D}});var _=e(97857),m=e.n(_),h=e(19632),f=e.n(h),x=e(5574),o=e.n(x),M=e(13769),r=e.n(M),i=e(34041),l=e(96486),n=e.n(l),v=e(67294),E=e(27697),b=e(85893),y=["initialValueOption","fixedOptions","dropdownFetch","fetchEnable","fetchAlways","fetchRequest","cacheKey","cacheExpire"],D=function(s){var d=s.initialValueOption,O=s.fixedOptions,a=s.dropdownFetch,K=a===void 0?!1:a,j=s.fetchEnable,B=j===void 0?!0:j,F=s.fetchAlways,Z=F===void 0?!1:F,U=s.fetchRequest,T=s.cacheKey,W=s.cacheExpire,w=W===void 0?0:W,S=r()(s,y),Q=(0,v.useState)(!1),V=o()(Q,2),J=V[0],N=V[1],z=(0,v.useState)(n().concat([],O||[],d||[])),$=o()(z,2),g=$[0],C=$[1],A=(0,v.useCallback)(function(R){var p=U&&B?U(R):Promise.resolve([]),u=E.SessionStorageUtils.getExpireItem(T,!0);if(u){C([].concat(f()(O||[]),f()(u||[]))),N(!0);return}p.then(function(P){C([].concat(f()(O||[]),f()(P||[]))),E.SessionStorageUtils.setExpireItem(T,P,w)}).finally(function(){N(!0)})},[U]);return(0,v.useEffect)(function(){d&&(n().isEmpty(g)?C(n().concat([],O||[],d||[])):n().find(g||[],function(R){var p,u,P,L;return n().get(R,(p=(u=S.fieldNames)===null||u===void 0?void 0:u.value)!==null&&p!==void 0?p:"value")===n().get(d,(P=(L=S.fieldNames)===null||L===void 0?void 0:L.value)!==null&&P!==void 0?P:"value")})||C(n().concat([],g,d)))},[d]),(0,v.useEffect)(function(){K||A()},[]),(0,b.jsx)(i.default,m()(m()({},S),{},{options:g,onSearch:S.showSearch?n().debounce(A,500):void 0,onOpenChange:function(p){var u;p&&K&&B&&(Z||!J)&&A(),(u=S.onOpenChange)===null||u===void 0||u.call(S,p)}}))}},801:function(c,t,e){e.r(t);var _=e(28061);t.default=_.FetchSelect},27697:function(c,t,e){e.r(t),e.d(t,{SessionStorageUtils:function(){return x}});var _=e(12444),m=e.n(_),h=e(72004),f=e.n(h),x=function(){function o(){m()(this,o)}return f()(o,null,[{key:"setExpireItem",value:function(r,i,l){!r||!i||sessionStorage.setItem(r,JSON.stringify({data:i,expire:Date.now()+(l!=null?l:0)*1e3}))}},{key:"getExpireItem",value:function(r,i){if(!r)return null;var l=sessionStorage.getItem(r);if(l){var n=JSON.parse(l);return Date.now()>n.expire?(sessionStorage.removeItem(r),null):n==null?void 0:n.data}}}]),o}()},58021:function(c,t,e){e.r(t),e.d(t,{texts:function(){return m}});var _=e(23659);const m=[{value:"\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u7684Select,\u4F8B\u5982\u5217\u8868\u573A\u666F\u4E0B\u4F7F\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u884C\u6570\u636E\u4E2D\u7EC4\u88C5initialValueOption,\u6EE1\u8DB3Select\u5728\u4E0D\u8BF7\u6C42\u6570\u636E\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F4\u63A5\u6E32\u67D3Select\u7684\u573A\u666F",paraId:0,tocIndex:0}]},44750:function(c,t){t.Z=`import React from 'react';
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
`},8841:function(c,t){t.Z=`import { Button } from 'antd';
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
`},75415:function(c,t){t.Z=`import { Select, SelectProps } from 'antd';
import _ from 'lodash';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { SessionStorageUtils } from '../util/SessionStorageUtils';

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
        .then((data: any) => {
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
            (item: any) =>
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
  }, []);

  return (
    <Select
      {...props}
      options={options}
      onSearch={props.showSearch ? _.debounce(handleQuery, 500) : undefined}
      onOpenChange={(open: boolean) => {
        if (open && dropdownFetch && fetchEnable && (fetchAlways || !fetched)) {
          handleQuery();
        }
        props.onOpenChange?.(open);
      }}
    />
  );
};
`},81867:function(c,t){t.Z=`import { FetchSelect, FetchSelectProps } from './fetch-select';

export type { FetchSelectProps };
export default FetchSelect;
`},40105:function(c,t){t.Z=`type StorageDataType = {
  data: any;
  expire: number;
};
export class SessionStorageUtils {
  static setExpireItem(key?: string, data?: any, expire?: number) {
    if (!key || !data) {
      return;
    }
    sessionStorage.setItem(
      key,
      JSON.stringify({
        data,
        expire: Date.now() + (expire ?? 0) * 1000,
      }),
    );
  }

  static getExpireItem(key?: string, expireRemove?: boolean) {
    if (!key) {
      return null;
    }
    const val = sessionStorage.getItem(key!);
    if (val) {
      const storageData = JSON.parse(val);
      if (Date.now() > storageData.expire) {
        sessionStorage.removeItem(key!);
        return null;
      } else {
        return storageData?.data;
      }
    }
  }
}
`}}]);
