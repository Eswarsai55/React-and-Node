import path from 'path';
import webpack from 'webpack';
export default {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'client/index.js')
  ],
  output: {
    publicPath: '/',
    'filename': 'bundle.js' //we can provide any path here bcoz middleware serve this from memory instead of creating bundle.js file
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [ //webpack intially doesnot know anything about js 
      {
        test: /\.js$/, //look for .js files
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname,'server/shared'),
        ],
        use: {
          loader: 'react-hot', 
          loader: 'babel-loader'
        },// will allow you to use or to transpile ES6 code
      },
      {
        test: /\.html$/,
        use: 
          {
            loader: 'html-loader'
          } 
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  node: {// while dedcoding token on client side to resolve the issue of dns and net
    net: 'empty',
    dns: 'empty',
  }
}