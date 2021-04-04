import Vue from 'vue';
import HomePage from './components/home';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueMoment from 'vue-moment';
import store from './store';
import App from './App';
import './global_scss/reset.scss';
import './global_scss/general.scss';
import './global_scss/images.scss';
import TreasureTable from './components/pages/treasureTable';
import BattleBoard from './components/pages/battleBoard';
import ArtGallery from './components/pages/artGallery';
import Article from './components/article';
import BOI from './components/pages/boi';
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
        {path: '/', component: HomePage},
        {path: '/treasure-rewards', component: TreasureTable},
        {path: '/battle-board', component: BattleBoard},
        {path: '/art-gallery', component: ArtGallery},
        {path: '/board-of-immortality', component: BOI},
        {path: '*', component: HomePage},
        // {path: '/faq', component: FAQ},
        {path: '/article/:category/:id', component: Article},
    ],
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');


