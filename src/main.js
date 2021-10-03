import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element.js'

import 'nprogress/nprogress.css';

import TreeView from "vue-json-tree-view"
Vue.use(TreeView);

import VueBlobJsonCsv from 'vue-blob-json-csv';

Vue.use(VueBlobJsonCsv)

import VJsoneditor from 'v-jsoneditor'

Vue.use(VJsoneditor)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
