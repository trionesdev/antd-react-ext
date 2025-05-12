import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/antd-react-ext/',
  publicPath: '/antd-react-ext/',
  outputPath: 'docs-dist',
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
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
