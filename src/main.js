import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueHead from 'vue-head'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from '../config/firebase-config.local'
export var firebaseDB = firebase.initializeApp(firebaseConfig).firestore()

Vue.config.productionTip = false
Vue.use(VueHead)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')