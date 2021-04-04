<template>
    <div class="article">
        <!-- MAIN PARAGRAPH -->
        <div class="main-paragraph">
            <div class="main-paragraph-text-box">
                <h2 class="main-paragraph-title">{{ wikiArticles.title }}</h2>
                <p class="main-paragraph-text" v-html="wikiArticles.paragraph">{{ wikiArticles.paragraph }}</p>
            </div>
            <div class="main-paragraph-image-box" v-if="wikiArticles.image"
                 :style="{ 'background-image': 'url(' + require('../assets/articles/' + wikiArticles.image) + ')' }">
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
                     :style="{ 'background-image': 'url(' + require('../assets/articles/' + wikiArticles.chapters[i].image) + ')' }"
                     :class="{'reverse-image': i%2 !== 0}">
                    <img class="image-box-deco desktop-only" src="../assets/groups/vector-for-blocks.svg" alt="">
                </div>
                <div class="text-box">
                    <img class="text-box-deco desktop-only" src="../assets/groups/paragraph-vector.svg" alt="">
                    <h2 class="text-box-title">{{ chapter.subtitle }}</h2>
                    <p class="text-box-text" v-html="chapter.paragraph">
                        {{ chapter.paragraph }}
                    </p>
                </div>
            </div>
        </div>

        <!-- FOOTER DECO -->
        <img class="deco-footer" src="../assets/mobile-image-deco.svg" alt="">
    </div>
</template>

<script>
import {mapState} from 'vuex';

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
    computed: {
        ...mapState(['gameData']),
        units() {
            return this.gameData.units;
        },
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
    font-size: 16px;
    white-space: pre-line;
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
}

.paragraph-content {
    display: flex;
    width: 75%;
    margin: 0 auto;

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
        width: calc(100% - 390px);

        .text-box-deco {
            position: absolute;
            width: 26px;
            top: -12px;
            right: -20px;
            transform: scaleX(-1);
        }

        .text-box-title {
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: bold;
        }
    }

    &.reverse-element {
        flex-direction: row-reverse;

        .text-box {
            .text-box-deco {
                left: -20px;
                right: unset;
                transform: unset;
            }
        }
    }
}

.image-box-deco {
    position: absolute;
    top: -12px;
    left: -20px;
    width: 26px;
}

.deco-footer {
    display: block;
    transform: rotate(180deg);
    width: 123px;
    height: 18px;
    margin: 30px auto;
}

.mobile-only {
    display: none !important;
}

/* styling based on json data */
strong {
    font-weight: bold;
}

/* responsiveness */
@media screen and (max-width: 1280px) {
    .main-paragraph {
        text-align: justify;
        flex-direction: column-reverse;

        .main-paragraph-text-box {
            .main-paragraph-title {
                text-align: center;
            }

            .main-paragraph-text {
                margin-right: 0;
            }
        }

        .main-paragraph-image-box {
            margin: 0 auto 20px auto;
        }
    }

    .paragraph-content {
        flex-direction: column;
        text-align: justify;

        &.reverse-element {
            flex-direction: column;
        }

        .image-box {
            margin: 0 auto 20px auto;

            &.reverse-image {
                margin: 0 auto 20px auto;
            }
        }

        .text-box {
            padding: 0;
            border: unset;
            background: transparent;
            text-align: justify;
            margin: 0 auto 0 auto;
            width: 100%;

            .text-box-deco {
                display: none;
            }

            .text-box-title {
                font-weight: normal;
            }
        }
    }

    .image-box-deco {
        display: none;
    }
}

@media screen and (max-width: 450px) {
    .article {
        font-size: 14px;
        line-height: 20px;
    }

    .main-paragraph {
        width: calc(100vw - 40px);

        .main-paragraph-text-box {
            .main-paragraph-title {
                text-align: left;
            }
        }

        .main-paragraph-image-box {
            width: calc(100vw - 40px);
            height: 200px;

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
    }

    .paragraph-content {
        width: calc(100vw - 40px);

        .image-box {
            width: calc(100vw - 40px);
            height: 200px;
        }

        .text-box {
            margin: 0;

            .text-box-text {
                text-align: justify;
            }
        }
    }

    .mobile-only {
        display: block !important;
    }

    .desktop-only {
        display: none !important;
    }
}
</style>
