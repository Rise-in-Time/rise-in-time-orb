// game data
// TODO: fetch from server
exports.units = {
    spotterNaki: {
        name: 'Spotter Naki',
        css: 'spotter-naki',
        index: 0,
        attack: 1,
        defense: 1,
        speed: 120,
        recSpeed: 10,
        effective: [],
    },
    forestSpirit: {
        name: 'Forest Spirit',
        css: 'forest-spirit',
        index: 1,
        attack: 30,
        defense: 60,
        speed: 475,
        recSpeed: 75,
        effective: [
            4,
            7,
        ],
    },
    grassSpirit: {
        name: 'Grass Spirit',
        css: 'grass-spirit',
        index: 2,
        attack: 20,
        defense: 40,
        speed: 500,
        recSpeed: 50,
        effective: [
            4,
            7,
        ],
    },
    druidNaki: {
        name: 'Druid Naki',
        css: 'druid-naki',
        index: 3,
        attack: 25,
        defense: 25,
        speed: 300,
        recSpeed: 40,
        effective: [
            1,
            2,
            5,
        ],
    },
    guardNaki: {
        name: 'Guard Naki',
        css: 'guard-naki',
        index: 4,
        attack: 100,
        defense: 50,
        speed: 300,
        recSpeed: 100,
        effective: [
            3,
            5,
        ],
    },
    elderSpirit: {
        name: 'Elder Spirit',
        css: 'elder-spirit',
        index: 5,
        attack: 100,
        defense: 1000,
        speed: 750,
        recSpeed: 500,
        effective: [
            7,
            12,
        ],
    },
    pangoan: {
        name: 'Pangoan',
        css: 'pangoan',
        index: 6,
        attack: 200,
        defense: 200,
        speed: 400,
        recSpeed: 125,
        effective: [],
    },
    athlas: {
        name: 'Athlas',
        css: 'athlas',
        index: 7,
        attack: 800,
        defense: 600,
        speed: 250,
        recSpeed: 325,
        effective: [
            8,
            9,
            10,
            11,
        ],
    },
    raiderNaki: {
        name: 'Raider Naki',
        css: 'raider-naki',
        index: 8,
        attack: 5,
        defense: 1,
        speed: 200,
        recSpeed: 10,
        effective: [
            3,
            4,
        ],
    },
    teryx: {
        name: 'Teryx',
        css: 'teryx',
        index: 9,
        attack: 90,
        defense: 20,
        speed: 250,
        recSpeed: 30,
        effective: [
            1,
            2,
            3,
            4,
            5,
        ],
    },
    ovivi: {
        name: 'Ovivi',
        css: 'ovivi',
        index: 10,
        attack: 25,
        defense: 150,
        speed: 60,
        recSpeed: 50,
        effective: [
            1,
            2,
            5,
            12,
        ],
    },
    marshy: {
        name: 'Marshy',
        css: 'marshy',
        index: 11,
        attack: 50,
        defense: 20,
        speed: 250,
        recSpeed: 30,
        effective: [
            3,
            4,
            5,
        ],
    },
    wasty: {
        name: 'Wasty',
        css: 'wasty',
        index: 12,
        attack: 250,
        defense: 10,
        speed: 350,
        recSpeed: 100,
        effective: [
            1,
            2,
            11,
        ],
    },
    raiderHero: {
        name: 'Raider Hero',
        css: 'raider-hero',
        index: 13,
        attack: 125000,
        defense: 125000,
        speed: 150,
        recSpeed: 21600,
        effective: [
            3,
            4,
            14,
            15,
        ],
    },
    teryxHero: {
        name: 'Teryx Hero',
        css: 'teryx-hero',
        index: 14,
        attack: 2500000,
        defense: 100000,
        speed: 250,
        recSpeed: 86400,
        effective: [
            1,
            2,
            3,
            4,
            5,
        ],
    },
    oviviHero: {
        name: 'Ovivi Hero',
        css: 'ovivi-hero',
        index: 15,
        attack: 75000,
        defense: 750000,
        speed: 60,
        recSpeed: 43200,
        effective: [
            1,
            2,
            5,
            12,
        ],
    },
};

