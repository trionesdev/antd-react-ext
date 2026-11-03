# AppToolbar 应用工具栏

> 应用工具栏。可通过 `height` 设置高度，默认 `60`（与原先固定高度一致）。

通过 `menu` 配置水平导航，支持 `items`、`selectedKeys`、`onClick` 等 Ant Design Menu 属性，`mode` 固定为 `horizontal`。不传或设置为 `false` 时隐藏菜单。

`logo` 接收 Avatar 属性，默认尺寸为 40、形状为方形；`extra` 用于右侧操作。长标题会自动省略，字符串标题可悬停查看完整内容。`className` 和 `style` 均作用于工具栏根节点。

<code src="./demo/base.tsx"></code>

<API id="AppToolbar"></API>
