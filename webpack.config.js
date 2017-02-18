const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const examplePath = './src/example';
const entryPath = `${examplePath}/src/app.jsx`;
const outputPath = `${examplePath}/build`;

module.exports = () => ({
  entry: {
    main: entryPath,
  },
  devServer: {
    inline: true,
    port: 7700,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(outputPath),
  },
  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          },
        }],
        exclude: [
          '/node_modules/',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/example/src/index.html',
    }),
  ],
});
