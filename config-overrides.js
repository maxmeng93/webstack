const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { // 自定义主题样式 替换antd less变量
      // '@primary-color': '#1DA57A',
    },
  }),
  addWebpackAlias({
    '@': resolve("src")
  })
);