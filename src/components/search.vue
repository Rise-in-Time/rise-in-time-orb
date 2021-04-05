<template>
    <div class="search">
        <input placeholder="search" />
    </div>
</template>

<script>
import News from '../data/home-articles.json';

export default {
    name: 'search',
    components: {},
    data() {
        return {
            news: []
        };
    },
    beforeMount() {
        this.news = News;
    }
};

</script>

<style scoped>
 input {
     font-family: 'Muli', sans-serif;
     text-align: left;
     padding: 5px 20px;
     font-size: 14px;
     border-radius: 5px;
     border: 1px solid #C4C4C4;
 }
</style>