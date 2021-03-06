import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// components
import Loader from "@/components/app/Loader";

// firebase
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";

import dateFilter from "@/filters/date.filter";
import tooltipDirective from "@/directives/tooltip.directive";
import currencyFilter from "@/filters/currency.filter";
import localizeFilter from "@/filters/localize.filter";
import Vuelidate from 'vuelidate';

import Paginate from 'vuejs-paginate'

import 'materialize-css/dist/js/materialize.min';
import messagePlugin from './utils/message.plugin';


Vue.config.productionTip = false
Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.filter('localize', localizeFilter);
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);


const firebaseConfig = {
  databaseURL: "https://vuecrm-44e9b-default-rtdb.europe-west1.firebasedatabase.app/",
  apiKey: "AIzaSyBEOIK1nLPKQ46PirR0h5fK3IzN_zIzlq0",
  authDomain: "vuecrm-44e9b.firebaseapp.com",
  projectId: "vuecrm-44e9b",
  storageBucket: "vuecrm-44e9b.appspot.com",
  messagingSenderId: "1088703832006",
  appId: "1:1088703832006:web:4c6e8bfb978ac233c2dcc7"
};


let appVue;
getAuth(initializeApp(firebaseConfig)).onAuthStateChanged(() => {
  // Check for user status

  if (!appVue) {
    appVue = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});

