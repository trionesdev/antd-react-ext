"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[7007],{69327:function(d,t,e){var l;e.r(t),e.d(t,{demos:function(){return I}});var x=e(15009),c=e.n(x),m=e(99289),v=e.n(m),s=e(67294),h=e(801),o=e(28061),f=e(42025),_=e(96486),a=e.n(_),i=e(27697),I={"fetch-select-demo-base":{component:s.memo(s.lazy(function(){return e.e(5494).then(e.bind(e,44661))})),asset:{type:"BLOCK",id:"fetch-select-demo-base",refAtomIds:["fetch-select"],dependencies:{"index.tsx":{type:"FILE",value:e(44750).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(81867).Z},"./fetch-select.tsx":{type:"FILE",value:e(75415).Z},antd:{type:"NPM",value:"5.25.3"},lodash:{type:"NPM",value:"4.17.21"},"../util/SessionStorageUtils.ts":{type:"FILE",value:e(40105).Z}},entry:"index.tsx"},context:{"../index.tsx":h,"./fetch-select.tsx":o,"../util/SessionStorageUtils.ts":i,react:l||(l=e.t(s,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/index.tsx":h,"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/fetch-select.tsx":o,antd:f,lodash:_,"/home/runner/work/antd-react-ext/antd-react-ext/src/util/SessionStorageUtils.ts":i},renderOpts:{compile:function(){var y=v()(c()().mark(function M(){var O,r=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(O=n.sent).default.apply(O,r));case 3:case"end":return n.stop()}},M)}));function D(){return y.apply(this,arguments)}return D}()}},"fetch-select-demo-set-initial-option":{component:s.memo(s.lazy(function(){return e.e(5494).then(e.bind(e,29400))})),asset:{type:"BLOCK",id:"fetch-select-demo-set-initial-option",refAtomIds:["fetch-select"],dependencies:{"index.tsx":{type:"FILE",value:e(8841).Z},antd:{type:"NPM",value:"5.25.3"},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(81867).Z},"./fetch-select.tsx":{type:"FILE",value:e(75415).Z},lodash:{type:"NPM",value:"4.17.21"},"../util/SessionStorageUtils.ts":{type:"FILE",value:e(40105).Z}},entry:"index.tsx"},context:{"../index.tsx":h,"./fetch-select.tsx":o,"../util/SessionStorageUtils.ts":i,antd:f,react:l||(l=e.t(s,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/index.tsx":h,"/home/runner/work/antd-react-ext/antd-react-ext/src/fetch-select/fetch-select.tsx":o,lodash:_,"/home/runner/work/antd-react-ext/antd-react-ext/src/util/SessionStorageUtils.ts":i},renderOpts:{compile:function(){var y=v()(c()().mark(function M(){var O,r=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(O=n.sent).default.apply(O,r));case 3:case"end":return n.stop()}},M)}));function D(){return y.apply(this,arguments)}return D}()}}}},28061:function(d,t,e){e.r(t),e.d(t,{FetchSelect:function(){return M}});var l=e(97857),x=e.n(l),c=e(19632),m=e.n(c),v=e(5574),s=e.n(v),h=e(13769),o=e.n(h),f=e(34041),_=e(96486),a=e.n(_),i=e(67294),I=e(27697),y=e(85893),D=["initialValueOption","fixedOptions","dropdownFetch","fetchEnable","fetchAlways","fetchRequest","cacheKey","cacheExpire"],M=function(r){var p=r.initialValueOption,n=r.fixedOptions,L=r.dropdownFetch,K=L===void 0?!1:L,j=r.fetchEnable,F=j===void 0?!0:j,B=r.fetchAlways,Z=B===void 0?!1:B,R=r.fetchRequest,T=r.cacheKey,W=r.cacheExpire,w=W===void 0?0:W,S=o()(r,D),Q=(0,i.useState)(!1),V=s()(Q,2),J=V[0],N=V[1],z=(0,i.useState)(a().concat([],n||[],p||[])),$=s()(z,2),g=$[0],C=$[1],U=(0,i.useCallback)(function(b){var E=R&&F?R(b):Promise.resolve([]),u=I.SessionStorageUtils.getExpireItem(T,!0);if(u){C([].concat(m()(n||[]),m()(u||[]))),N(!0);return}E.then(function(P){C([].concat(m()(n||[]),m()(P||[]))),I.SessionStorageUtils.setExpireItem(T,P,w)}).finally(function(){N(!0)})},[R]);return(0,i.useEffect)(function(){p&&(a().isEmpty(g)?C(a().concat([],n||[],p||[])):a().find(g||[],function(b){var E,u,P,A;return a().get(b,(E=(u=S.fieldNames)===null||u===void 0?void 0:u.value)!==null&&E!==void 0?E:"value")===a().get(p,(P=(A=S.fieldNames)===null||A===void 0?void 0:A.value)!==null&&P!==void 0?P:"value")})||C(a().concat([],g,p)))},[p]),(0,i.useEffect)(function(){K||U()},[]),(0,y.jsx)(f.default,x()(x()({},S),{},{options:g,onSearch:S.showSearch?a().debounce(U,500):void 0,onOpenChange:function(E){var u;E&&K&&F&&(Z||!J)&&U(),(u=S.onOpenChange)===null||u===void 0||u.call(S,E)}}))}},801:function(d,t,e){e.r(t);var l=e(28061);t.default=l.FetchSelect},27697:function(d,t,e){e.r(t),e.d(t,{SessionStorageUtils:function(){return v}});var l=e(12444),x=e.n(l),c=e(72004),m=e.n(c),v=function(){function s(){x()(this,s)}return m()(s,null,[{key:"setExpireItem",value:function(o,f,_){!o||!f||sessionStorage.setItem(o,JSON.stringify({data:f,expire:Date.now()+(_!=null?_:0)*1e3}))}},{key:"getExpireItem",value:function(o,f){if(!o)return null;var _=sessionStorage.getItem(o);if(_){var a=JSON.parse(_);return Date.now()>a.expire?(sessionStorage.removeItem(o),null):a==null?void 0:a.data}}}]),s}()},58021:function(d,t,e){e.r(t),e.d(t,{texts:function(){return l}});const l=[{value:"\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u7684Select,\u4F8B\u5982\u5217\u8868\u573A\u666F\u4E0B\u4F7F\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u884C\u6570\u636E\u4E2D\u7EC4\u88C5initialValueOption,\u6EE1\u8DB3Select\u5728\u4E0D\u8BF7\u6C42\u6570\u636E\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F4\u63A5\u6E32\u67D3Select\u7684\u573A\u666F",paraId:0,tocIndex:0}]},44750:function(d,t){t.Z=`import React from 'react';
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
`},8841:function(d,t){t.Z=`import { Button } from 'antd';
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
`},75415:function(d,t){t.Z=`import { Select, SelectProps } from 'antd';
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
`},81867:function(d,t){t.Z=`import { FetchSelect, FetchSelectProps } from './fetch-select';

export type { FetchSelectProps };
export default FetchSelect;
`},40105:function(d,t){t.Z=`type StorageDataType = {
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
