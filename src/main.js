import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueMoment from 'vue-moment';
import VueGtag from 'vue-gtag';
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
        {path: '/', component: Home, name: 'Landing Page'},
        {path: '/treasure-rewards', component: TreasureTable, name: 'Treasure Reward'},
        {path: '/battle-board', component: BattleBoard, name: 'Battle Board'},
        {path: '/art-gallery', component: ArtGallery, name: 'Art Gallery'},
        {path: '/board-of-immortality', component: BOI, name: 'Board of Immortality'},
        {path: '/wiki', component: Wiki, name: 'Wiki Home'},
        {path: '*', component: Home, name: 'Landing Page'},
        // {path: '/faq', component: FAQ, name: 'FAQ'}},
        {path: '/article/:category/:id', component: Article, name: 'Treasure Reward'},
    ],
});

// Google Analytics
Vue.use(VueGtag, {
    config: {
        id: process.env.NODE_ENV === 'production' ? 'G-ZWDZPMSX96' : 'G-29Y7R7YPRJ',
        params: {send_page_view: false}
    }
}, router);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');


