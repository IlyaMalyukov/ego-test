import { createApp } from 'vue';
import 'vfonts/Roboto.css';
import './style.css';
import { router } from './router';
import App from './index.vue';

const app = createApp(App);

app.use(router);
app.mount('#app');
