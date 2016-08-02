module.exports = {
  entry: {
    index: './client/app.js',
  },
  output: {
    filename: './public/bundle.js',
  },
  module: {
    loaders: [{
        test: /.*\.(js||jsx)$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: [ 'es2015', 'react' ],
        },
      },
    ],
  },
 plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
};
