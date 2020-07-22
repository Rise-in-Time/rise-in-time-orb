<template>
    <div>
        <Menu v-if="!$isMobile"></Menu>
        <mobile-menu v-else></mobile-menu>
        <div class="boi">
            <div class="flex jc-sa">
                <div class="world-type-tab">Advanced</div>
                <div class="world-type-tab">Beginner</div>
                <div class="world-type-tab">Old Worlds</div>
            </div>
            <div class="worlds">
                <div v-for="(world, i) in oldWorlds" @click="selectedIndex = i">
                    <div class="world-body" :style="`height: ${i === selectedIndex ? '225px' : '19px'}`">
                        <span class="title">{{ `${world.teamName}` }}</span>
                        <span v-if="i === selectedIndex">
                            {{ `\n${world.players.join('\n ')} \n\n ${world.worldName}\n\n
                            ${world.duration} days\n\n
                            ${world.endDate}` }}
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

    export default {
        name: 'ArtGallery',
        components: {
            Menu,
            MobileMenu,
        },
        data() {
            return {
                selectedIndex: -1,
                reportShowcase: false,
                oldWorlds: [
                    {
                        teamName: 'Rise in Style',
                        worldName: 'Alpha 1.0',
                        players: ['Rise in Style'],
                        duration: 5,
                        endDate: '31.12.2018',
                    },
                    {
                        teamName: 'Dracarys',
                        worldName: 'Alpha 1.1',
                        players: ['vladimirderbööse', 'afluffynoob', 'Leon', 'Ibexor'],
                        duration: 14,
                        endDate: '10.03.2019',
                    },
                    {
                        teamName: 'Alpha',
                        worldName: 'Beta 1.0',
                        players: ['Ramsus', 'Eloxor', 'Blutwolf', 'hedgeh0g'],
                        duration: 27,
                        endDate: '27.11.2019',
                    },
                    {
                        teamName: 'Immortality',
                        worldName: 'Beta 1.1',
                        players: ['blubberbob', 'Immortal', 'Mauerblüemli', 'Alex'],
                        duration: 43,
                        endDate: '09.01.2020',
                    },
                ],
            };
        },
        methods: {},
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
            background: #BEA14133;
            width: 150px;
            margin-top: 10px;
            cursor: pointer;
            color: white
        }

        .worlds {
            display: flex;
            flex-direction: column-reverse;
            margin-top: 40px;
        }

        .world-button {
            font-weight: bold;
            width: 200px;
            background: linear-gradient(90deg, #142b40AA, #BEA14166);
            background-size: 400% 400%;
            padding: 10px;
            border-radius: 5px;
            margin: 20px auto 0 auto;
            animation: gold-back 4s ease infinite;
            cursor: pointer;
        }

        .world-body {
            width: 200px;
            background: linear-gradient(90deg, #142b40AA, #BEA14166);
            background-size: 400% 400%;
            margin: 20px auto 0 auto;
            padding: 10px;
            border-radius: 5px;
            animation: gold-back 4s ease infinite;
            white-space: pre-line;
            line-height: 1.2em;
            overflow: hidden;
            transition: height 300ms;

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

    @keyframes gold-back {
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
        }
    }
</style>