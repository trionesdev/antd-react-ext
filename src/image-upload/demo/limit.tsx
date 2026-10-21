import { ImageUpload } from '@trionesdev/antd-react-ext';
import { Typography } from 'antd';
import React from 'react';

export default () => {
  return (
    <div>
      <Typography.Paragraph type="secondary">
        仅允许 png，且不超过 200KB，超出后会提示并拦截上传。
      </Typography.Paragraph>
      <ImageUpload accept=".png" limitSize={200 * 1024} />
    </div>
  );
};
