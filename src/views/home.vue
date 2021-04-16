<template>
    <div class="content-container">
        <div class="homepage">
            <search class="search"></search>
            <img class="deco1" src="../assets/groups/group-48.svg" v-if="!isMobile" alt="">
            <img class="deco1-mobile" src="../assets/groups/deco1-reverse.svg" v-if="isMobile" alt="">
            <div class="info-block" v-if="!isMobile">
                <h2 class="info-heading">Info</h2>
                <p class="info-description">
                    Welcome to the Orb, where you can look up several useful types and statistics about the live
                    servers! As you can most likely tell, this page is still work
                    in progress and there is not much content yet.
                    More useful information will gradually be added and of course, we are open for suggestions about
                    what type of content you would like to see here. :)</p>
                <!-- DECO INFO BLOCK -->
                <img alt="deco" class="deco2" src="../assets/groups/vector-35.svg">
                <img alt="deco" class="deco3" src="../assets/groups/vector-37.svg">
            </div>
            <div class="news">
                <NewsBlock></NewsBlock>
            </div>
        </div>
    </div>
</template>

<script>
import NewsBlock from '@/components/newsBlock';
import Search from '@/components/search';
import {mapState} from 'vuex';

export default {
    name: 'HomePage',
    components: {NewsBlock, Search},
    data() {
        return {
            showInput: false
        };
    },
    computed: {
        ...mapState(['isMobile']),
    },
};

</script>

<style scoped>
.news {
    margin-top: -13px;
}

.search {
    margin: 20px auto;
    text-align: center;
}

.b {
    font-weight: bold;
}

.content-container {
    background: #f9f5f0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    overflow: auto;
    padding: 0;
}

.info-block {
    position: relative;
    width: 75.84vw;
    height: auto;
    box-sizing: border-box;
    margin: 51px auto 0 auto;
    text-align: center;
    color: #959595;
    font-size: 18px;
    overflow: visible;
}

.info-heading {
    font-size: 16px;
    margin-bottom: 2px;
}

.info-description {
    line-height: 25px;
    font-size: 16px;
}

.deco1 {
    width: 96.45px;
    height: 14.26px;
    display: block;
    margin: 20px auto -38px auto;
}

.deco2 {
    position: absolute;
    bottom: -10px;
    left: -19px;
    transform: rotateY(180deg);
    height: 17px;
}

.deco3 {
    position: absolute;
    right: -17px;
    bottom: -10px;
    height: 17px;
}

/*CSS Mobile*/
@media screen and (max-width: 900px) {
    .search-input {
        width: 300px;
    }

    .input-field {
        width: 300px;
    }
}

@media screen and (max-width: 400px) {

    #logo {
        margin: 0;
        top: -85px;
        left: -45px;
    }

    .logo-text {
        font-size: 15px;
    }

    .deco1-mobile {
        display: block;
        margin: 10px auto 0 auto;
        width: 123.51px;
        height: 18.26px;
    }

    .article-image {
        width: 281px;
        height: 169px;
        border: 1.5px solid #959595;
        box-sizing: border-box;
    }

    .article-heading {
        width: 281px;
        top: -23px;
    }

    .article-box {
        margin-top: 40px;
    }

    .menu-link-deco {
        display: none;
    }
}

</style>

