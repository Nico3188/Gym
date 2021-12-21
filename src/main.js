import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
//Import axios
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'

createApp(App).use(router).use(VueAxios, axios).mount('#app')
