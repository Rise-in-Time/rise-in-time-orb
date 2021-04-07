<template>
    <div class="wiki">
        <h1 class="title">List of wiki articles (under construction)</h1>
        <div class="structure-container">
            <div v-for="category in structure">
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
export default {
    name: 'Wiki',
    data() {
        return {
            structure: [
                {
                    name: 'Fields',
                    folderName: 'fields',
                    articles: [
                        {name: 'Artifact', fileName: 'artifact'},
                        {name: 'Control Field', fileName: 'control'},
                        {name: 'Portal', fileName: 'portal'},
                        {name: 'Treasure Field', fileName: 'treasure'},
                    ],
                },
                {
                    name: 'Units',
                    folderName: 'units',
                    articles: [{name: 'Athlas', fileName: 'athlas'}],
                },
            ],
        };
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