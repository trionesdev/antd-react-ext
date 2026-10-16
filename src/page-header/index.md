# PageHeader 页头

页头组件，常用于详情页、列表页顶部。支持返回、面包屑、操作区、内容区与底部区域。`size`：`default` 默认、`small` 紧凑、`mini` 无内边距（与 Box 一致）。

## 基础用法

带返回按钮、副标题与右侧操作。

<code src="./demo/base.tsx"></code>

## 尺寸

<code src="./demo/size.tsx"></code>

## 面包屑

通过 `breadcrumb` 传入 antd `Breadcrumb` 属性。

<code src="./demo/breadcrumb.tsx"></code>

## 自定义返回

通过 `back` 自定义返回区域；`showBack={false}` 可隐藏。自定义元素未设置 `onClick` 时会注入 `onBack`。

<code src="./demo/back.tsx"></code>

## 操作区

`extra` 可放置多个按钮、下拉菜单等；`showBack={false}` 可隐藏返回按钮。

<code src="./demo/extra.tsx"></code>

## 内容区与底部

`children` 用于标题下方内容（如描述列表），`footer` 常用于 Tab。

<code src="./demo/content.tsx"></code>

<API id="PageHeader"></API>
