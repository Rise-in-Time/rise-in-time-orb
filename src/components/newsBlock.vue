<template>
    <div>
        <div class="article-box">
            <div class="article-flex-display">
                <div v-for="(index) in news" v-bind:key="index.index" class="news-block">
                    <div class="article">
                        <router-link :to="{path: 'articles/' + index.route}">
                            <div class="article-image"
                                 :style="'background-image:url(' + require('../assets/articles/' + index.image) + ')'"
                                 v-bind:key="index.key"></div>
                            <img alt="" class="news-deco" src="../assets/groups/vector-news.svg">
                            <h2 class="article-heading">{{ index.heading }}</h2>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import News from '../data/home-articles.json';

export default {
    name: 'article-item',
    components: {},
    data() {
        return {
            news: []
        };
    },
    beforeMount() {
        this.news = News;
    }
};

</script>

<style scoped>
.news-block {
    height: auto;
    margin-bottom: 15px;
}

.article-flex-display {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1150px;
    margin-top: 30px;
}

.article {
    position: relative;
    margin: 0px 2vw 40px 1vw;
    background-repeat: no-repeat;
    background-position: center;
}

.article-image {
    background-repeat: no-repeat;
    background-size: cover;
    width: 315px;
    height: 171px;
    border: 1px solid #959595;
}

.article-box {
    width: 80%;
    height: 100%;
    margin: 50px auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.article-heading {
    width: 310px;
    text-align: center;
    color: #959595;
    font-size: 16px;
    position: absolute;
    top: -20px;
}

.news-deco {
    position: absolute;
    top: -8px;
    left: -18px;
    width: 29.36px;
    height: 50px;
}

</style>