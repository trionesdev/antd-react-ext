import { UploadOutlined } from '@ant-design/icons';
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
  accept?: string;
  limitSize?: number;
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
  accept = '.jpg,.jpeg,.png,.webp',
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

  const prefixCls = `triones-picture-upload`;
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
            <div className={classNames(`${prefixCls}-image`, hashId)}>
              <Image
                preview={preview}
                src={scopeValue}
                width={width}
                height={height}
              />
              <div className={classNames(`${prefixCls}-image-tooltip`, hashId)}>
                <Space split={<Divider type="vertical" />}>
                  <Upload
                    customRequest={handleUpload}
                    showUploadList={false}
                    accept={accept}
                    beforeUpload={handleBeforeUpload}
                  >
                    <Button type="text">更换</Button>
                  </Upload>
                  <Button type="text" onClick={handleClean}>
                    删除
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
