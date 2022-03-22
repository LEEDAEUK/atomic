var path = require('path');

module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src/'),
      },
    },
  },
  lintOnSave: false,
};
