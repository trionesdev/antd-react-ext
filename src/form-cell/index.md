# FormCell 表单项包装

将自定义内容包装成与 antd `Input` / `Select` 一致的表单控件外观，适用于选择器触发器、只读展示、组合字段等场景。支持 `prefix`、`suffix`、`size`、`disabled`、`variant`，并会读取 `ConfigProvider` 与 `Form.Item` 上下文。

## 基础用法

<code src="./demo/base.tsx"></code>

## 前缀与后缀

与 Input 一样，可通过 `prefix` / `suffix` 放置图标或辅助内容。

<code src="./demo/prefix-suffix.tsx"></code>

## 尺寸

支持 `small` / `middle` / `large`，高度与 antd 控件对齐。未指定时继承 `ConfigProvider` 的 `componentSize`。

<code src="./demo/size.tsx"></code>

## 形态变体

支持 `outlined`、`filled`、`borderless`、`underlined`。未指定时依次继承 `Form`、`ConfigProvider` 的 `variant`。

<code src="./demo/variant.tsx"></code>

## 禁用

<code src="./demo/disabled.tsx"></code>

## 校验状态

可通过 `status` 指定 `error` / `warning`。放在 `Form.Item` 内时会自动读取校验状态。

<code src="./demo/status.tsx"></code>

## 表单中使用

<code src="./demo/form.tsx"></code>

<API id="FormCell"></API>
