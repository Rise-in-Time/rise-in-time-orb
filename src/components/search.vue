<template>
    <div class="search">
        <input placeholder="search" v-model="searchKey" @input="search"/>
        <div class="results" v-if="results.length">
            <div v-for="result in results">
                {{ result.name }}
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
            console.log(this.searchKey);
        },
    },
    beforeMount() {
        let category = 'fields';
        let articleName = 'portal';
        import(`../data/articles/${category}/${articleName}.json`).then((article) => {
            this.articles.push = {
                name: article.title,
                text: JSON.stringify(article),
            };
        });
    },
};

</script>

<style scoped>
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
}
</style>