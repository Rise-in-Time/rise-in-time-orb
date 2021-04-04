import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueMoment from 'vue-moment';
import store from './store';
import App from './App';
import './global_scss/reset.scss';
import './global_scss/general.scss';
import './global_scss/images.scss';
import Home from './views/home';
import TreasureTable from './views/treasureTable';
import BattleBoard from './views/battleBoard';
import ArtGallery from './views/artGallery';
import Article from './views/article';
import BOI from './views/boi';
import Wiki from './views/wiki';
import {setupMobileDetection} from '@/store';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueMoment);
Vue.config.productionTip = false;

Vue.prototype.$url1 = 'https://backend-dot-riseintime.appspot.com';
// Vue.prototype.$url1 = 'http://localhost:3000';

setupMobileDetection();

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: Home},
        {path: '/treasure-rewards', component: TreasureTable},
        {path: '/battle-board', component: BattleBoard},
        {path: '/art-gallery', component: ArtGallery},
        {path: '/board-of-immortality', component: BOI},
        {path: '/wiki', component: Wiki},
        {path: '*', component: Home},
        // {path: '/faq', component: FAQ},
        {path: '/article/:category/:id', component: Article},
    ],
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');


