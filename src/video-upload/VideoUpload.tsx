import { UploadOutlined } from '@ant-design/icons';
import { useCssInJs } from '@trionesdev/antd-react-ext';
import { Button, Col, Flex, Input, message, Row, Upload } from 'antd';
import classNames from 'classnames';
import { eq } from 'lodash-es';
import React, { FC, useEffect, useState } from 'react';
import PictureUpload from '../picture-upload';
import { NoFile } from './Icons';
import { genVideoUploadStyle } from './styles';

export type VideoUploadProps = {
  value?: {
    url?: string;
    poster?: string;
  };
  onChange?: (value: { url?: string; poster?: string }) => void;
  style?: React.CSSProperties;
  className?: string;
  width?: number;
  height?: number;
  preview?: boolean;
  videoAccept?: string;
  videoLimitSize?: number;
  videoUploadRequest?: (file: File) => Promise<string>;
  posterUploadRequest?: (file: File) => Promise<string>;
};
export const VideoUpload: FC<VideoUploadProps> = ({
  value,
  onChange,
  style,
  className,
  width,
  height,
  videoAccept,
  videoLimitSize,
  videoUploadRequest,
  posterUploadRequest,
}) => {
  const [innerValue, setInnerValue] = useState<{
    url?: string;
    poster?: string;
  }>(value || {});
  const [url, setUrl] = useState<string | undefined>();
  const [fileList, setFileList] = useState<any>();

  const handleBeforeUpload = (param: any) => {
    if (videoLimitSize && param.file.size > videoLimitSize) {
      message.warning('视频大小不能超过' + videoLimitSize / 1024 + 'KB');
      return false;
    }
    return true;
  };

  const handleUpload = async (param: any) => {
    if (!param.file) {
      return;
    }

    if (videoUploadRequest) {
      videoUploadRequest?.(param.file)
        .then((url) => {
          setInnerValue({ ...innerValue, url: url });
          setFileList(
            (fileList || []).map((file: any) => {
              return { ...file, status: 'done' };
            }),
          );
        })
        .catch((ex: any) => {
          message.error(ex.message);
          setFileList(
            (fileList || []).map((file: any) => {
              return { ...file, status: 'error' };
            }),
          );
        });
    } else {
      setFileList(
        (fileList || []).map((file: any) => {
          return { ...file, status: 'error' };
        }),
      );
    }
  };

  const handleSetInnerValue = (innerValue: any) => {
    setInnerValue(innerValue || {});
    onChange?.(innerValue);
  };

  useEffect(() => {
    if (!eq(value || {}, innerValue || {})) {
      setInnerValue(value || {});
    }
  }, [value]);

  const prefixCls = `triones-video-upload`;
  const { wrapSSR, hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genVideoUploadStyle,
  });
  return wrapSSR(
    <div className={classNames(className, prefixCls, hashId)} style={style}>
      <Row style={{ height: '100%' }} gutter={[8, 8]} wrap={false}>
        <Col
          flex={'auto'}
          className={classNames(`${prefixCls}-player`, hashId)}
        >
          {innerValue?.url ? (
            <video
              width={'100%'}
              controls
              poster={innerValue?.poster}
              src={innerValue?.url}
            />
          ) : (
            <NoFile />
          )}
        </Col>
        <Col flex={'328px'}>
          <div style={{ padding: 8 }}>视频封面</div>
          <PictureUpload
            width={320}
            uploadRequest={posterUploadRequest}
            value={innerValue?.poster}
            onChange={(value) => {
              handleSetInnerValue({ ...innerValue, poster: value });
            }}
          />
          <div style={{ padding: 8 }}>视频文件</div>
          <div>
            <Upload
              listType="picture"
              maxCount={1}
              customRequest={handleUpload}
              accept={videoAccept}
              beforeUpload={handleBeforeUpload}
              defaultFileList={fileList}
              fileList={fileList}
              onChange={({ file, fileList }) => {
                setFileList(fileList);
              }}
            >
              <Button icon={<UploadOutlined />}>上传视频</Button>
            </Upload>
          </div>
          <div style={{ padding: 8 }}>视频链接</div>
          <div>
            <Flex gap={8}>
              <Input
                placeholder="请输入视频链接"
                style={{ flex: 1 }}
                defaultValue={url}
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
              <Button
                type={`primary`}
                onClick={() => {
                  handleSetInnerValue({ ...innerValue, url: url });
                }}
              >
                确定
              </Button>
            </Flex>
          </div>
        </Col>
      </Row>
    </div>,
  );
};
