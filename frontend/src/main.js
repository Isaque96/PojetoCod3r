import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';
import App from './App';
import './config/bootstrap';
import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false;

// TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IklzYXF1ZSBTY2h1d2FydGUgU2lsdmEiLCJlbWFpbCI6ImlzYXF1ZXNjaHV3YXJ0ZUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjQyMTY2MTc0LCJleHAiOjE2NDI0MjUzNzR9.pd7X-uyqS1_vm9tzbhQuen5e8g7mDWoUntcpiZwwPhw'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')