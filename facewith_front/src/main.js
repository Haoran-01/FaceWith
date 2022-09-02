import { createApp } from 'vue'
import App from './App.vue'
import TDesign from 'tdesign-vue-next';
import router from "@/router";

import './theme.css';


const app = createApp(App);
app.use(TDesign);
app.use(router);
app.mount('#app')
