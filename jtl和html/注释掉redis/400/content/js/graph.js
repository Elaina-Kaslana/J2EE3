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
        data: {"result": {"minY": 51.0, "minX": 0.0, "maxY": 848.0, "series": [{"data": [[0.0, 51.0], [0.1, 51.0], [0.2, 51.0], [0.3, 52.0], [0.4, 52.0], [0.5, 56.0], [0.6, 56.0], [0.7, 56.0], [0.8, 56.0], [0.9, 56.0], [1.0, 56.0], [1.1, 56.0], [1.2, 56.0], [1.3, 57.0], [1.4, 57.0], [1.5, 57.0], [1.6, 57.0], [1.7, 57.0], [1.8, 57.0], [1.9, 57.0], [2.0, 57.0], [2.1, 57.0], [2.2, 57.0], [2.3, 58.0], [2.4, 58.0], [2.5, 58.0], [2.6, 58.0], [2.7, 58.0], [2.8, 58.0], [2.9, 58.0], [3.0, 58.0], [3.1, 58.0], [3.2, 58.0], [3.3, 58.0], [3.4, 58.0], [3.5, 60.0], [3.6, 60.0], [3.7, 60.0], [3.8, 60.0], [3.9, 60.0], [4.0, 60.0], [4.1, 60.0], [4.2, 60.0], [4.3, 61.0], [4.4, 61.0], [4.5, 61.0], [4.6, 61.0], [4.7, 61.0], [4.8, 61.0], [4.9, 61.0], [5.0, 61.0], [5.1, 61.0], [5.2, 61.0], [5.3, 61.0], [5.4, 61.0], [5.5, 61.0], [5.6, 61.0], [5.7, 61.0], [5.8, 62.0], [5.9, 62.0], [6.0, 62.0], [6.1, 62.0], [6.2, 62.0], [6.3, 62.0], [6.4, 62.0], [6.5, 62.0], [6.6, 62.0], [6.7, 62.0], [6.8, 62.0], [6.9, 62.0], [7.0, 62.0], [7.1, 62.0], [7.2, 62.0], [7.3, 63.0], [7.4, 63.0], [7.5, 63.0], [7.6, 63.0], [7.7, 63.0], [7.8, 63.0], [7.9, 63.0], [8.0, 63.0], [8.1, 63.0], [8.2, 63.0], [8.3, 63.0], [8.4, 63.0], [8.5, 63.0], [8.6, 63.0], [8.7, 63.0], [8.8, 63.0], [8.9, 63.0], [9.0, 63.0], [9.1, 63.0], [9.2, 63.0], [9.3, 64.0], [9.4, 64.0], [9.5, 64.0], [9.6, 64.0], [9.7, 64.0], [9.8, 64.0], [9.9, 64.0], [10.0, 64.0], [10.1, 64.0], [10.2, 64.0], [10.3, 64.0], [10.4, 64.0], [10.5, 64.0], [10.6, 64.0], [10.7, 64.0], [10.8, 64.0], [10.9, 64.0], [11.0, 64.0], [11.1, 64.0], [11.2, 64.0], [11.3, 64.0], [11.4, 64.0], [11.5, 64.0], [11.6, 64.0], [11.7, 64.0], [11.8, 65.0], [11.9, 65.0], [12.0, 65.0], [12.1, 65.0], [12.2, 65.0], [12.3, 65.0], [12.4, 65.0], [12.5, 65.0], [12.6, 65.0], [12.7, 65.0], [12.8, 65.0], [12.9, 65.0], [13.0, 65.0], [13.1, 65.0], [13.2, 65.0], [13.3, 65.0], [13.4, 65.0], [13.5, 65.0], [13.6, 65.0], [13.7, 65.0], [13.8, 65.0], [13.9, 65.0], [14.0, 65.0], [14.1, 65.0], [14.2, 65.0], [14.3, 65.0], [14.4, 65.0], [14.5, 66.0], [14.6, 66.0], [14.7, 66.0], [14.8, 66.0], [14.9, 66.0], [15.0, 66.0], [15.1, 66.0], [15.2, 66.0], [15.3, 66.0], [15.4, 66.0], [15.5, 66.0], [15.6, 66.0], [15.7, 66.0], [15.8, 66.0], [15.9, 66.0], [16.0, 66.0], [16.1, 66.0], [16.2, 66.0], [16.3, 66.0], [16.4, 66.0], [16.5, 66.0], [16.6, 66.0], [16.7, 66.0], [16.8, 66.0], [16.9, 66.0], [17.0, 67.0], [17.1, 67.0], [17.2, 67.0], [17.3, 67.0], [17.4, 67.0], [17.5, 67.0], [17.6, 67.0], [17.7, 67.0], [17.8, 67.0], [17.9, 67.0], [18.0, 67.0], [18.1, 67.0], [18.2, 67.0], [18.3, 67.0], [18.4, 67.0], [18.5, 67.0], [18.6, 67.0], [18.7, 67.0], [18.8, 67.0], [18.9, 67.0], [19.0, 67.0], [19.1, 67.0], [19.2, 67.0], [19.3, 67.0], [19.4, 67.0], [19.5, 67.0], [19.6, 67.0], [19.7, 67.0], [19.8, 68.0], [19.9, 68.0], [20.0, 68.0], [20.1, 68.0], [20.2, 68.0], [20.3, 68.0], [20.4, 68.0], [20.5, 68.0], [20.6, 68.0], [20.7, 68.0], [20.8, 68.0], [20.9, 68.0], [21.0, 68.0], [21.1, 68.0], [21.2, 68.0], [21.3, 68.0], [21.4, 68.0], [21.5, 68.0], [21.6, 68.0], [21.7, 68.0], [21.8, 68.0], [21.9, 68.0], [22.0, 68.0], [22.1, 68.0], [22.2, 68.0], [22.3, 68.0], [22.4, 68.0], [22.5, 68.0], [22.6, 68.0], [22.7, 68.0], [22.8, 68.0], [22.9, 68.0], [23.0, 69.0], [23.1, 69.0], [23.2, 69.0], [23.3, 69.0], [23.4, 69.0], [23.5, 69.0], [23.6, 69.0], [23.7, 69.0], [23.8, 69.0], [23.9, 69.0], [24.0, 69.0], [24.1, 69.0], [24.2, 69.0], [24.3, 69.0], [24.4, 69.0], [24.5, 69.0], [24.6, 69.0], [24.7, 69.0], [24.8, 69.0], [24.9, 69.0], [25.0, 69.0], [25.1, 69.0], [25.2, 69.0], [25.3, 69.0], [25.4, 69.0], [25.5, 69.0], [25.6, 69.0], [25.7, 69.0], [25.8, 70.0], [25.9, 70.0], [26.0, 70.0], [26.1, 70.0], [26.2, 70.0], [26.3, 70.0], [26.4, 70.0], [26.5, 70.0], [26.6, 70.0], [26.7, 70.0], [26.8, 70.0], [26.9, 70.0], [27.0, 70.0], [27.1, 70.0], [27.2, 70.0], [27.3, 70.0], [27.4, 70.0], [27.5, 70.0], [27.6, 70.0], [27.7, 70.0], [27.8, 70.0], [27.9, 70.0], [28.0, 71.0], [28.1, 71.0], [28.2, 71.0], [28.3, 71.0], [28.4, 71.0], [28.5, 71.0], [28.6, 71.0], [28.7, 71.0], [28.8, 71.0], [28.9, 71.0], [29.0, 71.0], [29.1, 71.0], [29.2, 71.0], [29.3, 71.0], [29.4, 71.0], [29.5, 72.0], [29.6, 72.0], [29.7, 72.0], [29.8, 72.0], [29.9, 72.0], [30.0, 72.0], [30.1, 72.0], [30.2, 72.0], [30.3, 72.0], [30.4, 72.0], [30.5, 72.0], [30.6, 72.0], [30.7, 72.0], [30.8, 72.0], [30.9, 72.0], [31.0, 72.0], [31.1, 72.0], [31.2, 72.0], [31.3, 72.0], [31.4, 72.0], [31.5, 73.0], [31.6, 73.0], [31.7, 73.0], [31.8, 73.0], [31.9, 73.0], [32.0, 73.0], [32.1, 73.0], [32.2, 73.0], [32.3, 73.0], [32.4, 73.0], [32.5, 73.0], [32.6, 73.0], [32.7, 73.0], [32.8, 73.0], [32.9, 73.0], [33.0, 73.0], [33.1, 73.0], [33.2, 73.0], [33.3, 74.0], [33.4, 74.0], [33.5, 74.0], [33.6, 74.0], [33.7, 74.0], [33.8, 74.0], [33.9, 74.0], [34.0, 74.0], [34.1, 74.0], [34.2, 74.0], [34.3, 74.0], [34.4, 74.0], [34.5, 74.0], [34.6, 74.0], [34.7, 74.0], [34.8, 74.0], [34.9, 74.0], [35.0, 74.0], [35.1, 74.0], [35.2, 74.0], [35.3, 74.0], [35.4, 74.0], [35.5, 75.0], [35.6, 75.0], [35.7, 75.0], [35.8, 75.0], [35.9, 75.0], [36.0, 75.0], [36.1, 75.0], [36.2, 75.0], [36.3, 75.0], [36.4, 75.0], [36.5, 75.0], [36.6, 75.0], [36.7, 75.0], [36.8, 75.0], [36.9, 75.0], [37.0, 75.0], [37.1, 75.0], [37.2, 75.0], [37.3, 75.0], [37.4, 75.0], [37.5, 76.0], [37.6, 76.0], [37.7, 76.0], [37.8, 76.0], [37.9, 76.0], [38.0, 76.0], [38.1, 76.0], [38.2, 76.0], [38.3, 76.0], [38.4, 76.0], [38.5, 76.0], [38.6, 76.0], [38.7, 76.0], [38.8, 76.0], [38.9, 76.0], [39.0, 76.0], [39.1, 76.0], [39.2, 76.0], [39.3, 76.0], [39.4, 76.0], [39.5, 77.0], [39.6, 77.0], [39.7, 77.0], [39.8, 77.0], [39.9, 77.0], [40.0, 77.0], [40.1, 77.0], [40.2, 77.0], [40.3, 78.0], [40.4, 78.0], [40.5, 78.0], [40.6, 78.0], [40.7, 78.0], [40.8, 78.0], [40.9, 78.0], [41.0, 78.0], [41.1, 78.0], [41.2, 78.0], [41.3, 78.0], [41.4, 78.0], [41.5, 79.0], [41.6, 79.0], [41.7, 79.0], [41.8, 79.0], [41.9, 79.0], [42.0, 79.0], [42.1, 79.0], [42.2, 79.0], [42.3, 80.0], [42.4, 80.0], [42.5, 80.0], [42.6, 80.0], [42.7, 80.0], [42.8, 80.0], [42.9, 80.0], [43.0, 80.0], [43.1, 80.0], [43.2, 80.0], [43.3, 80.0], [43.4, 80.0], [43.5, 80.0], [43.6, 80.0], [43.7, 80.0], [43.8, 80.0], [43.9, 80.0], [44.0, 80.0], [44.1, 80.0], [44.2, 80.0], [44.3, 80.0], [44.4, 80.0], [44.5, 80.0], [44.6, 80.0], [44.7, 80.0], [44.8, 81.0], [44.9, 81.0], [45.0, 81.0], [45.1, 81.0], [45.2, 81.0], [45.3, 81.0], [45.4, 81.0], [45.5, 81.0], [45.6, 81.0], [45.7, 81.0], [45.8, 81.0], [45.9, 81.0], [46.0, 81.0], [46.1, 81.0], [46.2, 81.0], [46.3, 82.0], [46.4, 82.0], [46.5, 82.0], [46.6, 82.0], [46.7, 82.0], [46.8, 82.0], [46.9, 82.0], [47.0, 82.0], [47.1, 82.0], [47.2, 82.0], [47.3, 82.0], [47.4, 82.0], [47.5, 82.0], [47.6, 82.0], [47.7, 82.0], [47.8, 82.0], [47.9, 82.0], [48.0, 82.0], [48.1, 82.0], [48.2, 82.0], [48.3, 82.0], [48.4, 82.0], [48.5, 83.0], [48.6, 83.0], [48.7, 83.0], [48.8, 83.0], [48.9, 83.0], [49.0, 83.0], [49.1, 83.0], [49.2, 83.0], [49.3, 83.0], [49.4, 83.0], [49.5, 83.0], [49.6, 83.0], [49.7, 83.0], [49.8, 83.0], [49.9, 83.0], [50.0, 83.0], [50.1, 83.0], [50.2, 83.0], [50.3, 84.0], [50.4, 84.0], [50.5, 84.0], [50.6, 84.0], [50.7, 84.0], [50.8, 84.0], [50.9, 84.0], [51.0, 84.0], [51.1, 84.0], [51.2, 84.0], [51.3, 84.0], [51.4, 84.0], [51.5, 84.0], [51.6, 84.0], [51.7, 84.0], [51.8, 85.0], [51.9, 85.0], [52.0, 85.0], [52.1, 85.0], [52.2, 85.0], [52.3, 86.0], [52.4, 86.0], [52.5, 86.0], [52.6, 86.0], [52.7, 86.0], [52.8, 86.0], [52.9, 86.0], [53.0, 86.0], [53.1, 86.0], [53.2, 86.0], [53.3, 86.0], [53.4, 86.0], [53.5, 87.0], [53.6, 87.0], [53.7, 87.0], [53.8, 87.0], [53.9, 87.0], [54.0, 87.0], [54.1, 87.0], [54.2, 87.0], [54.3, 87.0], [54.4, 87.0], [54.5, 87.0], [54.6, 87.0], [54.7, 87.0], [54.8, 87.0], [54.9, 87.0], [55.0, 87.0], [55.1, 87.0], [55.2, 87.0], [55.3, 87.0], [55.4, 87.0], [55.5, 87.0], [55.6, 87.0], [55.7, 87.0], [55.8, 88.0], [55.9, 88.0], [56.0, 89.0], [56.1, 89.0], [56.2, 89.0], [56.3, 89.0], [56.4, 89.0], [56.5, 90.0], [56.6, 90.0], [56.7, 90.0], [56.8, 90.0], [56.9, 90.0], [57.0, 90.0], [57.1, 90.0], [57.2, 90.0], [57.3, 90.0], [57.4, 90.0], [57.5, 90.0], [57.6, 90.0], [57.7, 90.0], [57.8, 91.0], [57.9, 91.0], [58.0, 91.0], [58.1, 91.0], [58.2, 91.0], [58.3, 91.0], [58.4, 91.0], [58.5, 91.0], [58.6, 91.0], [58.7, 91.0], [58.8, 92.0], [58.9, 92.0], [59.0, 92.0], [59.1, 92.0], [59.2, 92.0], [59.3, 93.0], [59.4, 93.0], [59.5, 93.0], [59.6, 93.0], [59.7, 93.0], [59.8, 94.0], [59.9, 94.0], [60.0, 94.0], [60.1, 94.0], [60.2, 94.0], [60.3, 94.0], [60.4, 94.0], [60.5, 94.0], [60.6, 94.0], [60.7, 94.0], [60.8, 94.0], [60.9, 94.0], [61.0, 95.0], [61.1, 95.0], [61.2, 95.0], [61.3, 95.0], [61.4, 95.0], [61.5, 95.0], [61.6, 95.0], [61.7, 95.0], [61.8, 96.0], [61.9, 96.0], [62.0, 97.0], [62.1, 97.0], [62.2, 97.0], [62.3, 99.0], [62.4, 99.0], [62.5, 100.0], [62.6, 100.0], [62.7, 100.0], [62.8, 101.0], [62.9, 101.0], [63.0, 103.0], [63.1, 103.0], [63.2, 103.0], [63.3, 104.0], [63.4, 104.0], [63.5, 104.0], [63.6, 104.0], [63.7, 104.0], [63.8, 106.0], [63.9, 106.0], [64.0, 106.0], [64.1, 106.0], [64.2, 106.0], [64.3, 106.0], [64.4, 106.0], [64.5, 106.0], [64.6, 106.0], [64.7, 106.0], [64.8, 108.0], [64.9, 108.0], [65.0, 108.0], [65.1, 108.0], [65.2, 108.0], [65.3, 110.0], [65.4, 110.0], [65.5, 113.0], [65.6, 113.0], [65.7, 113.0], [65.8, 116.0], [65.9, 116.0], [66.0, 117.0], [66.1, 117.0], [66.2, 117.0], [66.3, 122.0], [66.4, 122.0], [66.5, 128.0], [66.6, 128.0], [66.7, 128.0], [66.8, 134.0], [66.9, 134.0], [67.0, 136.0], [67.1, 136.0], [67.2, 136.0], [67.3, 139.0], [67.4, 139.0], [67.5, 140.0], [67.6, 140.0], [67.7, 140.0], [67.8, 142.0], [67.9, 142.0], [68.0, 146.0], [68.1, 146.0], [68.2, 146.0], [68.3, 148.0], [68.4, 148.0], [68.5, 149.0], [68.6, 149.0], [68.7, 149.0], [68.8, 150.0], [68.9, 150.0], [69.0, 151.0], [69.1, 151.0], [69.2, 151.0], [69.3, 152.0], [69.4, 152.0], [69.5, 160.0], [69.6, 160.0], [69.7, 160.0], [69.8, 166.0], [69.9, 166.0], [70.0, 173.0], [70.1, 173.0], [70.2, 173.0], [70.3, 183.0], [70.4, 183.0], [70.5, 212.0], [70.6, 212.0], [70.7, 212.0], [70.8, 213.0], [70.9, 213.0], [71.0, 232.0], [71.1, 232.0], [71.2, 232.0], [71.3, 238.0], [71.4, 238.0], [71.5, 252.0], [71.6, 252.0], [71.7, 252.0], [71.8, 262.0], [71.9, 262.0], [72.0, 280.0], [72.1, 280.0], [72.2, 280.0], [72.3, 289.0], [72.4, 289.0], [72.5, 299.0], [72.6, 299.0], [72.7, 299.0], [72.8, 302.0], [72.9, 302.0], [73.0, 305.0], [73.1, 305.0], [73.2, 305.0], [73.3, 312.0], [73.4, 312.0], [73.5, 352.0], [73.6, 352.0], [73.7, 352.0], [73.8, 357.0], [73.9, 357.0], [74.0, 360.0], [74.1, 360.0], [74.2, 360.0], [74.3, 362.0], [74.4, 362.0], [74.5, 384.0], [74.6, 384.0], [74.7, 384.0], [74.8, 397.0], [74.9, 397.0], [75.0, 397.0], [75.1, 397.0], [75.2, 397.0], [75.3, 400.0], [75.4, 400.0], [75.5, 407.0], [75.6, 407.0], [75.7, 407.0], [75.8, 409.0], [75.9, 409.0], [76.0, 412.0], [76.1, 412.0], [76.2, 412.0], [76.3, 413.0], [76.4, 413.0], [76.5, 418.0], [76.6, 418.0], [76.7, 418.0], [76.8, 436.0], [76.9, 436.0], [77.0, 438.0], [77.1, 438.0], [77.2, 438.0], [77.3, 440.0], [77.4, 440.0], [77.5, 443.0], [77.6, 443.0], [77.7, 443.0], [77.8, 449.0], [77.9, 449.0], [78.0, 451.0], [78.1, 451.0], [78.2, 451.0], [78.3, 453.0], [78.4, 453.0], [78.5, 465.0], [78.6, 465.0], [78.7, 465.0], [78.8, 467.0], [78.9, 467.0], [79.0, 473.0], [79.1, 473.0], [79.2, 473.0], [79.3, 474.0], [79.4, 474.0], [79.5, 476.0], [79.6, 476.0], [79.7, 476.0], [79.8, 491.0], [79.9, 491.0], [80.0, 500.0], [80.1, 500.0], [80.2, 500.0], [80.3, 506.0], [80.4, 506.0], [80.5, 507.0], [80.6, 507.0], [80.7, 507.0], [80.8, 519.0], [80.9, 519.0], [81.0, 544.0], [81.1, 544.0], [81.2, 544.0], [81.3, 556.0], [81.4, 556.0], [81.5, 563.0], [81.6, 563.0], [81.7, 563.0], [81.8, 567.0], [81.9, 567.0], [82.0, 576.0], [82.1, 576.0], [82.2, 576.0], [82.3, 577.0], [82.4, 577.0], [82.5, 578.0], [82.6, 578.0], [82.7, 578.0], [82.8, 583.0], [82.9, 583.0], [83.0, 583.0], [83.1, 583.0], [83.2, 583.0], [83.3, 585.0], [83.4, 585.0], [83.5, 587.0], [83.6, 587.0], [83.7, 587.0], [83.8, 595.0], [83.9, 595.0], [84.0, 598.0], [84.1, 598.0], [84.2, 598.0], [84.3, 600.0], [84.4, 600.0], [84.5, 600.0], [84.6, 600.0], [84.7, 600.0], [84.8, 602.0], [84.9, 602.0], [85.0, 603.0], [85.1, 603.0], [85.2, 603.0], [85.3, 606.0], [85.4, 606.0], [85.5, 607.0], [85.6, 607.0], [85.7, 607.0], [85.8, 610.0], [85.9, 610.0], [86.0, 611.0], [86.1, 611.0], [86.2, 611.0], [86.3, 612.0], [86.4, 612.0], [86.5, 614.0], [86.6, 614.0], [86.7, 614.0], [86.8, 616.0], [86.9, 616.0], [87.0, 621.0], [87.1, 621.0], [87.2, 621.0], [87.3, 622.0], [87.4, 622.0], [87.5, 628.0], [87.6, 628.0], [87.7, 628.0], [87.8, 632.0], [87.9, 632.0], [88.0, 632.0], [88.1, 632.0], [88.2, 632.0], [88.3, 634.0], [88.4, 634.0], [88.5, 634.0], [88.6, 634.0], [88.7, 634.0], [88.8, 636.0], [88.9, 636.0], [89.0, 643.0], [89.1, 643.0], [89.2, 643.0], [89.3, 647.0], [89.4, 647.0], [89.5, 647.0], [89.6, 647.0], [89.7, 647.0], [89.8, 648.0], [89.9, 648.0], [90.0, 650.0], [90.1, 650.0], [90.2, 650.0], [90.3, 655.0], [90.4, 655.0], [90.5, 655.0], [90.6, 655.0], [90.7, 655.0], [90.8, 656.0], [90.9, 656.0], [91.0, 662.0], [91.1, 662.0], [91.2, 662.0], [91.3, 663.0], [91.4, 663.0], [91.5, 664.0], [91.6, 664.0], [91.7, 664.0], [91.8, 664.0], [91.9, 664.0], [92.0, 665.0], [92.1, 665.0], [92.2, 665.0], [92.3, 665.0], [92.4, 665.0], [92.5, 668.0], [92.6, 668.0], [92.7, 668.0], [92.8, 668.0], [92.9, 668.0], [93.0, 673.0], [93.1, 673.0], [93.2, 673.0], [93.3, 674.0], [93.4, 674.0], [93.5, 678.0], [93.6, 678.0], [93.7, 678.0], [93.8, 678.0], [93.9, 678.0], [94.0, 679.0], [94.1, 679.0], [94.2, 679.0], [94.3, 680.0], [94.4, 680.0], [94.5, 684.0], [94.6, 684.0], [94.7, 684.0], [94.8, 692.0], [94.9, 692.0], [95.0, 694.0], [95.1, 694.0], [95.2, 694.0], [95.3, 695.0], [95.4, 695.0], [95.5, 695.0], [95.6, 695.0], [95.7, 695.0], [95.8, 700.0], [95.9, 700.0], [96.0, 700.0], [96.1, 700.0], [96.2, 700.0], [96.3, 701.0], [96.4, 701.0], [96.5, 703.0], [96.6, 703.0], [96.7, 703.0], [96.8, 704.0], [96.9, 704.0], [97.0, 713.0], [97.1, 713.0], [97.2, 713.0], [97.3, 715.0], [97.4, 715.0], [97.5, 716.0], [97.6, 716.0], [97.7, 716.0], [97.8, 717.0], [97.9, 717.0], [98.0, 719.0], [98.1, 719.0], [98.2, 719.0], [98.3, 729.0], [98.4, 729.0], [98.5, 732.0], [98.6, 732.0], [98.7, 732.0], [98.8, 734.0], [98.9, 734.0], [99.0, 742.0], [99.1, 742.0], [99.2, 742.0], [99.3, 764.0], [99.4, 764.0], [99.5, 766.0], [99.6, 766.0], [99.7, 766.0], [99.8, 848.0], [99.9, 848.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 250.0, "series": [{"data": [[0.0, 250.0], [300.0, 10.0], [600.0, 46.0], [700.0, 16.0], [200.0, 9.0], [400.0, 19.0], [800.0, 1.0], [100.0, 32.0], [500.0, 17.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 79.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 321.0, "series": [{"data": [[0.0, 321.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 79.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.0833333333333335, "minX": 1.6698230508E12, "maxY": 31.17857142857143, "series": [{"data": [[1.6698230586E12, 3.5217391304347827], [1.669823055E12, 3.560000000000001], [1.6698230514E12, 31.17857142857143], [1.6698230556E12, 3.7916666666666665], [1.669823052E12, 27.11111111111111], [1.6698230508E12, 30.2], [1.669823058E12, 3.217391304347826], [1.6698230544E12, 3.6000000000000005], [1.6698230568E12, 3.458333333333333], [1.6698230532E12, 6.125], [1.6698230574E12, 3.6], [1.6698230538E12, 3.75], [1.6698230526E12, 18.53333333333334], [1.6698230592E12, 3.0833333333333335], [1.6698230598E12, 3.2857142857142856], [1.6698230562E12, 3.6666666666666665]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698230598E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 61.0, "minX": 1.0, "maxY": 703.0, "series": [{"data": [[32.0, 665.888888888889], [33.0, 703.0], [2.0, 61.0], [35.0, 703.0], [34.0, 634.0], [3.0, 67.27049180327869], [4.0, 82.19444444444449], [5.0, 87.81818181818181], [6.0, 127.0], [7.0, 131.20000000000002], [8.0, 161.25], [9.0, 212.5], [10.0, 146.0], [11.0, 256.6666666666667], [12.0, 299.0], [13.0, 282.0], [14.0, 360.0], [15.0, 352.5], [16.0, 403.0], [1.0, 64.0], [17.0, 348.0], [18.0, 404.0], [19.0, 430.0], [20.0, 434.0], [21.0, 481.3333333333333], [22.0, 467.0], [23.0, 595.5], [24.0, 653.0], [25.0, 590.0], [26.0, 600.7692307692307], [27.0, 468.0], [28.0, 587.3333333333334], [29.0, 605.2857142857142], [30.0, 627.3333333333333], [31.0, 677.2]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[10.27999999999999, 221.26499999999993]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 35.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1516.6666666666667, "minX": 1.6698230508E12, "maxY": 55500.0, "series": [{"data": [[1.6698230586E12, 28366.666666666668], [1.669823055E12, 30833.333333333332], [1.6698230514E12, 34533.333333333336], [1.6698230556E12, 29600.0], [1.669823052E12, 33300.0], [1.6698230508E12, 24666.666666666668], [1.669823058E12, 28366.666666666668], [1.6698230544E12, 30833.333333333332], [1.6698230568E12, 29600.0], [1.6698230532E12, 39466.666666666664], [1.6698230574E12, 30833.333333333332], [1.6698230538E12, 29600.0], [1.6698230526E12, 55500.0], [1.6698230592E12, 29600.0], [1.6698230598E12, 8633.333333333334], [1.6698230562E12, 29600.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6698230586E12, 4983.333333333333], [1.669823055E12, 5416.666666666667], [1.6698230514E12, 6066.666666666667], [1.6698230556E12, 5200.0], [1.669823052E12, 5850.0], [1.6698230508E12, 4333.333333333333], [1.669823058E12, 4983.333333333333], [1.6698230544E12, 5416.666666666667], [1.6698230568E12, 5200.0], [1.6698230532E12, 6933.333333333333], [1.6698230574E12, 5416.666666666667], [1.6698230538E12, 5200.0], [1.6698230526E12, 9750.0], [1.6698230592E12, 5200.0], [1.6698230598E12, 1516.6666666666667], [1.6698230562E12, 5200.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698230598E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 65.66666666666666, "minX": 1.6698230508E12, "maxY": 680.0357142857142, "series": [{"data": [[1.6698230586E12, 74.30434782608694], [1.669823055E12, 71.56000000000002], [1.6698230514E12, 680.0357142857142], [1.6698230556E12, 80.04166666666667], [1.669823052E12, 636.7037037037038], [1.6698230508E12, 555.8], [1.669823058E12, 70.0], [1.6698230544E12, 76.6], [1.6698230568E12, 75.33333333333334], [1.6698230532E12, 118.40625], [1.6698230574E12, 74.51999999999998], [1.6698230538E12, 78.0], [1.6698230526E12, 419.77777777777766], [1.6698230592E12, 65.66666666666666], [1.6698230598E12, 79.57142857142857], [1.6698230562E12, 77.45833333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698230598E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 65.45833333333334, "minX": 1.6698230508E12, "maxY": 678.9642857142857, "series": [{"data": [[1.6698230586E12, 74.30434782608694], [1.669823055E12, 71.2], [1.6698230514E12, 678.9642857142857], [1.6698230556E12, 79.29166666666666], [1.669823052E12, 636.1111111111112], [1.6698230508E12, 554.95], [1.669823058E12, 69.82608695652173], [1.6698230544E12, 76.56], [1.6698230568E12, 75.08333333333334], [1.6698230532E12, 117.99999999999997], [1.6698230574E12, 74.24000000000001], [1.6698230538E12, 77.79166666666666], [1.6698230526E12, 418.9777777777777], [1.6698230592E12, 65.45833333333334], [1.6698230598E12, 79.42857142857143], [1.6698230562E12, 77.25000000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698230598E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6698230508E12, "maxY": 31.749999999999996, "series": [{"data": [[1.6698230586E12, 1.1739130434782612], [1.669823055E12, 1.3600000000000003], [1.6698230514E12, 3.035714285714285], [1.6698230556E12, 1.2500000000000004], [1.669823052E12, 1.1481481481481486], [1.6698230508E12, 31.749999999999996], [1.669823058E12, 1.0869565217391306], [1.6698230544E12, 1.2800000000000002], [1.6698230568E12, 1.0], [1.6698230532E12, 1.3437500000000002], [1.6698230574E12, 1.1600000000000001], [1.6698230538E12, 1.3333333333333337], [1.6698230526E12, 1.2666666666666668], [1.6698230592E12, 1.1250000000000004], [1.6698230598E12, 1.0], [1.6698230562E12, 1.5416666666666665]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698230598E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 51.0, "minX": 1.6698230508E12, "maxY": 848.0, "series": [{"data": [[1.6698230586E12, 106.0], [1.669823055E12, 94.0], [1.6698230514E12, 848.0], [1.6698230556E12, 106.0], [1.669823052E12, 729.0], [1.6698230508E12, 764.0], [1.669823058E12, 83.0], [1.6698230544E12, 93.0], [1.6698230568E12, 108.0], [1.6698230532E12, 173.0], [1.6698230574E12, 108.0], [1.6698230538E12, 97.0], [1.6698230526E12, 694.0], [1.6698230592E12, 80.0], [1.6698230598E12, 104.0], [1.6698230562E12, 101.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6698230586E12, 90.00000000000001], [1.669823055E12, 90.4], [1.6698230514E12, 744.4000000000001], [1.6698230556E12, 100.0], [1.669823052E12, 715.2], [1.6698230508E12, 730.7], [1.669823058E12, 80.0], [1.6698230544E12, 90.2], [1.6698230568E12, 88.0], [1.6698230532E12, 157.6], [1.6698230574E12, 92.60000000000001], [1.6698230538E12, 95.0], [1.6698230526E12, 612.4], [1.6698230592E12, 73.5], [1.6698230598E12, 104.0], [1.6698230562E12, 99.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6698230586E12, 106.0], [1.669823055E12, 94.0], [1.6698230514E12, 848.0], [1.6698230556E12, 106.0], [1.669823052E12, 729.0], [1.6698230508E12, 764.0], [1.669823058E12, 83.0], [1.6698230544E12, 93.0], [1.6698230568E12, 108.0], [1.6698230532E12, 173.0], [1.6698230574E12, 108.0], [1.6698230538E12, 97.0], [1.6698230526E12, 694.0], [1.6698230592E12, 80.0], [1.6698230598E12, 104.0], [1.6698230562E12, 101.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6698230586E12, 103.59999999999997], [1.669823055E12, 93.1], [1.6698230514E12, 811.0999999999998], [1.6698230556E12, 105.5], [1.669823052E12, 723.8], [1.6698230508E12, 762.5], [1.669823058E12, 82.39999999999999], [1.6698230544E12, 92.7], [1.6698230568E12, 103.5], [1.6698230532E12, 168.45], [1.6698230574E12, 104.1], [1.6698230538E12, 96.5], [1.6698230526E12, 664.7999999999998], [1.6698230592E12, 78.5], [1.6698230598E12, 104.0], [1.6698230562E12, 100.75]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6698230586E12, 56.0], [1.669823055E12, 52.0], [1.6698230514E12, 587.0], [1.6698230556E12, 61.0], [1.669823052E12, 519.0], [1.6698230508E12, 289.0], [1.669823058E12, 51.0], [1.6698230544E12, 56.0], [1.6698230568E12, 61.0], [1.6698230532E12, 64.0], [1.6698230574E12, 57.0], [1.6698230538E12, 57.0], [1.6698230526E12, 146.0], [1.6698230592E12, 56.0], [1.6698230598E12, 64.0], [1.6698230562E12, 57.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6698230586E12, 73.0], [1.669823055E12, 69.0], [1.6698230514E12, 679.0], [1.6698230556E12, 81.5], [1.669823052E12, 632.0], [1.6698230508E12, 584.0], [1.669823058E12, 68.0], [1.6698230544E12, 79.0], [1.6698230568E12, 74.0], [1.6698230532E12, 116.5], [1.6698230574E12, 71.0], [1.6698230538E12, 78.0], [1.6698230526E12, 418.0], [1.6698230592E12, 65.5], [1.6698230598E12, 75.0], [1.6698230562E12, 77.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698230598E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 66.0, "minX": 4.0, "maxY": 662.5, "series": [{"data": [[4.0, 359.5], [39.0, 71.0], [38.0, 66.0], [41.0, 72.0], [40.0, 76.0], [43.0, 80.0], [44.0, 662.5], [54.0, 599.0], [56.0, 139.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 65.5, "minX": 4.0, "maxY": 660.5, "series": [{"data": [[4.0, 357.0], [39.0, 71.0], [38.0, 65.5], [41.0, 72.0], [40.0, 75.5], [43.0, 80.0], [44.0, 660.5], [54.0, 597.5], [56.0, 139.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.6698230502E12, "maxY": 46.666666666666664, "series": [{"data": [[1.6698230586E12, 40.0], [1.669823055E12, 43.333333333333336], [1.6698230514E12, 45.0], [1.6698230556E12, 40.0], [1.669823052E12, 41.666666666666664], [1.6698230508E12, 43.333333333333336], [1.669823058E12, 40.0], [1.6698230544E12, 38.333333333333336], [1.6698230568E12, 38.333333333333336], [1.6698230532E12, 46.666666666666664], [1.6698230574E12, 41.666666666666664], [1.6698230538E12, 41.666666666666664], [1.6698230502E12, 40.0], [1.6698230526E12, 41.666666666666664], [1.6698230592E12, 40.0], [1.6698230598E12, 5.0], [1.6698230562E12, 40.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698230598E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.666666666666666, "minX": 1.6698230508E12, "maxY": 75.0, "series": [{"data": [[1.6698230586E12, 38.333333333333336], [1.669823055E12, 41.666666666666664], [1.6698230514E12, 46.666666666666664], [1.6698230556E12, 40.0], [1.669823052E12, 45.0], [1.6698230508E12, 33.333333333333336], [1.669823058E12, 38.333333333333336], [1.6698230544E12, 41.666666666666664], [1.6698230568E12, 40.0], [1.6698230532E12, 53.333333333333336], [1.6698230574E12, 41.666666666666664], [1.6698230538E12, 40.0], [1.6698230526E12, 75.0], [1.6698230592E12, 40.0], [1.6698230598E12, 11.666666666666666], [1.6698230562E12, 40.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698230598E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.666666666666666, "minX": 1.6698230508E12, "maxY": 75.0, "series": [{"data": [[1.6698230586E12, 38.333333333333336], [1.669823055E12, 41.666666666666664], [1.6698230514E12, 46.666666666666664], [1.6698230556E12, 40.0], [1.669823052E12, 45.0], [1.6698230508E12, 33.333333333333336], [1.669823058E12, 38.333333333333336], [1.6698230544E12, 41.666666666666664], [1.6698230568E12, 40.0], [1.6698230532E12, 53.333333333333336], [1.6698230574E12, 41.666666666666664], [1.6698230538E12, 40.0], [1.6698230526E12, 75.0], [1.6698230592E12, 40.0], [1.6698230598E12, 11.666666666666666], [1.6698230562E12, 40.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698230598E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.666666666666666, "minX": 1.6698230508E12, "maxY": 75.0, "series": [{"data": [[1.6698230586E12, 38.333333333333336], [1.669823055E12, 41.666666666666664], [1.6698230514E12, 46.666666666666664], [1.6698230556E12, 40.0], [1.669823052E12, 45.0], [1.6698230508E12, 33.333333333333336], [1.669823058E12, 38.333333333333336], [1.6698230544E12, 41.666666666666664], [1.6698230568E12, 40.0], [1.6698230532E12, 53.333333333333336], [1.6698230574E12, 41.666666666666664], [1.6698230538E12, 40.0], [1.6698230526E12, 75.0], [1.6698230592E12, 40.0], [1.6698230598E12, 11.666666666666666], [1.6698230562E12, 40.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698230598E12, "title": "Total Transactions Per Second"}},
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

