<template>
    <div class="page-container">
        <img class="stone1" src="../assets/StoneGroup1.svg">
        <img class="stone2" src="../assets/StoneGroup2.svg">

        <Menu></Menu>

        <div class="question-container">
            <div class="FAQ">FAQ</div>

            <div v-for="(question, i) in questions" :key="i">
                <!-- QUESTION BOX -->
                <div class="question-box" :class="{'float-left': i % 2 === 1}">
                    <img class="deco5" src="../assets/DecoFAQ.svg">
                    <div class="title">{{question.title}}</div>
                    <div class="text">{{question.text}}</div>
                </div>
                <img class="deco7" src="../assets/DecoFAQ2.svg">
            </div>

        </div>

        <!--<img class="deco1" src="../assets/groups/Vector 2.5.svg">-->


    </div>
</template>
<script>
    import Menu from '../components/menu';

    export default {
        name: 'FAQ',
        components: {
            Menu,
        },
        data() {
            return {
                questions: [
                    {
                        title: 'How can I win a world?',
                        text: 'In order to win a world, you first have to conquer the Crater of Immortality.' +
                            '\n\nOnce you have conquered the crater, the real fun starts: All your rivaling teams as well as Axos, the vulcano-dweller, will try to steal it back from you.' +
                            '\n\nIf you manage to hold the crater for a total of 48 hours, your team wins the world.',
                    },
                    {
                        title: 'What are Light Essences and how to get them?',
                        text: 'Light Essence is Rise in Times premium-currency.' +
                            '\nYou can acquire Light Essence in exchange for real money.' +
                            '\n\nLight Essence can be traded against different kinds of visual goods like cool new player icons.' +
                            '\n\nA different use for Light Essence will be available in the future: You will be able to subscribe to the Rise in Time Toolbox using Light Essence.' +
                            'More information about the Toolbox will be published at a later stage of development.',
                    },
                    {
                        title: 'What are Divine Stones and how to get them?',
                        text: 'Divine Stones are Rise in Times effort-currency.' +
                            '\nThey can only be earned through ingame effort - there is no way to buy Divine Stones with Light Essence!' +
                            '\n\nYou can use Divine Stones to book yourself a slot for playing on a new advanced world. Besides that, there are also exclusive player-icons which can be traded against Divine Stones.',
                    },
                ],
            };
        },
        methods: {},
        beforeMount() {
        },
    };
</script>

<style scoped lang="scss">

    menu {
        margin-bottom: 50px;
    }

    .page-container {
        overflow-y: scroll;
        height: 100vh;
    }

    .question-container {
        height: fit-content;
    }

    .question-box {
        position: relative;
        margin: 15px 150px;
        width: 743px;
        height: 350px;
        background: white;
        border: 2px solid #959595;
        box-sizing: border-box;
        overflow: visible;

    }

    .question-box.float-left {
        margin: 10px 150px 10px auto;
    }

    .stone1 {
        position: fixed;
        width: 250px;
        height: 300px;
        transform: rotate(2.3deg);
        bottom: 140px;
        left: 100px;
        z-index: -6;
        overflow: visible;

    }

    .stone2 {
        position: fixed;
        width: 270px;
        height: 300px;
        transform: rotate(2.3deg);
        top: -5px;
        right: 150px;
        z-index: -6;
        overflow: visible;
    }

    .deco1 {
        width: 16px;
        height: 653.5px;
        left: 1068.5px;
        top: 619px;
        border: 2px solid #959595;
        box-shadow: 0 0 4px #FFFFFF;
        transform: rotate(90deg);
    }

    /* Header */
    .header {
        margin-top: 70px;
    }

    .b {
        font-weight: bold;
    }

    .menu-group {
        margin: 10px auto 0 auto;
        position: relative;
        height: 45px;
        width: 91%;
    }

    .header-group {
        margin-top: 60px;
        position: relative;
    }

    .logo {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 300px;
        top: -81px;
        left: -75px;
        position: absolute;
    }

    .title {
        position: relative;
        width: 683px;
        height: 20%;
        left: 20px;
        top: 10px;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 35px;
        text-align: justify;

        color: #6C6C6C;
    }

    .text {
        display: flex;
        position: absolute;
        left: 20px;
        top: 50px;
        width: 683px;
        height: 80%;
        color: #6C6C6C;
        line-height: 25px;
        white-space: pre-line;
        align-items: center;
    }

    .FAQ {
        font-size: 36px;
        line-height: 52px;
        margin-left: 150px;
        margin-top: 50px;
        color: #6C6C6C;
    }

    .deco5 {
        position: absolute;
        top: -14px;
        left: -25px;
    }

    .deco7 {
        display: block;
        width: 750px;
        height: 90px;
        margin: 0 auto;
    }

</style>