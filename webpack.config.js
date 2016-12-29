var webpack = require('webpack')
var path = require('path')
module.exports ={
  entry:{
    app:'./src/app.js'
  },
  output:{
    filename:'public/build/bundle.js',
    sourceMapFilename:'public/build/bundle.map'
  },
  devtool:'#source-map',
  module:{
    loaders:[
      {
          test: /\.jsx?$/,
          exclude:/(node_modules)/,
          loader:'babel',
          query:{
            presets:['react','es2015']
          }
      }
    ]
  }
}
