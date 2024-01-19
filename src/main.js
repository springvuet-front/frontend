import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import InfiniteLoading from 'vue-infinite-loading';

createApp(App).use(router).mount('#app')