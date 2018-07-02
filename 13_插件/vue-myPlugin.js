(function (window) {
    const MyPlugin={}
    MyPlugin.install=function (Vue,options) {
        Vue.myGlobalMethod=function () {
            console.log('Vue函数对象的myGlobalMethod（）');

        }
        Vue.directive('my-directive',function (el,binging) {
            el.textContent=binging.value.toUpperCase()
        })
        Vue.prototype.$myMethod=function () {
            console.log('vm的$myMethod（）');
        }

    }


    window.MyPlugin=MyPlugin
})(window)