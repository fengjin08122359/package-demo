const currentname = require('./package.json').name

module.exports = {
    plugins: [
      require('autoprefixer'),
      process.env.VUE_APP_MOUNT_TARGET === 'engineer' && require('postcss-plugin-namespace')(`.${currentname}`)
    ]
}
