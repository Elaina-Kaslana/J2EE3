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
        data: {"result": {"minY": 47.0, "minX": 0.0, "maxY": 211.0, "series": [{"data": [[0.0, 47.0], [0.1, 47.0], [0.2, 47.0], [0.3, 47.0], [0.4, 47.0], [0.5, 48.0], [0.6, 48.0], [0.7, 48.0], [0.8, 48.0], [0.9, 48.0], [1.0, 48.0], [1.1, 48.0], [1.2, 48.0], [1.3, 48.0], [1.4, 48.0], [1.5, 48.0], [1.6, 48.0], [1.7, 48.0], [1.8, 48.0], [1.9, 48.0], [2.0, 48.0], [2.1, 48.0], [2.2, 48.0], [2.3, 48.0], [2.4, 48.0], [2.5, 48.0], [2.6, 48.0], [2.7, 48.0], [2.8, 48.0], [2.9, 48.0], [3.0, 48.0], [3.1, 48.0], [3.2, 48.0], [3.3, 48.0], [3.4, 48.0], [3.5, 48.0], [3.6, 48.0], [3.7, 48.0], [3.8, 48.0], [3.9, 48.0], [4.0, 48.0], [4.1, 48.0], [4.2, 48.0], [4.3, 48.0], [4.4, 48.0], [4.5, 48.0], [4.6, 48.0], [4.7, 48.0], [4.8, 48.0], [4.9, 48.0], [5.0, 49.0], [5.1, 49.0], [5.2, 49.0], [5.3, 49.0], [5.4, 49.0], [5.5, 49.0], [5.6, 49.0], [5.7, 49.0], [5.8, 49.0], [5.9, 49.0], [6.0, 49.0], [6.1, 49.0], [6.2, 49.0], [6.3, 49.0], [6.4, 49.0], [6.5, 49.0], [6.6, 49.0], [6.7, 49.0], [6.8, 49.0], [6.9, 49.0], [7.0, 49.0], [7.1, 49.0], [7.2, 49.0], [7.3, 49.0], [7.4, 49.0], [7.5, 50.0], [7.6, 50.0], [7.7, 50.0], [7.8, 50.0], [7.9, 50.0], [8.0, 50.0], [8.1, 50.0], [8.2, 50.0], [8.3, 50.0], [8.4, 50.0], [8.5, 50.0], [8.6, 50.0], [8.7, 50.0], [8.8, 50.0], [8.9, 50.0], [9.0, 50.0], [9.1, 50.0], [9.2, 50.0], [9.3, 50.0], [9.4, 50.0], [9.5, 50.0], [9.6, 50.0], [9.7, 50.0], [9.8, 50.0], [9.9, 50.0], [10.0, 50.0], [10.1, 50.0], [10.2, 50.0], [10.3, 50.0], [10.4, 50.0], [10.5, 50.0], [10.6, 50.0], [10.7, 50.0], [10.8, 50.0], [10.9, 50.0], [11.0, 51.0], [11.1, 51.0], [11.2, 51.0], [11.3, 51.0], [11.4, 51.0], [11.5, 51.0], [11.6, 51.0], [11.7, 51.0], [11.8, 51.0], [11.9, 51.0], [12.0, 51.0], [12.1, 51.0], [12.2, 51.0], [12.3, 51.0], [12.4, 51.0], [12.5, 51.0], [12.6, 51.0], [12.7, 51.0], [12.8, 51.0], [12.9, 51.0], [13.0, 51.0], [13.1, 51.0], [13.2, 51.0], [13.3, 51.0], [13.4, 51.0], [13.5, 51.0], [13.6, 51.0], [13.7, 51.0], [13.8, 51.0], [13.9, 51.0], [14.0, 51.0], [14.1, 51.0], [14.2, 51.0], [14.3, 51.0], [14.4, 51.0], [14.5, 51.0], [14.6, 51.0], [14.7, 51.0], [14.8, 51.0], [14.9, 51.0], [15.0, 51.0], [15.1, 51.0], [15.2, 51.0], [15.3, 51.0], [15.4, 51.0], [15.5, 51.0], [15.6, 51.0], [15.7, 51.0], [15.8, 51.0], [15.9, 51.0], [16.0, 51.0], [16.1, 51.0], [16.2, 51.0], [16.3, 51.0], [16.4, 51.0], [16.5, 52.0], [16.6, 52.0], [16.7, 52.0], [16.8, 52.0], [16.9, 52.0], [17.0, 52.0], [17.1, 52.0], [17.2, 52.0], [17.3, 52.0], [17.4, 52.0], [17.5, 52.0], [17.6, 52.0], [17.7, 52.0], [17.8, 52.0], [17.9, 52.0], [18.0, 52.0], [18.1, 52.0], [18.2, 52.0], [18.3, 52.0], [18.4, 52.0], [18.5, 52.0], [18.6, 52.0], [18.7, 52.0], [18.8, 52.0], [18.9, 52.0], [19.0, 52.0], [19.1, 52.0], [19.2, 52.0], [19.3, 52.0], [19.4, 52.0], [19.5, 52.0], [19.6, 52.0], [19.7, 52.0], [19.8, 52.0], [19.9, 52.0], [20.0, 53.0], [20.1, 53.0], [20.2, 53.0], [20.3, 53.0], [20.4, 53.0], [20.5, 53.0], [20.6, 53.0], [20.7, 53.0], [20.8, 53.0], [20.9, 53.0], [21.0, 53.0], [21.1, 53.0], [21.2, 53.0], [21.3, 53.0], [21.4, 53.0], [21.5, 53.0], [21.6, 53.0], [21.7, 53.0], [21.8, 53.0], [21.9, 53.0], [22.0, 54.0], [22.1, 54.0], [22.2, 54.0], [22.3, 54.0], [22.4, 54.0], [22.5, 54.0], [22.6, 54.0], [22.7, 54.0], [22.8, 54.0], [22.9, 54.0], [23.0, 54.0], [23.1, 54.0], [23.2, 54.0], [23.3, 54.0], [23.4, 54.0], [23.5, 54.0], [23.6, 54.0], [23.7, 54.0], [23.8, 54.0], [23.9, 54.0], [24.0, 54.0], [24.1, 54.0], [24.2, 54.0], [24.3, 54.0], [24.4, 54.0], [24.5, 54.0], [24.6, 54.0], [24.7, 54.0], [24.8, 54.0], [24.9, 54.0], [25.0, 54.0], [25.1, 54.0], [25.2, 54.0], [25.3, 54.0], [25.4, 54.0], [25.5, 54.0], [25.6, 54.0], [25.7, 54.0], [25.8, 54.0], [25.9, 54.0], [26.0, 54.0], [26.1, 54.0], [26.2, 54.0], [26.3, 54.0], [26.4, 54.0], [26.5, 54.0], [26.6, 54.0], [26.7, 54.0], [26.8, 54.0], [26.9, 54.0], [27.0, 55.0], [27.1, 55.0], [27.2, 55.0], [27.3, 55.0], [27.4, 55.0], [27.5, 55.0], [27.6, 55.0], [27.7, 55.0], [27.8, 55.0], [27.9, 55.0], [28.0, 55.0], [28.1, 55.0], [28.2, 55.0], [28.3, 55.0], [28.4, 55.0], [28.5, 55.0], [28.6, 55.0], [28.7, 55.0], [28.8, 55.0], [28.9, 55.0], [29.0, 55.0], [29.1, 55.0], [29.2, 55.0], [29.3, 55.0], [29.4, 55.0], [29.5, 55.0], [29.6, 55.0], [29.7, 55.0], [29.8, 55.0], [29.9, 55.0], [30.0, 55.0], [30.1, 55.0], [30.2, 55.0], [30.3, 55.0], [30.4, 55.0], [30.5, 55.0], [30.6, 55.0], [30.7, 55.0], [30.8, 55.0], [30.9, 55.0], [31.0, 55.0], [31.1, 55.0], [31.2, 55.0], [31.3, 55.0], [31.4, 55.0], [31.5, 55.0], [31.6, 55.0], [31.7, 55.0], [31.8, 55.0], [31.9, 55.0], [32.0, 55.0], [32.1, 55.0], [32.2, 55.0], [32.3, 55.0], [32.4, 55.0], [32.5, 55.0], [32.6, 55.0], [32.7, 55.0], [32.8, 55.0], [32.9, 55.0], [33.0, 55.0], [33.1, 55.0], [33.2, 55.0], [33.3, 55.0], [33.4, 55.0], [33.5, 55.0], [33.6, 55.0], [33.7, 55.0], [33.8, 55.0], [33.9, 55.0], [34.0, 55.0], [34.1, 55.0], [34.2, 55.0], [34.3, 55.0], [34.4, 55.0], [34.5, 55.0], [34.6, 55.0], [34.7, 55.0], [34.8, 55.0], [34.9, 55.0], [35.0, 55.0], [35.1, 55.0], [35.2, 55.0], [35.3, 55.0], [35.4, 55.0], [35.5, 56.0], [35.6, 56.0], [35.7, 56.0], [35.8, 56.0], [35.9, 56.0], [36.0, 56.0], [36.1, 56.0], [36.2, 56.0], [36.3, 56.0], [36.4, 56.0], [36.5, 56.0], [36.6, 56.0], [36.7, 56.0], [36.8, 56.0], [36.9, 56.0], [37.0, 56.0], [37.1, 56.0], [37.2, 56.0], [37.3, 56.0], [37.4, 56.0], [37.5, 56.0], [37.6, 56.0], [37.7, 56.0], [37.8, 56.0], [37.9, 56.0], [38.0, 56.0], [38.1, 56.0], [38.2, 56.0], [38.3, 56.0], [38.4, 56.0], [38.5, 56.0], [38.6, 56.0], [38.7, 56.0], [38.8, 56.0], [38.9, 56.0], [39.0, 56.0], [39.1, 56.0], [39.2, 56.0], [39.3, 56.0], [39.4, 56.0], [39.5, 56.0], [39.6, 56.0], [39.7, 56.0], [39.8, 56.0], [39.9, 56.0], [40.0, 56.0], [40.1, 56.0], [40.2, 56.0], [40.3, 56.0], [40.4, 56.0], [40.5, 56.0], [40.6, 56.0], [40.7, 56.0], [40.8, 56.0], [40.9, 56.0], [41.0, 56.0], [41.1, 56.0], [41.2, 56.0], [41.3, 56.0], [41.4, 56.0], [41.5, 56.0], [41.6, 56.0], [41.7, 56.0], [41.8, 56.0], [41.9, 56.0], [42.0, 56.0], [42.1, 56.0], [42.2, 56.0], [42.3, 56.0], [42.4, 56.0], [42.5, 56.0], [42.6, 56.0], [42.7, 56.0], [42.8, 56.0], [42.9, 56.0], [43.0, 56.0], [43.1, 56.0], [43.2, 56.0], [43.3, 56.0], [43.4, 56.0], [43.5, 57.0], [43.6, 57.0], [43.7, 57.0], [43.8, 57.0], [43.9, 57.0], [44.0, 57.0], [44.1, 57.0], [44.2, 57.0], [44.3, 57.0], [44.4, 57.0], [44.5, 57.0], [44.6, 57.0], [44.7, 57.0], [44.8, 57.0], [44.9, 57.0], [45.0, 57.0], [45.1, 57.0], [45.2, 57.0], [45.3, 57.0], [45.4, 57.0], [45.5, 57.0], [45.6, 57.0], [45.7, 57.0], [45.8, 57.0], [45.9, 57.0], [46.0, 57.0], [46.1, 57.0], [46.2, 57.0], [46.3, 57.0], [46.4, 57.0], [46.5, 57.0], [46.6, 57.0], [46.7, 57.0], [46.8, 57.0], [46.9, 57.0], [47.0, 57.0], [47.1, 57.0], [47.2, 57.0], [47.3, 57.0], [47.4, 57.0], [47.5, 57.0], [47.6, 57.0], [47.7, 57.0], [47.8, 57.0], [47.9, 57.0], [48.0, 57.0], [48.1, 57.0], [48.2, 57.0], [48.3, 57.0], [48.4, 57.0], [48.5, 57.0], [48.6, 57.0], [48.7, 57.0], [48.8, 57.0], [48.9, 57.0], [49.0, 57.0], [49.1, 57.0], [49.2, 57.0], [49.3, 57.0], [49.4, 57.0], [49.5, 57.0], [49.6, 57.0], [49.7, 57.0], [49.8, 57.0], [49.9, 57.0], [50.0, 57.0], [50.1, 57.0], [50.2, 57.0], [50.3, 57.0], [50.4, 57.0], [50.5, 57.0], [50.6, 57.0], [50.7, 57.0], [50.8, 57.0], [50.9, 57.0], [51.0, 57.0], [51.1, 57.0], [51.2, 57.0], [51.3, 57.0], [51.4, 57.0], [51.5, 58.0], [51.6, 58.0], [51.7, 58.0], [51.8, 58.0], [51.9, 58.0], [52.0, 58.0], [52.1, 58.0], [52.2, 58.0], [52.3, 58.0], [52.4, 58.0], [52.5, 58.0], [52.6, 58.0], [52.7, 58.0], [52.8, 58.0], [52.9, 58.0], [53.0, 58.0], [53.1, 58.0], [53.2, 58.0], [53.3, 58.0], [53.4, 58.0], [53.5, 58.0], [53.6, 58.0], [53.7, 58.0], [53.8, 58.0], [53.9, 58.0], [54.0, 58.0], [54.1, 58.0], [54.2, 58.0], [54.3, 58.0], [54.4, 58.0], [54.5, 58.0], [54.6, 58.0], [54.7, 58.0], [54.8, 58.0], [54.9, 58.0], [55.0, 58.0], [55.1, 58.0], [55.2, 58.0], [55.3, 58.0], [55.4, 58.0], [55.5, 58.0], [55.6, 58.0], [55.7, 58.0], [55.8, 58.0], [55.9, 58.0], [56.0, 58.0], [56.1, 58.0], [56.2, 58.0], [56.3, 58.0], [56.4, 58.0], [56.5, 58.0], [56.6, 58.0], [56.7, 58.0], [56.8, 58.0], [56.9, 58.0], [57.0, 58.0], [57.1, 58.0], [57.2, 58.0], [57.3, 58.0], [57.4, 58.0], [57.5, 59.0], [57.6, 59.0], [57.7, 59.0], [57.8, 59.0], [57.9, 59.0], [58.0, 59.0], [58.1, 59.0], [58.2, 59.0], [58.3, 59.0], [58.4, 59.0], [58.5, 59.0], [58.6, 59.0], [58.7, 59.0], [58.8, 59.0], [58.9, 59.0], [59.0, 59.0], [59.1, 59.0], [59.2, 59.0], [59.3, 59.0], [59.4, 59.0], [59.5, 59.0], [59.6, 59.0], [59.7, 59.0], [59.8, 59.0], [59.9, 59.0], [60.0, 59.0], [60.1, 59.0], [60.2, 59.0], [60.3, 59.0], [60.4, 59.0], [60.5, 59.0], [60.6, 59.0], [60.7, 59.0], [60.8, 59.0], [60.9, 59.0], [61.0, 59.0], [61.1, 59.0], [61.2, 59.0], [61.3, 59.0], [61.4, 59.0], [61.5, 59.0], [61.6, 59.0], [61.7, 59.0], [61.8, 59.0], [61.9, 59.0], [62.0, 59.0], [62.1, 59.0], [62.2, 59.0], [62.3, 59.0], [62.4, 59.0], [62.5, 59.0], [62.6, 59.0], [62.7, 59.0], [62.8, 59.0], [62.9, 59.0], [63.0, 59.0], [63.1, 59.0], [63.2, 59.0], [63.3, 59.0], [63.4, 59.0], [63.5, 60.0], [63.6, 60.0], [63.7, 60.0], [63.8, 60.0], [63.9, 60.0], [64.0, 60.0], [64.1, 60.0], [64.2, 60.0], [64.3, 60.0], [64.4, 60.0], [64.5, 60.0], [64.6, 60.0], [64.7, 60.0], [64.8, 60.0], [64.9, 60.0], [65.0, 60.0], [65.1, 60.0], [65.2, 60.0], [65.3, 60.0], [65.4, 60.0], [65.5, 60.0], [65.6, 60.0], [65.7, 60.0], [65.8, 60.0], [65.9, 60.0], [66.0, 60.0], [66.1, 60.0], [66.2, 60.0], [66.3, 60.0], [66.4, 60.0], [66.5, 60.0], [66.6, 60.0], [66.7, 60.0], [66.8, 60.0], [66.9, 60.0], [67.0, 60.0], [67.1, 60.0], [67.2, 60.0], [67.3, 60.0], [67.4, 60.0], [67.5, 60.0], [67.6, 60.0], [67.7, 60.0], [67.8, 60.0], [67.9, 60.0], [68.0, 60.0], [68.1, 60.0], [68.2, 60.0], [68.3, 60.0], [68.4, 60.0], [68.5, 61.0], [68.6, 61.0], [68.7, 61.0], [68.8, 61.0], [68.9, 61.0], [69.0, 61.0], [69.1, 61.0], [69.2, 61.0], [69.3, 61.0], [69.4, 61.0], [69.5, 61.0], [69.6, 61.0], [69.7, 61.0], [69.8, 61.0], [69.9, 61.0], [70.0, 61.0], [70.1, 61.0], [70.2, 61.0], [70.3, 61.0], [70.4, 61.0], [70.5, 61.0], [70.6, 61.0], [70.7, 61.0], [70.8, 61.0], [70.9, 61.0], [71.0, 61.0], [71.1, 61.0], [71.2, 61.0], [71.3, 61.0], [71.4, 61.0], [71.5, 61.0], [71.6, 61.0], [71.7, 61.0], [71.8, 61.0], [71.9, 61.0], [72.0, 61.0], [72.1, 61.0], [72.2, 61.0], [72.3, 61.0], [72.4, 61.0], [72.5, 61.0], [72.6, 61.0], [72.7, 61.0], [72.8, 61.0], [72.9, 61.0], [73.0, 61.0], [73.1, 61.0], [73.2, 61.0], [73.3, 61.0], [73.4, 61.0], [73.5, 62.0], [73.6, 62.0], [73.7, 62.0], [73.8, 62.0], [73.9, 62.0], [74.0, 62.0], [74.1, 62.0], [74.2, 62.0], [74.3, 62.0], [74.4, 62.0], [74.5, 62.0], [74.6, 62.0], [74.7, 62.0], [74.8, 62.0], [74.9, 62.0], [75.0, 62.0], [75.1, 62.0], [75.2, 62.0], [75.3, 62.0], [75.4, 62.0], [75.5, 63.0], [75.6, 63.0], [75.7, 63.0], [75.8, 63.0], [75.9, 63.0], [76.0, 63.0], [76.1, 63.0], [76.2, 63.0], [76.3, 63.0], [76.4, 63.0], [76.5, 64.0], [76.6, 64.0], [76.7, 64.0], [76.8, 64.0], [76.9, 64.0], [77.0, 64.0], [77.1, 64.0], [77.2, 64.0], [77.3, 64.0], [77.4, 64.0], [77.5, 64.0], [77.6, 64.0], [77.7, 64.0], [77.8, 64.0], [77.9, 64.0], [78.0, 64.0], [78.1, 64.0], [78.2, 64.0], [78.3, 64.0], [78.4, 64.0], [78.5, 64.0], [78.6, 64.0], [78.7, 64.0], [78.8, 64.0], [78.9, 64.0], [79.0, 64.0], [79.1, 64.0], [79.2, 64.0], [79.3, 64.0], [79.4, 64.0], [79.5, 64.0], [79.6, 64.0], [79.7, 64.0], [79.8, 64.0], [79.9, 64.0], [80.0, 65.0], [80.1, 65.0], [80.2, 65.0], [80.3, 65.0], [80.4, 65.0], [80.5, 65.0], [80.6, 65.0], [80.7, 65.0], [80.8, 65.0], [80.9, 65.0], [81.0, 65.0], [81.1, 65.0], [81.2, 65.0], [81.3, 65.0], [81.4, 65.0], [81.5, 65.0], [81.6, 65.0], [81.7, 65.0], [81.8, 65.0], [81.9, 65.0], [82.0, 65.0], [82.1, 65.0], [82.2, 65.0], [82.3, 65.0], [82.4, 65.0], [82.5, 65.0], [82.6, 65.0], [82.7, 65.0], [82.8, 65.0], [82.9, 65.0], [83.0, 65.0], [83.1, 65.0], [83.2, 65.0], [83.3, 65.0], [83.4, 65.0], [83.5, 66.0], [83.6, 66.0], [83.7, 66.0], [83.8, 66.0], [83.9, 66.0], [84.0, 66.0], [84.1, 66.0], [84.2, 66.0], [84.3, 66.0], [84.4, 66.0], [84.5, 66.0], [84.6, 66.0], [84.7, 66.0], [84.8, 66.0], [84.9, 66.0], [85.0, 66.0], [85.1, 66.0], [85.2, 66.0], [85.3, 66.0], [85.4, 66.0], [85.5, 66.0], [85.6, 66.0], [85.7, 66.0], [85.8, 66.0], [85.9, 66.0], [86.0, 67.0], [86.1, 67.0], [86.2, 67.0], [86.3, 67.0], [86.4, 67.0], [86.5, 67.0], [86.6, 67.0], [86.7, 67.0], [86.8, 67.0], [86.9, 67.0], [87.0, 67.0], [87.1, 67.0], [87.2, 67.0], [87.3, 67.0], [87.4, 67.0], [87.5, 67.0], [87.6, 67.0], [87.7, 67.0], [87.8, 67.0], [87.9, 67.0], [88.0, 68.0], [88.1, 68.0], [88.2, 68.0], [88.3, 68.0], [88.4, 68.0], [88.5, 68.0], [88.6, 68.0], [88.7, 68.0], [88.8, 68.0], [88.9, 68.0], [89.0, 69.0], [89.1, 69.0], [89.2, 69.0], [89.3, 69.0], [89.4, 69.0], [89.5, 69.0], [89.6, 69.0], [89.7, 69.0], [89.8, 69.0], [89.9, 69.0], [90.0, 69.0], [90.1, 69.0], [90.2, 69.0], [90.3, 69.0], [90.4, 69.0], [90.5, 70.0], [90.6, 70.0], [90.7, 70.0], [90.8, 70.0], [90.9, 70.0], [91.0, 70.0], [91.1, 70.0], [91.2, 70.0], [91.3, 70.0], [91.4, 70.0], [91.5, 72.0], [91.6, 72.0], [91.7, 72.0], [91.8, 72.0], [91.9, 72.0], [92.0, 73.0], [92.1, 73.0], [92.2, 73.0], [92.3, 73.0], [92.4, 73.0], [92.5, 73.0], [92.6, 73.0], [92.7, 73.0], [92.8, 73.0], [92.9, 73.0], [93.0, 73.0], [93.1, 73.0], [93.2, 73.0], [93.3, 73.0], [93.4, 73.0], [93.5, 73.0], [93.6, 73.0], [93.7, 73.0], [93.8, 73.0], [93.9, 73.0], [94.0, 74.0], [94.1, 74.0], [94.2, 74.0], [94.3, 74.0], [94.4, 74.0], [94.5, 77.0], [94.6, 77.0], [94.7, 77.0], [94.8, 77.0], [94.9, 77.0], [95.0, 79.0], [95.1, 79.0], [95.2, 79.0], [95.3, 79.0], [95.4, 79.0], [95.5, 81.0], [95.6, 81.0], [95.7, 81.0], [95.8, 81.0], [95.9, 81.0], [96.0, 81.0], [96.1, 81.0], [96.2, 81.0], [96.3, 81.0], [96.4, 81.0], [96.5, 107.0], [96.6, 107.0], [96.7, 107.0], [96.8, 107.0], [96.9, 107.0], [97.0, 139.0], [97.1, 139.0], [97.2, 139.0], [97.3, 139.0], [97.4, 139.0], [97.5, 187.0], [97.6, 187.0], [97.7, 187.0], [97.8, 187.0], [97.9, 187.0], [98.0, 211.0], [98.1, 211.0], [98.2, 211.0], [98.3, 211.0], [98.4, 211.0], [98.5, 211.0], [98.6, 211.0], [98.7, 211.0], [98.8, 211.0], [98.9, 211.0], [99.0, 211.0], [99.1, 211.0], [99.2, 211.0], [99.3, 211.0], [99.4, 211.0], [99.5, 211.0], [99.6, 211.0], [99.7, 211.0], [99.8, 211.0], [99.9, 211.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 193.0, "series": [{"data": [[0.0, 193.0], [100.0, 3.0], [200.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 200.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 200.0, "series": [{"data": [[0.0, 200.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5454545454545456, "minX": 1.6698232848E12, "maxY": 4.0, "series": [{"data": [[1.6698232926E12, 1.75], [1.669823289E12, 1.8333333333333333], [1.6698232854E12, 1.8333333333333333], [1.669823286E12, 1.5833333333333335], [1.6698232914E12, 1.923076923076923], [1.669823292E12, 1.666666666666667], [1.6698232884E12, 1.833333333333333], [1.6698232848E12, 4.0], [1.6698232908E12, 1.9166666666666665], [1.6698232872E12, 1.9166666666666665], [1.6698232878E12, 1.7692307692307692], [1.6698232932E12, 1.7692307692307692], [1.6698232896E12, 1.8333333333333333], [1.6698232938E12, 1.5454545454545456], [1.6698232902E12, 1.666666666666667], [1.6698232866E12, 1.7692307692307692]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698232938E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 54.36363636363637, "minX": 1.0, "maxY": 195.0, "series": [{"data": [[8.0, 195.0], [2.0, 59.26174496644295], [1.0, 54.36363636363637], [3.0, 107.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.9650000000000025, 62.49500000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2383.3333333333335, "minX": 1.6698232848E12, "maxY": 20966.666666666668, "series": [{"data": [[1.6698232926E12, 14800.0], [1.669823289E12, 14800.0], [1.6698232854E12, 14800.0], [1.669823286E12, 14800.0], [1.6698232914E12, 16033.333333333334], [1.669823292E12, 14800.0], [1.6698232884E12, 14800.0], [1.6698232848E12, 20966.666666666668], [1.6698232908E12, 14800.0], [1.6698232872E12, 14800.0], [1.6698232878E12, 16033.333333333334], [1.6698232932E12, 16033.333333333334], [1.6698232896E12, 14800.0], [1.6698232938E12, 13566.666666666666], [1.6698232902E12, 14800.0], [1.6698232866E12, 16033.333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6698232926E12, 2600.0], [1.669823289E12, 2600.0], [1.6698232854E12, 2600.0], [1.669823286E12, 2600.0], [1.6698232914E12, 2816.6666666666665], [1.669823292E12, 2600.0], [1.6698232884E12, 2600.0], [1.6698232848E12, 3683.3333333333335], [1.6698232908E12, 2600.0], [1.6698232872E12, 2600.0], [1.6698232878E12, 2816.6666666666665], [1.6698232932E12, 2816.6666666666665], [1.6698232896E12, 2600.0], [1.6698232938E12, 2383.3333333333335], [1.6698232902E12, 2600.0], [1.6698232866E12, 2816.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698232938E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 55.0, "minX": 1.6698232848E12, "maxY": 108.70588235294116, "series": [{"data": [[1.6698232926E12, 59.08333333333334], [1.669823289E12, 60.333333333333336], [1.6698232854E12, 56.0], [1.669823286E12, 55.833333333333336], [1.6698232914E12, 55.0], [1.669823292E12, 58.75], [1.6698232884E12, 59.75], [1.6698232848E12, 108.70588235294116], [1.6698232908E12, 57.833333333333336], [1.6698232872E12, 59.83333333333333], [1.6698232878E12, 59.84615384615385], [1.6698232932E12, 57.153846153846146], [1.6698232896E12, 60.833333333333336], [1.6698232938E12, 58.63636363636364], [1.6698232902E12, 55.916666666666664], [1.6698232866E12, 58.46153846153847]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698232938E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 54.92307692307692, "minX": 1.6698232848E12, "maxY": 106.23529411764707, "series": [{"data": [[1.6698232926E12, 59.08333333333334], [1.669823289E12, 60.333333333333336], [1.6698232854E12, 56.0], [1.669823286E12, 55.666666666666664], [1.6698232914E12, 54.92307692307692], [1.669823292E12, 58.666666666666664], [1.6698232884E12, 59.66666666666667], [1.6698232848E12, 106.23529411764707], [1.6698232908E12, 57.833333333333336], [1.6698232872E12, 59.583333333333336], [1.6698232878E12, 59.84615384615385], [1.6698232932E12, 57.07692307692308], [1.6698232896E12, 60.833333333333336], [1.6698232938E12, 58.54545454545454], [1.6698232902E12, 55.666666666666664], [1.6698232866E12, 58.15384615384615]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698232938E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6698232848E12, "maxY": 11.352941176470587, "series": [{"data": [[1.6698232926E12, 1.5000000000000002], [1.669823289E12, 1.0833333333333333], [1.6698232854E12, 1.0833333333333335], [1.669823286E12, 1.25], [1.6698232914E12, 1.153846153846154], [1.669823292E12, 1.0833333333333335], [1.6698232884E12, 2.0000000000000004], [1.6698232848E12, 11.352941176470587], [1.6698232908E12, 1.0833333333333335], [1.6698232872E12, 1.0], [1.6698232878E12, 1.3846153846153846], [1.6698232932E12, 1.0], [1.6698232896E12, 1.0], [1.6698232938E12, 1.0], [1.6698232902E12, 1.1666666666666667], [1.6698232866E12, 1.2307692307692308]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698232938E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 47.0, "minX": 1.6698232848E12, "maxY": 211.0, "series": [{"data": [[1.6698232926E12, 65.0], [1.669823289E12, 73.0], [1.6698232854E12, 72.0], [1.669823286E12, 68.0], [1.6698232914E12, 61.0], [1.669823292E12, 70.0], [1.6698232884E12, 81.0], [1.6698232848E12, 211.0], [1.6698232908E12, 68.0], [1.6698232872E12, 70.0], [1.6698232878E12, 79.0], [1.6698232932E12, 73.0], [1.6698232896E12, 81.0], [1.6698232938E12, 67.0], [1.6698232902E12, 69.0], [1.6698232866E12, 65.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6698232926E12, 64.4], [1.669823289E12, 70.60000000000001], [1.6698232854E12, 69.60000000000001], [1.669823286E12, 65.30000000000001], [1.6698232914E12, 60.2], [1.669823292E12, 69.10000000000001], [1.6698232884E12, 78.9], [1.6698232848E12, 211.0], [1.6698232908E12, 66.5], [1.6698232872E12, 68.80000000000001], [1.6698232878E12, 76.6], [1.6698232932E12, 69.39999999999999], [1.6698232896E12, 78.60000000000001], [1.6698232938E12, 66.8], [1.6698232902E12, 67.5], [1.6698232866E12, 65.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6698232926E12, 65.0], [1.669823289E12, 73.0], [1.6698232854E12, 72.0], [1.669823286E12, 68.0], [1.6698232914E12, 61.0], [1.669823292E12, 70.0], [1.6698232884E12, 81.0], [1.6698232848E12, 211.0], [1.6698232908E12, 68.0], [1.6698232872E12, 70.0], [1.6698232878E12, 79.0], [1.6698232932E12, 73.0], [1.6698232896E12, 81.0], [1.6698232938E12, 67.0], [1.6698232902E12, 69.0], [1.6698232866E12, 65.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6698232926E12, 65.0], [1.669823289E12, 73.0], [1.6698232854E12, 72.0], [1.669823286E12, 68.0], [1.6698232914E12, 61.0], [1.669823292E12, 70.0], [1.6698232884E12, 81.0], [1.6698232848E12, 211.0], [1.6698232908E12, 68.0], [1.6698232872E12, 70.0], [1.6698232878E12, 79.0], [1.6698232932E12, 73.0], [1.6698232896E12, 81.0], [1.6698232938E12, 67.0], [1.6698232902E12, 69.0], [1.6698232866E12, 65.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6698232926E12, 55.0], [1.669823289E12, 56.0], [1.6698232854E12, 48.0], [1.669823286E12, 49.0], [1.6698232914E12, 50.0], [1.669823292E12, 48.0], [1.6698232884E12, 48.0], [1.6698232848E12, 48.0], [1.6698232908E12, 50.0], [1.6698232872E12, 52.0], [1.6698232878E12, 48.0], [1.6698232932E12, 48.0], [1.6698232896E12, 49.0], [1.6698232938E12, 51.0], [1.6698232902E12, 49.0], [1.6698232866E12, 47.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6698232926E12, 59.0], [1.669823289E12, 59.5], [1.6698232854E12, 55.5], [1.669823286E12, 55.5], [1.6698232914E12, 54.0], [1.669823292E12, 59.5], [1.6698232884E12, 56.5], [1.6698232848E12, 67.0], [1.6698232908E12, 57.5], [1.6698232872E12, 58.5], [1.6698232878E12, 57.0], [1.6698232932E12, 55.0], [1.6698232896E12, 57.0], [1.6698232938E12, 58.0], [1.6698232902E12, 55.0], [1.6698232866E12, 59.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698232938E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 55.0, "minX": 7.0, "maxY": 199.0, "series": [{"data": [[8.0, 199.0], [20.0, 57.0], [21.0, 55.0], [22.0, 60.5], [7.0, 58.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 55.0, "minX": 7.0, "maxY": 192.0, "series": [{"data": [[8.0, 192.0], [20.0, 57.0], [21.0, 55.0], [22.0, 60.5], [7.0, 58.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.6698232842E12, "maxY": 21.666666666666668, "series": [{"data": [[1.6698232926E12, 21.666666666666668], [1.669823289E12, 20.0], [1.6698232854E12, 21.666666666666668], [1.669823286E12, 20.0], [1.6698232914E12, 21.666666666666668], [1.669823292E12, 20.0], [1.6698232884E12, 20.0], [1.6698232848E12, 20.0], [1.6698232908E12, 20.0], [1.6698232872E12, 20.0], [1.6698232878E12, 21.666666666666668], [1.6698232842E12, 10.0], [1.6698232932E12, 20.0], [1.6698232896E12, 21.666666666666668], [1.6698232938E12, 16.666666666666668], [1.6698232902E12, 18.333333333333332], [1.6698232866E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698232938E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 18.333333333333332, "minX": 1.6698232848E12, "maxY": 28.333333333333332, "series": [{"data": [[1.6698232926E12, 20.0], [1.669823289E12, 20.0], [1.6698232854E12, 20.0], [1.669823286E12, 20.0], [1.6698232914E12, 21.666666666666668], [1.669823292E12, 20.0], [1.6698232884E12, 20.0], [1.6698232848E12, 28.333333333333332], [1.6698232908E12, 20.0], [1.6698232872E12, 20.0], [1.6698232878E12, 21.666666666666668], [1.6698232932E12, 21.666666666666668], [1.6698232896E12, 20.0], [1.6698232938E12, 18.333333333333332], [1.6698232902E12, 20.0], [1.6698232866E12, 21.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.6698232938E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 18.333333333333332, "minX": 1.6698232848E12, "maxY": 28.333333333333332, "series": [{"data": [[1.6698232926E12, 20.0], [1.669823289E12, 20.0], [1.6698232854E12, 20.0], [1.669823286E12, 20.0], [1.6698232914E12, 21.666666666666668], [1.669823292E12, 20.0], [1.6698232884E12, 20.0], [1.6698232848E12, 28.333333333333332], [1.6698232908E12, 20.0], [1.6698232872E12, 20.0], [1.6698232878E12, 21.666666666666668], [1.6698232932E12, 21.666666666666668], [1.6698232896E12, 20.0], [1.6698232938E12, 18.333333333333332], [1.6698232902E12, 20.0], [1.6698232866E12, 21.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698232938E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 18.333333333333332, "minX": 1.6698232848E12, "maxY": 28.333333333333332, "series": [{"data": [[1.6698232926E12, 20.0], [1.669823289E12, 20.0], [1.6698232854E12, 20.0], [1.669823286E12, 20.0], [1.6698232914E12, 21.666666666666668], [1.669823292E12, 20.0], [1.6698232884E12, 20.0], [1.6698232848E12, 28.333333333333332], [1.6698232908E12, 20.0], [1.6698232872E12, 20.0], [1.6698232878E12, 21.666666666666668], [1.6698232932E12, 21.666666666666668], [1.6698232896E12, 20.0], [1.6698232938E12, 18.333333333333332], [1.6698232902E12, 20.0], [1.6698232866E12, 21.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.6698232938E12, "title": "Total Transactions Per Second"}},
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

