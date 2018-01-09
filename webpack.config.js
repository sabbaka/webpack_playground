const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        include: [
          path.resolve(__dirname, './src/icons')
        ],
        exclude: [
          path.resolve(__dirname, './src/images')
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        include: [
          path.resolve(__dirname, './src/images')
        ],
        exclude: [
          path.resolve(__dirname, './src/icons')
        ],
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              }
            }
          }
        ]
      }
    ]
  }
};
