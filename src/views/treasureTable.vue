<template>
    <div>
        <div class="big-container">
            <div class="table-container">
                <div class="table-header header-crate"></div>
                <div v-if="rewardMultiplier === 2" class="multiplier-button" @click="rewardMultiplier = 1">x2</div>
                <div v-if="rewardMultiplier === 1" class="multiplier-button" @click="rewardMultiplier = 2">x1</div>
                <div class="title-text">Treasure Rotation</div>
                <div class="cycle-time">Cycle Duration: 04:00:00</div>

                <!-- DESKTOP -->
                <div v-if="!isMobile" class="middle-section flex">

                    <!-- PERCENTAGES ON THE LEFT -->
                    <div class="percentages flex column jc-sb">
                        <div class="left-col-container" v-for="item in percentages">
                            <div class="item-container">{{ item }}%</div>
                            <div class="horizontal-line"></div>
                        </div>
                    </div>

                    <!-- MAIN SECTION -->
                    <div class="main-section">
                        <div class="table-col" v-for="(col, i) in rotationData">
                            <div v-for="item in col">
                                <div class="item-container" v-if="!item.hasOwnProperty('specialTreasures')">
                                    <div :class="'unit ' + getCssName(item) + '-small'"></div>
                                    <div class="item-amount">{{ extractAmount(item) }}</div>
                                </div>
                                <div class="flex jc-sa" v-if="item.hasOwnProperty('specialTreasures')">
                                    <div class="item-container" v-for="subItem in item.specialTreasures">
                                        <div :class="'unit ' + getCssName(subItem) + '-small'"></div>
                                        <div class="item-amount">{{ extractAmount(subItem) }}</div>
                                    </div>
                                </div>
                            </div>
                            <div :class="'chest ' + treasureImageByIndex(i)"></div>
                        </div>
                    </div>
                </div>

                <!-- MOBILE -->
                <div v-if="isMobile" class="middle-section flex">

                    <!-- MAIN SECTION -->
                    <div class="main-section">
                        <div class="table-col" v-for="(col, i) in rotationData">
                            <div class="flex jc-sb">
                                <div class="percentages">
                                    <div class="left-col-container" v-for="number in percentages">
                                        <div class="number-container">{{ number }}%</div>
                                        <div class="horizontal-line"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="rewards-container">
                                <div v-for="item in col">
                                    <div class="item-container" v-if="!item.hasOwnProperty('specialTreasures')">
                                        <div :class="'unit ' + getCssName(item) + '-small'"></div>
                                        <div class="item-amount">{{ extractAmount(item) }}</div>
                                    </div>
                                    <div class="flex jc-sa" v-if="item.hasOwnProperty('specialTreasures')">
                                        <div class="item-container" v-for="subItem in item.specialTreasures">
                                            <div :class="'unit ' + getCssName(subItem) + '-small'"></div>
                                            <div class="item-amount">{{ extractAmount(subItem) }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div :class="'chest ' + treasureImageByIndex(i)"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="special-note">*There is a variance of +/- 50% for units and soulstones.</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'TreasureTable',
    data() {
        return {
            rotationData: [],
            unitNamesByIndex: [],
            unitStrengthByIndex: [],
            percentages: [1, 4, 35, 60],
            rewardMultiplier: 1,
        };
    },
    computed: {
        ...mapState(['isMobile']),
    },
    methods: {
        getRotationData() {
            this.$http.get(this.$url1 + '/treasureRotation').then(response => {
                this.rotationData = response.data;
                if (this.rotationData !== [])
                    this.rotationData.map(arr => arr.shift());
            });
        },
        getUnitStats() {
            this.$http.get(this.$url1 + '/unit/base').then(response => {
                const units = response.data.units;
                this.unitNamesByIndex = units.map(unit => unit.css);
                this.unitStrenghtByIndex = units.map(
                        unit => Math.max(unit.attack, unit.defense) + Math.min(unit.attack, unit.defense) / 2);
            });
        },
        extractAmount(item) {
            if (!this.unitStrenghtByIndex) return;
            if (item.soulStones) return item.soulStones * this.rewardMultiplier;
            if (item.units) return Math.floor(
                    item.units.amount * this.rewardMultiplier / this.unitStrenghtByIndex[item.units.index]);
            else return item.amount * this.rewardMultiplier;
        },
        getCssName(item) {
            if (item.soulStones) return 'soul-stone';
            if (item.units) return `${this.unitNamesByIndex[item.units.index]}`;
            else return `${item.name}`;
        },
        treasureImageByIndex(i) {
            if (i === 0) return 'lesser_treasure';
            if (i === 1) return 'magic_treasure';
            else return 'divine_treasure';
        },
    },
    created() {
        this.getUnitStats();
        this.getRotationData();
    },
};
</script>

<style>
.big-container {
    display: flex;
    flex-direction: column;
    height: fit-content;
    flex: 1;
}

.table-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2vh auto;
    width: 1000px;
    max-width: 90%;
    max-height: calc(100vh - 220px);
    padding: 20px;
    background: linear-gradient(90deg, rgba(216, 204, 190, 1) 0%, rgba(227, 217, 205, 1) 50%);
    z-index: 0;
    position: relative;
    overflow: auto;
    border-radius: 5px;
}

.multiplier-button {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: white;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    box-shadow: 2px 2px 5px black;
    z-index: 1;
}

.multiplier-button:hover {
    top: 12px;
}

.main-section {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    flex: 20;
    z-index: 0;
}

.middle-section {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    flex: 9;
    z-index: 0;
}

.table-col {
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    flex-direction: column;
    justify-content: space-around;
}

.item-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}

.item-amount {
    text-align: center;
    text-shadow: 2px 2px 2px lightgrey;
}

.unit {
    width: 50px;
    height: 60px;
    border-style: inset;
    border-color: lightgrey;
    border-width: 1px;
    border-radius: 10px;
}

.chest {
    display: inline-block;
    width: 200px;
    height: 180px;
}

.table-header {
    display: flex;
    flex: 1.1
}

.title-text {
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
    color: black;
    text-shadow: 1px 1px 1px lightgrey;
    white-space: pre;
    text-align: center;
    line-height: 35px;
}

.cycle-time {
    margin-top: 15px;
    text-align: center;
    line-height: 45px;
    font-weight: bold;
    position: absolute;
    width: 100%;
    height: 5%;
}

.percentages {
    margin-top: 40px;
    margin-bottom: 220px;
    flex: 1;
}

.left-col-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.horizontal-line {
    border-width: 1px;
    border-style: inset;
    height: 0px;
    width: 850px;
    position: absolute;
    color: darkgrey;
    top: 9px;
    left: 50px;
}

.special-note {
    width: 100%;
    text-align: left;
    font-size: 11px;
    color: black;
    left: 15px;
}

/* Smartphones (portrait) ----------- */
@media screen and (max-width: 550px) {

    .big-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .table-container {
        padding: unset;
        width: 100vw;
        height: 100vh;
        scroll-behavior: smooth;
        max-width: unset;
        border-radius: 0;
        min-height: calc(100vh - 55px);
        margin: 0;
    }

    .multiplier-button {
        position: absolute;
        right: 10px;
        top: 50px;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background: white;
        font-weight: bold;
        font-size: 18px;
        text-align: center;
        line-height: 50px;
        box-shadow: 2px 2px 5px black;
    }

    .multiplier-button:hover {
        top: 52px;
    }

    .horizontal-line {
        width: 183px;
        z-index: 0;
        left: 40px;
    }

    .table-col {
        flex-direction: row;
        margin-bottom: 100px;
        flex: 8;
    }

    .percentages {
        display: flex;
        flex-direction: column;
        margin: 21px 0 0 -20px;
        height: 340px;
        justify-content: space-between;
    }

    .left-col-container {
        display: flex;
    }

    .main-section {
        flex-direction: column;
        flex: 0;
    }

    .item-container {
        margin-bottom: 30px;
    }

    .item-amount {
        min-width: 52px;
    }

    .title-text {
        margin-top: 25px;
    }

    .cycle-time {
        margin-top: 30px;
    }

    .unit {
        z-index: 1;
    }

    .special-note {
        display: none;
    }

    .table-header {
        visibility: hidden;
    }
}
</style>