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
        data: {"result": {"minY": 47.0, "minX": 0.0, "maxY": 531.0, "series": [{"data": [[0.0, 47.0], [0.1, 47.0], [0.2, 47.0], [0.3, 48.0], [0.4, 48.0], [0.5, 48.0], [0.6, 48.0], [0.7, 48.0], [0.8, 48.0], [0.9, 48.0], [1.0, 49.0], [1.1, 49.0], [1.2, 49.0], [1.3, 49.0], [1.4, 49.0], [1.5, 49.0], [1.6, 49.0], [1.7, 49.0], [1.8, 49.0], [1.9, 49.0], [2.0, 49.0], [2.1, 49.0], [2.2, 49.0], [2.3, 49.0], [2.4, 49.0], [2.5, 49.0], [2.6, 49.0], [2.7, 49.0], [2.8, 49.0], [2.9, 49.0], [3.0, 49.0], [3.1, 49.0], [3.2, 49.0], [3.3, 49.0], [3.4, 49.0], [3.5, 50.0], [3.6, 50.0], [3.7, 50.0], [3.8, 50.0], [3.9, 50.0], [4.0, 50.0], [4.1, 50.0], [4.2, 50.0], [4.3, 50.0], [4.4, 50.0], [4.5, 50.0], [4.6, 50.0], [4.7, 50.0], [4.8, 50.0], [4.9, 50.0], [5.0, 50.0], [5.1, 50.0], [5.2, 50.0], [5.3, 50.0], [5.4, 50.0], [5.5, 51.0], [5.6, 51.0], [5.7, 51.0], [5.8, 51.0], [5.9, 51.0], [6.0, 51.0], [6.1, 51.0], [6.2, 51.0], [6.3, 51.0], [6.4, 51.0], [6.5, 51.0], [6.6, 51.0], [6.7, 51.0], [6.8, 51.0], [6.9, 51.0], [7.0, 51.0], [7.1, 51.0], [7.2, 51.0], [7.3, 51.0], [7.4, 51.0], [7.5, 51.0], [7.6, 51.0], [7.7, 51.0], [7.8, 52.0], [7.9, 52.0], [8.0, 52.0], [8.1, 52.0], [8.2, 52.0], [8.3, 52.0], [8.4, 52.0], [8.5, 52.0], [8.6, 52.0], [8.7, 52.0], [8.8, 52.0], [8.9, 52.0], [9.0, 52.0], [9.1, 52.0], [9.2, 52.0], [9.3, 52.0], [9.4, 52.0], [9.5, 52.0], [9.6, 52.0], [9.7, 52.0], [9.8, 52.0], [9.9, 52.0], [10.0, 52.0], [10.1, 52.0], [10.2, 52.0], [10.3, 52.0], [10.4, 52.0], [10.5, 53.0], [10.6, 53.0], [10.7, 53.0], [10.8, 53.0], [10.9, 53.0], [11.0, 53.0], [11.1, 53.0], [11.2, 53.0], [11.3, 53.0], [11.4, 53.0], [11.5, 53.0], [11.6, 53.0], [11.7, 53.0], [11.8, 53.0], [11.9, 53.0], [12.0, 53.0], [12.1, 53.0], [12.2, 53.0], [12.3, 53.0], [12.4, 53.0], [12.5, 53.0], [12.6, 53.0], [12.7, 53.0], [12.8, 53.0], [12.9, 53.0], [13.0, 53.0], [13.1, 53.0], [13.2, 53.0], [13.3, 53.0], [13.4, 53.0], [13.5, 53.0], [13.6, 53.0], [13.7, 53.0], [13.8, 53.0], [13.9, 53.0], [14.0, 53.0], [14.1, 53.0], [14.2, 53.0], [14.3, 53.0], [14.4, 53.0], [14.5, 53.0], [14.6, 53.0], [14.7, 53.0], [14.8, 54.0], [14.9, 54.0], [15.0, 54.0], [15.1, 54.0], [15.2, 54.0], [15.3, 54.0], [15.4, 54.0], [15.5, 54.0], [15.6, 54.0], [15.7, 54.0], [15.8, 54.0], [15.9, 54.0], [16.0, 54.0], [16.1, 54.0], [16.2, 54.0], [16.3, 54.0], [16.4, 54.0], [16.5, 54.0], [16.6, 54.0], [16.7, 54.0], [16.8, 54.0], [16.9, 54.0], [17.0, 54.0], [17.1, 54.0], [17.2, 54.0], [17.3, 54.0], [17.4, 54.0], [17.5, 54.0], [17.6, 54.0], [17.7, 54.0], [17.8, 54.0], [17.9, 54.0], [18.0, 55.0], [18.1, 55.0], [18.2, 55.0], [18.3, 55.0], [18.4, 55.0], [18.5, 55.0], [18.6, 55.0], [18.7, 55.0], [18.8, 55.0], [18.9, 55.0], [19.0, 56.0], [19.1, 56.0], [19.2, 56.0], [19.3, 56.0], [19.4, 56.0], [19.5, 56.0], [19.6, 56.0], [19.7, 56.0], [19.8, 56.0], [19.9, 56.0], [20.0, 56.0], [20.1, 56.0], [20.2, 56.0], [20.3, 56.0], [20.4, 56.0], [20.5, 56.0], [20.6, 56.0], [20.7, 56.0], [20.8, 56.0], [20.9, 56.0], [21.0, 56.0], [21.1, 56.0], [21.2, 56.0], [21.3, 56.0], [21.4, 56.0], [21.5, 56.0], [21.6, 56.0], [21.7, 56.0], [21.8, 56.0], [21.9, 56.0], [22.0, 56.0], [22.1, 56.0], [22.2, 56.0], [22.3, 57.0], [22.4, 57.0], [22.5, 57.0], [22.6, 57.0], [22.7, 57.0], [22.8, 57.0], [22.9, 57.0], [23.0, 57.0], [23.1, 57.0], [23.2, 57.0], [23.3, 57.0], [23.4, 57.0], [23.5, 57.0], [23.6, 57.0], [23.7, 57.0], [23.8, 57.0], [23.9, 57.0], [24.0, 57.0], [24.1, 57.0], [24.2, 57.0], [24.3, 58.0], [24.4, 58.0], [24.5, 58.0], [24.6, 58.0], [24.7, 58.0], [24.8, 58.0], [24.9, 58.0], [25.0, 58.0], [25.1, 58.0], [25.2, 58.0], [25.3, 58.0], [25.4, 58.0], [25.5, 58.0], [25.6, 58.0], [25.7, 58.0], [25.8, 58.0], [25.9, 58.0], [26.0, 58.0], [26.1, 58.0], [26.2, 58.0], [26.3, 58.0], [26.4, 58.0], [26.5, 58.0], [26.6, 58.0], [26.7, 58.0], [26.8, 58.0], [26.9, 58.0], [27.0, 59.0], [27.1, 59.0], [27.2, 59.0], [27.3, 59.0], [27.4, 59.0], [27.5, 59.0], [27.6, 59.0], [27.7, 59.0], [27.8, 59.0], [27.9, 59.0], [28.0, 59.0], [28.1, 59.0], [28.2, 59.0], [28.3, 59.0], [28.4, 59.0], [28.5, 59.0], [28.6, 59.0], [28.7, 59.0], [28.8, 59.0], [28.9, 59.0], [29.0, 59.0], [29.1, 59.0], [29.2, 59.0], [29.3, 60.0], [29.4, 60.0], [29.5, 60.0], [29.6, 60.0], [29.7, 60.0], [29.8, 60.0], [29.9, 60.0], [30.0, 60.0], [30.1, 60.0], [30.2, 60.0], [30.3, 60.0], [30.4, 60.0], [30.5, 60.0], [30.6, 60.0], [30.7, 60.0], [30.8, 60.0], [30.9, 60.0], [31.0, 60.0], [31.1, 60.0], [31.2, 60.0], [31.3, 60.0], [31.4, 60.0], [31.5, 60.0], [31.6, 60.0], [31.7, 60.0], [31.8, 60.0], [31.9, 60.0], [32.0, 60.0], [32.1, 60.0], [32.2, 60.0], [32.3, 61.0], [32.4, 61.0], [32.5, 61.0], [32.6, 61.0], [32.7, 61.0], [32.8, 61.0], [32.9, 61.0], [33.0, 61.0], [33.1, 61.0], [33.2, 61.0], [33.3, 61.0], [33.4, 61.0], [33.5, 61.0], [33.6, 61.0], [33.7, 61.0], [33.8, 61.0], [33.9, 61.0], [34.0, 62.0], [34.1, 62.0], [34.2, 62.0], [34.3, 62.0], [34.4, 62.0], [34.5, 62.0], [34.6, 62.0], [34.7, 62.0], [34.8, 62.0], [34.9, 62.0], [35.0, 62.0], [35.1, 62.0], [35.2, 62.0], [35.3, 62.0], [35.4, 62.0], [35.5, 62.0], [35.6, 62.0], [35.7, 62.0], [35.8, 62.0], [35.9, 62.0], [36.0, 62.0], [36.1, 62.0], [36.2, 62.0], [36.3, 62.0], [36.4, 62.0], [36.5, 62.0], [36.6, 62.0], [36.7, 62.0], [36.8, 62.0], [36.9, 62.0], [37.0, 62.0], [37.1, 62.0], [37.2, 62.0], [37.3, 62.0], [37.4, 62.0], [37.5, 63.0], [37.6, 63.0], [37.7, 63.0], [37.8, 63.0], [37.9, 63.0], [38.0, 63.0], [38.1, 63.0], [38.2, 63.0], [38.3, 63.0], [38.4, 63.0], [38.5, 63.0], [38.6, 63.0], [38.7, 63.0], [38.8, 63.0], [38.9, 63.0], [39.0, 63.0], [39.1, 63.0], [39.2, 63.0], [39.3, 63.0], [39.4, 63.0], [39.5, 64.0], [39.6, 64.0], [39.7, 64.0], [39.8, 64.0], [39.9, 64.0], [40.0, 64.0], [40.1, 64.0], [40.2, 64.0], [40.3, 64.0], [40.4, 64.0], [40.5, 64.0], [40.6, 64.0], [40.7, 64.0], [40.8, 64.0], [40.9, 64.0], [41.0, 64.0], [41.1, 64.0], [41.2, 64.0], [41.3, 64.0], [41.4, 64.0], [41.5, 64.0], [41.6, 64.0], [41.7, 64.0], [41.8, 64.0], [41.9, 64.0], [42.0, 64.0], [42.1, 64.0], [42.2, 64.0], [42.3, 64.0], [42.4, 64.0], [42.5, 64.0], [42.6, 64.0], [42.7, 64.0], [42.8, 65.0], [42.9, 65.0], [43.0, 65.0], [43.1, 65.0], [43.2, 65.0], [43.3, 65.0], [43.4, 65.0], [43.5, 65.0], [43.6, 65.0], [43.7, 65.0], [43.8, 65.0], [43.9, 65.0], [44.0, 65.0], [44.1, 65.0], [44.2, 65.0], [44.3, 65.0], [44.4, 65.0], [44.5, 65.0], [44.6, 65.0], [44.7, 65.0], [44.8, 65.0], [44.9, 65.0], [45.0, 66.0], [45.1, 66.0], [45.2, 66.0], [45.3, 66.0], [45.4, 66.0], [45.5, 66.0], [45.6, 66.0], [45.7, 66.0], [45.8, 66.0], [45.9, 66.0], [46.0, 66.0], [46.1, 66.0], [46.2, 66.0], [46.3, 66.0], [46.4, 66.0], [46.5, 66.0], [46.6, 66.0], [46.7, 66.0], [46.8, 66.0], [46.9, 66.0], [47.0, 66.0], [47.1, 66.0], [47.2, 66.0], [47.3, 66.0], [47.4, 66.0], [47.5, 66.0], [47.6, 66.0], [47.7, 66.0], [47.8, 66.0], [47.9, 66.0], [48.0, 67.0], [48.1, 67.0], [48.2, 67.0], [48.3, 67.0], [48.4, 67.0], [48.5, 67.0], [48.6, 67.0], [48.7, 67.0], [48.8, 67.0], [48.9, 67.0], [49.0, 67.0], [49.1, 67.0], [49.2, 67.0], [49.3, 67.0], [49.4, 67.0], [49.5, 67.0], [49.6, 67.0], [49.7, 67.0], [49.8, 67.0], [49.9, 67.0], [50.0, 67.0], [50.1, 67.0], [50.2, 67.0], [50.3, 67.0], [50.4, 67.0], [50.5, 68.0], [50.6, 68.0], [50.7, 68.0], [50.8, 68.0], [50.9, 68.0], [51.0, 68.0], [51.1, 68.0], [51.2, 68.0], [51.3, 68.0], [51.4, 68.0], [51.5, 68.0], [51.6, 68.0], [51.7, 68.0], [51.8, 68.0], [51.9, 68.0], [52.0, 68.0], [52.1, 68.0], [52.2, 68.0], [52.3, 68.0], [52.4, 68.0], [52.5, 68.0], [52.6, 68.0], [52.7, 68.0], [52.8, 69.0], [52.9, 69.0], [53.0, 69.0], [53.1, 69.0], [53.2, 69.0], [53.3, 69.0], [53.4, 69.0], [53.5, 69.0], [53.6, 69.0], [53.7, 69.0], [53.8, 69.0], [53.9, 69.0], [54.0, 69.0], [54.1, 69.0], [54.2, 69.0], [54.3, 69.0], [54.4, 69.0], [54.5, 69.0], [54.6, 69.0], [54.7, 69.0], [54.8, 70.0], [54.9, 70.0], [55.0, 70.0], [55.1, 70.0], [55.2, 70.0], [55.3, 70.0], [55.4, 70.0], [55.5, 70.0], [55.6, 70.0], [55.7, 70.0], [55.8, 70.0], [55.9, 70.0], [56.0, 70.0], [56.1, 70.0], [56.2, 70.0], [56.3, 70.0], [56.4, 70.0], [56.5, 70.0], [56.6, 70.0], [56.7, 70.0], [56.8, 70.0], [56.9, 70.0], [57.0, 70.0], [57.1, 70.0], [57.2, 70.0], [57.3, 71.0], [57.4, 71.0], [57.5, 71.0], [57.6, 71.0], [57.7, 71.0], [57.8, 71.0], [57.9, 71.0], [58.0, 71.0], [58.1, 71.0], [58.2, 71.0], [58.3, 71.0], [58.4, 71.0], [58.5, 71.0], [58.6, 71.0], [58.7, 71.0], [58.8, 71.0], [58.9, 71.0], [59.0, 71.0], [59.1, 71.0], [59.2, 71.0], [59.3, 72.0], [59.4, 72.0], [59.5, 72.0], [59.6, 72.0], [59.7, 72.0], [59.8, 72.0], [59.9, 72.0], [60.0, 72.0], [60.1, 72.0], [60.2, 72.0], [60.3, 72.0], [60.4, 72.0], [60.5, 72.0], [60.6, 72.0], [60.7, 72.0], [60.8, 72.0], [60.9, 72.0], [61.0, 72.0], [61.1, 72.0], [61.2, 72.0], [61.3, 73.0], [61.4, 73.0], [61.5, 73.0], [61.6, 73.0], [61.7, 73.0], [61.8, 73.0], [61.9, 73.0], [62.0, 73.0], [62.1, 73.0], [62.2, 73.0], [62.3, 73.0], [62.4, 73.0], [62.5, 74.0], [62.6, 74.0], [62.7, 74.0], [62.8, 74.0], [62.9, 74.0], [63.0, 74.0], [63.1, 74.0], [63.2, 74.0], [63.3, 74.0], [63.4, 74.0], [63.5, 74.0], [63.6, 74.0], [63.7, 74.0], [63.8, 74.0], [63.9, 74.0], [64.0, 74.0], [64.1, 74.0], [64.2, 74.0], [64.3, 74.0], [64.4, 74.0], [64.5, 75.0], [64.6, 75.0], [64.7, 75.0], [64.8, 75.0], [64.9, 75.0], [65.0, 75.0], [65.1, 75.0], [65.2, 75.0], [65.3, 75.0], [65.4, 75.0], [65.5, 75.0], [65.6, 75.0], [65.7, 75.0], [65.8, 75.0], [65.9, 75.0], [66.0, 75.0], [66.1, 75.0], [66.2, 75.0], [66.3, 75.0], [66.4, 75.0], [66.5, 75.0], [66.6, 75.0], [66.7, 75.0], [66.8, 75.0], [66.9, 75.0], [67.0, 75.0], [67.1, 75.0], [67.2, 75.0], [67.3, 76.0], [67.4, 76.0], [67.5, 76.0], [67.6, 76.0], [67.7, 76.0], [67.8, 76.0], [67.9, 76.0], [68.0, 76.0], [68.1, 76.0], [68.2, 76.0], [68.3, 76.0], [68.4, 76.0], [68.5, 76.0], [68.6, 76.0], [68.7, 76.0], [68.8, 76.0], [68.9, 76.0], [69.0, 76.0], [69.1, 76.0], [69.2, 76.0], [69.3, 76.0], [69.4, 76.0], [69.5, 76.0], [69.6, 76.0], [69.7, 76.0], [69.8, 76.0], [69.9, 76.0], [70.0, 77.0], [70.1, 77.0], [70.2, 77.0], [70.3, 77.0], [70.4, 77.0], [70.5, 77.0], [70.6, 77.0], [70.7, 77.0], [70.8, 77.0], [70.9, 77.0], [71.0, 78.0], [71.1, 78.0], [71.2, 78.0], [71.3, 78.0], [71.4, 78.0], [71.5, 79.0], [71.6, 79.0], [71.7, 79.0], [71.8, 79.0], [71.9, 79.0], [72.0, 79.0], [72.1, 79.0], [72.2, 79.0], [72.3, 79.0], [72.4, 79.0], [72.5, 79.0], [72.6, 79.0], [72.7, 79.0], [72.8, 80.0], [72.9, 80.0], [73.0, 80.0], [73.1, 80.0], [73.2, 80.0], [73.3, 80.0], [73.4, 80.0], [73.5, 81.0], [73.6, 81.0], [73.7, 81.0], [73.8, 81.0], [73.9, 81.0], [74.0, 81.0], [74.1, 81.0], [74.2, 81.0], [74.3, 81.0], [74.4, 81.0], [74.5, 81.0], [74.6, 81.0], [74.7, 81.0], [74.8, 81.0], [74.9, 81.0], [75.0, 82.0], [75.1, 82.0], [75.2, 82.0], [75.3, 82.0], [75.4, 82.0], [75.5, 82.0], [75.6, 82.0], [75.7, 82.0], [75.8, 82.0], [75.9, 82.0], [76.0, 83.0], [76.1, 83.0], [76.2, 83.0], [76.3, 83.0], [76.4, 83.0], [76.5, 84.0], [76.6, 84.0], [76.7, 84.0], [76.8, 85.0], [76.9, 85.0], [77.0, 85.0], [77.1, 85.0], [77.2, 85.0], [77.3, 85.0], [77.4, 85.0], [77.5, 85.0], [77.6, 85.0], [77.7, 85.0], [77.8, 86.0], [77.9, 86.0], [78.0, 87.0], [78.1, 87.0], [78.2, 87.0], [78.3, 87.0], [78.4, 87.0], [78.5, 87.0], [78.6, 87.0], [78.7, 87.0], [78.8, 87.0], [78.9, 87.0], [79.0, 87.0], [79.1, 87.0], [79.2, 87.0], [79.3, 89.0], [79.4, 89.0], [79.5, 89.0], [79.6, 89.0], [79.7, 89.0], [79.8, 90.0], [79.9, 90.0], [80.0, 90.0], [80.1, 90.0], [80.2, 90.0], [80.3, 90.0], [80.4, 90.0], [80.5, 90.0], [80.6, 90.0], [80.7, 90.0], [80.8, 90.0], [80.9, 90.0], [81.0, 91.0], [81.1, 91.0], [81.2, 91.0], [81.3, 92.0], [81.4, 92.0], [81.5, 95.0], [81.6, 95.0], [81.7, 95.0], [81.8, 97.0], [81.9, 97.0], [82.0, 97.0], [82.1, 97.0], [82.2, 97.0], [82.3, 98.0], [82.4, 98.0], [82.5, 100.0], [82.6, 100.0], [82.7, 100.0], [82.8, 101.0], [82.9, 101.0], [83.0, 103.0], [83.1, 103.0], [83.2, 103.0], [83.3, 109.0], [83.4, 109.0], [83.5, 110.0], [83.6, 110.0], [83.7, 110.0], [83.8, 111.0], [83.9, 111.0], [84.0, 111.0], [84.1, 111.0], [84.2, 111.0], [84.3, 112.0], [84.4, 112.0], [84.5, 114.0], [84.6, 114.0], [84.7, 114.0], [84.8, 115.0], [84.9, 115.0], [85.0, 124.0], [85.1, 124.0], [85.2, 124.0], [85.3, 125.0], [85.4, 125.0], [85.5, 135.0], [85.6, 135.0], [85.7, 135.0], [85.8, 137.0], [85.9, 137.0], [86.0, 153.0], [86.1, 153.0], [86.2, 153.0], [86.3, 155.0], [86.4, 155.0], [86.5, 159.0], [86.6, 159.0], [86.7, 159.0], [86.8, 161.0], [86.9, 161.0], [87.0, 183.0], [87.1, 183.0], [87.2, 183.0], [87.3, 185.0], [87.4, 185.0], [87.5, 201.0], [87.6, 201.0], [87.7, 201.0], [87.8, 204.0], [87.9, 204.0], [88.0, 204.0], [88.1, 204.0], [88.2, 204.0], [88.3, 212.0], [88.4, 212.0], [88.5, 221.0], [88.6, 221.0], [88.7, 221.0], [88.8, 225.0], [88.9, 225.0], [89.0, 233.0], [89.1, 233.0], [89.2, 233.0], [89.3, 239.0], [89.4, 239.0], [89.5, 250.0], [89.6, 250.0], [89.7, 250.0], [89.8, 252.0], [89.9, 252.0], [90.0, 258.0], [90.1, 258.0], [90.2, 258.0], [90.3, 265.0], [90.4, 265.0], [90.5, 267.0], [90.6, 267.0], [90.7, 267.0], [90.8, 272.0], [90.9, 272.0], [91.0, 273.0], [91.1, 273.0], [91.2, 273.0], [91.3, 286.0], [91.4, 286.0], [91.5, 289.0], [91.6, 289.0], [91.7, 289.0], [91.8, 297.0], [91.9, 297.0], [92.0, 302.0], [92.1, 302.0], [92.2, 302.0], [92.3, 324.0], [92.4, 324.0], [92.5, 336.0], [92.6, 336.0], [92.7, 336.0], [92.8, 337.0], [92.9, 337.0], [93.0, 347.0], [93.1, 347.0], [93.2, 347.0], [93.3, 350.0], [93.4, 350.0], [93.5, 359.0], [93.6, 359.0], [93.7, 359.0], [93.8, 365.0], [93.9, 365.0], [94.0, 366.0], [94.1, 366.0], [94.2, 366.0], [94.3, 372.0], [94.4, 372.0], [94.5, 387.0], [94.6, 387.0], [94.7, 387.0], [94.8, 398.0], [94.9, 398.0], [95.0, 398.0], [95.1, 398.0], [95.2, 398.0], [95.3, 409.0], [95.4, 409.0], [95.5, 415.0], [95.6, 415.0], [95.7, 415.0], [95.8, 428.0], [95.9, 428.0], [96.0, 435.0], [96.1, 435.0], [96.2, 435.0], [96.3, 439.0], [96.4, 439.0], [96.5, 448.0], [96.6, 448.0], [96.7, 448.0], [96.8, 455.0], [96.9, 455.0], [97.0, 473.0], [97.1, 473.0], [97.2, 473.0], [97.3, 478.0], [97.4, 478.0], [97.5, 479.0], [97.6, 479.0], [97.7, 479.0], [97.8, 497.0], [97.9, 497.0], [98.0, 511.0], [98.1, 511.0], [98.2, 511.0], [98.3, 512.0], [98.4, 512.0], [98.5, 513.0], [98.6, 513.0], [98.7, 513.0], [98.8, 515.0], [98.9, 515.0], [99.0, 518.0], [99.1, 518.0], [99.2, 518.0], [99.3, 527.0], [99.4, 527.0], [99.5, 527.0], [99.6, 527.0], [99.7, 527.0], [99.8, 531.0], [99.9, 531.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 330.0, "series": [{"data": [[0.0, 330.0], [300.0, 13.0], [400.0, 11.0], [200.0, 18.0], [100.0, 20.0], [500.0, 8.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 392.0, "series": [{"data": [[0.0, 392.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.0000000000000004, "minX": 1.6698001728E12, "maxY": 30.0, "series": [{"data": [[1.6698001788E12, 3.0416666666666665], [1.6698001752E12, 3.0000000000000004], [1.6698001782E12, 3.2222222222222228], [1.6698001746E12, 3.2083333333333335], [1.6698001818E12, 3.2499999999999996], [1.6698001794E12, 3.0400000000000005], [1.6698001758E12, 3.555555555555556], [1.6698001734E12, 16.90697674418605], [1.6698001806E12, 4.133333333333334], [1.669800177E12, 3.2608695652173916], [1.6698001764E12, 3.12], [1.6698001728E12, 30.0], [1.66980018E12, 3.7083333333333335], [1.6698001812E12, 3.9615384615384626], [1.6698001776E12, 3.821428571428571], [1.669800174E12, 4.848484848484849]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698001818E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 51.0, "minX": 1.0, "maxY": 519.5, "series": [{"data": [[2.0, 55.115384615384606], [3.0, 61.18518518518517], [4.0, 74.32941176470591], [5.0, 82.76923076923076], [6.0, 104.46153846153847], [7.0, 119.5], [8.0, 179.5], [9.0, 177.0], [10.0, 214.5], [11.0, 232.66666666666666], [12.0, 219.0], [13.0, 262.6666666666667], [14.0, 290.6666666666667], [15.0, 367.25], [16.0, 381.4], [1.0, 51.0], [17.0, 414.0], [18.0, 350.3333333333333], [19.0, 437.0], [20.0, 372.0], [21.0, 519.5], [23.0, 481.0], [24.0, 483.0], [25.0, 479.0], [26.0, 497.0], [27.0, 473.0], [30.0, 392.4]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[5.332500000000003, 105.84000000000007]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1083.3333333333333, "minX": 1.6698001728E12, "maxY": 53033.333333333336, "series": [{"data": [[1.6698001788E12, 29600.0], [1.6698001752E12, 29600.0], [1.6698001782E12, 33300.0], [1.6698001746E12, 29600.0], [1.6698001818E12, 14800.0], [1.6698001794E12, 30833.333333333332], [1.6698001758E12, 33300.0], [1.6698001734E12, 53033.333333333336], [1.6698001806E12, 37000.0], [1.669800177E12, 28366.666666666668], [1.6698001764E12, 30833.333333333332], [1.6698001728E12, 6166.666666666667], [1.66980018E12, 29600.0], [1.6698001812E12, 32066.666666666668], [1.6698001776E12, 34533.333333333336], [1.669800174E12, 40700.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6698001788E12, 5200.0], [1.6698001752E12, 5200.0], [1.6698001782E12, 5850.0], [1.6698001746E12, 5200.0], [1.6698001818E12, 2600.0], [1.6698001794E12, 5416.666666666667], [1.6698001758E12, 5850.0], [1.6698001734E12, 9316.666666666666], [1.6698001806E12, 6500.0], [1.669800177E12, 4983.333333333333], [1.6698001764E12, 5416.666666666667], [1.6698001728E12, 1083.3333333333333], [1.66980018E12, 5200.0], [1.6698001812E12, 5633.333333333333], [1.6698001776E12, 6066.666666666667], [1.669800174E12, 7150.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698001818E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 58.32000000000001, "minX": 1.6698001728E12, "maxY": 392.4, "series": [{"data": [[1.6698001788E12, 59.54166666666666], [1.6698001752E12, 60.79166666666667], [1.6698001782E12, 62.59259259259258], [1.6698001746E12, 60.041666666666664], [1.6698001818E12, 64.5], [1.6698001794E12, 58.32000000000001], [1.6698001758E12, 72.2222222222222], [1.6698001734E12, 366.0697674418604], [1.6698001806E12, 72.96666666666667], [1.669800177E12, 66.91304347826086], [1.6698001764E12, 61.800000000000004], [1.6698001728E12, 392.4], [1.66980018E12, 66.0], [1.6698001812E12, 83.03846153846153], [1.6698001776E12, 68.92857142857142], [1.669800174E12, 105.63636363636364]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698001818E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 58.239999999999995, "minX": 1.6698001728E12, "maxY": 390.0, "series": [{"data": [[1.6698001788E12, 59.54166666666666], [1.6698001752E12, 60.666666666666664], [1.6698001782E12, 62.44444444444444], [1.6698001746E12, 59.87500000000001], [1.6698001818E12, 64.5], [1.6698001794E12, 58.239999999999995], [1.6698001758E12, 72.11111111111113], [1.6698001734E12, 365.953488372093], [1.6698001806E12, 72.90000000000002], [1.669800177E12, 66.78260869565216], [1.6698001764E12, 61.800000000000004], [1.6698001728E12, 390.0], [1.66980018E12, 66.0], [1.6698001812E12, 83.00000000000001], [1.6698001776E12, 68.82142857142858], [1.669800174E12, 105.54545454545453]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698001818E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.7200000000000001, "minX": 1.6698001728E12, "maxY": 9.8, "series": [{"data": [[1.6698001788E12, 0.8749999999999999], [1.6698001752E12, 1.1666666666666665], [1.6698001782E12, 1.0000000000000002], [1.6698001746E12, 1.166666666666667], [1.6698001818E12, 0.8333333333333334], [1.6698001794E12, 0.7200000000000001], [1.6698001758E12, 1.0370370370370372], [1.6698001734E12, 7.209302325581394], [1.6698001806E12, 0.9666666666666666], [1.669800177E12, 1.0], [1.6698001764E12, 1.1200000000000003], [1.6698001728E12, 9.8], [1.66980018E12, 1.0], [1.6698001812E12, 1.1538461538461544], [1.6698001776E12, 0.9642857142857142], [1.669800174E12, 1.2727272727272725]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698001818E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 47.0, "minX": 1.6698001728E12, "maxY": 531.0, "series": [{"data": [[1.6698001788E12, 90.0], [1.6698001752E12, 87.0], [1.6698001782E12, 89.0], [1.6698001746E12, 75.0], [1.6698001818E12, 81.0], [1.6698001794E12, 85.0], [1.6698001758E12, 97.0], [1.6698001734E12, 531.0], [1.6698001806E12, 112.0], [1.669800177E12, 92.0], [1.6698001764E12, 76.0], [1.6698001728E12, 448.0], [1.66980018E12, 114.0], [1.6698001812E12, 124.0], [1.6698001776E12, 82.0], [1.669800174E12, 225.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6698001788E12, 67.5], [1.6698001752E12, 79.0], [1.6698001782E12, 85.4], [1.6698001746E12, 71.5], [1.6698001818E12, 77.70000000000002], [1.6698001794E12, 70.00000000000001], [1.6698001758E12, 89.0], [1.6698001734E12, 516.8], [1.6698001806E12, 102.80000000000001], [1.669800177E12, 79.4], [1.6698001764E12, 73.80000000000001], [1.6698001728E12, 448.0], [1.66980018E12, 99.5], [1.6698001812E12, 112.2], [1.6698001776E12, 80.2], [1.669800174E12, 202.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6698001788E12, 90.0], [1.6698001752E12, 87.0], [1.6698001782E12, 89.0], [1.6698001746E12, 75.0], [1.6698001818E12, 81.0], [1.6698001794E12, 85.0], [1.6698001758E12, 97.0], [1.6698001734E12, 531.0], [1.6698001806E12, 112.0], [1.669800177E12, 92.0], [1.6698001764E12, 76.0], [1.6698001728E12, 448.0], [1.66980018E12, 114.0], [1.6698001812E12, 124.0], [1.6698001776E12, 82.0], [1.669800174E12, 225.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6698001788E12, 84.75], [1.6698001752E12, 85.75], [1.6698001782E12, 88.19999999999999], [1.6698001746E12, 74.25], [1.6698001818E12, 81.0], [1.6698001794E12, 81.39999999999999], [1.6698001758E12, 97.0], [1.6698001734E12, 527.0], [1.6698001806E12, 111.45], [1.669800177E12, 89.79999999999997], [1.6698001764E12, 75.7], [1.6698001728E12, 448.0], [1.66980018E12, 112.75], [1.6698001812E12, 120.85], [1.6698001776E12, 82.0], [1.669800174E12, 210.29999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6698001788E12, 50.0], [1.6698001752E12, 49.0], [1.6698001782E12, 47.0], [1.6698001746E12, 49.0], [1.6698001818E12, 53.0], [1.6698001794E12, 48.0], [1.6698001758E12, 54.0], [1.6698001734E12, 153.0], [1.6698001806E12, 48.0], [1.669800177E12, 55.0], [1.6698001764E12, 50.0], [1.6698001728E12, 324.0], [1.66980018E12, 50.0], [1.6698001812E12, 54.0], [1.6698001776E12, 56.0], [1.669800174E12, 49.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6698001788E12, 59.0], [1.6698001752E12, 57.0], [1.6698001782E12, 62.0], [1.6698001746E12, 57.5], [1.6698001818E12, 64.5], [1.6698001794E12, 58.0], [1.6698001758E12, 70.0], [1.6698001734E12, 365.0], [1.6698001806E12, 72.0], [1.669800177E12, 65.0], [1.6698001764E12, 60.0], [1.6698001728E12, 415.0], [1.66980018E12, 62.5], [1.6698001812E12, 80.0], [1.6698001776E12, 70.0], [1.669800174E12, 80.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698001818E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 58.0, "minX": 3.0, "maxY": 204.0, "series": [{"data": [[42.0, 62.0], [43.0, 66.0], [47.0, 67.0], [48.0, 204.0], [3.0, 58.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 58.0, "minX": 3.0, "maxY": 204.0, "series": [{"data": [[42.0, 62.0], [43.0, 66.0], [47.0, 67.0], [48.0, 204.0], [3.0, 58.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 15.0, "minX": 1.6698001728E12, "maxY": 50.0, "series": [{"data": [[1.6698001788E12, 41.666666666666664], [1.6698001752E12, 40.0], [1.6698001782E12, 41.666666666666664], [1.6698001746E12, 43.333333333333336], [1.6698001818E12, 15.0], [1.6698001794E12, 40.0], [1.6698001758E12, 43.333333333333336], [1.6698001734E12, 46.666666666666664], [1.6698001806E12, 45.0], [1.669800177E12, 40.0], [1.6698001764E12, 41.666666666666664], [1.6698001728E12, 50.0], [1.66980018E12, 46.666666666666664], [1.6698001812E12, 43.333333333333336], [1.6698001776E12, 48.333333333333336], [1.669800174E12, 40.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698001818E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6698001728E12, "maxY": 71.66666666666667, "series": [{"data": [[1.6698001788E12, 40.0], [1.6698001752E12, 40.0], [1.6698001782E12, 45.0], [1.6698001746E12, 40.0], [1.6698001818E12, 20.0], [1.6698001794E12, 41.666666666666664], [1.6698001758E12, 45.0], [1.6698001734E12, 71.66666666666667], [1.6698001806E12, 50.0], [1.669800177E12, 38.333333333333336], [1.6698001764E12, 41.666666666666664], [1.6698001728E12, 8.333333333333334], [1.66980018E12, 40.0], [1.6698001812E12, 43.333333333333336], [1.6698001776E12, 46.666666666666664], [1.669800174E12, 55.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698001818E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6698001728E12, "maxY": 71.66666666666667, "series": [{"data": [[1.6698001788E12, 40.0], [1.6698001752E12, 40.0], [1.6698001782E12, 45.0], [1.6698001746E12, 40.0], [1.6698001818E12, 20.0], [1.6698001794E12, 41.666666666666664], [1.6698001758E12, 45.0], [1.6698001734E12, 71.66666666666667], [1.6698001806E12, 50.0], [1.669800177E12, 38.333333333333336], [1.6698001764E12, 41.666666666666664], [1.6698001728E12, 8.333333333333334], [1.66980018E12, 40.0], [1.6698001812E12, 43.333333333333336], [1.6698001776E12, 46.666666666666664], [1.669800174E12, 55.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698001818E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6698001728E12, "maxY": 71.66666666666667, "series": [{"data": [[1.6698001788E12, 40.0], [1.6698001752E12, 40.0], [1.6698001782E12, 45.0], [1.6698001746E12, 40.0], [1.6698001818E12, 20.0], [1.6698001794E12, 41.666666666666664], [1.6698001758E12, 45.0], [1.6698001734E12, 71.66666666666667], [1.6698001806E12, 50.0], [1.669800177E12, 38.333333333333336], [1.6698001764E12, 41.666666666666664], [1.6698001728E12, 8.333333333333334], [1.66980018E12, 40.0], [1.6698001812E12, 43.333333333333336], [1.6698001776E12, 46.666666666666664], [1.669800174E12, 55.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698001818E12, "title": "Total Transactions Per Second"}},
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

