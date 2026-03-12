import { GridTable } from '@trionesdev/antd-react-ext';
import React from 'react';

export default () => {
  const columns = [
    { title: '姓名', dataIndex: 'name', width: 120 },
    { title: '年龄', dataIndex: 'age', width: 80 },
    { title: '部门', dataIndex: 'department' },
    { title: '邮箱', dataIndex: 'email' },
  ];

  const names = ['张三', '李四', '王五', '赵六', '孙七', '周八', '吴九', '郑十'];
  const departments = ['研发部', '产品部', '设计部', '市场部', '运营部'];

  const manyRows = Array.from({ length: 50 }, (_, i) => ({
    key: i,
    name: names[i % names.length],
    age: 22 + (i % 30),
    department: departments[i % departments.length],
    email: `user${i}@example.com`,
  }));

  const fewRows = manyRows.slice(0, 3);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* 场景1：fit + 大量数据 → 应撑满300px，body纵向滚动，表头固定 */}
      <div>
        <h4>场景1：fit=true，50条数据，容器300px（应撑满并滚动）</h4>
        <div style={{ height: 300, border: '2px solid #1677ff' }}>
          <GridTable
            fit={true}
            columns={columns}
            dataSource={manyRows}
            pagination={false}
          />
        </div>
      </div>

      {/* 场景2：fit + 少量数据 → 应撑满300px，无滚动条 */}
      <div>
        <h4>场景2：fit=true，3条数据，容器300px（应撑满，无滚动）</h4>
        <div style={{ height: 300, border: '2px solid #52c41a' }}>
          <GridTable
            fit={true}
            columns={columns}
            dataSource={fewRows}
            pagination={false}
          />
        </div>
      </div>

      {/* 场景3：fit + resizable + 大量数据 → 撑满 + 可拖拽列宽 */}
      <div>
        <h4>场景3：fit=true + resizable=true，50条数据（撑满 + 可拖拽列宽）</h4>
        <div style={{ height: 300, border: '2px solid #faad14' }}>
          <GridTable
            fit={true}
            resizable={true}
            columns={columns}
            dataSource={manyRows}
            pagination={false}
          />
        </div>
      </div>

      {/* 场景4：非fit + resizable + scroll.y → 验证列对齐 */}
      <div>
        <h4>场景4：非fit + resizable + scroll.y（拖拽列宽后观察 header/body 对齐）</h4>
        <div style={{ border: '2px solid #722ed1' }}>
          <GridTable
            resizable={true}
            columns={columns}
            dataSource={manyRows}
            pagination={false}
            scroll={{ y: 300 }}
          />
        </div>
      </div>

      {/* 场景5：对照组，无fit，自然高度 */}
      <div>
        <h4>场景5：对照组，无fit，自然高度</h4>
        <div style={{ border: '2px dashed #d9d9d9' }}>
          <GridTable
            columns={columns}
            dataSource={fewRows}
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
};
