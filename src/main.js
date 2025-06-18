import { createApp } from 'vue'
import App from './App.vue'
import store from './store/storage'
// import { createNaverMap } from "vue3-naver-maps";
import Antd from 'ant-design-vue'
import Components from './components/Global/'
import './assets/css/font.css'
import './assets/css/common.css'
import './assets/css/pc.css'
import './assets/css/antd.css'
import './assets/css/guide.css'
import 'ant-design-vue/dist/reset.css'
import '@vuepic/vue-datepicker/dist/main.css'
// createApp(App).mount('#app')

const app = createApp(App);

import router from './router.js'
app.use(router);
app.use(store);
// app.use(createNaverMap, {
//     clientId: "your clientId", // Required
//     category: "ncp", // Optional
//     subModules: [], // Optional
// })
app.use(Components);
app.use(Antd);
app.mount("#app");