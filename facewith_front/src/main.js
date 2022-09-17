import { createApp } from 'vue'
import App from './App.vue'
import TDesign from 'tdesign-vue-next';
import router from "@/router";

import 'tdesign-vue-next/es/style/index.css';
import {createPinia} from "pinia";


const app = createApp(App);
const pinia = createPinia();
app.use(TDesign);
app.use(router);
app.use(pinia);
app.mount('#app')
