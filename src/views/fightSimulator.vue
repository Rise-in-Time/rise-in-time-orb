<template>
    <div class="example-page">
        <h1 class="title">Hey I'm an example</h1>
        <p>{{ exampleData.text }}</p>
        <button @click="toggleData()">Toggle data</button>
        <div v-if="showData" class="data-container">
            <div v-for="data in exampleArray" class="data-example">
                {{ data }}
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'ArtGallery',
    data() {
        return {
            exampleData: {
                text: 'I\'m from data',
            },
            exampleArray: ['data', 'more data', 'all displayed with one v-for'],
            showData: true,
        };
    },
    computed: {
        ...mapState(['isMobile']),
    },
    methods: {
        toggleData() {
            this.showData = !this.showData;
        },
    },
};
</script>

<style lang="scss">
.example-page {
    padding: 30px;
}

.title {
    font-size: 40px;
    margin: 20px;
    text-align: center;
}

.data-container {
    .data-example {
        padding: 10px;
        margin: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px #0b1a20;
    }
}
</style>