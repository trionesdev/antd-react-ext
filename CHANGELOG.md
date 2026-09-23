# Changelog

本文件记录 `@trionesdev/antd-react-ext` 各版本的变更，格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)。

## [Unreleased]

### Added

- 新增 `ImageUpload` 图片上传组件

### Changed

- 更新 README：补充 antd 版本依赖说明与组件列表

---

## [6.0.0-beta.9] - 2026-07-08

### Added

- 新增 `FormCell` 表单项包装组件

### Changed

- `GridTable`：优化滚动逻辑与可调整列宽实现
- `GridTable`：移除调试日志

---

## [6.0.0-beta.8] - 2026-07-07

### Fixed

- `GridTable`：修复 `fit` 模式下表格高度计算逻辑（纳入 summary 行高度）

### Changed

- `GridTable`：优化样式处理，支持合并外部传入的 `styles`
- `ModalForm` / `DrawerForm`：更新 `onClose` 事件类型，与 antd 6 `DrawerProps` 保持一致

---

## [6.0.0-beta.7] - 2026-07-07

### Changed

- `GridTable`：重构自适应高度实现，简化 ResizeObserver 逻辑，优化依赖与性能
- 升级开发依赖（antd、eslint、dumi 等），新增 `pnpm-workspace.yaml`

---

## [6.0.0-beta.6] - 2026-07-07

### Added

- `GridTable`：新增可拖拽调整列宽功能（`resizable`），含 Demo 与文档 ([#2](https://github.com/trionesdev/antd-react-ext/pull/2))

### Changed

- `SearchToolbar`：重构搜索工具栏，支持受控/非受控展开（`expand` / `defaultExpand`）、响应式列宽配置及布局补偿逻辑
- `SearchToolbar`：升级搜索表单扩展能力

---

## [6.0.0-beta.5] - 2026-03-26

> 注：`6.0.0-beta.3`、`6.0.0-beta.4` 未发布，版本号由 beta.2 直接跳至 beta.5。

### Changed

- `PageHeader`：优化页面头部布局样式
- 调整依赖结构：新增 `@rc-component/select` peer 依赖，重组 `pnpm-lock.yaml`

---

## [6.0.0-beta.2] - 2026-01-22

### Added

- `FetchSelect`：支持透传 `showSearch` 搜索配置（`SearchConfig`）
- `SearchToolbar`：扩展表单能力 ([#1](https://github.com/trionesdev/antd-react-ext/pull/1))

### Changed

- `FetchSelect`：优化远程数据请求与搜索防抖逻辑
- `ExtSelect`：小幅调整

---

## [6.0.0-beta.1] - 2025-12-25

### Changed

- **Breaking**：扩展表单控件只读属性由 `readonly` 重命名为 `readOnly`（影响 `ExtFormField` 及所有 Ext 系列组件）
- `ExtInput` / `ExtInputNumber`：新增 `addonBefore`、`addonAfter` 前后缀支持
- `ExtDateRangePicker`：适配 antd 6 API 变更
- `ExtSelect` / `ExtTreeSelect` / `ExtSwitch` / `ExtFormField`：重构与优化
- 更新 `.gitignore`，忽略 npm 配置文件

---

## [6.0.0-beta.0] - 2025-12-10

### Added

- 新增 `ExtCheckbox`、`ExtRadio`、`ExtSwitch` 扩展表单控件及文档 Demo
- `ExtDatePicker`：补充文档与 Demo

### Changed

- **Breaking**：升级至 [Ant Design 6](https://ant.design/)（peer 依赖 `antd >= 6.1.0`、`@ant-design/icons >= 6.1.0`、`@ant-design/cssinjs >= 2.0.1`）
- **Breaking**：版本号从 `0.0.7-beta.x` 迁移至 `6.0.0-beta.x`，与 antd 主版本对齐
- 全量适配 antd 6 API 变更：`ExtInput`、`ExtDatePicker`、`ExtRadio`、`ExtSelect`、`ExtTreeSelect`、`FetchSelect`、`FetchTreeSelect`、`PictureUpload`、`VerificationCodeInput` 等
- `FetchSelect` / `FetchTreeSelect`：重构远程数据加载逻辑
- `ExtFormField`：增强扩展表单字段能力
- `cropperjs` 升级至 `^2.1.0` 并移至 `dependencies`
- `lodash-es` 从 peer 依赖移至 `dependencies`

### Removed

- 移除 peer 依赖中的 `lodash-es`
