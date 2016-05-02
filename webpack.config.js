var path = require("path");

module.exports = {
  entry: {
    app: ["./example/app.js"]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/"
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  },
};
