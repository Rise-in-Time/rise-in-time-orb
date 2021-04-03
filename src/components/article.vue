<template>
    <div class="article">
        <!-- MAIN PARAGRAPH -->
        <div class="main-paragraph">
            <div class="main-paragraph-text-box">
                <h2 class="main-paragraph-title">{{ wikiArticles.title }}</h2>
                <p class="main-paragraph-text" v-html="wikiArticles.paragraph">{{ wikiArticles.paragraph }}</p>
            </div>
            <div class="main-paragraph-image-box" v-if="wikiArticles.image"
                 :style="{ 'background-image': 'url(' + require('../assets/articles/' +  articleName + '/' + wikiArticles.image) + ')' }">
                <img class="image-box-deco desktop-only" src="../assets/groups/vector-for-blocks.svg" alt="">
                <img class="image-box-deco mobile-only" src="../assets/mobile-image-deco.svg" alt="">
            </div>
        </div>

        <!-- SUB PARAGRAPHS -->
        <div class="paragraph" v-for="(chapter, i) in wikiArticles.chapters" :key="chapter.index">
            <!-- DIVIDER -->
            <img class="divider desktop-only" src="../assets/groups/vector-divider.svg" alt="">
            <img class="divider mobile-only" src="../assets/groups/divider-mobile.svg" alt="">
            <!-- PARAGRAPH TEXT AND IMAGE -->
            <div class="paragraph-content" :class="{'reverse-element': i%2 !== 0}">
                <div class="image-box"
                     :style="{ 'background-image': 'url(' + require('../assets/articles/' +  articleName + '/' + wikiArticles.chapters[i].image) + ')' }"
                     :class="{'reverse-image': i%2 !== 0}">
                    <img class=" image-box-deco desktop-only" src="../assets/groups/vector-for-blocks.svg" alt="">
                </div>
                <div class="text-box">
                    <img class="vector-for-blocks desktop-only" src="../assets/groups/paragraph-vector.svg" alt="">
                    <h2 class="dynamic-title">{{ chapter.subtitle }}</h2>
                    <p class="paragraph-dynamic-text" v-html="chapter.paragraph">
                        {{ chapter.paragraph }}
                    </p>
                </div>
            </div>
        </div>

        <!-- FOOTER DECO -->
        <img class="mobile-deco-footer mobile-only" src="../assets/mobile-image-deco.svg" alt="">
    </div>
</template>

<script>
export default {
    name: 'article-component',
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
    color: #6C6C6C;
    line-height: 26px;
}

.main-paragraph {
    display: flex;
    width: 75%;
    margin: 45px auto 0 auto;

    .main-paragraph-text-box {
        flex: 1;

        .main-paragraph-title {
            font-size: 20px;
            margin-bottom: 20px;
        }

        .main-paragraph-text {
            margin-right: 150px;
            white-space: pre-line;
        }
    }

    .main-paragraph-image-box {
        background-repeat: no-repeat;
        background-size: cover;
        border: 2px solid #959595;
        box-sizing: border-box;
        width: 388px;
        height: 388px;
        position: relative;
    }
}

.paragraph {
    .divider {
        width: 620px;
        margin: 50px auto 30px auto;
        display: block;
    }

    .paragraph-content {
        display: flex;
        width: 75%;
        margin: 0 auto;

        &.reverse-element {
            flex-direction: row-reverse;
        }

        .image-box {
            background-repeat: no-repeat;
            background-size: cover;
            width: 290px;
            height: 290px;
            border: 2px solid #959595;
            box-sizing: border-box;
            position: relative;
            margin-right: 100px;

            &.reverse-image {
                margin-right: 0;
                margin-left: 100px;
            }
        }

        .text-box {
            position: relative;
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #FFFFFF;
            border: 1px solid #959595;
            box-sizing: border-box;
            text-align: justify;
            white-space: pre-line;
            padding: 20px 30px;
        }
    }
}

.vector-for-blocks {
    position: absolute;
    top: -12px;
    width: 26px;
}

.vector-for-blocks {
    left: -18px;
}

.menu {
    width: 91%;
    margin: 80px auto 0 auto;
    position: relative;
}

strong {
    font-weight: bold;
}

.dynamic-title {
    font-size: 17px;
    text-align: justify;
    color: #6C6C6C;
    margin-bottom: 10px;
}

.image-box-deco {
    position: absolute;
    top: -12px;
    left: -20px;
    width: 26px;
}

.mobile-only {
    display: none !important;
}

@media screen and (max-width: 1280px) {
    .main-paragraph {
        text-align: justify;
        flex-direction: column-reverse;

        .main-paragraph-text-box {
            .main-paragraph-text {
                margin-right: 0;
            }
        }

        .main-paragraph-image-box {
            margin-bottom: 20px;
        }
    }

    .paragraph {
        .paragraph-content {
            flex-direction: column;
            text-align: justify;

            &.reverse-element {
                flex-direction: column;
            }

            .image-box {
                margin: 0 0 20px 0;

                &.reverse-image {
                    margin: 0 0 20px 0;
                }
            }

            .text-box {
                padding: 0;
                border: unset;
                height: unset;
                background: transparent;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                text-align: justify;
                width: auto;
                margin: 0 auto 0 auto;
            }
        }
    }
}

@media screen and (max-width: 450px) {
    .article {
        font-size: 14px;
        line-height: 20px;
    }

    .main-paragraph {
        .main-paragraph-image-box {
            width: 279px;
            height: 171px;

            .image-box-deco {
                position: absolute;
                width: 123.51px;
                height: 18.26px;
                top: -30px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }

    .paragraph {
        .divider {
            width: 287px;
            display: block;
            height: 30px;
            margin: 30px auto 15px auto;
        }

        .paragraph-content {
            .text-box {
                .paragraph-dynamic-text {
                    margin: 0;
                    font-size: 12px;
                    text-align: justify;
                    width: 279px;
                    white-space: pre-line
                }
            }
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

    .dynamic-title {
        font-size: 18px;
        text-align: center;
        color: #959595;
        margin-bottom: 5px;
    }

    .paragraph-block-dynamic {
        margin-top: 15px;
        min-height: 0;
    }

    .image-container {
        width: 279px;
        height: 171px;
        margin: 0 auto 0 auto;
    }

    .mobile-only {
        display: block !important;
    }

    .desktop-only {
        display: none !important;
    }

    .mobile-deco-footer {
        transform: rotate(180deg);
        width: 123px;
        height: 18px;
        margin: 30px auto;
    }
}

</style>
