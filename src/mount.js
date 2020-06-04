
export let mount = (vueInstance, id = 'appid') => {
    var target = null;
    if (document.getElementById(id)) {
        target =  document.getElementById(id)
    } else{
        target = document.createElement('div')
        target.id = id
        document.body.append(target)
    }
    if (target) {
        vueInstance.$mount('#' + id)
    }
}