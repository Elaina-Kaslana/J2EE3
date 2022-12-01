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
        data: {"result": {"minY": 769.0, "minX": 0.0, "maxY": 2611.0, "series": [{"data": [[0.0, 769.0], [0.1, 769.0], [0.2, 836.0], [0.3, 836.0], [0.4, 842.0], [0.5, 844.0], [0.6, 844.0], [0.7, 867.0], [0.8, 867.0], [0.9, 893.0], [1.0, 894.0], [1.1, 894.0], [1.2, 894.0], [1.3, 894.0], [1.4, 899.0], [1.5, 905.0], [1.6, 905.0], [1.7, 906.0], [1.8, 906.0], [1.9, 916.0], [2.0, 922.0], [2.1, 922.0], [2.2, 933.0], [2.3, 933.0], [2.4, 940.0], [2.5, 950.0], [2.6, 950.0], [2.7, 954.0], [2.8, 954.0], [2.9, 969.0], [3.0, 970.0], [3.1, 970.0], [3.2, 980.0], [3.3, 980.0], [3.4, 1011.0], [3.5, 1017.0], [3.6, 1017.0], [3.7, 1039.0], [3.8, 1039.0], [3.9, 1040.0], [4.0, 1043.0], [4.1, 1043.0], [4.2, 1053.0], [4.3, 1053.0], [4.4, 1062.0], [4.5, 1065.0], [4.6, 1065.0], [4.7, 1079.0], [4.8, 1079.0], [4.9, 1087.0], [5.0, 1088.0], [5.1, 1088.0], [5.2, 1090.0], [5.3, 1090.0], [5.4, 1091.0], [5.5, 1091.0], [5.6, 1092.0], [5.7, 1095.0], [5.8, 1095.0], [5.9, 1095.0], [6.0, 1095.0], [6.1, 1097.0], [6.2, 1100.0], [6.3, 1100.0], [6.4, 1102.0], [6.5, 1102.0], [6.6, 1105.0], [6.7, 1111.0], [6.8, 1111.0], [6.9, 1127.0], [7.0, 1127.0], [7.1, 1132.0], [7.2, 1136.0], [7.3, 1136.0], [7.4, 1139.0], [7.5, 1139.0], [7.6, 1149.0], [7.7, 1162.0], [7.8, 1162.0], [7.9, 1163.0], [8.0, 1163.0], [8.1, 1166.0], [8.2, 1174.0], [8.3, 1174.0], [8.4, 1180.0], [8.5, 1180.0], [8.6, 1183.0], [8.7, 1187.0], [8.8, 1187.0], [8.9, 1189.0], [9.0, 1194.0], [9.1, 1194.0], [9.2, 1200.0], [9.3, 1200.0], [9.4, 1206.0], [9.5, 1207.0], [9.6, 1207.0], [9.7, 1224.0], [9.8, 1224.0], [9.9, 1226.0], [10.0, 1227.0], [10.1, 1227.0], [10.2, 1229.0], [10.3, 1229.0], [10.4, 1233.0], [10.5, 1236.0], [10.6, 1236.0], [10.7, 1237.0], [10.8, 1237.0], [10.9, 1256.0], [11.0, 1261.0], [11.1, 1261.0], [11.2, 1261.0], [11.3, 1261.0], [11.4, 1271.0], [11.5, 1283.0], [11.6, 1283.0], [11.7, 1288.0], [11.8, 1288.0], [11.9, 1297.0], [12.0, 1309.0], [12.1, 1309.0], [12.2, 1313.0], [12.3, 1313.0], [12.4, 1324.0], [12.5, 1326.0], [12.6, 1326.0], [12.7, 1327.0], [12.8, 1327.0], [12.9, 1328.0], [13.0, 1332.0], [13.1, 1332.0], [13.2, 1333.0], [13.3, 1333.0], [13.4, 1333.0], [13.5, 1336.0], [13.6, 1336.0], [13.7, 1345.0], [13.8, 1345.0], [13.9, 1346.0], [14.0, 1349.0], [14.1, 1349.0], [14.2, 1352.0], [14.3, 1352.0], [14.4, 1352.0], [14.5, 1358.0], [14.6, 1358.0], [14.7, 1363.0], [14.8, 1363.0], [14.9, 1363.0], [15.0, 1370.0], [15.1, 1370.0], [15.2, 1372.0], [15.3, 1372.0], [15.4, 1373.0], [15.5, 1375.0], [15.6, 1375.0], [15.7, 1381.0], [15.8, 1381.0], [15.9, 1384.0], [16.0, 1390.0], [16.1, 1390.0], [16.2, 1395.0], [16.3, 1395.0], [16.4, 1405.0], [16.5, 1408.0], [16.6, 1408.0], [16.7, 1409.0], [16.8, 1409.0], [16.9, 1409.0], [17.0, 1411.0], [17.1, 1411.0], [17.2, 1412.0], [17.3, 1412.0], [17.4, 1415.0], [17.5, 1415.0], [17.6, 1415.0], [17.7, 1417.0], [17.8, 1417.0], [17.9, 1429.0], [18.0, 1434.0], [18.1, 1434.0], [18.2, 1441.0], [18.3, 1441.0], [18.4, 1448.0], [18.5, 1449.0], [18.6, 1449.0], [18.7, 1450.0], [18.8, 1450.0], [18.9, 1461.0], [19.0, 1462.0], [19.1, 1462.0], [19.2, 1465.0], [19.3, 1465.0], [19.4, 1467.0], [19.5, 1470.0], [19.6, 1470.0], [19.7, 1472.0], [19.8, 1472.0], [19.9, 1475.0], [20.0, 1475.0], [20.1, 1477.0], [20.2, 1481.0], [20.3, 1481.0], [20.4, 1481.0], [20.5, 1481.0], [20.6, 1486.0], [20.7, 1488.0], [20.8, 1488.0], [20.9, 1492.0], [21.0, 1492.0], [21.1, 1492.0], [21.2, 1493.0], [21.3, 1493.0], [21.4, 1503.0], [21.5, 1503.0], [21.6, 1509.0], [21.7, 1510.0], [21.8, 1510.0], [21.9, 1511.0], [22.0, 1511.0], [22.1, 1513.0], [22.2, 1514.0], [22.3, 1514.0], [22.4, 1517.0], [22.5, 1517.0], [22.6, 1523.0], [22.7, 1524.0], [22.8, 1524.0], [22.9, 1527.0], [23.0, 1527.0], [23.1, 1527.0], [23.2, 1531.0], [23.3, 1531.0], [23.4, 1531.0], [23.5, 1531.0], [23.6, 1532.0], [23.7, 1533.0], [23.8, 1533.0], [23.9, 1535.0], [24.0, 1535.0], [24.1, 1539.0], [24.2, 1548.0], [24.3, 1548.0], [24.4, 1548.0], [24.5, 1548.0], [24.6, 1554.0], [24.7, 1555.0], [24.8, 1555.0], [24.9, 1556.0], [25.0, 1556.0], [25.1, 1558.0], [25.2, 1559.0], [25.3, 1559.0], [25.4, 1559.0], [25.5, 1559.0], [25.6, 1560.0], [25.7, 1563.0], [25.8, 1563.0], [25.9, 1565.0], [26.0, 1565.0], [26.1, 1566.0], [26.2, 1569.0], [26.3, 1569.0], [26.4, 1572.0], [26.5, 1572.0], [26.6, 1573.0], [26.7, 1574.0], [26.8, 1574.0], [26.9, 1576.0], [27.0, 1576.0], [27.1, 1577.0], [27.2, 1578.0], [27.3, 1578.0], [27.4, 1579.0], [27.5, 1579.0], [27.6, 1579.0], [27.7, 1581.0], [27.8, 1581.0], [27.9, 1581.0], [28.0, 1581.0], [28.1, 1581.0], [28.2, 1582.0], [28.3, 1582.0], [28.4, 1582.0], [28.5, 1582.0], [28.6, 1584.0], [28.7, 1584.0], [28.8, 1584.0], [28.9, 1585.0], [29.0, 1585.0], [29.1, 1588.0], [29.2, 1589.0], [29.3, 1589.0], [29.4, 1589.0], [29.5, 1589.0], [29.6, 1591.0], [29.7, 1591.0], [29.8, 1591.0], [29.9, 1592.0], [30.0, 1592.0], [30.1, 1596.0], [30.2, 1599.0], [30.3, 1599.0], [30.4, 1601.0], [30.5, 1601.0], [30.6, 1601.0], [30.7, 1607.0], [30.8, 1607.0], [30.9, 1608.0], [31.0, 1608.0], [31.1, 1612.0], [31.2, 1614.0], [31.3, 1614.0], [31.4, 1614.0], [31.5, 1614.0], [31.6, 1615.0], [31.7, 1617.0], [31.8, 1617.0], [31.9, 1617.0], [32.0, 1617.0], [32.1, 1617.0], [32.2, 1621.0], [32.3, 1621.0], [32.4, 1622.0], [32.5, 1622.0], [32.6, 1625.0], [32.7, 1625.0], [32.8, 1625.0], [32.9, 1626.0], [33.0, 1626.0], [33.1, 1632.0], [33.2, 1633.0], [33.3, 1633.0], [33.4, 1635.0], [33.5, 1635.0], [33.6, 1639.0], [33.7, 1640.0], [33.8, 1640.0], [33.9, 1643.0], [34.0, 1643.0], [34.1, 1650.0], [34.2, 1654.0], [34.3, 1654.0], [34.4, 1654.0], [34.5, 1654.0], [34.6, 1655.0], [34.7, 1655.0], [34.8, 1655.0], [34.9, 1655.0], [35.0, 1655.0], [35.1, 1659.0], [35.2, 1660.0], [35.3, 1660.0], [35.4, 1663.0], [35.5, 1663.0], [35.6, 1665.0], [35.7, 1667.0], [35.8, 1667.0], [35.9, 1671.0], [36.0, 1671.0], [36.1, 1671.0], [36.2, 1675.0], [36.3, 1675.0], [36.4, 1677.0], [36.5, 1681.0], [36.6, 1681.0], [36.7, 1681.0], [36.8, 1681.0], [36.9, 1682.0], [37.0, 1683.0], [37.1, 1683.0], [37.2, 1687.0], [37.3, 1687.0], [37.4, 1689.0], [37.5, 1690.0], [37.6, 1690.0], [37.7, 1692.0], [37.8, 1692.0], [37.9, 1693.0], [38.0, 1697.0], [38.1, 1697.0], [38.2, 1700.0], [38.3, 1700.0], [38.4, 1702.0], [38.5, 1702.0], [38.6, 1702.0], [38.7, 1703.0], [38.8, 1703.0], [38.9, 1706.0], [39.0, 1709.0], [39.1, 1709.0], [39.2, 1713.0], [39.3, 1713.0], [39.4, 1713.0], [39.5, 1713.0], [39.6, 1713.0], [39.7, 1717.0], [39.8, 1717.0], [39.9, 1721.0], [40.0, 1722.0], [40.1, 1722.0], [40.2, 1722.0], [40.3, 1722.0], [40.4, 1725.0], [40.5, 1729.0], [40.6, 1729.0], [40.7, 1730.0], [40.8, 1730.0], [40.9, 1731.0], [41.0, 1732.0], [41.1, 1732.0], [41.2, 1734.0], [41.3, 1734.0], [41.4, 1735.0], [41.5, 1736.0], [41.6, 1736.0], [41.7, 1737.0], [41.8, 1737.0], [41.9, 1737.0], [42.0, 1737.0], [42.1, 1737.0], [42.2, 1738.0], [42.3, 1738.0], [42.4, 1739.0], [42.5, 1741.0], [42.6, 1741.0], [42.7, 1741.0], [42.8, 1741.0], [42.9, 1742.0], [43.0, 1743.0], [43.1, 1743.0], [43.2, 1743.0], [43.3, 1743.0], [43.4, 1744.0], [43.5, 1745.0], [43.6, 1745.0], [43.7, 1749.0], [43.8, 1749.0], [43.9, 1749.0], [44.0, 1753.0], [44.1, 1753.0], [44.2, 1753.0], [44.3, 1753.0], [44.4, 1756.0], [44.5, 1757.0], [44.6, 1757.0], [44.7, 1759.0], [44.8, 1759.0], [44.9, 1761.0], [45.0, 1761.0], [45.1, 1761.0], [45.2, 1763.0], [45.3, 1763.0], [45.4, 1763.0], [45.5, 1765.0], [45.6, 1765.0], [45.7, 1765.0], [45.8, 1765.0], [45.9, 1765.0], [46.0, 1766.0], [46.1, 1766.0], [46.2, 1769.0], [46.3, 1769.0], [46.4, 1772.0], [46.5, 1772.0], [46.6, 1772.0], [46.7, 1774.0], [46.8, 1774.0], [46.9, 1776.0], [47.0, 1777.0], [47.1, 1777.0], [47.2, 1779.0], [47.3, 1779.0], [47.4, 1780.0], [47.5, 1782.0], [47.6, 1782.0], [47.7, 1782.0], [47.8, 1782.0], [47.9, 1786.0], [48.0, 1789.0], [48.1, 1789.0], [48.2, 1794.0], [48.3, 1794.0], [48.4, 1795.0], [48.5, 1796.0], [48.6, 1796.0], [48.7, 1799.0], [48.8, 1799.0], [48.9, 1800.0], [49.0, 1803.0], [49.1, 1803.0], [49.2, 1804.0], [49.3, 1804.0], [49.4, 1804.0], [49.5, 1807.0], [49.6, 1807.0], [49.7, 1808.0], [49.8, 1808.0], [49.9, 1809.0], [50.0, 1810.0], [50.1, 1810.0], [50.2, 1811.0], [50.3, 1811.0], [50.4, 1814.0], [50.5, 1815.0], [50.6, 1815.0], [50.7, 1817.0], [50.8, 1817.0], [50.9, 1819.0], [51.0, 1820.0], [51.1, 1820.0], [51.2, 1821.0], [51.3, 1821.0], [51.4, 1824.0], [51.5, 1826.0], [51.6, 1826.0], [51.7, 1827.0], [51.8, 1827.0], [51.9, 1831.0], [52.0, 1834.0], [52.1, 1834.0], [52.2, 1836.0], [52.3, 1836.0], [52.4, 1841.0], [52.5, 1841.0], [52.6, 1841.0], [52.7, 1843.0], [52.8, 1843.0], [52.9, 1845.0], [53.0, 1846.0], [53.1, 1846.0], [53.2, 1847.0], [53.3, 1847.0], [53.4, 1851.0], [53.5, 1855.0], [53.6, 1855.0], [53.7, 1857.0], [53.8, 1857.0], [53.9, 1858.0], [54.0, 1860.0], [54.1, 1860.0], [54.2, 1862.0], [54.3, 1862.0], [54.4, 1862.0], [54.5, 1863.0], [54.6, 1863.0], [54.7, 1866.0], [54.8, 1866.0], [54.9, 1866.0], [55.0, 1867.0], [55.1, 1867.0], [55.2, 1869.0], [55.3, 1869.0], [55.4, 1870.0], [55.5, 1870.0], [55.6, 1870.0], [55.7, 1873.0], [55.8, 1873.0], [55.9, 1875.0], [56.0, 1878.0], [56.1, 1878.0], [56.2, 1879.0], [56.3, 1879.0], [56.4, 1886.0], [56.5, 1886.0], [56.6, 1886.0], [56.7, 1888.0], [56.8, 1888.0], [56.9, 1889.0], [57.0, 1892.0], [57.1, 1892.0], [57.2, 1892.0], [57.3, 1892.0], [57.4, 1892.0], [57.5, 1893.0], [57.6, 1893.0], [57.7, 1894.0], [57.8, 1894.0], [57.9, 1895.0], [58.0, 1901.0], [58.1, 1901.0], [58.2, 1903.0], [58.3, 1903.0], [58.4, 1903.0], [58.5, 1904.0], [58.6, 1904.0], [58.7, 1905.0], [58.8, 1905.0], [58.9, 1905.0], [59.0, 1906.0], [59.1, 1906.0], [59.2, 1909.0], [59.3, 1909.0], [59.4, 1910.0], [59.5, 1913.0], [59.6, 1913.0], [59.7, 1913.0], [59.8, 1913.0], [59.9, 1913.0], [60.0, 1914.0], [60.1, 1914.0], [60.2, 1915.0], [60.3, 1915.0], [60.4, 1916.0], [60.5, 1918.0], [60.6, 1918.0], [60.7, 1919.0], [60.8, 1919.0], [60.9, 1920.0], [61.0, 1920.0], [61.1, 1920.0], [61.2, 1921.0], [61.3, 1921.0], [61.4, 1922.0], [61.5, 1925.0], [61.6, 1925.0], [61.7, 1926.0], [61.8, 1926.0], [61.9, 1928.0], [62.0, 1929.0], [62.1, 1929.0], [62.2, 1930.0], [62.3, 1930.0], [62.4, 1931.0], [62.5, 1933.0], [62.6, 1933.0], [62.7, 1934.0], [62.8, 1934.0], [62.9, 1935.0], [63.0, 1936.0], [63.1, 1936.0], [63.2, 1939.0], [63.3, 1939.0], [63.4, 1939.0], [63.5, 1942.0], [63.6, 1942.0], [63.7, 1942.0], [63.8, 1942.0], [63.9, 1946.0], [64.0, 1946.0], [64.1, 1946.0], [64.2, 1947.0], [64.3, 1947.0], [64.4, 1950.0], [64.5, 1951.0], [64.6, 1951.0], [64.7, 1956.0], [64.8, 1956.0], [64.9, 1957.0], [65.0, 1957.0], [65.1, 1957.0], [65.2, 1958.0], [65.3, 1958.0], [65.4, 1961.0], [65.5, 1962.0], [65.6, 1962.0], [65.7, 1963.0], [65.8, 1963.0], [65.9, 1963.0], [66.0, 1964.0], [66.1, 1964.0], [66.2, 1966.0], [66.3, 1966.0], [66.4, 1968.0], [66.5, 1969.0], [66.6, 1969.0], [66.7, 1970.0], [66.8, 1970.0], [66.9, 1971.0], [67.0, 1971.0], [67.1, 1971.0], [67.2, 1976.0], [67.3, 1976.0], [67.4, 1977.0], [67.5, 1978.0], [67.6, 1978.0], [67.7, 1981.0], [67.8, 1981.0], [67.9, 1981.0], [68.0, 1981.0], [68.1, 1981.0], [68.2, 1981.0], [68.3, 1981.0], [68.4, 1983.0], [68.5, 1985.0], [68.6, 1985.0], [68.7, 1986.0], [68.8, 1986.0], [68.9, 1987.0], [69.0, 1990.0], [69.1, 1990.0], [69.2, 1992.0], [69.3, 1992.0], [69.4, 1993.0], [69.5, 1994.0], [69.6, 1994.0], [69.7, 1994.0], [69.8, 1994.0], [69.9, 1995.0], [70.0, 1996.0], [70.1, 1996.0], [70.2, 1997.0], [70.3, 1997.0], [70.4, 1998.0], [70.5, 1999.0], [70.6, 1999.0], [70.7, 2000.0], [70.8, 2000.0], [70.9, 2000.0], [71.0, 2001.0], [71.1, 2001.0], [71.2, 2003.0], [71.3, 2003.0], [71.4, 2006.0], [71.5, 2008.0], [71.6, 2008.0], [71.7, 2010.0], [71.8, 2010.0], [71.9, 2012.0], [72.0, 2013.0], [72.1, 2013.0], [72.2, 2013.0], [72.3, 2013.0], [72.4, 2014.0], [72.5, 2015.0], [72.6, 2015.0], [72.7, 2015.0], [72.8, 2015.0], [72.9, 2019.0], [73.0, 2022.0], [73.1, 2022.0], [73.2, 2024.0], [73.3, 2024.0], [73.4, 2026.0], [73.5, 2027.0], [73.6, 2027.0], [73.7, 2027.0], [73.8, 2027.0], [73.9, 2028.0], [74.0, 2028.0], [74.1, 2028.0], [74.2, 2028.0], [74.3, 2028.0], [74.4, 2030.0], [74.5, 2031.0], [74.6, 2031.0], [74.7, 2031.0], [74.8, 2031.0], [74.9, 2032.0], [75.0, 2034.0], [75.1, 2034.0], [75.2, 2034.0], [75.3, 2034.0], [75.4, 2034.0], [75.5, 2036.0], [75.6, 2036.0], [75.7, 2036.0], [75.8, 2036.0], [75.9, 2038.0], [76.0, 2040.0], [76.1, 2040.0], [76.2, 2040.0], [76.3, 2040.0], [76.4, 2040.0], [76.5, 2042.0], [76.6, 2042.0], [76.7, 2042.0], [76.8, 2042.0], [76.9, 2045.0], [77.0, 2048.0], [77.1, 2048.0], [77.2, 2049.0], [77.3, 2049.0], [77.4, 2050.0], [77.5, 2055.0], [77.6, 2055.0], [77.7, 2056.0], [77.8, 2056.0], [77.9, 2056.0], [78.0, 2057.0], [78.1, 2057.0], [78.2, 2057.0], [78.3, 2057.0], [78.4, 2058.0], [78.5, 2061.0], [78.6, 2061.0], [78.7, 2061.0], [78.8, 2061.0], [78.9, 2064.0], [79.0, 2073.0], [79.1, 2073.0], [79.2, 2074.0], [79.3, 2074.0], [79.4, 2075.0], [79.5, 2075.0], [79.6, 2075.0], [79.7, 2076.0], [79.8, 2076.0], [79.9, 2076.0], [80.0, 2076.0], [80.1, 2076.0], [80.2, 2078.0], [80.3, 2078.0], [80.4, 2078.0], [80.5, 2079.0], [80.6, 2079.0], [80.7, 2082.0], [80.8, 2082.0], [80.9, 2083.0], [81.0, 2088.0], [81.1, 2088.0], [81.2, 2089.0], [81.3, 2089.0], [81.4, 2090.0], [81.5, 2091.0], [81.6, 2091.0], [81.7, 2092.0], [81.8, 2092.0], [81.9, 2094.0], [82.0, 2094.0], [82.1, 2095.0], [82.2, 2096.0], [82.3, 2096.0], [82.4, 2096.0], [82.5, 2096.0], [82.6, 2100.0], [82.7, 2102.0], [82.8, 2102.0], [82.9, 2104.0], [83.0, 2104.0], [83.1, 2105.0], [83.2, 2105.0], [83.3, 2105.0], [83.4, 2106.0], [83.5, 2106.0], [83.6, 2107.0], [83.7, 2107.0], [83.8, 2107.0], [83.9, 2111.0], [84.0, 2111.0], [84.1, 2112.0], [84.2, 2116.0], [84.3, 2116.0], [84.4, 2117.0], [84.5, 2117.0], [84.6, 2118.0], [84.7, 2119.0], [84.8, 2119.0], [84.9, 2120.0], [85.0, 2120.0], [85.1, 2121.0], [85.2, 2127.0], [85.3, 2127.0], [85.4, 2131.0], [85.5, 2131.0], [85.6, 2132.0], [85.7, 2132.0], [85.8, 2132.0], [85.9, 2134.0], [86.0, 2134.0], [86.1, 2136.0], [86.2, 2139.0], [86.3, 2139.0], [86.4, 2142.0], [86.5, 2142.0], [86.6, 2148.0], [86.7, 2149.0], [86.8, 2149.0], [86.9, 2150.0], [87.0, 2150.0], [87.1, 2151.0], [87.2, 2154.0], [87.3, 2154.0], [87.4, 2155.0], [87.5, 2155.0], [87.6, 2156.0], [87.7, 2156.0], [87.8, 2156.0], [87.9, 2157.0], [88.0, 2157.0], [88.1, 2157.0], [88.2, 2158.0], [88.3, 2158.0], [88.4, 2159.0], [88.5, 2159.0], [88.6, 2163.0], [88.7, 2164.0], [88.8, 2164.0], [88.9, 2165.0], [89.0, 2165.0], [89.1, 2165.0], [89.2, 2177.0], [89.3, 2177.0], [89.4, 2180.0], [89.5, 2180.0], [89.6, 2180.0], [89.7, 2184.0], [89.8, 2184.0], [89.9, 2185.0], [90.0, 2185.0], [90.1, 2185.0], [90.2, 2187.0], [90.3, 2187.0], [90.4, 2192.0], [90.5, 2192.0], [90.6, 2193.0], [90.7, 2199.0], [90.8, 2199.0], [90.9, 2199.0], [91.0, 2199.0], [91.1, 2202.0], [91.2, 2203.0], [91.3, 2203.0], [91.4, 2203.0], [91.5, 2203.0], [91.6, 2204.0], [91.7, 2206.0], [91.8, 2206.0], [91.9, 2214.0], [92.0, 2214.0], [92.1, 2215.0], [92.2, 2216.0], [92.3, 2216.0], [92.4, 2218.0], [92.5, 2218.0], [92.6, 2230.0], [92.7, 2231.0], [92.8, 2231.0], [92.9, 2231.0], [93.0, 2231.0], [93.1, 2235.0], [93.2, 2235.0], [93.3, 2235.0], [93.4, 2238.0], [93.5, 2238.0], [93.6, 2241.0], [93.7, 2243.0], [93.8, 2243.0], [93.9, 2248.0], [94.0, 2248.0], [94.1, 2255.0], [94.2, 2257.0], [94.3, 2257.0], [94.4, 2262.0], [94.5, 2262.0], [94.6, 2267.0], [94.7, 2271.0], [94.8, 2271.0], [94.9, 2274.0], [95.0, 2274.0], [95.1, 2276.0], [95.2, 2276.0], [95.3, 2276.0], [95.4, 2276.0], [95.5, 2276.0], [95.6, 2280.0], [95.7, 2281.0], [95.8, 2281.0], [95.9, 2284.0], [96.0, 2284.0], [96.1, 2285.0], [96.2, 2286.0], [96.3, 2286.0], [96.4, 2289.0], [96.5, 2289.0], [96.6, 2294.0], [96.7, 2303.0], [96.8, 2303.0], [96.9, 2307.0], [97.0, 2307.0], [97.1, 2313.0], [97.2, 2338.0], [97.3, 2338.0], [97.4, 2340.0], [97.5, 2340.0], [97.6, 2345.0], [97.7, 2347.0], [97.8, 2347.0], [97.9, 2353.0], [98.0, 2353.0], [98.1, 2362.0], [98.2, 2366.0], [98.3, 2366.0], [98.4, 2368.0], [98.5, 2368.0], [98.6, 2369.0], [98.7, 2378.0], [98.8, 2378.0], [98.9, 2379.0], [99.0, 2379.0], [99.1, 2384.0], [99.2, 2392.0], [99.3, 2392.0], [99.4, 2433.0], [99.5, 2433.0], [99.6, 2434.0], [99.7, 2452.0], [99.8, 2452.0], [99.9, 2611.0], [100.0, 2611.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 76.0, "series": [{"data": [[2100.0, 51.0], [2300.0, 16.0], [2200.0, 34.0], [2400.0, 3.0], [2600.0, 1.0], [700.0, 1.0], [800.0, 8.0], [900.0, 11.0], [1000.0, 17.0], [1100.0, 18.0], [1200.0, 17.0], [1300.0, 26.0], [1400.0, 30.0], [1500.0, 54.0], [1600.0, 47.0], [1700.0, 64.0], [1800.0, 55.0], [1900.0, 76.0], [2000.0, 71.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 128.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 472.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 128.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 472.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 25.142857142857153, "minX": 1.6698031716E12, "maxY": 128.03225806451613, "series": [{"data": [[1.6698031794E12, 126.80000000000001], [1.6698031728E12, 89.62500000000001], [1.6698031764E12, 112.23333333333333], [1.66980318E12, 128.03225806451613], [1.6698031716E12, 86.97499999999998], [1.6698031752E12, 105.54545454545455], [1.6698031788E12, 113.36111111111111], [1.6698031722E12, 64.5], [1.6698031758E12, 99.21621621621621], [1.6698031776E12, 111.33333333333334], [1.6698031812E12, 72.08888888888892], [1.6698031746E12, 87.32000000000001], [1.6698031782E12, 119.3], [1.6698031818E12, 25.142857142857153], [1.6698031734E12, 79.57142857142857], [1.669803177E12, 107.45454545454545], [1.6698031806E12, 109.60000000000001], [1.669803174E12, 98.425]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698031818E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1066.1666666666665, "minX": 2.0, "maxY": 2433.0, "series": [{"data": [[2.0, 1492.0], [3.0, 1475.0], [4.0, 1745.0], [5.0, 1559.0], [6.0, 1523.0], [7.0, 1675.0], [8.0, 1572.0], [9.0, 1589.0], [10.0, 1804.0], [12.0, 1474.0], [13.0, 1650.0], [14.0, 1683.0], [15.0, 1869.0], [16.0, 1591.0], [18.0, 1609.5], [19.0, 1429.0], [20.0, 1903.0], [21.0, 1918.0], [22.0, 1693.0], [23.0, 1671.0], [24.0, 1926.0], [25.0, 1735.0], [26.0, 2088.0], [27.0, 1934.0], [28.0, 1963.0], [29.0, 2096.0], [30.0, 2112.0], [31.0, 1558.0], [33.0, 1761.0], [32.0, 1576.0], [35.0, 2148.0], [34.0, 1689.0], [37.0, 1772.0], [36.0, 2187.0], [39.0, 2014.0], [38.0, 1810.0], [40.0, 1978.0], [42.0, 2163.5], [44.0, 1977.0], [47.0, 1800.0], [46.0, 1905.5], [49.0, 1939.0], [48.0, 1921.0], [51.0, 2045.5], [53.0, 2006.0], [52.0, 2218.0], [55.0, 2031.0], [54.0, 1981.0], [57.0, 2202.0], [56.0, 2089.0], [59.0, 2366.0], [58.0, 2203.0], [61.0, 1481.3333333333333], [60.0, 1550.0], [62.0, 1160.7142857142858], [63.0, 1256.0], [67.0, 1639.0], [66.0, 1285.3333333333333], [64.0, 1588.0], [65.0, 2345.0], [69.0, 1470.6666666666667], [68.0, 1641.5], [71.0, 2134.0], [70.0, 2289.0], [75.0, 1363.5714285714287], [74.0, 1386.0], [72.0, 1511.3333333333333], [73.0, 2433.0], [79.0, 1649.0], [78.0, 1542.0], [77.0, 1330.7142857142856], [76.0, 1413.4], [81.0, 1609.2], [80.0, 1066.1666666666665], [83.0, 1494.8], [82.0, 1550.5], [86.0, 1554.6666666666665], [85.0, 1532.1666666666665], [87.0, 1564.5], [84.0, 1693.0], [88.0, 1404.090909090909], [91.0, 1638.0], [89.0, 2003.0], [90.0, 1658.0], [95.0, 1734.4615384615386], [94.0, 1613.7692307692307], [93.0, 1709.5714285714287], [92.0, 1673.7142857142858], [98.0, 1395.0], [99.0, 1708.8333333333333], [97.0, 1646.3636363636363], [96.0, 1685.8333333333333], [100.0, 1339.1363636363637], [102.0, 1698.25], [101.0, 1691.111111111111], [103.0, 1781.6666666666665], [104.0, 1729.1538461538464], [105.0, 1743.2222222222222], [107.0, 1725.4285714285716], [106.0, 1855.25], [108.0, 1859.4999999999998], [110.0, 1880.7058823529412], [109.0, 1872.4285714285713], [111.0, 1926.3125], [112.0, 1871.5], [114.0, 1912.6923076923078], [113.0, 1928.7272727272727], [115.0, 2007.375], [117.0, 2028.3636363636363], [118.0, 1983.4166666666665], [119.0, 2008.3636363636365], [116.0, 1935.6], [121.0, 2024.0], [120.0, 1993.0], [123.0, 2036.2857142857144], [122.0, 2004.5], [124.0, 2087.75], [127.0, 2221.0], [126.0, 2131.666666666667], [125.0, 2169.3333333333335], [128.0, 2149.9], [134.0, 2244.3333333333335], [133.0, 2237.5], [132.0, 2145.0], [131.0, 2273.0], [129.0, 2136.888888888889], [130.0, 2168.3333333333335]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[95.03666666666662, 1764.7083333333346]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 134.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2600.0, "minX": 1.6698031716E12, "maxY": 60433.333333333336, "series": [{"data": [[1.6698031794E12, 37000.0], [1.6698031728E12, 59200.0], [1.6698031764E12, 37000.0], [1.66980318E12, 38233.333333333336], [1.6698031716E12, 49333.333333333336], [1.6698031752E12, 40700.0], [1.6698031788E12, 44400.0], [1.6698031722E12, 19733.333333333332], [1.6698031758E12, 45633.333333333336], [1.6698031776E12, 14800.0], [1.6698031812E12, 55500.0], [1.6698031746E12, 30833.333333333332], [1.6698031782E12, 49333.333333333336], [1.6698031818E12, 60433.333333333336], [1.6698031734E12, 17266.666666666668], [1.669803177E12, 54266.666666666664], [1.6698031806E12, 37000.0], [1.669803174E12, 49333.333333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6698031794E12, 6500.0], [1.6698031728E12, 10400.0], [1.6698031764E12, 6500.0], [1.66980318E12, 6716.666666666667], [1.6698031716E12, 8666.666666666666], [1.6698031752E12, 7150.0], [1.6698031788E12, 7800.0], [1.6698031722E12, 3466.6666666666665], [1.6698031758E12, 8016.666666666667], [1.6698031776E12, 2600.0], [1.6698031812E12, 9750.0], [1.6698031746E12, 5416.666666666667], [1.6698031782E12, 8666.666666666666], [1.6698031818E12, 10616.666666666666], [1.6698031734E12, 3033.3333333333335], [1.669803177E12, 9533.333333333334], [1.6698031806E12, 6500.0], [1.669803174E12, 8666.666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698031818E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1042.25, "minX": 1.6698031716E12, "maxY": 2214.111111111111, "series": [{"data": [[1.6698031794E12, 2120.600000000001], [1.6698031728E12, 1401.3541666666672], [1.6698031764E12, 1891.3], [1.66980318E12, 2186.5806451612902], [1.6698031716E12, 1059.5500000000004], [1.6698031752E12, 1760.060606060606], [1.6698031788E12, 1929.5833333333337], [1.6698031722E12, 1042.25], [1.6698031758E12, 1694.432432432432], [1.6698031776E12, 1885.8333333333335], [1.6698031812E12, 2214.111111111111], [1.6698031746E12, 1488.2400000000002], [1.6698031782E12, 2014.8750000000002], [1.6698031818E12, 1787.3877551020412], [1.6698031734E12, 1349.5714285714284], [1.669803177E12, 1811.6136363636358], [1.6698031806E12, 2099.2], [1.669803174E12, 1622.275]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698031818E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1042.25, "minX": 1.6698031716E12, "maxY": 2214.066666666666, "series": [{"data": [[1.6698031794E12, 2120.5333333333338], [1.6698031728E12, 1401.1249999999998], [1.6698031764E12, 1890.6666666666665], [1.66980318E12, 2186.4516129032263], [1.6698031716E12, 1055.4250000000002], [1.6698031752E12, 1760.0], [1.6698031788E12, 1929.4722222222229], [1.6698031722E12, 1042.25], [1.6698031758E12, 1694.3783783783783], [1.6698031776E12, 1885.6666666666667], [1.6698031812E12, 2214.066666666666], [1.6698031746E12, 1488.08], [1.6698031782E12, 2014.8500000000004], [1.6698031818E12, 1787.2653061224491], [1.6698031734E12, 1349.357142857143], [1.669803177E12, 1811.4545454545457], [1.6698031806E12, 2099.100000000001], [1.669803174E12, 1621.7749999999994]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698031818E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.9183673469387754, "minX": 1.6698031716E12, "maxY": 35.699999999999996, "series": [{"data": [[1.6698031794E12, 1.0333333333333334], [1.6698031728E12, 1.6458333333333335], [1.6698031764E12, 1.0], [1.66980318E12, 1.1290322580645162], [1.6698031716E12, 35.699999999999996], [1.6698031752E12, 1.1515151515151516], [1.6698031788E12, 1.027777777777778], [1.6698031722E12, 18.75], [1.6698031758E12, 1.3243243243243248], [1.6698031776E12, 1.0], [1.6698031812E12, 0.9777777777777779], [1.6698031746E12, 1.1600000000000004], [1.6698031782E12, 1.85], [1.6698031818E12, 0.9183673469387754], [1.6698031734E12, 1.2142857142857146], [1.669803177E12, 1.2045454545454546], [1.6698031806E12, 1.0], [1.669803174E12, 1.2000000000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698031818E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 769.0, "minX": 1.6698031716E12, "maxY": 2611.0, "series": [{"data": [[1.6698031794E12, 2303.0], [1.6698031728E12, 1743.0], [1.6698031764E12, 2057.0], [1.66980318E12, 2611.0], [1.6698031716E12, 1194.0], [1.6698031752E12, 2024.0], [1.6698031788E12, 2280.0], [1.6698031722E12, 1372.0], [1.6698031758E12, 2368.0], [1.6698031776E12, 2100.0], [1.6698031812E12, 2452.0], [1.6698031746E12, 1665.0], [1.6698031782E12, 2230.0], [1.6698031818E12, 2216.0], [1.6698031734E12, 1643.0], [1.669803177E12, 2022.0], [1.6698031806E12, 2379.0], [1.669803174E12, 1886.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6698031794E12, 2273.9], [1.6698031728E12, 1584.4], [1.6698031764E12, 2039.6], [1.66980318E12, 2348.4], [1.6698031716E12, 1182.7], [1.6698031752E12, 1973.4], [1.6698031788E12, 2084.4], [1.6698031722E12, 1309.7], [1.6698031758E12, 1905.2000000000003], [1.6698031776E12, 2094.9], [1.6698031812E12, 2380.4], [1.6698031746E12, 1625.8], [1.6698031782E12, 2104.9], [1.6698031818E12, 2142.0], [1.6698031734E12, 1622.0], [1.669803177E12, 1926.5], [1.6698031806E12, 2280.5], [1.669803174E12, 1764.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6698031794E12, 2303.0], [1.6698031728E12, 1743.0], [1.6698031764E12, 2057.0], [1.66980318E12, 2611.0], [1.6698031716E12, 1194.0], [1.6698031752E12, 2024.0], [1.6698031788E12, 2280.0], [1.6698031722E12, 1372.0], [1.6698031758E12, 2368.0], [1.6698031776E12, 2100.0], [1.6698031812E12, 2452.0], [1.6698031746E12, 1665.0], [1.6698031782E12, 2230.0], [1.6698031818E12, 2216.0], [1.6698031734E12, 1643.0], [1.669803177E12, 2022.0], [1.6698031806E12, 2379.0], [1.669803174E12, 1886.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6698031794E12, 2293.1], [1.6698031728E12, 1675.7999999999997], [1.6698031764E12, 2056.45], [1.66980318E12, 2479.5999999999995], [1.6698031716E12, 1188.9], [1.6698031752E12, 1993.8999999999999], [1.6698031788E12, 2153.35], [1.6698031722E12, 1372.0], [1.6698031758E12, 2175.4], [1.6698031776E12, 2100.0], [1.6698031812E12, 2433.7], [1.6698031746E12, 1657.2], [1.6698031782E12, 2158.85], [1.6698031818E12, 2186.0], [1.6698031734E12, 1643.0], [1.669803177E12, 1957.0], [1.6698031806E12, 2373.5], [1.669803174E12, 1798.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6698031794E12, 1966.0], [1.6698031728E12, 1017.0], [1.6698031764E12, 1732.0], [1.66980318E12, 2030.0], [1.6698031716E12, 769.0], [1.6698031752E12, 1229.0], [1.6698031788E12, 1757.0], [1.6698031722E12, 836.0], [1.6698031758E12, 1475.0], [1.6698031776E12, 1731.0], [1.6698031812E12, 1935.0], [1.6698031746E12, 1332.0], [1.6698031782E12, 1901.0], [1.6698031818E12, 1415.0], [1.6698031734E12, 1166.0], [1.669803177E12, 1591.0], [1.6698031806E12, 1916.0], [1.669803174E12, 1346.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6698031794E12, 2099.5], [1.6698031728E12, 1387.0], [1.6698031764E12, 1889.5], [1.66980318E12, 2184.0], [1.6698031716E12, 1091.5], [1.6698031752E12, 1765.0], [1.6698031788E12, 1901.5], [1.6698031722E12, 959.5], [1.6698031758E12, 1660.0], [1.6698031776E12, 1870.5], [1.6698031812E12, 2206.0], [1.6698031746E12, 1481.0], [1.6698031782E12, 2010.5], [1.6698031818E12, 1769.0], [1.6698031734E12, 1319.5], [1.669803177E12, 1838.5], [1.6698031806E12, 2091.5], [1.669803174E12, 1611.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698031818E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1090.0, "minX": 46.0, "maxY": 2132.0, "series": [{"data": [[46.0, 1819.0], [48.0, 2056.0], [96.0, 2080.5], [52.0, 1830.0], [57.0, 1090.0], [56.0, 1717.5], [59.0, 2132.0], [61.0, 1363.0], [63.0, 1577.0], [62.0, 1996.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1082.0, "minX": 46.0, "maxY": 2132.0, "series": [{"data": [[46.0, 1819.0], [48.0, 2056.0], [96.0, 2080.5], [52.0, 1830.0], [57.0, 1082.0], [56.0, 1717.5], [59.0, 2132.0], [61.0, 1363.0], [63.0, 1575.0], [62.0, 1996.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.6698031704E12, "maxY": 110.0, "series": [{"data": [[1.6698031794E12, 58.333333333333336], [1.6698031728E12, 61.666666666666664], [1.6698031764E12, 58.333333333333336], [1.66980318E12, 53.333333333333336], [1.6698031716E12, 63.333333333333336], [1.6698031752E12, 58.333333333333336], [1.6698031788E12, 60.0], [1.6698031722E12, 61.666666666666664], [1.6698031758E12, 60.0], [1.6698031776E12, 58.333333333333336], [1.669803171E12, 110.0], [1.6698031746E12, 58.333333333333336], [1.6698031782E12, 58.333333333333336], [1.6698031734E12, 58.333333333333336], [1.669803177E12, 58.333333333333336], [1.6698031704E12, 3.3333333333333335], [1.669803174E12, 60.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.66980318E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.6698031716E12, "maxY": 81.66666666666667, "series": [{"data": [[1.6698031794E12, 50.0], [1.6698031728E12, 80.0], [1.6698031764E12, 50.0], [1.66980318E12, 51.666666666666664], [1.6698031716E12, 66.66666666666667], [1.6698031752E12, 55.0], [1.6698031788E12, 60.0], [1.6698031722E12, 26.666666666666668], [1.6698031758E12, 61.666666666666664], [1.6698031776E12, 20.0], [1.6698031812E12, 75.0], [1.6698031746E12, 41.666666666666664], [1.6698031782E12, 66.66666666666667], [1.6698031818E12, 81.66666666666667], [1.6698031734E12, 23.333333333333332], [1.669803177E12, 73.33333333333333], [1.6698031806E12, 50.0], [1.669803174E12, 66.66666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698031818E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.6698031716E12, "maxY": 81.66666666666667, "series": [{"data": [[1.6698031794E12, 50.0], [1.6698031728E12, 80.0], [1.6698031764E12, 50.0], [1.66980318E12, 51.666666666666664], [1.6698031716E12, 66.66666666666667], [1.6698031752E12, 55.0], [1.6698031788E12, 60.0], [1.6698031722E12, 26.666666666666668], [1.6698031758E12, 61.666666666666664], [1.6698031776E12, 20.0], [1.6698031812E12, 75.0], [1.6698031746E12, 41.666666666666664], [1.6698031782E12, 66.66666666666667], [1.6698031818E12, 81.66666666666667], [1.6698031734E12, 23.333333333333332], [1.669803177E12, 73.33333333333333], [1.6698031806E12, 50.0], [1.669803174E12, 66.66666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698031818E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.6698031716E12, "maxY": 81.66666666666667, "series": [{"data": [[1.6698031794E12, 50.0], [1.6698031728E12, 80.0], [1.6698031764E12, 50.0], [1.66980318E12, 51.666666666666664], [1.6698031716E12, 66.66666666666667], [1.6698031752E12, 55.0], [1.6698031788E12, 60.0], [1.6698031722E12, 26.666666666666668], [1.6698031758E12, 61.666666666666664], [1.6698031776E12, 20.0], [1.6698031812E12, 75.0], [1.6698031746E12, 41.666666666666664], [1.6698031782E12, 66.66666666666667], [1.6698031818E12, 81.66666666666667], [1.6698031734E12, 23.333333333333332], [1.669803177E12, 73.33333333333333], [1.6698031806E12, 50.0], [1.669803174E12, 66.66666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698031818E12, "title": "Total Transactions Per Second"}},
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

