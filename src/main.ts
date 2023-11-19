
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';

import Button from "primevue/button";
import Menu from 'primevue/menu';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import Card from 'primevue/card';
import Image from 'primevue/image';
import Textarea from 'primevue/textarea';

import App from './App.vue';
import router from './router';


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple : true });
app.component('Button', Button)
    .component('Menu', Menu)
    .component('Avatar', Avatar)
    .component('Badge', Badge)
    .component('Card', Card)
    .component('Image', Image)
    .component('Textarea', Textarea);

app.mount('#app');
