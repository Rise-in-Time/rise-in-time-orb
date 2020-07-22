<template>
    <div>
        <Menu v-if="!$isMobile"></Menu>
        <mobile-menu v-else></mobile-menu>
        <div class="art-container">
            <div v-for="art in artworks" class="art">
                <h2 class="art-title">{{art.name}}</h2>
                <div class="art-subtitle">{{`by ${art.artist}`}}</div>
                <div class="art-image"
                     :style="getImageStyling(art)"
                     :key="art.id"></div>
            </div>
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
                artworks: [
                    {
                        id: 0,
                        name: 'Spotter Naki',
                        artist: 'WarHammer',
                        image: 'art_warhammer_spotter.png',
                        maxHeight: 700,
                        horizontal: false,
                    },
                    {
                        id: 1,
                        name: 'Creazy Ovivi',
                        artist: 'Icon',
                        image: 'art_icon_ovivi.png',
                        maxHeight: 600,
                        horizontal: true,
                    },
                ],
            };
        },
        methods: {
            getImageStyling(art) {
                return {
                    'background-image': `url(${require('../../assets/art/' + art.image)})`,
                    'max-height': this.$isMobile && art.horizontal ? '80vw' : `${art.maxHeight}px`,
                };
            },
        },
    };
</script>

<style lang="scss">
    .art-container {
        overflow: auto;
        height: calc(100vh - 125px);
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