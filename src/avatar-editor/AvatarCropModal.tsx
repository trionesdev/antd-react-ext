import {
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
import { genAvatarCropModalStyle } from './styles';

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
        '<cropper-canvas background="true" scale-step="0.1" style="width: 100%;height: 100%;overflow: visible">\n' +
        '  <cropper-image rotatable="true" scalable="true" translatable="true" initial-center-size="cover" ></cropper-image>\n' +
        '  <cropper-shade hidden></cropper-shade>\n' +
        '  <cropper-handle action="select" plain></cropper-handle>\n' +
        '  <cropper-selection initial-coverage="1" movable="false" resizable="false">\n' +
        '    <cropper-handle action="move" theme-color="rgb(255 255 255 / 0%)"></cropper-handle>\n' +
        '  </cropper-selection>\n' +
        '</cropper-canvas>',
    });
    cropperInstance.getCropperImage()?.$ready((image) => {
      // console.log(image.naturalWidth, image.naturalHeight);
      //region copperjs 存在同一张图片第二次打开的时候，缩放比例会重置为1，这里手动设置一下
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
          // imageClone.style.transform = `matrix(${event.detail.matrix.join(', ')})`;
          // imageClone.style.opacity = '0';
          // canvas?.appendChild(imageClone)
          // const imageRect = imageClone.getBoundingClientRect();
          // canvas?.removeChild(imageClone)

          /**
           * 计算出动作前后的缩放比，判断当时动作是否为缩放操作
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
            //非缩放操作
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
              //缩小到比初始化小，如果缩放小于初始化，则不允许继续缩小
              event.preventDefault();
              setZoom(1);
            } else if (
              scaleX1 > scaleX_origin * 3 + 0.001 ||
              scaleY1 > scaleY_origin * 3 + 0.001
            ) {
              //放大到3倍
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

  // 缩放，不使用zoom接口，zoom是根据当前图像进行缩放的，我们的需求是根据原始图像进行缩放，否则图像的缩放比例会比较难以计算
  const handleZoomChange = (value: number) => {
    // console.log(initTransform)
    //获取当前的矩阵信息
    const currentImageTransform = cropper?.getCropperImage().$getTransform();
    //获取原始图像的缩放比
    const scaleX_origin = Math.sqrt(
      initTransform![0] * initTransform![0] +
        initTransform![1] * initTransform![1],
    );
    const scaleY_origin = Math.sqrt(
      initTransform![2] * initTransform![2] +
        initTransform![3] * initTransform![3],
    );
    //获取当前图像的缩放比
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
    //获取当前的矩阵信息
    const currentImageTransform = cropper?.getCropperImage().$getTransform();
    //获取原始图像的缩放比
    const currentScaleX = Math.sqrt(
      currentImageTransform![0] * currentImageTransform![0] +
        currentImageTransform![1] * currentImageTransform![1],
    );
    const currentScaleY = Math.sqrt(
      currentImageTransform![2] * currentImageTransform![2] +
        currentImageTransform![3] * currentImageTransform![3],
    );
    //计算出角度
    const radians = (Math.PI / 180) * value;
    //变换图像
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
            className={classNames(`${prefixCls}-cropper`, hashId)}
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
            type={`text`}
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
            type={`text`}
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
