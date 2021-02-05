<template>
    <div class="main-container">
        <Menu v-if="!$isMobile"></Menu>
        <mobile-menu v-else></mobile-menu>
        <div class="ranking-container">
            <div class="title">Daily Battle Points Record</div>
            <div class="date">{{ prettyDate }}</div>
            <div class="table-headers">
                <div class="cell header">Rank</div>
                <div class="cell header">Player</div>
                <div class="cell header">BP</div>
                <div class="cell header">World</div>
            </div>
            <div class="table-cells-container" v-for="(item, index) in rankingData" :key="item.dailyBP">
                <div class="table-column">
                    <div class="cell">{{ index + 1 }}</div>
                    <div class="cell">{{ item.userName }}</div>
                    <div class="cell">{{ formatNumber(item.dailyBP) }}</div>
                    <div class="cell">{{ $isMobile ? truncateWorldNames(item.world) : item.world }}</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import {formatNumber, prettyDate, truncateWorldNames} from '../../helper/helperFunctions';
import Menu from '../menu';
import MobileMenu from '../mobileMenu';

export default {
    name: 'battleBoard',
    components: {
        MobileMenu,
        Menu,
    },
    data() {
        return {
            prettyDate: prettyDate(),
            formatNumber: formatNumber,
            truncateWorldNames: truncateWorldNames,
            rankingData: [],
        };
    },
    methods: {
        getData() {
            this.$http.get(`${this.$url1}/battle-board`).then(res => {
                this.rankingData = res.data;
            });
        },
    },
    created() {
        this.getData();
    },
};
</script>

<style scoped>
.main-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f9f5f0;
}

.ranking-container {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 2vh auto;
    width: 50%;
    height: 80%;
    background: linear-gradient(90deg, rgba(216, 204, 190, 1) 0%, rgba(227, 217, 205, 1) 50%);
    border-radius: 5px;
}

.table-headers {
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 14%;
    flex-direction: row;
    text-align: center;
    line-height: 35px;
    width: 100%;
    background-color: white;
}

.table-cells-container {
    position: relative;
    top: 14%;
    width: 100%;

}

.table-column {
    display: flex;
    justify-content: space-around;
    flex: 1;
    text-align: center;
    line-height: 35px;
}

.title {
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
    color: black;
    text-shadow: 1px 1px 1px lightgrey;
    white-space: pre;
    text-align: center;
    line-height: 35px;
}

.date {
    margin-top: 45px;
    text-align: center;
    line-height: 45px;
    font-weight: bold;
    position: absolute;
    width: 100%;
    height: 5%;
}

.cell {
    position: relative;
    width: 100px;
    height: 40px;
    left: 0;
}

.header {
    font-weight: bold;
    margin-top: unset;
}

@media screen and (max-width: 550px) {
    .ranking-container {
        position: relative;
        display: flex;
        flex-direction: column;
        top: 0;
        left: 0;
        width: 100%;
        overflow: scroll;
        background: linear-gradient(90deg, rgba(216, 204, 190, 1) 0%, rgba(227, 217, 205, 1) 50%);
        border-radius: 0;
    }
}

</style>