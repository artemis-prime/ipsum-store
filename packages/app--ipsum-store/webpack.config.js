// https://www.carlrippon.com/creating-react-app-with-typescript-eslint-with-webpack5/
const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: { 
    path: path.join(__dirname, 'dist'), 
    filename: 'index.bundle.js' 
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.mjs'],
    alias: {
      '~': path.resolve(__dirname, 'src/'),
      '~assets': path.resolve(__dirname, 'assets/'),
      '~scripts': path.resolve(__dirname, 'scripts/'),
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 8080,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {            
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
    }),
    new HotModuleReplacementPlugin(),
    // https://answers.netlify.com/t/cant-access-environment-variables/20314/11
    // Need this for env to be read from netlify correactly
    new Dotenv({
      systemvars: true  
    })
  ],
}