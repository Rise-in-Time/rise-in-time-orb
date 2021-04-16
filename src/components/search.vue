<template>
    <div class="search">
        <div v-if="results.length" class="close-panel" @click="closeSearch"></div>
        <div class="inner-wrapper" :class="{'in-menu': inMenu}">
            <input placeholder="search" v-model="searchKey" @input="search"
                   @keydown.down="moveDown" @keydown.up="moveUp" @keydown.enter="onEnter"/>
            <div class="results" v-if="results.length">
                <div class="result clickable" v-for="(result, i) in results" @click="toArticle(result)"
                     :class="{'selected': i === selectedIndex}">
                    <div class="result-title">{{ result.name }}</div>
                    <p class="result-text" v-html="result.displayText"></p>
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
            selectedIndex: -1,
        };
    },
    methods: {
        search() {
            this.results = [];
            if (this.searchKey.length < 3) return;
            this.articles.forEach(article => {
                const position = article.text.search(this.searchKey);
                if (position > -1) {
                    // cut text
                    let text = '';
                    const sliceStart = position - 16 > -1 ? position - 16 : 0;
                    const sliceEnd = position + this.searchKey.length + 16 < article.text.length ?
                            position + this.searchKey.length + 16 : article.text.length - 1;
                    text = '...' + article.text.slice(sliceStart, sliceEnd) + '...';
                    // filter json noise
                    const jsonPosition = text.search(':"');
                    if (jsonPosition > -1) text = text.slice(jsonPosition + 2);
                    // highlight search key
                    const position2 = text.search(this.searchKey);
                    const position3 = position2 + this.searchKey.length + 8;
                    text = [text.slice(0, position2), '<strong>', text.slice(position2)].join('');
                    text = [text.slice(0, position3), '</strong>', text.slice(position3)].join('');
                    article.displayText = text;
                    this.results.push(article);
                }
            });
        },
        closeSearch() {
            this.searchKey = '';
            this.results = [];
            this.selectedIndex = -1;
        },
        toArticle(result) {
            this.$router.replace(result.path);
        },
        moveDown() {
            if (this.selectedIndex + 1 < this.results.length) {
                this.selectedIndex++;
            }
        },
        moveUp() {
            if (this.selectedIndex > 0) {
                this.selectedIndex--;
            }
        },
        onEnter() {
            if (this.selectedIndex > -1) {
                this.toArticle(this.results[this.selectedIndex]);
            }
        },
        importArticles() {
            for (const category of articleContents.articleCategories) {
                for (const article of category.articles) {
                    import(`../data/articles/${category.folderName}/${article.fileName}.json`).then((articleData) => {
                        this.articles.push({
                            name: articleData.title,
                            text: JSON.stringify(articleData),
                            path: `/article/${category.folderName}/${article.fileName}`,
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
    text-align: center;
}

input {
    display: inline-block;
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

        &:hover, &.selected {
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
        margin-left: 0;
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

.close-panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}
</style>