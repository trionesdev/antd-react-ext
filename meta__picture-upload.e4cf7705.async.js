"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[2575],{38131:function(_,n,e){var s;e.r(n),e.d(n,{demos:function(){return U}});var a=e(15009),i=e.n(a),m=e(99289),u=e.n(m),l=e(67294),Z=e(89397),h=e(36916),P=e(8875),B=e(3921),j=e(62760),S=e(33939),g=e(93967),F=e.n(g),x=e(51418),U={"picture-upload-demo-base":{component:l.memo(l.lazy(function(){return e.e(5907).then(e.bind(e,27866))})),asset:{type:"BLOCK",id:"picture-upload-demo-base",refAtomIds:["picture-upload"],dependencies:{"index.tsx":{type:"FILE",value:e(3036).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(7992).Z},"./PictureUpload.tsx":{type:"FILE",value:e(1118).Z},"@ant-design/icons":{type:"NPM",value:"5.5.1"},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.5"},antd:{type:"NPM",value:"5.22.2"},classnames:{type:"NPM",value:"2.5.1"},"./styles.ts":{type:"FILE",value:e(94095).Z}},entry:"index.tsx"},context:{"../index.tsx":h,"./PictureUpload.tsx":P,"./styles.ts":x,react:s||(s=e.t(l,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/picture-upload/index.tsx":h,"/home/runner/work/antd-react-ext/antd-react-ext/src/picture-upload/PictureUpload.tsx":P,"@ant-design/icons":B,"@trionesdev/antd-react-ext":j,antd:S,classnames:g,"/home/runner/work/antd-react-ext/antd-react-ext/src/picture-upload/styles.ts":x},renderOpts:{compile:function(){var M=u()(i()().mark(function v(){var d,A=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(7335).then(e.bind(e,37335));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,A));case 3:case"end":return o.stop()}},v)}));function T(){return M.apply(this,arguments)}return T}()}}}},8875:function(_,n,e){e.r(n),e.d(n,{PictureUpload:function(){return o}});var s=e(97857),a=e.n(s),i=e(15009),m=e.n(i),u=e(99289),l=e.n(u),Z=e(5574),h=e.n(Z),P=e(88484),B=e(62760),j=e(45360),S=e(57381),g=e(57020),F=e(42075),x=e(96074),U=e(23799),M=e(28036),T=e(93967),v=e.n(T),d=e(67294),A=e(51418),t=e(85893),o=function(r){var D=r.value,K=r.onChange,q=r.style,ee=r.className,V=r.width,O=V===void 0?320:V,$=r.height,y=$===void 0?180:$,z=r.preview,ne=z===void 0?!0:z,W=r.limitSize,G=r.accept,J=G===void 0?".jpg,.jpeg,.png,.webp,.svg":G,R=r.uploadRequest,te=(0,d.useState)(D),X=h()(te,2),E=X[0],C=X[1],ae=(0,d.useState)(!1),H=h()(ae,2),re=H[0],Q=H[1],se=function(c,p){var L=new FileReader;L.addEventListener("load",function(){return p(L.result)}),L.readAsDataURL(c)},_e=function(c){return W&&c.file.size>W?(j.ZP.warning("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7"+W/1024+"KB"),!1):!0},Y=function(){var b=l()(m()().mark(function c(p){return m()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(p.file){f.next=2;break}return f.abrupt("return");case 2:R?(Q(!0),R==null||R(p.file).then(function(N){C(N)}).finally(function(){Q(!1)})):se(p.file,function(N){C(N)});case 3:case"end":return f.stop()}},c)}));return function(p){return b.apply(this,arguments)}}(),oe=function(){C("")};(0,d.useEffect)(function(){D!==E&&C(D)},[D]),(0,d.useEffect)(function(){K==null||K(E)},[E]);var I="triones-picture-upload",k=(0,B.useCssInJs)({prefix:I,styleFun:A.genPictureUploadStyle}),le=k.wrapSSR,w=k.hashId;return le((0,t.jsx)("div",{className:v()(ee,I,w),style:a()({width:O,height:y},q),children:(0,t.jsx)(S.Z,{spinning:re,children:(0,t.jsx)("div",{style:{width:O,height:y,display:"inline-block"},children:E?(0,t.jsxs)("div",{className:v()("".concat(I,"-image"),w),children:[(0,t.jsx)(g.Z,{preview:ne,src:E,width:O,height:y}),(0,t.jsx)("div",{className:v()("".concat(I,"-image-tooltip"),w),children:(0,t.jsxs)(F.Z,{split:(0,t.jsx)(x.Z,{type:"vertical"}),children:[(0,t.jsx)(U.Z,{customRequest:Y,showUploadList:!1,accept:J,beforeUpload:_e,children:(0,t.jsx)(M.ZP,{type:"text",children:"\u66F4\u6362"})}),(0,t.jsx)(M.ZP,{type:"text",onClick:oe,children:"\u5220\u9664"})]})})]}):(0,t.jsx)(U.Z,{name:"avatar",listType:"picture-card",className:"avatar-uploader",style:{width:O,height:y},accept:J,showUploadList:!1,customRequest:Y,children:(0,t.jsx)(P.Z,{})})})})}))}},36916:function(_,n,e){e.r(n);var s=e(8875);n.default=s.PictureUpload},51418:function(_,n,e){e.r(n),e.d(n,{genPictureUploadStyle:function(){return i}});var s=e(9783),a=e.n(s),i=function(u,l){return a()({},".".concat(u),a()(a()({},"&-image",a()({position:"relative",objectFit:"cover",borderRadius:l.borderRadiusLG,"&:hover":a()({},".".concat(u,"-image-tooltip"),{visibility:"visible"}),".ant-image":{borderRadius:4,overflow:"hidden"}},"&-tooltip",{position:"absolute",left:"50%",bottom:8,transform:"translateX(-50%)",background:"rgba(18, 18, 18, 0.75) none repeat scroll 0% 0%",borderRadius:4,visibility:"hidden",button:{color:"white","&:hover":{color:"white!important"}},".ant-divider":{borderInlineStart:"1px solid white"}})),".ant-upload-wrapper",{width:"100%",height:"100%",display:"flex",".ant-upload":{width:"100%!important",height:"100%!important"}}))}},71222:function(_,n,e){e.r(n),e.d(n,{texts:function(){return a}});var s=e(89397);const a=[{value:"\u56FE\u7247\u4E0A\u4F20\u7EC4\u4EF6",paraId:0,tocIndex:0}]},1118:function(_,n){n.Z=`import { UploadOutlined } from '@ant-design/icons';
import { useCssInJs } from '@trionesdev/antd-react-ext';
import { Button, Divider, Image, Space, Spin, Upload, message } from 'antd';
import classNames from 'classnames';
import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { genPictureUploadStyle } from './styles';

type PictureUploadProps = {
  value?: string;
  onChange?: (value: string) => void;
  style?: CSSProperties;
  className?: string;
  width?: number;
  height?: number;
  preview?: boolean;
  /**
   * @description \u53EF\u9009\u62E9\u7684\u6587\u4EF6\u7C7B\u578B
   * @default .jpg,.jpeg,.png,.webp,.svg
   */
  accept?: string;
  /**
   * @description \u5927\u5C0F\u9650\u5236\uFF0C\u5355\u4F4D\uFF1A\u5B57\u8282
   * @default
   */
  limitSize?: number;
  /**
   * @description \u4E0A\u4F20\u8BF7\u6C42\uFF0C\u8FD4\u56DE\u56FE\u7247\u5730\u5740
   * @default
   */
  uploadRequest?: (file: File) => Promise<string>;
};
export const PictureUpload: FC<PictureUploadProps> = ({
  value,
  onChange,
  style,
  className,
  width = 320,
  height = 180,
  preview = true,
  limitSize,
  accept = '.jpg,.jpeg,.png,.webp,.svg',
  uploadRequest,
}) => {
  const [scopeValue, setScopeValue] = useState<any>(value);
  const [loading, setLoading] = useState(false);

  const getBase64 = (img: any, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const handleBeforeUpload = (param: any) => {
    if (limitSize && param.file.size > limitSize) {
      message.warning('\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7' + limitSize / 1024 + 'KB');
      return false;
    }
    return true;
  };

  const handleUpload = async (param: any) => {
    if (!param.file) {
      return;
    }

    if (uploadRequest) {
      setLoading(true);
      uploadRequest?.(param.file)
        .then((url) => {
          setScopeValue(url);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getBase64(param.file, (url) => {
        setScopeValue(url);
      });
    }
  };

  const handleClean = () => {
    setScopeValue('');
  };

  useEffect(() => {
    if (value !== scopeValue) {
      setScopeValue(value);
    }
  }, [value]);

  useEffect(() => {
    onChange?.(scopeValue);
  }, [scopeValue]);

  const prefixCls = \`triones-picture-upload\`;
  const { wrapSSR, hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genPictureUploadStyle,
  });
  return wrapSSR(
    <div
      className={classNames(className, prefixCls, hashId)}
      style={{ width: width, height: height, ...style }}
    >
      <Spin spinning={loading}>
        <div style={{ width: width, height: height, display: 'inline-block' }}>
          {scopeValue ? (
            <div className={classNames(\`\${prefixCls}-image\`, hashId)}>
              <Image
                preview={preview}
                src={scopeValue}
                width={width}
                height={height}
              />
              <div className={classNames(\`\${prefixCls}-image-tooltip\`, hashId)}>
                <Space split={<Divider type="vertical" />}>
                  <Upload
                    customRequest={handleUpload}
                    showUploadList={false}
                    accept={accept}
                    beforeUpload={handleBeforeUpload}
                  >
                    <Button type="text">\u66F4\u6362</Button>
                  </Upload>
                  <Button type="text" onClick={handleClean}>
                    \u5220\u9664
                  </Button>
                </Space>
              </div>
            </div>
          ) : (
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              style={{ width: width, height: height }}
              accept={accept}
              showUploadList={false}
              customRequest={handleUpload}
            >
              <UploadOutlined />
            </Upload>
          )}
        </div>
      </Spin>
    </div>,
  );
};
`},3036:function(_,n){n.Z=`import React from 'react';
import PictureUpload from '../index';

export default () => {
  return <PictureUpload />;
};
`},7992:function(_,n){n.Z=`import { PictureUpload } from './PictureUpload';
export default PictureUpload;
`},94095:function(_,n){n.Z=`import { GlobalToken } from 'antd';

export const genPictureUploadStyle = (
  prefixCls: string,
  token: GlobalToken,
): any => {
  return {
    [\`.\${prefixCls}\`]: {
      [\`&-image\`]: {
        position: 'relative',
        objectFit: 'cover',
        borderRadius: token.borderRadiusLG,
        '&:hover': {
          [\`.\${prefixCls}-image-tooltip\`]: {
            visibility: 'visible',
          },
        },
        '.ant-image': {
          borderRadius: 4,
          overflow: 'hidden',
        },
        [\`&-tooltip\`]: {
          position: 'absolute',
          left: '50%',
          bottom: 8,
          transform: 'translateX(-50%)',
          background: 'rgba(18, 18, 18, 0.75) none repeat scroll 0% 0%',
          borderRadius: 4,
          visibility: 'hidden',
          button: {
            color: 'white',
            '&:hover': {
              color: 'white!important',
            },
          },
          '.ant-divider': {
            borderInlineStart: '1px solid white',
          },
        },
      },
      '.ant-upload-wrapper': {
        width: '100%',
        height: '100%',
        display: 'flex',
        '.ant-upload': {
          width: '100%!important',
          height: '100%!important',
        },
      },
    },
  };
};
`}}]);
