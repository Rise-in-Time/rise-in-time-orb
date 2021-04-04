import Vue from 'vue';
import Vuex from 'vuex';
import DetectAgent from '@/helper/detectAgent';
import {units} from '@/data/gameData';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isMobile: false,
        gameData: {
            units: units,
        },
    },
    mutations: {
        updateIsMobile(state) {
            state.isMobile = DetectAgent(navigator.userAgent || navigator.vendor || window.opera);
        },
    },
});
export default store;

export const setupMobileDetection = () => {
    store.commit('updateIsMobile');
    window.addEventListener('resize', () => {
        store.commit('updateIsMobile');
    });
};
