const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const LascaLoader = require("lasca-loader");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: / node_modules /,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.(lasca|css)$/,
        loader: "lasca-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  plugins: [new LascaLoader.LascaLoaderVuePlugin(), new VueLoaderPlugin()],
};
