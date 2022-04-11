<template>
    <div>
        <div class="art-container">
            <div v-for="art in artworks" class="art">
                <h2 class="art-title">{{ art.name }}</h2>
                <div class="art-subtitle">{{ `by ${art.artist}` }}</div>
                <div class="art-image"
                     :style="getImageStyling(art)"
                     :key="art.id"></div>
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
            artworks: [
                {
                    id: 0,
                    name: 'Spotter Naki',
                    artist: 'WarHammer',
                    image: 'art_warhammer_spotter.png',
                    maxHeight: 500,
                    horizontal: false
                },
                {
                    id: 1,
                    name: 'Creazy Ovivi',
                    artist: 'Icon',
                    image: 'art_icon_ovivi.png',
                    maxHeight: 500,
                    horizontal: true
                },
                {
                    id: 2,
                    name: 'Portal Invasion',
                    artist: 'RED JAR',
                    image: 'art_portal_invasion.gif',
                    maxHeight: 300,
                    horizontal: true
                },
                {
                    id: 3,
                    name: 'Athlas',
                    artist: 'RED JAR',
                    image: 'art_athlas.png',
                    maxHeight: 500,
                    horizontal: true
                },
                {
                    id: 4,
                    name: 'Glowing Portal',
                    artist: 'dr. tutleVonBlaue',
                    image: 'art_glowing_portal.png',
                    maxHeight: 500,
                    horizontal: true
                },
                {
                    id: 5,
                    name: 'Magic Marsh',
                    artist: 'RED JAR',
                    image: 'art_magic_marsh.png',
                    maxHeight: 300,
                    horizontal: true
                },{
                    id: 6,
                    name: 'Grass Spirit',
                    artist: 'RED JAR',
                    image: 'art_grass_spirit_with_suit.png',
                    maxHeight: 500,
                    horizontal: true
                },{
                    id: 7,
                    name: 'Raider Naki Attack',
                    artist: 'RED JAR',
                    image: 'art_raider_attack.gif',
                    maxHeight: 500,
                    horizontal: true
                },{
                    id: 8,
                    name: 'Grass Spirit Surprise',
                    artist: 'RED JAR',
                    image: 'art_grass_spirit_surprise.gif',
                    maxHeight: 500,
                    horizontal: true
                },{
                    id: 9,
                    name: 'Nyxi relaxing',
                    artist: 'RED JAR',
                    image: 'art_pixel_frog.png',
                    maxHeight: 500,
                    horizontal: true
                },{
                    id: 10,
                    name: 'Firework at night',
                    artist: 'RED JAR',
                    image: 'art_firework_night.gif',
                    maxHeight: 500,
                    horizontal: true
                },{
                    id: 11,
                    name: 'Guard Naki',
                    artist: 'dr. tutle',
                    image: 'art_guard_naki_with_shotgun.png',
                    maxHeight: 500,
                    horizontal: true
                },
                {
                    id: 12,
                    name: 'Portal Explosion',
                    artist: 'RED JAR',
                    image: 'art_portal_explosion.gif',
                    maxHeight: 500,
                    horizontal: true
                },
            ]
        };
    },
    computed: {
        ...mapState(['isMobile']),
    },
    methods: {
        getImageStyling(art) {
            return {
                'background-image': `url(${require('../assets/art/' + art.image)})`,
                'max-height': this.isMobile && art.horizontal ? '80vw' : `${art.maxHeight}px`
            };
        }
    }
};
</script>

<style lang="scss">
.art-container {
    overflow: auto;
    height: calc(100vh - 55px);
}

.art {
    .art-title {
        text-align: center;
        font-weight: 600;
        font-size: 18px;
        margin-top: 20px;
    }

    .art-subtitle {
        text-align: center;
        margin-top: 5px;
        font-size: 18px;
    }

    .art-image {
        width: 90vw;
        height: 80vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin: 10px auto 40px auto;
    }
}
</style>