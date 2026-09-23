# Ant Design 扩展组件库

[![NPM version](https://img.shields.io/npm/v/@trionesdev/antd-react-ext.svg?style=flat)](https://npmjs.org/package/@trionesdev/antd-react-ext)
[![NPM downloads](https://img.shields.io/npm/dm/@trionesdev/antd-react-ext.svg?style=flat)](https://npmjs.org/package/@trionesdev/antd-react-ext)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

基于 [Ant Design](https://github.com/ant-design/ant-design) 的业务扩展组件库。在不引入额外 UI 框架的前提下，封装表单、表格、布局、上传等常见场景组件，API 风格尽量与 antd 保持一致。

[📖 在线文档](https://trionesdev.github.io/antd-react-ext/) · [GitHub](https://github.com/trionesdev/antd-react-ext)

## 特性

- **丰富** — 覆盖表单、表格、工具栏、上传等中后台常见场景
- **轻量** — 仅扩展 antd，不引入其他 UI 组件库
- **易用** — 尽量复用 antd 属性与交互习惯，降低学习成本

## 环境要求

| 依赖 | 版本 |
| --- | --- |
| [antd](https://ant.design/) | >= 6.5.0 |
| [react](https://react.dev/) | >= 16.9.0 |
| [react-dom](https://react.dev/) | >= 16.9.0 |

## 安装

```bash
npm install @trionesdev/antd-react-ext
```

```bash
yarn add @trionesdev/antd-react-ext
```

```bash
pnpm add @trionesdev/antd-react-ext
```

## 快速上手

按需引入组件即可使用，无需额外全局配置：

```tsx
import { ModalForm, GridTable } from '@trionesdev/antd-react-ext';
import { Button, Form, Input } from 'antd';

export default () => (
  <ModalForm trigger={<Button type="primary">新建</Button>} title="表单">
    <Form.Item label="姓名" name="name">
      <Input />
    </Form.Item>
  </ModalForm>
);
```

更多示例见 [组件文档](https://trionesdev.github.io/antd-react-ext/components/modal-form)。

## 组件列表

### 布局与导航

| 组件 | 说明 | 文档 |
| --- | --- | --- |
| Layout | 页面布局 | [查看](https://trionesdev.github.io/antd-react-ext/components/layout) |
| PageHeader | 页头 | [查看](https://trionesdev.github.io/antd-react-ext/components/page-header) |
| AppToolbar | 应用工具栏 | [查看](https://trionesdev.github.io/antd-react-ext/components/app-toolbar) |

### 表单

| 组件 | 说明 | 文档 |
| --- | --- | --- |
| ModalForm | 模态框表单 | [查看](https://trionesdev.github.io/antd-react-ext/components/modal-form) |
| DrawerForm | 抽屉表单 | [查看](https://trionesdev.github.io/antd-react-ext/components/drawer-form) |
| FormCell | 表单项包装 | [查看](https://trionesdev.github.io/antd-react-ext/components/form-cell) |
| Fieldset | 分组标签 | [查看](https://trionesdev.github.io/antd-react-ext/components/fieldset) |
| FieldWrapper | 字段包装器 | [查看](https://trionesdev.github.io/antd-react-ext/components/field-wrapper) |
| FieldsMapping | 字段映射 | [查看](https://trionesdev.github.io/antd-react-ext/components/fields-mapping) |
| ExtFormField | 扩展 FormField | [查看](https://trionesdev.github.io/antd-react-ext/components/ext-form-field) |
| EditableDesc | 可编辑描述 | [查看](https://trionesdev.github.io/antd-react-ext/components/editable-desc) |

### 表单控件

| 组件 | 说明 | 文档 |
| --- | --- | --- |
| ExtInput | 扩展 Input | [查看](https://trionesdev.github.io/antd-react-ext/components/ext-input) |
| ExtInputNumber | 扩展 InputNumber | [查看](https://trionesdev.github.io/antd-react-ext/components/ext-input-number) |
| ExtSelect | 扩展 Select | [查看](https://trionesdev.github.io/antd-react-ext/components/ext-select) |
| ExtTreeSelect | 扩展 TreeSelect | [查看](https://trionesdev.github.io/antd-react-ext/components/ext-tree-select) |
| ExtCheckbox | 扩展 Checkbox | [查看](https://trionesdev.github.io/antd-react-ext/components/ext-checkbox) |
| ExtRadio | 扩展 Radio | [查看](https://trionesdev.github.io/antd-react-ext/components/ext-radio) |
| ExtSwitch | 扩展 Switch | [查看](https://trionesdev.github.io/antd-react-ext/components/ext-switch) |
| ExtDatePicker | 扩展 DatePicker | [查看](https://trionesdev.github.io/antd-react-ext/components/ext-date-picker) |
| FetchSelect | 远程数据 Select | [查看](https://trionesdev.github.io/antd-react-ext/components/fetch-select) |
| FetchTreeSelect | 远程数据 TreeSelect | [查看](https://trionesdev.github.io/antd-react-ext/components/fetch-tree-select) |
| VerificationCodeInput | 验证码输入 | — |

### 表格与工具栏

| 组件 | 说明 | 文档 |
| --- | --- | --- |
| GridTable | 增强表格 | [查看](https://trionesdev.github.io/antd-react-ext/components/grid-table) |
| TableToolbar | 表格工具栏 | [查看](https://trionesdev.github.io/antd-react-ext/components/table-toolbar) |
| SearchToolbar | 搜索工具栏 | [查看](https://trionesdev.github.io/antd-react-ext/components/search-toolbar) |

### 上传与媒体

| 组件 | 说明 | 文档 |
| --- | --- | --- |
| ImageUpload | 图片上传 | [查看](https://trionesdev.github.io/antd-react-ext/components/image-upload) |
| PictureUpload | 图片上传（Picture 模式） | [查看](https://trionesdev.github.io/antd-react-ext/components/picture-upload) |
| VideoUpload | 视频上传 | — |
| AvatarEditor | 头像编辑器 | [查看](https://trionesdev.github.io/antd-react-ext/components/avatar-editor) |

### 工具

| 导出 | 说明 | 文档 |
| --- | --- | --- |
| useCssInJs | CSS-in-JS 样式注册 Hook | — |
| ReactDomUtils | 命令式挂载 React 组件 | [查看](https://trionesdev.github.io/antd-react-ext/components/util) |
| SessionStorageUtils | SessionStorage 工具 | — |

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动文档站点（含组件 Demo）
pnpm dev

# 构建组件库
pnpm build

# 构建文档
pnpm docs:build
```

## License

[MIT](./LICENSE)

---

## 关注我们，一起交流

> 留言回复不及时，可以通过关注公众号联系我们

<div style="width: 100%;text-align: center;">
  <img src="images/shuque_wx.jpg" width="200px" alt="书阙公众号">
</div>
