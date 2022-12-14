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
        data: {"result": {"minY": 47.0, "minX": 0.0, "maxY": 576.0, "series": [{"data": [[0.0, 47.0], [0.1, 47.0], [0.2, 47.0], [0.3, 47.0], [0.4, 47.0], [0.5, 47.0], [0.6, 47.0], [0.7, 47.0], [0.8, 47.0], [0.9, 47.0], [1.0, 47.0], [1.1, 47.0], [1.2, 47.0], [1.3, 47.0], [1.4, 47.0], [1.5, 48.0], [1.6, 48.0], [1.7, 48.0], [1.8, 48.0], [1.9, 48.0], [2.0, 48.0], [2.1, 48.0], [2.2, 48.0], [2.3, 48.0], [2.4, 48.0], [2.5, 49.0], [2.6, 49.0], [2.7, 49.0], [2.8, 49.0], [2.9, 49.0], [3.0, 49.0], [3.1, 49.0], [3.2, 49.0], [3.3, 49.0], [3.4, 49.0], [3.5, 49.0], [3.6, 49.0], [3.7, 49.0], [3.8, 49.0], [3.9, 49.0], [4.0, 50.0], [4.1, 50.0], [4.2, 50.0], [4.3, 50.0], [4.4, 50.0], [4.5, 50.0], [4.6, 50.0], [4.7, 50.0], [4.8, 50.0], [4.9, 50.0], [5.0, 50.0], [5.1, 50.0], [5.2, 50.0], [5.3, 50.0], [5.4, 50.0], [5.5, 50.0], [5.6, 50.0], [5.7, 50.0], [5.8, 50.0], [5.9, 50.0], [6.0, 50.0], [6.1, 50.0], [6.2, 50.0], [6.3, 50.0], [6.4, 50.0], [6.5, 50.0], [6.6, 50.0], [6.7, 50.0], [6.8, 50.0], [6.9, 50.0], [7.0, 50.0], [7.1, 50.0], [7.2, 50.0], [7.3, 50.0], [7.4, 50.0], [7.5, 50.0], [7.6, 50.0], [7.7, 50.0], [7.8, 50.0], [7.9, 50.0], [8.0, 51.0], [8.1, 51.0], [8.2, 51.0], [8.3, 51.0], [8.4, 51.0], [8.5, 51.0], [8.6, 51.0], [8.7, 51.0], [8.8, 51.0], [8.9, 51.0], [9.0, 51.0], [9.1, 51.0], [9.2, 51.0], [9.3, 51.0], [9.4, 51.0], [9.5, 51.0], [9.6, 51.0], [9.7, 51.0], [9.8, 51.0], [9.9, 51.0], [10.0, 51.0], [10.1, 51.0], [10.2, 51.0], [10.3, 51.0], [10.4, 51.0], [10.5, 51.0], [10.6, 51.0], [10.7, 51.0], [10.8, 51.0], [10.9, 51.0], [11.0, 51.0], [11.1, 51.0], [11.2, 51.0], [11.3, 51.0], [11.4, 51.0], [11.5, 51.0], [11.6, 51.0], [11.7, 51.0], [11.8, 51.0], [11.9, 51.0], [12.0, 52.0], [12.1, 52.0], [12.2, 52.0], [12.3, 52.0], [12.4, 52.0], [12.5, 52.0], [12.6, 52.0], [12.7, 52.0], [12.8, 52.0], [12.9, 52.0], [13.0, 52.0], [13.1, 52.0], [13.2, 52.0], [13.3, 52.0], [13.4, 52.0], [13.5, 52.0], [13.6, 52.0], [13.7, 52.0], [13.8, 52.0], [13.9, 52.0], [14.0, 52.0], [14.1, 52.0], [14.2, 52.0], [14.3, 52.0], [14.4, 52.0], [14.5, 52.0], [14.6, 52.0], [14.7, 52.0], [14.8, 52.0], [14.9, 52.0], [15.0, 52.0], [15.1, 52.0], [15.2, 52.0], [15.3, 52.0], [15.4, 52.0], [15.5, 52.0], [15.6, 52.0], [15.7, 52.0], [15.8, 52.0], [15.9, 52.0], [16.0, 52.0], [16.1, 52.0], [16.2, 52.0], [16.3, 52.0], [16.4, 52.0], [16.5, 52.0], [16.6, 52.0], [16.7, 52.0], [16.8, 52.0], [16.9, 52.0], [17.0, 52.0], [17.1, 52.0], [17.2, 52.0], [17.3, 52.0], [17.4, 52.0], [17.5, 52.0], [17.6, 52.0], [17.7, 52.0], [17.8, 52.0], [17.9, 52.0], [18.0, 52.0], [18.1, 52.0], [18.2, 52.0], [18.3, 53.0], [18.4, 53.0], [18.5, 53.0], [18.6, 53.0], [18.7, 53.0], [18.8, 53.0], [18.9, 53.0], [19.0, 53.0], [19.1, 53.0], [19.2, 53.0], [19.3, 53.0], [19.4, 53.0], [19.5, 53.0], [19.6, 53.0], [19.7, 53.0], [19.8, 53.0], [19.9, 53.0], [20.0, 53.0], [20.1, 53.0], [20.2, 53.0], [20.3, 53.0], [20.4, 53.0], [20.5, 53.0], [20.6, 53.0], [20.7, 53.0], [20.8, 53.0], [20.9, 53.0], [21.0, 53.0], [21.1, 53.0], [21.2, 53.0], [21.3, 53.0], [21.4, 53.0], [21.5, 53.0], [21.6, 53.0], [21.7, 53.0], [21.8, 53.0], [21.9, 53.0], [22.0, 53.0], [22.1, 53.0], [22.2, 53.0], [22.3, 53.0], [22.4, 53.0], [22.5, 53.0], [22.6, 53.0], [22.7, 53.0], [22.8, 53.0], [22.9, 53.0], [23.0, 53.0], [23.1, 53.0], [23.2, 53.0], [23.3, 53.0], [23.4, 53.0], [23.5, 53.0], [23.6, 53.0], [23.7, 53.0], [23.8, 53.0], [23.9, 53.0], [24.0, 53.0], [24.1, 53.0], [24.2, 53.0], [24.3, 53.0], [24.4, 53.0], [24.5, 54.0], [24.6, 54.0], [24.7, 54.0], [24.8, 54.0], [24.9, 54.0], [25.0, 54.0], [25.1, 54.0], [25.2, 54.0], [25.3, 54.0], [25.4, 54.0], [25.5, 54.0], [25.6, 54.0], [25.7, 54.0], [25.8, 54.0], [25.9, 54.0], [26.0, 54.0], [26.1, 54.0], [26.2, 54.0], [26.3, 54.0], [26.4, 54.0], [26.5, 54.0], [26.6, 54.0], [26.7, 54.0], [26.8, 54.0], [26.9, 54.0], [27.0, 54.0], [27.1, 54.0], [27.2, 54.0], [27.3, 54.0], [27.4, 54.0], [27.5, 54.0], [27.6, 54.0], [27.7, 54.0], [27.8, 54.0], [27.9, 54.0], [28.0, 54.0], [28.1, 54.0], [28.2, 54.0], [28.3, 54.0], [28.4, 54.0], [28.5, 54.0], [28.6, 54.0], [28.7, 54.0], [28.8, 54.0], [28.9, 54.0], [29.0, 54.0], [29.1, 54.0], [29.2, 54.0], [29.3, 54.0], [29.4, 54.0], [29.5, 55.0], [29.6, 55.0], [29.7, 55.0], [29.8, 55.0], [29.9, 55.0], [30.0, 55.0], [30.1, 55.0], [30.2, 55.0], [30.3, 55.0], [30.4, 55.0], [30.5, 55.0], [30.6, 55.0], [30.7, 55.0], [30.8, 55.0], [30.9, 55.0], [31.0, 55.0], [31.1, 55.0], [31.2, 55.0], [31.3, 55.0], [31.4, 55.0], [31.5, 55.0], [31.6, 55.0], [31.7, 55.0], [31.8, 55.0], [31.9, 55.0], [32.0, 55.0], [32.1, 55.0], [32.2, 55.0], [32.3, 55.0], [32.4, 55.0], [32.5, 56.0], [32.6, 56.0], [32.7, 56.0], [32.8, 56.0], [32.9, 56.0], [33.0, 56.0], [33.1, 56.0], [33.2, 56.0], [33.3, 56.0], [33.4, 56.0], [33.5, 56.0], [33.6, 56.0], [33.7, 56.0], [33.8, 56.0], [33.9, 56.0], [34.0, 57.0], [34.1, 57.0], [34.2, 57.0], [34.3, 57.0], [34.4, 57.0], [34.5, 57.0], [34.6, 57.0], [34.7, 57.0], [34.8, 57.0], [34.9, 57.0], [35.0, 57.0], [35.1, 57.0], [35.2, 57.0], [35.3, 57.0], [35.4, 57.0], [35.5, 57.0], [35.6, 57.0], [35.7, 57.0], [35.8, 57.0], [35.9, 57.0], [36.0, 57.0], [36.1, 57.0], [36.2, 57.0], [36.3, 57.0], [36.4, 57.0], [36.5, 57.0], [36.6, 57.0], [36.7, 57.0], [36.8, 58.0], [36.9, 58.0], [37.0, 58.0], [37.1, 58.0], [37.2, 58.0], [37.3, 58.0], [37.4, 58.0], [37.5, 58.0], [37.6, 58.0], [37.7, 58.0], [37.8, 58.0], [37.9, 58.0], [38.0, 58.0], [38.1, 58.0], [38.2, 58.0], [38.3, 58.0], [38.4, 58.0], [38.5, 58.0], [38.6, 58.0], [38.7, 58.0], [38.8, 58.0], [38.9, 58.0], [39.0, 58.0], [39.1, 58.0], [39.2, 58.0], [39.3, 58.0], [39.4, 58.0], [39.5, 59.0], [39.6, 59.0], [39.7, 59.0], [39.8, 59.0], [39.9, 59.0], [40.0, 59.0], [40.1, 59.0], [40.2, 59.0], [40.3, 59.0], [40.4, 59.0], [40.5, 59.0], [40.6, 59.0], [40.7, 59.0], [40.8, 59.0], [40.9, 59.0], [41.0, 59.0], [41.1, 59.0], [41.2, 59.0], [41.3, 59.0], [41.4, 59.0], [41.5, 59.0], [41.6, 59.0], [41.7, 59.0], [41.8, 59.0], [41.9, 59.0], [42.0, 59.0], [42.1, 59.0], [42.2, 59.0], [42.3, 59.0], [42.4, 59.0], [42.5, 60.0], [42.6, 60.0], [42.7, 60.0], [42.8, 60.0], [42.9, 60.0], [43.0, 60.0], [43.1, 60.0], [43.2, 60.0], [43.3, 60.0], [43.4, 60.0], [43.5, 60.0], [43.6, 60.0], [43.7, 60.0], [43.8, 60.0], [43.9, 60.0], [44.0, 60.0], [44.1, 60.0], [44.2, 60.0], [44.3, 60.0], [44.4, 60.0], [44.5, 60.0], [44.6, 60.0], [44.7, 60.0], [44.8, 60.0], [44.9, 60.0], [45.0, 60.0], [45.1, 60.0], [45.2, 60.0], [45.3, 60.0], [45.4, 60.0], [45.5, 60.0], [45.6, 60.0], [45.7, 60.0], [45.8, 60.0], [45.9, 60.0], [46.0, 61.0], [46.1, 61.0], [46.2, 61.0], [46.3, 61.0], [46.4, 61.0], [46.5, 61.0], [46.6, 61.0], [46.7, 61.0], [46.8, 61.0], [46.9, 61.0], [47.0, 61.0], [47.1, 61.0], [47.2, 61.0], [47.3, 61.0], [47.4, 61.0], [47.5, 61.0], [47.6, 61.0], [47.7, 61.0], [47.8, 61.0], [47.9, 61.0], [48.0, 61.0], [48.1, 61.0], [48.2, 61.0], [48.3, 61.0], [48.4, 61.0], [48.5, 61.0], [48.6, 61.0], [48.7, 61.0], [48.8, 61.0], [48.9, 61.0], [49.0, 61.0], [49.1, 61.0], [49.2, 61.0], [49.3, 62.0], [49.4, 62.0], [49.5, 62.0], [49.6, 62.0], [49.7, 62.0], [49.8, 62.0], [49.9, 62.0], [50.0, 62.0], [50.1, 62.0], [50.2, 62.0], [50.3, 62.0], [50.4, 62.0], [50.5, 62.0], [50.6, 62.0], [50.7, 62.0], [50.8, 62.0], [50.9, 62.0], [51.0, 62.0], [51.1, 62.0], [51.2, 62.0], [51.3, 63.0], [51.4, 63.0], [51.5, 63.0], [51.6, 63.0], [51.7, 63.0], [51.8, 63.0], [51.9, 63.0], [52.0, 63.0], [52.1, 63.0], [52.2, 63.0], [52.3, 63.0], [52.4, 63.0], [52.5, 63.0], [52.6, 63.0], [52.7, 63.0], [52.8, 63.0], [52.9, 63.0], [53.0, 63.0], [53.1, 63.0], [53.2, 63.0], [53.3, 63.0], [53.4, 63.0], [53.5, 64.0], [53.6, 64.0], [53.7, 64.0], [53.8, 64.0], [53.9, 64.0], [54.0, 64.0], [54.1, 64.0], [54.2, 64.0], [54.3, 64.0], [54.4, 64.0], [54.5, 64.0], [54.6, 64.0], [54.7, 64.0], [54.8, 64.0], [54.9, 64.0], [55.0, 64.0], [55.1, 64.0], [55.2, 64.0], [55.3, 64.0], [55.4, 64.0], [55.5, 64.0], [55.6, 64.0], [55.7, 64.0], [55.8, 64.0], [55.9, 64.0], [56.0, 65.0], [56.1, 65.0], [56.2, 65.0], [56.3, 65.0], [56.4, 65.0], [56.5, 65.0], [56.6, 65.0], [56.7, 65.0], [56.8, 65.0], [56.9, 65.0], [57.0, 65.0], [57.1, 65.0], [57.2, 65.0], [57.3, 65.0], [57.4, 65.0], [57.5, 65.0], [57.6, 65.0], [57.7, 65.0], [57.8, 65.0], [57.9, 65.0], [58.0, 65.0], [58.1, 65.0], [58.2, 65.0], [58.3, 65.0], [58.4, 65.0], [58.5, 65.0], [58.6, 65.0], [58.7, 65.0], [58.8, 65.0], [58.9, 65.0], [59.0, 65.0], [59.1, 65.0], [59.2, 65.0], [59.3, 65.0], [59.4, 65.0], [59.5, 65.0], [59.6, 65.0], [59.7, 65.0], [59.8, 66.0], [59.9, 66.0], [60.0, 66.0], [60.1, 66.0], [60.2, 66.0], [60.3, 66.0], [60.4, 66.0], [60.5, 66.0], [60.6, 66.0], [60.7, 66.0], [60.8, 67.0], [60.9, 67.0], [61.0, 67.0], [61.1, 67.0], [61.2, 67.0], [61.3, 67.0], [61.4, 67.0], [61.5, 67.0], [61.6, 67.0], [61.7, 67.0], [61.8, 67.0], [61.9, 67.0], [62.0, 68.0], [62.1, 68.0], [62.2, 68.0], [62.3, 68.0], [62.4, 68.0], [62.5, 68.0], [62.6, 68.0], [62.7, 68.0], [62.8, 68.0], [62.9, 68.0], [63.0, 68.0], [63.1, 68.0], [63.2, 68.0], [63.3, 68.0], [63.4, 68.0], [63.5, 68.0], [63.6, 68.0], [63.7, 68.0], [63.8, 68.0], [63.9, 68.0], [64.0, 68.0], [64.1, 68.0], [64.2, 68.0], [64.3, 68.0], [64.4, 68.0], [64.5, 68.0], [64.6, 68.0], [64.7, 68.0], [64.8, 68.0], [64.9, 68.0], [65.0, 69.0], [65.1, 69.0], [65.2, 69.0], [65.3, 69.0], [65.4, 69.0], [65.5, 69.0], [65.6, 69.0], [65.7, 69.0], [65.8, 69.0], [65.9, 69.0], [66.0, 69.0], [66.1, 69.0], [66.2, 69.0], [66.3, 69.0], [66.4, 69.0], [66.5, 69.0], [66.6, 69.0], [66.7, 69.0], [66.8, 69.0], [66.9, 69.0], [67.0, 70.0], [67.1, 70.0], [67.2, 70.0], [67.3, 70.0], [67.4, 70.0], [67.5, 70.0], [67.6, 70.0], [67.7, 70.0], [67.8, 70.0], [67.9, 70.0], [68.0, 70.0], [68.1, 70.0], [68.2, 70.0], [68.3, 70.0], [68.4, 70.0], [68.5, 70.0], [68.6, 70.0], [68.7, 70.0], [68.8, 70.0], [68.9, 70.0], [69.0, 71.0], [69.1, 71.0], [69.2, 71.0], [69.3, 71.0], [69.4, 71.0], [69.5, 71.0], [69.6, 71.0], [69.7, 71.0], [69.8, 72.0], [69.9, 72.0], [70.0, 72.0], [70.1, 72.0], [70.2, 72.0], [70.3, 72.0], [70.4, 72.0], [70.5, 72.0], [70.6, 72.0], [70.7, 72.0], [70.8, 72.0], [70.9, 72.0], [71.0, 72.0], [71.1, 72.0], [71.2, 72.0], [71.3, 72.0], [71.4, 72.0], [71.5, 72.0], [71.6, 72.0], [71.7, 72.0], [71.8, 72.0], [71.9, 72.0], [72.0, 73.0], [72.1, 73.0], [72.2, 73.0], [72.3, 73.0], [72.4, 73.0], [72.5, 73.0], [72.6, 73.0], [72.7, 73.0], [72.8, 73.0], [72.9, 73.0], [73.0, 73.0], [73.1, 73.0], [73.2, 73.0], [73.3, 73.0], [73.4, 73.0], [73.5, 74.0], [73.6, 74.0], [73.7, 74.0], [73.8, 74.0], [73.9, 74.0], [74.0, 75.0], [74.1, 75.0], [74.2, 75.0], [74.3, 75.0], [74.4, 75.0], [74.5, 75.0], [74.6, 75.0], [74.7, 75.0], [74.8, 76.0], [74.9, 76.0], [75.0, 76.0], [75.1, 76.0], [75.2, 76.0], [75.3, 76.0], [75.4, 76.0], [75.5, 76.0], [75.6, 76.0], [75.7, 76.0], [75.8, 76.0], [75.9, 76.0], [76.0, 76.0], [76.1, 76.0], [76.2, 76.0], [76.3, 76.0], [76.4, 76.0], [76.5, 78.0], [76.6, 78.0], [76.7, 78.0], [76.8, 78.0], [76.9, 78.0], [77.0, 78.0], [77.1, 78.0], [77.2, 78.0], [77.3, 78.0], [77.4, 78.0], [77.5, 78.0], [77.6, 78.0], [77.7, 78.0], [77.8, 78.0], [77.9, 78.0], [78.0, 78.0], [78.1, 78.0], [78.2, 78.0], [78.3, 79.0], [78.4, 79.0], [78.5, 79.0], [78.6, 79.0], [78.7, 79.0], [78.8, 80.0], [78.9, 80.0], [79.0, 80.0], [79.1, 80.0], [79.2, 80.0], [79.3, 82.0], [79.4, 82.0], [79.5, 82.0], [79.6, 82.0], [79.7, 82.0], [79.8, 83.0], [79.9, 83.0], [80.0, 86.0], [80.1, 86.0], [80.2, 86.0], [80.3, 86.0], [80.4, 86.0], [80.5, 86.0], [80.6, 86.0], [80.7, 86.0], [80.8, 88.0], [80.9, 88.0], [81.0, 91.0], [81.1, 91.0], [81.2, 91.0], [81.3, 92.0], [81.4, 92.0], [81.5, 92.0], [81.6, 92.0], [81.7, 92.0], [81.8, 98.0], [81.9, 98.0], [82.0, 99.0], [82.1, 99.0], [82.2, 99.0], [82.3, 99.0], [82.4, 99.0], [82.5, 100.0], [82.6, 100.0], [82.7, 100.0], [82.8, 100.0], [82.9, 100.0], [83.0, 102.0], [83.1, 102.0], [83.2, 102.0], [83.3, 103.0], [83.4, 103.0], [83.5, 103.0], [83.6, 103.0], [83.7, 103.0], [83.8, 103.0], [83.9, 103.0], [84.0, 111.0], [84.1, 111.0], [84.2, 111.0], [84.3, 112.0], [84.4, 112.0], [84.5, 114.0], [84.6, 114.0], [84.7, 114.0], [84.8, 114.0], [84.9, 114.0], [85.0, 116.0], [85.1, 116.0], [85.2, 116.0], [85.3, 117.0], [85.4, 117.0], [85.5, 117.0], [85.6, 117.0], [85.7, 117.0], [85.8, 118.0], [85.9, 118.0], [86.0, 120.0], [86.1, 120.0], [86.2, 120.0], [86.3, 122.0], [86.4, 122.0], [86.5, 123.0], [86.6, 123.0], [86.7, 123.0], [86.8, 124.0], [86.9, 124.0], [87.0, 133.0], [87.1, 133.0], [87.2, 133.0], [87.3, 139.0], [87.4, 139.0], [87.5, 141.0], [87.6, 141.0], [87.7, 141.0], [87.8, 142.0], [87.9, 142.0], [88.0, 142.0], [88.1, 142.0], [88.2, 142.0], [88.3, 150.0], [88.4, 150.0], [88.5, 156.0], [88.6, 156.0], [88.7, 156.0], [88.8, 156.0], [88.9, 156.0], [89.0, 160.0], [89.1, 160.0], [89.2, 160.0], [89.3, 160.0], [89.4, 160.0], [89.5, 165.0], [89.6, 165.0], [89.7, 165.0], [89.8, 173.0], [89.9, 173.0], [90.0, 182.0], [90.1, 182.0], [90.2, 182.0], [90.3, 211.0], [90.4, 211.0], [90.5, 212.0], [90.6, 212.0], [90.7, 212.0], [90.8, 227.0], [90.9, 227.0], [91.0, 233.0], [91.1, 233.0], [91.2, 233.0], [91.3, 235.0], [91.4, 235.0], [91.5, 243.0], [91.6, 243.0], [91.7, 243.0], [91.8, 253.0], [91.9, 253.0], [92.0, 259.0], [92.1, 259.0], [92.2, 259.0], [92.3, 294.0], [92.4, 294.0], [92.5, 302.0], [92.6, 302.0], [92.7, 302.0], [92.8, 306.0], [92.9, 306.0], [93.0, 322.0], [93.1, 322.0], [93.2, 322.0], [93.3, 330.0], [93.4, 330.0], [93.5, 335.0], [93.6, 335.0], [93.7, 335.0], [93.8, 339.0], [93.9, 339.0], [94.0, 341.0], [94.1, 341.0], [94.2, 341.0], [94.3, 353.0], [94.4, 353.0], [94.5, 356.0], [94.6, 356.0], [94.7, 356.0], [94.8, 377.0], [94.9, 377.0], [95.0, 378.0], [95.1, 378.0], [95.2, 378.0], [95.3, 388.0], [95.4, 388.0], [95.5, 399.0], [95.6, 399.0], [95.7, 399.0], [95.8, 408.0], [95.9, 408.0], [96.0, 422.0], [96.1, 422.0], [96.2, 422.0], [96.3, 422.0], [96.4, 422.0], [96.5, 436.0], [96.6, 436.0], [96.7, 436.0], [96.8, 443.0], [96.9, 443.0], [97.0, 446.0], [97.1, 446.0], [97.2, 446.0], [97.3, 450.0], [97.4, 450.0], [97.5, 474.0], [97.6, 474.0], [97.7, 474.0], [97.8, 476.0], [97.9, 476.0], [98.0, 480.0], [98.1, 480.0], [98.2, 480.0], [98.3, 511.0], [98.4, 511.0], [98.5, 530.0], [98.6, 530.0], [98.7, 530.0], [98.8, 539.0], [98.9, 539.0], [99.0, 564.0], [99.1, 564.0], [99.2, 564.0], [99.3, 565.0], [99.4, 565.0], [99.5, 568.0], [99.6, 568.0], [99.7, 568.0], [99.8, 576.0], [99.9, 576.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 330.0, "series": [{"data": [[0.0, 330.0], [300.0, 13.0], [400.0, 10.0], [200.0, 9.0], [100.0, 31.0], [500.0, 7.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 393.0, "series": [{"data": [[0.0, 393.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.8750000000000004, "minX": 1.6698030402E12, "maxY": 18.710526315789473, "series": [{"data": [[1.6698030432E12, 2.8750000000000004], [1.6698030468E12, 3.08], [1.6698030402E12, 18.710526315789473], [1.6698030438E12, 3.04], [1.6698030474E12, 3.0416666666666665], [1.6698030426E12, 3.407407407407408], [1.6698030462E12, 2.9583333333333335], [1.669803045E12, 4.7142857142857135], [1.6698030486E12, 3.0833333333333335], [1.669803042E12, 3.153846153846154], [1.6698030456E12, 4.741935483870967], [1.6698030408E12, 4.499999999999999], [1.6698030444E12, 3.7600000000000002], [1.669803048E12, 3.1249999999999996], [1.6698030414E12, 3.1599999999999997]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698030486E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 53.0, "minX": 1.0, "maxY": 564.0, "series": [{"data": [[2.0, 53.199999999999996], [3.0, 58.348547717842315], [4.0, 72.30769230769232], [5.0, 96.78571428571429], [6.0, 114.0], [7.0, 127.25], [8.0, 151.4], [9.0, 122.33333333333334], [10.0, 182.0], [11.0, 230.33333333333334], [12.0, 280.5], [13.0, 330.0], [14.0, 312.3333333333333], [15.0, 337.0], [16.0, 321.0], [1.0, 53.0], [17.0, 453.6666666666667], [18.0, 393.5], [19.0, 476.0], [20.0, 564.0], [22.0, 539.5], [23.0, 422.0], [24.0, 522.5], [25.0, 478.3333333333333], [26.0, 488.0], [30.0, 421.25]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[4.9675, 97.8724999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5320.0, "minX": 1.6698030402E12, "maxY": 46866.666666666664, "series": [{"data": [[1.6698030432E12, 29600.0], [1.6698030468E12, 30833.333333333332], [1.6698030402E12, 46866.666666666664], [1.6698030438E12, 30833.333333333332], [1.6698030474E12, 29600.0], [1.6698030426E12, 33300.0], [1.6698030462E12, 29600.0], [1.669803045E12, 34533.333333333336], [1.6698030486E12, 29600.0], [1.669803042E12, 32066.666666666668], [1.6698030456E12, 38233.333333333336], [1.6698030408E12, 37000.0], [1.6698030444E12, 30833.333333333332], [1.669803048E12, 29600.0], [1.6698030414E12, 30833.333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6698030432E12, 5320.0], [1.6698030468E12, 5541.666666666667], [1.6698030402E12, 8423.333333333334], [1.6698030438E12, 5541.666666666667], [1.6698030474E12, 5320.0], [1.6698030426E12, 5985.0], [1.6698030462E12, 5320.0], [1.669803045E12, 6206.666666666667], [1.6698030486E12, 5320.0], [1.669803042E12, 5763.333333333333], [1.6698030456E12, 6871.666666666667], [1.6698030408E12, 6650.0], [1.6698030444E12, 5541.666666666667], [1.669803048E12, 5320.0], [1.6698030414E12, 5541.666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698030486E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 55.458333333333336, "minX": 1.6698030402E12, "maxY": 387.84210526315786, "series": [{"data": [[1.6698030432E12, 58.04166666666667], [1.6698030468E12, 59.839999999999996], [1.6698030402E12, 387.84210526315786], [1.6698030438E12, 59.48], [1.6698030474E12, 57.375000000000014], [1.6698030426E12, 64.29629629629629], [1.6698030462E12, 55.458333333333336], [1.669803045E12, 86.21428571428571], [1.6698030486E12, 62.458333333333336], [1.669803042E12, 61.92307692307693], [1.6698030456E12, 85.87096774193547], [1.6698030408E12, 92.73333333333335], [1.6698030444E12, 64.67999999999999], [1.669803048E12, 60.99999999999999], [1.6698030414E12, 61.72]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698030486E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 55.41666666666667, "minX": 1.6698030402E12, "maxY": 387.31578947368416, "series": [{"data": [[1.6698030432E12, 57.91666666666667], [1.6698030468E12, 59.760000000000005], [1.6698030402E12, 387.31578947368416], [1.6698030438E12, 59.4], [1.6698030474E12, 57.375000000000014], [1.6698030426E12, 64.22222222222223], [1.6698030462E12, 55.41666666666667], [1.669803045E12, 86.10714285714286], [1.6698030486E12, 61.791666666666664], [1.669803042E12, 61.92307692307693], [1.6698030456E12, 85.77419354838707], [1.6698030408E12, 92.70000000000002], [1.6698030444E12, 64.67999999999999], [1.669803048E12, 60.91666666666664], [1.6698030414E12, 61.679999999999986]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698030486E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6698030402E12, "maxY": 16.131578947368418, "series": [{"data": [[1.6698030432E12, 1.291666666666667], [1.6698030468E12, 1.3200000000000003], [1.6698030402E12, 16.131578947368418], [1.6698030438E12, 1.3600000000000005], [1.6698030474E12, 1.1666666666666672], [1.6698030426E12, 1.4444444444444444], [1.6698030462E12, 1.3333333333333335], [1.669803045E12, 1.0], [1.6698030486E12, 1.3333333333333335], [1.669803042E12, 1.4230769230769234], [1.6698030456E12, 1.2258064516129032], [1.6698030408E12, 1.5333333333333332], [1.6698030444E12, 1.3600000000000003], [1.669803048E12, 1.0416666666666667], [1.6698030414E12, 1.2400000000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698030486E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 47.0, "minX": 1.6698030402E12, "maxY": 576.0, "series": [{"data": [[1.6698030432E12, 76.0], [1.6698030468E12, 79.0], [1.6698030402E12, 576.0], [1.6698030438E12, 72.0], [1.6698030474E12, 74.0], [1.6698030426E12, 76.0], [1.6698030462E12, 73.0], [1.669803045E12, 165.0], [1.6698030486E12, 78.0], [1.669803042E12, 74.0], [1.6698030456E12, 156.0], [1.6698030408E12, 235.0], [1.6698030444E12, 91.0], [1.669803048E12, 82.0], [1.6698030414E12, 86.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6698030432E12, 70.0], [1.6698030468E12, 78.0], [1.6698030402E12, 564.1], [1.6698030438E12, 69.4], [1.6698030474E12, 71.0], [1.6698030426E12, 76.0], [1.6698030462E12, 69.5], [1.669803045E12, 142.0], [1.6698030486E12, 76.5], [1.669803042E12, 72.3], [1.6698030456E12, 144.60000000000002], [1.6698030408E12, 171.70000000000002], [1.6698030444E12, 84.2], [1.669803048E12, 76.5], [1.6698030414E12, 79.60000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6698030432E12, 76.0], [1.6698030468E12, 79.0], [1.6698030402E12, 576.0], [1.6698030438E12, 72.0], [1.6698030474E12, 74.0], [1.6698030426E12, 76.0], [1.6698030462E12, 73.0], [1.669803045E12, 165.0], [1.6698030486E12, 78.0], [1.669803042E12, 74.0], [1.6698030456E12, 156.0], [1.6698030408E12, 235.0], [1.6698030444E12, 91.0], [1.669803048E12, 82.0], [1.6698030414E12, 86.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6698030432E12, 74.75], [1.6698030468E12, 78.7], [1.6698030402E12, 568.4], [1.6698030438E12, 71.4], [1.6698030474E12, 73.5], [1.6698030426E12, 76.0], [1.6698030462E12, 72.75], [1.669803045E12, 154.64999999999992], [1.6698030486E12, 78.0], [1.669803042E12, 73.65], [1.6698030456E12, 156.0], [1.6698030408E12, 222.35], [1.6698030444E12, 89.5], [1.669803048E12, 81.0], [1.6698030414E12, 84.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6698030432E12, 47.0], [1.6698030468E12, 47.0], [1.6698030402E12, 182.0], [1.6698030438E12, 48.0], [1.6698030474E12, 50.0], [1.6698030426E12, 51.0], [1.6698030462E12, 47.0], [1.669803045E12, 49.0], [1.6698030486E12, 51.0], [1.669803042E12, 50.0], [1.6698030456E12, 47.0], [1.6698030408E12, 50.0], [1.6698030444E12, 52.0], [1.669803048E12, 50.0], [1.6698030414E12, 49.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6698030432E12, 56.5], [1.6698030468E12, 57.0], [1.6698030402E12, 383.0], [1.6698030438E12, 60.0], [1.6698030474E12, 54.0], [1.6698030426E12, 65.0], [1.6698030462E12, 53.0], [1.669803045E12, 71.0], [1.6698030486E12, 61.5], [1.669803042E12, 62.0], [1.6698030456E12, 73.0], [1.6698030408E12, 67.0], [1.6698030444E12, 62.0], [1.669803048E12, 59.0], [1.6698030414E12, 59.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698030486E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 55.0, "minX": 6.0, "maxY": 136.0, "series": [{"data": [[41.0, 55.0], [40.0, 56.0], [42.0, 60.0], [44.0, 63.0], [6.0, 66.5], [51.0, 136.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 55.0, "minX": 6.0, "maxY": 136.0, "series": [{"data": [[41.0, 55.0], [40.0, 56.0], [42.0, 59.5], [44.0, 63.0], [6.0, 66.0], [51.0, 136.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.6698030396E12, "maxY": 50.0, "series": [{"data": [[1.6698030432E12, 40.0], [1.6698030468E12, 43.333333333333336], [1.6698030402E12, 41.666666666666664], [1.6698030438E12, 41.666666666666664], [1.6698030474E12, 40.0], [1.6698030426E12, 43.333333333333336], [1.6698030462E12, 40.0], [1.6698030396E12, 33.333333333333336], [1.669803045E12, 46.666666666666664], [1.6698030486E12, 35.0], [1.669803042E12, 43.333333333333336], [1.6698030456E12, 43.333333333333336], [1.6698030408E12, 43.333333333333336], [1.6698030444E12, 50.0], [1.669803048E12, 40.0], [1.6698030414E12, 41.666666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698030486E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.6698030402E12, "maxY": 63.333333333333336, "series": [{"data": [[1.6698030432E12, 40.0], [1.6698030468E12, 41.666666666666664], [1.6698030402E12, 63.333333333333336], [1.6698030438E12, 41.666666666666664], [1.6698030474E12, 40.0], [1.6698030426E12, 45.0], [1.6698030462E12, 40.0], [1.669803045E12, 46.666666666666664], [1.6698030486E12, 40.0], [1.669803042E12, 43.333333333333336], [1.6698030456E12, 51.666666666666664], [1.6698030408E12, 50.0], [1.6698030444E12, 41.666666666666664], [1.669803048E12, 40.0], [1.6698030414E12, 41.666666666666664]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698030486E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.6698030402E12, "maxY": 63.333333333333336, "series": [{"data": [[1.6698030432E12, 40.0], [1.6698030468E12, 41.666666666666664], [1.6698030402E12, 63.333333333333336], [1.6698030438E12, 41.666666666666664], [1.6698030474E12, 40.0], [1.6698030426E12, 45.0], [1.6698030462E12, 40.0], [1.669803045E12, 46.666666666666664], [1.6698030486E12, 40.0], [1.669803042E12, 43.333333333333336], [1.6698030456E12, 51.666666666666664], [1.6698030408E12, 50.0], [1.6698030444E12, 41.666666666666664], [1.669803048E12, 40.0], [1.6698030414E12, 41.666666666666664]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698030486E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.6698030402E12, "maxY": 63.333333333333336, "series": [{"data": [[1.6698030432E12, 40.0], [1.6698030468E12, 41.666666666666664], [1.6698030402E12, 63.333333333333336], [1.6698030438E12, 41.666666666666664], [1.6698030474E12, 40.0], [1.6698030426E12, 45.0], [1.6698030462E12, 40.0], [1.669803045E12, 46.666666666666664], [1.6698030486E12, 40.0], [1.669803042E12, 43.333333333333336], [1.6698030456E12, 51.666666666666664], [1.6698030408E12, 50.0], [1.6698030444E12, 41.666666666666664], [1.669803048E12, 40.0], [1.6698030414E12, 41.666666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698030486E12, "title": "Total Transactions Per Second"}},
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

