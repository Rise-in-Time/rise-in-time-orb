<template>
    <div class="app-container">
        <mobile-menu v-if="showMobileMenu"></mobile-menu>
        <Menu v-else> 1370"></Menu>
        <router-view></router-view>
    </div>
</template>

<script>
import MobileMenu from './components/mobileMenu';
import Menu from './components/menu';
import {mapState} from 'vuex';

export default {
    name: 'app',
    components: {Menu, MobileMenu},
    computed: {
        ...mapState(['isMobile']),
        showMobileMenu() {
            return this.isMobile || window.innerWidth < 1370;
        },
    },
};
</script>

<style>
/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Unna:wght@400;700&display=swap');

.app-container {
    padding-top: 55px;
}
</style>