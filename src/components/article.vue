<template>
    <div class="article">
        <!-- MAIN PARAGRAPH -->
        <div class="main-paragraph">
            <div class="article-header-text-box">
                <h2 class="article-header-title">{{ wikiArticles.title }}</h2>
                <p class="header-paragraph" v-html="wikiArticles.paragraph">{{ wikiArticles.paragraph }}</p>
            </div>
            <div class="article-header-image-box" v-if="wikiArticles.image"
                 :style="{ 'background-image': 'url(' + require('../assets/articles/' +  articleName + '/' + wikiArticles.image) + ')' }">
                <img class="vector-for-blocks-header desktop-only" src="../assets/groups/vector-for-blocks.svg" alt="">
                <img class="mobile-image-deco mobile-only" src="../assets/mobile-image-deco.svg" alt="">
            </div>
        </div>

        <!-- SUB PARAGRAPHS -->
        <div class="paragraph" v-for="(chapter, i) in wikiArticles.chapters" :key="chapter.index">
            <div class="divider">
                <img class="paragraph-divider desktop-only" src="../assets/groups/vector-divider.svg" alt="">
                <img class="divider-mobile mobile-only" src="../assets/groups/divider-mobile.svg" alt="">
            </div>
            <div class="article-box dynamic-box" :class="{'reverse-element': i%2 !== 0}">
                <div class="image-block-dynamic">
                    <div class="image-container"
                         :style="{ 'background-image': 'url(' + require('../assets/articles/' +  articleName + '/' + wikiArticles.chapters[i].image) + ')' }"
                         :class="{'reverse-image': i%2 !== 0}">
                        <img class="vector-for-blocks-block-image desktop-only"
                             src="../assets/groups/vector-for-blocks.svg" alt="">
                    </div>
                </div>
                <div class="paragraph-block-dynamic">
                    <div class="title-paragraph-box paragraph-dynamic">
                        <div class="paragraph-dynamic-content">
                            <img class="vector-for-blocks paragraph-vector desktop-only"
                                 src="../assets/groups/paragraph-vector.svg" alt="">
                            <h2 class="dynamic-title">{{ chapter.subtitle }}</h2>
                            <p class="paragraph-dynamic-text" v-html="chapter.paragraph">
                                {{ chapter.paragraph }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOOTER DECO -->
        <img class="mobile-deco-footer mobile-only" src="../assets/mobile-image-deco.svg" alt="">
    </div>
</template>

<script>
export default {
    name: 'wiki',
    props: ['wiki'],
    data() {
        return {
            wikiArticles: [],
            articleName: '',
            chapterNumber: 0,
            showInput: true,
        };
    },
    watch: {
        $route() {
            this.openArticle();
        },
    },
    methods: {
        openArticle() {
            this.wikiArticles = [];
            this.category = this.$route.params.category;
            this.articleName = this.$route.params.id;
            import(`../data/articles/${this.category}/${this.articleName}.json`).then((e) => {
                this.wikiArticles = e;
            });
        },
    },
    beforeMount() {
        this.openArticle();
    },
};
</script>

<style scoped lang="scss">
.article {
    height: calc(100vh - 55px);
    overflow-y: auto;
    background: #f9f5f0;
}

.main-paragraph {
    display: flex;
    width: 75%;
    margin: 45px auto 0 auto;
}

.paragraph {
    .divider {
        width: 600px;
        margin: 20px auto -6px auto;

        .paragraph-divider {
            width: 620px;
        }
    }
}

.header-paragraph {
    height: auto;
    font-size: 17px;
    margin-right: 150px;
    white-space: pre-line;
    color: #6C6C6C;
    line-height: 26px;
    margin-top: 10px;
    margin-left: -6px;
}

.vector-for-blocks, .vector-for-blocks-header, .vector-for-blocks-block-image {
    position: absolute;
    top: -12px;
    width: 26px;
}

.vector-for-blocks {
    left: -18px;
}

.vector-for-blocks-header {
    left: -20px;
}

.vector-for-blocks-block-image {
    left: -19px;
}

.menu {
    width: 91%;
    margin: 80px auto 0 auto;
    position: relative;
}

/*Blocks within the article*/
.article-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 75%;
    margin: 45px auto 0 auto;
    height: auto;
}

.reverse-element {
    flex-direction: row-reverse;
}

.reverse-image {
    margin-left: auto;
}

.dynamic-box {
    margin-top: 30px;
    height: auto;
}

.article-header-text-box {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 5px;
}

.image-block-dynamic {
    display: flex;
    flex-direction: column;
    flex: 2.1;
}

.article-header-image-box {
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: cover;
    border: 2px solid #959595;
    box-sizing: border-box;
    position: relative;
    width: 388px;
    height: 388px;
}

.divider-mobile {
    margin-top: 10px;
}

.image-container {
    background-repeat: no-repeat;
    background-size: cover;
    width: 290px;
    height: 290px;
    border: 2px solid #959595;
    box-sizing: border-box;
    position: relative;
}

.paragraph-block-dynamic {
    display: flex;
    flex-direction: row;
    flex: 4;
    position: relative;
}

.paragraph-dynamic {
    height: 100%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #FFFFFF;
    border: 1px solid #959595;
    box-sizing: border-box;
    font-size: 17px;
    line-height: 25px;
    text-align: justify;
    color: #6C6C6C;
    white-space: pre-line;

    .paragraph-dynamic-content {
        margin: 4% 26px 5% 26px;
    }
}

.article-header-title {
    text-align: left;
    font-size: 18px;
    line-height: 35px;
    color: #6C6C6C;
    margin-left: -6px;
}

strong {
    font-weight: bold;
}

h2 {
    font-size: 24px;
    text-align: center;
}

.dynamic-title {
    font-size: 17px;
    line-height: 26px;
    text-align: justify;
    color: #6C6C6C;
    margin-bottom: 10px;
}

.mobile-only {
    display: none;
}

@media screen and (max-width: 1280px) {
    .main-paragraph {
        text-align: justify;
        flex-direction: column-reverse;
    }

    .paragraph {
        .paragraph-divider {
            display: none;
        }
    }

    .article-box {
        flex-direction: column;
        text-align: justify;
    }

    .article-header-image-box {
        margin: 0 auto 0 auto;
    }

    .header-paragraph {
        margin: 0 auto 0 auto;
    }

    .article-header-title {
        margin-top: 20px;
        text-align: center;
    }

    .image-container {
        margin: 0 auto 30px auto;
    }
}

@media screen and (max-width: 450px) {
    .paragraph {
        .divider {
            width: auto;
            height: 30px;
            margin-top: 23px;

            .divider-mobile {
                width: 287px;
                display: block;
                margin: 0 auto 0 auto;
            }
        }
    }

    .paragraph-dynamic {
        border: unset;
        height: unset;
        background: transparent;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        text-align: justify;
        width: auto;
        margin: 0 auto 0 auto;

        .paragraph-dynamic-content {
            margin: 0;
        }

        .paragraph-dynamic-text {
            margin: 0;
            font-size: 12px;
            line-height: 17px;
            text-align: justify;
            width: 279px;
            white-space: pre-line
        }
    }

    .mobile-menu {
        margin-top: 8px;
    }

    .mobile-logo-image {
        margin-top: 30px;
    }

    .mobile-logo-container {
        flex: 1;
    }

    .mobile-form-container {
        flex: 2.8;
    }

    .mobile-menu-container {
        flex: 1;
    }

    .flex-mobile-menu {
        display: flex;
        flex-wrap: nowrap;
        width: 279px;
        margin: -15px auto 0 auto;
    }

    .flex-mobile-menu > div {
        width: 100px;
        margin: 0;
    }

    .input-field {
        width: 100%;
    }

    .search-input {
        width: 100%;
        margin: 0;
        position: initial;
        padding: 0;
        height: 43px;
        font-size: 15px;
    }

    .search-icon {
        margin-right: -48px;
        height: 34px;
        width: 21px;
        margin-top: -5px;
        right: 55px;
    }

    .article-box {
        flex-direction: column;
        width: 95%;
        height: auto;
    }

    .article-header-title {
        margin: 10px auto 0 auto;
        color: #959595;
    }

    .dynamic-title {
        font-size: 18px;
        line-height: 26px;
        text-align: center;
        color: #959595;
        margin-bottom: 5px;
    }

    .article-header-image-box {
        margin: 0 auto 0 auto;
        width: 279px;
        height: 171px;
    }

    .article-header-text-box {
        margin: 0 auto 0 auto;
        height: auto;
        min-height: 0px;
    }

    .paragraph-block-dynamic {
        margin-top: 15px;
        min-height: 0;
    }

    .mobile-image-deco {
        margin: -33px auto 0 auto;
        width: 123.51px;
        height: 18.26px;
    }

    .header-paragraph {
        margin: 0px auto 0 auto;
        width: 279px;
        height: auto;
        font-size: 12px;
        line-height: 17px;
        text-align: justify;
    }

    .image-container {
        width: 279px;
        height: 171px;
        margin: 0 auto 0 auto;
    }

    .mobile-only {
        display: block;
    }

    .desktop-only {
        display: none;
    }

    .mobile-deco-footer {
        transform: rotate(180deg);
        width: 123px;
        height: 18px;
        margin: 30px auto;
    }
}

</style>
