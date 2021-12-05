module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.jsx$/,
      loader: "lasca-loader",
      options: {
        selfStyleImport: true,
      },
    });
    return config;
  },
};
