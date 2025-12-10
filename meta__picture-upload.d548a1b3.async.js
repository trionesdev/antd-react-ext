"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[2575],{38131:function(a,e,n){var s;n.r(e),n.d(e,{demos:function(){return g}});var c=n(15009),o=n.n(c),m=n(99289),_=n.n(m),r=n(67294),i=n(36916),l=n(8875),h=n(83494),v=n(65567),f=n(71354),d=n(93967),U=n.n(d),u=n(51418),g={"picture-upload-demo-base":{component:r.memo(r.lazy(function(){return n.e(5907).then(n.bind(n,27866))})),asset:{type:"BLOCK",id:"picture-upload-demo-base",refAtomIds:["picture-upload"],dependencies:{"index.tsx":{type:"FILE",value:n(3036).Z},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(7992).Z},"./PictureUpload.tsx":{type:"FILE",value:n(1118).Z},"@ant-design/icons":{type:"NPM",value:"5.6.1"},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.0"},antd:{type:"NPM",value:"6.1.0"},classnames:{type:"NPM",value:"2.5.1"},"./styles.ts":{type:"FILE",value:n(94095).Z}},entry:"index.tsx"},context:{"../index.tsx":i,"./PictureUpload.tsx":l,"./styles.ts":u,react:s||(s=n.t(r,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/picture-upload/index.tsx":i,"/home/runner/work/antd-react-ext/antd-react-ext/src/picture-upload/PictureUpload.tsx":l,"@ant-design/icons":h,"@trionesdev/antd-react-ext":v,antd:f,classnames:d,"/home/runner/work/antd-react-ext/antd-react-ext/src/picture-upload/styles.ts":u},renderOpts:{compile:function(){var x=_()(o()().mark(function E(){var p,y=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,y));case 3:case"end":return t.stop()}},E)}));function P(){return x.apply(this,arguments)}return P}()}}}},71222:function(a,e,n){n.r(e),n.d(e,{texts:function(){return s}});const s=[{value:"\u56FE\u7247\u4E0A\u4F20\u7EC4\u4EF6",paraId:0,tocIndex:0}]},1118:function(a,e){e.Z=`import { UploadOutlined } from '@ant-design/icons';
import { useCssInJs } from '@trionesdev/antd-react-ext';
import {
  Button,
  Divider,
  Image,
  Space,
  Spin,
  Upload,
  message,
  Empty,
} from 'antd';
import classNames from 'classnames';
import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { genPictureUploadStyle } from './styles';

export type PictureUploadProps = {
  readonly?: boolean;
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
  readonly,
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
  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genPictureUploadStyle,
  });
  return (
    <div
      className={classNames(className, prefixCls, hashId)}
      style={{ width: width, height: height, ...style }}
    >
      <Spin spinning={loading}>
        <div style={{ width: width, height: height, display: 'inline-block' }}>
          {readonly ? (scopeValue ?
            <div className={classNames(\`\${prefixCls}-image\`, hashId)}>
              <Image
                preview={preview}
                src={scopeValue}
                width={width}
                height={height}
              />
            </div>:<Empty description={'\u8BF7\u4E0A\u4F20\u56FE\u7247'} image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : scopeValue ? (
            <div className={classNames(\`\${prefixCls}-image\`, hashId)}>
              <Image
                preview={preview}
                src={scopeValue}
                width={width}
                height={height}
              />
              <div className={classNames(\`\${prefixCls}-image-tooltip\`, hashId)}>
                <Space separator={<Divider orientation="vertical" />}>
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
    </div>
  );
};
`},3036:function(a,e){e.Z=`import React from 'react';
import PictureUpload from '../index';

export default () => {
  return (
    <div>
      <PictureUpload />
      <div>\u53EA\u8BFB\u6A21\u5F0F</div>
      <PictureUpload readonly={ true} />
    </div>
  );
};
`},7992:function(a,e){e.Z=`import { PictureUpload, PictureUploadProps } from './PictureUpload';

export type { PictureUploadProps };
export default PictureUpload;
`},94095:function(a,e){e.Z=`import { GlobalToken } from 'antd';

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
          '.ant-image-img':{
            objectFit: 'cover',
          }
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
