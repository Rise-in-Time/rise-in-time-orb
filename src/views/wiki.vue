<template>
    <div class="wiki">
        <h1 class="title">Wiki Articles</h1>
        <search :in-menu="false" class="search"></search>
        <div class="structure-container">
            <div v-for="category in articleCategories" class="category">
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

    .title {
        font-weight: bold;
        font-size: 20px;
        margin: 20px 0 20px 0;
        text-align: center;
    }

    .search {
        margin-bottom: 20px;
    }

    .structure-container {
        width: 500px;
        max-width: 100vw;
        margin: 0 auto;

        .category {
            background: white;
            border: 2px solid #C4C4C4;
            margin: 0 auto 10px auto;
            padding: 10px 10px 2px 10px;
            max-width: 90vw;
            box-sizing: border-box;

            .category-title {
                font-weight: bold;
                margin-bottom: 10px;
            }

            .article {
                margin: 0 0 8px 15px;
            }
        }
    }
}

@media screen and (max-width: 650px) {
    .wiki {
        width: 100vw;
    }
}
</style>