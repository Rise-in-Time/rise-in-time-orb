<template>
    <div class="app-container">
        <Menu v-if="!$isMobile"></Menu>
        <mobile-menu v-else></mobile-menu>
        <router-view></router-view>
    </div>
</template>

<script>
import MobileMenu from './components/mobileMenu';
import Menu from './components/menu';

export default {
    name: 'app',
    components: {Menu, MobileMenu},
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