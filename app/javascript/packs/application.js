import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from '../routes';
import store from '../store/index';
import App from '../app';
import http from '../http';

import '../assets/css/application';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#application',
    store,
    router,
    render: (h) => h(App),
  });
});
