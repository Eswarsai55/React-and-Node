import path from 'path';
export default {
  entry: path.join(__dirname, 'client/index.js'),
  output: {
    publicPath: '/',
    'filename': 'bundle.js' //we can provide any path here bcoz middleware serve this from memory instead of creating bundle.js file
  },
  module: {
    rules: [ //webpack intially doesnot know anything about js 
      {
        test: /\.js$/, //look for .js files
        use: { 
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
  }
}