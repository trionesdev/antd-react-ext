import { UploadOutlined } from '@ant-design/icons';
import { useCssInJs } from '@trionesdev/antd-react-ext';
import {
  Button,
  Divider,
  Empty,
  Image,
  Space,
  Spin,
  Upload,
  message,
} from 'antd';
import classNames from 'classnames';
import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { genPictureUploadStyle } from './styles';

type ValueType = { uid?: string; url: string;[key: string]: any };

export type ImageUploadProps = {
  readOnly?: boolean;
  value?: ValueType;
  onChange?: (value: ValueType) => void;
  style?: CSSProperties;
  className?: string;
  width?: number;
  height?: number;
  preview?: boolean;
  chanageText?: string;
  deleteText?: string;
  uploadText?: string;
  uploadTip?: string;
  /**
   * @description 可选择的文件类型
   * @default .jpg,.jpeg,.png,.webp,.svg
   */
  accept?: string;
  /**
   * @description 大小限制，单位：字节
   * @default
   */
  limitSize?: number;
  /**
   * @description 上传请求，返回图片地址
   * @default
   */
  uploadRequest?: (file: File) => Promise<ValueType>;
};
export const ImageUpload: FC<ImageUploadProps> = ({
  readOnly,
  value,
  onChange,
  style,
  className,
  width = 320,
  height = 180,
  preview = true,
  chanageText = '更换',
  deleteText = '删除',
  uploadText = '上传',
  uploadTip = '请上传图片',
  limitSize,
  accept = '.jpg,.jpeg,.png,.webp,.svg',
  uploadRequest,
}) => {
  const [scopeValue, setScopeValue] = useState<ValueType>(value || { url: '' });
  const [loading, setLoading] = useState(false);

  const getBase64 = (img: any, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const handleBeforeUpload = (param: any) => {
    if (limitSize && param.file.size > limitSize) {
      message.warning('图片大小不能超过' + limitSize / 1024 + 'KB');
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
        .then((res) => {
          setScopeValue(res);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getBase64(param.file, (url) => {
        setScopeValue({ url });
      });
    }
  };

  const handleClean = () => {
    setScopeValue({ url: '' });
  };

  useEffect(() => {
    if (value == undefined) {
      return;
    }
    if (value !== scopeValue) {
      setScopeValue(value);
    }
  }, [value]);

  useEffect(() => {
    onChange?.(scopeValue);
  }, [scopeValue]);

  const prefixCls = `triones-picture-upload`;
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
          {readOnly ? (
            scopeValue ? (
              <div className={classNames(`${prefixCls}-image`, hashId)}>
                <Image
                  preview={preview}
                  src={scopeValue?.url}
                  width={width}
                  height={height}
                />
              </div>
            ) : (
              <Empty
                description={uploadTip}
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            )
          ) : scopeValue ? (
            <div className={classNames(`${prefixCls}-image`, hashId)}>
              <Image
                preview={preview}
                src={scopeValue?.url}
                width={width}
                height={height}
              />
              <div className={classNames(`${prefixCls}-image-tooltip`, hashId)}>
                <Space separator={<Divider orientation="vertical" />}>
                  <Upload
                    customRequest={handleUpload}
                    showUploadList={false}
                    accept={accept}
                    beforeUpload={handleBeforeUpload}
                  >
                    <Button type="text">{chanageText}</Button>
                  </Upload>
                  <Button type="text" onClick={handleClean}>
                    {deleteText}
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
