const LascaLoader = require("lasca-loader");

export default {
  build: {
    extend(config, ctx) {
      if (!config.module) return;
      config.module.rules.push({
        test: /\.(lasca|css)$/,
        loader: "lasca-loader",
      });
      config.plugins.unshift(new LascaLoader.LascaLoaderVuePlugin());
    },
  },
};
