import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/index.js'
import vuetify from './plugins/vuetify';
import fb from './firebaseConfig'

Vue.config.productionTip = false

let app
fb.auth.onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            vuetify,
            render: h => h(App)
        })
    }
})
/*
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
*/
