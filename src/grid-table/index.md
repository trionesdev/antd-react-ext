# GridTable 表格

> 表格

<code src="./demo/base.tsx"></code>
### 可拖动列宽
<code src="./demo/resize-column.tsx"></code>

> 撑满一个高度为300px的容器，内部高度滚动

<code src="./demo/fit-table.tsx"></code>

### Flex 布局

外层为 flex，侧边固定宽度，表格区域 `flex: auto` 并配合 `fit` / `resizable`。父级需设置 `minWidth: 0`，避免拖拽列宽时撑破容器。

<code src="./demo/flex-layout.tsx"></code>

<API id="GridTable"></API>
