import { ImageUpload, ImageUploadValue } from '@trionesdev/antd-react-ext';
import { Typography } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<ImageUploadValue>();

  return (
    <div>
      <Typography.Paragraph type="secondary">
        通过 uploadRequest 接管上传，示例里模拟 800ms 后返回本地预览地址。
      </Typography.Paragraph>
      <ImageUpload
        value={value}
        onChange={setValue}
        uploadRequest={(file) =>
          new Promise((resolve) => {
            window.setTimeout(() => {
              resolve({
                uid: `${Date.now()}`,
                url: URL.createObjectURL(file),
                name: file.name,
              });
            }, 800);
          })
        }
      />
    </div>
  );
};
