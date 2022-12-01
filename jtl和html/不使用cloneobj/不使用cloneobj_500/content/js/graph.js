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
        data: {"result": {"minY": 47.0, "minX": 0.0, "maxY": 1166.0, "series": [{"data": [[0.0, 47.0], [0.1, 47.0], [0.2, 54.0], [0.3, 54.0], [0.4, 55.0], [0.5, 55.0], [0.6, 55.0], [0.7, 58.0], [0.8, 60.0], [0.9, 60.0], [1.0, 61.0], [1.1, 61.0], [1.2, 61.0], [1.3, 61.0], [1.4, 62.0], [1.5, 62.0], [1.6, 62.0], [1.7, 62.0], [1.8, 62.0], [1.9, 62.0], [2.0, 64.0], [2.1, 64.0], [2.2, 65.0], [2.3, 65.0], [2.4, 65.0], [2.5, 65.0], [2.6, 66.0], [2.7, 66.0], [2.8, 66.0], [2.9, 67.0], [3.0, 67.0], [3.1, 67.0], [3.2, 68.0], [3.3, 68.0], [3.4, 68.0], [3.5, 68.0], [3.6, 68.0], [3.7, 68.0], [3.8, 68.0], [3.9, 68.0], [4.0, 69.0], [4.1, 69.0], [4.2, 69.0], [4.3, 69.0], [4.4, 69.0], [4.5, 69.0], [4.6, 70.0], [4.7, 70.0], [4.8, 70.0], [4.9, 70.0], [5.0, 70.0], [5.1, 70.0], [5.2, 70.0], [5.3, 70.0], [5.4, 71.0], [5.5, 71.0], [5.6, 71.0], [5.7, 71.0], [5.8, 71.0], [5.9, 71.0], [6.0, 71.0], [6.1, 71.0], [6.2, 71.0], [6.3, 71.0], [6.4, 71.0], [6.5, 71.0], [6.6, 71.0], [6.7, 71.0], [6.8, 72.0], [6.9, 72.0], [7.0, 72.0], [7.1, 72.0], [7.2, 72.0], [7.3, 72.0], [7.4, 72.0], [7.5, 72.0], [7.6, 73.0], [7.7, 73.0], [7.8, 73.0], [7.9, 73.0], [8.0, 73.0], [8.1, 73.0], [8.2, 74.0], [8.3, 74.0], [8.4, 74.0], [8.5, 74.0], [8.6, 74.0], [8.7, 74.0], [8.8, 75.0], [8.9, 75.0], [9.0, 75.0], [9.1, 75.0], [9.2, 75.0], [9.3, 75.0], [9.4, 76.0], [9.5, 76.0], [9.6, 76.0], [9.7, 76.0], [9.8, 76.0], [9.9, 76.0], [10.0, 76.0], [10.1, 76.0], [10.2, 76.0], [10.3, 76.0], [10.4, 77.0], [10.5, 77.0], [10.6, 77.0], [10.7, 77.0], [10.8, 77.0], [10.9, 77.0], [11.0, 78.0], [11.1, 78.0], [11.2, 79.0], [11.3, 79.0], [11.4, 79.0], [11.5, 79.0], [11.6, 80.0], [11.7, 80.0], [11.8, 80.0], [11.9, 80.0], [12.0, 80.0], [12.1, 80.0], [12.2, 80.0], [12.3, 80.0], [12.4, 80.0], [12.5, 80.0], [12.6, 80.0], [12.7, 80.0], [12.8, 81.0], [12.9, 81.0], [13.0, 81.0], [13.1, 81.0], [13.2, 81.0], [13.3, 81.0], [13.4, 82.0], [13.5, 82.0], [13.6, 82.0], [13.7, 82.0], [13.8, 82.0], [13.9, 82.0], [14.0, 82.0], [14.1, 82.0], [14.2, 83.0], [14.3, 83.0], [14.4, 83.0], [14.5, 83.0], [14.6, 83.0], [14.7, 83.0], [14.8, 83.0], [14.9, 83.0], [15.0, 84.0], [15.1, 84.0], [15.2, 84.0], [15.3, 84.0], [15.4, 84.0], [15.5, 84.0], [15.6, 84.0], [15.7, 84.0], [15.8, 84.0], [15.9, 84.0], [16.0, 86.0], [16.1, 86.0], [16.2, 87.0], [16.3, 87.0], [16.4, 87.0], [16.5, 87.0], [16.6, 88.0], [16.7, 88.0], [16.8, 90.0], [16.9, 90.0], [17.0, 91.0], [17.1, 91.0], [17.2, 91.0], [17.3, 91.0], [17.4, 91.0], [17.5, 91.0], [17.6, 92.0], [17.7, 92.0], [17.8, 92.0], [17.9, 92.0], [18.0, 92.0], [18.1, 92.0], [18.2, 93.0], [18.3, 93.0], [18.4, 95.0], [18.5, 95.0], [18.6, 96.0], [18.7, 96.0], [18.8, 96.0], [18.9, 96.0], [19.0, 97.0], [19.1, 97.0], [19.2, 97.0], [19.3, 97.0], [19.4, 97.0], [19.5, 97.0], [19.6, 98.0], [19.7, 98.0], [19.8, 100.0], [19.9, 100.0], [20.0, 101.0], [20.1, 101.0], [20.2, 101.0], [20.3, 101.0], [20.4, 102.0], [20.5, 102.0], [20.6, 104.0], [20.7, 104.0], [20.8, 105.0], [20.9, 105.0], [21.0, 107.0], [21.1, 107.0], [21.2, 108.0], [21.3, 108.0], [21.4, 114.0], [21.5, 114.0], [21.6, 118.0], [21.7, 118.0], [21.8, 133.0], [21.9, 133.0], [22.0, 135.0], [22.1, 135.0], [22.2, 141.0], [22.3, 141.0], [22.4, 151.0], [22.5, 151.0], [22.6, 164.0], [22.7, 164.0], [22.8, 172.0], [22.9, 172.0], [23.0, 178.0], [23.1, 178.0], [23.2, 179.0], [23.3, 179.0], [23.4, 185.0], [23.5, 185.0], [23.6, 194.0], [23.7, 194.0], [23.8, 197.0], [23.9, 197.0], [24.0, 204.0], [24.1, 204.0], [24.2, 236.0], [24.3, 236.0], [24.4, 241.0], [24.5, 241.0], [24.6, 247.0], [24.7, 247.0], [24.8, 250.0], [24.9, 250.0], [25.0, 251.0], [25.1, 251.0], [25.2, 259.0], [25.3, 259.0], [25.4, 263.0], [25.5, 263.0], [25.6, 263.0], [25.7, 263.0], [25.8, 263.0], [25.9, 263.0], [26.0, 264.0], [26.1, 264.0], [26.2, 269.0], [26.3, 269.0], [26.4, 275.0], [26.5, 275.0], [26.6, 275.0], [26.7, 275.0], [26.8, 279.0], [26.9, 279.0], [27.0, 287.0], [27.1, 287.0], [27.2, 288.0], [27.3, 288.0], [27.4, 290.0], [27.5, 290.0], [27.6, 302.0], [27.7, 302.0], [27.8, 308.0], [27.9, 308.0], [28.0, 315.0], [28.1, 315.0], [28.2, 319.0], [28.3, 319.0], [28.4, 321.0], [28.5, 321.0], [28.6, 338.0], [28.7, 338.0], [28.8, 339.0], [28.9, 339.0], [29.0, 346.0], [29.1, 346.0], [29.2, 348.0], [29.3, 348.0], [29.4, 348.0], [29.5, 348.0], [29.6, 348.0], [29.7, 348.0], [29.8, 354.0], [29.9, 354.0], [30.0, 370.0], [30.1, 370.0], [30.2, 371.0], [30.3, 371.0], [30.4, 379.0], [30.5, 379.0], [30.6, 391.0], [30.7, 391.0], [30.8, 401.0], [30.9, 401.0], [31.0, 403.0], [31.1, 403.0], [31.2, 405.0], [31.3, 405.0], [31.4, 408.0], [31.5, 408.0], [31.6, 412.0], [31.7, 412.0], [31.8, 416.0], [31.9, 416.0], [32.0, 422.0], [32.1, 422.0], [32.2, 432.0], [32.3, 432.0], [32.4, 436.0], [32.5, 436.0], [32.6, 436.0], [32.7, 436.0], [32.8, 439.0], [32.9, 439.0], [33.0, 439.0], [33.1, 439.0], [33.2, 441.0], [33.3, 441.0], [33.4, 442.0], [33.5, 442.0], [33.6, 458.0], [33.7, 458.0], [33.8, 459.0], [33.9, 459.0], [34.0, 459.0], [34.1, 459.0], [34.2, 468.0], [34.3, 468.0], [34.4, 469.0], [34.5, 469.0], [34.6, 473.0], [34.7, 473.0], [34.8, 476.0], [34.9, 476.0], [35.0, 483.0], [35.1, 483.0], [35.2, 484.0], [35.3, 484.0], [35.4, 486.0], [35.5, 486.0], [35.6, 488.0], [35.7, 488.0], [35.8, 489.0], [35.9, 489.0], [36.0, 495.0], [36.1, 495.0], [36.2, 496.0], [36.3, 496.0], [36.4, 497.0], [36.5, 497.0], [36.6, 498.0], [36.7, 498.0], [36.8, 498.0], [36.9, 500.0], [37.0, 500.0], [37.1, 507.0], [37.2, 507.0], [37.3, 509.0], [37.4, 509.0], [37.5, 512.0], [37.6, 512.0], [37.7, 512.0], [37.8, 512.0], [37.9, 514.0], [38.0, 514.0], [38.1, 521.0], [38.2, 521.0], [38.3, 526.0], [38.4, 526.0], [38.5, 526.0], [38.6, 526.0], [38.7, 528.0], [38.8, 528.0], [38.9, 533.0], [39.0, 533.0], [39.1, 536.0], [39.2, 536.0], [39.3, 543.0], [39.4, 543.0], [39.5, 545.0], [39.6, 545.0], [39.7, 548.0], [39.8, 548.0], [39.9, 552.0], [40.0, 552.0], [40.1, 553.0], [40.2, 553.0], [40.3, 558.0], [40.4, 558.0], [40.5, 559.0], [40.6, 559.0], [40.7, 566.0], [40.8, 566.0], [40.9, 569.0], [41.0, 569.0], [41.1, 573.0], [41.2, 573.0], [41.3, 574.0], [41.4, 574.0], [41.5, 575.0], [41.6, 575.0], [41.7, 577.0], [41.8, 577.0], [41.9, 578.0], [42.0, 578.0], [42.1, 578.0], [42.2, 578.0], [42.3, 580.0], [42.4, 580.0], [42.5, 580.0], [42.6, 580.0], [42.7, 581.0], [42.8, 581.0], [42.9, 582.0], [43.0, 582.0], [43.1, 584.0], [43.2, 584.0], [43.3, 584.0], [43.4, 584.0], [43.5, 585.0], [43.6, 585.0], [43.7, 587.0], [43.8, 587.0], [43.9, 589.0], [44.0, 589.0], [44.1, 599.0], [44.2, 599.0], [44.3, 600.0], [44.4, 600.0], [44.5, 603.0], [44.6, 603.0], [44.7, 604.0], [44.8, 604.0], [44.9, 604.0], [45.0, 604.0], [45.1, 606.0], [45.2, 606.0], [45.3, 606.0], [45.4, 606.0], [45.5, 607.0], [45.6, 607.0], [45.7, 607.0], [45.8, 607.0], [45.9, 612.0], [46.0, 612.0], [46.1, 613.0], [46.2, 613.0], [46.3, 614.0], [46.4, 614.0], [46.5, 614.0], [46.6, 614.0], [46.7, 616.0], [46.8, 616.0], [46.9, 617.0], [47.0, 617.0], [47.1, 621.0], [47.2, 621.0], [47.3, 623.0], [47.4, 623.0], [47.5, 633.0], [47.6, 633.0], [47.7, 633.0], [47.8, 633.0], [47.9, 637.0], [48.0, 637.0], [48.1, 639.0], [48.2, 639.0], [48.3, 640.0], [48.4, 640.0], [48.5, 640.0], [48.6, 640.0], [48.7, 642.0], [48.8, 642.0], [48.9, 647.0], [49.0, 647.0], [49.1, 656.0], [49.2, 656.0], [49.3, 659.0], [49.4, 659.0], [49.5, 667.0], [49.6, 667.0], [49.7, 669.0], [49.8, 669.0], [49.9, 671.0], [50.0, 671.0], [50.1, 672.0], [50.2, 672.0], [50.3, 674.0], [50.4, 674.0], [50.5, 676.0], [50.6, 676.0], [50.7, 679.0], [50.8, 679.0], [50.9, 681.0], [51.0, 681.0], [51.1, 683.0], [51.2, 683.0], [51.3, 684.0], [51.4, 684.0], [51.5, 686.0], [51.6, 686.0], [51.7, 686.0], [51.8, 686.0], [51.9, 688.0], [52.0, 688.0], [52.1, 690.0], [52.2, 690.0], [52.3, 691.0], [52.4, 691.0], [52.5, 694.0], [52.6, 694.0], [52.7, 695.0], [52.8, 695.0], [52.9, 695.0], [53.0, 695.0], [53.1, 696.0], [53.2, 696.0], [53.3, 697.0], [53.4, 697.0], [53.5, 703.0], [53.6, 703.0], [53.7, 708.0], [53.8, 708.0], [53.9, 709.0], [54.0, 709.0], [54.1, 710.0], [54.2, 710.0], [54.3, 713.0], [54.4, 713.0], [54.5, 717.0], [54.6, 717.0], [54.7, 719.0], [54.8, 719.0], [54.9, 720.0], [55.0, 720.0], [55.1, 721.0], [55.2, 721.0], [55.3, 724.0], [55.4, 724.0], [55.5, 725.0], [55.6, 725.0], [55.7, 729.0], [55.8, 729.0], [55.9, 732.0], [56.0, 732.0], [56.1, 733.0], [56.2, 733.0], [56.3, 739.0], [56.4, 739.0], [56.5, 739.0], [56.6, 739.0], [56.7, 743.0], [56.8, 743.0], [56.9, 746.0], [57.0, 746.0], [57.1, 747.0], [57.2, 747.0], [57.3, 749.0], [57.4, 749.0], [57.5, 751.0], [57.6, 751.0], [57.7, 751.0], [57.8, 751.0], [57.9, 756.0], [58.0, 756.0], [58.1, 756.0], [58.2, 756.0], [58.3, 758.0], [58.4, 758.0], [58.5, 758.0], [58.6, 758.0], [58.7, 760.0], [58.8, 760.0], [58.9, 760.0], [59.0, 760.0], [59.1, 771.0], [59.2, 771.0], [59.3, 771.0], [59.4, 771.0], [59.5, 773.0], [59.6, 773.0], [59.7, 774.0], [59.8, 774.0], [59.9, 776.0], [60.0, 776.0], [60.1, 779.0], [60.2, 779.0], [60.3, 780.0], [60.4, 780.0], [60.5, 780.0], [60.6, 780.0], [60.7, 782.0], [60.8, 782.0], [60.9, 787.0], [61.0, 787.0], [61.1, 787.0], [61.2, 787.0], [61.3, 789.0], [61.4, 789.0], [61.5, 793.0], [61.6, 793.0], [61.7, 797.0], [61.8, 797.0], [61.9, 798.0], [62.0, 798.0], [62.1, 802.0], [62.2, 802.0], [62.3, 802.0], [62.4, 802.0], [62.5, 804.0], [62.6, 804.0], [62.7, 808.0], [62.8, 808.0], [62.9, 809.0], [63.0, 809.0], [63.1, 812.0], [63.2, 812.0], [63.3, 814.0], [63.4, 814.0], [63.5, 815.0], [63.6, 815.0], [63.7, 816.0], [63.8, 816.0], [63.9, 819.0], [64.0, 819.0], [64.1, 825.0], [64.2, 825.0], [64.3, 826.0], [64.4, 826.0], [64.5, 829.0], [64.6, 829.0], [64.7, 829.0], [64.8, 829.0], [64.9, 833.0], [65.0, 833.0], [65.1, 833.0], [65.2, 833.0], [65.3, 835.0], [65.4, 835.0], [65.5, 837.0], [65.6, 837.0], [65.7, 839.0], [65.8, 839.0], [65.9, 842.0], [66.0, 842.0], [66.1, 843.0], [66.2, 843.0], [66.3, 847.0], [66.4, 847.0], [66.5, 848.0], [66.6, 848.0], [66.7, 849.0], [66.8, 849.0], [66.9, 850.0], [67.0, 850.0], [67.1, 850.0], [67.2, 850.0], [67.3, 850.0], [67.4, 850.0], [67.5, 852.0], [67.6, 852.0], [67.7, 854.0], [67.8, 854.0], [67.9, 855.0], [68.0, 855.0], [68.1, 860.0], [68.2, 860.0], [68.3, 863.0], [68.4, 863.0], [68.5, 867.0], [68.6, 867.0], [68.7, 867.0], [68.8, 867.0], [68.9, 868.0], [69.0, 868.0], [69.1, 869.0], [69.2, 869.0], [69.3, 872.0], [69.4, 872.0], [69.5, 872.0], [69.6, 872.0], [69.7, 874.0], [69.8, 874.0], [69.9, 877.0], [70.0, 877.0], [70.1, 880.0], [70.2, 880.0], [70.3, 881.0], [70.4, 881.0], [70.5, 882.0], [70.6, 882.0], [70.7, 885.0], [70.8, 885.0], [70.9, 885.0], [71.0, 885.0], [71.1, 888.0], [71.2, 888.0], [71.3, 888.0], [71.4, 888.0], [71.5, 889.0], [71.6, 889.0], [71.7, 889.0], [71.8, 889.0], [71.9, 892.0], [72.0, 892.0], [72.1, 892.0], [72.2, 892.0], [72.3, 893.0], [72.4, 893.0], [72.5, 894.0], [72.6, 894.0], [72.7, 896.0], [72.8, 896.0], [72.9, 897.0], [73.0, 897.0], [73.1, 897.0], [73.2, 897.0], [73.3, 900.0], [73.4, 900.0], [73.5, 902.0], [73.6, 902.0], [73.7, 903.0], [73.8, 903.0], [73.9, 903.0], [74.0, 903.0], [74.1, 903.0], [74.2, 903.0], [74.3, 904.0], [74.4, 904.0], [74.5, 908.0], [74.6, 908.0], [74.7, 909.0], [74.8, 909.0], [74.9, 910.0], [75.0, 910.0], [75.1, 911.0], [75.2, 911.0], [75.3, 912.0], [75.4, 912.0], [75.5, 912.0], [75.6, 912.0], [75.7, 913.0], [75.8, 913.0], [75.9, 913.0], [76.0, 913.0], [76.1, 914.0], [76.2, 914.0], [76.3, 914.0], [76.4, 914.0], [76.5, 919.0], [76.6, 919.0], [76.7, 922.0], [76.8, 922.0], [76.9, 923.0], [77.0, 923.0], [77.1, 924.0], [77.2, 924.0], [77.3, 925.0], [77.4, 925.0], [77.5, 925.0], [77.6, 925.0], [77.7, 927.0], [77.8, 927.0], [77.9, 928.0], [78.0, 928.0], [78.1, 928.0], [78.2, 928.0], [78.3, 928.0], [78.4, 928.0], [78.5, 932.0], [78.6, 932.0], [78.7, 932.0], [78.8, 932.0], [78.9, 934.0], [79.0, 934.0], [79.1, 935.0], [79.2, 935.0], [79.3, 938.0], [79.4, 938.0], [79.5, 938.0], [79.6, 938.0], [79.7, 939.0], [79.8, 939.0], [79.9, 941.0], [80.0, 941.0], [80.1, 943.0], [80.2, 943.0], [80.3, 943.0], [80.4, 943.0], [80.5, 944.0], [80.6, 944.0], [80.7, 945.0], [80.8, 945.0], [80.9, 946.0], [81.0, 946.0], [81.1, 948.0], [81.2, 948.0], [81.3, 949.0], [81.4, 949.0], [81.5, 949.0], [81.6, 949.0], [81.7, 949.0], [81.8, 949.0], [81.9, 950.0], [82.0, 950.0], [82.1, 950.0], [82.2, 950.0], [82.3, 951.0], [82.4, 951.0], [82.5, 952.0], [82.6, 952.0], [82.7, 952.0], [82.8, 952.0], [82.9, 952.0], [83.0, 952.0], [83.1, 952.0], [83.2, 952.0], [83.3, 954.0], [83.4, 954.0], [83.5, 954.0], [83.6, 954.0], [83.7, 955.0], [83.8, 955.0], [83.9, 956.0], [84.0, 956.0], [84.1, 958.0], [84.2, 958.0], [84.3, 960.0], [84.4, 960.0], [84.5, 960.0], [84.6, 960.0], [84.7, 960.0], [84.8, 960.0], [84.9, 960.0], [85.0, 960.0], [85.1, 962.0], [85.2, 962.0], [85.3, 962.0], [85.4, 962.0], [85.5, 965.0], [85.6, 965.0], [85.7, 965.0], [85.8, 965.0], [85.9, 966.0], [86.0, 966.0], [86.1, 966.0], [86.2, 966.0], [86.3, 967.0], [86.4, 967.0], [86.5, 970.0], [86.6, 970.0], [86.7, 970.0], [86.8, 970.0], [86.9, 971.0], [87.0, 971.0], [87.1, 973.0], [87.2, 973.0], [87.3, 973.0], [87.4, 973.0], [87.5, 974.0], [87.6, 974.0], [87.7, 975.0], [87.8, 975.0], [87.9, 976.0], [88.0, 976.0], [88.1, 976.0], [88.2, 976.0], [88.3, 979.0], [88.4, 979.0], [88.5, 979.0], [88.6, 979.0], [88.7, 979.0], [88.8, 979.0], [88.9, 980.0], [89.0, 980.0], [89.1, 981.0], [89.2, 981.0], [89.3, 982.0], [89.4, 982.0], [89.5, 983.0], [89.6, 983.0], [89.7, 985.0], [89.8, 985.0], [89.9, 986.0], [90.0, 986.0], [90.1, 988.0], [90.2, 988.0], [90.3, 994.0], [90.4, 994.0], [90.5, 998.0], [90.6, 998.0], [90.7, 998.0], [90.8, 998.0], [90.9, 999.0], [91.0, 999.0], [91.1, 999.0], [91.2, 999.0], [91.3, 999.0], [91.4, 999.0], [91.5, 1000.0], [91.6, 1000.0], [91.7, 1002.0], [91.8, 1002.0], [91.9, 1003.0], [92.0, 1003.0], [92.1, 1008.0], [92.2, 1008.0], [92.3, 1008.0], [92.4, 1008.0], [92.5, 1014.0], [92.6, 1014.0], [92.7, 1017.0], [92.8, 1017.0], [92.9, 1019.0], [93.0, 1019.0], [93.1, 1020.0], [93.2, 1020.0], [93.3, 1021.0], [93.4, 1021.0], [93.5, 1021.0], [93.6, 1021.0], [93.7, 1023.0], [93.8, 1023.0], [93.9, 1030.0], [94.0, 1030.0], [94.1, 1034.0], [94.2, 1034.0], [94.3, 1042.0], [94.4, 1042.0], [94.5, 1046.0], [94.6, 1046.0], [94.7, 1048.0], [94.8, 1048.0], [94.9, 1049.0], [95.0, 1049.0], [95.1, 1053.0], [95.2, 1053.0], [95.3, 1053.0], [95.4, 1053.0], [95.5, 1057.0], [95.6, 1057.0], [95.7, 1057.0], [95.8, 1057.0], [95.9, 1059.0], [96.0, 1059.0], [96.1, 1059.0], [96.2, 1059.0], [96.3, 1060.0], [96.4, 1060.0], [96.5, 1061.0], [96.6, 1061.0], [96.7, 1064.0], [96.8, 1064.0], [96.9, 1065.0], [97.0, 1065.0], [97.1, 1065.0], [97.2, 1065.0], [97.3, 1068.0], [97.4, 1068.0], [97.5, 1072.0], [97.6, 1072.0], [97.7, 1072.0], [97.8, 1072.0], [97.9, 1074.0], [98.0, 1074.0], [98.1, 1083.0], [98.2, 1083.0], [98.3, 1085.0], [98.4, 1085.0], [98.5, 1103.0], [98.6, 1103.0], [98.7, 1113.0], [98.8, 1113.0], [98.9, 1118.0], [99.0, 1118.0], [99.1, 1127.0], [99.2, 1127.0], [99.3, 1136.0], [99.4, 1136.0], [99.5, 1142.0], [99.6, 1142.0], [99.7, 1151.0], [99.8, 1151.0], [99.9, 1166.0], [100.0, 1166.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 99.0, "series": [{"data": [[0.0, 99.0], [1100.0, 8.0], [600.0, 46.0], [300.0, 16.0], [700.0, 43.0], [400.0, 30.0], [800.0, 56.0], [200.0, 18.0], [100.0, 21.0], [900.0, 91.0], [500.0, 37.0], [1000.0, 35.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 185.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 315.0, "series": [{"data": [[0.0, 185.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 315.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.818181818181819, "minX": 1.669803111E12, "maxY": 54.800000000000004, "series": [{"data": [[1.6698031134E12, 53.70967741935484], [1.669803117E12, 16.25581395348837], [1.6698031122E12, 49.142857142857146], [1.6698031158E12, 34.25], [1.6698031194E12, 3.818181818181819], [1.6698031128E12, 54.64285714285714], [1.6698031164E12, 25.538461538461533], [1.6698031116E12, 44.70967741935483], [1.6698031152E12, 43.35], [1.6698031188E12, 4.3999999999999995], [1.669803114E12, 54.800000000000004], [1.6698031176E12, 5.428571428571428], [1.669803111E12, 42.14285714285714], [1.6698031146E12, 51.20588235294117], [1.6698031182E12, 4.96551724137931]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698031194E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 60.0, "minX": 1.0, "maxY": 1092.8, "series": [{"data": [[2.0, 64.0], [3.0, 60.66666666666667], [4.0, 72.94230769230768], [5.0, 86.74193548387098], [6.0, 96.16666666666667], [7.0, 109.5], [8.0, 175.5], [9.0, 152.0], [10.0, 216.0], [11.0, 186.0], [12.0, 224.0], [13.0, 251.8], [14.0, 275.83333333333337], [15.0, 274.0], [16.0, 301.0], [17.0, 327.0], [18.0, 356.5], [19.0, 368.0], [20.0, 365.1666666666667], [21.0, 425.8], [22.0, 438.1428571428571], [23.0, 410.75], [24.0, 468.8], [25.0, 512.0], [26.0, 473.0], [27.0, 496.5], [28.0, 523.375], [29.0, 539.0], [30.0, 578.8333333333333], [31.0, 564.1666666666667], [33.0, 652.0], [32.0, 615.0], [35.0, 657.3333333333334], [34.0, 609.6666666666666], [37.0, 685.7], [36.0, 674.8571428571428], [39.0, 716.0], [38.0, 740.5], [41.0, 715.5], [40.0, 788.8], [43.0, 764.8666666666667], [42.0, 787.2142857142858], [45.0, 731.0], [44.0, 710.4285714285714], [46.0, 833.0000000000001], [47.0, 859.4], [48.0, 904.5333333333333], [49.0, 917.3571428571429], [50.0, 940.5714285714286], [51.0, 921.6666666666665], [52.0, 835.3749999999999], [53.0, 897.4761904761905], [54.0, 938.0], [55.0, 984.8749999999999], [56.0, 968.3333333333333], [57.0, 1015.5], [58.0, 992.25], [59.0, 1092.8], [60.0, 1011.8], [1.0, 60.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[32.978, 593.5760000000007]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4876.666666666667, "minX": 1.669803111E12, "maxY": 53033.333333333336, "series": [{"data": [[1.6698031134E12, 38233.333333333336], [1.669803117E12, 53033.333333333336], [1.6698031122E12, 43166.666666666664], [1.6698031158E12, 49333.333333333336], [1.6698031194E12, 27133.333333333332], [1.6698031128E12, 34533.333333333336], [1.6698031164E12, 48100.0], [1.6698031116E12, 38233.333333333336], [1.6698031152E12, 49333.333333333336], [1.6698031188E12, 37000.0], [1.669803114E12, 43166.666666666664], [1.6698031176E12, 43166.666666666664], [1.669803111E12, 34533.333333333336], [1.6698031146E12, 41933.333333333336], [1.6698031182E12, 35766.666666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6698031134E12, 6871.666666666667], [1.669803117E12, 9531.666666666666], [1.6698031122E12, 7758.333333333333], [1.6698031158E12, 8866.666666666666], [1.6698031194E12, 4876.666666666667], [1.6698031128E12, 6206.666666666667], [1.6698031164E12, 8645.0], [1.6698031116E12, 6871.666666666667], [1.6698031152E12, 8866.666666666666], [1.6698031188E12, 6650.0], [1.669803114E12, 7758.333333333333], [1.6698031176E12, 7758.333333333333], [1.669803111E12, 6206.666666666667], [1.6698031146E12, 7536.666666666667], [1.6698031182E12, 6428.333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698031194E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 71.27272727272728, "minX": 1.669803111E12, "maxY": 997.0857142857141, "series": [{"data": [[1.6698031134E12, 937.3870967741937], [1.669803117E12, 313.93023255813955], [1.6698031122E12, 859.5428571428572], [1.6698031158E12, 639.4000000000002], [1.6698031194E12, 71.27272727272728], [1.6698031128E12, 917.9999999999999], [1.6698031164E12, 484.76923076923083], [1.6698031116E12, 791.8709677419355], [1.6698031152E12, 844.4500000000003], [1.6698031188E12, 77.83333333333334], [1.669803114E12, 997.0857142857141], [1.6698031176E12, 96.02857142857142], [1.669803111E12, 613.7857142857143], [1.6698031146E12, 994.176470588235], [1.6698031182E12, 85.6551724137931]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698031194E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 71.22727272727272, "minX": 1.669803111E12, "maxY": 997.0285714285715, "series": [{"data": [[1.6698031134E12, 937.2903225806451], [1.669803117E12, 313.90697674418607], [1.6698031122E12, 859.5142857142857], [1.6698031158E12, 639.3499999999999], [1.6698031194E12, 71.22727272727272], [1.6698031128E12, 917.9999999999999], [1.6698031164E12, 484.74358974358967], [1.6698031116E12, 791.0], [1.6698031152E12, 844.4000000000002], [1.6698031188E12, 77.83333333333334], [1.669803114E12, 997.0285714285715], [1.6698031176E12, 95.8857142857143], [1.669803111E12, 612.4642857142857], [1.6698031146E12, 994.0588235294116], [1.6698031182E12, 85.58620689655172]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698031194E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.669803111E12, "maxY": 38.42857142857143, "series": [{"data": [[1.6698031134E12, 1.2258064516129032], [1.669803117E12, 1.1860465116279073], [1.6698031122E12, 1.2285714285714289], [1.6698031158E12, 1.0], [1.6698031194E12, 1.0909090909090913], [1.6698031128E12, 1.1071428571428574], [1.6698031164E12, 1.3589743589743593], [1.6698031116E12, 1.2580645161290325], [1.6698031152E12, 1.2750000000000001], [1.6698031188E12, 1.133333333333333], [1.669803114E12, 1.114285714285714], [1.6698031176E12, 1.1714285714285717], [1.669803111E12, 38.42857142857143], [1.6698031146E12, 1.4411764705882357], [1.6698031182E12, 1.4482758620689655]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698031194E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 47.0, "minX": 1.669803111E12, "maxY": 1166.0, "series": [{"data": [[1.6698031134E12, 1127.0], [1.669803117E12, 498.0], [1.6698031122E12, 1085.0], [1.6698031158E12, 751.0], [1.6698031194E12, 84.0], [1.6698031128E12, 1049.0], [1.6698031164E12, 612.0], [1.6698031116E12, 973.0], [1.6698031152E12, 1042.0], [1.6698031188E12, 100.0], [1.669803114E12, 1166.0], [1.6698031176E12, 185.0], [1.669803111E12, 789.0], [1.6698031146E12, 1142.0], [1.6698031182E12, 108.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6698031134E12, 1054.8], [1.669803117E12, 440.8], [1.6698031122E12, 1025.3999999999999], [1.6698031158E12, 731.3], [1.6698031194E12, 82.1], [1.6698031128E12, 1008.6], [1.6698031164E12, 574.0], [1.6698031116E12, 931.2], [1.6698031152E12, 985.0], [1.6698031188E12, 96.50000000000001], [1.669803114E12, 1107.0], [1.6698031176E12, 159.39999999999998], [1.669803111E12, 690.2000000000002], [1.6698031146E12, 1095.0], [1.6698031182E12, 104.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6698031134E12, 1127.0], [1.669803117E12, 498.0], [1.6698031122E12, 1085.0], [1.6698031158E12, 751.0], [1.6698031194E12, 84.0], [1.6698031128E12, 1049.0], [1.6698031164E12, 612.0], [1.6698031116E12, 973.0], [1.6698031152E12, 1042.0], [1.6698031188E12, 100.0], [1.669803114E12, 1166.0], [1.6698031176E12, 185.0], [1.669803111E12, 789.0], [1.6698031146E12, 1142.0], [1.6698031182E12, 108.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6698031134E12, 1095.1999999999998], [1.669803117E12, 482.9999999999999], [1.6698031122E12, 1083.4], [1.6698031158E12, 746.5999999999999], [1.6698031194E12, 83.85], [1.6698031128E12, 1033.25], [1.6698031164E12, 587.0], [1.6698031116E12, 966.4], [1.6698031152E12, 1022.9], [1.6698031188E12, 98.9], [1.669803114E12, 1154.0], [1.6698031176E12, 180.2], [1.669803111E12, 781.8], [1.6698031146E12, 1137.5], [1.6698031182E12, 107.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6698031134E12, 756.0], [1.669803117E12, 164.0], [1.6698031122E12, 640.0], [1.6698031158E12, 488.0], [1.6698031194E12, 54.0], [1.6698031128E12, 758.0], [1.6698031164E12, 319.0], [1.6698031116E12, 603.0], [1.6698031152E12, 667.0], [1.6698031188E12, 47.0], [1.669803114E12, 852.0], [1.6698031176E12, 58.0], [1.669803111E12, 484.0], [1.6698031146E12, 909.0], [1.6698031182E12, 71.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6698031134E12, 949.0], [1.669803117E12, 290.0], [1.6698031122E12, 869.0], [1.6698031158E12, 646.5], [1.6698031194E12, 71.5], [1.6698031128E12, 929.5], [1.6698031164E12, 486.0], [1.6698031116E12, 782.0], [1.6698031152E12, 842.5], [1.6698031188E12, 80.0], [1.669803114E12, 982.0], [1.6698031176E12, 84.0], [1.669803111E12, 605.0], [1.6698031146E12, 979.0], [1.6698031182E12, 82.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698031194E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 76.0, "minX": 41.0, "maxY": 960.0, "series": [{"data": [[67.0, 848.0], [66.0, 534.5], [68.0, 250.5], [41.0, 847.0], [42.0, 76.0], [49.0, 79.0], [55.0, 960.0], [57.0, 672.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 68.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 76.0, "minX": 41.0, "maxY": 960.0, "series": [{"data": [[67.0, 848.0], [66.0, 534.5], [68.0, 250.5], [41.0, 847.0], [42.0, 76.0], [49.0, 79.0], [55.0, 960.0], [57.0, 671.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 68.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.6698031104E12, "maxY": 65.0, "series": [{"data": [[1.6698031134E12, 58.333333333333336], [1.669803117E12, 51.666666666666664], [1.6698031122E12, 56.666666666666664], [1.6698031158E12, 53.333333333333336], [1.6698031194E12, 30.0], [1.6698031128E12, 58.333333333333336], [1.6698031164E12, 48.333333333333336], [1.6698031116E12, 56.666666666666664], [1.6698031152E12, 51.666666666666664], [1.6698031188E12, 50.0], [1.6698031104E12, 65.0], [1.669803114E12, 46.666666666666664], [1.6698031176E12, 50.0], [1.669803111E12, 55.0], [1.6698031146E12, 51.666666666666664], [1.6698031182E12, 50.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698031194E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 36.666666666666664, "minX": 1.669803111E12, "maxY": 71.66666666666667, "series": [{"data": [[1.6698031134E12, 51.666666666666664], [1.669803117E12, 71.66666666666667], [1.6698031122E12, 58.333333333333336], [1.6698031158E12, 66.66666666666667], [1.6698031194E12, 36.666666666666664], [1.6698031128E12, 46.666666666666664], [1.6698031164E12, 65.0], [1.6698031116E12, 51.666666666666664], [1.6698031152E12, 66.66666666666667], [1.6698031188E12, 50.0], [1.669803114E12, 58.333333333333336], [1.6698031176E12, 58.333333333333336], [1.669803111E12, 46.666666666666664], [1.6698031146E12, 56.666666666666664], [1.6698031182E12, 48.333333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698031194E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 36.666666666666664, "minX": 1.669803111E12, "maxY": 71.66666666666667, "series": [{"data": [[1.6698031134E12, 51.666666666666664], [1.669803117E12, 71.66666666666667], [1.6698031122E12, 58.333333333333336], [1.6698031158E12, 66.66666666666667], [1.6698031194E12, 36.666666666666664], [1.6698031128E12, 46.666666666666664], [1.6698031164E12, 65.0], [1.6698031116E12, 51.666666666666664], [1.6698031152E12, 66.66666666666667], [1.6698031188E12, 50.0], [1.669803114E12, 58.333333333333336], [1.6698031176E12, 58.333333333333336], [1.669803111E12, 46.666666666666664], [1.6698031146E12, 56.666666666666664], [1.6698031182E12, 48.333333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698031194E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 36.666666666666664, "minX": 1.669803111E12, "maxY": 71.66666666666667, "series": [{"data": [[1.6698031134E12, 51.666666666666664], [1.669803117E12, 71.66666666666667], [1.6698031122E12, 58.333333333333336], [1.6698031158E12, 66.66666666666667], [1.6698031194E12, 36.666666666666664], [1.6698031128E12, 46.666666666666664], [1.6698031164E12, 65.0], [1.6698031116E12, 51.666666666666664], [1.6698031152E12, 66.66666666666667], [1.6698031188E12, 50.0], [1.669803114E12, 58.333333333333336], [1.6698031176E12, 58.333333333333336], [1.669803111E12, 46.666666666666664], [1.6698031146E12, 56.666666666666664], [1.6698031182E12, 48.333333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698031194E12, "title": "Total Transactions Per Second"}},
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

