const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const proxy = require('http-proxy-middleware');
module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    publicPath: '/',
    filename: "main.js",
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader",
        // 添加浏览器自动加前缀配置
        {loader: 'postcss-loader',options:{plugins:[require("autoprefixer")("last 100 versions")]}}
      ]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader",
        // 添加浏览器自动加前缀配置
        {loader: 'postcss-loader',options:{plugins:[require("autoprefixer")("last 100 versions")]}},
        "less-loader"
      ]
      },
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/
        
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: __dirname + '/dist',//本地服务器所加载的页面所在的目录
    port: 1212,
    inline: true,
    hot: true,
    historyApiFallback: true
  },
  
};
