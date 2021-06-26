
<template class="template">
        <div class="example-page">
            <h1 class="title">Figth Simulator</h1>

            <p>Version 1.0</p>
            <p>Made by Pauton</p>

            <!--Unit Overview Table-->
            <table class="tg">
                <thead>
                <tr>
                    <th>
                        <select id="World_Select" @change= "fillUnitTable()">
                            <option>Beginner World</option>
                            <option>Advanced World</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <th class="tg-0pky">Normal Units</th>
                    <th class="tg-0pky">Attack</th>
                    <th class="tg-0pky">Defense</th>
                    <th class="tg-0pky">Travel Time (s/field)</th>
                    <th class="tg-0pky">Recruitment Duration in seconds</th>
                    <th class="tg-0pky">Power ratio (attack/time)</th>
                    <th class="tg-0pky">Defence ratio (defence/time)</th>
                    <th class="tg-0pky">Effective against</th>
                    <th class="tg-0pky">Weak against</th>
                    <th class="tg-0pky">Recruiting Location</th>
                    <th class="tg-0pky">max. Strength generated in 24h per field</th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table0_0">Spotter Naki</th>
                    <th class="tg-0pky" id="Unit_Table0_1"></th>
                    <th class="tg-0pky" id="Unit_Table0_2"></th>
                    <th class="tg-0pky" id="Unit_Table0_3"></th>
                    <th class="tg-0pky" id="Unit_Table0_4"></th>
                    <th class="tg-0pky" id="Unit_Table0_5"></th>
                    <th class="tg-0pky" id="Unit_Table0_6"></th>
                    <th class="tg-0pky" id="Unit_Table0_7"></th>
                    <th class="tg-0pky" id="Unit_Table0_8"></th>
                    <th class="tg-0pky" id="Unit_Table0_9"></th>
                    <th class="tg-0pky" id="Unit_Table0_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table1_0">Platzhalter</th>
                    <th class="tg-0pky" id="Unit_Table1_1"></th>
                    <th class="tg-0pky" id="Unit_Table1_2"></th>
                    <th class="tg-0pky" id="Unit_Table1_3"></th>
                    <th class="tg-0pky" id="Unit_Table1_4"></th>
                    <th class="tg-0pky" id="Unit_Table1_5"></th>
                    <th class="tg-0pky" id="Unit_Table1_6"></th>
                    <th class="tg-0pky" id="Unit_Table1_7"></th>
                    <th class="tg-0pky" id="Unit_Table1_8"></th>
                    <th class="tg-0pky" id="Unit_Table1_9"></th>
                    <th class="tg-0pky" id="Unit_Table1_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table2_0">Guard Naki</th>
                    <th class="tg-0pky" id="Unit_Table2_1"></th>
                    <th class="tg-0pky" id="Unit_Table2_2"></th>
                    <th class="tg-0pky" id="Unit_Table2_3"></th>
                    <th class="tg-0pky" id="Unit_Table2_4"></th>
                    <th class="tg-0pky" id="Unit_Table2_5"></th>
                    <th class="tg-0pky" id="Unit_Table2_6"></th>
                    <th class="tg-0pky" id="Unit_Table2_7"></th>
                    <th class="tg-0pky" id="Unit_Table2_8"></th>
                    <th class="tg-0pky" id="Unit_Table2_9"></th>
                    <th class="tg-0pky" id="Unit_Table2_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table3_0">Grass Spirit</th>
                    <th class="tg-0pky" id="Unit_Table3_1"></th>
                    <th class="tg-0pky" id="Unit_Table3_2"></th>
                    <th class="tg-0pky" id="Unit_Table3_3"></th>
                    <th class="tg-0pky" id="Unit_Table3_4"></th>
                    <th class="tg-0pky" id="Unit_Table3_5"></th>
                    <th class="tg-0pky" id="Unit_Table3_6"></th>
                    <th class="tg-0pky" id="Unit_Table3_7"></th>
                    <th class="tg-0pky" id="Unit_Table3_8"></th>
                    <th class="tg-0pky" id="Unit_Table3_9"></th>
                    <th class="tg-0pky" id="Unit_Table3_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table4_0">Forest Spirit</th>
                    <th class="tg-0pky" id="Unit_Table4_1"></th>
                    <th class="tg-0pky" id="Unit_Table4_2"></th>
                    <th class="tg-0pky" id="Unit_Table4_3"></th>
                    <th class="tg-0pky" id="Unit_Table4_4"></th>
                    <th class="tg-0pky" id="Unit_Table4_5"></th>
                    <th class="tg-0pky" id="Unit_Table4_6"></th>
                    <th class="tg-0pky" id="Unit_Table4_7"></th>
                    <th class="tg-0pky" id="Unit_Table4_8"></th>
                    <th class="tg-0pky" id="Unit_Table4_9"></th>
                    <th class="tg-0pky" id="Unit_Table4_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table5_0">Elder Spirit</th>
                    <th class="tg-0pky" id="Unit_Table5_1"></th>
                    <th class="tg-0pky" id="Unit_Table5_2"></th>
                    <th class="tg-0pky" id="Unit_Table5_3"></th>
                    <th class="tg-0pky" id="Unit_Table5_4"></th>
                    <th class="tg-0pky" id="Unit_Table5_5"></th>
                    <th class="tg-0pky" id="Unit_Table5_6"></th>
                    <th class="tg-0pky" id="Unit_Table5_7"></th>
                    <th class="tg-0pky" id="Unit_Table5_8"></th>
                    <th class="tg-0pky" id="Unit_Table5_9"></th>
                    <th class="tg-0pky" id="Unit_Table5_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table6_0">Spotter Naki</th>
                    <th class="tg-0pky" id="Unit_Table6_1"></th>
                    <th class="tg-0pky" id="Unit_Table6_2"></th>
                    <th class="tg-0pky" id="Unit_Table6_3"></th>
                    <th class="tg-0pky" id="Unit_Table6_4"></th>
                    <th class="tg-0pky" id="Unit_Table6_5"></th>
                    <th class="tg-0pky" id="Unit_Table6_6"></th>
                    <th class="tg-0pky" id="Unit_Table6_7"></th>
                    <th class="tg-0pky" id="Unit_Table6_8"></th>
                    <th class="tg-0pky" id="Unit_Table6_9"></th>
                    <th class="tg-0pky" id="Unit_Table6_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table7_0">Spotter Naki</th>
                    <th class="tg-0pky" id="Unit_Table7_1"></th>
                    <th class="tg-0pky" id="Unit_Table7_2"></th>
                    <th class="tg-0pky" id="Unit_Table7_3"></th>
                    <th class="tg-0pky" id="Unit_Table7_4"></th>
                    <th class="tg-0pky" id="Unit_Table7_5"></th>
                    <th class="tg-0pky" id="Unit_Table7_6"></th>
                    <th class="tg-0pky" id="Unit_Table7_7"></th>
                    <th class="tg-0pky" id="Unit_Table7_8"></th>
                    <th class="tg-0pky" id="Unit_Table7_9"></th>
                    <th class="tg-0pky" id="Unit_Table7_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table8_0">Spotter Naki</th>
                    <th class="tg-0pky" id="Unit_Table8_1"></th>
                    <th class="tg-0pky" id="Unit_Table8_2"></th>
                    <th class="tg-0pky" id="Unit_Table8_3"></th>
                    <th class="tg-0pky" id="Unit_Table8_4"></th>
                    <th class="tg-0pky" id="Unit_Table8_5"></th>
                    <th class="tg-0pky" id="Unit_Table8_6"></th>
                    <th class="tg-0pky" id="Unit_Table8_7"></th>
                    <th class="tg-0pky" id="Unit_Table8_8"></th>
                    <th class="tg-0pky" id="Unit_Table8_9"></th>
                    <th class="tg-0pky" id="Unit_Table8_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table9_0">Spotter Naki</th>
                    <th class="tg-0pky" id="Unit_Table9_1"></th>
                    <th class="tg-0pky" id="Unit_Table9_2"></th>
                    <th class="tg-0pky" id="Unit_Table9_3"></th>
                    <th class="tg-0pky" id="Unit_Table9_4"></th>
                    <th class="tg-0pky" id="Unit_Table9_5"></th>
                    <th class="tg-0pky" id="Unit_Table9_6"></th>
                    <th class="tg-0pky" id="Unit_Table9_7"></th>
                    <th class="tg-0pky" id="Unit_Table9_8"></th>
                    <th class="tg-0pky" id="Unit_Table9_9"></th>
                    <th class="tg-0pky" id="Unit_Table9_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky">Special Units</th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table10_0">Spotter Naki</th>
                    <th class="tg-0pky" id="Unit_Table10_1"></th>
                    <th class="tg-0pky" id="Unit_Table10_2"></th>
                    <th class="tg-0pky" id="Unit_Table10_3"></th>
                    <th class="tg-0pky" id="Unit_Table10_4"></th>
                    <th class="tg-0pky" id="Unit_Table10_5"></th>
                    <th class="tg-0pky" id="Unit_Table10_6"></th>
                    <th class="tg-0pky" id="Unit_Table10_7"></th>
                    <th class="tg-0pky" id="Unit_Table10_8"></th>
                    <th class="tg-0pky" id="Unit_Table10_9"></th>
                    <th class="tg-0pky" id="Unit_Table10_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table11_0">Spotter Naki</th>
                    <th class="tg-0pky" id="Unit_Table11_1"></th>
                    <th class="tg-0pky" id="Unit_Table11_2"></th>
                    <th class="tg-0pky" id="Unit_Table11_3"></th>
                    <th class="tg-0pky" id="Unit_Table11_4"></th>
                    <th class="tg-0pky" id="Unit_Table11_5"></th>
                    <th class="tg-0pky" id="Unit_Table11_6"></th>
                    <th class="tg-0pky" id="Unit_Table11_7"></th>
                    <th class="tg-0pky" id="Unit_Table11_8"></th>
                    <th class="tg-0pky" id="Unit_Table11_9"></th>
                    <th class="tg-0pky" id="Unit_Table11_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table12_0">Spotter Naki</th>
                    <th class="tg-0pky" id="Unit_Table12_1"></th>
                    <th class="tg-0pky" id="Unit_Table12_2"></th>
                    <th class="tg-0pky" id="Unit_Table12_3"></th>
                    <th class="tg-0pky" id="Unit_Table12_4"></th>
                    <th class="tg-0pky" id="Unit_Table12_5"></th>
                    <th class="tg-0pky" id="Unit_Table12_6"></th>
                    <th class="tg-0pky" id="Unit_Table12_7"></th>
                    <th class="tg-0pky" id="Unit_Table12_8"></th>
                    <th class="tg-0pky" id="Unit_Table12_9"></th>
                    <th class="tg-0pky" id="Unit_Table12_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky">Hero Units</th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table13_0">Spotter Naki</th>
                    <th class="tg-0pky" id="Unit_Table13_1"></th>
                    <th class="tg-0pky" id="Unit_Table13_2"></th>
                    <th class="tg-0pky" id="Unit_Table13_3"></th>
                    <th class="tg-0pky" id="Unit_Table13_4"></th>
                    <th class="tg-0pky" id="Unit_Table13_5"></th>
                    <th class="tg-0pky" id="Unit_Table13_6"></th>
                    <th class="tg-0pky" id="Unit_Table13_7"></th>
                    <th class="tg-0pky" id="Unit_Table13_8"></th>
                    <th class="tg-0pky" id="Unit_Table13_9"></th>
                    <th class="tg-0pky" id="Unit_Table13_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table14_0">Spotter Naki</th>
                    <th class="tg-0pky" id="Unit_Table14_1"></th>
                    <th class="tg-0pky" id="Unit_Table14_2"></th>
                    <th class="tg-0pky" id="Unit_Table14_3"></th>
                    <th class="tg-0pky" id="Unit_Table14_4"></th>
                    <th class="tg-0pky" id="Unit_Table14_5"></th>
                    <th class="tg-0pky" id="Unit_Table14_6"></th>
                    <th class="tg-0pky" id="Unit_Table14_7"></th>
                    <th class="tg-0pky" id="Unit_Table14_8"></th>
                    <th class="tg-0pky" id="Unit_Table14_9"></th>
                    <th class="tg-0pky" id="Unit_Table14_10"></th>
                </tr>
                <tr>
                    <th class="tg-0pky" id="Unit_Table15_0">Spotter Naki</th>
                    <th class="tg-0pky" id="Unit_Table15_1"></th>
                    <th class="tg-0pky" id="Unit_Table15_2"></th>
                    <th class="tg-0pky" id="Unit_Table15_3"></th>
                    <th class="tg-0pky" id="Unit_Table15_4"></th>
                    <th class="tg-0pky" id="Unit_Table15_5"></th>
                    <th class="tg-0pky" id="Unit_Table15_6"></th>
                    <th class="tg-0pky" id="Unit_Table15_7"></th>
                    <th class="tg-0pky" id="Unit_Table15_8"></th>
                    <th class="tg-0pky" id="Unit_Table15_9"></th>
                    <th class="tg-0pky" id="Unit_Table15_10"></th>
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
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath0">0</td>
                    <td class="tg-0pky" id="def%0">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0"  @input = "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath0">0</td>
                </tr>
                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Druid Naki</span></td>
                    <td class="tg-0pky" id="off%1">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath1">0</td>
                    <td class="tg-0pky" id="def%1">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath1">0</td>
                </tr>

                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Grass Spirit</span></td>
                    <td class="tg-0pky" id="off%2">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath2">0</td>
                    <td class="tg-0pky" id="def%2">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath2">0</td>
                </tr>
                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Forest Spirit</span></td>
                    <td class="tg-0pky" id="off%3">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath3">0</td>
                    <td class="tg-0pky" id="def%3">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath3">0</td>
                </tr>
                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Guard Naki</span></td>
                    <td class="tg-0pky" id="off%4">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath4">0</td>
                    <td class="tg-0pky" id="def%4">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath4">0</td>
                </tr>
                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Elder Spirit</span></td>
                    <td class="tg-0pky" id="off%5">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath5">0</td>
                    <td class="tg-0pky"  id="def%5">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath5">0</td>
                </tr>
                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Pangoan</span></td>
                    <td class="tg-0pky" id="off%6">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath6">0</td>
                    <td class="tg-0pky"  id="def%6">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath6">0</td>
                </tr>
                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Athlas</span></td>
                    <td class="tg-0pky" id="off%7">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath7">0</td>
                    <td class="tg-0pky"  id="def%7">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath7">0</td>
                </tr>
                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Nyxi</span></td>
                    <td class="tg-0pky" id="off%8">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath8">0</td>
                    <td class="tg-0pky"  id="def%8">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath8">0</td>
                </tr>
                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Ranax</span></td>
                    <td class="tg-0pky" id="off%9">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath9">0</td>
                    <td class="tg-0pky" id="def%9">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath9">0</td>
                </tr>
                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Ovivi</span></td>
                    <td class="tg-0pky" id="off%10">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath10">0</td>
                    <td class="tg-0pky" id="def%10">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath10">0</td>
                </tr>
                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Teryx</span></td>
                    <td class="tg-0pky" id="off%11">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath11">0</td>
                    <td class="tg-0pky" id="def%11">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath11">0</td>
                </tr>
                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Raider</span></td>
                    <td class="tg-0pky" id="off%12">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath12">0</td>
                    <td class="tg-0pky" id="def%12">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath12">0</td>
                </tr>

                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Ovivi Hero</span></td>
                    <td class="tg-0pky" id="off%13">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath13">0</td>
                    <td class="tg-0pky" id="def%13">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath13">0</td>
                </tr>

                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Teryx Hero</span></td>
                    <td class="tg-0pky" id="off%14">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath14">0</td>
                    <td class="tg-0pky" id="def%14">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="defDeath14">0</td>
                </tr>

                <tr>
                    <td class="tg-0pky"><span style="font-weight:bold">Raider Hero</span></td>
                    <td class="tg-0pky" id="off%15">0%</td>
                    <td class="att_num">
                        <input type="number" value="0" class="attack_number" min="0" @input= "calculate()" @focus="$event.target.select()">
                    </td>
                    <td class="tg-0pky" id="offDeath15">0</td>
                    <td class="tg-0pky" id="def%15">0%</td>
                    <td class="def_num">
                        <input type="number" value="0" class="def_number" min="0" @input= "calculate()" @focus="$event.target.select()">
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
                        <input type="number" id="offensive_Skill" value="0" min="0" @input= "calculate()" @focus="$event.target.select()">
                        %
                    </td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                    <td class="tg-c6of">
                        <input type="number" id="defensive_Skill" value="0" min="0" @input= "calculate()" @focus="$event.target.select()">
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
                        <select id="plague" @input= "calculate()">
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
                    <td class="tg-0pky" ></td>
                </tr>
                </tbody>
            </table>
            <br>

            <input class="button" type="button" value="calculate" id ="button" @click="calculate()">


            <br>
            <br>

            <p>Override automatic effective Unit calculation</p>
            <br>




            <div class="select-wrapper">
                <select id="override" @change= "calculate()" >
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
            exampleData: {
                text: 'I\'m from data',

            },
            //Order of Units needs to match order in HTML and needs to exactly match unitarray
            UnitArray: [
                //Spotter Naki
                {Strength: 1, Defense: 1, Speed: 120, RecruitmentTime: 10, RecruitingLocation : "Airship / Skilltree", Effective0: "Nothing", Effective1: null, Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Nothing"},
                //Druid Naki
                {Strength: 25, Defense: 25, Speed: 300, RecruitmentTime: 40,  RecruitingLocation : "Forest / Grassland", Effective0: "Forest Spirit", Effective1: "Grass Spirit", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null, Weak: "Guard Naki, Nyxi, Teryx (Hero), Raider (Hero)" },
                //Grass Spirit
                {Strength: 20, Defense: 40, Speed: 500, RecruitmentTime: 50,  RecruitingLocation : "Grassland", Effective0: "Guard Naki", Effective1: "Athlas", Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Druid Naki, Ranax, Ovivi (Hero), Teryx (Hero)"},
                //Forest Spirit
                {Strength: 30, Defense: 60, Speed: 475 ,RecruitmentTime: 75,  RecruitingLocation : "Forest", Effective0: "Guard Naki", Effective1: "Athlas", Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Druid Naki, Ranax, Ovivi (Hero), Teryx (Hero)"},
                //Guard Naki
                {Strength: 100, Defense: 50, Speed: 300, RecruitmentTime: 100,  RecruitingLocation : "High Grass", Effective0: "Druid Naki", Effective1: "Elder Spirit", Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Grass Spirit, Forest Spirit, Nyxi, Teryx (Hero), Raider (Hero="},
                //Elder Spirit
                {Strength: 100, Defense: 1000, Speed: 750 ,RecruitmentTime: 500, RecruitingLocation : "Magic Forest", Effective0: "Athlas", Effective1: "Wasty", Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Druid Naki, Guard Naki, Nyxi, Ovivi (Held), Teryx (Held)"},
                //Pangona
                {Strength: 200, Defense: 200, Speed: 400 ,RecruitmentTime: 125, RecruitingLocation : "Wasteland / Dunes / Fiery Desert", Effective0: "nothing", Effective1: null, Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Nothing"},
                    //Athlas
                {Strength: 800, Defense: 600, Speed: 76.66,RecruitmentTime: 325, RecruitingLocation : "Ash Fields / Fiery Desert, ", Effective0: "Marshy", Effective1: "Teryx", Effective2: "Raider", Effective3: "Ovivi", Effective4: null, Effective5: null,Weak: "Grass Spirit, Forest Spirit, Elder Spirit"},
                    //Nyxi
                {Strength: 50, Defense: 20, Speed: 250 ,RecruitmentTime: 30,  RecruitingLocation : "Swamp", Effective0: "Druid Naki", Effective1: "Guard Naki", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null,Weak: "Ranax, Athlas"},
                    //Ranax
                {Strength: 250, Defense: 10, Speed: 350, RecruitmentTime: 100,  RecruitingLocation : "Dunes", Effective0: "Marshy", Effective1: "Grass Spirit", Effective2: "Forest Spirit", Effective3: null, Effective4: null, Effective5: null,Weak: "Elder Spirit, Ovivi (Held)"},
                    //Ovivi
                {Strength: 25, Defense: 150, Speed: 60 ,RecruitmentTime: 50,  RecruitingLocation : "Control Field", Effective0: "Grass Spirit", Effective1: "Forest Spirit", Effective2: "Elder Spirit", Effective3: "Ranax", Effective4: null, Effective5: null, Weak: "Athlas"},
                    //Teryx
                {Strength: 90, Defense: 20, Speed: 250 ,RecruitmentTime: 30,  RecruitingLocation : "Control Field", Effective0: "Grass Spirit", Effective1: "Forest Spirit", Effective2: "Druid Naki", Effective3: "Guard Naki", Effective4: null, Effective5: null, Weak: "Elder Spirit, Athlas"},
                    //Raider
                {Strength: 5, Defense: 1, Speed: 200 ,RecruitmentTime: 10, RecruitingLocation : "Control Field", Effective0: "Druid Naki", Effective1: "Guard Naki", Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Athlas"},
                    //Ovivi Hero
                {Strength: 75000, Defense: 750000, Speed: 60 ,RecruitmentTime: 43200, RecruitingLocation : "Control Field", Effective0: "Grass Spirit", Effective1: "Forest Spirit", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"},
                    //Teryx Hero
                {Strength: 2500000, Defense: 100000, Speed: 250 ,RecruitmentTime: 86400, RecruitingLocation : "Control Field", Effective0: "Grass Spirit", Effective1: "Forest Spirit", Effective2: "Druid Naki", Effective3: "Guard Naki", Effective4: "Elder Spirit", Effective5: null, Weak: "Nothing"},
                //Raider Hero
                {Strength: 125000, Defense: 125000, Speed: 150 ,RecruitmentTime: 21600, RecruitingLocation : "Control Field", Effective0: "Grass Spirit", Effective1: "Forest Spirit", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"},

            ],
            showData: true,



            //Oder of Units in Array has to match order of Units in HTML
            unitNamesArray : ["Spotter Naki", "Druid Naki", "Grass Spirit", "Forest Spirit", "Guard Naki", "Elder Spirit", "Pangoan", "Athlas", "Nyxi", "Ranax", "Ovivi", "Teryx", "Raider", "Ovivi Hero", "Teryx Hero", "Raider Hero"],

            unitArray : {"Spotter Naki": {Strength: 1, Defense: 1, Speed: 120, RecruitmentTime: 10, RecruitingLocation : "Airship / Skilltree", Effective0: "Nothing", Effective1: null, Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Nothing"},
                "Druid Naki": {Strength: 25, Defense: 25, Speed: 300, RecruitmentTime: 40,  RecruitingLocation : "Forest / Grassland", Effective0: "Forest Spirit", Effective1: "Grass Spirit", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null, Weak: "Guard Naki, Nyxi, Teryx (Hero), Raider (Hero)" },
                "Grass Spirit":  {Strength: 20, Defense: 40, Speed: 500, RecruitmentTime: 50,  RecruitingLocation : "Grassland", Effective0: "Guard Naki", Effective1: "Athlas", Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Druid Naki, Ranax, Ovivi (Hero), Teryx (Hero)"},
                "ForestSpirit" : {Strength: 30, Defense: 60, Speed: 475 ,RecruitmentTime: 75,  RecruitingLocation : "Forest", Effective0: "Guard Naki", Effective1: "Athlas", Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Druid Naki, Ranax, Ovivi (Hero), Teryx (Hero)"},
                "Guard Naki" :  {Strength: 100, Defense: 50, Speed: 300, RecruitmentTime: 100,  RecruitingLocation : "High Grass", Effective0: "Druid Naki", Effective1: "Elder Spirit", Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Grass Spirit, Forest Spirit, Nyxi, Teryx (Hero), Raider (Hero="},
                "Elder Spirit" : {Strength: 100, Defense: 1000, Speed: 750 ,RecruitmentTime: 500, RecruitingLocation : "Magic Forest", Effective0: "Athlas", Effective1: "Wasty", Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Druid Naki, Guard Naki, Nyxi, Ovivi (Held), Teryx (Held)"},
                "Pangoan" :  {Strength: 200, Defense: 200, Speed: 400 ,RecruitmentTime: 125, RecruitingLocation : "Wasteland / Dunes / Fiery Desert", Effective0: "nothing", Effective1: null, Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Nothing"},
                "Athlas" :  {Strength: 800, Defense: 600, Speed: 76.66,RecruitmentTime: 325, RecruitingLocation : "Ash Fields / Fiery Desert, ", Effective0: "Marshy", Effective1: "Teryx", Effective2: "Raider", Effective3: "Ovivi", Effective4: null, Effective5: null,Weak: "Grass Spirit, Forest Spirit, Elder Spirit"},
                "Nyxi" :  {Strength: 50, Defense: 20, Speed: 250 ,RecruitmentTime: 30,  RecruitingLocation : "Swamp", Effective0: "Druid Naki", Effective1: "Guard Naki", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null,Weak: "Ranax, Athlas"},
                "Ranax" :  {Strength: 250, Defense: 10, Speed: 350, RecruitmentTime: 100,  RecruitingLocation : "Dunes", Effective0: "Marshy", Effective1: "Grass Spirit", Effective2: "Forest Spirit", Effective3: null, Effective4: null, Effective5: null,Weak: "Elder Spirit, Ovivi (Held)"},
                "Ovivi" : {Strength: 25, Defense: 150, Speed: 60 ,RecruitmentTime: 50,  RecruitingLocation : "Control Field", Effective0: "Grass Spirit", Effective1: "Forest Spirit", Effective2: "Elder Spirit", Effective3: "Ranax", Effective4: null, Effective5: null, Weak: "Athlas"},
                "Teryx" : {Strength: 90, Defense: 20, Speed: 250 ,RecruitmentTime: 30,  RecruitingLocation : "Control Field", Effective0: "Grass Spirit", Effective1: "Forest Spirit", Effective2: "Druid Naki", Effective3: "Guard Naki", Effective4: null, Effective5: null, Weak: "Elder Spirit, Athlas"},
                "Raider" : {Strength: 5, Defense: 1, Speed: 200 ,RecruitmentTime: 10, RecruitingLocation : "Control Field", Effective0: "Druid Naki", Effective1: "Guard Naki", Effective2: null, Effective3: null, Effective4: null, Effective5: null, Weak: "Athlas"},
                "Ovivi Hero" :  {Strength: 75000, Defense: 750000, Speed: 60 ,RecruitmentTime: 43200, RecruitingLocation : "Control Field", Effective0: "Grass Spirit", Effective1: "Forest Spirit", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"},
                "Teryx Hero" : {Strength: 2500000, Defense: 100000, Speed: 250 ,RecruitmentTime: 86400, RecruitingLocation : "Control Field", Effective0: "Grass Spirit", Effective1: "Forest Spirit", Effective2: "Druid Naki", Effective3: "Guard Naki", Effective4: "Elder Spirit", Effective5: null, Weak: "Nothing"},
                "Raider Hero" :  {Strength: 125000, Defense: 125000, Speed: 150 ,RecruitmentTime: 21600, RecruitingLocation : "Control Field", Effective0: "Grass Spirit", Effective1: "Forest Spirit", Effective2: "Elder Spirit", Effective3: null, Effective4: null, Effective5: null,Weak: "Nothing"},
            }

    };




    },
    computed: {
        ...mapState(['isMobile']),
    },
    methods: {
        calculate() {

            let totalAttack = 0;
            let totalDefense = 0;
            //Array that stores amount of each unit attacking
            let attack_values= this.getAttackValues();
            let defensive_values = this.getDefensiveValues();


            //returns an Array with only names  of attacking units
            let UnitNamesAttackArray = this.createUnitArray(attack_values);
            let UnitNamesDefenseArray = this.createUnitArray(defensive_values);
            this.calculateEffectiveness(attack_values, defensive_values, UnitNamesAttackArray, UnitNamesDefenseArray);

            //total Strength of Attackers WITH Skill applied
            totalAttack = this.calc_totalOffensive(attack_values);
            //total Strength of Defenders WITH Skill applied
            totalDefense = this.calc_totalDefense( defensive_values);


            let defensiveDeathArray = this.calc_DefensiveDeaths(defensive_values, totalAttack, totalDefense);
            this.fillDefensiveDeaths(defensiveDeathArray);
            let offensiveDeathArray = this.calc_OffensiveDeathArray(attack_values, totalAttack, totalDefense);
            this.fillOffensiveDeaths(offensiveDeathArray);


            this.fillTable(totalAttack, totalDefense);
            let strengthLost = this.calc_StrengthLost(offensiveDeathArray);
            this.fillStrengthLost(strengthLost);


            console.log("Success");

        },
        getAttackValues(){
            let attack_values = [];
            //put number of Attacking Units in Array
            for (let i=0; i < this.UnitArray.length;i++ ) {
                attack_values.push(document.getElementsByClassName("attack_number")[i].value);
            }
            return attack_values;

        },

        getDefensiveValues(){
          let defensive_values = [];
            //put number of defender units in Array
            for (let i=0; i < this.UnitArray.length;i++ ) {
                defensive_values.push(document.getElementsByClassName("def_number")[i].value);
            }
            return defensive_values;
        },

        calculateEffectiveness(attack_values, defense_values, UnitNamesAttackArray, UnitNamesDefenseArray ) {
            let override = document.getElementById("override").value;
            if (override === "false") {
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
                attackerEffectiveness = this.calc_Effectiveness(totalAttack, totalDefense, percentageArrayOffensive, percentageArrayDefensive, UnitNamesDefenseArray);
                defenderEffectiveness = this.calc_Effectiveness(totalDefense, totalAttack, percentageArrayDefensive, percentageArrayOffensive, UnitNamesAttackArray);

                let effectiveOff = document.getElementById("effectiveOff");
                effectiveOff.innerHTML = Math.round(attackerEffectiveness).toString();

                let effectiveDef = document.getElementById("effectiveDef");
                effectiveDef.innerHTML = Math.round(defenderEffectiveness).toString();
            }
            else {
                let effectiveOff = document.getElementById("effectiveOff");
                effectiveOff.innerHTML = "0";

                let effectiveDef = document.getElementById("effectiveDef");
                effectiveDef.innerHTML = "0";
            }
        },

        calc_Effectiveness(totalAttack, totalDefense, percentageArrayOffensive, percentageArrayDefensive, UnitNamesDefenseArray) {
            let Effectiveness = 0;
            if (totalAttack && totalDefense){
                for (let i = 0; i < this.UnitArray.length; i++){
                    if (percentageArrayOffensive[i] > 0) {
                        for (let j = 0; j < UnitNamesDefenseArray.length; j++) {
                            let unitNameOff = this.unitNamesArray[i];
                            if (this.unitArray[unitNameOff].Effective0 === UnitNamesDefenseArray[j] && this.unitArray[unitNameOff].Effective0 != null) {
                                Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j])/100;
                            }
                            if (this.unitArray[unitNameOff].Effective1 === UnitNamesDefenseArray[j] && this.unitArray[unitNameOff].Effective1 != null) {
                                Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j])/100;
                            }
                            if (this.unitArray[unitNameOff].Effective2 === UnitNamesDefenseArray[j] && this.unitArray[unitNameOff].Effective2 != null) {
                                Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j])/100;
                            }
                            if (this.unitArray[unitNameOff].Effective3 === UnitNamesDefenseArray[j] && this.unitArray[unitNameOff].Effective3 != null) {
                                Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j])/100;
                            }
                            if (this.unitArray[unitNameOff].Effective4 === UnitNamesDefenseArray[j] && this.unitArray[unitNameOff].Effective4 != null) {
                                Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j])/100;
                            }
                            if (this.unitArray[unitNameOff].Effective5 === UnitNamesDefenseArray[j] && this.unitArray[unitNameOff].Effective5 != null) {
                                Effectiveness += (percentageArrayOffensive[i] * percentageArrayDefensive[j])/100;
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
                if (values[i] > 0){
                    array.push(this.unitNamesArray[i]);
                }
                else array.push(null);
            }
            return array;
        },

        //calculate total Offense
        calc_totalOffensive (attack_values) {
            let totalAttack = 0;
            //get Offensive Skill
            let offensive_Skill = document.getElementById("offensive_Skill").value;
            offensive_Skill = parseInt(offensive_Skill);
            let effectivePercent = document.getElementById("effectiveOff").innerText;
            effectivePercent = parseInt(effectivePercent);

            //Multiply Attacking numbers with corresponding offensive values
            for (let y=0; y < attack_values.length; y++){
                totalAttack += attack_values[y] * this.UnitArray[y].Strength;
            }

            let totalSkill = (offensive_Skill + effectivePercent)/100;

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
            for (let y=0; y < attack_values.length; y++){
                totalAttack += attack_values[y] * this.UnitArray[y].Strength;
            }

            return totalAttack;
        },

        calc_individualOffensive(attack_values) {
            let totalAttack = [];

            for (let y=0; y < attack_values.length; y++) {
                totalAttack.push(attack_values[y] * this.UnitArray[y].Strength);
            }

            return totalAttack;
        },

        //calculate total Defense
        calc_totalDefense(defensive_values) {
            let totalDefense = 0;
            //get Defensive Skill
            let defensive_Skill = document.getElementById("defensive_Skill").value;
            defensive_Skill = parseInt(defensive_Skill);
            let effectivePercent = document.getElementById("effectiveDef").innerText;
            effectivePercent = parseInt(effectivePercent);

            //multiply defenders with corresponding defensive values
            for (let y = 0; y < defensive_values.length; y++){
                totalDefense += defensive_values[y] * this.UnitArray[y].Defense;
            }

            totalDefense += totalDefense * ((defensive_Skill + effectivePercent)/100);

            let totalUnits = this.calc_totalUnits(defensive_values);
            let percentageArray = this.calc_Percentages(defensive_values, totalUnits);
            this.fillDefensivePercentages(percentageArray);

            return totalDefense;
        },

        //calculate total Defense without Skill applied
        calc_totalDefenseNoSkill(defensive_values) {
            let totalDefense = 0;
            //multiply defenders with corresponding defensive values
            for (let y = 0; y < defensive_values.length; y++){
                totalDefense += defensive_values[y] * this.UnitArray[y].Defense;
            }


            return totalDefense;
        },

        calc_individualDefense(defense_values) {
            let totalDefense = [];

            for (let y=0; y < defense_values.length; y++) {
                totalDefense.push(defense_values[y] * this.UnitArray[y].Defense);
            }

            return totalDefense;
        },


        //calculates total number of units either attacking or defending
        calc_totalUnits(unitArray) {

            let totalNumberOfUnits = 0;
            for (let y=0; y < unitArray.length; y++){
                if (unitArray[y].toString() === ""){
                    unitArray[y] = 0;

                }
                else totalNumberOfUnits += parseInt(unitArray[y]);
            }


            return totalNumberOfUnits;

        },

        //calculates percentages based on unit amount
        calc_Percentages(unitArray, totalNumberOfUnits){
            let percentageArray = [];
            for (let y=0; y < unitArray.length; y++){
                percentageArray.push((unitArray[y]/totalNumberOfUnits*100).toFixed(2));

            }
            return percentageArray;
        },


        fillOffensivePercentages(percentageArray) {
            for (let i=0;i<percentageArray.length;i++){
                let text = document.getElementById("off%" + i.toString());
                if (Number.isNaN(parseInt(percentageArray[i]))){
                    text.innerHTML = "0".concat("%");
                }
                else text.innerHTML = percentageArray[i].concat("%");
            }

        },

        fillDefensivePercentages(percentageArray) {
            for (let i=0;i<percentageArray.length;i++){
                let text = document.getElementById("def%" + i.toString());
                if (Number.isNaN(parseInt(percentageArray[i]))){
                    text.innerHTML = "0".concat("%");
                }
                else text.innerHTML = percentageArray[i].concat("%");
            }

        },


        calc_DefensiveDeaths(defensive_Values, totalAttack, totalDefense) {
            let defensiveDeathArray = [];
            let difference = this.getDifference(totalAttack, totalDefense);
            if (totalAttack < totalDefense){
                for (let i = 0; i < defensive_Values.length; i++){
                    defensiveDeathArray.push(Math.ceil(defensive_Values[i]*difference));
                }
            }
            else {
                for (let i = 0; i < defensive_Values.length; i++){
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

            if (totalAttack > totalDefense){
                for (let i = 0; i < attack_values.length; i++){
                    if (plague === "false"){
                        offensiveDeathArray.push(Math.ceil(attack_values[i]/difference));
                    }
                    else {
                        offensiveDeathArray.push(Math.ceil((attack_values[i]/difference)+(attack_values[i]-(attack_values[i]/difference))*0.3))
                    }
                }
            }
            else {
                for (let i = 0; i < attack_values.length; i++){
                    offensiveDeathArray.push(attack_values[i]);
                }
            }

            return offensiveDeathArray;
        },

        fillDefensiveDeaths(defensiveDeathArray) {
            for (let i=0;i<defensiveDeathArray.length;i++){
                let text = document.getElementById("defDeath" + i.toString());
                text.innerHTML = defensiveDeathArray[i];
            }

        },

        fillOffensiveDeaths(offensiveDeathArray) {
            for (let i=0;i < offensiveDeathArray.length;i++){
                let text = document.getElementById("offDeath" + i.toString());
                text.innerHTML = offensiveDeathArray[i];
            }

        },

        fillTable(totalAttack, totalDefense,) {

            //set totalAttack field
            let text = document.getElementById("totalAttack");
            text.innerHTML = totalAttack;

            //set total Defesnive field
            text = document.getElementById("totalDefense");
            text.innerHTML = totalDefense;

            //set difference
            text = document.getElementById("Difference");
            text.innerHTML = this.getDifference(totalAttack,totalDefense);

        },

        getDifference(totalAttack, totalDefense) {
            if (totalDefense === 0){
                return 0;
            }
            let difference = totalAttack/totalDefense;
            return difference = +difference.toFixed(5);

        },

        getPlagueStatus() {
            return document.getElementById("plague").value;

        },
        calc_StrengthLost(offensiveDeathArray) {
            let strengthLost = 0;
            for (let i=0;i<offensiveDeathArray.length;i++){
                strengthLost += offensiveDeathArray[i] * this.UnitArray[i].Strength;
            }
            return strengthLost;
        },

        fillStrengthLost(strengthLost) {
            let text = document.getElementById("StrengthLost");
            text.innerHTML = strengthLost;
        },



        fillUnitTable() {
            let multiplier = 1;
            console.log("fillUnitTable");
            let worldSelect = document.getElementById("World_Select").value;
            if (worldSelect === "Beginner World"){
                multiplier = 1;
            }
            else multiplier = 2;

            let UnitNames = Object.keys(this.unitArray);


            //loop to enter Unit names into each cell
            for (let a = 0; a < this.UnitArray.length; a++){
                let text0 = document.getElementById("Unit_Table" + a.toString()+"_0");
                text0.innerHTML = UnitNames[a];
            }


            //loop to enter strength value from values.js into each cell
            for (let b = 0; b < this.UnitArray.length; b++){
                let text1 = document.getElementById("Unit_Table" + b.toString() + "_1");

                text1.innerHTML = this.UnitArray[b].Strength.toString();
            }

            //loop to enter defense value from values.js into each cell
            for (let c = 0; c < this.UnitArray.length; c++){
                let text2 = document.getElementById("Unit_Table" + c.toString() + "_2");
                text2.innerHTML = this.UnitArray[c].Defense.toString();
            }

            //loop to enter Travel Time value from values.js into each cell
            for (let d = 0; d < this.UnitArray.length; d++){
                let text3 = document.getElementById("Unit_Table" + d.toString() + "_3");
                text3.innerHTML = (this.UnitArray[d].Speed * multiplier).toString();
            }

            //loop to enter Recruitment Duration value from values.js into each cell
            for (let e = 0; e < this.UnitArray.length; e++){
                let text4 = document.getElementById("Unit_Table" + e.toString() + "_4");
                text4.innerHTML =(this.UnitArray[e].RecruitmentTime * multiplier).toString();
            }

            //loop to enter Power Ratio
            for (let f = 0; f < this.UnitArray.length; f++){
                let x = 0;
                let text5 = document.getElementById("Unit_Table" + f.toString() + "_5");
                x = this.UnitArray[f].Strength / (this.UnitArray[f].RecruitmentTime * multiplier) ;
                text5.innerHTML = x.toFixed(2);

            }

            //loop to enter Defense Ratio
            for (let g = 0; g < this.UnitArray.length; g++){
                let x = 0;
                let text6 = document.getElementById("Unit_Table" + g.toString() + "_6");
                x = this.UnitArray[g].Defense / (this.UnitArray[g].RecruitmentTime * multiplier);
                text6.innerHTML = x.toFixed(2);
            }

            //loop to enter Effective against
            for (let h = 0; h < this.UnitArray.length; h++){
                let text7 = document.getElementById("Unit_Table" + h.toString()+"_7");
                let text8 = this.UnitArray[h].Effective0 + " " +  this.UnitArray[h].Effective1 + " " + this.UnitArray[h].Effective2 + " " + this.UnitArray[h].Effective3 + " " + this.UnitArray[h].Effective4 + " " + this.UnitArray[h].Effective5;

                //replace every "null" with a whitespace
                text8 = text8.replace(/null/g,'');
                text7.innerHTML = text8;

            }

            //loop to enter Weak against
            for (let i = 0; i < this.UnitArray.length; i++){
                let text9 = document.getElementById("Unit_Table" + i.toString()+"_8");
                text9.innerHTML = this.UnitArray[i].Weak;
            }

            //loop to enter Recruitment Location
            for (let j = 0; j < this.UnitArray.length; j++){
                let text10 = document.getElementById("Unit_Table" + j.toString()+"_9");
                text10.innerHTML = this.UnitArray[j].RecruitingLocation;
            }

            //loop to enter max. Strength / 24h
            for (let k = 0; k < this.UnitArray.length; k++){
                let x = 0;
                let text11 = document.getElementById("Unit_Table" + k.toString() + "_10");
                x = Math.round((86400/(this.UnitArray[k].RecruitmentTime*multiplier))*this.UnitArray[k].Strength);
                x = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                text11.innerHTML = x;
            }

            console.log("Unit table successfully filled");
        },



        load2(){
            let button = document.getElementById("body");
            button.addEventListener("keyup", function (event) {
                if (event.code === "Enter" ) {
                    this.calculate();
                }

            })

        },


    },
    mounted() {
        //this.load2();
        this.fillUnitTable();
    }
};
</script>

<style lang="scss">
.example-page {
    padding: 30px;
    width: 100vh;
    height: 100vh;
    overflow: scroll;
}

.body {

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


.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
    padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
    font-weight:normal;padding:10px 5px;word-break:normal;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-c6of{background-color:#ffffff;border-color:inherit;text-align:left;vertical-align:top}

.button {
    border: black;
    color: black;
    padding: 15px 32px;
    text-align: center;
    font-size: 20px;
    display: inline-block;
    cursor: pointer;
}

.select-wrapper{
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
    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.3);
    border-radius: 3px;
    outline: none;
    cursor: pointer;
}

select::-ms-expand {
    display: none;
}

</style>
