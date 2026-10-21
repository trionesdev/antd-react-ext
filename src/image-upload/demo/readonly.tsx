import { ImageUpload } from '@trionesdev/antd-react-ext';
import { Flex, Typography } from 'antd';
import React from 'react';

export default () => {
  return (
    <Flex gap={24} wrap>
      <div>
        <Typography.Text type="secondary">有图，可预览</Typography.Text>
        <ImageUpload
          readOnly
          value={{
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          }}
        />
      </div>
      <div>
        <Typography.Text type="secondary">关闭预览</Typography.Text>
        <ImageUpload
          readOnly
          preview={false}
          value={{
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          }}
        />
      </div>
      <div>
        <Typography.Text type="secondary">自定义空态文案</Typography.Text>
        <ImageUpload readOnly uploadTip="暂无封面" />
      </div>
    </Flex>
  );
};
