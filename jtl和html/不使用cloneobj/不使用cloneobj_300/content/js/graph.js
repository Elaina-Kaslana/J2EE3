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
        data: {"result": {"minY": 46.0, "minX": 0.0, "maxY": 393.0, "series": [{"data": [[0.0, 46.0], [0.1, 46.0], [0.2, 46.0], [0.3, 46.0], [0.4, 47.0], [0.5, 47.0], [0.6, 47.0], [0.7, 47.0], [0.8, 47.0], [0.9, 47.0], [1.0, 47.0], [1.1, 47.0], [1.2, 47.0], [1.3, 47.0], [1.4, 47.0], [1.5, 47.0], [1.6, 47.0], [1.7, 47.0], [1.8, 47.0], [1.9, 47.0], [2.0, 47.0], [2.1, 47.0], [2.2, 47.0], [2.3, 47.0], [2.4, 47.0], [2.5, 47.0], [2.6, 47.0], [2.7, 48.0], [2.8, 48.0], [2.9, 48.0], [3.0, 48.0], [3.1, 48.0], [3.2, 48.0], [3.3, 48.0], [3.4, 48.0], [3.5, 48.0], [3.6, 48.0], [3.7, 48.0], [3.8, 48.0], [3.9, 48.0], [4.0, 49.0], [4.1, 49.0], [4.2, 49.0], [4.3, 49.0], [4.4, 49.0], [4.5, 49.0], [4.6, 49.0], [4.7, 49.0], [4.8, 49.0], [4.9, 49.0], [5.0, 49.0], [5.1, 49.0], [5.2, 49.0], [5.3, 49.0], [5.4, 49.0], [5.5, 49.0], [5.6, 49.0], [5.7, 49.0], [5.8, 49.0], [5.9, 49.0], [6.0, 49.0], [6.1, 49.0], [6.2, 49.0], [6.3, 49.0], [6.4, 49.0], [6.5, 49.0], [6.6, 49.0], [6.7, 49.0], [6.8, 49.0], [6.9, 49.0], [7.0, 49.0], [7.1, 49.0], [7.2, 49.0], [7.3, 49.0], [7.4, 49.0], [7.5, 49.0], [7.6, 49.0], [7.7, 49.0], [7.8, 49.0], [7.9, 49.0], [8.0, 50.0], [8.1, 50.0], [8.2, 50.0], [8.3, 50.0], [8.4, 50.0], [8.5, 50.0], [8.6, 50.0], [8.7, 50.0], [8.8, 50.0], [8.9, 50.0], [9.0, 50.0], [9.1, 50.0], [9.2, 50.0], [9.3, 50.0], [9.4, 50.0], [9.5, 50.0], [9.6, 50.0], [9.7, 50.0], [9.8, 50.0], [9.9, 50.0], [10.0, 50.0], [10.1, 50.0], [10.2, 50.0], [10.3, 50.0], [10.4, 50.0], [10.5, 50.0], [10.6, 50.0], [10.7, 50.0], [10.8, 50.0], [10.9, 50.0], [11.0, 50.0], [11.1, 50.0], [11.2, 50.0], [11.3, 50.0], [11.4, 50.0], [11.5, 50.0], [11.6, 50.0], [11.7, 50.0], [11.8, 50.0], [11.9, 50.0], [12.0, 50.0], [12.1, 50.0], [12.2, 50.0], [12.3, 50.0], [12.4, 51.0], [12.5, 51.0], [12.6, 51.0], [12.7, 51.0], [12.8, 51.0], [12.9, 51.0], [13.0, 51.0], [13.1, 51.0], [13.2, 51.0], [13.3, 51.0], [13.4, 51.0], [13.5, 51.0], [13.6, 51.0], [13.7, 51.0], [13.8, 51.0], [13.9, 51.0], [14.0, 51.0], [14.1, 51.0], [14.2, 51.0], [14.3, 51.0], [14.4, 51.0], [14.5, 51.0], [14.6, 51.0], [14.7, 51.0], [14.8, 51.0], [14.9, 51.0], [15.0, 51.0], [15.1, 51.0], [15.2, 51.0], [15.3, 51.0], [15.4, 51.0], [15.5, 51.0], [15.6, 51.0], [15.7, 51.0], [15.8, 51.0], [15.9, 51.0], [16.0, 51.0], [16.1, 51.0], [16.2, 51.0], [16.3, 51.0], [16.4, 51.0], [16.5, 51.0], [16.6, 51.0], [16.7, 51.0], [16.8, 51.0], [16.9, 51.0], [17.0, 51.0], [17.1, 51.0], [17.2, 51.0], [17.3, 51.0], [17.4, 51.0], [17.5, 51.0], [17.6, 51.0], [17.7, 51.0], [17.8, 51.0], [17.9, 51.0], [18.0, 52.0], [18.1, 52.0], [18.2, 52.0], [18.3, 52.0], [18.4, 52.0], [18.5, 52.0], [18.6, 52.0], [18.7, 52.0], [18.8, 52.0], [18.9, 52.0], [19.0, 52.0], [19.1, 52.0], [19.2, 52.0], [19.3, 52.0], [19.4, 52.0], [19.5, 52.0], [19.6, 52.0], [19.7, 52.0], [19.8, 52.0], [19.9, 52.0], [20.0, 52.0], [20.1, 52.0], [20.2, 52.0], [20.3, 52.0], [20.4, 52.0], [20.5, 52.0], [20.6, 52.0], [20.7, 52.0], [20.8, 52.0], [20.9, 52.0], [21.0, 52.0], [21.1, 52.0], [21.2, 52.0], [21.3, 52.0], [21.4, 52.0], [21.5, 52.0], [21.6, 52.0], [21.7, 52.0], [21.8, 52.0], [21.9, 52.0], [22.0, 52.0], [22.1, 52.0], [22.2, 52.0], [22.3, 52.0], [22.4, 52.0], [22.5, 52.0], [22.6, 52.0], [22.7, 52.0], [22.8, 52.0], [22.9, 52.0], [23.0, 52.0], [23.1, 52.0], [23.2, 52.0], [23.3, 52.0], [23.4, 52.0], [23.5, 52.0], [23.6, 52.0], [23.7, 52.0], [23.8, 52.0], [23.9, 52.0], [24.0, 53.0], [24.1, 53.0], [24.2, 53.0], [24.3, 53.0], [24.4, 53.0], [24.5, 53.0], [24.6, 53.0], [24.7, 53.0], [24.8, 53.0], [24.9, 53.0], [25.0, 53.0], [25.1, 53.0], [25.2, 53.0], [25.3, 53.0], [25.4, 53.0], [25.5, 53.0], [25.6, 53.0], [25.7, 53.0], [25.8, 53.0], [25.9, 53.0], [26.0, 53.0], [26.1, 53.0], [26.2, 53.0], [26.3, 53.0], [26.4, 53.0], [26.5, 53.0], [26.6, 53.0], [26.7, 53.0], [26.8, 53.0], [26.9, 53.0], [27.0, 53.0], [27.1, 53.0], [27.2, 53.0], [27.3, 53.0], [27.4, 53.0], [27.5, 53.0], [27.6, 53.0], [27.7, 53.0], [27.8, 53.0], [27.9, 53.0], [28.0, 53.0], [28.1, 53.0], [28.2, 53.0], [28.3, 53.0], [28.4, 53.0], [28.5, 53.0], [28.6, 53.0], [28.7, 54.0], [28.8, 54.0], [28.9, 54.0], [29.0, 54.0], [29.1, 54.0], [29.2, 54.0], [29.3, 54.0], [29.4, 54.0], [29.5, 54.0], [29.6, 54.0], [29.7, 54.0], [29.8, 54.0], [29.9, 54.0], [30.0, 54.0], [30.1, 54.0], [30.2, 54.0], [30.3, 54.0], [30.4, 54.0], [30.5, 54.0], [30.6, 54.0], [30.7, 54.0], [30.8, 54.0], [30.9, 54.0], [31.0, 54.0], [31.1, 54.0], [31.2, 54.0], [31.3, 54.0], [31.4, 54.0], [31.5, 54.0], [31.6, 54.0], [31.7, 54.0], [31.8, 54.0], [31.9, 54.0], [32.0, 54.0], [32.1, 54.0], [32.2, 54.0], [32.3, 54.0], [32.4, 54.0], [32.5, 54.0], [32.6, 54.0], [32.7, 54.0], [32.8, 54.0], [32.9, 54.0], [33.0, 54.0], [33.1, 54.0], [33.2, 54.0], [33.3, 54.0], [33.4, 54.0], [33.5, 54.0], [33.6, 54.0], [33.7, 54.0], [33.8, 54.0], [33.9, 54.0], [34.0, 54.0], [34.1, 54.0], [34.2, 54.0], [34.3, 54.0], [34.4, 54.0], [34.5, 54.0], [34.6, 54.0], [34.7, 55.0], [34.8, 55.0], [34.9, 55.0], [35.0, 55.0], [35.1, 55.0], [35.2, 55.0], [35.3, 55.0], [35.4, 55.0], [35.5, 55.0], [35.6, 55.0], [35.7, 55.0], [35.8, 55.0], [35.9, 55.0], [36.0, 55.0], [36.1, 55.0], [36.2, 55.0], [36.3, 55.0], [36.4, 55.0], [36.5, 55.0], [36.6, 55.0], [36.7, 55.0], [36.8, 55.0], [36.9, 55.0], [37.0, 55.0], [37.1, 55.0], [37.2, 55.0], [37.3, 55.0], [37.4, 55.0], [37.5, 55.0], [37.6, 55.0], [37.7, 55.0], [37.8, 55.0], [37.9, 55.0], [38.0, 55.0], [38.1, 55.0], [38.2, 55.0], [38.3, 55.0], [38.4, 55.0], [38.5, 55.0], [38.6, 55.0], [38.7, 55.0], [38.8, 55.0], [38.9, 55.0], [39.0, 55.0], [39.1, 55.0], [39.2, 55.0], [39.3, 55.0], [39.4, 55.0], [39.5, 55.0], [39.6, 55.0], [39.7, 55.0], [39.8, 55.0], [39.9, 55.0], [40.0, 55.0], [40.1, 55.0], [40.2, 55.0], [40.3, 55.0], [40.4, 55.0], [40.5, 55.0], [40.6, 55.0], [40.7, 55.0], [40.8, 55.0], [40.9, 55.0], [41.0, 55.0], [41.1, 55.0], [41.2, 55.0], [41.3, 55.0], [41.4, 55.0], [41.5, 55.0], [41.6, 55.0], [41.7, 55.0], [41.8, 55.0], [41.9, 55.0], [42.0, 55.0], [42.1, 55.0], [42.2, 55.0], [42.3, 55.0], [42.4, 55.0], [42.5, 55.0], [42.6, 55.0], [42.7, 55.0], [42.8, 55.0], [42.9, 55.0], [43.0, 55.0], [43.1, 55.0], [43.2, 55.0], [43.3, 55.0], [43.4, 56.0], [43.5, 56.0], [43.6, 56.0], [43.7, 56.0], [43.8, 56.0], [43.9, 56.0], [44.0, 56.0], [44.1, 56.0], [44.2, 56.0], [44.3, 56.0], [44.4, 56.0], [44.5, 56.0], [44.6, 56.0], [44.7, 56.0], [44.8, 56.0], [44.9, 56.0], [45.0, 56.0], [45.1, 56.0], [45.2, 56.0], [45.3, 56.0], [45.4, 56.0], [45.5, 56.0], [45.6, 56.0], [45.7, 56.0], [45.8, 56.0], [45.9, 56.0], [46.0, 56.0], [46.1, 56.0], [46.2, 56.0], [46.3, 56.0], [46.4, 56.0], [46.5, 56.0], [46.6, 56.0], [46.7, 56.0], [46.8, 56.0], [46.9, 56.0], [47.0, 56.0], [47.1, 56.0], [47.2, 56.0], [47.3, 56.0], [47.4, 56.0], [47.5, 56.0], [47.6, 56.0], [47.7, 56.0], [47.8, 56.0], [47.9, 56.0], [48.0, 56.0], [48.1, 56.0], [48.2, 56.0], [48.3, 56.0], [48.4, 57.0], [48.5, 57.0], [48.6, 57.0], [48.7, 57.0], [48.8, 57.0], [48.9, 57.0], [49.0, 57.0], [49.1, 57.0], [49.2, 57.0], [49.3, 57.0], [49.4, 57.0], [49.5, 57.0], [49.6, 57.0], [49.7, 57.0], [49.8, 57.0], [49.9, 57.0], [50.0, 57.0], [50.1, 57.0], [50.2, 57.0], [50.3, 57.0], [50.4, 57.0], [50.5, 57.0], [50.6, 57.0], [50.7, 57.0], [50.8, 57.0], [50.9, 57.0], [51.0, 57.0], [51.1, 57.0], [51.2, 57.0], [51.3, 57.0], [51.4, 57.0], [51.5, 57.0], [51.6, 57.0], [51.7, 57.0], [51.8, 57.0], [51.9, 57.0], [52.0, 58.0], [52.1, 58.0], [52.2, 58.0], [52.3, 58.0], [52.4, 58.0], [52.5, 58.0], [52.6, 58.0], [52.7, 58.0], [52.8, 58.0], [52.9, 58.0], [53.0, 58.0], [53.1, 58.0], [53.2, 58.0], [53.3, 58.0], [53.4, 58.0], [53.5, 58.0], [53.6, 58.0], [53.7, 58.0], [53.8, 58.0], [53.9, 58.0], [54.0, 58.0], [54.1, 58.0], [54.2, 58.0], [54.3, 58.0], [54.4, 58.0], [54.5, 58.0], [54.6, 58.0], [54.7, 58.0], [54.8, 58.0], [54.9, 58.0], [55.0, 58.0], [55.1, 58.0], [55.2, 58.0], [55.3, 58.0], [55.4, 58.0], [55.5, 58.0], [55.6, 58.0], [55.7, 58.0], [55.8, 58.0], [55.9, 58.0], [56.0, 58.0], [56.1, 58.0], [56.2, 58.0], [56.3, 58.0], [56.4, 58.0], [56.5, 58.0], [56.6, 58.0], [56.7, 58.0], [56.8, 58.0], [56.9, 58.0], [57.0, 58.0], [57.1, 58.0], [57.2, 58.0], [57.3, 58.0], [57.4, 58.0], [57.5, 58.0], [57.6, 58.0], [57.7, 59.0], [57.8, 59.0], [57.9, 59.0], [58.0, 59.0], [58.1, 59.0], [58.2, 59.0], [58.3, 59.0], [58.4, 59.0], [58.5, 59.0], [58.6, 59.0], [58.7, 59.0], [58.8, 59.0], [58.9, 59.0], [59.0, 59.0], [59.1, 59.0], [59.2, 59.0], [59.3, 59.0], [59.4, 59.0], [59.5, 59.0], [59.6, 59.0], [59.7, 59.0], [59.8, 59.0], [59.9, 59.0], [60.0, 59.0], [60.1, 59.0], [60.2, 59.0], [60.3, 59.0], [60.4, 59.0], [60.5, 59.0], [60.6, 59.0], [60.7, 59.0], [60.8, 59.0], [60.9, 59.0], [61.0, 59.0], [61.1, 59.0], [61.2, 59.0], [61.3, 59.0], [61.4, 59.0], [61.5, 59.0], [61.6, 59.0], [61.7, 59.0], [61.8, 59.0], [61.9, 59.0], [62.0, 60.0], [62.1, 60.0], [62.2, 60.0], [62.3, 60.0], [62.4, 60.0], [62.5, 60.0], [62.6, 60.0], [62.7, 60.0], [62.8, 60.0], [62.9, 60.0], [63.0, 60.0], [63.1, 60.0], [63.2, 60.0], [63.3, 60.0], [63.4, 60.0], [63.5, 60.0], [63.6, 60.0], [63.7, 60.0], [63.8, 60.0], [63.9, 60.0], [64.0, 60.0], [64.1, 60.0], [64.2, 60.0], [64.3, 60.0], [64.4, 60.0], [64.5, 60.0], [64.6, 60.0], [64.7, 60.0], [64.8, 60.0], [64.9, 60.0], [65.0, 61.0], [65.1, 61.0], [65.2, 61.0], [65.3, 61.0], [65.4, 61.0], [65.5, 61.0], [65.6, 61.0], [65.7, 61.0], [65.8, 61.0], [65.9, 61.0], [66.0, 61.0], [66.1, 61.0], [66.2, 61.0], [66.3, 61.0], [66.4, 61.0], [66.5, 61.0], [66.6, 61.0], [66.7, 61.0], [66.8, 61.0], [66.9, 61.0], [67.0, 61.0], [67.1, 61.0], [67.2, 61.0], [67.3, 61.0], [67.4, 61.0], [67.5, 61.0], [67.6, 61.0], [67.7, 61.0], [67.8, 61.0], [67.9, 61.0], [68.0, 61.0], [68.1, 61.0], [68.2, 61.0], [68.3, 61.0], [68.4, 61.0], [68.5, 61.0], [68.6, 61.0], [68.7, 61.0], [68.8, 61.0], [68.9, 61.0], [69.0, 61.0], [69.1, 61.0], [69.2, 61.0], [69.3, 61.0], [69.4, 62.0], [69.5, 62.0], [69.6, 62.0], [69.7, 62.0], [69.8, 62.0], [69.9, 62.0], [70.0, 62.0], [70.1, 62.0], [70.2, 62.0], [70.3, 62.0], [70.4, 62.0], [70.5, 62.0], [70.6, 62.0], [70.7, 62.0], [70.8, 62.0], [70.9, 62.0], [71.0, 62.0], [71.1, 62.0], [71.2, 62.0], [71.3, 62.0], [71.4, 62.0], [71.5, 62.0], [71.6, 62.0], [71.7, 62.0], [71.8, 62.0], [71.9, 62.0], [72.0, 63.0], [72.1, 63.0], [72.2, 63.0], [72.3, 63.0], [72.4, 63.0], [72.5, 63.0], [72.6, 63.0], [72.7, 63.0], [72.8, 63.0], [72.9, 63.0], [73.0, 63.0], [73.1, 63.0], [73.2, 63.0], [73.3, 63.0], [73.4, 63.0], [73.5, 63.0], [73.6, 63.0], [73.7, 63.0], [73.8, 63.0], [73.9, 63.0], [74.0, 63.0], [74.1, 63.0], [74.2, 63.0], [74.3, 63.0], [74.4, 63.0], [74.5, 63.0], [74.6, 63.0], [74.7, 64.0], [74.8, 64.0], [74.9, 64.0], [75.0, 64.0], [75.1, 64.0], [75.2, 64.0], [75.3, 64.0], [75.4, 64.0], [75.5, 64.0], [75.6, 64.0], [75.7, 64.0], [75.8, 64.0], [75.9, 64.0], [76.0, 64.0], [76.1, 64.0], [76.2, 64.0], [76.3, 64.0], [76.4, 64.0], [76.5, 64.0], [76.6, 64.0], [76.7, 64.0], [76.8, 64.0], [76.9, 64.0], [77.0, 64.0], [77.1, 64.0], [77.2, 64.0], [77.3, 64.0], [77.4, 64.0], [77.5, 64.0], [77.6, 64.0], [77.7, 65.0], [77.8, 65.0], [77.9, 65.0], [78.0, 65.0], [78.1, 65.0], [78.2, 65.0], [78.3, 65.0], [78.4, 65.0], [78.5, 65.0], [78.6, 65.0], [78.7, 65.0], [78.8, 65.0], [78.9, 65.0], [79.0, 65.0], [79.1, 65.0], [79.2, 65.0], [79.3, 65.0], [79.4, 65.0], [79.5, 65.0], [79.6, 65.0], [79.7, 65.0], [79.8, 65.0], [79.9, 65.0], [80.0, 65.0], [80.1, 65.0], [80.2, 65.0], [80.3, 65.0], [80.4, 66.0], [80.5, 66.0], [80.6, 66.0], [80.7, 66.0], [80.8, 66.0], [80.9, 66.0], [81.0, 66.0], [81.1, 66.0], [81.2, 66.0], [81.3, 66.0], [81.4, 66.0], [81.5, 66.0], [81.6, 66.0], [81.7, 67.0], [81.8, 67.0], [81.9, 67.0], [82.0, 67.0], [82.1, 67.0], [82.2, 67.0], [82.3, 67.0], [82.4, 67.0], [82.5, 67.0], [82.6, 67.0], [82.7, 68.0], [82.8, 68.0], [82.9, 68.0], [83.0, 68.0], [83.1, 68.0], [83.2, 68.0], [83.3, 68.0], [83.4, 68.0], [83.5, 68.0], [83.6, 68.0], [83.7, 69.0], [83.8, 69.0], [83.9, 69.0], [84.0, 69.0], [84.1, 69.0], [84.2, 69.0], [84.3, 69.0], [84.4, 69.0], [84.5, 69.0], [84.6, 69.0], [84.7, 69.0], [84.8, 69.0], [84.9, 69.0], [85.0, 69.0], [85.1, 69.0], [85.2, 69.0], [85.3, 69.0], [85.4, 70.0], [85.5, 70.0], [85.6, 70.0], [85.7, 71.0], [85.8, 71.0], [85.9, 71.0], [86.0, 71.0], [86.1, 71.0], [86.2, 71.0], [86.3, 71.0], [86.4, 71.0], [86.5, 71.0], [86.6, 71.0], [86.7, 72.0], [86.8, 72.0], [86.9, 72.0], [87.0, 72.0], [87.1, 72.0], [87.2, 72.0], [87.3, 72.0], [87.4, 72.0], [87.5, 72.0], [87.6, 72.0], [87.7, 72.0], [87.8, 72.0], [87.9, 72.0], [88.0, 73.0], [88.1, 73.0], [88.2, 73.0], [88.3, 73.0], [88.4, 73.0], [88.5, 73.0], [88.6, 73.0], [88.7, 74.0], [88.8, 74.0], [88.9, 74.0], [89.0, 75.0], [89.1, 75.0], [89.2, 75.0], [89.3, 75.0], [89.4, 76.0], [89.5, 76.0], [89.6, 76.0], [89.7, 77.0], [89.8, 77.0], [89.9, 77.0], [90.0, 78.0], [90.1, 78.0], [90.2, 78.0], [90.3, 78.0], [90.4, 80.0], [90.5, 80.0], [90.6, 80.0], [90.7, 81.0], [90.8, 81.0], [90.9, 81.0], [91.0, 86.0], [91.1, 86.0], [91.2, 86.0], [91.3, 86.0], [91.4, 90.0], [91.5, 90.0], [91.6, 90.0], [91.7, 90.0], [91.8, 90.0], [91.9, 90.0], [92.0, 91.0], [92.1, 91.0], [92.2, 91.0], [92.3, 91.0], [92.4, 92.0], [92.5, 92.0], [92.6, 92.0], [92.7, 93.0], [92.8, 93.0], [92.9, 93.0], [93.0, 113.0], [93.1, 113.0], [93.2, 113.0], [93.3, 113.0], [93.4, 126.0], [93.5, 126.0], [93.6, 126.0], [93.7, 140.0], [93.8, 140.0], [93.9, 140.0], [94.0, 143.0], [94.1, 143.0], [94.2, 143.0], [94.3, 143.0], [94.4, 156.0], [94.5, 156.0], [94.6, 156.0], [94.7, 158.0], [94.8, 158.0], [94.9, 158.0], [95.0, 174.0], [95.1, 174.0], [95.2, 174.0], [95.3, 174.0], [95.4, 175.0], [95.5, 175.0], [95.6, 175.0], [95.7, 223.0], [95.8, 223.0], [95.9, 223.0], [96.0, 241.0], [96.1, 241.0], [96.2, 241.0], [96.3, 241.0], [96.4, 268.0], [96.5, 268.0], [96.6, 268.0], [96.7, 303.0], [96.8, 303.0], [96.9, 303.0], [97.0, 318.0], [97.1, 318.0], [97.2, 318.0], [97.3, 318.0], [97.4, 325.0], [97.5, 325.0], [97.6, 325.0], [97.7, 325.0], [97.8, 325.0], [97.9, 325.0], [98.0, 329.0], [98.1, 329.0], [98.2, 329.0], [98.3, 329.0], [98.4, 330.0], [98.5, 330.0], [98.6, 330.0], [98.7, 330.0], [98.8, 330.0], [98.9, 330.0], [99.0, 330.0], [99.1, 330.0], [99.2, 330.0], [99.3, 330.0], [99.4, 382.0], [99.5, 382.0], [99.6, 382.0], [99.7, 393.0], [99.8, 393.0], [99.9, 393.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 279.0, "series": [{"data": [[0.0, 279.0], [300.0, 10.0], [200.0, 3.0], [100.0, 8.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 300.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 300.0, "series": [{"data": [[0.0, 300.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.052631578947368, "minX": 1.669801416E12, "maxY": 13.312499999999996, "series": [{"data": [[1.669801425E12, 2.2142857142857144], [1.6698014178E12, 2.1500000000000004], [1.6698014214E12, 2.3888888888888884], [1.6698014208E12, 2.1052631578947376], [1.6698014244E12, 2.1578947368421053], [1.669801419E12, 2.3333333333333335], [1.6698014184E12, 2.1666666666666665], [1.669801422E12, 2.052631578947368], [1.6698014232E12, 2.15], [1.669801416E12, 13.312499999999996], [1.6698014196E12, 2.315789473684211], [1.6698014226E12, 2.6], [1.6698014172E12, 2.263157894736842], [1.6698014202E12, 2.052631578947368], [1.6698014238E12, 2.1578947368421058], [1.6698014166E12, 3.260869565217391]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.669801425E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 54.25, "minX": 1.0, "maxY": 393.0, "series": [{"data": [[8.0, 318.0], [4.0, 93.66666666666667], [2.0, 55.518867924528315], [1.0, 54.25], [18.0, 311.875], [9.0, 393.0], [10.0, 382.0], [5.0, 97.2], [11.0, 159.0], [6.0, 164.66666666666666], [3.0, 65.70175438596493], [7.0, 199.33333333333334]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[2.893333333333332, 71.65666666666671]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 18.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3103.3333333333335, "minX": 1.669801416E12, "maxY": 28366.666666666668, "series": [{"data": [[1.669801425E12, 17266.666666666668], [1.6698014178E12, 24666.666666666668], [1.6698014214E12, 22200.0], [1.6698014208E12, 23433.333333333332], [1.6698014244E12, 23433.333333333332], [1.669801419E12, 22200.0], [1.6698014184E12, 22200.0], [1.669801422E12, 23433.333333333332], [1.6698014232E12, 24666.666666666668], [1.669801416E12, 19733.333333333332], [1.6698014196E12, 23433.333333333332], [1.6698014226E12, 24666.666666666668], [1.6698014172E12, 23433.333333333332], [1.6698014202E12, 23433.333333333332], [1.6698014238E12, 23433.333333333332], [1.6698014166E12, 28366.666666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.669801425E12, 3103.3333333333335], [1.6698014178E12, 4433.333333333333], [1.6698014214E12, 3990.0], [1.6698014208E12, 4211.666666666667], [1.6698014244E12, 4211.666666666667], [1.669801419E12, 3990.0], [1.6698014184E12, 3990.0], [1.669801422E12, 4211.666666666667], [1.6698014232E12, 4433.333333333333], [1.669801416E12, 3546.6666666666665], [1.6698014196E12, 4211.666666666667], [1.6698014226E12, 4433.333333333333], [1.6698014172E12, 4211.666666666667], [1.6698014202E12, 4211.666666666667], [1.6698014238E12, 4211.666666666667], [1.6698014166E12, 5098.333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.669801425E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 53.42105263157893, "minX": 1.669801416E12, "maxY": 285.68749999999994, "series": [{"data": [[1.669801425E12, 59.714285714285715], [1.6698014178E12, 55.04999999999999], [1.6698014214E12, 61.333333333333336], [1.6698014208E12, 53.42105263157893], [1.6698014244E12, 57.84210526315789], [1.669801419E12, 58.666666666666664], [1.6698014184E12, 56.77777777777778], [1.669801422E12, 54.10526315789474], [1.6698014232E12, 55.25], [1.669801416E12, 285.68749999999994], [1.6698014196E12, 60.10526315789473], [1.6698014226E12, 64.5], [1.6698014172E12, 59.421052631578945], [1.6698014202E12, 55.68421052631579], [1.6698014238E12, 56.36842105263158], [1.6698014166E12, 81.30434782608695]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.669801425E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 53.42105263157893, "minX": 1.669801416E12, "maxY": 283.81249999999994, "series": [{"data": [[1.669801425E12, 59.642857142857146], [1.6698014178E12, 54.900000000000006], [1.6698014214E12, 61.27777777777777], [1.6698014208E12, 53.42105263157893], [1.6698014244E12, 57.68421052631579], [1.669801419E12, 58.55555555555556], [1.6698014184E12, 56.611111111111114], [1.669801422E12, 53.99999999999999], [1.6698014232E12, 55.2], [1.669801416E12, 283.81249999999994], [1.6698014196E12, 60.05263157894736], [1.6698014226E12, 64.35000000000001], [1.6698014172E12, 59.315789473684205], [1.6698014202E12, 55.57894736842105], [1.6698014238E12, 56.21052631578947], [1.6698014166E12, 81.2173913043478]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.669801425E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.1500000000000001, "minX": 1.669801416E12, "maxY": 20.875, "series": [{"data": [[1.669801425E12, 1.2857142857142856], [1.6698014178E12, 1.2], [1.6698014214E12, 1.2777777777777781], [1.6698014208E12, 1.210526315789474], [1.6698014244E12, 1.526315789473684], [1.669801419E12, 1.2777777777777781], [1.6698014184E12, 1.2777777777777783], [1.669801422E12, 1.3157894736842108], [1.6698014232E12, 1.2500000000000004], [1.669801416E12, 20.875], [1.6698014196E12, 1.473684210526316], [1.6698014226E12, 1.1500000000000001], [1.6698014172E12, 1.1578947368421055], [1.6698014202E12, 1.1578947368421055], [1.6698014238E12, 1.5789473684210524], [1.6698014166E12, 1.2173913043478264]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.669801425E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 46.0, "minX": 1.669801416E12, "maxY": 393.0, "series": [{"data": [[1.669801425E12, 69.0], [1.6698014178E12, 65.0], [1.6698014214E12, 92.0], [1.6698014208E12, 65.0], [1.6698014244E12, 75.0], [1.669801419E12, 80.0], [1.6698014184E12, 66.0], [1.669801422E12, 64.0], [1.6698014232E12, 68.0], [1.669801416E12, 393.0], [1.6698014196E12, 73.0], [1.6698014226E12, 93.0], [1.6698014172E12, 71.0], [1.6698014202E12, 66.0], [1.6698014238E12, 71.0], [1.6698014166E12, 174.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.669801425E12, 68.0], [1.6698014178E12, 62.7], [1.6698014214E12, 82.10000000000002], [1.6698014208E12, 64.0], [1.6698014244E12, 72.0], [1.669801419E12, 70.10000000000002], [1.6698014184E12, 63.300000000000004], [1.669801422E12, 62.0], [1.6698014232E12, 64.60000000000001], [1.669801416E12, 385.3], [1.6698014196E12, 72.0], [1.6698014226E12, 89.60000000000001], [1.6698014172E12, 70.0], [1.6698014202E12, 63.0], [1.6698014238E12, 67.0], [1.6698014166E12, 150.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.669801425E12, 69.0], [1.6698014178E12, 65.0], [1.6698014214E12, 92.0], [1.6698014208E12, 65.0], [1.6698014244E12, 75.0], [1.669801419E12, 80.0], [1.6698014184E12, 66.0], [1.669801422E12, 64.0], [1.6698014232E12, 68.0], [1.669801416E12, 393.0], [1.6698014196E12, 73.0], [1.6698014226E12, 93.0], [1.6698014172E12, 71.0], [1.6698014202E12, 66.0], [1.6698014238E12, 71.0], [1.6698014166E12, 174.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.669801425E12, 69.0], [1.6698014178E12, 64.9], [1.6698014214E12, 92.0], [1.6698014208E12, 65.0], [1.6698014244E12, 75.0], [1.669801419E12, 80.0], [1.6698014184E12, 66.0], [1.669801422E12, 64.0], [1.6698014232E12, 67.85], [1.669801416E12, 393.0], [1.6698014196E12, 73.0], [1.6698014226E12, 92.85], [1.6698014172E12, 71.0], [1.6698014202E12, 66.0], [1.6698014238E12, 71.0], [1.6698014166E12, 170.79999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.669801425E12, 50.0], [1.6698014178E12, 48.0], [1.6698014214E12, 46.0], [1.6698014208E12, 47.0], [1.6698014244E12, 50.0], [1.669801419E12, 50.0], [1.6698014184E12, 48.0], [1.669801422E12, 47.0], [1.6698014232E12, 49.0], [1.669801416E12, 143.0], [1.6698014196E12, 50.0], [1.6698014226E12, 49.0], [1.6698014172E12, 51.0], [1.6698014202E12, 47.0], [1.6698014238E12, 49.0], [1.6698014166E12, 50.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.669801425E12, 59.5], [1.6698014178E12, 54.5], [1.6698014214E12, 59.5], [1.6698014208E12, 54.0], [1.6698014244E12, 56.0], [1.669801419E12, 55.5], [1.6698014184E12, 56.0], [1.669801422E12, 51.0], [1.6698014232E12, 54.5], [1.669801416E12, 321.5], [1.6698014196E12, 59.0], [1.6698014226E12, 61.0], [1.6698014172E12, 59.0], [1.6698014202E12, 55.0], [1.6698014238E12, 56.0], [1.6698014166E12, 65.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.669801425E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 55.0, "minX": 14.0, "maxY": 59.5, "series": [{"data": [[32.0, 58.0], [33.0, 58.0], [14.0, 59.5], [31.0, 55.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 55.0, "minX": 14.0, "maxY": 59.5, "series": [{"data": [[32.0, 58.0], [33.0, 57.0], [14.0, 59.5], [31.0, 55.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 21.666666666666668, "minX": 1.669801416E12, "maxY": 35.0, "series": [{"data": [[1.669801425E12, 21.666666666666668], [1.6698014178E12, 31.666666666666668], [1.6698014214E12, 31.666666666666668], [1.6698014208E12, 30.0], [1.6698014244E12, 30.0], [1.669801419E12, 30.0], [1.6698014184E12, 31.666666666666668], [1.669801422E12, 31.666666666666668], [1.6698014232E12, 33.333333333333336], [1.669801416E12, 35.0], [1.6698014196E12, 31.666666666666668], [1.6698014226E12, 33.333333333333336], [1.6698014172E12, 31.666666666666668], [1.6698014202E12, 31.666666666666668], [1.6698014238E12, 31.666666666666668], [1.6698014166E12, 33.333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.669801425E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 23.333333333333332, "minX": 1.669801416E12, "maxY": 38.333333333333336, "series": [{"data": [[1.669801425E12, 23.333333333333332], [1.6698014178E12, 33.333333333333336], [1.6698014214E12, 30.0], [1.6698014208E12, 31.666666666666668], [1.6698014244E12, 31.666666666666668], [1.669801419E12, 30.0], [1.6698014184E12, 30.0], [1.669801422E12, 31.666666666666668], [1.6698014232E12, 33.333333333333336], [1.669801416E12, 26.666666666666668], [1.6698014196E12, 31.666666666666668], [1.6698014226E12, 33.333333333333336], [1.6698014172E12, 31.666666666666668], [1.6698014202E12, 31.666666666666668], [1.6698014238E12, 31.666666666666668], [1.6698014166E12, 38.333333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 600, "maxX": 1.669801425E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 23.333333333333332, "minX": 1.669801416E12, "maxY": 38.333333333333336, "series": [{"data": [[1.669801425E12, 23.333333333333332], [1.6698014178E12, 33.333333333333336], [1.6698014214E12, 30.0], [1.6698014208E12, 31.666666666666668], [1.6698014244E12, 31.666666666666668], [1.669801419E12, 30.0], [1.6698014184E12, 30.0], [1.669801422E12, 31.666666666666668], [1.6698014232E12, 33.333333333333336], [1.669801416E12, 26.666666666666668], [1.6698014196E12, 31.666666666666668], [1.6698014226E12, 33.333333333333336], [1.6698014172E12, 31.666666666666668], [1.6698014202E12, 31.666666666666668], [1.6698014238E12, 31.666666666666668], [1.6698014166E12, 38.333333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.669801425E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 23.333333333333332, "minX": 1.669801416E12, "maxY": 38.333333333333336, "series": [{"data": [[1.669801425E12, 23.333333333333332], [1.6698014178E12, 33.333333333333336], [1.6698014214E12, 30.0], [1.6698014208E12, 31.666666666666668], [1.6698014244E12, 31.666666666666668], [1.669801419E12, 30.0], [1.6698014184E12, 30.0], [1.669801422E12, 31.666666666666668], [1.6698014232E12, 33.333333333333336], [1.669801416E12, 26.666666666666668], [1.6698014196E12, 31.666666666666668], [1.6698014226E12, 33.333333333333336], [1.6698014172E12, 31.666666666666668], [1.6698014202E12, 31.666666666666668], [1.6698014238E12, 31.666666666666668], [1.6698014166E12, 38.333333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 600, "maxX": 1.669801425E12, "title": "Total Transactions Per Second"}},
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

