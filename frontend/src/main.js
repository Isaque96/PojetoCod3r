import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';
import App from './App';
import './config/bootstrap';
import './config/msgs';
import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false;

// TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IklzYXF1ZSBTY2h1d2FydGUgU2lsdmEiLCJlbWFpbCI6ImlzYXF1ZXNjaHV3YXJ0ZUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjQyMjUwMjEzLCJleHAiOjE2NDI1MDk0MTN9.wtk9jnJwodFKrqcUzVBHc3pCVZoAdT3vsYBw76eEpWI'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')