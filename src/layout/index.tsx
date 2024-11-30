import  {Layout as InternalLayout,LayoutProps} from "./layout";
import {LayoutItem} from "./item";
import {LayoutSider} from "./sider";

type CompoundedComponent = typeof InternalLayout & {
  Item: typeof LayoutItem,
  Sider: typeof LayoutSider
}
const Layout = InternalLayout as CompoundedComponent
export type {LayoutProps}
export default Layout
