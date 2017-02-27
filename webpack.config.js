const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const examplePath = './example';
const entryPath = `${examplePath}/src/example.jsx`;
const outputPath = `${examplePath}/dist`;

module.exports = () => ({
  entry: {
    main: path.resolve(__dirname, entryPath),
  },
  devServer: {
    inline: true,
    port: 8000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, outputPath),
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
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-0', 'react'],
            },
          },
        ],
        exclude: [
          '/node_modules/',
        ],
      },
      {
        test: /\.(css|scss)$/,
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
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'highlight-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'example/font/[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './example/src/index.html',
    }),
  ],
});
