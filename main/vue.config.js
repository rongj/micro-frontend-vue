const path = require("path");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  outputDir: isProd ? path.resolve(__dirname, "../build/main") : "dist",
  productionSourceMap: false,
  css: {
    extract: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "#3697ff",
          "@border-radius-base": "2px",
          "@btn-border-radius-base": "2px",
          "@outline-width": "0px",
          "@border-color-base": "#e9e9e9"
        },
        localIdentName: "[local]--[hash:base64:5]"
      }
    }
  },
  configureWebpack: config => {
    config.resolve.alias["@ant-design/icons/lib/dist$"] = path.resolve(
      __dirname,
      "./src/icons/index.js"
    );
  },
  devServer: {
    inline: false,
    hot: false
  },
  chainWebpack: config => {
    config.output
      .filename(`[name].js`)
      .library("main")
      .libraryTarget("umd")
      .end();
    // config.plugins.delete("html");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.externals(["vue", "vue-router"]);

    // 去掉主项目的js自动注入html
    config.plugin("html").tap(args => {
      args[0].inject = false;
      return args;
    });
  },
  // 修改主项目的html目录至上级根目录
  indexPath: "../index.html"
  // filenameHashing: false
};
