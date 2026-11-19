import { defineConfig } from 'dumi';
import { createRequire } from 'node:module';
import path from 'node:path';
import process from 'node:process';
const requireFromAntd = createRequire(require.resolve('antd/package.json'));
const apiParserEnable =
  process.env.NODE_ENV === 'production' || process.env.API_PARSER == 'true';
export default defineConfig({
  alias: {
    // 文档预打包需统一 util，旧版本未导出 useLayoutEffect 等命名 hook。
    '@rc-component/util': path.dirname(
      requireFromAntd.resolve('@rc-component/util/package.json'),
    ),
  },
  base: '/antd-react-ext/',
  publicPath: '/antd-react-ext/',
  outputPath: 'docs-dist',
  apiParser: apiParserEnable ? {} : false,
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  theme: {
    '@s-content-width': '1800px',
    '@s-sidebar-width': '284px',
  },
  themeConfig: {
    editLink: true,
    name: 'Antd Extensions',
    logo: '/antd-react-ext/logo.png',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components' },
    ],
    socialLinks: {
      github: 'https://github.com/trionesdev/antd-react-ext',
      zhihu: 'https://www.ithere.net/',
    },
    footer:
      '<div><div>Copyright © 2015-present TrionesDev</div><div>友情链接： <a href="https://www.ithere.net/" target="_blank">书阙</a>  <a href="https://www.trionesdev.com/" target="_blank">TrionesDev</a> </div></div>',
  },
});
