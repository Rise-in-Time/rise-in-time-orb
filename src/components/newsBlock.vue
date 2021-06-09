<template>
    <div class="article-flex-display">
        <div v-for="(index) in news" :key="index.index" class="news-block">
            <div class="article">
                <router-link :to="{path: index.route}">
                    <div class="article-image"
                         :style="'background-image:url(' + require('../assets/home/' + index.image) + ')'"
                         :key="index.key"></div>
                    <img alt="" class="news-deco" src="../assets/groups/vector-news.svg">
                    <h2 class="article-heading">{{ index.heading }}</h2>
                </router-link>
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
            news: [],
        };
    },
    beforeMount() {
        this.news = News;
    },
};

</script>

<style scoped>
.news-block {
    height: auto;
    margin-bottom: 15px;
}

.article-flex-display {
    width: 80%;
    margin: 100px auto 20px auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
}

.article {
    position: relative;
    margin: 0 10px 40px 10px;
    background-repeat: no-repeat;
    background-position: center;
}

.article-image {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 250px;
    height: 171px;
    border: 1px solid #959595;
}

.article-heading {
    width: 250px;
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