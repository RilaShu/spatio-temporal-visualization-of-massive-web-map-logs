/*
 * Copyright (c) 2014 Oculus Info Inc.
 * http://www.oculusinfo.com/
 *
 * Released under the MIT License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
* Edit By RilaShu 18/03/19
* Add sLayerName as a parameter
* Change index.html also
*/
function appStart(sLayerName) {
    "use strict";
	
    /* Request layers from server, returning an array of
     * layer configuration objects.
     */
    tiles.LayerService.getLayers(function( layers ) {

        /*
         * Parse layers into an object keyed by layer id, this function also
         * parses the meta data json strings into their respective runtime objects
         */
        layers = tiles.LayerUtil.parse( layers.layers );

        
		var	map,
			serverLayer,
			axis0,
            axis1,
            baseLayer;
            //darkRenderTheme,
            //wordCloudRenderer,
            //clientLayer,
		
        /*
         * Instantiate the baselayer object, we are using a Google maps baselayer
         * so type is set to "Google", this baselayer is associated with the "dark"
         * theme, Google Maps specific options are passed under the "options" node.
         *
         * type    {String}  - The type of baselayer, ["Blank", "Google", "TMS"]. Default = "Blank"
         * opacity {float}   - The opacity of the layer. Default = 1.0
         * enabled {boolean} - Whether the layer is visible or not. Default = true
         * url     {String}  - if TMS layer, the url for tile requests. Default = undefined
         * options {Object}  - type specific instantiation attributes. Default = {color:rgb(0,0,0)}
         *
         */
        baseLayer = new tiles.BaseLayer({
            type: "Google",
            options : {
               styles : [
                    { featureType: "all",
                      stylers : [ { invert_lightness : true },
                                    { saturation : -100 },
                                    { visibility : "simplified" } ] },
                    { featureType: "administrative",
                      elementType: "geometry",
                        stylers: [ { visibility: "off" } ] },
                    { featureType : "landscape.natural.landcover",
                      stylers : [ { visibility : "off" } ] },
                    { featureType : "road",
                      stylers : [ { visibility : "on" } ] },
                    { featureType : "landscape.man_made",
                      stylers : [ { visibility : "off" } ] },
                    { featureType : "landscape",
                      stylers : [ { lightness : "-100" } ] },
                    { featureType : "poi",
                      stylers : [ { visibility : "off" } ] },
                    { featureType : "administrative.country",
                      elementType : "geometry",
                      stylers : [ { visibility : "on" },
                                    { lightness : -56 } ] },
                    { elementType : "labels",
                      stylers : [ { lightness : -46 },
                                    { visibility : "on" } ] }
                ]
            }
        });

		/*baseLayer = new tiles.BaseLayer({
            type: "XYZ",
			url: "https://a.tile.openstreetmap.org/${z}/${x}/${y}.png"
        });*/
        /*
         * Instantiate a server rendered layer, passing the "tweet-heatmap" layer as its source.
         *
         * opacity {float}   - The opacity of the layer. Default = 1.0
         * enabled {boolean} - Whether the layer is visible or not. Default = true
         * zIndex {integer}  - The z index of the layer. Default = 1
         * renderer: {
         *     coarseness {integer} - The pixel by pixel coarseness. Default based on server configuration.
         *     ramp       {String}  - The color ramp type. Default based on server configuration.
         *     rangeMin   {integer} - The minimum percentage to clamp the low end of the color ramp. Default based on server configuration.
         *     rangeMax   {integer} - The maxiumum percentage to clamp the high end of the color ramp. Default based on server configuration.
         * },
         * valueTransform: {
         *     type {String} - Value transformer type. Default based on server configuration.
         * },
         * tileTransform: {
         *     type {String} - Tile transformer type. Default based on server configuration.
         *     data {Object} - The tile transformer data initialization object. Default based on server configuration.
         * }
         *
         */

         //use sLayerName
        serverLayer = new tiles.ServerLayer({
            source: layers[sLayerName],
            valueTransform: {
                type: "log10"
            }
        });
		serverLayer.redraw();
        /*
         * Instantiate a render theme object to apply themed css to a render componenet.
         *
         * color                  {String} - The css color attribute for the component.
         * color:hover            {String} - The css color attribute for the component, under hover.
         * background-color       {String} - The css background-color attribute for the component.
         * background-color:hover {String} - The css background-color attribute for the component, under hover.
         * text-shadow            {String} - The css text-shadow attribute for the component.
         * border                 {String} - The css border attribute for the component.
         */
        /*darkRenderTheme = new tiles.RenderTheme( "dark", {
            'color': "#FFFFFF",
            'color:hover': "#09CFFF",
            'text-shadow': "#000"
        });*/

        /*
         * Instantiate a word cloud renderer. Attach a render theme and hook function to
         * give access to the renderer DOM element and respective data entry.
         *
         * text: {
         *     textKey  {String} - The attribute for the text in the data entry.
         *     countKey {String} - The attribute for the count in the data entry.
         *     themes   {Array}  - The array of RenderThemes to be attached to this component.
         * }
         * hook {Function} - The hook function that is executed on every rendered entry.
         *
         *     Arguments:
         *         elem    {HTMLElement} - The html element for the entry.
         *         entry   {Object}      - The data entry.
         *         entries {Array}       - All entries for the tile.
         *         data    {Object}      - The raw data object for the tile.
         *
         */
        /*wordCloudRenderer = new tiles.WordCloudRenderer({
            text: {
                textKey: "topic",
                countKey: "countMonthly",
                themes: [ darkRenderTheme ]
            },
            hook: function( elem, entry, entries, data ) {
                elem.onclick = function() {
                    console.log( elem );
                    console.log( entry );
                };
            }
        });*/

        /*
         * Instantiate a client renderer layer, passing the "top-tweets" laye as its source.
         *
         * opacity {float}   - The opacity of the layer. Default = 1.0
         * enabled {boolean} - Whether the layer is visible or not. Default = true
         * zIndex  {integer} - The z index of the layer. Default = 1000
         *
         * Rendering options:
         *
         *     renderer {Renderer} - The tile renderer object.
         *
         *          or
         *
         *     html {String|Function|HTMLElement|jQuery} - The html for the tile.
         *
         */
        /*clientLayer = new tiles.ClientLayer({
            source: layers["top-tweets"],
            renderer: wordCloudRenderer
        });*/

        /*
         * Instantiate the "Longitude" and "Latitude" axis:
         *
         *  position {String}  - Set the position to the bottom of the map. Default = "bottom"
         *  title    {String}  - Set the title of the axis label. Default = "Axis"
         *  enabled  {boolean} - Have the axis initialize to an open or closed state. Default = true
         *  repeat   {boolean} - Whether or not the axis repeats. Default = false
         *  intervals: {
         *      type        {String}  - Whether the intervals are by "percentage" or by "value". Default = "percentage"
         *      increment   {number}  - The interval increment in. Default = 10
         *      pivot       {number}  - The value from with increments are generated from. Default = 0
         *      scaleByZoom {boolean} - Whether the increments should be scaled by zoom level. Default = true
         *  }
         *  units: {
         *      type     {String}  - The type of unit, ["integer", "decimal", "thousands", "millions", "billions", "degrees"]. Default = "decimal"
         *      decimals {number}  - The number of decimals to display, if applicable. Default = 2
         *      stepDown {boolean} - Whether values should step down by unit type, if applicable. Default = true
         *  }
         */
        axis0 = new tiles.Axis({
            position: 'bottom',
            title: 'Longitude',
            enabled: false,
            repeat: true,
            intervals: {
                type: 'fixed',
                increment: 120,
                pivot: 0
            },
            units: {
                type: 'degrees'
            }
        });

        axis1 =  new tiles.Axis({
            position: 'left',
            title: 'Latitude',
            enabled: false,
            repeat: true,
            intervals: {
                type: 'fixed',
                increment: 60
            },
            units: {
                type: 'degrees'
            }
        });

        /*
         * Instantiate the map, attach it to DOM element with id of "map". No pyramid is provided
         * as default is "WebMercator". Attach all map components.
         *
         * map {String} The id for the DOM to contain the map.
         */
		map = null;
		/*注意这里清空了map div，关键，否则不会更新*/
		$("#map").html("");
        map = new tiles.Map( "map" );
        map.add( serverLayer );
        //map.add( clientLayer );
        map.add( axis0 );
        map.add( axis1 );
        map.add( baseLayer );
        map.zoomTo( 110, 30, 5 );
        /*
         * Create the layer controls and append them to the controls element.
         */
        //$( '.controls' ).append( tiles.LayerControls.create( [ clientLayer, serverLayer ] ) );
		$( '.controls' ).append( tiles.LayerControls.create( [ serverLayer ] ) );
    });
};

function btnDateQuery(){
    //******************************
    // test layers named tdt01/02/03
    // defalut "tdt03" to be today
    //var layerName = "robot00";
    //user Date mm/DD/yyyy
	var userDatestr = $("#datepicker").val();
	var userDate = new Date(userDatestr);
    //sys Date yyyy-mm-DD standar 24 hours
	var sysDate = new Date()
	var sysYear = sysDate.getFullYear();
	var sysMonth = sysDate.getMonth()+1;
	var sysDay = sysDate.getDate();
	var sysDateStr = sysYear + "-" + sysMonth + "-" + sysDay;
	sysDate = new Date(sysDateStr)
    // datedifference as how many days
    var dateSpan = userDate - sysDate;
    var nDays = Math.floor(dateSpan / (24 * 3600 * 1000));
    // today yesterday ...
    switch(nDays)
    {
        case -1: 
            layerName = "02";
            break;
        case 0:
            layerName = "01";
            break;
        case 1:
            layerName = "00";
            break;
        default:
            layerName = "02";
    }
    // ***********************************
    // addtion named "_human" or "_robot"
    // default "_robot" to be web clawer
    var sIsHuman = "robot";
    var checkedValue = $("input[name='human']:checked").val()
    if (checkedValue == "human"){
        sIsHuman = "human";
    }
	//fresh layers
    layerName = sIsHuman + layerName;
	appStart(layerName);
};

function IpEchartToggle(){
    $(".IpEchart").toggle();
};

function myIpTreeMap(){
    var myChart = echarts.init(document.getElementById('IpTreeMap'));
    option = {
        series: [{
            type: 'treemap',
            data: [ { name: '大于5万', value:4481449,children: [{name: '222.129.137.135', value:1974848},{name: '1.180.212.147', value:662585},{name: '111.40.3.224', value:431714},{name: '119.6.63.63', value:366628},{name: '111.200.216.101', value:284703},{name: '1.180.212.153', value:241469},{name: '112.109.238.199', value:205098},{name: '1.180.212.140', value:104134},{name: '202.107.205.7', value:72363},{name: '115.238.84.35', value:71634},{name: '123.157.156.196', value:66273},]},
                    { name: '大于1万', value:215629,children: [{name: '221.197.194.60', value:33178},{name: '58.245.107.204', value:32247},{name: '218.202.95.146', value:30715},{name: '210.72.25.240', value:27957},{name: '202.104.66.210', value:24759},{name: '115.231.76.106', value:22964},{name: '58.245.99.11', value:18048},{name: '111.63.3.214', value:13583},{name: '183.193.150.211', value:12178},]},
                    { name: '大于5千', value:23549,children: [{name: '110.177.36.198', value:9705},{name: '218.17.250.112', value:6993},{name: '119.131.104.176', value:6851},]},
                    { name: '大于2千', value:167274,children: [{name: '58.245.97.194', value:4504},{name: '58.245.109.198', value:4242},{name: '58.245.106.5', value:4149},{name: '119.50.2.239', value:4095},{name: '139.208.188.230', value:4091},{name: '139.208.184.148', value:4081},{name: '139.208.186.183', value:4020},{name: '58.245.97.132', value:3987},{name: '139.208.198.130', value:3957},{name: '58.245.108.131', value:3948},{name: '119.50.2.68', value:3933},{name: '139.208.191.8', value:3891},{name: '58.245.97.68', value:3876},{name: '139.208.186.102', value:3854},{name: '58.245.99.146', value:3835},{name: '58.245.100.137', value:3776},{name: '139.208.197.231', value:3775},{name: '119.50.10.45', value:3770},{name: '119.50.0.179', value:3769},{name: '139.208.191.57', value:3762},{name: '139.208.194.4', value:3755},{name: '119.50.9.97', value:3737},{name: '119.50.10.117', value:3713},{name: '58.245.102.168', value:3695},{name: '119.50.9.124', value:3694},{name: '139.208.199.184', value:3684},{name: '119.50.6.93', value:3678},{name: '223.101.155.151', value:3659},{name: '119.50.11.54', value:3615},{name: '119.50.0.39', value:3553},{name: '58.245.108.220', value:3543},{name: '139.208.190.27', value:3537},{name: '202.100.206.194', value:3496},{name: '119.50.15.11', value:3493},{name: '222.163.10.153', value:3436},{name: '58.245.96.101', value:3415},{name: '119.50.1.93', value:3330},{name: '223.102.4.185', value:3326},{name: '119.50.4.8', value:3214},{name: '139.208.196.225', value:3170},{name: '58.245.109.127', value:3120},{name: '61.182.227.223', value:2919},{name: '222.163.11.186', value:2825},{name: '58.16.163.82', value:2147},{name: '219.156.135.138', value:2099},{name: '222.117.212.4', value:2073},{name: '42.48.221.10', value:2033},]},
                    { name: '大于1千', value:28916,children: [{name: '60.211.136.71', value:1992},{name: '119.191.120.143', value:1772},{name: '115.238.229.7', value:1769},{name: '175.167.138.50', value:1741},{name: '111.47.249.167', value:1708},{name: '220.194.203.90', value:1696},{name: '220.194.203.92', value:1693},{name: '218.200.44.154', value:1682},{name: '1.180.212.92', value:1610},{name: '1.190.74.200', value:1599},{name: '183.193.37.212', value:1553},{name: '111.85.168.233', value:1499},{name: '61.51.139.222', value:1345},{name: '113.140.51.3', value:1306},{name: '39.155.184.78', value:1286},{name: '123.112.98.152', value:1242},{name: '122.142.209.102', value:1234},{name: '101.71.37.52', value:1142},{name: '115.152.250.37', value:1047},]},
                    { name: '其他', value:9227,children: [{name: '220.194.203.9', value:992},{name: '124.160.12.20', value:945},{name: '111.205.83.132', value:894},{name: '223.104.185.240', value:890},{name: '113.200.107.76', value:878},{name: '119.183.98.61', value:801},{name: '221.1.205.46', value:785},{name: '118.212.158.21', value:779},{name: '1.180.212.94', value:765},{name: '221.7.213.159', value:757},{name: '222.162.98.247', value:741},]},]
        }],
        tooltip:{
            show : true,
        }
    };
    myChart.setOption(option);
    window.onresize = myChart.resize();
}


