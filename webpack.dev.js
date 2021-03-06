const {merge} = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.js');

const RemoveFilesWebpackPlugin = require('remove-files-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(commonWebpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new RemoveFilesWebpackPlugin({
      before: {
        // parameters for "before normal compilation" stage.
        include: [
          './dist'
        ]
      },
      watch: {
        // parameters for "before watch compilation" stage.
      },
      after: {
        // parameters for "after normal and watch compilation" stage.
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/vendors',
          to: './vendors'
        },
        {
          from: './src/images',
          to: './images'
        }
      ]
    }),
  ]
});