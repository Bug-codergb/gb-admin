const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const factory = require("../config/webpack.config");
const { checkVersion } = require("../config/check-version");
const config = factory("development");
const { createProxy } = require("../config/createProxy");
const compiler = webpack(config);

const rootPath = process.cwd();
checkVersion();
const devServer = new WebpackDevServer(
  {
    open: true,
    port: process.env.CLIENT_PORT,
    static: [
      {
        directory: path.resolve(rootPath, "./public"),
        publicPath: "/"
      },
      {
        directory: path.resolve(rootPath, "./src/common"),
        publicPath: "/guobin"
      }
    ],
    client: {
      overlay: true
    },
    proxy: createProxy(process.env.PROXY)
  },
  compiler
);
devServer.startCallback(err => {
  if (!err) {
    console.log("服务启动");
  } else {
    console.log(err);
  }
});
