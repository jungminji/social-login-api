const MyPlugin = {
  install (Vue, options) {
    Vue.globalMethod = function () {
    }
    Vue.mixin({
      created () {
        console.log('myplugin is created')
      },
      mounted () {
        console.log('myplugin is mounted')
      }
    })
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {}
    })
    Vue.prototype.$myMethod = function (methodOptions) {}
  }
}

export default MyPlugin
