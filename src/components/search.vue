<template>
    <div class="search">
        <div class="inner-wrapper" :class="{'in-menu': inMenu}">
            <input placeholder="search" v-model="searchKey" @input="search"/>
            <div class="results" v-if="results.length">
                <div class="result clickable" v-for="result in results">
                    <div class="result-title">{{ result.name }}</div>
                    <p class="result-text">{{ result.displayText }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import articleContents from '../data/articles/articleContents.json';

export default {
    name: 'search',
    props: {
        inMenu: {
            type: Boolean,
            default: true,
        },
    },
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
            for (const category of articleContents.articleCategories) {
                for (const article of category.articles) {
                    import(`../data/articles/${category.folderName}/${article.fileName}.json`).then((article) => {
                        this.articles.push({
                            name: article.title,
                            text: JSON.stringify(article),
                        });
                    });
                }
            }
        },
    },
    beforeMount() {
        this.importArticles();
    },
};

</script>

<style scoped lang="scss">
.inner-wrapper {
    position: relative;
    margin: 0 auto;
    width: 500px;
    max-width: 95vw;
}

input {
    font-family: 'Muli', sans-serif;
    padding: 5px 20px;
    font-size: 14px;
    border-radius: 5px;
    border: 2px solid #C4C4C4;
    text-align: center;
    width: 240px;
    box-sizing: border-box;
}

.results {
    background: white;
    padding: 10px 0;
    width: 500px;
    max-width: 95vw;
    margin: 5px auto;
    border-radius: 5px;
    position: absolute;
    top: 30px;
    left: 0;
    z-index: 10;
    box-shadow: 0 0 10px #00000033;
    box-sizing: border-box;

    .result {
        padding: 10px 15px;

        .result-title {
            margin-bottom: 5px;
        }

        .result-text {
            color: #6C6C6C;
            line-height: 1.2em;
        }

        &:hover {
            background: #00000011;
        }
    }
}

.inner-wrapper.in-menu {
    position: absolute;
    right: 20px;
    top: 12px;
    height: 29px;
    width: 230px;

    input {
        width: 230px;
        text-align: left;
    }

    .results {
        width: 230px;

        .result {
            .result-title {
                font-size: 14px;
            }

            .result-text {
                color: #6C6C6C;
                font-size: 14px;
            }
        }
    }
}
</style>