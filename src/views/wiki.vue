<template>
    <div class="wiki">
        <h1 class="title">List of wiki articles (under construction)</h1>
        <search :in-menu="false"></search>
        <div class="structure-container">
            <div v-for="category in articleCategories">
                <h2 class="category-title">{{ category.name }}</h2>
                <div v-for="article in category.articles" class="article clickable"
                     @click="onArticleClick(category, article)">
                    {{ article.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import articleContents from '../data/articles/articleContents.json';
import Search from '@/components/search';

export default {
    name: 'Wiki',
    components: {Search},
    computed: {
        articleCategories() {
            articleContents.articleCategories.forEach(category => {
                category.articles = category.articles.filter(a => !a.hideInOverview);
            });
            return articleContents.articleCategories.filter(category => !category.hideInOverview);
        },
    },
    methods: {
        onArticleClick(category, article) {
            this.$router.push({path: `article/${category.folderName}/${article.fileName}`});
        },
    },
};
</script>

<style lang="scss">
.wiki {
    color: #6C6C6C;
    width: 500px;
    margin: 0 auto;

    .title {
        font-weight: bold;
        font-size: 20px;
        margin: 20px 0 30px 0;
        text-align: center;
    }

    .structure-container {
        .category-title {
            font-weight: bold;
            margin: 20px 0 10px 0;
        }

        .article {
            margin: 0 0 8px 20px;
        }
    }
}

@media screen and (max-width: 650px) {
    .wiki {
        width: calc(100vw - 60px);
        margin: 0 30px;
    }
}
</style>