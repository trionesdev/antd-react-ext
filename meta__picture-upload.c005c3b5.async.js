"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[2575],{31219:function(r,n,e){e.r(n),e.d(n,{demos:function(){return p}});var o=e(97983),a=e.n(o),_=e(40794),c=e.n(_),i=e(67294),p={"picture-upload-demo-base":{component:i.memo(i.lazy(function(){return e.e(5907).then(e.bind(e,73775))})),asset:{type:"BLOCK",id:"picture-upload-demo-base",refAtomIds:["picture-upload"],dependencies:{"index.tsx":{type:"FILE",value:e(3036).Z},react:{type:"NPM",value:"18.2.0"},"../index.tsx":{type:"FILE",value:e(7992).Z},"./PictureUpload.tsx":{type:"FILE",value:e(1118).Z},"@ant-design/icons":{type:"NPM",value:"5.3.7"},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.2"},antd:{type:"NPM",value:"5.18.0"},classnames:{type:"NPM",value:"2.5.1"},"./styles.ts":{type:"FILE",value:e(94095).Z}},entry:"index.tsx"},context:{react:e(67294),"../index.tsx":e(94209),"./PictureUpload.tsx":e(91550),"@ant-design/icons":e(10294),"@trionesdev/antd-react-ext":e(31021),antd:e(46869),classnames:e(93967),"./styles.ts":e(81981)},renderOpts:{compile:function(){var R=c()(a()().mark(function C(){var f,j=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(9944).then(e.bind(e,99944));case 2:return l.abrupt("return",(f=l.sent).default.apply(f,j));case 3:case"end":return l.stop()}},C)}));function v(){return R.apply(this,arguments)}return v}()}}}},91550:function(r,n,e){e.r(n),e.d(n,{PictureUpload:function(){return k}});var o=e(11281),a=e.n(o),_=e(97983),c=e.n(_),i=e(40794),p=e.n(i),R=e(12741),v=e.n(R),C=e(21895),f=e(31021),j=e(45360),b=e(57381),l=e(29541),X=e(42075),H=e(96074),A=e(23799),K=e(14726),Q=e(93967),I=e.n(Q),E=e(67294),Y=e(81981),t=e(85893),k=function(s){var g=s.value,S=s.onChange,q=s.style,ee=s.className,W=s.width,P=W===void 0?320:W,w=s.height,x=w===void 0?180:w,N=s.preview,ne=N===void 0?!0:N,L=s.limitSize,Z=s.accept,F=Z===void 0?".jpg,.jpeg,.png,.webp,.svg":Z,U=s.uploadRequest,te=(0,E.useState)(g),V=v()(te,2),m=V[0],y=V[1],ae=(0,E.useState)(!1),$=v()(ae,2),se=$[0],z=$[1],oe=function(d,u){var O=new FileReader;O.addEventListener("load",function(){return u(O.result)}),O.readAsDataURL(d)},re=function(d){return L&&d.file.size>L?(j.ZP.warning("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7"+L/1024+"KB"),!1):!0},G=function(){var D=p()(c()().mark(function d(u){return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(u.file){h.next=2;break}return h.abrupt("return");case 2:U?(z(!0),U==null||U(u.file).then(function(T){y(T)}).finally(function(){z(!1)})):oe(u.file,function(T){y(T)});case 3:case"end":return h.stop()}},d)}));return function(u){return D.apply(this,arguments)}}(),le=function(){y("")};(0,E.useEffect)(function(){g!==m&&y(g)},[g]),(0,E.useEffect)(function(){S==null||S(m)},[m]);var M="triones-picture-upload",J=(0,f.useCssInJs)({prefix:M,styleFun:Y.genPictureUploadStyle}),ie=J.wrapSSR,B=J.hashId;return ie((0,t.jsx)("div",{className:I()(ee,M,B),style:a()({width:P,height:x},q),children:(0,t.jsx)(b.Z,{spinning:se,children:(0,t.jsx)("div",{style:{width:P,height:x,display:"inline-block"},children:m?(0,t.jsxs)("div",{className:I()("".concat(M,"-image"),B),children:[(0,t.jsx)(l.Z,{preview:ne,src:m,width:P,height:x}),(0,t.jsx)("div",{className:I()("".concat(M,"-image-tooltip"),B),children:(0,t.jsxs)(X.Z,{split:(0,t.jsx)(H.Z,{type:"vertical"}),children:[(0,t.jsx)(A.Z,{customRequest:G,showUploadList:!1,accept:F,beforeUpload:re,children:(0,t.jsx)(K.ZP,{type:"text",children:"\u66F4\u6362"})}),(0,t.jsx)(K.ZP,{type:"text",onClick:le,children:"\u5220\u9664"})]})})]}):(0,t.jsx)(A.Z,{name:"avatar",listType:"picture-card",className:"avatar-uploader",style:{width:P,height:x},accept:F,showUploadList:!1,customRequest:G,children:(0,t.jsx)(C.Z,{})})})})}))}},94209:function(r,n,e){e.r(n);var o=e(91550);n.default=o.PictureUpload},81981:function(r,n,e){e.r(n),e.d(n,{genPictureUploadStyle:function(){return _}});var o=e(12812),a=e.n(o),_=function(i,p){return a()({},".".concat(i),a()(a()({},"&-image",a()({position:"relative",objectFit:"cover",borderRadius:p.borderRadiusLG,"&:hover":a()({},".".concat(i,"-image-tooltip"),{visibility:"visible"}),".ant-image":{borderRadius:4,overflow:"hidden"}},"&-tooltip",{position:"absolute",left:"50%",bottom:8,transform:"translateX(-50%)",background:"rgba(18, 18, 18, 0.75) none repeat scroll 0% 0%",borderRadius:4,visibility:"hidden",button:{color:"white","&:hover":{color:"white!important"}},".ant-divider":{borderInlineStart:"1px solid white"}})),".ant-upload-wrapper",{width:"100%",height:"100%",display:"flex",".ant-upload":{width:"100%!important",height:"100%!important"}}))}},86357:function(r,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u56FE\u7247\u4E0A\u4F20\u7EC4\u4EF6",paraId:0,tocIndex:0}]},1118:function(r,n){n.Z=`import { UploadOutlined } from '@ant-design/icons';
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
`},3036:function(r,n){n.Z=`import React from 'react';
import PictureUpload from '../index';

export default () => {
  return <PictureUpload />;
};
`},7992:function(r,n){n.Z=`import { PictureUpload } from './PictureUpload';
export default PictureUpload;
`},94095:function(r,n){n.Z=`import { GlobalToken } from 'antd';

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
