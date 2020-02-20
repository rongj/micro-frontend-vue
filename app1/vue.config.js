const path = require("path");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  outputDir: isProd ? path.resolve(__dirname, "../build/app1") : "dist",
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
  devServer: {
    inline: false,
    hot: false
  },
  chainWebpack: config => {
    config.output
      .filename(`[name].js`)
      .library("app1")
      .libraryTarget("umd")
      .end();
    config.plugins.delete("html");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.externals(["vue", "vue-router"]);
  }
};
