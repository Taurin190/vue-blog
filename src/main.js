import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueHead from 'vue-head'
import FirebaseAdmin from 'firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions'
import { firebaseConfig } from '../config/firebase-config'
var fb = firebase.initializeApp(firebaseConfig)
export var firebaseDB = fb.firestore()

Vue.config.productionTip = false
Vue.use(VueHead)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')