<template>
    <div class="article" v-if="article">
        <!-- MAIN PARAGRAPH -->
        <div class="main-paragraph">
            <div class="main-paragraph-text-box">
                <h2 class="main-paragraph-title">{{ article.title }}</h2>
                <p class="main-paragraph-text" v-html="getParsedText(article.paragraph)"></p>
            </div>
            <div class="main-paragraph-image-box" v-if="article.image" :style="getImageStyle(article)">
                <img class="image-box-deco desktop-only" src="../assets/groups/vector-for-blocks.svg" alt="">
                <img class="image-box-deco mobile-only" src="../assets/deco/mobile-image-deco.svg" alt="">
            </div>
        </div>
        <div class="paragraph" v-for="(chapter, i) in article.chapters" :key="chapter.index">
            <!-- DIVIDER -->
            <img class="divider desktop-only" src="../assets/groups/vector-divider.svg" alt="">
            <img class="divider mobile-only" src="../assets/groups/divider-mobile.svg" alt="">
            <!-- PARAGRAPH CONTENT -->
            <div class="paragraph-content" :class="{'reverse-element': i%2 !== 0}">
                <!-- IMAGE -->
                <div class="image-box" v-if="chapter.image"
                     :style="getImageStyle(chapter)" :class="{'reverse-image': i%2 !== 0}">
                    <img class="image-box-deco desktop-only" src="../assets/groups/vector-for-blocks.svg" alt="">
                </div>
                <div v-if="chapter.dynamicContents" class="text-box">
                    <img class="text-box-deco desktop-only" src="../assets/groups/paragraph-vector.svg" alt="">
                    <h2 class="text-box-title">{{ chapter.subtitle }}</h2>
                    <div v-for="dynamicContent in chapter.dynamicContents">
                        <!-- TEXT -->
                        <p v-if="dynamicContent.type === 'text'" class="text-box-text"
                           v-html="getParsedText(dynamicContent.content)"></p>
                        <!-- heading -->
                        <h3 v-else-if="dynamicContent.type === 'heading'" class="heading">{{
                                dynamicContent.content
                            }}</h3>
                        <!-- LIST -->
                        <ul class="list" v-else-if="dynamicContent.type === 'list'">
                            <li v-for="bulletPoint in dynamicContent.content" v-html="getParsedText(bulletPoint)"></li>
                        </ul>
                        <!-- SORTABLE ROW TABLE -->
                        <table v-else-if="dynamicContent.type === 'table'">
                            <tr v-if="dynamicContent.content.header">
                                <th v-for="(content, i) in dynamicContent.content.header"
                                    v-html="getParsedText(content)"
                                    @click="sortTable(dynamicContent.content, i)" class="clickable"></th>
                            </tr>
                            <tr v-for="row in dynamicContent.content.rows">
                                <td v-for="content in row" v-html="getParsedText(content)"></td>
                            </tr>
                        </table>
                        <!-- ROW & COLUMN HEADER TABLE -->
                        <table v-else-if="dynamicContent.type === 'columnTable'">
                            <tr v-if="dynamicContent.content.rowHeaders">
                                <th></th>
                                <th v-for="rowHeader in dynamicContent.content.rowHeaders"
                                    v-html="getParsedText(rowHeader)"></th>
                            </tr>
                            <tr v-for="(columnHeader,i) in dynamicContent.content.columnHeaders">
                                <th v-html="getParsedText(columnHeader)"></th>
                                <td v-for="column in dynamicContent.content.columns"
                                    v-html="getParsedText(column[i])"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOOTER DECO -->
        <img class="deco-footer" src="../assets/deco/mobile-image-deco.svg" alt="">
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'article-component',
    data() {
        return {
            article: null,
            articleName: '',
            chapterNumber: 0,
            showInput: true,
            currentSort: '',
        };
    },
    computed: {
        ...mapState(['gameData']),
    },
    watch: {
        $route() {
            this.openArticle();
        },
    },
    methods: {
        openArticle() {
            this.category = this.$route.params.category;
            this.articleName = this.$route.params.id;
            import(`../data/articles/${this.category}/${this.articleName}.json`).then((e) => {
                this.article = e;
            });
        },
        getParsedText(text) {
            if (!text.includes('{{')) return text;
            // extract data keys and add data from gameData
            const fragments = text.split('{{');
            let parsedText = '';
            if (fragments.length % 2 === 1) parsedText += fragments.shift();
            fragments.forEach(fragment => {
                if (fragment.includes('}}')) {
                    const subFragment = fragment.split('}}');
                    if (subFragment[0].includes('#')) {
                        // linking
                        const [text, path] = subFragment[0].split(' # ');
                        parsedText += `<a href="/${path.trim()}" target="_blank" style="text-decoration: none">${text}</a>`;
                    } else {
                        // data
                        const dataKey = subFragment[0];
                        const subKeys = dataKey.split('.');
                        let data = this.gameData;
                        for (let key of subKeys) {
                            key = key.trim();
                            data = data[key] ? data[key] : 'INVALID_DATA_KEY';
                            // effective units
                            if (key === "effective") {
                                data = this.getUnitNames(data)
                            }
                        }
                        parsedText += data;
                    }
                    if (subFragment[1]) parsedText += subFragment[1];
                } else parsedText += fragment;
            });
            return parsedText;
        },
        getUnitNames(indexes) {
            if (!indexes.length) return '-';
            const unitData = Object.values(this.gameData.units);
            return indexes.toString().split(',').map(index => unitData[index].name).join(', ');
        },
        getImageStyle(data) {
            const image = require('../assets/articles/' + data.image);
            const style = {backgroundImage: `url(${image})`};
            if (data.imageSize) {
                style.width = data.imageSize.width + 'px';
                style.height = data.imageSize.height + 'px';
            }
            return style;
        },
        sortTable(table, column) {
            let sortOrder = 1;
            if (this.currentSort === `${column}_${sortOrder}`) {
                sortOrder = -1;
            }
            this.currentSort = `${column}_${sortOrder}`;
            table.rows.sort((a, b) => {
                const aParsed = this.getParsedText(a[column]);
                const bParsed = this.getParsedText(b[column]);
                if (!isNaN(aParsed) && !isNaN(bParsed)) return (Number(bParsed) - Number(aParsed)) * sortOrder;
                return aParsed > bParsed ? sortOrder : -1 * sortOrder;
            });
            this.$forceUpdate();
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
    user-select: text;
}

.main-paragraph {
    display: flex;
    width: 1200px;
    margin: 45px auto 0 auto;

    .main-paragraph-text-box {
        flex: 1;

        .main-paragraph-title {
            font-size: 24px;
            font-weight: bold;
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
    width: 1200px;
    margin: 0 auto;

    .divider {
        width: 620px;
        margin: 50px auto 30px auto;
        display: block;
    }
}

.paragraph-content {
    display: flex;

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
            font-size: 20px;
            font-weight: bold;
        }

        .heading {
            margin-top: 10px;
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

ul {
    padding-left: 20px;
}

/* table */
table {
    width: 100%;
}

td, th {
    border: 1px solid #959595;
    text-align: left;
    padding: 6px 10px;
}

th {
    font-weight: bold;
    background: #eeeeee;
}

tr:nth-child(odd) {
    background-color: #f9f9f9;
}

/* responsiveness */
@media screen and (max-width: 1250px) {
    .main-paragraph {
        text-align: justify;
        flex-direction: column-reverse;
        width: calc(100vw - 80px);

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

    .paragraph {
        width: calc(100vw - 80px);
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
        width: calc(100vw - 40px);

        .divider {
            width: 287px;
            display: block;
            height: 30px;
            margin: 30px auto 15px auto;
        }
    }

    .paragraph-content {
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
