import {defineConfig} from 'dumi';

export default defineConfig({
  base:'/antd-react-ext/',
  publicPath:'/antd-react-ext/',
  outputPath: 'docs-dist',
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.tsx',
  },
  themeConfig: {
    name: 'antd-ext',
    nav: [
      {title: '指南', link: '/guide'},
      {title: '组件', link: '/components'}
    ],
  },
});
