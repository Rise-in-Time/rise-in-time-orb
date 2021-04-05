<template>
    <div class="search">
        <input placeholder="search" v-model="searchKey" @input="search"/>
        <div class="results" v-if="results.length">
            <div class="result" v-for="result in results">
                <div class="result-title">{{ result.name }}</div>
                <p class="result-text">{{ result.displayText }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'search',
    data() {
        return {
            articles: [],
            results: [],
            searchKey: '',
        };
    },
    methods: {
        search() {
            this.results = [];
            if (this.searchKey.length < 3) return;
            this.articles.forEach(article => {
                const position = article.text.search(this.searchKey);
                if (position > -1) {
                    const sliceStart = position - 16 > -1 ? position - 16 : 0;
                    const sliceEnd = position + this.searchKey.length + 16 < article.text.length ?
                            position + this.searchKey.length + 16 : article.text.length - 1;
                    article.displayText = '...' + article.text.slice(sliceStart, sliceEnd) + '...';
                    this.results.push(article);
                }
            });
        },
        importArticles() {
            const category = 'fields';
            const articleNames = ['portal', 'artifact', 'control', 'treasure'];
            for (const articleName of articleNames) {
                import(`../data/articles/${category}/${articleName}.json`).then((article) => {
                    this.articles.push({
                        name: article.title,
                        text: JSON.stringify(article),
                    });
                });
            }
        },
    },
    beforeMount() {
        this.importArticles();
    },
};

</script>

<style scoped lang="scss">
input {
    font-family: 'Muli', sans-serif;
    text-align: left;
    padding: 5px 20px;
    font-size: 14px;
    border-radius: 5px;
    border: 2px solid #C4C4C4;
}

.results {
    background: white;
    padding: 10px 0;
    width: 500px;
    margin: 5px auto;
    border-radius: 5px;

    .result {
        margin: 10px 0;

        .result-title {
            margin-bottom: 5px;
        }

        .result-text {
            color: #6C6C6C;
            line-height: 1.2em;
        }
    }
}
</style>