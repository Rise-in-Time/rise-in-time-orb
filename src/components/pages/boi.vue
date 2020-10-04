<template>
    <div>
        <Menu v-if="!$isMobile"></Menu>
        <mobile-menu v-else></mobile-menu>
        <div class="boi">
            <div class="flex jc-sa ai-c">
                <img src="../../assets/icons/arrow.svg" alt="arrow" class="arrow-left"
                     v-if="$isMobile" @click="prevWorldType()"/>
                <div class="world-type-tab" @click="worldType = 'advanced'"
                     :class="{'selected': worldType === 'advanced'}"
                     v-if="!$isMobile || worldType === 'advanced'">
                    Advanced
                </div>
                <div class="world-type-tab" @click="worldType = 'novice'"
                     :class="{'selected': worldType === 'novice'}"
                     v-if="!$isMobile || worldType === 'novice'">
                    Novice
                </div>
                <div class="world-type-tab" @click="worldType = 'beginner'"
                     :class="{'selected': worldType === 'beginner'}"
                     v-if="!$isMobile || worldType === 'beginner'">
                    Beginner
                </div>
                <div class="world-type-tab" @click="worldType = 'old'" :class="{'selected': worldType === 'old'}"
                     v-if="!$isMobile || worldType === 'old'">
                    Old Worlds
                </div>
                <img src="../../assets/icons/arrow.svg" alt="arrow"
                     v-if="$isMobile" @click="nextWorldType()"/>
            </div>
            <!-- ADVANCED WORLDS -->
            <div class="worlds advanced" v-if="worldType === 'advanced'">
                <div v-for="(world, i) in advancedWorlds" @click="worldClick(i)">
                    <div class="world-body advanced" :style="`height: ${i === selectedIndex ? '225px' : '19px'}`">
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
            <!-- NOVICE WORLDS -->
            <div class="worlds novice" v-if="worldType === 'novice'">
                <div v-for="(world, i) in noviceWorlds" @click="worldClick(i)">
                    <div class="world-body novice" :style="`height: ${i === selectedIndex ? '225px' : '19px'}`">
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
            <!-- BEGINNER WORLDS -->
            <div class="worlds beginner" v-else-if="worldType === 'beginner'">
                <div v-for="(world, i) in beginnerWorlds" @click="worldClick(i)">
                    <div class="world-body beginner" :style="`height: ${i === selectedIndex ? '225px' : '19px'}`">
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
            <!-- OLD WORLDS -->
            <div class="worlds" v-else-if="worldType === 'old'">
                <div v-for="(world, i) in oldWorlds" @click="worldClick(i)">
                    <div class="world-body" :style="`height: ${i === selectedIndex ? '225px' : '19px'}`">
                        <span class="title">{{ `${world.teamName}` }}</span>
                        <span v-if="i === selectedIndex">
                            {{
                                `\n${world.players.join('\n ')} \n\n ${world.worldName}\n\n
                            ${world.duration} days\n\n
                            ${world.endDate}`
                            }}
                        </span>
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
import MobileMenu from '../mobileMenu';
import Menu from '../menu';
import oldWorlds from '../../data/worlds/oldWorlds.json';
import beginnerWorlds from '../../data/worlds/beginnerWorlds.json';
import noviceWorlds from '../../data/worlds/noviceWorlds.json';
import advancedWorlds from '../../data/worlds/advancedWorlds.json';

export default {
    name: 'ArtGallery',
    components: {
        Menu,
        MobileMenu
    },
    data() {
        return {
            selectedIndex: -1,
            worldType: 'advanced',
            worldTypes: ['advanced', 'novice', 'beginner', 'old'],
            reportShowcase: false,
            advancedWorlds: [],
            noviceWorlds: [],
            beginnerWorlds: [],
            oldWorlds: oldWorlds
        };
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
        }
    },
    beforeMount() {
        this.beginnerWorlds = beginnerWorlds.map(world => {
            return {
                teamName: world.winner.team,
                worldName: world.name,
                players: world.winner.members,
                duration: Math.round(
                        (new Date(world.winDate.$date) - new Date(world.startDate.$date)) / 1000 / 60 / 60 / 24),
                endDate: world.winDate.$date
            };
        }).reverse();
        this.noviceWorlds = noviceWorlds.map(world => {
            return {
                teamName: world.winner.team,
                worldName: world.name,
                players: world.winner.members,
                duration: Math.round(
                        (new Date(world.winDate.$date) - new Date(world.startDate.$date)) / 1000 / 60 / 60 / 24),
                endDate: world.winDate.$date
            };
        }).reverse();
        this.advancedWorlds = advancedWorlds.map(world => {
            return {
                teamName: world.winner.team,
                worldName: world.name,
                players: world.winner.members,
                duration: Math.round(
                        (new Date(world.winDate.$date) - new Date(world.startDate.$date)) / 1000 / 60 / 60 / 24),
                endDate: world.winDate.$date
            };
        });
        /* TODO: renable fetch, when live again
        fetch(this.$url1 + '/world/closed/5').then(response => response.json()).then(data => {
            this.advancedWorlds = data.map(world => {
                return {
                    teamName: world.winner.team,
                    worldName: world.name,
                    players: world.winner.members,
                    duration: Math.round(
                            (new Date(world.winDate) - new Date(world.startDate)) / 1000 / 60 / 60 / 24),
                    endDate: world.winDate,
                };
            });
        });
        fetch(this.$url1 + '/world/closed/1').then(response => response.json()).then(data => {
            this.beginnerWorlds = data.map(world => {
                return {
                    teamName: world.winner.team,
                    worldName: world.name,
                    players: world.winner.members,
                    duration: Math.round(
                            (new Date(world.winDate) - new Date(world.startDate)) / 1000 / 60 / 60 / 24),
                    endDate: world.winDate,
                };
            }).reverse();
        });
        fetch(this.$url1 + '/world/closed/2').then(response => response.json()).then(data => {
            this.noviceWorlds = data.map(world => {
                return {
                    teamName: world.winner.team,
                    worldName: world.name,
                    players: world.winner.members,
                    duration: Math.round(
                            (new Date(world.winDate) - new Date(world.startDate)) / 1000 / 60 / 60 / 24),
                    endDate: world.winDate,
                };
            }).reverse();

         */
    }
};
</script>

<style lang="scss">
.boi {
    background: linear-gradient(45deg, rgba(6, 19, 32, 1) 1%, rgba(11, 26, 32, 1) 12%, rgba(20, 43, 64, 1) 100%);
    min-height: calc(100vh - 125px);
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

        &.selected {
            background: #FFFFFF44;
        }
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

        &.advanced {
            color: white;
            background: linear-gradient(90deg, #FFFFFF22, #2092C3);
            background-size: 400% 400%;
            animation: anim-back 4s ease infinite;
        }

        &.novice {
            color: #e39852;
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
    }

    .special-report-showcase {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: #000000AA url("../../assets/final-report.png") no-repeat center;
        background-size: auto;
        cursor: pointer;
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

@media screen and (max-width: 600px) {
    .boi {
        min-height: calc(100vh - 50px);

        .special-report-showcase {
            background-size: contain;
        }

        .worlds {
            max-height: calc(100vh - 108px);
        }
    }
}
</style>