import { SearchToolbar } from '@trionesdev/antd-react-ext';
import { Form, Input, Select, Space, Switch, Typography } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [form] = Form.useForm();
  const [expanded, setExpanded] = useState(false);
  const [result, setResult] = useState('尚未查询');

  return (
    <>
      <Space>
        <Typography.Text>展开全部条件</Typography.Text>
        <Switch
          aria-label="展开全部条件"
          checked={expanded}
          onChange={setExpanded}
        />
      </Space>
      <SearchToolbar
        form={form}
        expand={expanded}
        afterExpandChange={setExpanded}
        xs={24}
        sm={12}
        md={8}
        lg={6}
        initialValues={{ name: '张三' }}
        searchText="筛选"
        onSearch={(values) => setResult(JSON.stringify(values))}
        onReset={() => setResult('已恢复初始条件，请重新查询')}
        items={[
          {
            name: 'name',
            label: '姓名',
            rules: [{ required: true, message: '请输入姓名' }],
            children: <Input allowClear placeholder="输入姓名后按回车查询" />,
          },
          {
            name: 'phone',
            label: '手机号',
            children: <Input allowClear placeholder="请输入手机号" />,
          },
          {
            name: 'email',
            label: '邮箱',
            rules: [{ type: 'email', message: '请输入有效邮箱' }],
            children: <Input allowClear placeholder="请输入邮箱" />,
          },
          {
            name: ['address', 'city'],
            label: '城市',
            children: <Input allowClear placeholder="请输入城市" />,
          },
          {
            name: 'status',
            label: '状态',
            children: (
              <Select
                allowClear

                options={[
                  { label: '启用', value: 'enabled' },
                  { label: '停用', value: 'disabled' },
                ]}
              />
            ),
          },
        ]}
      />
      <Typography.Paragraph>查询结果：{result}</Typography.Paragraph>
    </>
  );
};
