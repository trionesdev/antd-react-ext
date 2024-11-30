import { LayoutItem } from './item';
import { Layout as InternalLayout, LayoutProps } from './layout';
import { LayoutSider } from './sider';

type CompoundedComponent = typeof InternalLayout & {
  Item: typeof LayoutItem;
  Sider: typeof LayoutSider;
};
const Layout = InternalLayout as CompoundedComponent;
Layout.Item = LayoutItem;
Layout.Sider = LayoutSider;
export type { LayoutProps };
export default Layout;
