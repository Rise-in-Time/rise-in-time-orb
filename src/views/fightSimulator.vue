<template class="template">
    <div class="fight-simulator">
        <h1 class="title">Fight Simulator</h1>

        <p>Version 1.0</p>
        <p>Made by Pauton</p>

        <!--Unit Overview Table-->
        <table class="tg">
            <thead>
            <tr>
                <th>
                    <select id="World_Select" @change="fillUnitTable()">
                        <option>Beginner World</option>
                        <option>Standard World</option>
                    </select>
                </th>
            </tr>
            <tr>
                <th class="tg-0pky">Normal Units</th>
                <th class="tg-0pky">Attack</th>
                <th class="tg-0pky">Defense</th>
                <th class="tg-0pky">Travel Time (s/field)</th>
                <th class="tg-0pky">Recruitment Duration in seconds</th>
                <th class="tg-0pky">Attack ratio (attack/time)</th>
                <th class="tg-0pky">Defence ratio (defence/time)</th>
                <th class="tg-0pky">Effective against</th>
                <th class="tg-0pky">Weak against</th>
                <th class="tg-0pky">Recruiting Location</th>
                <th class="tg-0pky">max. Strength generated in 24h per field</th>
            </tr>
            <tr v-for="unit in units">
                <th class="tg-0pky">{{ unit.name }}</th>
                <th class="tg-0pky">{{ unit.attack }}</th>
                <th class="tg-0pky">{{ unit.defense }}</th>
                <th class="tg-0pky">{{ unit.speed }}</th>
                <th class="tg-0pky">{{ unit.recSpeed }}</th>
                <th class="tg-0pky">{{ (unit.attack / unit.recSpeed).toFixed(2) }}</th>
                <th class="tg-0pky">{{ (unit.defense / unit.recSpeed).toFixed(2) }}</th>
                <th class="tg-0pky">{{ unit.effectiveAgainst }}</th>
                <th class="tg-0pky">{{ unit.weakAgainst }}</th>
                <th class="tg-0pky">{{ unit.recruitingLocation }}</th>
                <th class="tg-0pky">{{ formatNumber(unit.strength / unit.recSpeed * (60 * 60 * 24), 4) }}</th>
            </tr>
            </thead>
        </table>
        <br>
        <br>
        <br>

        <!--FightSim Table-->
        <table class="tg">
            <thead>
            <tr>
                <th class="tg-0pky">Fight Simulator</th>
                <th class="tg-0pky"></th>
                <th class="tg-0pky" colspan="3"></th>
                <th class="tg-0pky"></th>
                <th class="tg-0pky"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="tg-0pky"></td>
                <td class="tg-0pky">%</td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky">death</td>
                <td class="tg-0pky">%</td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky">death</td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Spotter Naki</span></td>
                <td class="tg-0pky" id="off%0">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath0">0</td>
                <td class="tg-0pky" id="def%0">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath0">0</td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Druid Naki</span></td>
                <td class="tg-0pky" id="off%1">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath1">0</td>
                <td class="tg-0pky" id="def%1">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath1">0</td>
            </tr>

            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Grass Spirit</span></td>
                <td class="tg-0pky" id="off%2">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath2">0</td>
                <td class="tg-0pky" id="def%2">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath2">0</td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Forest Spirit</span></td>
                <td class="tg-0pky" id="off%3">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath3">0</td>
                <td class="tg-0pky" id="def%3">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath3">0</td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Guard Naki</span></td>
                <td class="tg-0pky" id="off%4">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath4">0</td>
                <td class="tg-0pky" id="def%4">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath4">0</td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Elder Spirit</span></td>
                <td class="tg-0pky" id="off%5">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath5">0</td>
                <td class="tg-0pky" id="def%5">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath5">0</td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Pangoan</span></td>
                <td class="tg-0pky" id="off%6">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath6">0</td>
                <td class="tg-0pky" id="def%6">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath6">0</td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Athlas</span></td>
                <td class="tg-0pky" id="off%7">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath7">0</td>
                <td class="tg-0pky" id="def%7">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath7">0</td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Nyxi</span></td>
                <td class="tg-0pky" id="off%8">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath8">0</td>
                <td class="tg-0pky" id="def%8">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath8">0</td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Ranax</span></td>
                <td class="tg-0pky" id="off%9">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath9">0</td>
                <td class="tg-0pky" id="def%9">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath9">0</td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Ovivi</span></td>
                <td class="tg-0pky" id="off%10">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath10">0</td>
                <td class="tg-0pky" id="def%10">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath10">0</td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Teryx</span></td>
                <td class="tg-0pky" id="off%11">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath11">0</td>
                <td class="tg-0pky" id="def%11">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath11">0</td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Raider</span></td>
                <td class="tg-0pky" id="off%12">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath12">0</td>
                <td class="tg-0pky" id="def%12">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath12">0</td>
            </tr>

            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Ovivi Hero</span></td>
                <td class="tg-0pky" id="off%13">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath13">0</td>
                <td class="tg-0pky" id="def%13">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath13">0</td>
            </tr>

            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Teryx Hero</span></td>
                <td class="tg-0pky" id="off%14">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath14">0</td>
                <td class="tg-0pky" id="def%14">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath14">0</td>
            </tr>

            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Raider Hero</span></td>
                <td class="tg-0pky" id="off%15">0%</td>
                <td class="att_num">
                    <input type="number" value="0" class="attack_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="offDeath15">0</td>
                <td class="tg-0pky" id="def%15">0%</td>
                <td class="def_num">
                    <input type="number" value="0" class="def_number" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                </td>
                <td class="tg-0pky" id="defDeath15">0</td>
            </tr>

            <tr>
                <td class="tg-0pky"></td>
                <td class="tg-0pky"></td>
                <td class="tg-c6of"></td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky"></td>
                <td class="tg-c6of"></td>
                <td class="tg-0pky"></td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">Skill</span></td>
                <td class="tg-0pky"></td>
                <td class="tg-c6of">
                    <input type="number" id="offensive_Skill" value="0" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                    %
                </td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky"></td>
                <td class="tg-c6of">
                    <input type="number" id="defensive_Skill" value="0" min="0" @input="calculate()"
                           @focus="$event.target.select()">
                    %
                </td>
                <td class="tg-0pky"></td>
            </tr>
            <tr>
                <td class="tg-0pky"><span style="font-weight:bold">effective Unit</span></td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky" id="effectiveOff">0</td>
                <td class="tg-0pky">%</td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky" id="effectiveDef">0</td>
                <td class="tg-0pky">%</td>
            </tr>
            <tr>
                <td class="tg-0pky"></td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky">Plague(true/false)</td>
                <td class="tg-c6of">
                    <select id="plague" @input="calculate()">
                        <option value=false>false</option>
                        <option value=true>true</option>
                    </select>
                </td>
                <td class="tg-0pky"></td>
            </tr>
            <tr>
                <td class="tg-0pky"></td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky">Healing</td>
                <td class="tg-c6of">
                    <input type="number" value="0" min="0" @input="calculate()" @focus="$event.target.select()">
                    %
                </td>
                <td class="tg-0pky"></td>
            </tr>
            <tr>
                <td class="tg-0pky"></td>
                <td class="tg-0pky">Strength</td>
                <td class="tg-0pky"><span style="font-weight:bold">Strength lost</span></td>
                <td class="tg-0pky">Difference</td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky">Defense</td>
                <td class="tg-0pky"></td>
            </tr>
            <tr>
                <td class="tg-0pky"></td>
                <td class="tg-0pky" id="totalAttack"><span style="font-weight:bold">0</span></td>
                <td class="tg-c6of" id="StrengthLost">0</td>
                <td class="tg-c6of" id="Difference"><span style="font-style:italic">0</span></td>
                <td class="tg-0pky"></td>
                <td class="tg-0pky" id="totalDefense"><span style="font-weight:bold">0</span></td>
                <td class="tg-0pky"></td>
            </tr>
            </tbody>
        </table>
        <br>

        <input class="button" type="button" value="calculate" id="button" @click="calculate()">


        <br>
        <br>

        <p>Override automatic effective Unit calculation</p>
        <br>


        <div class="select-wrapper">
            <select id="override" @change="calculate()">
                <option value=false>false</option>
                <option value=true>true</option>
            </select>
        </div>


    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'FightSimulator',
    data() {
        return {
            //Order of Units needs to match order in HTML and needs to exactly match unitarray
            UnitArray: [
                //Spotter Naki
                {
                    Strength: 1,
                    Defense: 1,
                    Speed: 120,
                    RecruitmentTime: 10,
                    RecruitingLocation: 'Airship / Skilltree',
                    Effective0: 'Nothing',
                    Effective1: null,
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Nothing',
                },
                //Druid Naki
                {
                    Strength: 25,
                    Defense: 25,
                    Speed: 300,
                    RecruitmentTime: 40,
                    RecruitingLocation: 'Forest / Grassland',
                    Effective0: 'Forest Spirit',
                    Effective1: 'Grass Spirit',
                    Effective2: 'Elder Spirit',
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Guard Naki, Nyxi, Teryx (Hero), Raider (Hero)',
                },
                //Grass Spirit
                {
                    Strength: 20,
                    Defense: 40,
                    Speed: 500,
                    RecruitmentTime: 50,
                    RecruitingLocation: 'Grassland',
                    Effective0: 'Guard Naki',
                    Effective1: 'Athlas',
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Druid Naki, Ranax, Ovivi (Hero), Teryx (Hero)',
                },
                //Forest Spirit
                {
                    Strength: 30,
                    Defense: 60,
                    Speed: 475,
                    RecruitmentTime: 75,
                    RecruitingLocation: 'Forest',
                    Effective0: 'Guard Naki',
                    Effective1: 'Athlas',
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Druid Naki, Ranax, Ovivi (Hero), Teryx (Hero)',
                },
                //Guard Naki
                {
                    Strength: 100,
                    Defense: 50,
                    Speed: 300,
                    RecruitmentTime: 100,
                    RecruitingLocation: 'High Grass',
                    Effective0: 'Druid Naki',
                    Effective1: 'Elder Spirit',
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Grass Spirit, Forest Spirit, Nyxi, Teryx (Hero), Raider (Hero=',
                },
                //Elder Spirit
                {
                    Strength: 100,
                    Defense: 1000,
                    Speed: 750,
                    RecruitmentTime: 500,
                    RecruitingLocation: 'Magic Forest',
                    Effective0: 'Athlas',
                    Effective1: 'Wasty',
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Druid Naki, Guard Naki, Nyxi, Ovivi (Held), Teryx (Held)',
                },
                //Pangona
                {
                    Strength: 200,
                    Defense: 200,
                    Speed: 400,
                    RecruitmentTime: 125,
                    RecruitingLocation: 'Wasteland / Dunes / Fiery Desert',
                    Effective0: 'nothing',
                    Effective1: null,
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Nothing',
                },
                //Athlas
                {
                    Strength: 800,
                    Defense: 600,
                    Speed: 76.66,
                    RecruitmentTime: 325,
                    RecruitingLocation: 'Ash Fields / Fiery Desert, ',
                    Effective0: 'Marshy',
                    Effective1: 'Teryx',
                    Effective2: 'Raider',
                    Effective3: 'Ovivi',
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Grass Spirit, Forest Spirit, Elder Spirit',
                },
                //Nyxi
                {
                    Strength: 50,
                    Defense: 20,
                    Speed: 250,
                    RecruitmentTime: 30,
                    RecruitingLocation: 'Swamp',
                    Effective0: 'Druid Naki',
                    Effective1: 'Guard Naki',
                    Effective2: 'Elder Spirit',
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Ranax, Athlas',
                },
                //Ranax
                {
                    Strength: 250,
                    Defense: 10,
                    Speed: 350,
                    RecruitmentTime: 100,
                    RecruitingLocation: 'Dunes',
                    Effective0: 'Marshy',
                    Effective1: 'Grass Spirit',
                    Effective2: 'Forest Spirit',
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Elder Spirit, Ovivi (Held)',
                },
                //Ovivi
                {
                    Strength: 25,
                    Defense: 150,
                    Speed: 60,
                    RecruitmentTime: 50,
                    RecruitingLocation: 'Control Field',
                    Effective0: 'Grass Spirit',
                    Effective1: 'Forest Spirit',
                    Effective2: 'Elder Spirit',
                    Effective3: 'Ranax',
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Athlas',
                },
                //Teryx
                {
                    Strength: 90,
                    Defense: 20,
                    Speed: 250,
                    RecruitmentTime: 30,
                    RecruitingLocation: 'Control Field',
                    Effective0: 'Grass Spirit',
                    Effective1: 'Forest Spirit',
                    Effective2: 'Druid Naki',
                    Effective3: 'Guard Naki',
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Elder Spirit, Athlas',
                },
                //Raider
                {
                    Strength: 5,
                    Defense: 1,
                    Speed: 200,
                    RecruitmentTime: 10,
                    RecruitingLocation: 'Control Field',
                    Effective0: 'Druid Naki',
                    Effective1: 'Guard Naki',
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Athlas',
                },
                //Ovivi Hero
                {
                    Strength: 75000,
                    Defense: 750000,
                    Speed: 60,
                    RecruitmentTime: 43200,
                    RecruitingLocation: 'Control Field',
                    Effective0: 'Grass Spirit',
                    Effective1: 'Forest Spirit',
                    Effective2: 'Elder Spirit',
                    Effective3: 'Ranax',
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Nothing',
                },
                //Teryx Hero
                {
                    Strength: 2500000,
                    Defense: 100000,
                    Speed: 250,
                    RecruitmentTime: 86400,
                    RecruitingLocation: 'Control Field',
                    Effective0: 'Grass Spirit',
                    Effective1: 'Forest Spirit',
                    Effective2: 'Druid Naki',
                    Effective3: 'Guard Naki',
                    Effective4: 'Elder Spirit',
                    Effective5: null,
                    Weak: 'Nothing',
                },
                //Raider Hero
                {
                    Strength: 125000,
                    Defense: 125000,
                    Speed: 150,
                    RecruitmentTime: 21600,
                    RecruitingLocation: 'Control Field',
                    Effective0: 'Druid Naki',
                    Effective1: 'Guard Naki',
                    Effective2: 'Teryx Hero',
                    Effective3: 'Ovivi Hero',
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Nothing',
                },

            ],
            showData: true,

            //Oder of Units in Array has to match order of Units in HTML
            unitNamesArray: [
                'Spotter Naki',
                'Druid Naki',
                'Grass Spirit',
                'Forest Spirit',
                'Guard Naki',
                'Elder Spirit',
                'Pangoan',
                'Athlas',
                'Nyxi',
                'Ranax',
                'Ovivi',
                'Teryx',
                'Raider',
                'Ovivi Hero',
                'Teryx Hero',
                'Raider Hero'],

            unitArray: {
                'Spotter Naki': {
                    Strength: 1,
                    Defense: 1,
                    Speed: 120,
                    RecruitmentTime: 10,
                    RecruitingLocation: 'Airship / Skilltree',
                    Effective0: 'Nothing',
                    Effective1: null,
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Nothing',
                },
                'Druid Naki': {
                    Strength: 25,
                    Defense: 25,
                    Speed: 300,
                    RecruitmentTime: 40,
                    RecruitingLocation: 'Forest / Grassland',
                    Effective0: 'Forest Spirit',
                    Effective1: 'Grass Spirit',
                    Effective2: 'Elder Spirit',
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Guard Naki, Nyxi, Teryx (Hero), Raider (Hero)',
                },
                'Grass Spirit': {
                    Strength: 20,
                    Defense: 40,
                    Speed: 500,
                    RecruitmentTime: 50,
                    RecruitingLocation: 'Grassland',
                    Effective0: 'Guard Naki',
                    Effective1: 'Athlas',
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Druid Naki, Ranax, Ovivi (Hero), Teryx (Hero)',
                },
                'Forest Spirit': {
                    Strength: 30,
                    Defense: 60,
                    Speed: 475,
                    RecruitmentTime: 75,
                    RecruitingLocation: 'Forest',
                    Effective0: 'Guard Naki',
                    Effective1: 'Athlas',
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Druid Naki, Ranax, Ovivi (Hero), Teryx (Hero)',
                },
                'Guard Naki': {
                    Strength: 100,
                    Defense: 50,
                    Speed: 300,
                    RecruitmentTime: 100,
                    RecruitingLocation: 'High Grass',
                    Effective0: 'Druid Naki',
                    Effective1: 'Elder Spirit',
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Grass Spirit, Forest Spirit, Nyxi, Teryx (Hero), Raider (Hero=',
                },
                'Elder Spirit': {
                    Strength: 100,
                    Defense: 1000,
                    Speed: 750,
                    RecruitmentTime: 500,
                    RecruitingLocation: 'Magic Forest',
                    Effective0: 'Athlas',
                    Effective1: 'Wasty',
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Druid Naki, Guard Naki, Nyxi, Ovivi (Held), Teryx (Held)',
                },
                'Pangoan': {
                    Strength: 200,
                    Defense: 200,
                    Speed: 400,
                    RecruitmentTime: 125,
                    RecruitingLocation: 'Wasteland / Dunes / Fiery Desert',
                    Effective0: 'nothing',
                    Effective1: null,
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Nothing',
                },
                'Athlas': {
                    Strength: 800,
                    Defense: 600,
                    Speed: 76.66,
                    RecruitmentTime: 325,
                    RecruitingLocation: 'Ash Fields / Fiery Desert, ',
                    Effective0: 'Marshy',
                    Effective1: 'Teryx',
                    Effective2: 'Raider',
                    Effective3: 'Ovivi',
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Grass Spirit, Forest Spirit, Elder Spirit',
                },
                'Nyxi': {
                    Strength: 50,
                    Defense: 20,
                    Speed: 250,
                    RecruitmentTime: 30,
                    RecruitingLocation: 'Swamp',
                    Effective0: 'Druid Naki',
                    Effective1: 'Guard Naki',
                    Effective2: 'Elder Spirit',
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Ranax, Athlas',
                },
                'Ranax': {
                    Strength: 250,
                    Defense: 10,
                    Speed: 350,
                    RecruitmentTime: 100,
                    RecruitingLocation: 'Dunes',
                    Effective0: 'Marshy',
                    Effective1: 'Grass Spirit',
                    Effective2: 'Forest Spirit',
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Elder Spirit, Ovivi (Held)',
                },
                'Ovivi': {
                    Strength: 25,
                    Defense: 150,
                    Speed: 60,
                    RecruitmentTime: 50,
                    RecruitingLocation: 'Control Field',
                    Effective0: 'Grass Spirit',
                    Effective1: 'Forest Spirit',
                    Effective2: 'Elder Spirit',
                    Effective3: 'Ranax',
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Athlas',
                },
                'Teryx': {
                    Strength: 90,
                    Defense: 20,
                    Speed: 250,
                    RecruitmentTime: 30,
                    RecruitingLocation: 'Control Field',
                    Effective0: 'Grass Spirit',
                    Effective1: 'Forest Spirit',
                    Effective2: 'Druid Naki',
                    Effective3: 'Guard Naki',
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Elder Spirit, Athlas',
                },
                'Raider': {
                    Strength: 5,
                    Defense: 1,
                    Speed: 200,
                    RecruitmentTime: 10,
                    RecruitingLocation: 'Control Field',
                    Effective0: 'Druid Naki',
                    Effective1: 'Guard Naki',
                    Effective2: null,
                    Effective3: null,
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Athlas',
                },
                'Ovivi Hero': {
                    Strength: 75000,
                    Defense: 750000,
                    Speed: 60,
                    RecruitmentTime: 43200,
                    RecruitingLocation: 'Control Field',
                    Effective0: 'Grass Spirit',
                    Effective1: 'Forest Spirit',
                    Effective2: 'Elder Spirit',
                    Effective3: 'Ranax',
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Nothing',
                },
                'Teryx Hero': {
                    Strength: 2500000,
                    Defense: 100000,
                    Speed: 250,
                    RecruitmentTime: 86400,
                    RecruitingLocation: 'Control Field',
                    Effective0: 'Grass Spirit',
                    Effective1: 'Forest Spirit',
                    Effective2: 'Druid Naki',
                    Effective3: 'Guard Naki',
                    Effective4: 'Elder Spirit',
                    Effective5: null,
                    Weak: 'Nothing',
                },
                'Raider Hero': {
                    Strength: 125000,
                    Defense: 125000,
                    Speed: 150,
                    RecruitmentTime: 21600,
                    RecruitingLocation: 'Control Field',
                    Effective0: 'Druid Naki',
                    Effective1: 'Guard Naki',
                    Effective2: 'Teryx Hero',
                    Effective3: 'Ovivi Hero',
                    Effective4: null,
                    Effective5: null,
                    Weak: 'Nothing',
                },
            },

        };

    },
    computed: {
        ...mapState(['isMobile', 'gameData']),
        units() {
            const unitData = this.gameData.units;
            let units = [
                {
                    ...unitData['spotterNaki'],
                    recruitingLocation: 'Skilltree',
                },
                {
                    ...unitData['druidNaki'],
                    recruitingLocation: 'Forest / Grassland',
                },
                {
                    ...unitData['grassSpirit'],
                    recruitingLocation: 'Grassland',
                },
                {
                    ...unitData['forestSpirit'],
                    recruitingLocation: 'Forest',
                },
                {
                    ...unitData['guardNaki'],
                    recruitingLocation: 'High Grass',
                },
                {
                    ...unitData['elderSpirit'],
                    recruitingLocation: 'Magic Forest',
                },
                {
                    ...unitData['pangoan'],
                    recruitingLocation: 'Wasteland / Dunes / Fiery Desert',
                },
                {
                    ...unitData['athlas'],
                    recruitingLocation: 'Ash Fields / Fiery Desert',
                },
                {
                    ...unitData['nyxi'],
                    recruitingLocation: 'Swamp',
                },
                {
                    ...unitData['ranax'],
                    recruitingLocation: 'Dunes',
                },
                {
                    ...unitData['raiderNaki'],
                    recruitingLocation: 'Control Field',
                },
                {
                    ...unitData['teryx'],
                    recruitingLocation: 'Control Field',
                },
                {
                    ...unitData['ovivi'],
                    recruitingLocation: 'Control Field',
                },
                {
                    ...unitData['raiderHero'],
                    recruitingLocation: 'Control Field',
                },
                {
                    ...unitData['teryxHero'],
                    recruitingLocation: 'Control Field',
                },
                {
                    ...unitData['oviviHero'],
                    recruitingLocation: 'Control Field',
                },
            ];
            units = units.map(u => ({
                ...u,
                ineffective: [],
                strength: Math.max(u.attack, u.defense) + Math.min(u.attack, u.defense) / 2,
            }));
            units.forEach(u => {
                u.effective.forEach(e => {
                    units[units.findIndex(x => x.index === e)].ineffective.push(u.index);
                });
            });
            units = units.map(u => ({
                ...u,
                effectiveAgainst: this.getUnitNamesByIndexArray(u.effective),
                weakAgainst: this.getUnitNamesByIndexArray(u.ineffective),
            }));
            console.log(units);
            return units;
        },
    },
    methods: {
        getUnitNamesByIndexArray(indexes) {
            if (!indexes.length) return '-';
            const unitData = Object.values(this.gameData.units);
            return indexes.toString().split(',').map(index => unitData[index].name).join(', ');
        },

        formatNumber(exactNumber, maxLength = -1, maxDecimal = 2) {
            const number = Math.floor(exactNumber);
            if (maxLength === -1) {
                if (Math.abs(number) < 10000) return Math.floor(number);
                if (Math.abs(number) < 1000000) return `${Math.floor(number / 1000)}k`;
                if (Math.abs(number) < 10000000) return `${Math.floor(number / 100000) / 10}m`;
                if (Math.abs(number) < 10000000000) return `${Math.floor(number / 1000000)}m`;
                else return `${Math.floor(number / 1000000000)}b`;
            }

            const length = number.toString().length;
            if (length <= maxLength) return number;
            const shortenBy = length - maxLength + 1;
            const divider1 = Math.pow(10, shortenBy);
            const roundedNumber = Math.floor(number / divider1) * divider1;
            const divider2 = Math.pow(10, Math.floor((length - 1) / 3) * 3);
            const displayedNumber = maxDecimal === -1 ? roundedNumber / divider2 :
                    +(roundedNumber / divider2).toFixed(maxDecimal);
            if (length <= 6) return `${displayedNumber}k`;
            if (length <= 9) return `${displayedNumber}m`;
            if (length <= 12) return `${displayedNumber}b`;
            if (length <= 15) return `${displayedNumber}t`;
        },

        calculate() {

            let totalAttack = 0;
            let totalDefense = 0;
            //Array that stores amount of each unit attacking
            let attack_values = this.getAttackValues();
            let defensive_values = this.getDefensiveValues();

            //returns an Array with only names  of attacking units
            let UnitNamesAttackArray = this.createUnitArray(attack_values);
            let UnitNamesDefenseArray = this.createUnitArray(defensive_values);
            this.calculateEffectiveness(attack_values, defensive_values, UnitNamesAttackArray, UnitNamesDefenseArray);

            //total Strength of Attackers WITH Skill applied
            totalAttack = this.calc_totalOffensive(attack_values);
            //total Strength of Defenders WITH Skill applied
            totalDefense = this.calc_totalDefense(defensive_values);

            let defensiveDeathArray = this.calc_DefensiveDeaths(defensive_values, totalAttack, totalDefense);
            this.fillDefensiveDeaths(defensiveDeathArray);
            let offensiveDeathArray = this.calc_OffensiveDeathArray(attack_values, totalAttack, totalDefense);
            this.fillOffensiveDeaths(offensiveDeathArray);

            this.fillTable(totalAttack, totalDefense);
            let strengthLost = this.calc_StrengthLost(offensiveDeathArray);
            this.fillStrengthLost(strengthLost);
        },
        getAttackValues() {
            let attack_values = [];
            //put number of Attacking Units in Array
            for (let i = 0; i < this.UnitArray.length; i++) {
                attack_values.push(document.getElementsByClassName('attack_number')[i].value);
            }
            return attack_values;

        },

        getDefensiveValues() {
            let defensive_values = [];
            //put number of defender units in Array
            for (let i = 0; i < this.UnitArray.length; i++) {
                defensive_values.push(document.getElementsByClassName('def_number')[i].value);
            }
            return defensive_values;
        },

        calculateEffectiveness(attack_values, defense_values, UnitNamesAttackArray, UnitNamesDefenseArray) {
            let override = document.getElementById('override').value;
            if (override === 'false') {
                let totalAttack = this.calc_totalOffensiveNoSkill(attack_values);
                let totalDefense = this.calc_totalDefenseNoSkill(defense_values);
                let attackerEffectiveness;
                let defenderEffectiveness;

                //Array of individual Strength per Unit (num of Units * unit.strength)
                let strengthArray = this.calc_individualOffensive(attack_values);
                //Array of individual Defense per Unit (num of Units * unit.defense)
                let defenseArray = this.calc_individualDefense(defense_values);

                const percentageArrayOffensive = this.calc_Percentages(strengthArray, totalAttack);
                const percentageArrayDefensive = this.calc_Percentages(defenseArray, totalDefense);

                //cals calc_Effectiveness function, which looks for all effective matchups. To calculate for defender simply switch the values and arrays
                attackerEffectiveness = this.calc_Effectiveness(totalAttack, totalDefense, percentageArrayOffensive,
                        percentageArrayDefensive, UnitNamesDefenseArray);
                defenderEffectiveness = this.calc_Effectiveness(totalDefense, totalAttack, percentageArrayDefensive,
                        percentageArrayOffensive, UnitNamesAttackArray);

                let effectiveOff = document.getElementById('effectiveOff');
                effectiveOff.innerHTML = Math.round(attackerEffectiveness).toString();

                let effectiveDef = document.getElementById('effectiveDef');
                effectiveDef.innerHTML = Math.round(defenderEffectiveness).toString();
            } else {
                let effectiveOff = document.getElementById('effectiveOff');
                effectiveOff.innerHTML = '0';

                let effectiveDef = document.getElementById('effectiveDef');
                effectiveDef.innerHTML = '0';
            }
        },

        calc_Effectiveness(
                totalAttack, totalDefense, percentageArrayOffensive, percentageArrayDefensive, UnitNamesDefenseArray) {
            let Effectiveness = 0;
            if (totalAttack && totalDefense) {
                for (let i = 0; i < this.UnitArray.length; i++) {
                    if (percentageArrayOffensive[i] > 0) {
                        for (let j = 0; j < UnitNamesDefenseArray.length; j++) {
                            let unitNameOff = this.unitNamesArray[i];
                            if (this.unitArray[unitNameOff].Effective0 === UnitNamesDefenseArray[j] &&
                                    this.unitArray[unitNameOff].Effective0 != null) {
                                Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j]) / 100;
                            }
                            if (this.unitArray[unitNameOff].Effective1 === UnitNamesDefenseArray[j] &&
                                    this.unitArray[unitNameOff].Effective1 != null) {
                                Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j]) / 100;
                            }
                            if (this.unitArray[unitNameOff].Effective2 === UnitNamesDefenseArray[j] &&
                                    this.unitArray[unitNameOff].Effective2 != null) {
                                Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j]) / 100;
                            }
                            if (this.unitArray[unitNameOff].Effective3 === UnitNamesDefenseArray[j] &&
                                    this.unitArray[unitNameOff].Effective3 != null) {
                                Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j]) / 100;
                            }
                            if (this.unitArray[unitNameOff].Effective4 === UnitNamesDefenseArray[j] &&
                                    this.unitArray[unitNameOff].Effective4 != null) {
                                Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j]) / 100;
                            }
                            if (this.unitArray[unitNameOff].Effective5 === UnitNamesDefenseArray[j] &&
                                    this.unitArray[unitNameOff].Effective5 != null) {
                                Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j]) / 100;
                            }
                        }
                    }

                }
            }
            return Effectiveness;

        },

        //create Array with only names of attacking units
        createUnitArray(values) {
            let array = [];
            for (let i = 0; i < this.UnitArray.length; i++) {
                if (values[i] > 0) {
                    array.push(this.unitNamesArray[i]);
                } else array.push(null);
            }
            return array;
        },

        //calculate total Offense
        calc_totalOffensive(attack_values) {
            let totalAttack = 0;
            //get Offensive Skill
            let offensive_Skill = document.getElementById('offensive_Skill').value;
            offensive_Skill = parseInt(offensive_Skill);
            let effectivePercent = document.getElementById('effectiveOff').innerText;
            effectivePercent = parseInt(effectivePercent);

            //Multiply Attacking numbers with corresponding offensive values
            for (let y = 0; y < attack_values.length; y++) {
                totalAttack += attack_values[y] * this.UnitArray[y].Strength;
            }

            let totalSkill = (offensive_Skill + effectivePercent) / 100;

            totalAttack += totalAttack * (totalSkill);

            let totalUnits = this.calc_totalUnits(attack_values);
            let percentageArray = this.calc_Percentages(attack_values, totalUnits);
            this.fillOffensivePercentages(percentageArray);

            return totalAttack;
        },

        //calculate total Strength without Skill applied
        calc_totalOffensiveNoSkill(attack_values) {
            let totalAttack = 0;

            //Multiply Attacking numbers with corresponding offensive values
            for (let y = 0; y < attack_values.length; y++) {
                totalAttack += attack_values[y] * this.UnitArray[y].Strength;
            }

            return totalAttack;
        },

        calc_individualOffensive(attack_values) {
            let totalAttack = [];

            for (let y = 0; y < attack_values.length; y++) {
                totalAttack.push(attack_values[y] * this.UnitArray[y].Strength);
            }

            return totalAttack;
        },

        //calculate total Defense
        calc_totalDefense(defensive_values) {
            let totalDefense = 0;
            //get Defensive Skill
            let defensive_Skill = document.getElementById('defensive_Skill').value;
            defensive_Skill = parseInt(defensive_Skill);
            let effectivePercent = document.getElementById('effectiveDef').innerText;
            effectivePercent = parseInt(effectivePercent);

            //multiply defenders with corresponding defensive values
            for (let y = 0; y < defensive_values.length; y++) {
                totalDefense += defensive_values[y] * this.UnitArray[y].Defense;
            }

            totalDefense += totalDefense * ((defensive_Skill + effectivePercent) / 100);

            let totalUnits = this.calc_totalUnits(defensive_values);
            let percentageArray = this.calc_Percentages(defensive_values, totalUnits);
            this.fillDefensivePercentages(percentageArray);

            return totalDefense;
        },

        //calculate total Defense without Skill applied
        calc_totalDefenseNoSkill(defensive_values) {
            let totalDefense = 0;
            //multiply defenders with corresponding defensive values
            for (let y = 0; y < defensive_values.length; y++) {
                totalDefense += defensive_values[y] * this.UnitArray[y].Defense;
            }

            return totalDefense;
        },

        calc_individualDefense(defense_values) {
            let totalDefense = [];

            for (let y = 0; y < defense_values.length; y++) {
                totalDefense.push(defense_values[y] * this.UnitArray[y].Defense);
            }

            return totalDefense;
        },

        //calculates total number of units either attacking or defending
        calc_totalUnits(unitArray) {

            let totalNumberOfUnits = 0;
            for (let y = 0; y < unitArray.length; y++) {
                if (unitArray[y].toString() === '') {
                    unitArray[y] = 0;

                } else totalNumberOfUnits += parseInt(unitArray[y]);
            }

            return totalNumberOfUnits;

        },

        //calculates percentages based on unit amount
        calc_Percentages(unitArray, totalNumberOfUnits) {
            let percentageArray = [];
            for (let y = 0; y < unitArray.length; y++) {
                percentageArray.push((unitArray[y] / totalNumberOfUnits * 100).toFixed(2));

            }
            return percentageArray;
        },

        fillOffensivePercentages(percentageArray) {
            for (let i = 0; i < percentageArray.length; i++) {
                let text = document.getElementById('off%' + i.toString());
                if (Number.isNaN(parseInt(percentageArray[i]))) {
                    text.innerHTML = '0'.concat('%');
                } else text.innerHTML = percentageArray[i].concat('%');
            }

        },

        fillDefensivePercentages(percentageArray) {
            for (let i = 0; i < percentageArray.length; i++) {
                let text = document.getElementById('def%' + i.toString());
                if (Number.isNaN(parseInt(percentageArray[i]))) {
                    text.innerHTML = '0'.concat('%');
                } else text.innerHTML = percentageArray[i].concat('%');
            }

        },

        calc_DefensiveDeaths(defensive_Values, totalAttack, totalDefense) {
            let defensiveDeathArray = [];
            let difference = this.getDifference(totalAttack, totalDefense);
            if (totalAttack < totalDefense) {
                for (let i = 0; i < defensive_Values.length; i++) {
                    defensiveDeathArray.push(Math.ceil(defensive_Values[i] * difference));
                }
            } else {
                for (let i = 0; i < defensive_Values.length; i++) {
                    defensiveDeathArray.push(Math.ceil(defensive_Values[i]));
                }
            }
            this.getPlagueStatus();
            return defensiveDeathArray;

        },

        calc_OffensiveDeathArray(attack_values, totalAttack, totalDefense) {
            let offensiveDeathArray = [];
            let plague = this.getPlagueStatus();
            let difference = this.getDifference(totalAttack, totalDefense);

            if (totalAttack > totalDefense) {
                for (let i = 0; i < attack_values.length; i++) {
                    if (plague === 'false') {
                        offensiveDeathArray.push(Math.ceil(attack_values[i] / difference));
                    } else {
                        offensiveDeathArray.push(Math.ceil(
                                (attack_values[i] / difference) + (attack_values[i] - (attack_values[i] / difference)) *
                                0.3));
                    }
                }
            } else {
                for (let i = 0; i < attack_values.length; i++) {
                    offensiveDeathArray.push(attack_values[i]);
                }
            }

            return offensiveDeathArray;
        },

        fillDefensiveDeaths(defensiveDeathArray) {
            for (let i = 0; i < defensiveDeathArray.length; i++) {
                let text = document.getElementById('defDeath' + i.toString());
                text.innerHTML = defensiveDeathArray[i];
            }

        },

        fillOffensiveDeaths(offensiveDeathArray) {
            for (let i = 0; i < offensiveDeathArray.length; i++) {
                let text = document.getElementById('offDeath' + i.toString());
                if (Number.isNaN(parseInt(offensiveDeathArray[i]))) {
                    text.innerHTML = '0'.concat('%');
                } else text.innerHTML = offensiveDeathArray[i];
            }

        },

        fillTable(totalAttack, totalDefense) {

            //set totalAttack field
            let text = document.getElementById('totalAttack');
            text.innerHTML = totalAttack;

            //set total Defesnive field
            text = document.getElementById('totalDefense');
            text.innerHTML = totalDefense;

            //set difference
            text = document.getElementById('Difference');
            text.innerHTML = this.getDifference(totalAttack, totalDefense);

        },

        getDifference(totalAttack, totalDefense) {
            if (totalDefense === 0) {
                return 0;
            }
            let difference = totalAttack / totalDefense;
            return difference = +difference.toFixed(5);

        },

        getPlagueStatus() {
            return document.getElementById('plague').value;

        },
        calc_StrengthLost(offensiveDeathArray) {
            let strengthLost = 0;
            for (let i = 0; i < offensiveDeathArray.length; i++) {
                strengthLost += offensiveDeathArray[i] * this.UnitArray[i].Strength;
            }
            return strengthLost;
        },

        fillStrengthLost(strengthLost) {
            let text = document.getElementById('StrengthLost');
            text.innerHTML = strengthLost;
        },

        load2() {
            let button = document.getElementById('body');
            button.addEventListener('keyup', function(event) {
                if (event.code === 'Enter') {
                    this.calculate();
                }

            });

        },

    },
    mounted() {
        //this.load2();
    },
};
</script>

<style lang="scss">
.fight-simulator {
    padding: 30px;
    width: 100vw;
    height: calc(100vh - 55px);
    box-sizing: border-box;
    overflow: auto;
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


.tg {
    border-collapse: collapse;
    border-spacing: 0;
}

.tg td {
    border-color: black;
    border-style: solid;
    border-width: 1px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    padding: 10px 5px;
    word-break: normal;
}

.tg th {
    border-color: black;
    border-style: solid;
    border-width: 1px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: normal;
    padding: 10px 5px;
    word-break: normal;
}

.tg .tg-0pky {
    border-color: inherit;
    text-align: left;
    vertical-align: top
}

.tg .tg-c6of {
    background-color: #ffffff;
    border-color: inherit;
    text-align: left;
    vertical-align: top
}

.button {
    border: black;
    color: black;
    padding: 15px 32px;
    text-align: center;
    font-size: 20px;
    display: inline-block;
    cursor: pointer;
}

.select-wrapper {
    width: 150px;
    position: relative;
}

.select-wrapper::before {
    font-size: 20px;
    position: absolute;
    right: 15px;
    top: 10px;
    color: #fff;
    pointer-events: none;
    color: #0b1a20;
}

select {
    border: none;
    width: 100%;
    height: 40px;
    -moz-padding-start: calc(10px - 3px);
    padding-left: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    outline: none;
    cursor: pointer;
}

select::-ms-expand {
    display: none;
}

</style>
