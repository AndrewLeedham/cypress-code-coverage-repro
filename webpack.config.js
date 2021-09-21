module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  mode: 'development',
  devtool: false,
  output: {
    publicPath: '/',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        options: {
            configFile: './babel.config.json'
        }
      },
    ],
  },
  devServer: {
    stats: 'errors-only',
    noInfo: true,
  },
  stats: 'errors-only',
};
