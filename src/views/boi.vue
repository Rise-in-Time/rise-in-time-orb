<template>
    <div>
        <div class="boi">
            <div v-if="!showOldWorlds">
                <div class="flex jc-sa ai-c">
                    <img src="../assets/icons/arrow.svg" alt="arrow" class="arrow-left"
                         v-if="isMobile" @click="prevWorldType()"/>
                    <div class="world-type-tab" @click="worldType = 'tournament'"
                         :class="{'selected': worldType === 'tournament'}"
                         v-if="!isMobile || worldType === 'tournament'">
                        Tournament
                    </div>
                    <div class="world-type-tab" @click="worldType = 'standard'"
                         :class="{'selected': worldType === 'standard'}"
                         v-if="!isMobile || worldType === 'standard'">
                        Eternal
                    </div>
                    <img src="../assets/icons/arrow.svg" alt="arrow"
                         v-if="isMobile" @click="nextWorldType()"/>
                </div>
            </div>
            <div v-else>
                <div class="flex jc-sa ai-c">
                    <img src="../assets/icons/arrow.svg" alt="arrow" class="arrow-left"
                         v-if="isMobile" @click="prevWorldType()"/>
                    <div class="world-type-tab" @click="worldType = 'beta3'"
                         :class="{'selected': worldType === 'beta3'}"
                         v-if="!isMobile || worldType === 'beta3'">
                        Beta 3
                    </div>
                    <div class="world-type-tab" @click="worldType = 'beta2'"
                         :class="{'selected': worldType === 'beta2'}"
                         v-if="!isMobile || worldType === 'beta2'">
                        Beta 2
                    </div>
                    <div class="world-type-tab" @click="worldType = 'beta1'"
                         :class="{'selected': worldType === 'beta1'}"
                         v-if="!isMobile || worldType === 'beta1'">
                        Beta 1
                    </div>
                    <div class="world-type-tab" @click="worldType = 'alpha'"
                         :class="{'selected': worldType === 'alpha'}"
                         v-if="!isMobile || worldType === 'alpha'">
                        Alpha
                    </div>
                    <img src="../assets/icons/arrow.svg" alt="arrow"
                         v-if="isMobile" @click="nextWorldType()"/>
                </div>
            </div>
            <div class="switch_old_new" @click="switchOldNew()">
                {{ switchDisplayText() }}
            </div>
            <!-- TOURNAMENT WORLDS -->
            <div class="worlds tournament" v-if="worldType === 'tournament'">
                <div v-for="(world, i) in tournamentWorlds" @click="worldClick(i)">
                    <div class="world-body tournament" :style="`height: ${i === selectedIndex ? '265px' : '19px'}`">
                        <span class="title">{{ `${world.teamName}` }}</span>
                        <span v-if="i === selectedIndex">
                            {{
                                `\n${world.players.join('\n ')} \n\n ${world.worldName}\n\n
                            ${world.duration} days\n\n`
                            }}
                        </span>
                        <span v-if="i === selectedIndex">{{ world.endDate | moment('DD.MM.YYYY') }}</span>
                        <div v-if="world.worldName === 'Alpha 1.0'" class="special-button"
                             @click="reportShowcase = true">View Report
                        </div>
                    </div>
                </div>
            </div>
            <!-- STANDARD WORLDS -->
            <div class="worlds standard" v-if="worldType === 'standard'">
                <div class="scoreboard">
                    <div class="header flex jc-sa">
                        <div class="element rank">Rank</div>
                        <div class="element team">Team</div>
                        <div class="element date">Date</div>
                        <div class="element score">Score</div>
                    </div>
                    <div v-for="(world, i) in standardWorlds" @click="worldClick(i)">
                        <div :style="`height: ${i === selectedIndex ? '120px' : '30px'}`" class="row">
                            <div class="flex">
                                <div class="element rank">{{ i + 1 }}.</div>
                                <div class="element team">{{ world.teamName }}</div>
                                <div class="element date">{{ world.endDate | moment('DD.MM.YYYY') }}</div>
                                <div class="element score">{{ world.score }}</div>
                            </div>
                            <div class="row-extension flex" v-if="i === selectedIndex">
                                <div class="players">Players:</div>
                                <div class="members">{{ `${world.players.join('\n ')}` }}</div>
                                <div class="duration" v-if="world.duration">Duration:</div>
                                <div v-if="world.duration">{{ world.duration }} days</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- OLD WORLDS -->
            <div class="worlds beginner"
                 v-else-if="['alpha', 'beta1', 'beta2', 'beta3'].includes(worldType)">
                <div v-for="(world, i) in staticData[worldType]" @click="worldClick(i)">
                    <div class="world-body" :class="`${world.levelName && world.levelName.toLowerCase()}`"
                         :style="`height: ${i === selectedIndex ? '265px' : '19px'}`">
                        <span class="title">{{ `${world.teamName}` }}</span>
                        <span v-if="i === selectedIndex">
                            {{
                                `\n${world.levelName}\n\n
                            ${world.players.join('\n ')} \n\n ${world.worldName}\n\n
                            ${world.duration} days\n\n
                            ${world.endDate}`
                            }}
                        </span>
                        <span v-if="worldType === 'beta3' && [1,2,3].includes(i)" class="beta-3-ranking">{{ i }}</span>
                        <div v-if="world.worldName === 'Alpha 1.0'" class="special-button"
                             @click="reportShowcase = true">View Report
                        </div>
                    </div>
                </div>
            </div>
            <!-- SPECIAL REPORT SHOWCASE -->
            <div class="special-report-showcase" v-if="reportShowcase" @click="reportShowcase = false"></div>
        </div>
    </div>
</template>

<script>
import dataAlpha from '../data/worlds/alpha.json';
import dataBeta1 from '../data/worlds/beta1.json';
import dataBeta2 from '../data/worlds/beta2.json';
import dataBeta3 from '../data/worlds/beta3.json';
import {mapState} from 'vuex';

export default {
    name: 'BOI',
    data() {
        return {
            selectedIndex: -1,
            worldType: 'tournament',
            worldTypes: ['tournament', 'evolution'],
            showOldWorlds: false,
            reportShowcase: false,
            tournamentWorlds: [],
            standardWorlds: [],
            staticData: {
                alpha: [],
                beta1: [],
                beta2: [],
                beta3: [],
            },

        };
    },
    computed: {
        ...mapState(['isMobile']),
    },
    methods: {
        worldClick(i) {
            if (this.selectedIndex !== i) this.selectedIndex = i;
            else this.selectedIndex = -1;
        },
        nextWorldType() {
            const worldTypes = this.worldTypes;
            let nextIndex = worldTypes.indexOf(this.worldType) + 1;
            if (nextIndex >= worldTypes.length) nextIndex = 0;
            this.worldType = worldTypes[nextIndex];
        },
        prevWorldType() {
            const worldTypes = this.worldTypes;
            let prevIndex = worldTypes.indexOf(this.worldType) - 1;
            if (prevIndex < 0) prevIndex = worldTypes.length - 1;
            this.worldType = worldTypes[prevIndex];
        },
        formatDuration(millis) {
            return Math.floor((millis / (1000 * 60 * 60 * 24)) * 10) / 10;
        },
        fetchWorldsOfLevel(level, levelName) {
            fetch(`${this.$url1}/world/closed/${level}`).then(response => response.json()).then(data => {
                if (data.length && data[0].scoreSystem) data.sort((a, b) => a.winners.score > b.winners.score ? -1 : 1);
                data.map(world => {
                    world.winners.forEach(winner => {
                        this[levelName].push({
                            teamName: winner.team,
                            worldName: world.name,
                            players: winner.members,
                            duration: winner.averageWinDuration ?
                                    this.formatDuration(winner.averageWinDuration) :
                                    undefined,
                            endDate: winner.winDate,
                            score: Math.floor(winner.score),
                        });
                    });
                });
                // sort ranking, primary sort score, secondary sort duration
                this[levelName].sort((a, b) => a.score === b.score ? a.duration - b.duration : b.score - a.score);
            });
        },
        fetchStaticWorldsByPhase(data, phaseName) {
            if (phaseName === 'beta3') {
                data.map(world => {
                    world.winners.forEach(winner => {
                        this.staticData[phaseName].push({
                            teamName: winner.team,
                            level: world.level,
                            levelName: world.level === 1 ? 'beginner' : world.level === 2 ? 'standard' : 'tournament',
                            worldName: world.name,
                            players: winner.members,
                            duration: winner.averageWinDuration ?
                                    this.formatDuration(winner.averageWinDuration) :
                                    undefined,
                            endDate: new Date(winner.winDate.$date).toLocaleDateString(),
                            score: Math.floor(winner.score),
                        });
                    });
                });
                this.staticData[phaseName].sort((a, b) => a.level === b.level ? (a.duration > b.duration ? 1 : -1) : a.level > b.level ? -1 : 1);
            } else {
                this.staticData[phaseName] = data.map(world => {
                    return {
                        teamName: world.winner.team,
                        levelName: world.levelName,
                        worldName: world.name,
                        players: world.winner.members,
                        duration: ['alpha', 'beta1'].includes(phaseName) ? world.duration : Math.round(
                                (new Date(world.winDate.$date) - new Date(world.startDate.$date)) / 1000 / 60 / 60 / 24),
                        endDate: ['alpha', 'beta1'].includes(phaseName) ? world.endDate : (new Date(
                                world.winDate.$date)).toLocaleDateString(),
                    };
                }).reverse();
            }
        },
        switchOldNew() {
            this.showOldWorlds = !this.showOldWorlds;
            this.getDynamicData = !this.getDynamicData;
            if (this.showOldWorlds) {
                this.worldTypes = ['beta3', 'beta2', 'beta1', 'alpha'];
                this.worldType = 'beta3';
            } else {
                this.worldTypes = ['tournament', 'evolution'];
                this.worldType = 'tournament';
            }
        },
        switchDisplayText() {
            if (!this.isMobile) return this.showOldWorlds ? 'Show new worlds' : 'Show old worlds';
            return this.showOldWorlds ? 'New' : 'Old';
        },
    },
    beforeMount() {
        this.fetchWorldsOfLevel(3, 'tournamentWorlds');
        this.fetchStaticWorldsByPhase(dataAlpha, 'alpha');
        this.fetchStaticWorldsByPhase(dataBeta1, 'beta1');
        this.fetchStaticWorldsByPhase(dataBeta2, 'beta2');
        this.fetchStaticWorldsByPhase(dataBeta3, 'beta3');
    },
};
</script>

<style lang="scss">
.boi {
    background: linear-gradient(45deg, rgba(6, 19, 32, 1) 1%, rgba(11, 26, 32, 1) 12%, rgba(20, 43, 64, 1) 100%);
    min-height: calc(100vh - 55px);
    color: #BEA141;

    .world-type-tab {
        font-weight: bold;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        width: 150px;
        margin: 10px 0;
        cursor: pointer;
        color: white;
        border: 1px solid #FFFFFFAA;
        top: 10px;
        position: relative;

        &.selected {
            background: #FFFFFF44;
        }
    }

    .switch_old_new {
        font-weight: bold;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        width: fit-content;
        margin: 10px 0;
        cursor: pointer;
        color: white;
        border: 1px solid #FFFFFFAA;
        position: absolute;
        bottom: 0;
        right: 10px;
        background: rgb(6, 19, 32);
        background: linear-gradient(60deg, rgba(6, 19, 32, 1) 0%, rgba(7, 20, 34, 1) 15%, rgba(91, 131, 170, 1) 30%, rgba(19, 41, 61, 1) 40%, rgba(26, 50, 72, 1) 60%, rgba(84, 128, 171, 1) 70%, rgba(26, 52, 75, 1) 85%, rgba(20, 43, 64, 1) 100%);
        background-size: 400% 400%;
        animation: anim-switch 4s ease infinite;
    }

    .worlds {
        display: flex;
        flex-direction: column-reverse;
        margin-top: 20px;
        overflow: auto;
        max-height: calc(100vh - 193px);

        &.beginner {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }

    .world-body {
        width: 200px;
        background: linear-gradient(90deg, #142b40AA, #BEA14166);
        background-size: 400% 400%;
        margin: 20px auto 0 auto;
        padding: 10px;
        border-radius: 5px;
        animation: anim-back 4s ease infinite;
        white-space: pre-line;
        line-height: 1.2em;
        overflow: hidden;
        transition: height 300ms;
        position: relative;

        &.tournament, &.advanced {
            color: white;
            margin: 20px;
            background: linear-gradient(90deg, #FFFFFF22, #2092C3);
            background-size: 400% 400%;
            animation: anim-back 4s ease infinite;
        }

        &.standard, &.normal {
            color: #e39852;
            margin: 20px;
            background: linear-gradient(90deg, #142b40AA, #e3985266);
            background-size: 400% 400%;
            animation: anim-back 4s ease infinite;
        }

        &.beginner {
            color: #6fbe41;
            margin: 20px;
            background: linear-gradient(90deg, #142b40AA, #6fbe4166);
            background-size: 400% 400%;
            animation: anim-back 4s ease infinite;
        }

        .title {
            display: block;
            font-weight: bold;
            cursor: pointer;
        }

        .special-button {
            background: #BEA141;
            color: #000000;
            border-radius: 8px;
            padding: 5px;
            margin: 10px 0;
            cursor: pointer;
        }

        &.new {
            .title {
                margin-bottom: 10px;
            }

            .description {
                margin: 8px 0;
            }
        }

        .beta-3-ranking {
            position: absolute;
            right: 10px;
            top: 10px;
            width: 19px;
            line-height: 19px;
            font-weight: bold;
            border: 1px solid #e39852;
            border-radius: 50%;
            text-align: center;
        }
    }

    .special-report-showcase {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: #000000AA url("../assets/final-report.png") no-repeat center;
        background-size: auto;
        cursor: pointer;
    }
}

.scoreboard {
    width: 95vw;
    max-width: 800px;
    margin: 20px auto 0 auto;
    background: linear-gradient(90deg, #142b40AA, #e3985266);
    background-size: 400% 400%;
    animation: anim-back 4s ease infinite;
    color: #e39852;
    border-radius: 5px;

    .header {
        margin: 10px 0;
        padding-bottom: 5px;
        border-bottom: 1px solid #e39852;
        box-sizing: border-box;
    }

    .row {
        transition: height 300ms;
        overflow: hidden;
    }

    .element {
        box-sizing: border-box;
        padding: 5px;
        max-height: 26px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .rank {
        padding-left: 10px;
        width: 15%;
    }

    .team {
        width: 30%;
    }

    .date {
        width: 30%;
    }

    .score {
        width: 25%;
        text-align: right;
        padding-right: 10px;
    }

    .row-extension {
        margin: 10px 0;

        .players {
            margin: 0 10px;
        }

        .members {
            line-height: 1.1em;
            white-space: pre-line;
        }

        .duration {
            margin: 0 10px 0 40px;
        }
    }
}

.arrow-left {
    transform: rotate(180deg);
}

@keyframes anim-back {
    0% {
        background-position: 0 50%
    }
    50% {
        background-position: 100% 50%
    }
    100% {
        background-position: 0 50%
    }
}

@keyframes anim-switch {
    0% {
        background-position: 0 50%
    }
    50% {
        background-position: 100% 50%
    }
    100% {
        background-position: 0 50%
    }
}

@media screen and (max-width: 600px) {
    .boi {
        min-height: calc(100vh - 50px);

        .special-report-showcase {
            background-size: contain;
        }

        .worlds {
            max-height: calc(75vh);
            bottom: 20px;
        }
    }
}
</style>