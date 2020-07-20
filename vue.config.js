module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack: () => ({
    optimization: {
     splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
     }
    }
  }),
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  productionSourceMap: false,
  pages: {
    index: {
      entry: process.env.VUE_APP_node_entry || 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'index',
      favicon:'public/favicon.ico'
    },
  },
  runtimeCompiler: true,
  devServer: {
      "port": "8080",
      // "proxy": {
      //   "/any800/": {
      //     "target": "http://jk.demo.xiaoi.net",
      //     "changeOrigin": true
      //   }
      // }
    }
}