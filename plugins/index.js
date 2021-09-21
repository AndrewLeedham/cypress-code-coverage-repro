const { startDevServer } = require('@cypress/webpack-dev-server');
// your project's webpack configuration
const webpackConfig = require('../webpack.config.js');

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);
  if (config.testingType === 'component') {
    on('dev-server:start', (options) => {
      return startDevServer({ options, webpackConfig });
    });
  }

  return config;
};
