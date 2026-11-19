# SearchToolbar 搜索工具栏

> 搜索工具栏。支持 `size`：`default` 为默认尺寸，`small` 为紧凑尺寸（更小的内边距、表单项间距，以及控件 `size="small"`），`mini` 时 padding 为 0（与 Box 一致）。

> 响应式栅格，配置建议 span={6} xxl={4} xl={6} lg={6} md={8} sm={12} xs={24}

## 尺寸与响应式布局

<code src="./demo/base.tsx"></code>

## 内联即时搜索

`inline` 模式下条件自动换行，展示全部字段。`showSearch`、`showReset` 可分别控制按钮显隐，两种布局均支持自定义按钮文字。

开启 `triggerSearchOnValuesChange` 后，用户修改条件会直接触发 `onSearch`（不等待校验）；适用于无需提交校验的筛选条件。远程搜索可在业务回调中按需防抖。

<code src="./demo/inline.tsx"></code>

## 受控展开与表单校验

通过 `expand` 和 `afterExpandChange` 控制展开状态，也可用 `defaultExpand` 设置非受控初始状态。`afterExpandChange` 在点击展开/收起时返回目标状态。

查询按钮及回车提交通过 Form 校验后调用 `onSearch`。收起字段仍保留值并参与校验；单列布局至少保留一个搜索条件。

重置恢复 `initialValues`，并将恢复后的值传给 `onSearchParamsChange`，随后调用 `onReset`；开启即时搜索时也会触发一次 `onSearch`。外部调用 `form.setFieldsValue` 遵循 Ant Design 行为，不触发用户输入回调。

<code src="./demo/controlled.tsx"></code>

<API id="SearchToolbar"></API>
