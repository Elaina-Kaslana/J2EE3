/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 431.0, "minX": 0.0, "maxY": 2742.0, "series": [{"data": [[0.0, 431.0], [0.1, 431.0], [0.2, 451.0], [0.3, 451.0], [0.4, 474.0], [0.5, 481.0], [0.6, 481.0], [0.7, 496.0], [0.8, 496.0], [0.9, 514.0], [1.0, 527.0], [1.1, 527.0], [1.2, 530.0], [1.3, 530.0], [1.4, 557.0], [1.5, 568.0], [1.6, 568.0], [1.7, 575.0], [1.8, 575.0], [1.9, 607.0], [2.0, 607.0], [2.1, 607.0], [2.2, 608.0], [2.3, 608.0], [2.4, 608.0], [2.5, 608.0], [2.6, 632.0], [2.7, 636.0], [2.8, 636.0], [2.9, 647.0], [3.0, 651.0], [3.1, 651.0], [3.2, 666.0], [3.3, 666.0], [3.4, 676.0], [3.5, 681.0], [3.6, 681.0], [3.7, 686.0], [3.8, 686.0], [3.9, 690.0], [4.0, 700.0], [4.1, 700.0], [4.2, 709.0], [4.3, 709.0], [4.4, 710.0], [4.5, 711.0], [4.6, 711.0], [4.7, 712.0], [4.8, 712.0], [4.9, 715.0], [5.0, 715.0], [5.1, 724.0], [5.2, 734.0], [5.3, 734.0], [5.4, 745.0], [5.5, 745.0], [5.6, 764.0], [5.7, 778.0], [5.8, 778.0], [5.9, 794.0], [6.0, 794.0], [6.1, 807.0], [6.2, 810.0], [6.3, 810.0], [6.4, 815.0], [6.5, 815.0], [6.6, 819.0], [6.7, 828.0], [6.8, 828.0], [6.9, 831.0], [7.0, 831.0], [7.1, 836.0], [7.2, 841.0], [7.3, 841.0], [7.4, 846.0], [7.5, 846.0], [7.6, 847.0], [7.7, 848.0], [7.8, 848.0], [7.9, 858.0], [8.0, 858.0], [8.1, 861.0], [8.2, 868.0], [8.3, 868.0], [8.4, 870.0], [8.5, 870.0], [8.6, 880.0], [8.7, 891.0], [8.8, 891.0], [8.9, 893.0], [9.0, 893.0], [9.1, 894.0], [9.2, 903.0], [9.3, 903.0], [9.4, 903.0], [9.5, 903.0], [9.6, 905.0], [9.7, 905.0], [9.8, 905.0], [9.9, 906.0], [10.0, 906.0], [10.1, 906.0], [10.2, 914.0], [10.3, 914.0], [10.4, 917.0], [10.5, 917.0], [10.6, 917.0], [10.7, 919.0], [10.8, 919.0], [10.9, 924.0], [11.0, 924.0], [11.1, 928.0], [11.2, 929.0], [11.3, 929.0], [11.4, 931.0], [11.5, 932.0], [11.6, 932.0], [11.7, 936.0], [11.8, 936.0], [11.9, 945.0], [12.0, 946.0], [12.1, 946.0], [12.2, 950.0], [12.3, 950.0], [12.4, 953.0], [12.5, 954.0], [12.6, 954.0], [12.7, 954.0], [12.8, 954.0], [12.9, 955.0], [13.0, 958.0], [13.1, 958.0], [13.2, 960.0], [13.3, 960.0], [13.4, 962.0], [13.5, 966.0], [13.6, 966.0], [13.7, 968.0], [13.8, 968.0], [13.9, 969.0], [14.0, 971.0], [14.1, 971.0], [14.2, 973.0], [14.3, 973.0], [14.4, 976.0], [14.5, 981.0], [14.6, 981.0], [14.7, 988.0], [14.8, 988.0], [14.9, 992.0], [15.0, 994.0], [15.1, 994.0], [15.2, 996.0], [15.3, 996.0], [15.4, 1003.0], [15.5, 1003.0], [15.6, 1003.0], [15.7, 1015.0], [15.8, 1015.0], [15.9, 1018.0], [16.0, 1024.0], [16.1, 1024.0], [16.2, 1027.0], [16.3, 1027.0], [16.4, 1029.0], [16.5, 1029.0], [16.6, 1029.0], [16.7, 1033.0], [16.8, 1033.0], [16.9, 1034.0], [17.0, 1034.0], [17.1, 1034.0], [17.2, 1037.0], [17.3, 1037.0], [17.4, 1043.0], [17.5, 1051.0], [17.6, 1051.0], [17.7, 1051.0], [17.8, 1051.0], [17.9, 1053.0], [18.0, 1060.0], [18.1, 1060.0], [18.2, 1066.0], [18.3, 1066.0], [18.4, 1068.0], [18.5, 1068.0], [18.6, 1068.0], [18.7, 1072.0], [18.8, 1072.0], [18.9, 1074.0], [19.0, 1078.0], [19.1, 1078.0], [19.2, 1083.0], [19.3, 1083.0], [19.4, 1086.0], [19.5, 1087.0], [19.6, 1087.0], [19.7, 1087.0], [19.8, 1087.0], [19.9, 1092.0], [20.0, 1103.0], [20.1, 1103.0], [20.2, 1107.0], [20.3, 1107.0], [20.4, 1109.0], [20.5, 1112.0], [20.6, 1112.0], [20.7, 1117.0], [20.8, 1117.0], [20.9, 1118.0], [21.0, 1118.0], [21.1, 1120.0], [21.2, 1132.0], [21.3, 1132.0], [21.4, 1135.0], [21.5, 1135.0], [21.6, 1136.0], [21.7, 1137.0], [21.8, 1137.0], [21.9, 1137.0], [22.0, 1137.0], [22.1, 1141.0], [22.2, 1142.0], [22.3, 1142.0], [22.4, 1142.0], [22.5, 1142.0], [22.6, 1143.0], [22.7, 1144.0], [22.8, 1144.0], [22.9, 1145.0], [23.0, 1145.0], [23.1, 1146.0], [23.2, 1147.0], [23.3, 1147.0], [23.4, 1152.0], [23.5, 1152.0], [23.6, 1158.0], [23.7, 1159.0], [23.8, 1159.0], [23.9, 1161.0], [24.0, 1161.0], [24.1, 1161.0], [24.2, 1165.0], [24.3, 1165.0], [24.4, 1171.0], [24.5, 1171.0], [24.6, 1172.0], [24.7, 1172.0], [24.8, 1172.0], [24.9, 1175.0], [25.0, 1175.0], [25.1, 1177.0], [25.2, 1181.0], [25.3, 1181.0], [25.4, 1191.0], [25.5, 1191.0], [25.6, 1204.0], [25.7, 1225.0], [25.8, 1225.0], [25.9, 1230.0], [26.0, 1230.0], [26.1, 1232.0], [26.2, 1235.0], [26.3, 1235.0], [26.4, 1239.0], [26.5, 1239.0], [26.6, 1242.0], [26.7, 1242.0], [26.8, 1242.0], [26.9, 1246.0], [27.0, 1246.0], [27.1, 1247.0], [27.2, 1249.0], [27.3, 1249.0], [27.4, 1257.0], [27.5, 1257.0], [27.6, 1261.0], [27.7, 1261.0], [27.8, 1261.0], [27.9, 1272.0], [28.0, 1272.0], [28.1, 1273.0], [28.2, 1277.0], [28.3, 1277.0], [28.4, 1284.0], [28.5, 1284.0], [28.6, 1286.0], [28.7, 1288.0], [28.8, 1288.0], [28.9, 1290.0], [29.0, 1290.0], [29.1, 1292.0], [29.2, 1302.0], [29.3, 1302.0], [29.4, 1303.0], [29.5, 1303.0], [29.6, 1304.0], [29.7, 1308.0], [29.8, 1308.0], [29.9, 1310.0], [30.0, 1310.0], [30.1, 1312.0], [30.2, 1317.0], [30.3, 1317.0], [30.4, 1318.0], [30.5, 1318.0], [30.6, 1320.0], [30.7, 1324.0], [30.8, 1324.0], [30.9, 1325.0], [31.0, 1325.0], [31.1, 1330.0], [31.2, 1333.0], [31.3, 1333.0], [31.4, 1335.0], [31.5, 1335.0], [31.6, 1335.0], [31.7, 1341.0], [31.8, 1341.0], [31.9, 1342.0], [32.0, 1342.0], [32.1, 1348.0], [32.2, 1351.0], [32.3, 1351.0], [32.4, 1353.0], [32.5, 1353.0], [32.6, 1355.0], [32.7, 1356.0], [32.8, 1356.0], [32.9, 1356.0], [33.0, 1356.0], [33.1, 1357.0], [33.2, 1370.0], [33.3, 1370.0], [33.4, 1372.0], [33.5, 1372.0], [33.6, 1372.0], [33.7, 1377.0], [33.8, 1377.0], [33.9, 1378.0], [34.0, 1378.0], [34.1, 1379.0], [34.2, 1387.0], [34.3, 1387.0], [34.4, 1390.0], [34.5, 1390.0], [34.6, 1391.0], [34.7, 1394.0], [34.8, 1394.0], [34.9, 1395.0], [35.0, 1395.0], [35.1, 1396.0], [35.2, 1406.0], [35.3, 1406.0], [35.4, 1408.0], [35.5, 1408.0], [35.6, 1409.0], [35.7, 1416.0], [35.8, 1416.0], [35.9, 1417.0], [36.0, 1417.0], [36.1, 1420.0], [36.2, 1425.0], [36.3, 1425.0], [36.4, 1425.0], [36.5, 1425.0], [36.6, 1427.0], [36.7, 1432.0], [36.8, 1432.0], [36.9, 1436.0], [37.0, 1436.0], [37.1, 1436.0], [37.2, 1437.0], [37.3, 1437.0], [37.4, 1440.0], [37.5, 1440.0], [37.6, 1440.0], [37.7, 1440.0], [37.8, 1440.0], [37.9, 1448.0], [38.0, 1448.0], [38.1, 1452.0], [38.2, 1454.0], [38.3, 1454.0], [38.4, 1454.0], [38.5, 1454.0], [38.6, 1461.0], [38.7, 1467.0], [38.8, 1467.0], [38.9, 1481.0], [39.0, 1483.0], [39.1, 1483.0], [39.2, 1484.0], [39.3, 1484.0], [39.4, 1485.0], [39.5, 1491.0], [39.6, 1491.0], [39.7, 1492.0], [39.8, 1492.0], [39.9, 1509.0], [40.0, 1512.0], [40.1, 1512.0], [40.2, 1513.0], [40.3, 1513.0], [40.4, 1515.0], [40.5, 1515.0], [40.6, 1515.0], [40.7, 1516.0], [40.8, 1516.0], [40.9, 1522.0], [41.0, 1523.0], [41.1, 1523.0], [41.2, 1530.0], [41.3, 1530.0], [41.4, 1536.0], [41.5, 1544.0], [41.6, 1544.0], [41.7, 1546.0], [41.8, 1546.0], [41.9, 1547.0], [42.0, 1555.0], [42.1, 1555.0], [42.2, 1560.0], [42.3, 1560.0], [42.4, 1563.0], [42.5, 1564.0], [42.6, 1564.0], [42.7, 1566.0], [42.8, 1566.0], [42.9, 1571.0], [43.0, 1576.0], [43.1, 1576.0], [43.2, 1584.0], [43.3, 1584.0], [43.4, 1586.0], [43.5, 1591.0], [43.6, 1591.0], [43.7, 1594.0], [43.8, 1594.0], [43.9, 1595.0], [44.0, 1598.0], [44.1, 1598.0], [44.2, 1599.0], [44.3, 1599.0], [44.4, 1599.0], [44.5, 1600.0], [44.6, 1600.0], [44.7, 1606.0], [44.8, 1606.0], [44.9, 1607.0], [45.0, 1607.0], [45.1, 1607.0], [45.2, 1612.0], [45.3, 1612.0], [45.4, 1614.0], [45.5, 1616.0], [45.6, 1616.0], [45.7, 1617.0], [45.8, 1617.0], [45.9, 1621.0], [46.0, 1627.0], [46.1, 1627.0], [46.2, 1629.0], [46.3, 1629.0], [46.4, 1630.0], [46.5, 1630.0], [46.6, 1630.0], [46.7, 1631.0], [46.8, 1631.0], [46.9, 1633.0], [47.0, 1638.0], [47.1, 1638.0], [47.2, 1642.0], [47.3, 1642.0], [47.4, 1648.0], [47.5, 1664.0], [47.6, 1664.0], [47.7, 1664.0], [47.8, 1664.0], [47.9, 1664.0], [48.0, 1665.0], [48.1, 1665.0], [48.2, 1681.0], [48.3, 1681.0], [48.4, 1685.0], [48.5, 1690.0], [48.6, 1690.0], [48.7, 1700.0], [48.8, 1700.0], [48.9, 1710.0], [49.0, 1718.0], [49.1, 1718.0], [49.2, 1721.0], [49.3, 1721.0], [49.4, 1724.0], [49.5, 1725.0], [49.6, 1725.0], [49.7, 1728.0], [49.8, 1728.0], [49.9, 1729.0], [50.0, 1730.0], [50.1, 1730.0], [50.2, 1745.0], [50.3, 1745.0], [50.4, 1745.0], [50.5, 1758.0], [50.6, 1758.0], [50.7, 1759.0], [50.8, 1759.0], [50.9, 1764.0], [51.0, 1766.0], [51.1, 1766.0], [51.2, 1775.0], [51.3, 1775.0], [51.4, 1780.0], [51.5, 1780.0], [51.6, 1780.0], [51.7, 1780.0], [51.8, 1780.0], [51.9, 1790.0], [52.0, 1791.0], [52.1, 1791.0], [52.2, 1794.0], [52.3, 1794.0], [52.4, 1800.0], [52.5, 1810.0], [52.6, 1810.0], [52.7, 1811.0], [52.8, 1811.0], [52.9, 1813.0], [53.0, 1818.0], [53.1, 1818.0], [53.2, 1823.0], [53.3, 1823.0], [53.4, 1831.0], [53.5, 1832.0], [53.6, 1832.0], [53.7, 1834.0], [53.8, 1834.0], [53.9, 1835.0], [54.0, 1843.0], [54.1, 1843.0], [54.2, 1849.0], [54.3, 1849.0], [54.4, 1853.0], [54.5, 1854.0], [54.6, 1854.0], [54.7, 1865.0], [54.8, 1865.0], [54.9, 1878.0], [55.0, 1882.0], [55.1, 1882.0], [55.2, 1885.0], [55.3, 1885.0], [55.4, 1895.0], [55.5, 1906.0], [55.6, 1906.0], [55.7, 1914.0], [55.8, 1914.0], [55.9, 1918.0], [56.0, 1929.0], [56.1, 1929.0], [56.2, 1935.0], [56.3, 1935.0], [56.4, 1935.0], [56.5, 1936.0], [56.6, 1936.0], [56.7, 1936.0], [56.8, 1936.0], [56.9, 1938.0], [57.0, 1939.0], [57.1, 1939.0], [57.2, 1940.0], [57.3, 1940.0], [57.4, 1951.0], [57.5, 1957.0], [57.6, 1957.0], [57.7, 1959.0], [57.8, 1959.0], [57.9, 1966.0], [58.0, 1967.0], [58.1, 1967.0], [58.2, 1971.0], [58.3, 1971.0], [58.4, 1973.0], [58.5, 1976.0], [58.6, 1976.0], [58.7, 1996.0], [58.8, 1996.0], [58.9, 2006.0], [59.0, 2013.0], [59.1, 2013.0], [59.2, 2023.0], [59.3, 2023.0], [59.4, 2025.0], [59.5, 2032.0], [59.6, 2032.0], [59.7, 2043.0], [59.8, 2043.0], [59.9, 2046.0], [60.0, 2051.0], [60.1, 2051.0], [60.2, 2052.0], [60.3, 2052.0], [60.4, 2059.0], [60.5, 2063.0], [60.6, 2063.0], [60.7, 2067.0], [60.8, 2067.0], [60.9, 2071.0], [61.0, 2071.0], [61.1, 2071.0], [61.2, 2083.0], [61.3, 2083.0], [61.4, 2084.0], [61.5, 2093.0], [61.6, 2093.0], [61.7, 2099.0], [61.8, 2099.0], [61.9, 2104.0], [62.0, 2106.0], [62.1, 2106.0], [62.2, 2113.0], [62.3, 2113.0], [62.4, 2121.0], [62.5, 2125.0], [62.6, 2125.0], [62.7, 2137.0], [62.8, 2137.0], [62.9, 2140.0], [63.0, 2143.0], [63.1, 2143.0], [63.2, 2143.0], [63.3, 2143.0], [63.4, 2148.0], [63.5, 2153.0], [63.6, 2153.0], [63.7, 2156.0], [63.8, 2156.0], [63.9, 2158.0], [64.0, 2162.0], [64.1, 2162.0], [64.2, 2163.0], [64.3, 2163.0], [64.4, 2165.0], [64.5, 2167.0], [64.6, 2167.0], [64.7, 2168.0], [64.8, 2168.0], [64.9, 2169.0], [65.0, 2175.0], [65.1, 2175.0], [65.2, 2175.0], [65.3, 2175.0], [65.4, 2177.0], [65.5, 2181.0], [65.6, 2181.0], [65.7, 2183.0], [65.8, 2183.0], [65.9, 2187.0], [66.0, 2188.0], [66.1, 2188.0], [66.2, 2194.0], [66.3, 2194.0], [66.4, 2205.0], [66.5, 2208.0], [66.6, 2208.0], [66.7, 2210.0], [66.8, 2210.0], [66.9, 2212.0], [67.0, 2212.0], [67.1, 2212.0], [67.2, 2213.0], [67.3, 2213.0], [67.4, 2215.0], [67.5, 2219.0], [67.6, 2219.0], [67.7, 2219.0], [67.8, 2219.0], [67.9, 2221.0], [68.0, 2226.0], [68.1, 2226.0], [68.2, 2226.0], [68.3, 2226.0], [68.4, 2229.0], [68.5, 2232.0], [68.6, 2232.0], [68.7, 2237.0], [68.8, 2237.0], [68.9, 2241.0], [69.0, 2249.0], [69.1, 2249.0], [69.2, 2252.0], [69.3, 2252.0], [69.4, 2257.0], [69.5, 2259.0], [69.6, 2259.0], [69.7, 2260.0], [69.8, 2260.0], [69.9, 2264.0], [70.0, 2266.0], [70.1, 2266.0], [70.2, 2270.0], [70.3, 2270.0], [70.4, 2277.0], [70.5, 2277.0], [70.6, 2277.0], [70.7, 2280.0], [70.8, 2280.0], [70.9, 2280.0], [71.0, 2293.0], [71.1, 2293.0], [71.2, 2294.0], [71.3, 2294.0], [71.4, 2296.0], [71.5, 2300.0], [71.6, 2300.0], [71.7, 2301.0], [71.8, 2301.0], [71.9, 2304.0], [72.0, 2305.0], [72.1, 2305.0], [72.2, 2307.0], [72.3, 2307.0], [72.4, 2307.0], [72.5, 2307.0], [72.6, 2307.0], [72.7, 2308.0], [72.8, 2308.0], [72.9, 2309.0], [73.0, 2309.0], [73.1, 2309.0], [73.2, 2309.0], [73.3, 2309.0], [73.4, 2311.0], [73.5, 2314.0], [73.6, 2314.0], [73.7, 2316.0], [73.8, 2316.0], [73.9, 2318.0], [74.0, 2323.0], [74.1, 2323.0], [74.2, 2328.0], [74.3, 2328.0], [74.4, 2336.0], [74.5, 2337.0], [74.6, 2337.0], [74.7, 2338.0], [74.8, 2338.0], [74.9, 2342.0], [75.0, 2343.0], [75.1, 2343.0], [75.2, 2344.0], [75.3, 2344.0], [75.4, 2344.0], [75.5, 2348.0], [75.6, 2348.0], [75.7, 2350.0], [75.8, 2350.0], [75.9, 2358.0], [76.0, 2361.0], [76.1, 2361.0], [76.2, 2363.0], [76.3, 2363.0], [76.4, 2364.0], [76.5, 2367.0], [76.6, 2367.0], [76.7, 2368.0], [76.8, 2368.0], [76.9, 2369.0], [77.0, 2369.0], [77.1, 2369.0], [77.2, 2371.0], [77.3, 2371.0], [77.4, 2372.0], [77.5, 2373.0], [77.6, 2373.0], [77.7, 2376.0], [77.8, 2376.0], [77.9, 2376.0], [78.0, 2378.0], [78.1, 2378.0], [78.2, 2379.0], [78.3, 2379.0], [78.4, 2382.0], [78.5, 2387.0], [78.6, 2387.0], [78.7, 2387.0], [78.8, 2387.0], [78.9, 2389.0], [79.0, 2391.0], [79.1, 2391.0], [79.2, 2391.0], [79.3, 2391.0], [79.4, 2395.0], [79.5, 2396.0], [79.6, 2396.0], [79.7, 2396.0], [79.8, 2396.0], [79.9, 2400.0], [80.0, 2402.0], [80.1, 2402.0], [80.2, 2402.0], [80.3, 2402.0], [80.4, 2408.0], [80.5, 2410.0], [80.6, 2410.0], [80.7, 2412.0], [80.8, 2412.0], [80.9, 2414.0], [81.0, 2418.0], [81.1, 2418.0], [81.2, 2419.0], [81.3, 2419.0], [81.4, 2419.0], [81.5, 2419.0], [81.6, 2419.0], [81.7, 2420.0], [81.8, 2420.0], [81.9, 2422.0], [82.0, 2432.0], [82.1, 2432.0], [82.2, 2434.0], [82.3, 2434.0], [82.4, 2438.0], [82.5, 2438.0], [82.6, 2439.0], [82.7, 2439.0], [82.8, 2439.0], [82.9, 2442.0], [83.0, 2442.0], [83.1, 2446.0], [83.2, 2447.0], [83.3, 2447.0], [83.4, 2448.0], [83.5, 2448.0], [83.6, 2449.0], [83.7, 2451.0], [83.8, 2451.0], [83.9, 2451.0], [84.0, 2451.0], [84.1, 2451.0], [84.2, 2454.0], [84.3, 2454.0], [84.4, 2468.0], [84.5, 2468.0], [84.6, 2487.0], [84.7, 2487.0], [84.8, 2487.0], [84.9, 2488.0], [85.0, 2488.0], [85.1, 2488.0], [85.2, 2488.0], [85.3, 2488.0], [85.4, 2489.0], [85.5, 2489.0], [85.6, 2489.0], [85.7, 2491.0], [85.8, 2491.0], [85.9, 2492.0], [86.0, 2492.0], [86.1, 2498.0], [86.2, 2506.0], [86.3, 2506.0], [86.4, 2509.0], [86.5, 2509.0], [86.6, 2510.0], [86.7, 2511.0], [86.8, 2511.0], [86.9, 2514.0], [87.0, 2514.0], [87.1, 2515.0], [87.2, 2515.0], [87.3, 2515.0], [87.4, 2517.0], [87.5, 2517.0], [87.6, 2519.0], [87.7, 2521.0], [87.8, 2521.0], [87.9, 2524.0], [88.0, 2524.0], [88.1, 2524.0], [88.2, 2527.0], [88.3, 2527.0], [88.4, 2527.0], [88.5, 2527.0], [88.6, 2532.0], [88.7, 2533.0], [88.8, 2533.0], [88.9, 2534.0], [89.0, 2534.0], [89.1, 2535.0], [89.2, 2535.0], [89.3, 2535.0], [89.4, 2536.0], [89.5, 2536.0], [89.6, 2537.0], [89.7, 2543.0], [89.8, 2543.0], [89.9, 2544.0], [90.0, 2544.0], [90.1, 2555.0], [90.2, 2555.0], [90.3, 2555.0], [90.4, 2561.0], [90.5, 2561.0], [90.6, 2562.0], [90.7, 2562.0], [90.8, 2562.0], [90.9, 2565.0], [91.0, 2565.0], [91.1, 2570.0], [91.2, 2572.0], [91.3, 2572.0], [91.4, 2572.0], [91.5, 2572.0], [91.6, 2573.0], [91.7, 2577.0], [91.8, 2577.0], [91.9, 2579.0], [92.0, 2579.0], [92.1, 2579.0], [92.2, 2579.0], [92.3, 2579.0], [92.4, 2585.0], [92.5, 2585.0], [92.6, 2591.0], [92.7, 2596.0], [92.8, 2596.0], [92.9, 2600.0], [93.0, 2600.0], [93.1, 2601.0], [93.2, 2601.0], [93.3, 2601.0], [93.4, 2603.0], [93.5, 2603.0], [93.6, 2603.0], [93.7, 2603.0], [93.8, 2603.0], [93.9, 2603.0], [94.0, 2603.0], [94.1, 2606.0], [94.2, 2609.0], [94.3, 2609.0], [94.4, 2612.0], [94.5, 2612.0], [94.6, 2613.0], [94.7, 2617.0], [94.8, 2617.0], [94.9, 2619.0], [95.0, 2619.0], [95.1, 2622.0], [95.2, 2624.0], [95.3, 2624.0], [95.4, 2626.0], [95.5, 2626.0], [95.6, 2628.0], [95.7, 2628.0], [95.8, 2628.0], [95.9, 2629.0], [96.0, 2629.0], [96.1, 2629.0], [96.2, 2631.0], [96.3, 2631.0], [96.4, 2639.0], [96.5, 2639.0], [96.6, 2640.0], [96.7, 2640.0], [96.8, 2640.0], [96.9, 2645.0], [97.0, 2645.0], [97.1, 2651.0], [97.2, 2652.0], [97.3, 2652.0], [97.4, 2652.0], [97.5, 2652.0], [97.6, 2652.0], [97.7, 2654.0], [97.8, 2654.0], [97.9, 2659.0], [98.0, 2659.0], [98.1, 2660.0], [98.2, 2661.0], [98.3, 2661.0], [98.4, 2665.0], [98.5, 2665.0], [98.6, 2669.0], [98.7, 2670.0], [98.8, 2670.0], [98.9, 2670.0], [99.0, 2670.0], [99.1, 2675.0], [99.2, 2679.0], [99.3, 2679.0], [99.4, 2687.0], [99.5, 2687.0], [99.6, 2724.0], [99.7, 2735.0], [99.8, 2735.0], [99.9, 2742.0], [100.0, 2742.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 400.0, "maxY": 50.0, "series": [{"data": [[2100.0, 27.0], [2200.0, 31.0], [2300.0, 50.0], [600.0, 13.0], [2400.0, 38.0], [2500.0, 40.0], [2600.0, 40.0], [700.0, 12.0], [2700.0, 3.0], [800.0, 19.0], [900.0, 37.0], [1000.0, 28.0], [1100.0, 33.0], [1200.0, 22.0], [1300.0, 36.0], [1400.0, 28.0], [1500.0, 28.0], [400.0, 5.0], [1600.0, 25.0], [1700.0, 22.0], [1800.0, 19.0], [1900.0, 20.0], [500.0, 6.0], [2000.0, 18.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 361.0, "series": [{"data": [[0.0, 5.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 234.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 361.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 32.65625, "minX": 1.6698231774E12, "maxY": 155.48387096774192, "series": [{"data": [[1.6698231774E12, 48.18750000000001], [1.6698231876E12, 32.65625], [1.669823184E12, 127.4], [1.6698231846E12, 136.92], [1.669823181E12, 86.47619047619048], [1.669823187E12, 84.05128205128209], [1.6698231834E12, 121.0909090909091], [1.6698231798E12, 72.99999999999999], [1.6698231804E12, 84.68421052631578], [1.6698231858E12, 148.00000000000003], [1.6698231864E12, 117.0], [1.6698231828E12, 115.17948717948718], [1.6698231792E12, 70.68], [1.6698231852E12, 155.48387096774192], [1.6698231816E12, 98.07692307692307], [1.669823178E12, 53.638888888888886], [1.6698231822E12, 111.5], [1.6698231786E12, 63.451612903225815]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698231876E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 645.0, "minX": 2.0, "maxY": 2628.0, "series": [{"data": [[2.0, 2113.0], [3.0, 2178.0], [5.0, 2194.5], [6.0, 2177.0], [7.0, 2280.0], [8.0, 2099.0], [10.0, 2364.0], [11.0, 2314.0], [12.0, 2408.0], [14.0, 2391.0], [15.0, 2436.5], [16.0, 2487.0], [17.0, 2488.0], [19.0, 2203.5], [20.0, 2158.0], [21.0, 2212.0], [23.0, 2241.5], [24.0, 2277.0], [25.0, 2304.0], [26.0, 2628.0], [27.0, 2379.0], [28.0, 2387.0], [29.0, 2395.0], [30.0, 2434.0], [31.0, 2561.0], [33.0, 2506.0], [32.0, 2510.0], [35.0, 2438.0], [34.0, 2585.0], [37.0, 2451.0], [36.0, 2451.0], [39.0, 1651.5], [38.0, 1226.0], [41.0, 1598.5], [40.0, 1641.5], [42.0, 1625.0], [43.0, 2519.0], [45.0, 1081.6], [44.0, 1290.0], [46.0, 1120.4], [47.0, 2603.0], [49.0, 1347.0], [48.0, 645.0], [51.0, 1128.8], [50.0, 1279.0], [53.0, 791.4285714285714], [52.0, 1076.8], [55.0, 1438.6666666666665], [54.0, 1785.25], [56.0, 771.7692307692308], [57.0, 1357.25], [59.0, 1220.0], [58.0, 2626.0], [61.0, 1167.375], [60.0, 1386.0], [63.0, 1174.0], [62.0, 1345.0], [67.0, 1861.5], [66.0, 1856.0], [65.0, 1205.7142857142858], [64.0, 1219.125], [71.0, 1274.5555555555557], [70.0, 1838.0], [69.0, 1891.25], [68.0, 1055.0], [75.0, 1351.7142857142856], [74.0, 1354.75], [73.0, 1300.4999999999998], [72.0, 1249.0000000000002], [77.0, 1492.6], [79.0, 1242.0], [78.0, 1688.6666666666667], [76.0, 1655.0], [80.0, 1501.6], [81.0, 1476.857142857143], [82.0, 1580.4], [83.0, 1552.4], [87.0, 1672.0], [86.0, 1664.75], [85.0, 1562.1666666666667], [84.0, 1489.857142857143], [89.0, 1640.0], [91.0, 1649.8], [90.0, 1766.0], [88.0, 1460.6], [92.0, 2024.5], [95.0, 1577.625], [94.0, 1882.3333333333333], [93.0, 2045.0], [99.0, 1742.5], [98.0, 1701.5], [97.0, 1865.3333333333333], [96.0, 1634.625], [100.0, 1625.5714285714287], [103.0, 1721.8], [102.0, 1743.6], [101.0, 1983.5], [104.0, 1863.6666666666667], [107.0, 1798.5], [106.0, 2047.5], [105.0, 2543.0], [109.0, 2121.5], [108.0, 2036.0], [110.0, 1757.5], [111.0, 1788.5714285714287], [113.0, 1765.6], [112.0, 1856.25], [115.0, 1883.4], [114.0, 1897.0], [116.0, 1795.75], [119.0, 2062.0], [118.0, 1878.5], [117.0, 1890.8333333333333], [122.0, 1976.8], [121.0, 1864.3333333333333], [120.0, 1841.4285714285713], [123.0, 2085.1666666666665], [124.0, 2107.25], [127.0, 2108.727272727273], [126.0, 2037.1538461538462], [125.0, 2167.1428571428573], [129.0, 2147.0], [132.0, 2182.0], [131.0, 2190.0], [130.0, 2230.0], [128.0, 2151.777777777778], [135.0, 2396.0], [134.0, 2368.0], [133.0, 2454.0], [139.0, 2309.5], [138.0, 2168.3333333333335], [140.0, 2265.6666666666665], [143.0, 2310.5], [142.0, 2376.0], [141.0, 2363.0], [137.0, 2252.0], [136.0, 2280.0], [144.0, 2295.4], [146.0, 2262.6666666666665], [145.0, 2212.3333333333335], [150.0, 2317.5], [151.0, 2334.0], [149.0, 2364.0], [148.0, 2402.0], [147.0, 2572.0], [152.0, 2306.0], [154.0, 2277.714285714286], [153.0, 2336.3333333333335], [155.0, 2304.3333333333335], [157.0, 2394.0], [158.0, 2334.5714285714284], [156.0, 2398.0], [159.0, 2389.5], [162.0, 2299.0], [161.0, 2419.0], [160.0, 2358.6666666666665]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[91.93333333333332, 1742.1050000000007]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 162.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 4550.0, "minX": 1.6698231774E12, "maxY": 78933.33333333333, "series": [{"data": [[1.6698231774E12, 39466.666666666664], [1.6698231876E12, 78933.33333333333], [1.669823184E12, 43166.666666666664], [1.6698231846E12, 30833.333333333332], [1.669823181E12, 25900.0], [1.669823187E12, 48100.0], [1.6698231834E12, 27133.333333333332], [1.6698231798E12, 41933.333333333336], [1.6698231804E12, 46866.666666666664], [1.6698231858E12, 44400.0], [1.6698231864E12, 33300.0], [1.6698231828E12, 48100.0], [1.6698231792E12, 30833.333333333332], [1.6698231852E12, 38233.333333333336], [1.6698231816E12, 48100.0], [1.669823178E12, 44400.0], [1.6698231822E12, 32066.666666666668], [1.6698231786E12, 38233.333333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6698231774E12, 6933.333333333333], [1.6698231876E12, 13866.666666666666], [1.669823184E12, 7583.333333333333], [1.6698231846E12, 5416.666666666667], [1.669823181E12, 4550.0], [1.669823187E12, 8450.0], [1.6698231834E12, 4766.666666666667], [1.6698231798E12, 7366.666666666667], [1.6698231804E12, 8233.333333333334], [1.6698231858E12, 7800.0], [1.6698231864E12, 5850.0], [1.6698231828E12, 8450.0], [1.6698231792E12, 5416.666666666667], [1.6698231852E12, 6716.666666666667], [1.6698231816E12, 8450.0], [1.669823178E12, 7800.0], [1.6698231822E12, 5633.333333333333], [1.6698231786E12, 6716.666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698231876E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 637.09375, "minX": 1.6698231774E12, "maxY": 2596.538461538462, "series": [{"data": [[1.6698231774E12, 637.09375], [1.6698231876E12, 2450.5312500000005], [1.669823184E12, 2064.142857142857], [1.6698231846E12, 2191.3199999999993], [1.669823181E12, 1368.1904761904764], [1.669823187E12, 2596.538461538462], [1.6698231834E12, 1895.8636363636365], [1.6698231798E12, 1118.2941176470586], [1.6698231804E12, 1315.7368421052631], [1.6698231858E12, 2359.6388888888896], [1.6698231864E12, 2480.222222222222], [1.6698231828E12, 1726.6410256410259], [1.6698231792E12, 1065.92], [1.6698231852E12, 2340.483870967741], [1.6698231816E12, 1491.948717948718], [1.669823178E12, 865.3611111111112], [1.6698231822E12, 1629.2307692307693], [1.6698231786E12, 1004.3225806451612]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698231876E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 634.4374999999999, "minX": 1.6698231774E12, "maxY": 2596.3333333333335, "series": [{"data": [[1.6698231774E12, 634.4374999999999], [1.6698231876E12, 2450.468750000001], [1.669823184E12, 2063.657142857143], [1.6698231846E12, 2190.6000000000004], [1.669823181E12, 1367.8095238095239], [1.669823187E12, 2596.3333333333335], [1.6698231834E12, 1895.6818181818182], [1.6698231798E12, 1117.911764705882], [1.6698231804E12, 1315.5], [1.6698231858E12, 2359.166666666667], [1.6698231864E12, 2479.962962962963], [1.6698231828E12, 1726.3589743589744], [1.6698231792E12, 1065.7600000000002], [1.6698231852E12, 2340.322580645161], [1.6698231816E12, 1491.179487179487], [1.669823178E12, 865.0833333333331], [1.6698231822E12, 1628.730769230769], [1.6698231786E12, 1003.4516129032257]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698231876E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.8064516129032258, "minX": 1.6698231774E12, "maxY": 21.5, "series": [{"data": [[1.6698231774E12, 21.5], [1.6698231876E12, 0.8281250000000001], [1.669823184E12, 0.857142857142857], [1.6698231846E12, 0.9599999999999999], [1.669823181E12, 0.857142857142857], [1.669823187E12, 0.9743589743589745], [1.6698231834E12, 0.9545454545454546], [1.6698231798E12, 0.9705882352941179], [1.6698231804E12, 0.9210526315789473], [1.6698231858E12, 0.9444444444444445], [1.6698231864E12, 0.8518518518518516], [1.6698231828E12, 0.8461538461538461], [1.6698231792E12, 1.0], [1.6698231852E12, 0.8064516129032258], [1.6698231816E12, 1.3846153846153848], [1.669823178E12, 1.5833333333333335], [1.6698231822E12, 0.8076923076923076], [1.6698231786E12, 1.2903225806451617]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698231876E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 431.0, "minX": 1.6698231774E12, "maxY": 2742.0, "series": [{"data": [[1.6698231774E12, 903.0], [1.6698231876E12, 2679.0], [1.669823184E12, 2301.0], [1.6698231846E12, 2532.0], [1.669823181E12, 1515.0], [1.669823187E12, 2742.0], [1.6698231834E12, 2165.0], [1.6698231798E12, 1232.0], [1.6698231804E12, 1409.0], [1.6698231858E12, 2572.0], [1.6698231864E12, 2735.0], [1.6698231828E12, 1935.0], [1.6698231792E12, 1304.0], [1.6698231852E12, 2687.0], [1.6698231816E12, 1616.0], [1.669823178E12, 1132.0], [1.6698231822E12, 1973.0], [1.6698231786E12, 1141.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6698231774E12, 835.0], [1.6698231876E12, 2639.5], [1.669823184E12, 2230.7999999999997], [1.6698231846E12, 2401.2000000000003], [1.669823181E12, 1487.0], [1.669823187E12, 2669.0], [1.6698231834E12, 2016.3], [1.6698231798E12, 1174.5], [1.6698231804E12, 1380.6], [1.6698231858E12, 2463.9], [1.6698231864E12, 2589.0], [1.6698231828E12, 1831.0], [1.6698231792E12, 1219.2], [1.6698231852E12, 2509.8], [1.6698231816E12, 1594.0], [1.669823178E12, 999.8000000000001], [1.6698231822E12, 1733.8], [1.6698231786E12, 1106.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6698231774E12, 903.0], [1.6698231876E12, 2679.0], [1.669823184E12, 2301.0], [1.6698231846E12, 2532.0], [1.669823181E12, 1515.0], [1.669823187E12, 2742.0], [1.6698231834E12, 2165.0], [1.6698231798E12, 1232.0], [1.6698231804E12, 1409.0], [1.6698231858E12, 2572.0], [1.6698231864E12, 2735.0], [1.6698231828E12, 1935.0], [1.6698231792E12, 1304.0], [1.6698231852E12, 2687.0], [1.6698231816E12, 1616.0], [1.669823178E12, 1132.0], [1.6698231822E12, 1973.0], [1.6698231786E12, 1141.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6698231774E12, 867.2499999999999], [1.6698231876E12, 2665.5], [1.669823184E12, 2281.7999999999997], [1.6698231846E12, 2504.1], [1.669823181E12, 1512.7], [1.669823187E12, 2724.0], [1.6698231834E12, 2143.9999999999995], [1.6698231798E12, 1226.75], [1.6698231804E12, 1396.6499999999999], [1.6698231858E12, 2500.6], [1.6698231864E12, 2692.6], [1.6698231828E12, 1849.0], [1.6698231792E12, 1285.3999999999999], [1.6698231852E12, 2594.6], [1.6698231816E12, 1599.0], [1.669823178E12, 1047.85], [1.6698231822E12, 1893.1999999999996], [1.6698231786E12, 1138.6]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6698231774E12, 431.0], [1.6698231876E12, 2099.0], [1.669823184E12, 1878.0], [1.6698231846E12, 1935.0], [1.669823181E12, 1249.0], [1.669823187E12, 2446.0], [1.6698231834E12, 1745.0], [1.6698231798E12, 1034.0], [1.6698231804E12, 1230.0], [1.6698231858E12, 2208.0], [1.6698231864E12, 2323.0], [1.6698231828E12, 1564.0], [1.6698231792E12, 905.0], [1.6698231852E12, 2163.0], [1.6698231816E12, 1387.0], [1.669823178E12, 632.0], [1.6698231822E12, 1481.0], [1.6698231786E12, 903.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6698231774E12, 641.5], [1.6698231876E12, 2488.0], [1.669823184E12, 2059.0], [1.6698231846E12, 2187.0], [1.669823181E12, 1372.0], [1.669823187E12, 2603.0], [1.6698231834E12, 1890.0], [1.6698231798E12, 1127.5], [1.6698231804E12, 1322.5], [1.6698231858E12, 2368.5], [1.6698231864E12, 2492.0], [1.6698231828E12, 1728.0], [1.6698231792E12, 1051.0], [1.6698231852E12, 2336.0], [1.6698231816E12, 1484.0], [1.669823178E12, 864.5], [1.6698231822E12, 1615.5], [1.6698231786E12, 994.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698231876E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 641.5, "minX": 8.0, "maxY": 2572.0, "series": [{"data": [[32.0, 641.5], [8.0, 2169.5], [39.0, 1607.0], [95.0, 2572.0], [48.0, 2416.0], [52.0, 1861.0], [54.0, 1278.5], [56.0, 1434.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 640.5, "minX": 8.0, "maxY": 2572.0, "series": [{"data": [[32.0, 640.5], [8.0, 2169.0], [39.0, 1606.0], [95.0, 2572.0], [48.0, 2416.0], [52.0, 1852.5], [54.0, 1278.5], [56.0, 1434.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 95.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 11.666666666666666, "minX": 1.6698231768E12, "maxY": 85.0, "series": [{"data": [[1.6698231774E12, 61.666666666666664], [1.669823184E12, 58.333333333333336], [1.6698231846E12, 85.0], [1.669823181E12, 70.0], [1.6698231834E12, 58.333333333333336], [1.6698231798E12, 60.0], [1.6698231804E12, 65.0], [1.6698231768E12, 78.33333333333333], [1.6698231858E12, 11.666666666666666], [1.6698231828E12, 60.0], [1.6698231792E12, 61.666666666666664], [1.6698231852E12, 65.0], [1.6698231816E12, 68.33333333333333], [1.669823178E12, 65.0], [1.6698231822E12, 65.0], [1.6698231786E12, 66.66666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698231858E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 35.0, "minX": 1.6698231774E12, "maxY": 106.66666666666667, "series": [{"data": [[1.6698231774E12, 53.333333333333336], [1.6698231876E12, 106.66666666666667], [1.669823184E12, 58.333333333333336], [1.6698231846E12, 41.666666666666664], [1.669823181E12, 35.0], [1.669823187E12, 65.0], [1.6698231834E12, 36.666666666666664], [1.6698231798E12, 56.666666666666664], [1.6698231804E12, 63.333333333333336], [1.6698231858E12, 60.0], [1.6698231864E12, 45.0], [1.6698231828E12, 65.0], [1.6698231792E12, 41.666666666666664], [1.6698231852E12, 51.666666666666664], [1.6698231816E12, 65.0], [1.669823178E12, 60.0], [1.6698231822E12, 43.333333333333336], [1.6698231786E12, 51.666666666666664]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698231876E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 35.0, "minX": 1.6698231774E12, "maxY": 106.66666666666667, "series": [{"data": [[1.6698231774E12, 53.333333333333336], [1.6698231876E12, 106.66666666666667], [1.669823184E12, 58.333333333333336], [1.6698231846E12, 41.666666666666664], [1.669823181E12, 35.0], [1.669823187E12, 65.0], [1.6698231834E12, 36.666666666666664], [1.6698231798E12, 56.666666666666664], [1.6698231804E12, 63.333333333333336], [1.6698231858E12, 60.0], [1.6698231864E12, 45.0], [1.6698231828E12, 65.0], [1.6698231792E12, 41.666666666666664], [1.6698231852E12, 51.666666666666664], [1.6698231816E12, 65.0], [1.669823178E12, 60.0], [1.6698231822E12, 43.333333333333336], [1.6698231786E12, 51.666666666666664]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698231876E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 35.0, "minX": 1.6698231774E12, "maxY": 106.66666666666667, "series": [{"data": [[1.6698231774E12, 53.333333333333336], [1.6698231876E12, 106.66666666666667], [1.669823184E12, 58.333333333333336], [1.6698231846E12, 41.666666666666664], [1.669823181E12, 35.0], [1.669823187E12, 65.0], [1.6698231834E12, 36.666666666666664], [1.6698231798E12, 56.666666666666664], [1.6698231804E12, 63.333333333333336], [1.6698231858E12, 60.0], [1.6698231864E12, 45.0], [1.6698231828E12, 65.0], [1.6698231792E12, 41.666666666666664], [1.6698231852E12, 51.666666666666664], [1.6698231816E12, 65.0], [1.669823178E12, 60.0], [1.6698231822E12, 43.333333333333336], [1.6698231786E12, 51.666666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698231876E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

