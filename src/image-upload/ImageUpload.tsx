import {
  DeleteOutlined,
  SwapOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  Button,
  Divider,
  Empty,
  Image,
  message,
  Space,
  Spin,
  Upload,
} from 'antd';
import type { UploadProps } from 'antd';
import classNames from 'classnames';
import React, { CSSProperties, FC, useState } from 'react';
import { useCssInJs } from '../hooks';
import { genImageUploadStyle } from './styles';

export type ImageUploadValue = { uid?: string; url: string; [key: string]: any };

export type ImageUploadProps = {
  readOnly?: boolean;
  value?: ImageUploadValue;
  onChange?: (value: ImageUploadValue) => void;
  style?: CSSProperties;
  className?: string;
  width?: number;
  height?: number;
  preview?: boolean;
  changeText?: string;
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
  uploadRequest?: (file: File) => Promise<ImageUploadValue>;
};

const EMPTY_VALUE: ImageUploadValue = { url: '' };

const formatSize = (size: number) => {
  if (size >= 1024 * 1024) {
    const mb = size / 1024 / 1024;
    return `${Number.isInteger(mb) ? mb : mb.toFixed(1)}MB`;
  }
  if (size >= 1024) {
    const kb = size / 1024;
    return `${Number.isInteger(kb) ? kb : kb.toFixed(1)}KB`;
  }
  return `${size}B`;
};

const fileToBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

export const ImageUpload: FC<ImageUploadProps> = ({
  readOnly,
  value,
  onChange,
  style,
  className,
  width = 320,
  height = 180,
  preview = true,
  changeText = '更换',
  deleteText = '删除',
  uploadText = '上传',
  uploadTip = '请上传图片',
  limitSize,
  accept = '.jpg,.jpeg,.png,.webp,.svg',
  uploadRequest,
}) => {
  const [innerValue, setInnerValue] = useState<ImageUploadValue>(
    value ?? EMPTY_VALUE,
  );
  const [loading, setLoading] = useState(false);
  const current = value !== undefined ? value : innerValue;
  const hasImage = Boolean(current?.url);

  const updateValue = (next: ImageUploadValue) => {
    setInnerValue(next);
    onChange?.(next);
  };

  const handleBeforeUpload: UploadProps['beforeUpload'] = (file) => {
    if (limitSize && file.size > limitSize) {
      message.warning(`图片大小不能超过 ${formatSize(limitSize)}`);
      return Upload.LIST_IGNORE;
    }
    return true;
  };

  const handleUpload: UploadProps['customRequest'] = async (options) => {
    const file = options.file as File;
    if (!file) {
      return;
    }

    setLoading(true);
    try {
      const next = uploadRequest
        ? await uploadRequest(file)
        : { url: await fileToBase64(file) };
      updateValue(next);
      options.onSuccess?.(next);
    } catch (error) {
      message.error('上传失败');
      options.onError?.(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const handleClean = () => {
    updateValue(EMPTY_VALUE);
  };

  const prefixCls = 'triones-image-upload';
  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genImageUploadStyle,
  });

  const uploadProps: UploadProps = {
    accept,
    showUploadList: false,
    disabled: loading,
    beforeUpload: handleBeforeUpload,
    customRequest: handleUpload,
  };

  return (
    <div
      className={classNames(className, prefixCls, hashId)}
      style={{ width, height, ...style }}
    >
      <Spin spinning={loading}>
        <div style={{ width, height, display: 'inline-block' }}>
          {hasImage ? (
            <div className={classNames(`${prefixCls}-image`, hashId)}>
              <Image
                preview={preview}
                src={current.url}
                width={width}
                height={height}
              />
              {!readOnly && (
                <div
                  className={classNames(`${prefixCls}-image-tooltip`, hashId)}
                >
                  <Space  >
                    <Upload {...uploadProps}>
                      <Button
                        type="text"
                        disabled={loading}
                        icon={<SwapOutlined />}
                      />
                    </Upload>
                    <Button
                      type="text"
                      disabled={loading}
                      onClick={handleClean}
                      icon={<DeleteOutlined />}
                    />
                  </Space>
                </div>
              )}
            </div>
          ) : readOnly ? (
            <Empty
              description={uploadTip}
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ) : (
            <Upload
              {...uploadProps}
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              style={{ width, height }}
            >
              <UploadOutlined />
            </Upload>
          )}
        </div>
      </Spin>
    </div>
  );
};
