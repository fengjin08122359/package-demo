

let Vue, vuex ,mapActions, mapGetters, mapMutations, mapState, Router

if (process.env.VUE_APP_MOUNT_TARGET !== 'engineer') {
    Vue  = require('vue').default
    vuex, {mapActions, mapGetters, mapMutations, mapState} = require('vuex')
    vuex = require('vuex').default
    Router = require('vue-router').default
} else {
    Vue = window.engineer.require('vue').default
    vuex, {mapActions, mapGetters, mapMutations, mapState} = window.engineer.require('vuex')
    vuex = window.engineer.require('vuex').default
    Router = window.engineer.require('vue-router').default
}

export {
    Vue,
    vuex,
    mapActions,
    mapGetters,
    mapMutations,
    mapState,
    Router
}