# Rise in Time - Orb

## Project setup
```
npm install
```

##### Compiles and hot-reloads for development
```
npm run serve
```

##### Compiles and minifies for production
```
npm run build
```

##### Lints and fixes files
```
npm run lint
```

## API Documentation
#### Treasure Rotation
``
GET /treasureRotation
``

Response:
```
[ LesserTreasure, MagicTreasure, DivineTreasure]
--
[ [T0, T4, T3, T2, T1], [...], [...] ]
--
[
    [
        {
            "soulStones": 800
        },
        {
            "soulStones": 9600
        },
        {
            "units": {
                "amount": 120000,
                "index": 5
            }
        },
        {
            "units": {
                "amount": 40000,
                "index": 1
            }
        },
        {
            "soulStones": 400
        }
    ],
    [...],
    [...]
]
```

#### Battle Board
``
GET /battle-board
``

Response:
```
[ playerNumber1, playerNumber2, ..., playerNumber10]
--
[
    {
        "_id": "5f0cfa5d8c411f00129f6241",
        "dailyBP": 26629676,
        "world": "Eris23",
        "userName": "Fox"
    },
    ...
]
```

#### Board of Immortality
``
GET /world/closed/:level
``

Params:
```
level: level of the world
    1 - Beginner Worlds
    2 - Novice Worlds
    3 - Advanced Worlds
```

Response:
```
[ world, world, ...]
--
[
    {
        "winner": {
            "team": "αlpha",
            "members": [ "Bob","Alice", ...]
        },
        "winDate": "2020-06-05T20:45:55.851Z",
        "name": "Zeduvis3",
        "displayName": "Zeduvis",
        "level": 1,
        "startDate": "2020-05-29T20:38:13.876Z"
    },
    ...
]
```
