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

## How to write Articles?
Articles are stored as JSON files in ```src/data/articles```. To add a new article you can add a new JSON file.
Also add your new article in the file ```src/data/articles/articleContents```. This will make them appear
in the article overview (Wiki) and in the search.

#### Article Structure
An article contains of ```title```, ```paragraph```, ```image``` and ```chapters```. The image is optional.
Look into other articles and their JSON's for examples.

A chapter contains of ```subtitle```, ```paragraph``` and ```image```. The image is optional.

If an image needs to have a specific size the property ```imageSize``` can be passed additionally in a chapter 
or the article itself. The property ```imageSize``` has two properties ```width``` and ```height```, where the
width and height can be specified with a number (pixels). If now size has been specified a default size will be taken.

#### Paragraph Special Syntax
Next to plain text paragraphs also support basic HTML and some special syntax.

Use ```\n``` for line breaks and ```\n\n``` for an empty line.

Use the ```{{ data.propertyName }}``` syntax to have dynamic data in your paragraph. Only the data that is stored 
in ```gameData``` in the Vuex store is supported. 

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
    2 - Standard Worlds
    3 - Tournament Worlds
```

Response:
```
[ world, world, ...]
--
[
    {
        "winners": [
        {
            "members": [ "Bob","Alice", ...]
            "score": "8000",
            "team": "Boberer",
            "winDate": 2021-01-06T12:22:51.730+00:00,
            "averageWinDuration": 74220
        },
        ...
        ],
        "name": "Zadeo31",
        "level": 1,
        "startDate": 2021-01-06T12:21:02.064+00:00
    },
    ...
]
```
