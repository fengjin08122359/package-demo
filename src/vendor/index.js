let Vue
if (process.env.VUE_APP_MOUNT_TARGET !== 'engineer') {
    Vue  = require('vue').default
} else {
    Vue = window.engineer.require('vue').default
}

export {
    Vue
}