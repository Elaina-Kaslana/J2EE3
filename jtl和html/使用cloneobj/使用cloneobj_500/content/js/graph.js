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
        data: {"result": {"minY": 49.0, "minX": 0.0, "maxY": 1455.0, "series": [{"data": [[0.0, 49.0], [0.1, 49.0], [0.2, 50.0], [0.3, 50.0], [0.4, 51.0], [0.5, 51.0], [0.6, 51.0], [0.7, 51.0], [0.8, 52.0], [0.9, 52.0], [1.0, 53.0], [1.1, 53.0], [1.2, 54.0], [1.3, 54.0], [1.4, 55.0], [1.5, 55.0], [1.6, 55.0], [1.7, 55.0], [1.8, 55.0], [1.9, 55.0], [2.0, 55.0], [2.1, 55.0], [2.2, 56.0], [2.3, 56.0], [2.4, 56.0], [2.5, 56.0], [2.6, 56.0], [2.7, 56.0], [2.8, 56.0], [2.9, 57.0], [3.0, 57.0], [3.1, 58.0], [3.2, 58.0], [3.3, 58.0], [3.4, 58.0], [3.5, 59.0], [3.6, 59.0], [3.7, 59.0], [3.8, 59.0], [3.9, 59.0], [4.0, 59.0], [4.1, 59.0], [4.2, 59.0], [4.3, 59.0], [4.4, 59.0], [4.5, 59.0], [4.6, 59.0], [4.7, 59.0], [4.8, 59.0], [4.9, 60.0], [5.0, 60.0], [5.1, 60.0], [5.2, 60.0], [5.3, 60.0], [5.4, 61.0], [5.5, 61.0], [5.6, 61.0], [5.7, 61.0], [5.8, 61.0], [5.9, 62.0], [6.0, 62.0], [6.1, 62.0], [6.2, 62.0], [6.3, 62.0], [6.4, 63.0], [6.5, 63.0], [6.6, 63.0], [6.7, 63.0], [6.8, 63.0], [6.9, 63.0], [7.0, 63.0], [7.1, 63.0], [7.2, 63.0], [7.3, 63.0], [7.4, 64.0], [7.5, 64.0], [7.6, 64.0], [7.7, 64.0], [7.8, 64.0], [7.9, 64.0], [8.0, 64.0], [8.1, 64.0], [8.2, 64.0], [8.3, 64.0], [8.4, 65.0], [8.5, 65.0], [8.6, 65.0], [8.7, 65.0], [8.8, 65.0], [8.9, 65.0], [9.0, 65.0], [9.1, 65.0], [9.2, 65.0], [9.3, 65.0], [9.4, 65.0], [9.5, 65.0], [9.6, 66.0], [9.7, 66.0], [9.8, 66.0], [9.9, 66.0], [10.0, 66.0], [10.1, 66.0], [10.2, 66.0], [10.3, 66.0], [10.4, 67.0], [10.5, 67.0], [10.6, 68.0], [10.7, 68.0], [10.8, 68.0], [10.9, 68.0], [11.0, 69.0], [11.1, 69.0], [11.2, 69.0], [11.3, 69.0], [11.4, 69.0], [11.5, 69.0], [11.6, 69.0], [11.7, 69.0], [11.8, 69.0], [11.9, 69.0], [12.0, 70.0], [12.1, 70.0], [12.2, 70.0], [12.3, 70.0], [12.4, 70.0], [12.5, 70.0], [12.6, 70.0], [12.7, 70.0], [12.8, 70.0], [12.9, 70.0], [13.0, 71.0], [13.1, 71.0], [13.2, 71.0], [13.3, 71.0], [13.4, 71.0], [13.5, 71.0], [13.6, 71.0], [13.7, 71.0], [13.8, 72.0], [13.9, 72.0], [14.0, 73.0], [14.1, 73.0], [14.2, 74.0], [14.3, 74.0], [14.4, 75.0], [14.5, 75.0], [14.6, 75.0], [14.7, 75.0], [14.8, 75.0], [14.9, 75.0], [15.0, 76.0], [15.1, 76.0], [15.2, 76.0], [15.3, 76.0], [15.4, 76.0], [15.5, 76.0], [15.6, 76.0], [15.7, 76.0], [15.8, 76.0], [15.9, 76.0], [16.0, 78.0], [16.1, 78.0], [16.2, 79.0], [16.3, 79.0], [16.4, 79.0], [16.5, 79.0], [16.6, 79.0], [16.7, 79.0], [16.8, 79.0], [16.9, 79.0], [17.0, 79.0], [17.1, 79.0], [17.2, 79.0], [17.3, 79.0], [17.4, 79.0], [17.5, 79.0], [17.6, 80.0], [17.7, 80.0], [17.8, 80.0], [17.9, 80.0], [18.0, 80.0], [18.1, 80.0], [18.2, 80.0], [18.3, 80.0], [18.4, 80.0], [18.5, 80.0], [18.6, 80.0], [18.7, 80.0], [18.8, 81.0], [18.9, 81.0], [19.0, 81.0], [19.1, 81.0], [19.2, 82.0], [19.3, 82.0], [19.4, 82.0], [19.5, 82.0], [19.6, 82.0], [19.7, 82.0], [19.8, 82.0], [19.9, 82.0], [20.0, 84.0], [20.1, 84.0], [20.2, 84.0], [20.3, 84.0], [20.4, 84.0], [20.5, 84.0], [20.6, 85.0], [20.7, 85.0], [20.8, 85.0], [20.9, 85.0], [21.0, 86.0], [21.1, 86.0], [21.2, 87.0], [21.3, 87.0], [21.4, 87.0], [21.5, 87.0], [21.6, 90.0], [21.7, 90.0], [21.8, 91.0], [21.9, 91.0], [22.0, 92.0], [22.1, 92.0], [22.2, 93.0], [22.3, 93.0], [22.4, 98.0], [22.5, 98.0], [22.6, 99.0], [22.7, 99.0], [22.8, 101.0], [22.9, 101.0], [23.0, 102.0], [23.1, 102.0], [23.2, 102.0], [23.3, 102.0], [23.4, 103.0], [23.5, 103.0], [23.6, 106.0], [23.7, 106.0], [23.8, 108.0], [23.9, 108.0], [24.0, 118.0], [24.1, 118.0], [24.2, 122.0], [24.3, 122.0], [24.4, 132.0], [24.5, 132.0], [24.6, 132.0], [24.7, 132.0], [24.8, 135.0], [24.9, 135.0], [25.0, 139.0], [25.1, 139.0], [25.2, 141.0], [25.3, 141.0], [25.4, 171.0], [25.5, 171.0], [25.6, 172.0], [25.7, 172.0], [25.8, 173.0], [25.9, 173.0], [26.0, 185.0], [26.1, 185.0], [26.2, 189.0], [26.3, 189.0], [26.4, 190.0], [26.5, 190.0], [26.6, 194.0], [26.7, 194.0], [26.8, 196.0], [26.9, 196.0], [27.0, 198.0], [27.1, 198.0], [27.2, 202.0], [27.3, 202.0], [27.4, 207.0], [27.5, 207.0], [27.6, 208.0], [27.7, 208.0], [27.8, 219.0], [27.9, 219.0], [28.0, 219.0], [28.1, 219.0], [28.2, 222.0], [28.3, 222.0], [28.4, 223.0], [28.5, 223.0], [28.6, 225.0], [28.7, 225.0], [28.8, 244.0], [28.9, 244.0], [29.0, 248.0], [29.1, 248.0], [29.2, 255.0], [29.3, 255.0], [29.4, 271.0], [29.5, 271.0], [29.6, 281.0], [29.7, 281.0], [29.8, 282.0], [29.9, 282.0], [30.0, 291.0], [30.1, 291.0], [30.2, 297.0], [30.3, 297.0], [30.4, 306.0], [30.5, 306.0], [30.6, 306.0], [30.7, 306.0], [30.8, 307.0], [30.9, 307.0], [31.0, 328.0], [31.1, 328.0], [31.2, 328.0], [31.3, 328.0], [31.4, 335.0], [31.5, 335.0], [31.6, 339.0], [31.7, 339.0], [31.8, 341.0], [31.9, 341.0], [32.0, 342.0], [32.1, 342.0], [32.2, 352.0], [32.3, 352.0], [32.4, 357.0], [32.5, 357.0], [32.6, 359.0], [32.7, 359.0], [32.8, 369.0], [32.9, 369.0], [33.0, 374.0], [33.1, 374.0], [33.2, 376.0], [33.3, 376.0], [33.4, 378.0], [33.5, 378.0], [33.6, 407.0], [33.7, 407.0], [33.8, 413.0], [33.9, 413.0], [34.0, 415.0], [34.1, 415.0], [34.2, 418.0], [34.3, 418.0], [34.4, 421.0], [34.5, 421.0], [34.6, 425.0], [34.7, 425.0], [34.8, 428.0], [34.9, 428.0], [35.0, 431.0], [35.1, 431.0], [35.2, 433.0], [35.3, 433.0], [35.4, 433.0], [35.5, 437.0], [35.6, 437.0], [35.7, 439.0], [35.8, 439.0], [35.9, 442.0], [36.0, 442.0], [36.1, 448.0], [36.2, 448.0], [36.3, 452.0], [36.4, 452.0], [36.5, 452.0], [36.6, 452.0], [36.7, 456.0], [36.8, 456.0], [36.9, 461.0], [37.0, 461.0], [37.1, 463.0], [37.2, 463.0], [37.3, 473.0], [37.4, 473.0], [37.5, 476.0], [37.6, 476.0], [37.7, 478.0], [37.8, 478.0], [37.9, 496.0], [38.0, 496.0], [38.1, 496.0], [38.2, 496.0], [38.3, 498.0], [38.4, 498.0], [38.5, 500.0], [38.6, 500.0], [38.7, 501.0], [38.8, 501.0], [38.9, 506.0], [39.0, 506.0], [39.1, 506.0], [39.2, 506.0], [39.3, 513.0], [39.4, 513.0], [39.5, 517.0], [39.6, 517.0], [39.7, 517.0], [39.8, 517.0], [39.9, 519.0], [40.0, 519.0], [40.1, 520.0], [40.2, 520.0], [40.3, 521.0], [40.4, 521.0], [40.5, 523.0], [40.6, 523.0], [40.7, 527.0], [40.8, 527.0], [40.9, 531.0], [41.0, 531.0], [41.1, 534.0], [41.2, 534.0], [41.3, 539.0], [41.4, 539.0], [41.5, 540.0], [41.6, 540.0], [41.7, 540.0], [41.8, 540.0], [41.9, 543.0], [42.0, 543.0], [42.1, 568.0], [42.2, 568.0], [42.3, 573.0], [42.4, 573.0], [42.5, 575.0], [42.6, 575.0], [42.7, 586.0], [42.8, 586.0], [42.9, 595.0], [43.0, 595.0], [43.1, 600.0], [43.2, 600.0], [43.3, 610.0], [43.4, 610.0], [43.5, 611.0], [43.6, 611.0], [43.7, 611.0], [43.8, 611.0], [43.9, 624.0], [44.0, 624.0], [44.1, 625.0], [44.2, 625.0], [44.3, 628.0], [44.4, 628.0], [44.5, 632.0], [44.6, 632.0], [44.7, 644.0], [44.8, 644.0], [44.9, 646.0], [45.0, 646.0], [45.1, 649.0], [45.2, 649.0], [45.3, 651.0], [45.4, 651.0], [45.5, 655.0], [45.6, 655.0], [45.7, 661.0], [45.8, 661.0], [45.9, 669.0], [46.0, 669.0], [46.1, 675.0], [46.2, 675.0], [46.3, 683.0], [46.4, 683.0], [46.5, 686.0], [46.6, 686.0], [46.7, 692.0], [46.8, 692.0], [46.9, 694.0], [47.0, 694.0], [47.1, 694.0], [47.2, 694.0], [47.3, 698.0], [47.4, 698.0], [47.5, 702.0], [47.6, 702.0], [47.7, 704.0], [47.8, 704.0], [47.9, 706.0], [48.0, 706.0], [48.1, 708.0], [48.2, 708.0], [48.3, 714.0], [48.4, 714.0], [48.5, 716.0], [48.6, 716.0], [48.7, 718.0], [48.8, 718.0], [48.9, 718.0], [49.0, 718.0], [49.1, 719.0], [49.2, 719.0], [49.3, 720.0], [49.4, 720.0], [49.5, 727.0], [49.6, 727.0], [49.7, 728.0], [49.8, 728.0], [49.9, 728.0], [50.0, 728.0], [50.1, 730.0], [50.2, 730.0], [50.3, 736.0], [50.4, 736.0], [50.5, 737.0], [50.6, 737.0], [50.7, 737.0], [50.8, 737.0], [50.9, 738.0], [51.0, 738.0], [51.1, 739.0], [51.2, 739.0], [51.3, 745.0], [51.4, 745.0], [51.5, 746.0], [51.6, 746.0], [51.7, 748.0], [51.8, 748.0], [51.9, 749.0], [52.0, 749.0], [52.1, 749.0], [52.2, 749.0], [52.3, 750.0], [52.4, 750.0], [52.5, 751.0], [52.6, 751.0], [52.7, 754.0], [52.8, 754.0], [52.9, 756.0], [53.0, 756.0], [53.1, 756.0], [53.2, 756.0], [53.3, 757.0], [53.4, 757.0], [53.5, 758.0], [53.6, 758.0], [53.7, 759.0], [53.8, 759.0], [53.9, 762.0], [54.0, 762.0], [54.1, 762.0], [54.2, 762.0], [54.3, 763.0], [54.4, 763.0], [54.5, 763.0], [54.6, 763.0], [54.7, 766.0], [54.8, 766.0], [54.9, 769.0], [55.0, 769.0], [55.1, 769.0], [55.2, 769.0], [55.3, 771.0], [55.4, 771.0], [55.5, 773.0], [55.6, 773.0], [55.7, 774.0], [55.8, 774.0], [55.9, 774.0], [56.0, 774.0], [56.1, 774.0], [56.2, 774.0], [56.3, 775.0], [56.4, 775.0], [56.5, 777.0], [56.6, 777.0], [56.7, 780.0], [56.8, 780.0], [56.9, 780.0], [57.0, 780.0], [57.1, 782.0], [57.2, 782.0], [57.3, 782.0], [57.4, 782.0], [57.5, 782.0], [57.6, 782.0], [57.7, 783.0], [57.8, 783.0], [57.9, 784.0], [58.0, 784.0], [58.1, 787.0], [58.2, 787.0], [58.3, 787.0], [58.4, 787.0], [58.5, 788.0], [58.6, 788.0], [58.7, 790.0], [58.8, 790.0], [58.9, 793.0], [59.0, 793.0], [59.1, 795.0], [59.2, 795.0], [59.3, 795.0], [59.4, 795.0], [59.5, 797.0], [59.6, 797.0], [59.7, 798.0], [59.8, 798.0], [59.9, 798.0], [60.0, 798.0], [60.1, 798.0], [60.2, 798.0], [60.3, 799.0], [60.4, 799.0], [60.5, 799.0], [60.6, 799.0], [60.7, 804.0], [60.8, 804.0], [60.9, 804.0], [61.0, 804.0], [61.1, 804.0], [61.2, 804.0], [61.3, 805.0], [61.4, 805.0], [61.5, 806.0], [61.6, 806.0], [61.7, 808.0], [61.8, 808.0], [61.9, 808.0], [62.0, 808.0], [62.1, 809.0], [62.2, 809.0], [62.3, 809.0], [62.4, 809.0], [62.5, 811.0], [62.6, 811.0], [62.7, 813.0], [62.8, 813.0], [62.9, 818.0], [63.0, 818.0], [63.1, 821.0], [63.2, 821.0], [63.3, 821.0], [63.4, 821.0], [63.5, 824.0], [63.6, 824.0], [63.7, 825.0], [63.8, 825.0], [63.9, 826.0], [64.0, 826.0], [64.1, 826.0], [64.2, 826.0], [64.3, 826.0], [64.4, 826.0], [64.5, 826.0], [64.6, 826.0], [64.7, 831.0], [64.8, 831.0], [64.9, 832.0], [65.0, 832.0], [65.1, 837.0], [65.2, 837.0], [65.3, 839.0], [65.4, 839.0], [65.5, 839.0], [65.6, 839.0], [65.7, 839.0], [65.8, 839.0], [65.9, 840.0], [66.0, 840.0], [66.1, 842.0], [66.2, 842.0], [66.3, 844.0], [66.4, 844.0], [66.5, 845.0], [66.6, 845.0], [66.7, 849.0], [66.8, 849.0], [66.9, 851.0], [67.0, 851.0], [67.1, 852.0], [67.2, 852.0], [67.3, 854.0], [67.4, 854.0], [67.5, 857.0], [67.6, 857.0], [67.7, 862.0], [67.8, 862.0], [67.9, 863.0], [68.0, 863.0], [68.1, 864.0], [68.2, 864.0], [68.3, 864.0], [68.4, 864.0], [68.5, 865.0], [68.6, 865.0], [68.7, 871.0], [68.8, 871.0], [68.9, 875.0], [69.0, 875.0], [69.1, 884.0], [69.2, 884.0], [69.3, 886.0], [69.4, 886.0], [69.5, 887.0], [69.6, 887.0], [69.7, 887.0], [69.8, 887.0], [69.9, 888.0], [70.0, 888.0], [70.1, 889.0], [70.2, 889.0], [70.3, 892.0], [70.4, 892.0], [70.5, 893.0], [70.6, 893.0], [70.7, 898.0], [70.8, 898.0], [70.9, 900.0], [71.0, 900.0], [71.1, 902.0], [71.2, 902.0], [71.3, 906.0], [71.4, 906.0], [71.5, 907.0], [71.6, 907.0], [71.7, 910.0], [71.8, 910.0], [71.9, 911.0], [72.0, 911.0], [72.1, 911.0], [72.2, 911.0], [72.3, 912.0], [72.4, 912.0], [72.5, 917.0], [72.6, 917.0], [72.7, 922.0], [72.8, 922.0], [72.9, 925.0], [73.0, 925.0], [73.1, 926.0], [73.2, 926.0], [73.3, 930.0], [73.4, 930.0], [73.5, 931.0], [73.6, 931.0], [73.7, 934.0], [73.8, 934.0], [73.9, 945.0], [74.0, 945.0], [74.1, 946.0], [74.2, 946.0], [74.3, 948.0], [74.4, 948.0], [74.5, 949.0], [74.6, 949.0], [74.7, 951.0], [74.8, 951.0], [74.9, 952.0], [75.0, 952.0], [75.1, 953.0], [75.2, 953.0], [75.3, 956.0], [75.4, 956.0], [75.5, 957.0], [75.6, 957.0], [75.7, 961.0], [75.8, 961.0], [75.9, 962.0], [76.0, 962.0], [76.1, 965.0], [76.2, 965.0], [76.3, 966.0], [76.4, 966.0], [76.5, 967.0], [76.6, 967.0], [76.7, 968.0], [76.8, 968.0], [76.9, 968.0], [77.0, 968.0], [77.1, 970.0], [77.2, 970.0], [77.3, 973.0], [77.4, 973.0], [77.5, 975.0], [77.6, 975.0], [77.7, 984.0], [77.8, 984.0], [77.9, 988.0], [78.0, 988.0], [78.1, 990.0], [78.2, 990.0], [78.3, 992.0], [78.4, 992.0], [78.5, 994.0], [78.6, 994.0], [78.7, 995.0], [78.8, 995.0], [78.9, 1001.0], [79.0, 1001.0], [79.1, 1008.0], [79.2, 1008.0], [79.3, 1013.0], [79.4, 1013.0], [79.5, 1015.0], [79.6, 1015.0], [79.7, 1015.0], [79.8, 1015.0], [79.9, 1021.0], [80.0, 1021.0], [80.1, 1025.0], [80.2, 1025.0], [80.3, 1025.0], [80.4, 1025.0], [80.5, 1027.0], [80.6, 1027.0], [80.7, 1031.0], [80.8, 1031.0], [80.9, 1033.0], [81.0, 1033.0], [81.1, 1038.0], [81.2, 1038.0], [81.3, 1043.0], [81.4, 1043.0], [81.5, 1045.0], [81.6, 1045.0], [81.7, 1045.0], [81.8, 1045.0], [81.9, 1047.0], [82.0, 1047.0], [82.1, 1048.0], [82.2, 1048.0], [82.3, 1048.0], [82.4, 1048.0], [82.5, 1051.0], [82.6, 1051.0], [82.7, 1051.0], [82.8, 1051.0], [82.9, 1051.0], [83.0, 1051.0], [83.1, 1053.0], [83.2, 1053.0], [83.3, 1058.0], [83.4, 1058.0], [83.5, 1058.0], [83.6, 1058.0], [83.7, 1058.0], [83.8, 1058.0], [83.9, 1058.0], [84.0, 1058.0], [84.1, 1060.0], [84.2, 1060.0], [84.3, 1060.0], [84.4, 1060.0], [84.5, 1060.0], [84.6, 1060.0], [84.7, 1064.0], [84.8, 1064.0], [84.9, 1073.0], [85.0, 1073.0], [85.1, 1076.0], [85.2, 1076.0], [85.3, 1083.0], [85.4, 1083.0], [85.5, 1083.0], [85.6, 1083.0], [85.7, 1084.0], [85.8, 1084.0], [85.9, 1085.0], [86.0, 1085.0], [86.1, 1085.0], [86.2, 1085.0], [86.3, 1092.0], [86.4, 1092.0], [86.5, 1093.0], [86.6, 1093.0], [86.7, 1093.0], [86.8, 1093.0], [86.9, 1094.0], [87.0, 1094.0], [87.1, 1094.0], [87.2, 1094.0], [87.3, 1097.0], [87.4, 1097.0], [87.5, 1103.0], [87.6, 1103.0], [87.7, 1110.0], [87.8, 1110.0], [87.9, 1111.0], [88.0, 1111.0], [88.1, 1115.0], [88.2, 1115.0], [88.3, 1116.0], [88.4, 1116.0], [88.5, 1119.0], [88.6, 1119.0], [88.7, 1123.0], [88.8, 1123.0], [88.9, 1124.0], [89.0, 1124.0], [89.1, 1124.0], [89.2, 1124.0], [89.3, 1140.0], [89.4, 1140.0], [89.5, 1149.0], [89.6, 1149.0], [89.7, 1150.0], [89.8, 1150.0], [89.9, 1151.0], [90.0, 1151.0], [90.1, 1152.0], [90.2, 1152.0], [90.3, 1155.0], [90.4, 1155.0], [90.5, 1156.0], [90.6, 1156.0], [90.7, 1163.0], [90.8, 1163.0], [90.9, 1164.0], [91.0, 1164.0], [91.1, 1165.0], [91.2, 1165.0], [91.3, 1171.0], [91.4, 1171.0], [91.5, 1172.0], [91.6, 1172.0], [91.7, 1178.0], [91.8, 1178.0], [91.9, 1195.0], [92.0, 1195.0], [92.1, 1199.0], [92.2, 1199.0], [92.3, 1202.0], [92.4, 1202.0], [92.5, 1207.0], [92.6, 1207.0], [92.7, 1208.0], [92.8, 1208.0], [92.9, 1208.0], [93.0, 1208.0], [93.1, 1214.0], [93.2, 1214.0], [93.3, 1215.0], [93.4, 1215.0], [93.5, 1226.0], [93.6, 1226.0], [93.7, 1232.0], [93.8, 1232.0], [93.9, 1246.0], [94.0, 1246.0], [94.1, 1255.0], [94.2, 1255.0], [94.3, 1261.0], [94.4, 1261.0], [94.5, 1267.0], [94.6, 1267.0], [94.7, 1267.0], [94.8, 1267.0], [94.9, 1268.0], [95.0, 1268.0], [95.1, 1277.0], [95.2, 1277.0], [95.3, 1284.0], [95.4, 1284.0], [95.5, 1284.0], [95.6, 1284.0], [95.7, 1284.0], [95.8, 1284.0], [95.9, 1285.0], [96.0, 1285.0], [96.1, 1295.0], [96.2, 1295.0], [96.3, 1314.0], [96.4, 1314.0], [96.5, 1315.0], [96.6, 1315.0], [96.7, 1320.0], [96.8, 1320.0], [96.9, 1335.0], [97.0, 1335.0], [97.1, 1339.0], [97.2, 1339.0], [97.3, 1346.0], [97.4, 1346.0], [97.5, 1349.0], [97.6, 1349.0], [97.7, 1350.0], [97.8, 1350.0], [97.9, 1375.0], [98.0, 1375.0], [98.1, 1391.0], [98.2, 1391.0], [98.3, 1400.0], [98.4, 1400.0], [98.5, 1407.0], [98.6, 1407.0], [98.7, 1408.0], [98.8, 1408.0], [98.9, 1409.0], [99.0, 1409.0], [99.1, 1409.0], [99.2, 1409.0], [99.3, 1410.0], [99.4, 1410.0], [99.5, 1419.0], [99.6, 1419.0], [99.7, 1439.0], [99.8, 1439.0], [99.9, 1455.0], [100.0, 1455.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 114.0, "series": [{"data": [[0.0, 114.0], [600.0, 22.0], [700.0, 66.0], [800.0, 51.0], [200.0, 16.0], [900.0, 40.0], [1000.0, 43.0], [1100.0, 24.0], [1200.0, 20.0], [300.0, 16.0], [1300.0, 10.0], [1400.0, 9.0], [400.0, 24.0], [100.0, 22.0], [500.0, 23.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 193.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 307.0, "series": [{"data": [[0.0, 193.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 307.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.9310344827586214, "minX": 1.6698007902E12, "maxY": 76.88888888888886, "series": [{"data": [[1.6698007932E12, 47.65853658536585], [1.6698007962E12, 4.066666666666667], [1.6698007926E12, 50.12903225806452], [1.6698007938E12, 40.41666666666668], [1.6698007974E12, 4.033333333333333], [1.6698007902E12, 76.88888888888886], [1.6698007968E12, 3.9310344827586214], [1.6698007914E12, 54.361111111111114], [1.669800795E12, 20.824999999999996], [1.6698007944E12, 29.9], [1.669800798E12, 4.181818181818182], [1.6698007908E12, 59.92857142857143], [1.669800792E12, 45.54054054054053], [1.6698007956E12, 9.560975609756099]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.669800798E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 51.0, "minX": 1.0, "maxY": 1408.5, "series": [{"data": [[2.0, 54.6], [3.0, 62.05882352941177], [4.0, 67.83870967741939], [5.0, 81.65384615384615], [6.0, 101.11111111111111], [7.0, 123.8], [8.0, 171.0], [9.0, 171.25], [10.0, 183.6], [11.0, 208.33333333333334], [12.0, 226.0], [13.0, 270.8], [14.0, 273.25], [15.0, 285.8], [16.0, 307.0], [17.0, 316.6666666666667], [18.0, 389.3333333333333], [19.0, 348.25], [20.0, 433.5], [21.0, 403.0], [22.0, 429.75], [23.0, 436.0], [24.0, 478.6], [25.0, 493.42857142857144], [26.0, 510.8], [27.0, 521.25], [28.0, 543.0], [29.0, 550.3333333333334], [30.0, 611.0], [31.0, 644.0], [33.0, 628.5], [32.0, 666.0], [35.0, 704.25], [34.0, 621.0], [37.0, 793.0], [36.0, 706.2], [39.0, 692.0], [38.0, 772.0], [41.0, 817.0], [40.0, 716.0], [43.0, 768.5], [42.0, 851.125], [45.0, 846.3684210526316], [44.0, 830.3333333333333], [46.0, 831.2857142857142], [47.0, 811.4444444444445], [49.0, 861.5], [48.0, 906.4], [51.0, 883.2857142857142], [50.0, 816.4999999999999], [53.0, 895.625], [52.0, 880.6923076923077], [55.0, 1142.3333333333333], [54.0, 909.5555555555555], [57.0, 1058.125], [56.0, 1037.3333333333333], [59.0, 1075.7777777777778], [58.0, 1056.8], [61.0, 1127.0], [60.0, 1090.2], [63.0, 1195.7777777777778], [62.0, 1131.3333333333333], [67.0, 1358.0], [66.0, 1332.5], [65.0, 1178.0], [64.0, 1164.0], [71.0, 1400.0], [70.0, 1408.5], [68.0, 1197.6666666666667], [75.0, 1189.3333333333333], [74.0, 1349.0], [73.0, 1321.6666666666667], [79.0, 1337.0], [78.0, 1346.0], [77.0, 1332.0], [83.0, 1289.5], [82.0, 1176.0], [80.0, 1236.0], [86.0, 1258.0], [87.0, 1214.0], [85.0, 1267.0], [90.0, 1073.2], [1.0, 51.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[34.904, 625.9580000000004]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 90.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4766.666666666667, "minX": 1.6698007902E12, "maxY": 55500.0, "series": [{"data": [[1.6698007932E12, 50566.666666666664], [1.6698007962E12, 37000.0], [1.6698007926E12, 38233.333333333336], [1.6698007938E12, 44400.0], [1.6698007974E12, 37000.0], [1.6698007902E12, 55500.0], [1.6698007968E12, 35766.666666666664], [1.6698007914E12, 44400.0], [1.669800795E12, 49333.333333333336], [1.6698007944E12, 49333.333333333336], [1.669800798E12, 27133.333333333332], [1.6698007908E12, 51800.0], [1.669800792E12, 45633.333333333336], [1.6698007956E12, 50566.666666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6698007932E12, 8883.333333333334], [1.6698007962E12, 6500.0], [1.6698007926E12, 6716.666666666667], [1.6698007938E12, 7800.0], [1.6698007974E12, 6500.0], [1.6698007902E12, 9750.0], [1.6698007968E12, 6283.333333333333], [1.6698007914E12, 7800.0], [1.669800795E12, 8666.666666666666], [1.6698007944E12, 8666.666666666666], [1.669800798E12, 4766.666666666667], [1.6698007908E12, 9100.0], [1.669800792E12, 8016.666666666667], [1.6698007956E12, 8883.333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.669800798E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 65.99999999999999, "minX": 1.6698007902E12, "maxY": 1260.888888888889, "series": [{"data": [[1.6698007932E12, 843.2682926829269], [1.6698007962E12, 69.83333333333331], [1.6698007926E12, 793.7419354838709], [1.6698007938E12, 766.7222222222223], [1.6698007974E12, 70.4], [1.6698007902E12, 1260.888888888889], [1.6698007968E12, 65.99999999999999], [1.6698007914E12, 1028.5277777777778], [1.669800795E12, 409.4749999999999], [1.6698007944E12, 586.85], [1.669800798E12, 76.00000000000001], [1.6698007908E12, 1090.2619047619041], [1.669800792E12, 853.810810810811], [1.6698007956E12, 180.53658536585368]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.669800798E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 65.9310344827586, "minX": 1.6698007902E12, "maxY": 1260.155555555556, "series": [{"data": [[1.6698007932E12, 843.1951219512198], [1.6698007962E12, 69.73333333333333], [1.6698007926E12, 793.6451612903224], [1.6698007938E12, 766.638888888889], [1.6698007974E12, 70.36666666666665], [1.6698007902E12, 1260.155555555556], [1.6698007968E12, 65.9310344827586], [1.6698007914E12, 1028.4444444444443], [1.669800795E12, 409.425], [1.6698007944E12, 586.725], [1.669800798E12, 76.00000000000001], [1.6698007908E12, 1090.1666666666665], [1.669800792E12, 853.7027027027026], [1.6698007956E12, 180.41463414634148]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.669800798E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.7741935483870968, "minX": 1.6698007902E12, "maxY": 24.777777777777775, "series": [{"data": [[1.6698007932E12, 1.1219512195121955], [1.6698007962E12, 0.8999999999999999], [1.6698007926E12, 0.7741935483870968], [1.6698007938E12, 1.0277777777777777], [1.6698007974E12, 0.8333333333333334], [1.6698007902E12, 24.777777777777775], [1.6698007968E12, 0.9310344827586206], [1.6698007914E12, 1.0000000000000002], [1.669800795E12, 0.9249999999999997], [1.6698007944E12, 0.9999999999999999], [1.669800798E12, 0.909090909090909], [1.6698007908E12, 1.0952380952380951], [1.669800792E12, 1.0270270270270274], [1.6698007956E12, 0.951219512195122]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.669800798E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 49.0, "minX": 1.6698007902E12, "maxY": 1455.0, "series": [{"data": [[1.6698007932E12, 1124.0], [1.6698007962E12, 103.0], [1.6698007926E12, 917.0], [1.6698007938E12, 886.0], [1.6698007974E12, 98.0], [1.6698007902E12, 1455.0], [1.6698007968E12, 85.0], [1.6698007914E12, 1407.0], [1.669800795E12, 523.0], [1.6698007944E12, 782.0], [1.669800798E12, 101.0], [1.6698007908E12, 1267.0], [1.669800792E12, 1025.0], [1.6698007956E12, 328.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6698007932E12, 973.4000000000001], [1.6698007962E12, 82.0], [1.6698007926E12, 907.2], [1.6698007938E12, 847.7], [1.6698007974E12, 86.7], [1.6698007902E12, 1409.4], [1.6698007968E12, 80.0], [1.6698007914E12, 1152.2], [1.669800795E12, 515.1], [1.6698007944E12, 715.8], [1.669800798E12, 92.7], [1.6698007908E12, 1226.9], [1.669800792E12, 951.4000000000001], [1.6698007956E12, 295.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6698007932E12, 1124.0], [1.6698007962E12, 103.0], [1.6698007926E12, 917.0], [1.6698007938E12, 886.0], [1.6698007974E12, 98.0], [1.6698007902E12, 1455.0], [1.6698007968E12, 85.0], [1.6698007914E12, 1407.0], [1.669800795E12, 523.0], [1.6698007944E12, 782.0], [1.669800798E12, 101.0], [1.6698007908E12, 1267.0], [1.669800792E12, 1025.0], [1.6698007956E12, 328.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6698007932E12, 994.9], [1.6698007962E12, 102.45], [1.6698007926E12, 913.4], [1.6698007938E12, 876.65], [1.6698007974E12, 91.94999999999999], [1.6698007902E12, 1433.0], [1.6698007968E12, 84.5], [1.6698007914E12, 1200.4499999999996], [1.669800795E12, 520.9], [1.6698007944E12, 735.6999999999999], [1.669800798E12, 99.79999999999998], [1.6698007908E12, 1253.65], [1.669800792E12, 973.7], [1.6698007956E12, 306.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6698007932E12, 628.0], [1.6698007962E12, 53.0], [1.6698007926E12, 644.0], [1.6698007938E12, 632.0], [1.6698007974E12, 49.0], [1.6698007902E12, 1015.0], [1.6698007968E12, 52.0], [1.6698007914E12, 795.0], [1.669800795E12, 248.0], [1.6698007944E12, 425.0], [1.669800798E12, 51.0], [1.6698007908E12, 922.0], [1.669800792E12, 708.0], [1.6698007956E12, 57.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6698007932E12, 826.0], [1.6698007962E12, 66.0], [1.6698007926E12, 788.0], [1.6698007938E12, 772.5], [1.6698007974E12, 69.5], [1.6698007902E12, 1284.0], [1.6698007968E12, 64.0], [1.6698007914E12, 1045.0], [1.669800795E12, 419.5], [1.6698007944E12, 574.0], [1.669800798E12, 77.5], [1.6698007908E12, 1088.5], [1.669800792E12, 863.0], [1.6698007956E12, 189.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.669800798E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 69.0, "minX": 22.0, "maxY": 1215.0, "series": [{"data": [[66.0, 1049.5], [70.0, 665.0], [68.0, 337.0], [22.0, 77.5], [49.0, 69.0], [53.0, 70.0], [55.0, 824.0], [57.0, 1215.0], [60.0, 809.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 69.0, "minX": 22.0, "maxY": 1215.0, "series": [{"data": [[66.0, 1049.0], [70.0, 665.0], [68.0, 337.0], [22.0, 77.5], [49.0, 69.0], [53.0, 70.0], [55.0, 824.0], [57.0, 1215.0], [60.0, 809.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.669800789E12, "maxY": 70.0, "series": [{"data": [[1.6698007896E12, 55.0], [1.6698007932E12, 56.666666666666664], [1.6698007962E12, 50.0], [1.669800789E12, 70.0], [1.6698007926E12, 53.333333333333336], [1.6698007938E12, 50.0], [1.6698007974E12, 50.0], [1.6698007902E12, 51.666666666666664], [1.6698007968E12, 50.0], [1.6698007914E12, 50.0], [1.669800795E12, 50.0], [1.6698007944E12, 50.0], [1.669800798E12, 30.0], [1.6698007908E12, 53.333333333333336], [1.669800792E12, 63.333333333333336], [1.6698007956E12, 50.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.669800798E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 36.666666666666664, "minX": 1.6698007902E12, "maxY": 75.0, "series": [{"data": [[1.6698007932E12, 68.33333333333333], [1.6698007962E12, 50.0], [1.6698007926E12, 51.666666666666664], [1.6698007938E12, 60.0], [1.6698007974E12, 50.0], [1.6698007902E12, 75.0], [1.6698007968E12, 48.333333333333336], [1.6698007914E12, 60.0], [1.669800795E12, 66.66666666666667], [1.6698007944E12, 66.66666666666667], [1.669800798E12, 36.666666666666664], [1.6698007908E12, 70.0], [1.669800792E12, 61.666666666666664], [1.6698007956E12, 68.33333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.669800798E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 36.666666666666664, "minX": 1.6698007902E12, "maxY": 75.0, "series": [{"data": [[1.6698007932E12, 68.33333333333333], [1.6698007962E12, 50.0], [1.6698007926E12, 51.666666666666664], [1.6698007938E12, 60.0], [1.6698007974E12, 50.0], [1.6698007902E12, 75.0], [1.6698007968E12, 48.333333333333336], [1.6698007914E12, 60.0], [1.669800795E12, 66.66666666666667], [1.6698007944E12, 66.66666666666667], [1.669800798E12, 36.666666666666664], [1.6698007908E12, 70.0], [1.669800792E12, 61.666666666666664], [1.6698007956E12, 68.33333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.669800798E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 36.666666666666664, "minX": 1.6698007902E12, "maxY": 75.0, "series": [{"data": [[1.6698007932E12, 68.33333333333333], [1.6698007962E12, 50.0], [1.6698007926E12, 51.666666666666664], [1.6698007938E12, 60.0], [1.6698007974E12, 50.0], [1.6698007902E12, 75.0], [1.6698007968E12, 48.333333333333336], [1.6698007914E12, 60.0], [1.669800795E12, 66.66666666666667], [1.6698007944E12, 66.66666666666667], [1.669800798E12, 36.666666666666664], [1.6698007908E12, 70.0], [1.669800792E12, 61.666666666666664], [1.6698007956E12, 68.33333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.669800798E12, "title": "Total Transactions Per Second"}},
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

