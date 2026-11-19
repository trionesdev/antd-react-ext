import { SearchToolbar } from '@trionesdev/antd-react-ext';
import { Input, Select, Typography } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [values, setValues] = useState({ status: 'enabled' });

  return (
    <>
      <SearchToolbar
        inline
        showSearch={false}
        triggerSearchOnValuesChange
        initialValues={{ status: 'enabled' }}
        resetText="恢复默认"
        onSearch={setValues}
        items={[
          {
            name: 'keyword',
            label: '关键词',
            children: <Input allowClear placeholder="输入后即时搜索" />,
          },
          {
            name: 'status',
            label: '状态',
            children: (
              <Select
                allowClear
                style={{ width: 140 }}
                options={[
                  { label: '启用', value: 'enabled' },
                  { label: '停用', value: 'disabled' },
                ]}
              />
            ),
          },
        ]}
      />
      <Typography.Paragraph>
        当前查询参数：{JSON.stringify(values)}
      </Typography.Paragraph>
    </>
  );
};
