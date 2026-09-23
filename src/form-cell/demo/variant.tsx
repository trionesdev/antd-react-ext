import { DownOutlined } from '@ant-design/icons';
import { FormCell } from '@trionesdev/antd-react-ext';
import { Flex, Input, Typography } from 'antd';
import React from 'react';

const variants = ['outlined', 'filled', 'borderless', 'underlined'] as const;

export default () => {
  return (
    <Flex vertical gap={16} style={{ maxWidth: 360 }}>
      {variants.map((variant) => (
        <div key={variant}>
          <Typography.Text type="secondary">{variant}</Typography.Text>
          <Flex vertical gap={8}>
            <Input
              variant={variant}
              placeholder={`Input ${variant}`}
              defaultValue="原生 Input"
            />
            <FormCell
              variant={variant}
              suffix={<DownOutlined />}
              placeholder={`FormCell ${variant}`}
            >
              自定义内容
            </FormCell>
          </Flex>
        </div>
      ))}
    </Flex>
  );
};
