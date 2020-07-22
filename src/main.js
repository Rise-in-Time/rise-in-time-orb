import Vue from 'vue';
import HomePage from './components/homePage';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import '../reset.css';
import '../general.css';
import '../images.css';
import TreasureTable from './components/pages/treasureTable';
import BattleBoard from './components/pages/battleBoard';
import ArtGallery from './components/pages/artGallery';
import BOI from './components/pages/boi';
import DetectAgent from './helper/detectAgent';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.prototype.$url1 = 'https://backend-dot-riseintime.appspot.com';
// Vue.prototype.$url1 = 'http://localhost:3000';

// is mobile
Vue.prototype.$isMobile = DetectAgent(navigator.userAgent || navigator.vendor || window.opera);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: HomePage},
        {path: '/articles/treasure-rewards', component: TreasureTable},
        {path: '/articles/battle-board', component: BattleBoard},
        {path: '/articles/art-gallery', component: ArtGallery},
        {path: '/articles/board-of-immortality', component: BOI},
        {path: '*', component: HomePage},
        // {path: '/articles/faq', component: FAQ},
        // {path: '/articles/:id', component: ArticlePage},
    ],
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');


