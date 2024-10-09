"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[8743],{82071:function(t,e,n){n.r(e),n.d(e,{demos:function(){return m}});var r=n(97983),o=n.n(r),i=n(40794),c=n.n(i),s=n(67294),m={"avatar-editor-demo-base":{component:s.memo(s.lazy(function(){return n.e(1728).then(n.bind(n,26249))})),asset:{type:"BLOCK",id:"avatar-editor-demo-base",refAtomIds:["avatar-editor"],dependencies:{"index.tsx":{type:"FILE",value:n(53157).Z},react:{type:"NPM",value:"18.2.0"},"../index.tsx":{type:"FILE",value:n(28711).Z},"./AvatarEditor.tsx":{type:"FILE",value:n(28595).Z},"@ant-design/icons":{type:"NPM",value:"5.3.7"},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.1"},antd:{type:"NPM",value:"5.18.0"},classnames:{type:"NPM",value:"2.5.1"},lodash:{type:"NPM",value:"4.17.21"},"./styles.ts":{type:"FILE",value:n(61156).Z},"./AvatarCropModal.tsx":{type:"FILE",value:n(81282).Z},cropperjs:{type:"NPM",value:"2.0.0-rc.2"}},entry:"index.tsx"},context:{react:n(67294),"../index.tsx":n(29614),"./AvatarEditor.tsx":n(21440),"@ant-design/icons":n(10294),"@trionesdev/antd-react-ext":n(31021),antd:n(46869),classnames:n(93967),lodash:n(96486),"./styles.ts":n(95839),"./AvatarCropModal.tsx":n(11704),cropperjs:n(94234)},renderOpts:{compile:function(){var d=c()(o()().mark(function u(){var l,g=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(9944).then(n.bind(n,99944));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,g));case 3:case"end":return a.stop()}},u)}));function p(){return d.apply(this,arguments)}return p}()}}}},28653:function(t,e,n){n.r(e),n.d(e,{texts:function(){return r}});const r=[{value:"\u5934\u50CF\u7F16\u8F91\u5668\uFF0C\u5E26\u56FE\u7247\u88C1\u526A\u529F\u80FD\u7684\u5934\u50CF\u7EC4\u4EF6",paraId:0,tocIndex:0}]},81282:function(t,e){e.Z=`import {
  RotateLeftOutlined,
  RotateRightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { useCssInJs } from '@trionesdev/antd-react-ext';
import { Button, Flex, Modal, Slider, Space } from 'antd';
import classNames from 'classnames';
import Cropper from 'cropperjs';
import React, { FC, useEffect, useRef, useState } from 'react';
import { genAvatarCropModalStyle } from './styles.ts';

type AvatarCropModalProps = {
  open?: boolean;
  cropImage?: string;
  onCancel?: () => void;
  onOk?: (dataUrl: string) => void;
};

export const AvatarCropModal: FC<AvatarCropModalProps> = ({
  open,
  cropImage,
  onCancel,
  onOk,
}) => {
  const cropContainerRef = useRef<HTMLDivElement>(null);
  const [cropper, setCropper] = useState<any>();
  const [initTransform, setInitTransform] = useState<any[]>();
  const [zoom, setZoom] = useState(1);
  const [rotate, setRotate] = useState(0);

  const handleInit = () => {
    const image = new Image();
    if (typeof cropImage === 'string') {
      image.src = cropImage;
    }
    image.alt = 'Cropper';
    const cropperInstance = new Cropper(image, {
      container: cropContainerRef.current!,
      template:
        '<cropper-canvas background="true" scale-step="0.1" style="width: 100%;height: 100%;overflow: visible">\\n' +
        '  <cropper-image rotatable="true" scalable="true" translatable="true" initial-center-size="cover" ></cropper-image>\\n' +
        '  <cropper-shade hidden></cropper-shade>\\n' +
        '  <cropper-handle action="select" plain></cropper-handle>\\n' +
        '  <cropper-selection initial-coverage="1" movable="false" resizable="false">\\n' +
        '    <cropper-handle action="move" theme-color="rgb(255 255 255 / 0%)"></cropper-handle>\\n' +
        '  </cropper-selection>\\n' +
        '</cropper-canvas>',
    });
    cropperInstance.getCropperImage()?.$ready((image) => {
      // console.log(image.naturalWidth, image.naturalHeight);
      //region copperjs \u5B58\u5728\u540C\u4E00\u5F20\u56FE\u7247\u7B2C\u4E8C\u6B21\u6253\u5F00\u7684\u65F6\u5019\uFF0C\u7F29\u653E\u6BD4\u4F8B\u4F1A\u91CD\u7F6E\u4E3A1\uFF0C\u8FD9\u91CC\u624B\u52A8\u8BBE\u7F6E\u4E00\u4E0B
      let transform = cropperInstance.getCropperImage()!.$getTransform();
      let scale = 1;
      if (image.naturalWidth > image.naturalHeight) {
        scale = 300 / image.naturalHeight;
      } else {
        scale = 300 / image.naturalWidth;
      }
      if (Math.abs(transform[0] - scale) > 0.001) {
        transform = [scale, 0, 0, scale, transform[4], transform[5]];
        cropperInstance.getCropperImage()!.$setTransform(transform);
        setInitTransform(transform);
        console.log(transform);
      } else {
        setInitTransform(transform);
        console.log(transform);
      }
      //endregion

      cropperInstance
        .getCropperImage()
        ?.addEventListener('transform', (event: any) => {
          console.log('event', event);
          const matrix = event.detail.matrix;
          const oldMatrix = event.detail.oldMatrix;
          // const copperImage = cropperInstance.getCropperImage();
          // const canvas = cropperInstance.getCropperCanvas();
          // const canvasRect = canvas?.getBoundingClientRect();
          // const imageClone = copperImage?.cloneNode(true) as CropperImage;
          // imageClone.style.transform = \`matrix(\${event.detail.matrix.join(', ')})\`;
          // imageClone.style.opacity = '0';
          // canvas?.appendChild(imageClone)
          // const imageRect = imageClone.getBoundingClientRect();
          // canvas?.removeChild(imageClone)

          /**
           * \u8BA1\u7B97\u51FA\u52A8\u4F5C\u524D\u540E\u7684\u7F29\u653E\u6BD4\uFF0C\u5224\u65AD\u5F53\u65F6\u52A8\u4F5C\u662F\u5426\u4E3A\u7F29\u653E\u64CD\u4F5C
           */
          const scaleX1 = Math.sqrt(
            matrix[0] * matrix[0] + matrix[1] * matrix[1],
          );
          const scaleY1 = Math.sqrt(
            matrix[2] * matrix[2] + matrix[3] * matrix[3],
          );

          const scaleX2 = Math.sqrt(
            oldMatrix[0] * oldMatrix[0] + oldMatrix[1] * oldMatrix[1],
          );
          const scaleY2 = Math.sqrt(
            oldMatrix[2] * oldMatrix[2] + oldMatrix[3] * oldMatrix[3],
          );

          // console.log(scaleX1, scaleY1, scaleX2, scaleY2)
          if (scaleX1 === scaleX2 && scaleY1 === scaleY2) {
            //\u975E\u7F29\u653E\u64CD\u4F5C
            return;
          } else {
            const scaleX_origin = Math.sqrt(
              transform[0] * transform[0] + transform[1] * transform[1],
            );
            const scaleY_origin = Math.sqrt(
              transform[2] * transform[2] + transform[3] * transform[3],
            );
            // console.log(scaleX_origin, scaleY_origin)
            if (scaleX1 < scaleX_origin || scaleY1 < scaleY_origin) {
              //\u7F29\u5C0F\u5230\u6BD4\u521D\u59CB\u5316\u5C0F\uFF0C\u5982\u679C\u7F29\u653E\u5C0F\u4E8E\u521D\u59CB\u5316\uFF0C\u5219\u4E0D\u5141\u8BB8\u7EE7\u7EED\u7F29\u5C0F
              event.preventDefault();
              setZoom(1);
            } else if (
              scaleX1 > scaleX_origin * 3 + 0.001 ||
              scaleY1 > scaleY_origin * 3 + 0.001
            ) {
              //\u653E\u5927\u52303\u500D
              event.preventDefault();
              setZoom(3);
            } else {
              setZoom(scaleX2 / scaleX_origin);
            }
          }
        });
    });

    setCropper(cropperInstance);
  };

  // \u7F29\u653E\uFF0C\u4E0D\u4F7F\u7528zoom\u63A5\u53E3\uFF0Czoom\u662F\u6839\u636E\u5F53\u524D\u56FE\u50CF\u8FDB\u884C\u7F29\u653E\u7684\uFF0C\u6211\u4EEC\u7684\u9700\u6C42\u662F\u6839\u636E\u539F\u59CB\u56FE\u50CF\u8FDB\u884C\u7F29\u653E\uFF0C\u5426\u5219\u56FE\u50CF\u7684\u7F29\u653E\u6BD4\u4F8B\u4F1A\u6BD4\u8F83\u96BE\u4EE5\u8BA1\u7B97
  const handleZoomChange = (value: number) => {
    // console.log(initTransform)
    const currentImageTransform = cropper?.getCropperImage().$getTransform();
    const scaleX_origin = Math.sqrt(
      initTransform![0] * initTransform![0] +
        initTransform![1] * initTransform![1],
    );
    const scaleY_origin = Math.sqrt(
      initTransform![2] * initTransform![2] +
        initTransform![3] * initTransform![3],
    );
    const currentScaleX = Math.sqrt(
      currentImageTransform![0] * currentImageTransform![0] +
        currentImageTransform![1] * currentImageTransform![1],
    );
    const currentScaleY = Math.sqrt(
      currentImageTransform![2] * currentImageTransform![2] +
        currentImageTransform![3] * currentImageTransform![3],
    );

    const scaleX = (scaleX_origin * value) / currentScaleX;
    const scaleY = (scaleY_origin * value) / currentScaleY;
    // console.log(scaleX, scaleY)
    cropper
      ?.getCropperImage()
      .$setTransform(
        currentImageTransform![0] * scaleX,
        currentImageTransform![1] * scaleX,
        currentImageTransform![2] * scaleY,
        currentImageTransform![3] * scaleY,
        currentImageTransform![4],
        currentImageTransform![5],
      );
    setZoom(value);
  };

  const handleRotateChange = (value: number) => {
    const currentImageTransform = cropper?.getCropperImage().$getTransform();
    const currentScaleX = Math.sqrt(
      currentImageTransform![0] * currentImageTransform![0] +
        currentImageTransform![1] * currentImageTransform![1],
    );
    const currentScaleY = Math.sqrt(
      currentImageTransform![2] * currentImageTransform![2] +
        currentImageTransform![3] * currentImageTransform![3],
    );

    const radians = (Math.PI / 180) * value;
    cropper
      ?.getCropperImage()
      .$setTransform(
        Math.cos(radians) * currentScaleX,
        -Math.sin(radians) * currentScaleX,
        Math.sin(radians) * currentScaleY,
        Math.cos(radians) * currentScaleY,
        currentImageTransform![4],
        currentImageTransform![5],
      );

    setRotate(value);
  };

  const handleOk = () => {
    cropper
      .getCropperSelection()
      ?.$toCanvas()
      .then((canvas: any) => {
        onOk?.(canvas.toDataURL());
      });
  };

  useEffect(() => {
    return () => {
      setInitTransform(undefined);
      cropper?.getCropperImage()?.removeEventListener('transform');
    };
  }, []);

  const prefixCls = 'triones-avatar-crop-modal';
  const { hashId, wrapSSR } = useCssInJs({
    prefix: prefixCls,
    styleFun: genAvatarCropModalStyle,
  });

  return wrapSSR(
    <Modal
      open={open}
      className={classNames(prefixCls, hashId)}
      styles={{
        content: {
          padding: '10px',
        },
      }}
      closable={false}
      onCancel={onCancel}
      width={420}
      destroyOnClose={true}
      onOk={handleOk}
      footer={(originNode) => {
        return (
          <div style={{ textAlign: 'center' }}>
            <Space>{originNode}</Space>
          </div>
        );
      }}
      afterOpenChange={(open) => {
        if (open) {
          handleInit();
        } else {
          // cropper?.destroy()
          setCropper(undefined);
        }
      }}
    >
      <Space direction={'vertical'}>
        <div
          style={{
            width: 400,
            height: 400,
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            ref={cropContainerRef}
            className={classNames(\`\${prefixCls}-cropper\`, hashId)}
            style={{ width: 300, height: 300, position: 'relative' }}
          />
        </div>
        <Flex gap={'small'} justify={'space-between'} align={'center'}>
          <Button
            type={'text'}
            icon={<ZoomOutOutlined />}
            disabled={zoom <= 1}
            onClick={() => {
              if (zoom - 0.1 >= 1) {
                handleZoomChange(zoom - 0.1);
              }
            }}
          />
          <Slider
            style={{ width: '100%' }}
            defaultValue={zoom}
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={handleZoomChange}
          />
          <Button
            type={'text'}
            icon={<ZoomInOutlined />}
            disabled={zoom >= 3}
            onClick={() => {
              if (zoom + 0.1 <= 3) {
                handleZoomChange(zoom + 0.1);
              }
            }}
          />
        </Flex>
        <Flex gap={'small'} justify={'center'} align={'center'}>
          <Button
            type={\`text\`}
            icon={<RotateLeftOutlined />}
            disabled={rotate <= -180}
            onClick={() => {
              if (rotate - 1 >= -180) {
                handleRotateChange(rotate - 1);
              }
            }}
          />
          <Slider
            style={{ width: '100%' }}
            defaultValue={rotate}
            value={rotate}
            min={-180}
            max={180}
            step={1}
            onChange={handleRotateChange}
          />
          <Button
            type={\`text\`}
            icon={<RotateRightOutlined />}
            disabled={rotate >= 180}
            onClick={() => {
              if (rotate + 1 <= 180) {
                handleRotateChange(rotate + 1);
              }
            }}
          />
        </Flex>
      </Space>
    </Modal>,
  );
};
`},28595:function(t,e){e.Z=`import { CameraOutlined, UserOutlined } from '@ant-design/icons';
import { useCssInJs } from '@trionesdev/antd-react-ext';
import { Avatar, Spin } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { AvatarCropModal } from './AvatarCropModal.tsx';
import { genAvatarEditorStyle } from './styles.ts';

type AvatarEditorProps = {
  value?: string;
  onChange?: (value: string) => void;
  style?: CSSProperties;
  className?: string;
  /**
   * @description \u5927\u5C0F
   * @default 200
   */
  size?: number;
  /**
   * @description \u53EF\u4EE5\u9009\u62E9\u7684\u6587\u4EF6\u7C7B\u578B
   * @default .jpg,.jpeg,.png,.svg,.webp
   */
  accept?: string;
  /**
   * @description \u662F\u5426\u53EF\u4EE5\u7F16\u8F91
   * @default true
   */
  editable?: boolean;
  /**
   * @description \u81EA\u5B9A\u4E49\u4E0A\u4F20\u8BF7\u6C42\uFF0C\u9ED8\u8BA4\u4E3A\u4E0A\u4F20\u5230\u670D\u52A1\u5668\uFF0C\u5982\u679C\u4E3A\u7A7A\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\u56FE\u7247\u5730\u5740
   * @default
   */
  uploadRequest?: (file: File) => Promise<string>;
};

export const AvatarEditor: FC<AvatarEditorProps> = ({
  value,
  onChange,
  style,
  className,
  size = 200,
  editable = true,
  accept = '.jpg,.jpeg,.png,.svg,.webp',
  uploadRequest,
}) => {
  const [innerValue, setInnerValue] = useState<any>(value);
  const [open, setOpen] = useState<boolean>(false);
  const [cropImage, setCropImage] = useState<any>();
  const [loading, setLoading] = useState(false);

  const getBase64 = (img: any, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const handleImageSelect = async (e: any) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) {
      return;
    }
    getBase64(file, (url) => {
      setCropImage(url);
      setOpen(true);
    });
  };

  const handleUpload = (dataURL: any) => {
    if (uploadRequest) {
      const binaryData = atob(dataURL.split(',')[1]);
      const array = new Uint8Array(binaryData.length);
      for (let i = 0; i < binaryData.length; i++) {
        array[i] = binaryData.charCodeAt(i);
      }
      const blob = new Blob([array], { type: 'application/octet-stream' });
      const typeInfo = dataURL.split(';')[0];
      const mimeType = typeInfo.split(':')[1];
      const fileExt = mimeType.split('/')[1];
      const file = new File([blob], \`file.\${fileExt}\`, { type: mimeType });
      setLoading(true);
      uploadRequest(file)
        .then(async (url: string) => {
          setInnerValue(url);
          onChange?.(url);
        })
        .finally(() => {
          setLoading(false);
        });
      setOpen(false);
    } else {
      setInnerValue(dataURL);
      setOpen(false);
      onChange?.(dataURL);
    }
  };

  useEffect(() => {
    if (_.eq(value || '', innerValue || '')) {
      setInnerValue(value || '');
    }
  }, [value]);

  const prefixCls = 'triones-avatar-editor';
  const { hashId, wrapSSR } = useCssInJs({
    prefix: prefixCls,
    styleFun: genAvatarEditorStyle,
  });
  return wrapSSR(
    <div
      className={classNames(prefixCls, className, hashId)}
      style={{ width: size, height: size, ...style }}
    >
      <Spin spinning={loading}>
        <div style={{ width: size, height: size }}>
          <div className={classNames(\`\${prefixCls}-avatar\`, hashId)}>
            <Avatar
              size={size}
              shape={'square'}
              icon={<UserOutlined />}
              src={innerValue || null}
            />
            {editable && (
              <div className={classNames(\`\${prefixCls}-avatar-mask\`, hashId)}>
                <label>
                  <input
                    type={'file'}
                    style={{ display: 'none' }}
                    accept={accept}
                    onChange={handleImageSelect}
                  />
                  <CameraOutlined />
                </label>
              </div>
            )}
          </div>
        </div>
      </Spin>
      <AvatarCropModal
        open={open}
        cropImage={cropImage}
        onCancel={() => {
          setOpen(false);
          setCropImage(undefined);
        }}
        onOk={handleUpload}
      />
    </div>,
  );
};
`},53157:function(t,e){e.Z=`import React from 'react';
import AvatarEditor from '../index';

export default () => {
  return <AvatarEditor />;
};
`},28711:function(t,e){e.Z=`import { AvatarEditor } from './AvatarEditor.tsx';

export default AvatarEditor;
`},61156:function(t,e){e.Z=`import { CSSInterpolation } from '@ant-design/cssinjs';
import { GlobalToken } from 'antd';

export const genAvatarEditorStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [\`.\${prefixCls}\`]: {
      boxSizing: 'border-box',
      [\`&-avatar\`]: {
        position: 'relative',
        '.ant-avatar-square': {
          borderRadius: '0px!important',
        },
        [\`&:hover\`]: {
          [\`.\${prefixCls}-avatar-mask\`]: {
            visibility: 'visible',
          },
        },
        [\`&-mask\`]: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          visibility: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          cursor: 'pointer',
          transition: 'all .3s',
          '&:hover': {
            background: 'rgba(0,0,0,.8)',
          },
          label: {
            fontSize: '30px',
            '.anticon': {
              cursor: 'pointer',
            },
          },
        },
      },
      '.avatar-uploader': {
        width: '100%',
        height: '100%',
        '.ant-upload-select': {
          width: '100%!important',
          height: '100%!important',
          '.ant-upload': {
            fontSize: '30px',
            color: '#0000004a',
          },
        },
      },
    },
  };
};

export const genAvatarCropModalStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [\`.\${prefixCls}\`]: {
      '&-cropper': {},
      img: {
        width: '100%',
        maxWidth: '100%',
      },
    },
  };
};
`}}]);
