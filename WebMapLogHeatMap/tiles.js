(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.tiles = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

( function() {

    "use strict";

    module.exports = {

        // Binning
        AreaOfInterestTilePyramid: require('./binning/AreaOfInterestTilePyramid'),
        TileIterator: require('./binning/TileIterator'),
        WebMercatorTilePyramid: require('./binning/WebMercatorTilePyramid'),

        // Layer
        AnnotationLayer: require('./layer/AnnotationLayer'),
        AxisLayer: require('./layer/AxisLayer'),
        BaseLayer: require('./layer/BaseLayer'),
        KMLLayer: require('./layer/KMLLayer'),
        ServerLayer: require('./layer/ServerLayer'),
        ClientLayer: require('./layer/ClientLayer'),
        MultiUrlClientLayer: require('./layer/MultiUrlClientLayer'),
        Carousel: require('./layer/Carousel'),
        LayerUtil: require('./layer/LayerUtil'),
        VectorLayer: require('./layer/VectorLayer'),
        HtmlMarker: require('./layer/HtmlMarker'),
        HtmlMarkerLayer: require('./layer/HtmlMarkerLayer'),
        Layer: require('./layer/Layer'),

        // Renderer
        Renderer: require('./layer/renderer/Renderer'),
        Aggregator: require('./layer/renderer/aggregator/Aggregator'),
        TopicCountAggregator: require('./layer/renderer/aggregator/TopicCountAggregator'),
        TopicCountArrayAggregator: require('./layer/renderer/aggregator/TopicCountArrayAggregator'),
        TopicFrequencyAggregator: require('./layer/renderer/aggregator/TopicFrequencyAggregator'),
        TweetsByTopicAggregator: require('./layer/renderer/aggregator/TweetsByTopicAggregator'),
        FrequenciesByTopicAggregator: require('./layer/renderer/aggregator/FrequenciesByTopicAggregator'),
        FrequencyArraysByTopicAggregator: require('./layer/renderer/aggregator/FrequencyArraysByTopicAggregator'),
        RendererUtil: require('./layer/renderer/RendererUtil'),
        GraphLabelRenderer: require('./layer/renderer/GraphLabelRenderer'),
        GraphNodeRenderer: require('./layer/renderer/GraphNodeRenderer'),
        PointAggregateRenderer: require('./layer/renderer/PointAggregateRenderer'),
        PointRenderer: require('./layer/renderer/PointRenderer'),
        TextByFrequencyRenderer: require('./layer/renderer/TextByFrequencyRenderer'),
        TextScoreWeightedRenderer: require('./layer/renderer/TextScoreWeightedRenderer'),
		TextByTopicRenderer: require('./layer/renderer/TextByTopicRenderer'),
        WordCloudRenderer: require('./layer/renderer/WordCloudRenderer'),
        RenderTheme: require('./layer/renderer/RenderTheme'),

        // Map
        Map: require('./map/Map'),
        MapUtil: require('./map/MapUtil'),
        Marker: require('./map/Marker'),
        Axis: require('./map/Axis'),
        AxisUtil: require('./map/AxisUtil'),

        // REST
        AnnotationService: require('./rest/AnnotationService'),
        LayerService: require('./rest/LayerService'),
        LegendService: require('./rest/LegendService'),
        TileService: require('./rest/TileService'),

        // UI
        LayerControls: require('./ui/LayerControls'),

        // Util
        PubSub: require('./util/PubSub'),
        Util: require('./util/Util')
    };

}());

},{"./binning/AreaOfInterestTilePyramid":2,"./binning/TileIterator":3,"./binning/WebMercatorTilePyramid":4,"./layer/AnnotationLayer":5,"./layer/AxisLayer":6,"./layer/BaseLayer":7,"./layer/Carousel":8,"./layer/ClientLayer":9,"./layer/HtmlMarker":10,"./layer/HtmlMarkerLayer":11,"./layer/KMLLayer":14,"./layer/Layer":15,"./layer/LayerUtil":16,"./layer/MultiUrlClientLayer":17,"./layer/ServerLayer":20,"./layer/VectorLayer":23,"./layer/renderer/GraphLabelRenderer":24,"./layer/renderer/GraphNodeRenderer":25,"./layer/renderer/PointAggregateRenderer":26,"./layer/renderer/PointRenderer":27,"./layer/renderer/RenderTheme":28,"./layer/renderer/Renderer":29,"./layer/renderer/RendererUtil":30,"./layer/renderer/TextByFrequencyRenderer":31,"./layer/renderer/TextByTopicRenderer":32,"./layer/renderer/TextScoreWeightedRenderer":33,"./layer/renderer/WordCloudRenderer":34,"./layer/renderer/aggregator/Aggregator":35,"./layer/renderer/aggregator/FrequenciesByTopicAggregator":36,"./layer/renderer/aggregator/FrequencyArraysByTopicAggregator":37,"./layer/renderer/aggregator/TopicCountAggregator":38,"./layer/renderer/aggregator/TopicCountArrayAggregator":39,"./layer/renderer/aggregator/TopicFrequencyAggregator":40,"./layer/renderer/aggregator/TweetsByTopicAggregator":41,"./map/Axis":42,"./map/AxisUtil":43,"./map/Map":44,"./map/MapUtil":45,"./map/Marker":46,"./rest/AnnotationService":47,"./rest/LayerService":48,"./rest/LegendService":49,"./rest/TileService":50,"./ui/LayerControls":53,"./util/PubSub":59,"./util/Util":60}],2:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

	"use strict";

    /**
     * Instantiate an AreaOfInterestTilePyramid object.
     * @class AreaOfInterestTilePyramid
     * @classdesc A TilePyramid implementation, the equivalent of AOITilePyramid in
     *            tile-service/binning-utilities.
     *
     * @param {Object} spec - The specification object.
     */
	function AreaOfInterestTilePyramid( spec ) {
        this.minX = spec.minX;
        this.minY = spec.minY;
        this.maxX = spec.maxX;
        this.maxY = spec.maxY;
    }

    /**
     * Returns the projection code associated with the pyramid.
     * @memberof AreaOfInterestTilePyramid
     *
     * @returns {string} The projection code.
     */
    AreaOfInterestTilePyramid.prototype.getProjection = function() {
        return "EPSG:4326";
    };

    /**
     * Returns the tile scheme associated with the pyramid.
     * @memberof AreaOfInterestTilePyramid
     *
     * @returns {string} The scheme code.
     */
	AreaOfInterestTilePyramid.prototype.getTileScheme = function() {
        return "TMS";
    };

    /**
     * Maps a fractional tile coordinate to a point in the root coordinate system.
     * @memberof AreaOfInterestTilePyramid
     *
     * @param {Object} tile - The fractional tile coordinate.
     *
     * @returns {Object} The root coordinate.
     */
    AreaOfInterestTilePyramid.prototype.fractionalTileToRoot = function( tile ) {
        var pow2, tileXSize, tileYSize;
        pow2 = 1 << tile.level;
        tileXSize = (this.maxX - this.minX) / pow2;
        tileYSize = (this.maxY - this.minY) / pow2;
        return {
            x: this.minX + tileXSize * tile.xIndex,
            y: this.minY + tileYSize * tile.yIndex
        };
    };

    /**
     * Maps a point from the root coordinate system to a fractional tile coordinate.
     * @memberof AreaOfInterestTilePyramid
     *
     * @param {number} x - The x root coordinate value.
     * @param {number} y - The y root coordinate value.
     * @param {integer} level - The zoom level.
     * @param {integer} bins - The number of bins per dimension in a tile.
     *
     * @returns {Object} The fractional tile coordinate.
     */
	AreaOfInterestTilePyramid.prototype.rootToFractionalTile = function( x, y, level, bins ) {
		bins = bins || 256;
        var numDivs, tileX, tileY;
        numDivs = 1 << level;
        tileX = numDivs * (x - this.minX) / (this.maxX - this.minX);
        tileY = numDivs * (y - this.minY) / (this.maxY - this.minY);
        return {
            'level': level,
            'xIndex': tileX,
            'yIndex': tileY,
            xBinCount: bins,
            yBinCount: bins
        };
    };

    /**
     * Maps a point from the root coordinate system to a tile coordinate.
     * @memberof AreaOfInterestTilePyramid
     *
     * @param {number} x - The x root coordinate value.
     * @param {number} y - The y root coordinate value.
     * @param {integer} level - The zoom level.
     * @param {integer} bins - The number of bins per dimension in a tile.
     *
     * @returns {Object} The tile coordinate.
     */
    AreaOfInterestTilePyramid.prototype.rootToTile = function( x, y, level, bins ) {
		var result = this.rootToFractionalTile( x, y, level, bins );
		result.xIndex = Math.floor( result.xIndex );
		result.yIndex = Math.floor( result.yIndex );
		return result;
    };

	/**
     * Maps a point from the root coordinate system to a specific bin fractional
	 * coordinate.
     * @memberof AreaOfInterestTilePyramid
     *
     * @param {number} x - The x root coordinate value.
     * @param {number} y - The y root coordinate value.
     * @param {Object} tile - The tile coordinate that holds the target bin.
     *
     * @returns {Object} The bin coordinate.
     */
    AreaOfInterestTilePyramid.prototype.rootToFractionalBin = function( x, y, tile ) {
        var pow2, tileXSize, tileYSize, xInTile, yInTile, binX, binY;
        pow2 = 1 << tile.level;
        tileXSize = (this.maxX - this.minX) / pow2;
        tileYSize = (this.maxY - this.minY) / pow2;
        xInTile = x - this.minX - tile.xIndex * tileXSize;
        yInTile = y - this.minY - tile.yIndex * tileYSize;
        binX = xInTile * tile.xBinCount / tileXSize;
        binY = yInTile * tile.yBinCount / tileYSize;
        return {
            x: binX,
            y: tile.yBinCount - 1 - binY
        };
    };

	/**
     * Maps a point from the root coordinate system to a specific bin coordinate.
     * @memberof AreaOfInterestTilePyramid
     *
     * @param {number} x - The x root coordinate value.
     * @param {number} y - The y root coordinate value.
     * @param {Object} tile - The tile coordinate that holds the target bin.
     *
     * @returns {Object} The bin coordinate.
     */
    AreaOfInterestTilePyramid.prototype.rootToBin = function( x, y, tile ) {
		var result = this.rootToFractionalBin( x, y, tile );
		result.x = Math.floor( result.x );
		result.y = Math.floor( result.y );
        return result;
    };

    /**
     * Maps a point from the root coordinate system to a specific bin coordinate.
     * @memberof AreaOfInterestTilePyramid
     *
     * @param {number} x - The x root coordinate value.
     * @param {number} y - The y root coordinate value.
     * @param {Object} tile - The tile coordinate that holds the target bin.
     *
     * @returns {Object} The bin coordinate.
     */
    AreaOfInterestTilePyramid.prototype.rootToBin = function( x, y, tile ) {
        var pow2, tileXSize, tileYSize, xInTile, yInTile, binX, binY;
        pow2 = 1 << tile.level;
        tileXSize = (this.maxX - this.minX) / pow2;
        tileYSize = (this.maxY - this.minY) / pow2;
        xInTile = x - this.minX - tile.xIndex * tileXSize;
        yInTile = y - this.minY - tile.yIndex * tileYSize;
        binX = Math.floor(xInTile * tile.xBinCount / tileXSize);
        binY = Math.floor(yInTile * tile.yBinCount / tileYSize);
        return {
            x: binX,
            y: tile.yBinCount - 1 - binY
        };
    };

    /**
     * Returns the bounds of a particular tile in the root coordinate system.
     * @memberof AreaOfInterestTilePyramid
     *
     * @param {Object} tile - The tile coordinate.
     *
     * @returns {Object} The bounds object.
     */
    AreaOfInterestTilePyramid.prototype.getTileBounds = function( tile ) {
        var pow2, tileXSize, tileYSize;
        pow2 = 1 << tile.level;
        tileXSize = (this.maxX - this.minX) / pow2;
        tileYSize = (this.maxY - this.minY) / pow2;
        return {
            minX: this.minX + tileXSize * tile.xIndex,
            minY: this.minY + tileYSize * tile.yIndex,
            maxX: this.minX + tileXSize * (tile.xIndex + 1),
            maxY: this.minY + tileYSize * (tile.yIndex + 1),
            centerX: this.minX + tileXSize * (tile.xIndex + 0.5),
            centerY: this.minY + tileYSize * (tile.yIndex + 0.5),
            width: tileXSize,
            height: tileYSize
        };
    };

    /**
     * Returns the bounds of a particular bin in the root coordinate system.
     * @memberof AreaOfInterestTilePyramid
     *
     * @param {Object} tile - The tile coordinate.
     * @param {Object} bin - The bin coordinate.
     *
     * @returns {Object} The bounds object.
     */
    AreaOfInterestTilePyramid.prototype.getBinBounds = function( tile, bin ) {
        var pow2, tileXSize, tileYSize, binXSize, binYSize, adjustedY,
            left, bottom;
        pow2 = 1 << tile.level;
        tileXSize = (this.maxX - this.minX) / pow2;
        tileYSize = (this.maxY - this.minY) / pow2;
        binXSize = tileXSize / tile.xBinCount;
        binYSize = tileYSize / tile.yBinCount;
        adjustedY = tile.yBinCount - 1 - bin.y;
        left = this.minX + tileXSize * tile.xIndex;
        bottom = this.minY + tileYSize * tile.yIndex;
        return {
            minX: left + binXSize * bin.x,
            minY: bottom + binYSize * adjustedY,
            maxX: left + binXSize * (bin.x + 1),
            maxY: bottom + binYSize * (adjustedY + 1),
            centerX: left + binXSize * (bin.x + 0.5),
            centerY: bottom + binYSize * (adjustedY + 0.5),
            width: binXSize,
            height: binYSize
        };
    };

    /**
     * Returns the JSON representation of this tile pyramid as a string.
     * @memberof AreaOfInterestTilePyramid
     *
     * @returns {String} The bounds object.
     */
    AreaOfInterestTilePyramid.prototype.toJSON = function() {
        return '{'+
            '"type": "AreaOfInterest",' +
            '"minX": this.minX,' +
            '"maxX": this.maxX,' +
            '"minY": this.minY,' +
            '"maxY": this.maxY' +
        '}';
    };

	module.exports = AreaOfInterestTilePyramid;

}());

},{}],3:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @package binning
 */
( function() {

    "use strict";

    /**
     * Instantiate a TileIterator object.

     * @class TileIterator
     * @classdesc A TileIterator class, the equivalent of TileIterator
     *            in tile-service/binning-utilities.
     *
     * @param {Object} spec - The specification object.
     */
    function TileIterator( spec ) {
        this.pyramid = spec.pyramid;
        this.level = spec.level;
        this.minTile = spec.pyramid.rootToTile( spec.minX, spec.minY, spec.level );
        this.maxTile = spec.pyramid.rootToTile( spec.maxX, spec.maxY, spec.level );
        this.curX = this.minTile.xIndex;
        this.curY = this.minTile.yIndex;
    }

    /**
     * Returns true if there is another tile, false if there isn't.
     * @memberof TileIterator
     *
     * @returns {boolean} Whether or not a next tile exists.
     */
    TileIterator.prototype.hasNext = function() {
        return (this.curX <= this.maxTile.xIndex &&
                this.curY <= this.maxTile.yIndex);
    };

    /**
     * Returns the next tile in the iterator.
     * @memberof TileIterator
     *
     * @returns {Object} The next tile object.
     */
    TileIterator.prototype.next = function() {
        var tile = {
            xIndex: this.curX,
            yIndex: this.curY,
            level: this.level,
            xBinCount: 256,
            yBinCount: 256
        };
        this.curX = this.curX + 1;
        if ( this.curX > this.maxTile.xIndex ) {
            this.curX = this.minTile.xIndex;
            this.curY = this.curY + 1;
        }
        return tile;
    };

    /**
     * Returns an array of all remaining tiles the iterator.
     * @memberof TileIterator
     *
     * @returns {Array} All tiles left in the iterator.
     */
    TileIterator.prototype.getRest = function () {
        var all = [];
        while (this.hasNext()) {
            all[all.length] = this.next();
        }
        return all;
    };

    /**
     * Returns a string containing all remaining tile indices in the iterator.
     * @memberof TileIterator
     *
     * @returns {String} The next tile object.
     */
    TileIterator.prototype.toString = function () {
        var srep = "", index;
        while ( this.hasNext() ) {
            if ( srep.length > 0 ) {
                srep = srep + "|";
            }
            index = this.next();
            srep = srep + "["+index.xIndex+"/"+index.xBinCount+","+index.yIndex+"/"+index.yBinCount+", lvl "+index.level+"]";
        }
        return srep;
    };

    /**
     * Returns the tile bounds of all tiles within the iterator.
     * @memberof TileIterator
     *
     * @returns {Object} The tile bounds of the iterator.
     */
    TileIterator.prototype.toTileBounds = function () {
        return {
            'minX': this.minTile.xIndex,
            'maxX': this.maxTile.xIndex,
            'minY': this.minTile.yIndex,
            'maxY': this.maxTile.yIndex,
            'minZ': this.level,
            'maxZ': this.level
        };
    };

    module.exports = TileIterator;
}());


},{}],4:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

	"use strict";

	var EPSG_900913_SCALE_FACTOR = 20037508.342789244,
	    EPSG_900913_LATITUDE = 85.05112878,
	    DEGREES_TO_RADIANS = Math.PI / 180.0,	// Factor for changing degrees to radians
	    RADIANS_TO_DEGREES = 180.0 / Math.PI;	// Factor for changing radians to degrees

	function rootToTileMercator( lon, lat, level ) {
		var latR = lat * DEGREES_TO_RADIANS,
		    pow2 = 1 << level,
		    x = (lon + 180.0) / 360.0 * pow2,
		    y = (pow2 * (1 - Math.log(Math.tan(latR) + 1 / Math.cos(latR)) / Math.PI) / 2);
		return {
            x: x,
            y: pow2 - y
        };
	}

    function sinh( arg ) {
        return (Math.exp(arg) - Math.exp(-arg)) / 2.0;
    }

	function tileToLon( x, level ) {
		var pow2 = 1 << level;
		return x / pow2 * 360.0 - 180.0;
	}

	function tileToLat( y, level ) {
		var pow2 = 1 << level,
		    n    = -Math.PI + (2.0 * Math.PI * y) / pow2;
		return Math.atan(sinh(n)) * RADIANS_TO_DEGREES;
	}

	function linearToGudermannian( value ) {
		function gudermannian( y ) {
			// converts a y value from -PI(bottom) to PI(top) into the
			// mercator projection latitude
			return Math.atan(sinh(y)) * RADIANS_TO_DEGREES;
		}
		return gudermannian( (value / EPSG_900913_LATITUDE) * Math.PI );
	}

	function gudermannianToLinear(value) {
		function gudermannianInv( latitude ) {
			// converts a latitude value from -EPSG_900913_LATITUDE to EPSG_900913_LATITUDE into
			// a y value from -PI(bottom) to PI(top)
			var sign = ( latitude !== 0 ) ? latitude / Math.abs(latitude) : 0,
			    sin = Math.sin(latitude * DEGREES_TO_RADIANS * sign);
			return sign * (Math.log((1.0 + sin) / (1.0 - sin)) / 2.0);
		}
		return (gudermannianInv( value ) / Math.PI) * EPSG_900913_LATITUDE;
	}

    /**
     * Instantiate a WebMercatorTilePyramid object.
     * @class WebMercatorTilePyramid
     * @classdesc A TilePyramid implementation, the equivalent of WebMercatorTilePyramid
     *            in tile-service/binning-utilities.
     */
	function WebMercatorTilePyramid() {
        this.minX = -180.0;
        this.minY = -85.05;
        this.maxX = 180.0;
        this.maxY = 85.05;
        return this;
    }

    /**
     * Returns the projection code associated with the pyramid.
     * @memberof WebMercatorTilePyramid
     *
     * @returns {string} The projection code.
     */
    WebMercatorTilePyramid.prototype.getProjection = function(){
        return "EPSG:900913";
    };

    /**
     * Returns the tile scheme associated with the pyramid.
     * @memberof WebMercatorTilePyramid
     *
     * @returns {string} The scheme code.
     */
    WebMercatorTilePyramid.prototype.getTileScheme = function() {
        return "TMS";
    };

    /**
     * Maps a fractional tile coordinate to a point in the root coordinate system.
     * @memberof WebMercatorTilePyramid
     *
     * @param {Object} tile - The fractional tile coordinate.
     *
     * @returns {Object} The root coordinate.
     */
    WebMercatorTilePyramid.prototype.fractionalTileToRoot = function( tile ) {
        return {
            lon: tileToLon( tile.xIndex, tile.level ),
            lat: tileToLat( tile.yIndex, tile.level )
        };
    };

    /**
     * Maps a point from the root coordinate system to a fractional tile coordinate.
     * @memberof WebMercatorTilePyramid
     *
     * @param {number} lon - The longitude coordinate value.
     * @param {number} lat - The latitude coordinate value.
     * @param {integer} level - The zoom level.
     * @param {integer} bins - The number of bins per dimension in a tile.
     *
     * @returns {Object} The fractional tile coordinate.
     */
    WebMercatorTilePyramid.prototype.rootToFractionalTile = function( lon, lat, level, bins ) {
		bins = bins || 256;
        var tileMercator = rootToTileMercator( lon, lat, level );
        return {
            level: level,
            xIndex: tileMercator.x,
            yIndex: tileMercator.y,
            xBinCount: bins,
            yBinCount: bins
        };
    };

    /**
     * Maps a point from the root coordinate system to a tile coordinate.
     * @memberof WebMercatorTilePyramid
     *
     * @param {number} lon - The longitude coordinate value.
     * @param {number} lat - The latitude coordinate value.
     * @param {integer} level - The zoom level.
     * @param {integer} bins - The number of bins per dimension in a tile.
     *
     * @returns {Object} The tile coordinate.
     */
    WebMercatorTilePyramid.prototype.rootToTile = function( lon, lat, level, bins ) {
		var result = this.rootToFractionalTile( lon, lat, level, bins );
		result.xIndex = Math.floor( result.xIndex );
		result.yIndex = Math.floor( result.yIndex );
		return result;
    };

	/**
     * Maps a point from the root coordinate system to a specific fractional
	 * bin coordinate.
     * @memberof WebMercatorTilePyramid
     *
     * @param {number} lon - The longitude coordinate value.
     * @param {number} lat - The latitude coordinate value.
     * @param {Object} tile - The tile coordinate that holds the target bin.
     *
     * @returns {Object} The bin coordinate.
     */
    WebMercatorTilePyramid.prototype.rootToFractionalBin = function( lon, lat, tile ) {
        var tileMercator = rootToTileMercator( lon, lat, tile.level );
        return {
            x: (tileMercator.x - tile.xIndex) * tile.xBinCount,
            y: tile.yBinCount - 1 - (tileMercator.y - tile.yIndex ) * tile.yBinCount
        };
    };

    /**
     * Maps a point from the root coordinate system to a specific bin coordinate.
     * @memberof WebMercatorTilePyramid
     *
     * @param {number} lon - The longitude coordinate value.
     * @param {number} lat - The latitude coordinate value.
     * @param {Object} tile - The tile coordinate that holds the target bin.
     *
     * @returns {Object} The bin coordinate.
     */
    WebMercatorTilePyramid.prototype.rootToBin = function( lon, lat, tile ) {
		var result = this.rootToFractionalBin( lon, lat, tile );
		result.x = Math.floor( result.x );
		result.y = Math.floor( result.y );
        return result;
    };

    /**
     * Returns the bounds of a particular tile in EPSG 900913 meter units.
     * @memberof WebMercatorTilePyramid
     *
     * @param {Object} tile - The tile coordinate.
     * @param {Object} bin - The bin coordinate.
     *
     * @returns {Object} The bounds object.
     */
    WebMercatorTilePyramid.prototype.getEPSG900913Bounds = function( tile, bin ) {
        var pow2 = 1 << tile.level,
            tileIncrement = 1.0/pow2,
            minX = tile.xIndex * tileIncrement - 0.5,
            minY = tile.yIndex * tileIncrement - 0.5,
            maxX,
            maxY,
            linMinY,
            linMaxY,
            binXInc,
            binYInc,
            centerY;

        if ( bin ) {
            maxX = minX + tileIncrement;
            maxY = minY + tileIncrement;
        } else {
            binXInc = tileIncrement / tile.xBinCount;
            binYInc = tileIncrement / tile.yBinCount;
            minX = minX + bin.x * binXInc;
            minY = minY + (tile.yBinCount - bin.y - 1) * binYInc;
            maxX = minX + binXInc;
            maxY = minY + binYInc;
        }

        // as mercator latitude cannot be linearly interpolated, convert the gudermannian
        // coordinates back into their equivalent linear counterparts. Interpolate these,
        // then convert to the equivalent gudermannian coordinate.
        linMaxY = gudermannianToLinear( maxY );
        linMinY = gudermannianToLinear( minY );
        centerY = linearToGudermannian( (linMaxY+linMinY)/2 );

        return {
            minX:    minX * 2.0 * EPSG_900913_SCALE_FACTOR,
            minY:    minY * 2.0 * EPSG_900913_SCALE_FACTOR,
            maxX:    maxX * 2.0 * EPSG_900913_SCALE_FACTOR,
            maxY:    maxY * 2.0 * EPSG_900913_SCALE_FACTOR,
            centerX: (minX + maxX) * EPSG_900913_SCALE_FACTOR, // (minX+maxX)/2.0*2.0 optimized to (minX+maxX)
            centerY: centerY * 2.0 * EPSG_900913_SCALE_FACTOR,
            width:   (maxX - minX) * 2.0 * EPSG_900913_SCALE_FACTOR,
            height:  (maxY - minY) * 2.0 * EPSG_900913_SCALE_FACTOR
        };
    };

    /**
     * Returns the bounds of a particular tile in the root coordinate system.
     * @memberof WebMercatorTilePyramid
     *
     * @param {Object} tile - The tile coordinate.
     *
     * @returns {Object} The bounds object.
     */
    WebMercatorTilePyramid.prototype.getTileBounds = function( tile ) {
        var level = tile.level,
            north = tileToLat( tile.yIndex+1, level ),
            south = tileToLat( tile.yIndex, level ),
            east = tileToLon( tile.xIndex+1, level ),
            west = tileToLon( tile.xIndex, level ),
            // as mercator latitude cannot be linearly interpolated, convert the gudermannian
            // coordinates back into their equivalent linear counterparts. Interpolate these,
            // then convert to the equivalent gudermannian coordinate.
            linNorth = gudermannianToLinear( north ),
            linSouth = gudermannianToLinear( south ),
            centerY = linearToGudermannian( (linNorth+linSouth)/2.0 );
        return {
            minX: west,
            minY: south,
            maxX: east,
            maxY: north,
            centerX: (east+west)/2.0,
            centerY: centerY,
            width: (east-west),
            height: (north-south)
        };
    };

    /**
     * Returns the bounds of a particular bin in the root coordinate system.
     * @memberof WebMercatorTilePyramid
     *
     * @param {Object} tile - The tile coordinate.
     * @param {Object} bin - The bin coordinate.
     *
     * @returns {Object} The bounds object.
     */
    WebMercatorTilePyramid.prototype.getBinBounds = function( tile, bin ) {
        var level = tile.level,
            binXInc = 1.0 / tile.xBinCount,
            baseX = tile.xIndex + bin.x * binXInc,
            binYInc = 1.0 / tile.yBinCount,
            baseY = tile.yIndex + (tile.yBinCount - 1 - bin.y) * binYInc,
            north = tileToLat(baseY + binYInc, level),
            south = tileToLat(baseY, level),
            east = tileToLon(baseX + binXInc, level),
            west = tileToLon(baseX, level),
            // as mercator latitude cannot be linearly interpolated, convert the gudermannian
            // coordinates back into their equivalent linear counterparts. Interpolate these,
            // then convert to the equivalent gudermannian coordinate.
            linNorth = gudermannianToLinear(north),
            linSouth = gudermannianToLinear(south),
            centerY = linearToGudermannian( (linNorth+linSouth)/2.0 );
        return {
            minX: west,
            minY: south,
            maxX: east,
            maxY: north,
            centerX: (east+west)/2.0,
            centerY: centerY,
            width: (east-west),
            height: (north-south)
        };
    };

    /**
     * Returns the JSON representation of this tile pyramid as a string.
     * @memberof WebMercatorTilePyramid
     *
     * @returns {String} The bounds object.
     */
    WebMercatorTilePyramid.prototype.toJSON = function () {
        return '{'+
            '"type": "WebMercator"'+
        '}';
    };

	module.exports = WebMercatorTilePyramid;
}());

},{}],5:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Layer = require('./Layer'),
        LayerUtil = require('./LayerUtil'),
        Util = require('../util/Util'),
        AnnotationService = require('../rest/AnnotationService'),
        HtmlTileLayer = require('./HtmlTileLayer'),
        PubSub = require('../util/PubSub');

    /**
     * Ensures an annotation object meets the minimum attribute requirements.
     *
     * @param {Object} annotation - The annotation object.
     *
     * @returns {boolean} Whether or not the input is valid.
     */
    function isAnnotationInputValid( annotation ) {
        if ( annotation.x === undefined ) {
            console.error( "Annotation argument is missing the 'x' attribute");
            return false;
        }
        if ( annotation.y === undefined ) {
            console.error( "Annotation argument is missing the 'y' attribute");
            return false;
        }
        if ( annotation.level === undefined ) {
            console.error( "Annotation argument is missing the 'level' attribute");
            return false;
        }
        if ( annotation.range === undefined ) {
            console.error( "Annotation argument is missing the 'range' attribute");
            return false;
        }
        if ( annotation.group === undefined ) {
            console.error( "Annotation argument is missing the 'group' attribute");
            return false;
        }
        if ( annotation.data === undefined ) {
            console.error( "Annotation argument is missing the 'data' attribute");
            return false;
        }
        return true;
    }

    /**
     * Instantiate an AnnotationLayer object.
     * @class AnnotationLayer
     * @augments Layer
     * @classdesc A client rendered layer object. Uses JSON data retrieved from the
     *            server in conjunction with a Renderer object or html function to
     *            create interactable DOM elements. AnnotationLayers differ from
     *            ClientLayers in that the data they represent is mutable.
     *
     * @param {Object} spec - The specification object.
     * <pre>
     * {
     *     opacity  {float}    - The opacity of the layer. Default = 1.0
     *     enabled  {boolean}  - Whether the layer is visible or not. Default = true
     *     zIndex   {integer}  - The z index of the layer. Default = 1000
     *     renderer {Renderer} - The tile renderer object.
     * }
     * </pre>
     */
    function AnnotationLayer( spec ) {
        var that = this,
            getURL = spec.getURL || LayerUtil.getURL;
        // call base constructor
        Layer.call( this, spec );
        // set reasonable defaults
        this.zIndex = ( spec.zIndex !== undefined ) ? parseInt( spec.zIndex, 10 ) : 500;
        this.filter = spec.filter || {};
        this.domain = "annotation";
        this.source = spec.source;
        this.getURL = function( bounds ) {
            return getURL.call( this, bounds ) + that.getQueryParamString();
        };
        if ( spec.tileClass) {
            this.tileClass = spec.tileClass;
        }
        if ( spec.renderer ) {
            this.setRenderer( spec.renderer );
        }
    }

    AnnotationLayer.prototype = Object.create( Layer.prototype );

    /**
     * Activates the layer object. This should never be called manually.
     * @memberof AnnotationLayer
     * @private
     */
    AnnotationLayer.prototype.activate = function() {
        // add the new layer
        this.olLayer = new HtmlTileLayer(
            'Annotation Tile Layer',
            this.source.tms,
            {
                layername: this.source.id,
                type: 'json',
                maxExtent: new OpenLayers.Bounds(-20037500, -20037500,
                    20037500,  20037500),
                isBaseLayer: false,
                getURL: this.getURL,
                tileClass: this.tileClass,
                renderer: this.renderer
            });
        // set whether it is enabled or not before attaching, to prevent
        // needless tile requests
        this.setEnabled( this.isEnabled() );
        this.setTheme( this.map.getTheme() );
        this.setOpacity( this.getOpacity() );
        this.setBrightness( this.getBrightness() );
        this.setContrast( this.getContrast() );
        // publish activate event before appending to map
        PubSub.publish( this.getChannel(), { field: 'activate', value: true } );
        // attach to map
        this.map.olMap.addLayer( this.olLayer );
        // set z-index after
        this.setZIndex( this.zIndex );
        // publish add event
        PubSub.publish( this.getChannel(), { field: 'add', value: true } );
    };

    /**
     * Dectivates the layer object. This should never be called manually.
     * @memberof AnnotationLayer
     * @private
     */
    AnnotationLayer.prototype.deactivate = function() {
        if ( this.olLayer ) {
            this.map.olMap.removeLayer( this.olLayer );
            PubSub.publish( this.getChannel(), { field: 'remove', value: true } );
            this.olLayer.destroy();
            this.olLayer = null;
        }
        PubSub.publish( this.getChannel(), { field: 'deactivate', value: true } );
    };

    /**
     * Sets the current renderer of the layer.
     * @memberof AnnotationLayer
     *
     * @param {Renderer} renderer - The renderer to attach to the layer.
     */
     AnnotationLayer.prototype.setRenderer = function( renderer ) {
        this.renderer = renderer;
        this.renderer.attach( this );
    };

    /**
     * Updates the theme associated with the layer.
     * @memberof AnnotationLayer
     *
     * @param {String} theme - The theme identifier string.
     */
    AnnotationLayer.prototype.setTheme = function( theme ) {
        this.theme = theme;
    };

    /**
     * Get the current theme for the layer.
     * @memberof AnnotationLayer
     *
     * @returns {String} The theme identifier string.
     */
    AnnotationLayer.prototype.getTheme = function() {
        return this.theme;
    };

    /**
     * Set the z index of the layer.
     * @memberof AnnotationLayer
     *
     * @param {integer} zIndex - The new z-order value of the layer, where 0 is front.
     */
    AnnotationLayer.prototype.setZIndex = function ( zIndex ) {
        // we by-pass the OpenLayers.Map.setLayerIndex() method and manually
        // set the z-index of the layer dev. setLayerIndex sets a relative
        // index based on current map layers, which then sets a z-index. This
        // caused issues with async layer loading.
        this.zIndex = zIndex;
        if ( this.olLayer ) {
            $( this.olLayer.div ).css( 'z-index', zIndex );
        }
        PubSub.publish( this.getChannel(), { field: 'zIndex', value: zIndex });
    };

    /**
     * Get the layers zIndex.
     * @memberof AnnotationLayer
     *
     * @returns {integer} The zIndex for the layer.
     */
    AnnotationLayer.prototype.getZIndex = function () {
        return this.zIndex;
    };

    /**
     * Write the a new annotation to the layer.
     * @memberof AnnotationLayer
     *
     * @param {Object} annotation - The target annotation.
     * @param {Function} callback - The callback function executing on success.
     */
    AnnotationLayer.prototype.write = function( annotation, callback ) {
        if ( !isAnnotationInputValid( annotation ) ) {
            return;
        }
        AnnotationService.writeAnnotation(
            this.source.id,
            annotation,
            function() {
                // TODO: refresh tile
                callback();
            });
    };

    /**
     * Modify an existing annotation in the layer.
     * @memberof AnnotationLayer
     *
     * @param {Object} annotation - The target annotation.
     * @param {Function} callback - The callback function executing on success.
     */
    AnnotationLayer.prototype.modify = function( annotation, callback ) {
        if ( !isAnnotationInputValid( annotation ) ) {
            return;
        }
        AnnotationService.modifyAnnotation(
            this.source.id,
            annotation,
            function() {
                // TODO: refresh tile
                callback();
            });
    };

    /**
     * Remove an existing annotation from the layer.
     * @memberof AnnotationLayer
     *
     * @param {Object} certificate - The target annotation certificate.
     * @param {Function} callback - The callback function executing on success.
     */
    AnnotationLayer.prototype.remove = function( certificate, callback ) {
        AnnotationService.removeAnnotation(
            this.source.id,
            certificate,
            function() {
               // TODO: refresh tile
                callback();
            });
    };

	/**
     * Set the layer's filter function type.
     * @memberof AnnotationLayer
     *
     * @param {String} filterType - The annotation filter type.
     */
    AnnotationLayer.prototype.setFilterType = function ( filterType ) {
        if ( this.filter.type !== filterType ) {
            this.filter.type = filterType;
            this.redraw();
            PubSub.publish( this.getChannel(), {field: 'filterType', value: filterType} );
        }
    };

    /**
     * Get the layers filter type.
     * @memberof AnnotationLayer
     *
     * @return {String} The tile filter type.
     */
    AnnotationLayer.prototype.getFilterType = function () {
        return this.filter.type;
    };


	/**
     * Set the annotation filter data attribute
     * @memberof AnnotationLayer
     *
     * @param {Object} filterData - The filter data attribute.
     */
    AnnotationLayer.prototype.setFilterData = function ( filterData ) {
        if ( this.filter.data !== filterData ) {
            this.filter.data = filterData;
            this.redraw();
            PubSub.publish( this.getChannel(), {field: 'filterData', value: filterData} );
        }
    };

	/**
     * Get the filter data attribute.
     * @memberof AnnotationLayer
     *
     * @returns {Object} The tile filter data attribute.
     */
    AnnotationLayer.prototype.getFilterData = function () {
        return this.filter.data || {};
    };

    /**
     * Generate query parameters based on state of layer
     * @memberof AnnotationLayer
     *
     * @returns {String} The query parameter string based on the attributes of this layer.
     */
     AnnotationLayer.prototype.getQueryParamString = function() {
        var query = {
            filter: this.filter
        };
        return Util.encodeQueryParams( query );
    };

    /**
     * Redraws the entire layer.
     * @memberof ServerLayer
     */
    AnnotationLayer.prototype.redraw = function () {
        if ( this.olLayer ) {
            this.olLayer.redraw();
            // If we're using the TileManager we need to force it into a refresh. There is no nice way to
            // do this as of 2.13.1, so we fake the expiry of the move/zoom timeout.
            if ( this.olLayer.map && this.olLayer.map.tileManager ) {
                this.olLayer.map.tileManager.updateTimeout(
                    this.olLayer.map,
                    this.olLayer.map.tileManager.zoomDelay,
                    true );
            }
        }
    };

    module.exports = AnnotationLayer;
}());

},{"../rest/AnnotationService":47,"../util/PubSub":59,"../util/Util":60,"./HtmlTileLayer":13,"./Layer":15,"./LayerUtil":16}],6:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Layer = require('./Layer'),
        LayerUtil = require('./LayerUtil'),
        UnivariateTileLayer = require('./UnivariateTileLayer'),
        PubSub = require('../util/PubSub');

    /**
     * Instantiate a AxisLayer object.
     * @class AxisLayer
     * @augments Layer
     * @classdesc A axis rendered layer object. Uses data received from the server and
     *            renders it over the axis.
     *
     * @param {Object} spec - The specification object.
     * <pre>
     * {
     *     opacity  {float}    - The opacity of the layer. Default = 1.0
     *     enabled  {boolean}  - Whether the layer is visible or not. Default = true
     *     zIndex   {integer}  - The z index of the layer. Default = 1000
     *     renderer {Renderer} - The tile renderer object.
     * }
     * </pre>
     */
    function AxisLayer( spec ) {
        // call base constructor
        Layer.call( this, spec );
        // set reasonable defaults
        this.zIndex = ( spec.zIndex !== undefined ) ? parseInt( spec.zIndex, 10 ) : 1500;
        this.domain = "axis";
        this.source = spec.source;
        this.getURL = spec.getURL || LayerUtil.getURL;
        this.dimension = spec.dimension || 'x';
        if ( spec.tileClass) {
            this.tileClass = spec.tileClass;
        }
        if ( spec.renderer ) {
            this.setRenderer( spec.renderer );
        }
    }

    AxisLayer.prototype = Object.create( Layer.prototype );

    /**
     * Activates the layer object. This should never be called manually.
     * @memberof AxisLayer
     * @private
     */
    AxisLayer.prototype.activate = function() {
        // add the new layer
        this.olLayer = new UnivariateTileLayer(
            'Axis Rendered Tile Layer',
            this.source.tms,
            {
                layername: this.source.id,
                type: 'json',
                maxExtent: new OpenLayers.Bounds(-20037500, -20037500,
                    20037500,  20037500),
                isBaseLayer: false,
                getURL: this.getURL,
                tileClass: this.tileClass,
                renderer: this.renderer,
                dimension: this.dimension
            });
        // set whether it is enabled or not before attaching, to prevent
        // needless tile requests
        this.setEnabled( this.isEnabled() );
        this.setTheme( this.map.getTheme() );
        this.setOpacity( this.getOpacity() );
        this.setBrightness( this.getBrightness() );
        this.setContrast( this.getContrast() );
        // publish activate event before appending to map
        PubSub.publish( this.getChannel(), { field: 'activate', value: true } );
        // attach to map
        this.map.olMap.addLayer( this.olLayer );
        // set z-index after
        this.setZIndex( this.zIndex );
        // publish add event
        PubSub.publish( this.getChannel(), { field: 'add', value: true } );
    };

    /**
     * Dectivates the layer object. This should never be called manually.
     * @memberof AxisLayer
     * @private
     */
    AxisLayer.prototype.deactivate = function() {
        if ( this.olLayer ) {
            this.map.olMap.removeLayer( this.olLayer );
            PubSub.publish( this.getChannel(), { field: 'remove', value: true } );
            this.olLayer.destroy();
            this.olLayer = null;
        }
        PubSub.publish( this.getChannel(), { field: 'deactivate', value: true } );
    };

    /**
     * Sets the current renderer of the layer.
     * @memberof AxisLayer
     *
     * @param {Renderer} renderer - The renderer to attach to the layer.
     */
     AxisLayer.prototype.setRenderer = function( renderer ) {
        this.renderer = renderer;
        this.renderer.attach( this );
    };

    /**
     * Updates the theme associated with the layer.
     * @memberof AxisLayer
     *
     * @param {String} theme - The theme identifier string.
     */
    AxisLayer.prototype.setTheme = function( theme ) {
        this.theme = theme;
    };

    /**
     * Get the current theme for the layer.
     * @memberof AxisLayer
     *
     * @returns {String} The theme identifier string.
     */
    AxisLayer.prototype.getTheme = function() {
        return this.theme;
    };

    /**
     * Set the z index of the layer.
     * @memberof AxisLayer
     *
     * @param {integer} zIndex - The new z-order value of the layer, where 0 is front.
     */
    AxisLayer.prototype.setZIndex = function ( zIndex ) {
        // we by-pass the OpenLayers.Map.setLayerIndex() method and manually
        // set the z-index of the layer dev. setLayerIndex sets a relative
        // index based on current map layers, which then sets a z-index. This
        // caused issues with async layer loading.
        this.zIndex = zIndex;
        if ( this.olLayer ) {
            $( this.olLayer.div ).css( 'z-index', zIndex );
        }
        PubSub.publish( this.getChannel(), { field: 'zIndex', value: zIndex });
    };

    /**
     * Get the layers zIndex.
     * @memberof AxisLayer
     *
     * @returns {integer} The zIndex for the layer.
     */
    AxisLayer.prototype.getZIndex = function () {
        return this.zIndex;
    };

    /**
     * Redraws the entire layer.
     * @memberof AxisLayer
     */
    AxisLayer.prototype.redraw = function () {
        if ( this.olLayer ) {
            this.olLayer.redraw();
            // If we're using the TileManager we need to force it into a refresh. There is no nice way to
            // do this as of 2.13.1, so we fake the expiry of the move/zoom timeout.
            if ( this.olLayer.map && this.olLayer.map.tileManager ) {
                this.olLayer.map.tileManager.updateTimeout(
                    this.olLayer.map,
                    this.olLayer.map.tileManager.zoomDelay,
                    true );
            }
        }
    };

    module.exports = AxisLayer;
}());

},{"../util/PubSub":59,"./Layer":15,"./LayerUtil":16,"./UnivariateTileLayer":22}],7:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

	"use strict";

	var Layer = require('./Layer'),
		PubSub = require('../util/PubSub');

    /**
     * Instantiate a BaseLayer object.
     * @class BaseLayer
     * @augments Layer
     * @classdesc A base layer object that serves as the underlying layer of the
     *            map. Supports blank baselayers that are simply a color, geographic
     *            baselayers using the Google Maps API, or standard TMS layers.
     *
     * @param spec {Object} The specification object.
     * <pre>
     * {
     *     type    {String}  - The type of baselayer, ["Blank", "Google", "TMS"]. Default = "Blank"
     *     opacity {float}   - The opacity of the layer. Default = 1.0
     *     enabled {boolean} - Whether the layer is visible or not. Default = true
     *     url     {String}  - if TMS layer, the url for tile requests. Default = undefined
     *     options {Object}  - type specific instantiation attributes. Default = {color:rgb(0,0,0)}
     * }
     *</pre>
     */
	 /*
	 * Edit By RilaShu 2018/03/06
	 * case addtion "WMTS"
	 * @param spec Addtion for WMTS (Tianditu)
	 * layername	{String} The layer identifier.  See the layer property.
     * style	{String} The layer style identifier.  See the style property.
     * matrixSet	{String} The tile matrix set identifier.  See the matrixSet property.
	 */
	function BaseLayer( spec ) {
        spec = spec || {};
        // call base constructor
        Layer.call( this, spec );
        // set defaults
        this.type = spec.type || "blank";
		this.url = spec.url;
		this.attribution = spec.attribution;
        this.options = spec.options || {
            color : "rgb(0,0,0)"
        };
        this.domain = "base";
		//set defaults addtion for WMTS
		this.layername = spec.layername || "vec";
		this.style = spec.style || "default";
		this.matrixSet = spec.matrixSet || "c";
    }

    BaseLayer.prototype = Object.create( Layer.prototype );

    /**
     * Activates the layer object. This should never be called manually.
     * @memberof BaseLayer
     * @private
     */
    BaseLayer.prototype.activate = function() {
        var styledMapType;
		// create base layer based on input type
        switch ( this.type.toLowerCase() ) {
            case "blank":
				// blank layer
                this.olLayer = new OpenLayers.Layer.Vector( "BaseLayer", {} );
				var mapElem = $( this.map.getElement() );
				mapElem.css( 'background-color', '' );
				mapElem.attr( 'style', mapElem.attr('style') + "; background-color: " + this.options.color +" !important" );
                break;
            case "google":
				// google maps layer
                if ( this.options.styles ) {
                    this.options.type = "styled";
                }
                this.olLayer = new OpenLayers.Layer.Google( "BaseLayer", this.options );
                break;
            case "tms":
				// tms layer
                this.olLayer = new OpenLayers.Layer.TMS( "BaseLayer", this.url, this.options );
                break;
			case "xyz":
				// xyz layer
                this.olLayer = new OpenLayers.Layer.XYZ( "BaseLayer", this.url, this.options );
                break;
			case "wmts":
			    // wmts layer
				this.olLayer = new OpenLayers.Layer.WMTS({name:"BaseLayer",url:this.url,layer:this.layername,style:this.style,matrixSet:this.matrixSet});
				break;
        }
		if ( this.attribution ) {
			$( this.map.getElement() ).append(
				'<div class=baselayer-attribution>' +
				this.attribution +
				'</div>' );
		}
        // publish activate event before appending to map
        PubSub.publish( this.getChannel(), { field: 'activate', value: true } );
		// create baselayer and set as baselayer
        this.map.olMap.addLayer( this.olLayer );
        this.map.olMap.setBaseLayer( this.olLayer );
		// if google maps layer, set styles according to spec
        if ( this.options.styles ) {
            styledMapType = new google.maps.StyledMapType( this.options.styles, {name: 'Styled Map'} );
            this.olLayer.mapObject.mapTypes.set( 'styled', styledMapType );
        }
		if ( this.olLayer.mapObject ) {
			var gmapContainer = this.olLayer.mapObject.getDiv();
			$( gmapContainer ).css( "background-color", "rgba(0,0,0,0)" );
		}
        // ensure baselayer remains bottom layer
		$( this.olLayer.div ).css( 'z-index', -1 );
        // reset visibility / opacity
        this.setOpacity( this.getOpacity() );
        this.setEnabled( this.isEnabled() );
        this.setBrightness( this.getBrightness() );
        this.setContrast( this.getContrast() );
        // publish add event
        PubSub.publish( this.getChannel(), { field: 'add', value: true } );
    };

    /**
     * Dectivates the layer object. This should never be called manually.
     * @memberof BaseLayer
     * @private
     */
    BaseLayer.prototype.deactivate = function() {
        if ( this.olLayer ) {
            this.map.olMap.removeLayer( this.olLayer );
            PubSub.publish( this.getChannel(), { field: 'remove', value: true } );
            this.olLayer.destroy();
        }
		if ( this.attribution ) {
			$( this.map.getElement() ).find('.baselayer-attribution').remove();
		}
        this.map.getElement().style['background-color'] = '';
        PubSub.publish( this.getChannel(), { field: 'deactivate', value: true } );
    };

	/**
     * Set the z index of the layer.
     * @memberof BaseLayer
     *
     * @param {integer} zIndex - The new z-order value of the layer, where 0 is front.
     */
	BaseLayer.prototype.resetZIndex = function () {
        // we by-pass the OpenLayers.Map.setLayerIndex() method and manually
        // set the z-index of the layer dev. setLayerIndex sets a relative
        // index based on current map layers, which then sets a z-index. This
        // caused issues with async layer loading.
        if ( this.olLayer ) {
            $( this.olLayer.div ).css( 'z-index', -1 );
        }
        PubSub.publish( this.getChannel(), { field: 'zIndex', value: -1 });
    };

	module.exports = BaseLayer;
}());

},{"../util/PubSub":59,"./Layer":15}],8:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Layer = require('./Layer'),
        ClientLayer = require('./ClientLayer'),
        LayerUtil = require('./LayerUtil'),
        Util = require('../util/Util'),
        HtmlTileLayer = require('./HtmlTileLayer'),
        PubSub = require('../util/PubSub');

    /**
     * Returns a function which, based on the carousel index for the particular
     * tile, will use the specification values from the associated layer to
     * pull tile data from the server.
     *
     * @param {Carousel} carousel - The carousel object.
     *
     * @returns {Function} The getURL function for the carousel.
     */
    function getURLFunction( carousel ) {
        return function( bounds ) {
            var tileIndex = LayerUtil.getTileIndex( this, bounds ),
                x = tileIndex.xIndex,
                y = tileIndex.yIndex,
                z = tileIndex.level,
                tilekey = z + "," + x + "," + y,
                layerIndex = carousel.getLayerIndexForTile( tilekey ),
                layerSpec = carousel.layerSpecs[ layerIndex ],
                type = layerSpec.type,
                url = layerSpec.url,
                layername = layerSpec.layername;
            if ( x >= 0 && y >= 0 ) {
                return url + layername + "/" + z + "/" + x + "/" + y + "." + type;
            }
        };
    }

    /**
     * Returns a function which, based on the carousel index for the particular
     * tile, will use the renderer from the associated layer.
     *
     * @param {Carousel} carousel - The carousel object.
     *
     * @returns {Function} The renderer function for the carousel.
     */
    function getRendererFunction( carousel ) {
        return function( bounds ) {
            var tilekey = LayerUtil.getTilekey( this, bounds ),
                layerIndex = carousel.getLayerIndexForTile( tilekey ),
                layerSpec = carousel.layerSpecs[ layerIndex ];
            return layerSpec.renderer;
        };
    }

    /**
     * OpenLayers stores tiles in a double array. To redraw an individual tile we
     * iterate through until we find the matching tilekey ( which is appended to
     * the tile in the HtmlTile class ).
     *
     * @param {OpenLayers.Layer} olLayer - The openlayers layer object.
     * @param {String} tilekey - The tile key string.
     */
    function redrawTile( olLayer, tilekey ) {
        var grid,
            i, j;
        for ( i=0; i<olLayer.grid.length; i++ ) {
            grid = olLayer.grid[i];
            for ( j=0; j<grid.length; j++ ) {
                if ( grid[j].tilekey === tilekey ) {
                    grid[j].draw( true );
                    return;
                }
            }
        }
    }

    /**
     * Patches the get/set functions of the attached layer in order to delegate
     * behaviour to and from the carousel.
     *
     * @param {Carousel} carousel - The carousel object.
     * @param {Layer} layer - The layer object to patch.
     */
    function patchLayer( carousel, layer ) {
        // override the layers opacity functions, setting the opacity of the carousel
        // will update the opacity of ALL layers.
        layer.setOpacity = function( opacity ) {
            var i;
            carousel.setOpacity( opacity );
            for ( i=0; i<carousel.layers.length; i++ ) {
                PubSub.publish( carousel.layers[i].getChannel(), { field: 'opacity', value: opacity } );
            }
        };
        layer.getOpacity = function() {
            return carousel.getOpacity();
        };
        // override the layers enable functions, enabling a particular layer
        // will disable all other layers attached to the carousel.
        layer.isEnabled = function() {
            if ( !carousel.isEnabled() ) {
                return false;
            }
            return carousel.layers.indexOf( layer ) === carousel.defaultIndex;
        };
        layer.setEnabled = function( enabled ) {
            var i;
            if ( enabled ) {
                carousel.setEnabled( true );
                carousel.setTileLayerIndices( carousel.layers.indexOf( layer ) );
                PubSub.publish( layer.getChannel(), { field: 'enabled', value: enabled } );
                for ( i=0; i<carousel.layers.length; i++ ) {
                    if ( carousel.layers[i] !== layer ) {
                        PubSub.publish( carousel.layers[i].getChannel(), { field: 'enabled', value: false } );
                    }
                }
            } else {
                carousel.setEnabled( false );
                PubSub.publish( layer.getChannel(), { field: 'enabled', value: false } );
            }
        };
        // override the layers z index functions
        layer.setZIndex = function( zIndex ) {
            carousel.setZIndex( zIndex );
        };
        layer.getZIndex = function() {
            return carousel.getZIndex();
        };
        // override the layers theme function
        layer.setTheme = function( theme ) {
            carousel.setTheme( theme );
        };
        // override redraw function
        layer.redraw = function() {
            carousel.olLayer.redraw();
        };
    }

        /**
         * Returns the layer to its original state be repairing the previously
         * patched methods.
         *
         * @param {Layer} layer - The layer object to patch.
         * @param {Object} layerSpec - The object containing the original methods.
         */
    function unpatchLayer( layer, layerSpec ) {
        // return all the layers functions to thier previous state
        layer.setOpacity = layerSpec.setOpacity;
        layer.getOpacity = layerSpec.getOpacity;
        layer.isEnabled = layerSpec.isEnabled;
        layer.setEnabled = layerSpec.setEnabled;
        layer.setZIndex = layerSpec.setZIndex;
        layer.setTheme = layerSpec.setTheme;
        layer.redraw = layerSpec.redraw;
    }

    /**
     * Instantiate a Carousel object to allow tile-by-tile control for all layers in
     * the carousel 'bundle'.
     * This object modifies the functionality from its bundled layer objects as follows:
     * <pre>
     *     1) Opacity is shared across all bundled layers.
     *     2) Z-Index is shared across all bundled layers.
     *     3) Theme is shared across all bundled layers.
     *     4) Enabling / disabling a layer will switch all tiles to that particular layer.
     * </pre>
     * @class Carousel
     * @augments Layer
     * @classdesc A carousel object to allow changing individual client renderered tiles.
     */
    function Carousel() {
        // call base constructor
        Layer.call( this, {} );
        // set reasonable defaults
        this.zIndex = 1500;
        this.domain = "carousel";
        this.layers = [];
        this.layerSpecs = [];
        this.indicesByTile = {};
        this.defaultIndex = 0;
    }

    Carousel.prototype = Object.create( ClientLayer.prototype );

    /**
     * Adds a client rendered layer to the carousel object. This involves
     * 'patching' the methods of the layer with those from the carousel to
     * give the required functionality.
     * @memberof Carousel
         *
     * @param {Layer} layer - The client rendered layer object.
     */
    Carousel.prototype.addLayer = function( layer ) {

        if ( !( layer instanceof ClientLayer ) ) {
            console.log( "Only ClientLayers can be added to a carousel object." );
            return;
        }

        if ( !this.map ) {
            // if there is no map it means that the carousel
            // has not been added yet, or the map is not ready
            // store the layer for later adding
            this.deferreds = this.deferreds || [];
            this.deferreds.push( layer );
            return;
        }

        // store the layer specification
        var layerSpec = {
                url: layer.source.tms,
                type: 'json',
                layername: layer.source.id,
                setOpacity: layer.setOpacity,
                getOpacity: layer.getOpacity,
                isEnabled: layer.isEnabled,
                setEnabled: layer.setEnabled,
                setZIndex: layer.setZIndex,
                setTheme: layer.setTheme,
                redraw: layer.redraw
            };
        // set the renderer parent to the carousel
        if ( layer.renderer ) {
            layerSpec.renderer = layer.renderer;
            layerSpec.renderer.meta = layer.source.meta.meta;
            layerSpec.renderer.parent = this;
        }
        layer.carousel = this;
        // store the layer and its specification
        this.layerSpecs.push( layerSpec );
        this.layers.push( layer );
        // patch the layer
        patchLayer( this, layer );
    };

    /**
     * Remove a layer from the carousel. This will 'unpatch' the
     * layers and return them to their original state.
     * @memberof Carousel
         *
     * @param {Layer} layer - The layer object.
     */
    Carousel.prototype.removeLayer = function( layer ) {

        if ( !this.map && this.deferreds ) {
            // if there is no map it means that the carousel
            // has not been added yet, so simply remove it from
            // the deferreds array.
            this.deferreds.splice( this.deferreds.indexOf( layer ), 1 );
            return;
        }

        var index = this.layers.indexOf( layer );
        if ( index !== -1 ) {
            if ( this.layers.length === 1 && this.map ) {
                console.log( 'A carousel must have at least one layer to be ' +
                             'attached to a map, remove the carousel from the map first.' );
                return;
            }
            if ( layer.renderer ) {
                // restore parent property of the renderer
                layer.renderer.parent = layer;
            }
            delete layer.carousel;
            unpatchLayer( layer, this.layerSpecs[ index ] );
            this.layers.splice( index, 1 );
            this.layerSpecs.splice( index, 1 );
            // set the default index accordingly
            if ( index < this.defaultIndex || this.defaultIndex === this.layers.length ) {
                this.defaultIndex--;
            }
            // reset view
            this.setTileLayerIndices( this.defaultIndex );
        }
    };

        /**
     * Activates the carousel object. This should never be called manually.
     * @memberof Carousel
     * @private
     */
    Carousel.prototype.activate = function() {

        if ( this.layers.length === 0 &&
            ( !this.deferreds || this.deferreds.length === 0 ) ) {
            console.log( 'A carousel must have at least one layer attached ' +
                         'before it can be added to a map.');
            return;
        }

        // add the new layer
        this.olLayer = new HtmlTileLayer(
            'Client Rendered Carousel Tile Layer',
            null,
            {
                layername: null,
                type: 'json',
                maxExtent: new OpenLayers.Bounds(-20037500, -20037500,
                    20037500,  20037500),
                isBaseLayer: false,
                getURL: getURLFunction( this ),
                renderer: getRendererFunction( this )
            });

        this.map.olMap.addLayer( this.olLayer );

        this.setZIndex( this.zIndex );
        this.setOpacity( this.opacity );
        this.setEnabled( this.enabled );
        this.setTheme( this.map.getTheme() );

        // if the layers are already attached to the map, remove them first.
        var i;
        for ( i=0; i<this.layers.length; i++ ) {
            this.map.remove( this.layers[i] );
        }

        // add all deferred layers, if they exist
        if ( this.deferreds ) {
            for ( i=0; i<this.deferreds.length; i++ ) {
                this.addLayer( this.deferreds[i] );
            }
            delete this.deferreds;
        }
    };

    /**
     * Increment which layer index the current tile points to. This will
     * redraw the modified tile.
     * @memberof Carousel
         *
     * @param {String} tilekey - The tile key string.
     */
    Carousel.prototype.incrementTileLayerIndex = function( tilekey ) {
        if ( this.indicesByTile[ tilekey ] === undefined ) {
            this.indicesByTile[ tilekey ] = ( this.defaultIndex + 1 ) % this.layers.length;
        } else {
            this.indicesByTile[ tilekey ] = ( this.indicesByTile[ tilekey ] + 1 ) % this.layers.length;
            if ( this.indicesByTile[ tilekey ] === this.defaultIndex ) {
                delete this.indicesByTile[ tilekey ];
            }
        }
        redrawTile( this.olLayer, tilekey );
    };

    /**
     * Decrement which layer index the current tile points to. This will
     * redraw the modified tile.
     * @memberof Carousel
         *
     * @param {String} tilekey - The tile key string.
     */
    Carousel.prototype.decrementTileLayerIndex = function( tilekey ) {
        if ( this.indicesByTile[ tilekey ] === undefined ) {
            this.indicesByTile[ tilekey ] = Util.mod( this.defaultIndex -1, this.layers.length );
        } else {
            this.indicesByTile[ tilekey ] = Util.mod( this.indicesByTile[ tilekey ] - 1,  this.layers.length );
            if ( this.indicesByTile[ tilekey ] === this.defaultIndex ) {
                delete this.indicesByTile[ tilekey ];
            }
        }
        redrawTile( this.olLayer, tilekey );
    };

    /**
     * Set which layer index the current tile points to. This will
     * redraw the modified tile.
     * @memberof Carousel
         *
     * @param {String} tilekey - The tile key string.
     * @param {number} index - The new layer index for the tile.
     */
    Carousel.prototype.setTileLayerIndex = function( tilekey, index ) {
        if ( index === this.defaultIndex ) {
            delete this.indicesByTile[ tilekey ];
        } else {
            this.indicesByTile[ tilekey ] = index;
        }
        redrawTile( this.olLayer, tilekey );
    };

    /**
     * Set the layer index for all tiles. This will redraw the entire
     * layer.
     * @memberof Carousel
         *
     * @param {String} index - The layer index for all tiles.
     */
    Carousel.prototype.setTileLayerIndices = function( index ) {
        this.defaultIndex = Util.mod( index, this.layers.length );
        this.indicesByTile = {};
        this.olLayer.redraw();
    };

    /**
     * Returns the layer index for a particular tile.
     * @memberof Carousel
         *
     * @param {String} tilekey - The tile key string.
     *
     * @returns {number} The layer index for the tile.
     */
    Carousel.prototype.getLayerIndexForTile = function( tilekey ) {
        var layerIndex = this.indicesByTile[ tilekey ];
        return layerIndex !== undefined ? layerIndex : this.defaultIndex;
    };

    /**
     * Returns the renderer for a particular tile.
     * @memberof Carousel
         *
     * @param {String} tilekey - The tile key string.
     *
     * @returns {number} The renderer for the tile.
     */
    Carousel.prototype.getRendererForTile = function( tilekey ) {
        var layerIndex = this.getLayerIndexForTile( tilekey );
        return this.layers[ layerIndex ].renderer;
    };

    module.exports = Carousel;
}());

},{"../util/PubSub":59,"../util/Util":60,"./ClientLayer":9,"./HtmlTileLayer":13,"./Layer":15,"./LayerUtil":16}],9:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Layer = require('./Layer'),
        LayerUtil = require('./LayerUtil'),
        Util = require('../util/Util'),
        HtmlTileLayer = require('./HtmlTileLayer'),
        PubSub = require('../util/PubSub');

    /**
     * Private: Returns the zoom callback function to update level min and maxes.
     *
     * @param layer {ServerLayer} The layer object.
     */
    function zoomCallback( layer ) {
        return function() {
            if ( layer.olLayer ) {
                layer.setLevelMinMax();
            }
        };
    }

    /**
     * Instantiate a ClientLayer object.
     * @class ClientLayer
     * @augments Layer
     * @classdesc A client rendered layer object. Uses JSON data retrieved from the
     *            server in conjunction with a Renderer object or html function to
     *            create interactable DOM elements.
     *
     * @param {Object} spec - The specification object.
     * <pre>
     * {
     *     opacity  {float}    - The opacity of the layer. Default = 1.0
     *     enabled  {boolean}  - Whether the layer is visible or not. Default = true
     *     zIndex   {integer}  - The z index of the layer. Default = 1000
     *     renderer {Renderer} - The tile renderer object.
     * }
     * </pre>
     */
    function ClientLayer( spec ) {
        var that = this,
            getURL = spec.getURL || LayerUtil.getURL;
        // call base constructor
        Layer.call( this, spec );
        // set reasonable defaults
        this.zIndex = ( spec.zIndex !== undefined ) ? parseInt( spec.zIndex, 10 ) : 1000;
        this.tileTransform = spec.tileTransform || {};
        this.domain = "client";
        this.source = spec.source;
        this.getURL = function( bounds ) {
            return getURL.call( this, bounds ) + that.getQueryParamString();
        };
        if ( spec.tileClass ) {
            this.tileClass = spec.tileClass;
        }
        if ( spec.renderer ) {
            this.setRenderer( spec.renderer );
        }
        if ( spec.aggregators ) {
            _.forIn( spec.aggregators, function( agg, key ) {
                this.addAggregator( key, agg );
            });
        }
    }

    ClientLayer.prototype = Object.create( Layer.prototype );

    /**
     * Activates the layer object. This should never be called manually.
     * @memberof ClientLayer
     * @private
     */
    ClientLayer.prototype.activate = function() {
        // set callback here so it can be removed later
        this.zoomCallback = zoomCallback( this );
        // set callback to update ramp min/max on zoom
        this.map.on( "zoomend", this.zoomCallback );
        // add the new layer
        this.olLayer = new HtmlTileLayer(
            'Client Rendered Tile Layer',
            this.source.tms,
            {
                layername: this.source.id,
                type: 'json',
                maxExtent: new OpenLayers.Bounds(-20037500, -20037500,
                    20037500,  20037500),
                isBaseLayer: false,
                getURL: this.getURL,
                tileClass: this.tileClass,
                renderer: this.renderer
            });
        // set whether it is enabled or not before attaching, to prevent
        // needless tile reqeests
        this.setEnabled( this.isEnabled() );
        this.setTheme( this.map.getTheme() );
        this.setOpacity( this.getOpacity() );
        this.setBrightness( this.getBrightness() );
        this.setContrast( this.getContrast() );
        // publish activate event before appending to map
        PubSub.publish( this.getChannel(), { field: 'activate', value: true } );
        // attach to map
        this.map.olMap.addLayer( this.olLayer );
        // set z-index after
        this.setZIndex( this.zIndex );
        this.setLevelMinMax(); // set level min / max
        // publish add event
        PubSub.publish( this.getChannel(), { field: 'add', value: true } );
    };

    /**
     * Dectivates the layer object. This should never be called manually.
     * @memberof ClientLayer
     * @private
     */
    ClientLayer.prototype.deactivate = function() {
        if ( this.olLayer ) {
            this.map.olMap.removeLayer( this.olLayer );
            PubSub.publish( this.getChannel(), { field: 'remove', value: true } );
            this.olLayer.destroy();
            this.olLayer = null;
        }
        this.map.off( "zoomend", this.zoomCallback );
        this.zoomCallback = null;
        PubSub.publish( this.getChannel(), { field: 'deactivate', value: true } );
    };

    /**
     * Sets the current renderer of the layer.
     * @memberof ClientLayer
     *
     * @param {Renderer} renderer - The renderer to attach to the layer.
     */
    ClientLayer.prototype.setRenderer = function( renderer ) {
        this.renderer = renderer;
        this.renderer.attach( this );
    };

    /**
     * Adds an aggregator to the layer.
     * @memberof ClientLayer
     *
     * @param {String} id - The aggregator id.
     * @param {Renderer} renderer - The renderer to attach to the layer.
     */
    ClientLayer.prototype.addAggregator = function( id, aggregator ) {
        this.aggregators = this.aggregators || {};
        this.aggregators[ id ] = aggregator;
        this.aggregators[ id ].attach( this );
    };

    /**
     * Gets an aggregator by id.
     * @memberof ClientLayer
     *
     * @param {String} id - The aggregator id.
     */
    ClientLayer.prototype.getAggregator = function( id ) {
        return this.aggregators[ id ];
    };

    /**
     * Updates the theme associated with the layer.
     * @memberof ClientLayer
     *
     * @param {String} theme - The theme identifier string.
     */
    ClientLayer.prototype.setTheme = function( theme ) {
        this.theme = theme;
    };

    /**
     * Get the current theme for the layer.
     * @memberof ClientLayer
     *
     * @returns {String} The theme identifier string.
     */
    ClientLayer.prototype.getTheme = function() {
        return this.theme;
    };

    /**
     * Set the z index of the layer.
     * @memberof ClientLayer
     *
     * @param {integer} zIndex - The new z-order value of the layer, where 0 is front.
     */
    ClientLayer.prototype.setZIndex = function ( zIndex ) {
        // we by-pass the OpenLayers.Map.setLayerIndex() method and manually
        // set the z-index of the layer dev. setLayerIndex sets a relative
        // index based on current map layers, which then sets a z-index. This
        // caused issues with async layer loading.
        this.zIndex = zIndex;
        if ( this.olLayer ) {
            $( this.olLayer.div ).css( 'z-index', zIndex );
        }
        PubSub.publish( this.getChannel(), { field: 'zIndex', value: zIndex });
    };

    /**
     * Get the layers zIndex.
     * @memberof ClientLayer
     *
     * @returns {integer} The zIndex for the layer.
     */
    ClientLayer.prototype.getZIndex = function () {
        return this.zIndex;
    };

    /**
     * Set the layers tile transform function type.
     * @memberof ClientLayer
     *
     * @param {String} transformType - The tile transformer type.
     */
    ClientLayer.prototype.setTileTransformType = function ( transformType ) {
        if ( this.tileTransform.type !== transformType ) {
            this.tileTransform.type = transformType;
            this.redraw();
            PubSub.publish( this.getChannel(), {field: 'tileTransformType', value: transformType} );
        }
    };

    /**
     * Get the layers transformer type.
     * @memberof ClientLayer
     *
     * @return {String} The tile transform type.
     */
    ClientLayer.prototype.getTileTransformType = function () {
        return this.tileTransform.type;
    };

    /**
     * Set the tile transform data based on the time range passed in
     * @memberof ClientLayer
     *
     * @param {number} start - A unix timestamp representing the start of the time range
     * @param {number} end - A unix timestamp representing the end of the time range
     */
    ClientLayer.prototype.setTileTransformRange = function ( start, end ) {
		var meta = this.source.meta.meta,
			rangeMin = meta.rangeMin,
			rangeMax = meta.rangeMax,
			numBuckets = meta.bucketCount,
            bucketSize = ( rangeMax - rangeMin ) / numBuckets;
        if ( start > rangeMax && end < rangeMin ) {
            // outside range completely, send empty request
			this.setTileTransformData({
    			startBucket: -1,
    			endBucket: -1
            });
		}
		this.setTileTransformData({
			startBucket: Math.max( 0, Math.floor( ( start - rangeMin ) / bucketSize ) ),
			endBucket: Math.min( numBuckets - 1, Math.floor( ( end - rangeMin ) / bucketSize ) )
        });
	};

    /**
     * Set the tile transform data attribute internally
     * @memberof ClientLayer
     *
     * @param {Object} transformData - The tile transform data attribute.
     */
	ClientLayer.prototype.setTileTransformData = function( transformData ) {
        if ( !_.isEqual( this.tileTransform.data, transformData ) ) {
            this.tileTransform.data = transformData;
            this.redraw();
            PubSub.publish( this.getChannel(), {field: 'tileTransformData', value: transformData} );
        }
    };

    /**
     * Get the transformer data attribute.
     * @memberof ClientLayer
     *
     * @returns {Object} The tile transform data attribute.
     */
    ClientLayer.prototype.getTileTransformData = function () {
        return this.tileTransform.data || {};
    };

    /**
     * Get the current minimum and maximum values for the current zoom level.
     * @memberof ClientLayer
     *
     * @param {Object} The min and max of the level.
     */
    ClientLayer.prototype.getLevelMinMax = function() {
        return this.levelMinMax;
    };

    /**
     * Generate query parameters based on state of layer
     * @memberof ClientLayer
     *
     * @returns {String} The query parameter string based on the attributes of this layer.
     */
     ClientLayer.prototype.getQueryParamString = function() {
        var query = {
            tileTransform: this.tileTransform
        };
        return Util.encodeQueryParams( query );
    };

    /**
     * Redraws the entire layer.
     * @memberof ClientLayer
     */
    ClientLayer.prototype.redraw = function () {
        if ( this.olLayer ) {
            this.setLevelMinMax();
            this.olLayer.redraw();
            this.setZIndex(this.zIndex);
            // If we're using the TileManager we need to force it into a refresh. There is no nice way to
            // do this as of 2.13.1, so we fake the expiry of the move/zoom timeout.
            if ( this.olLayer.map && this.olLayer.map.tileManager ) {
                this.olLayer.map.tileManager.updateTimeout(
                    this.olLayer.map,
                    this.olLayer.map.tileManager.zoomDelay,
                    true );
            }
        }
    };

    /**
     * Sets the layers min and max values for the given zoom level.
     * @memberof ClientLayer
     * @private
     * @param layer {Object} the layer object.
     */
    ClientLayer.prototype.setLevelMinMax = function() {
        var zoomLevel = this.map.getZoom(),
            source = this.source,
            meta = source.meta && source.meta.meta ? source.meta.meta[ zoomLevel ] : null,
            transformData = this.tileTransform.data || {},
            levelMinMax = meta,
            renderer = this.renderer,
            aggregated;
        if ( meta ) {
            // aggregate the data if there is an aggregator attached
            if ( renderer && renderer.aggregator ) {
                // aggregate the meta data buckets
                aggregated = renderer.aggregator.aggregate(
                    meta.bins || [],
                    transformData.startBucket,
                    transformData.endBucket );
                if ( aggregated instanceof Array ) {
                    // take the first and last index, which correspond to max / min
                    levelMinMax = {
                        minimum: aggregated[aggregated.length - 1] || null,
                        maximum: aggregated[0] || null
                    };
                } else {
                    //
                    levelMinMax = {
                        minimum: aggregated,
                        maximum: aggregated
                    };
                }
            }
        } else {
            levelMinMax = {
                minimum: null,
                maximum: null
            };
        }
        this.levelMinMax = levelMinMax;
        PubSub.publish( this.getChannel(), { field: 'levelMinMax', value: levelMinMax });
    };

    module.exports = ClientLayer;
}());

},{"../util/PubSub":59,"../util/Util":60,"./HtmlTileLayer":13,"./Layer":15,"./LayerUtil":16}],10:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var MapUtil = require('../map/MapUtil');

    /**
     * Instantiate a HtmlMarker object.
     * @class HtmlMarker
     * @classdesc A HtmlMarker object that is pinned to an HtmlMarkerLayer.
     */
    function HtmlMarker( x, y, html, dimension ) {
        this.x = x;
        this.y = y;
        this.html = html;
        this.dimension = dimension;
        this.icon = new OpenLayers.Icon(
            null,
            new OpenLayers.Size( 2, 2 ),
            new OpenLayers.Pixel( -1, -2 ) );
    }

    HtmlMarker.prototype = {

        /**
         * Activates the HtmlMarker object. This should never be called manually.
         * @memberof HtmlMarker
         * @private
         */
        activate: function() {
            var viewportPx = MapUtil.getViewportPixelFromCoord( this.map, this.x, this.y ),
                lonlat = this.map.olMap.getLonLatFromViewPortPx( viewportPx );
            this.olMarker = new OpenLayers.Marker( lonlat, this.icon.clone() );
            this.layer.olLayer.addMarker( this.olMarker );
            // get marker elem
            var $parent = $( this.olMarker.icon.imageDiv );
            // hide icon element
            $parent.children().css( 'display', 'none' );
            this.$elem = $( this.html );
            this.$container = $parent.parent();
            this.$olContainer = this.$container.parent();
            if (this.dimension) {
                // If the marker is restricted to move in one direction register move handlers
                this.updatePosition = this.updatePosition.bind(this);
                this.map.olMap.events.register( 'move', this.map.olMap, this.updatePosition );
            }
            // add marker
            $parent.append( this.html );
        },

        /**
         * De-activates the HtmlMarker object. This should never be called manually.
         * @memberof HtmlMarker
         * @private
         */
        deactivate: function() {
            if ( this.olMarker && this.layer.olLayer ) {
                this.layer.olLayer.removeMarker( this.olMarker );
                this.map.olMap.events.unregister( 'move', this.map.olMap, this.updatePosition );
                this.olMarker.destroy();
                this.olMarker = null;
                this.$elem = null;
            }
        },

        /**
         * Removes event listeners on marker when i
         * @memberof HtmlMarker
         * @publice
         */
        disable: function () {
            this.map.olMap.events.unregister( 'move', this.map.olMap, this.updatePosition );
        },

        /**
         * Moves the marker to a new x and y coordinate.
         * @memberof HtmlMarker
         *
         * @param {number} x - The x coordinate.
         * @param {number} y - The y coordinate.
         */
        moveTo: function( x, y ) {
            this.x = x;
            this.y = y;
            var viewportPx = MapUtil.getViewportPixelFromCoord( this.map, this.x, this.y ),
                lonlat = this.map.olMap.getLonLatFromViewPortPx( viewportPx ),
                px = this.map.olMap.getLayerPxFromLonLat( lonlat );
            this.olMarker.moveTo( px );
        },

        /**
         * Called on map move to fix marker along a configured axis
         * @memberof HtmlMarker
         */
        updatePosition: function () {
            var $container = this.$olContainer,
                offset = $container.position();
            if ( this.dimension === "x" ) {
                // Set the marker y position
                this.$elem.parent().css( 'top', -offset.top + "px" );
            }
        }
    };

    module.exports = HtmlMarker;
}());

},{"../map/MapUtil":45}],11:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function() {

	"use strict";

	var Layer = require('./Layer'),
		PubSub = require('../util/PubSub');

	function addMarkerToLayer( layer, marker ) {
		marker.layer = layer;
		marker.map = layer.map;
		marker.activate();
	}

	function removeMarkerFromLayer( marker ) {
		marker.deactivate();
		marker.map = null;
		marker.layer = null;
	}

	/**
	 * Instantiate a HtmlMarkerLayer object.
	 * @class HtmlMarkerLayer
	 * @augments Layer
	 * @classdesc A client rendered marker layer object.
	 *
	 * @param {Object} spec - The specification object.
	 */
	function HtmlMarkerLayer( spec ) {
		spec = spec || {};
		// call base constructor
		Layer.call( this, spec );
		// set reasonable defaults
		this.zIndex = ( spec.zIndex !== undefined ) ? spec.zIndex : 749;
		this.domain = "marker";
		this.source = spec.source;
		this.markers = spec.markers || [];
	}

	HtmlMarkerLayer.prototype = Object.create( Layer.prototype );

	/**
	 * Activates the layer object. This should never be called manually.
	 * @memberof HtmlMarkerLayer
	 * @private
	 */
	HtmlMarkerLayer.prototype.activate = function() {
		this.olLayer = new OpenLayers.Layer.Markers( "Markers" );
		this.setOpacity( this.opacity );
		this.setEnabled( this.enabled );
		this.setTheme( this.map.getTheme() );
		this.map.olMap.addLayer( this.olLayer );
		this.markers.forEach( function( marker ) {
			addMarkerToLayer( this, marker );
		}, this );
		this.setZIndex( this.zIndex );
		PubSub.publish( this.getChannel(), { field: 'activate', value: true } );
	};

	/**
	 * Dectivates the layer object. This should never be called manually.
	 * @memberof HtmlMarkerLayer
	 * @private
	 */
	HtmlMarkerLayer.prototype.deactivate = function() {
		if ( this.olLayer ) {
			this.olLayer.clearMarkers();
			this.map.olMap.removeLayer( this.olLayer );
			this.olLayer.destroy();
			this.olLayer = null;
			PubSub.publish( this.getChannel(), { field: 'deactivate', value: true } );
		}
	};

	HtmlMarkerLayer.prototype.addMarker = function( marker ) {
		if ( this.olLayer ) {
			// add marker
			addMarkerToLayer( this, marker );
		}
		this.markers.push( marker );
	};

	HtmlMarkerLayer.prototype.addMarkers = function( markers, chunkSize, pause ) {
		var that = this;
		if ( chunkSize ) {
			// adding large quantities of markers to the map is slow, so
			// break it into async chunks to let the app breath in between
			_.chunk( markers, chunkSize ).forEach( function( chunk, index ) {
				setTimeout( function() {
					chunk.forEach( function( marker ) {
						that.addMarker( marker );
					});
				}, pause * index || 0 );
			});
		} else {
			markers.forEach( function( marker ) {
				that.addMarker( marker );
			});
		}
	};

	HtmlMarkerLayer.prototype.disableMarkers = function() {
		this.markers.forEach( function( marker ) {
			marker.disable();
		});
	};

	HtmlMarkerLayer.prototype.removeMarker = function( marker ) {
		if ( this.olLayer ) {
			removeMarkerFromLayer( marker );
		}
	};

	HtmlMarkerLayer.prototype.clearMarkers = function() {
		if ( this.olLayer ) {
			this.disableMarkers();
			this.olLayer.clearMarkers();
		}
		this.markers = [];
	};

	/**
	 * Updates the theme associated with the layer.
	 * @memberof HtmlMarkerLayer
	 *
	 * @param {String} theme - The theme identifier string.
	 */
	HtmlMarkerLayer.prototype.setTheme = function( theme ) {
		this.theme = theme;
	};

	/**
	 * Set the z index of the layer.
	 * @memberof HtmlMarkerLayer
	 *
	 * @param {integer} zIndex - The new z-order value of the layer, where 0 is front.
	 */
	HtmlMarkerLayer.prototype.setZIndex = function( zIndex ) {
		// we by-pass the OpenLayers.Map.setLayerIndex() method and manually
		// set the z-index of the layer dev. setLayerIndex sets a relative
		// index based on current map layers, which then sets a z-index. This
		// caused issues with async layer loading.
		this.zIndex = zIndex;
		if ( this.olLayer ) {
			$( this.olLayer.div ).css( 'z-index', zIndex );
			PubSub.publish( this.getChannel(), {
				field: 'zIndex',
				value: zIndex
			});
		}
	};

	/**
	 * Get the layers zIndex.
	 * @memberof HtmlMarkerLayer
	 *
	 * @returns {integer} The zIndex for the layer.
	 */
	HtmlMarkerLayer.prototype.getZIndex = function() {
		return this.zIndex;
	};

	module.exports = HtmlMarkerLayer;
}());

},{"../util/PubSub":59,"./Layer":15}],12:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * An overridden OpenLayers.Tile object to create DOM elements based on
 * tile data. Used by HtmlTileLayers for client rendered layers. Uses
 * either Renderer objects or html functions to generate the DOM elements
 * or html strings.
 */
( function() {

    "use strict";

    OpenLayers.Tile.HTML = function() {
        this.url = null;
        this.imgDiv = null;
        this.imageReloadAttempts = null;
        OpenLayers.Tile.apply( this, arguments );
    };

    OpenLayers.Tile.HTML.prototype = Object.create( OpenLayers.Tile.prototype );

    OpenLayers.Tile.HTML.prototype.destroy = function() {
        if ( this.imgDiv )  {
            this.clear();
            this.imgDiv = null;
        }
        OpenLayers.Tile.prototype.destroy.apply( this, arguments );
    };

    OpenLayers.Tile.HTML.prototype.draw = function() {
        var shouldDraw = OpenLayers.Tile.prototype.draw.apply( this, arguments );
        if ( shouldDraw ) {
            if ( this.isLoading ) {
                //if we're already loading, send 'reload' instead of 'loadstart'.
                this._loadEvent = "reload";
            } else {
                this.isLoading = true;
                this._loadEvent = "loadstart";
            }
            this.renderTile();
            this.positionTile();
        } else if ( shouldDraw === false ) {
            this.unload();
        }
        return shouldDraw;
    };

    OpenLayers.Tile.HTML.prototype.getURL = function() {
        var url = this.layer.getURL( this.bounds );
        if ( url instanceof Array ) {
            url = url.join('|');
        }
        return url;
    };

    OpenLayers.Tile.HTML.prototype.renderTile = function() {
        this.url = this.getURL();
        this.initImage();
    };

    OpenLayers.Tile.HTML.prototype.positionTile = function() {
        var style = this.getTile().style,
            size = this.layer.getImageSize( this.bounds ),
            ratio = 1;
        if ( this.layer instanceof OpenLayers.Layer.Grid ) {
            ratio = this.layer.getServerResolution() / this.layer.map.getResolution();
        }
        style.left = this.position.x + "px";
        style.top = this.position.y + "px";
        style.width = Math.round( ratio * size.w ) + "px";
        style.height = Math.round( ratio * size.h ) + "px";
    };

    OpenLayers.Tile.HTML.prototype.clear = function() {
        OpenLayers.Tile.prototype.clear.apply( this, arguments );
        var img = this.imgDiv;
        if ( img ) {
            var tile = this.getTile();
            if ( tile.parentNode === this.layer.div ) {
                this.layer.div.removeChild( tile );
            }
            this.setImgSrc();
            OpenLayers.Element.removeClass(img, "olImageLoadError");
        }
    };

    OpenLayers.Tile.HTML.prototype.getImage = function() {
        if ( !this.imgDiv ) {
            this.imgDiv = document.createElement( 'div' );
            this.imgDiv.className = 'olTileHtml';
            var style = this.imgDiv.style;
            style.visibility = "hidden";
            style.opacity = 0;
            if ( this.layer.opacity < 1 ) {
                style.filter = 'alpha(opacity=' + (this.layer.opacity * 100) + ')';
            }
            style.position = "absolute";
        }
        return this.imgDiv;
    };

    OpenLayers.Tile.HTML.prototype.setImage = function( img ) {
        this.imgDiv = img;
    };

    OpenLayers.Tile.HTML.prototype.initImage = function() {
        if ( !this.url && !this.imgDiv ) {
            // fast path out - if there is no tile url and no previous image
            this.isLoading = false;
            return;
        }
        this.events.triggerEvent('beforeload');
        this.layer.div.appendChild( this.getTile() );
        this.events.triggerEvent( this._loadEvent );
        var img = this.getImage();
        var dataUrl = img.getAttribute('data-url') || '';
        if ( dataUrl === this.url ) {
            this._loadTimeout = window.setTimeout(
                OpenLayers.Function.bind( this.onImageLoad, this ),
                0 );
        } else {
            this.stopLoading();
            this.imageReloadAttempts = 0;
            this.setImgSrc( this.url );
        }
    };

    OpenLayers.Tile.HTML.prototype.setImgSrc = function( url ) {
        var that  = this,
            img = this.imgDiv;
        if ( url ) {
            var urls = url.split('|');
            img.style.visibility = 'hidden';
            img.style.opacity = 0;
            img.setAttribute( "data-url", url );
            var pendingRequests = urls.map( function( url ) {
                var deferred = $.Deferred();
                $.ajax({
                    url: url
                }).then(
                    function( results ) {
                        deferred.resolve( results );
                    },
                    function( xhr ) {
                        deferred.reject();
                        console.error( xhr.responseText );
                        console.error( xhr );
                    }
                );
                return deferred;
            });
            $.when.apply( $, pendingRequests ).then(
                function() {
                    if ( url === that.url ) {
                        that.onImageLoad.apply( that, arguments );
                    }
                },
                function() {
                    if ( url === that.url ) {
                        that.onImageError();
                    }
                }
            );
        } else {
            // Remove reference to the image, and leave it to the browser's
            // caching and garbage collection.
            this.stopLoading();
            this.imgDiv = null;
            if ( img.parentNode ) {
                img.parentNode.removeChild( img );
            }
        }
    };

    OpenLayers.Tile.HTML.prototype.getTile = function() {
        return this.getImage();
    };

    OpenLayers.Tile.HTML.prototype.createBackBuffer = function() {
        return;
    };

    OpenLayers.Tile.HTML.prototype.renderHtml = function() {
        var imgDiv = this.imgDiv,
            tileData = imgDiv._tileData,
            renderer = this.getRenderer(),
            aggregator,
            html,
            render;
        // clear tile contents
        imgDiv.innerHTML = "";
        // hide standard tile hover interaction
        if ( renderer.spec.hideTile ) {
            imgDiv.className = imgDiv.className + " hideTile";
        }
        if ( !tileData || tileData.length === 0 ) {
            // no data, exit
            return;
        }
        // ensure there is at least one set of data
        // tile data is under 'tile', elasticsearch is under 'hits'
        var hasTileOrHits = false;
        tileData.forEach( function( datum ) {
            if ( datum.tile || datum.hits ) {
                hasTileOrHits = true;
            }
        });
        // no content in data, exit
        if ( !hasTileOrHits ) {
            return;
        }
        // if aggregator, aggregate the data
        aggregator = renderer.aggregator;
        if ( aggregator ) {
            var outOfRangeCount = 0;
            tileData.forEach( function( datum ) {
                if ( datum.tile ) {
                    // only aggregate the data if it hasn't already been aggregated
                    if ( !datum.tile.meta.aggregated || datum.tile.meta.aggregationType !== aggregator ) {
                        var rawData = datum.tile.meta.map ? datum.tile.meta.map.bins : datum.tile.meta.raw;
                        datum.tile.meta = {
                            raw: rawData,
                            aggregated: aggregator.aggregate( rawData )
                        };
                        datum.tile.meta.aggregationType = aggregator;
                    }
                    // check if requested range is outside of available range
                    if ( datum.tile.meta.aggregated.length === 0 ) {
                        // no data, flag as out of range
                        outOfRangeCount++;
                    }
                }
            });
            // if all data is outside the range, exit early
            if ( outOfRangeCount === tileData.length ) {
                // data outside of range, exit
                return;
            }
        }
        var data = tileData.length === 1 ? tileData[0] : tileData;
        // render data
        render = renderer.render( data );
        html = render.html;
        this.entries = render.entries;
        // add html to the tile div
        if ( html instanceof $ ) {
            // if generated a jquery object, append it
            $( imgDiv ).append( html );
        } else if ( html instanceof HTMLElement ) {
            // if generated an HTMLElement, get html text
            imgDiv.appendChild( html );
        } else {
            // if generated string, set inner html
            imgDiv.innerHTML = html;
        }
        // inject selected entry classes
        renderer.injectEntries( imgDiv.children, this.entries );
        // call renderer hook function
        renderer.executeHooks( imgDiv.children, this.entries, data );
    };

    OpenLayers.Tile.HTML.prototype.getRenderer = function() {
        var renderer = this.layer.renderer;
        if ( typeof renderer === "function" ) {
            renderer = renderer.call( this.layer, this.bounds );
        }
        return renderer;
    };

    OpenLayers.Tile.HTML.prototype.onImageLoad = function() {
        var img = this.imgDiv;
        this.stopLoading();
        if ( img ) {
            img.style.visibility = 'inherit';
            img.style.opacity = this.layer.opacity;
            if ( arguments.length > 0 ) {
                // only set the data if there is new data to set
                var data = [],
                    i;
                for ( i=0; i<arguments.length; i++ ) {
                    data.push( arguments[i] );
                }
                img._tileData = data;
            }
            // render the data
            this.renderHtml();
            // trigger load end
            this.isLoading = false;
            this.events.triggerEvent("loadend");
        }
    };

    OpenLayers.Tile.HTML.prototype.onImageError = function() {
        var img = this.imgDiv;
        if ( img && img.getAttribute('data-url') ) {
            this.imageReloadAttempts++;
            if ( this.imageReloadAttempts <= OpenLayers.IMAGE_RELOAD_ATTEMPTS ) {
                this.setImgSrc( this.getURL() );
            } else {
                OpenLayers.Element.addClass( img, "olImageLoadError" );
                this.events.triggerEvent("loaderror");
                this.onImageLoad();
            }
        }
    };

    OpenLayers.Tile.HTML.prototype.stopLoading = function() {
        window.clearTimeout( this._loadTimeout );
        delete this._loadTimeout;
    };

    OpenLayers.Tile.HTML.prototype.getCanvasContext = function() {
        return undefined;
    };

    /**
     * OpenLayers overrides
     */

    if ( OpenLayers.TileManager ) {

        OpenLayers.TileManager.prototype.addTile = function(evt) {
            if ( evt.tile instanceof OpenLayers.Tile.Image ||
                evt.tile instanceof OpenLayers.Tile.HTML ||
                evt.tile instanceof OpenLayers.Tile.Univariate ) {
                if ( !evt.tile.layer.singleTile ) {
                    evt.tile.events.on({
                        beforedraw: this.queueTileDraw,
                        beforeload: this.manageTileCache,
                        loadend: this.addToCache,
                        unload: this.unloadTile,
                        scope: this
                    });
                }
            } else {
                // Layer has the wrong tile type, so don't handle it any longer
                this.removeLayer({layer: evt.tile.layer});
            }
        };

        OpenLayers.TileManager.prototype.queueTileDraw = function( evt ) {
            var tile = evt.object;
            var queued = false;
            var layer = tile.layer;
            var url = tile.getURL ? tile.getURL() : layer.getURL( tile.bounds );
            var img = this.tileCache[url];
            if ( img &&
                !OpenLayers.Element.hasClass( img, 'olTileImage' ) &&
                !OpenLayers.Element.hasClass( img, 'olTileHtml' ) &&
                !OpenLayers.Element.hasClass( img, 'olTileUnivariate' ) ) {
                // cached image no longer valid, e.g. because we're olTileReplacing
                delete this.tileCache[ url ];
                OpenLayers.Util.removeItem( this.tileCacheIndex, url );
                img = null;
            }
            // queue only if image with same url not cached already
            if ( layer.url && ( layer.async || !img ) ) {
                // add to queue only if not in queue already
                var tileQueue = this.tileQueue[ layer.map.id ];
                if ( !~OpenLayers.Util.indexOf( tileQueue, tile ) ) {
                    tileQueue.push(tile);
                }
                queued = true;
            }
            return !queued;
        };

    }

    OpenLayers.Tile.Image.prototype.createBackBuffer = function() {
        return;
    };

    module.exports = OpenLayers.Tile.HTML;
}());

},{}],13:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * An overridden OpenLayers.Layer object to use the HtmlTile object to
 * create client rendered elements. Uses either a Renderer or html function
 * to generate the html.
 */
( function() {

    "use strict";

    var HtmlTile = require('./HtmlTile');

    OpenLayers.Layer.HTML = function( name, url, options ) {
        OpenLayers.Layer.Grid.call( this, name, url, options );
        this.getURL = options.getURL;
        this.layername = options.layername;
        this.type = options.type;
        this.tileClass = options.tileClass || HtmlTile;
        this.html = options.html;
        this.renderer = options.renderer;
        this.CLASS_NAME = 'OpenLayers.Layer.HTML';
    };

    OpenLayers.Layer.HTML.prototype = Object.create( OpenLayers.Layer.Grid.prototype );

    OpenLayers.Layer.HTML.prototype.setOpacity = function( opacity ) {
        if ( opacity !== this.opacity ) {
            this.opacity = Math.max( Math.min( opacity, 1 ), 0 );
            var childNodes = this.div.childNodes;
            for( var i = 0, len = childNodes.length; i < len; ++i ) {
                childNodes[i].style.opacity = this.opacity;
            }
            if ( this.map !== null ) {
                this.map.events.triggerEvent( "changelayer", {
                    layer: this,
                    property: "opacity"
                });
            }
        }
    };

    module.exports = OpenLayers.Layer.HTML;
}());

},{"./HtmlTile":12}],14:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function() {

	"use strict";

	var Layer = require('./Layer'),
		PubSub = require('../util/PubSub');

	/**
	 * Instantiate a KMLLayer object.
	 * @class KMLLayer
	 * @augments Layer
	 * @classdesc A client rendered layer object.
	 *
	 * @param {Object} spec - The specification object.
	 */
	function KMLLayer( spec ) {
		// call base constructor
		Layer.call(this, spec);
		// set reasonable defaults
		this.zIndex = ( spec.zIndex !== undefined ) ? spec.zIndex : 749;
		this.domain = "kml";
		this.source = spec.source;
		this.id = spec.id;
		this.kml = spec.kml || [];
	}

	KMLLayer.prototype = Object.create(Layer.prototype);

	/**
	 * Activates the layer object. This should never be called manually.
	 * @memberof KMLLayer
	 * @private
	 */
	KMLLayer.prototype.activate = function() {
		this.olLayers = [];

		this.kml.forEach( function( kml ) {
			var projection;
			var units = kml.units;

			if (typeof units === "object") {
				units = units[kml.url.split("/").pop()];
			}

			switch ( units ) {
				case "meter":
				case "meters":
				case "metres":
				case "metre":
				case "m":
					projection = new OpenLayers.Projection("EPSG:900913");
					break;
				case "degrees":
				case "degree":
					projection = new OpenLayers.Projection("EPSG:4326");
					break;
				default:
					projection = new OpenLayers.Projection("EPSG:4326");
					break;
			}
			kml.olLayer = new OpenLayers.Layer.Vector( "Vector Layer", {
				projection: projection,
				strategies: [
					new OpenLayers.Strategy.Fixed()
				],
                protocol: new OpenLayers.Protocol.HTTP({
                    url: kml.url,
                    format: new OpenLayers.Format.KML({
                        extractStyles: true,
                        extractAttributes: true
                    })
                })
			});
			this.olLayers.push( kml.olLayer );
		}, this );
        this.setEnabled( this.isEnabled() );
        this.setOpacity( this.getOpacity() );
        this.setBrightness( this.getBrightness() );
        this.setContrast( this.getContrast() );
    	// publish activate event before appending to map
        PubSub.publish( this.getChannel(), { field: 'activate', value: true } );
		this.olLayers.forEach( function( olLayer ) {
			this.map.olMap.addLayer( olLayer );
		}, this );
		this.setZIndex( this.zIndex );
        // publish add event
        PubSub.publish( this.getChannel(), { field: 'add', value: true } );
	};

	/**
	 * Dectivates the layer object. This should never be called manually.
	 * @memberof KMLLayer
	 * @private
	 */
	KMLLayer.prototype.deactivate = function() {
		if ( this.olLayers ) {
			this.olLayers.forEach( function( olLayer ) {
				this.map.olMap.removeLayer( olLayer );
				olLayer.destroy();
				olLayer = null;
			}, this );
            PubSub.publish( this.getChannel(), { field: 'remove', value: true } );
			this.kml.forEach( function( kml ) {
				kml.olLayer = null;
			});
			this.olLayers = [];
		}
        PubSub.publish( this.getChannel(), { field: 'deactivate', value: true } );
	};

	/**
	 * Set the z index of the layer.
	 * @memberof KMLLayer
	 *
	 * @param {integer} zIndex - The new z-order value of the layer, where 0 is front.
	 */
	KMLLayer.prototype.setZIndex = function( zIndex ) {
		// we by-pass the OpenLayers.Map.setLayerIndex() method and manually
		// set the z-index of the layer dev. setLayerIndex sets a relative
		// index based on current map layers, which then sets a z-index. This
		// caused issues with async layer loading.
		this.zIndex = zIndex;
		if ( this.olLayers ) {
			this.olLayers.forEach( function( olLayer, index ) {
				$( olLayer.div ).css( 'z-index', zIndex + ( this.olLayers.length - index ) );
			}, this );
		}
		PubSub.publish( this.getChannel(), {
			field: 'zIndex',
			value: zIndex
		});
	};

	/**
	 * Get the layers zIndex.
	 * @memberof KMLLayer
	 *
	 * @returns {integer} The zIndex for the layer.
	 */
	KMLLayer.prototype.getZIndex = function() {
		return this.zIndex;
	};

	/**
	* Set the opacity of the layer.
	* @memberof KMLLayer
	*
	* @param {float} opacity - opacity value from 0 to 1.
	*/
	KMLLayer.prototype.setOpacity = function( opacity ) {
		this.opacity = opacity;
		if ( this.olLayers ) {
			this.olLayers.forEach( function( olLayer ) {
				olLayer.setOpacity( opacity );
			}, this );
		}
		PubSub.publish( this.getChannel(), { field: 'opacity', value: opacity } );
	};

	/**
	* Set whether or not the layer is enabled.
	* @memberof KMLLayer
	*
	* @param enabled {boolean} whether the layer is visible or not
	*/
	KMLLayer.prototype.setEnabled = function( enabled ) {
		this.enabled = enabled;
		if ( this.olLayers ) {
			this.olLayers.forEach( function( olLayer ) {
				olLayer.setVisibility( enabled );
			}, this );
		}
		PubSub.publish( this.getChannel(), { field: 'enabled', value: enabled } );
	};

	KMLLayer.prototype.setTileTransformRange = function( start ) {
		var kmlDate = start;
		if (kmlDate >= this.source.meta.meta.rangeMax) {
			kmlDate = this.source.meta.meta.rangeMax;
		} else if (kmlDate <= this.source.meta.meta.rangeMin) {
			kmlDate = this.source.meta.meta.rangeMin;
		}
		if ( kmlDate !== this.kmlDate ) {
			this.kmlDate = kmlDate;
			this.updateKMLData( true );
		}
	};

	KMLLayer.prototype.setTileTransformData = function() {
		// Set kml data to the most recent
		if ( this.source.meta.meta.rangeMax !== this.kmlDate ) {
			this.kmlDate = this.source.meta.meta.rangeMax;
			this.updateKMLData(true);
		}
	};

    KMLLayer.prototype.updateKMLData = function (updateView) {
	    var self = this;
	    var date = this.kmlDate;
	    if (updateView) {
	        this.deactivate();
	    }
	    this.kml.forEach( function( kml, kmlIndex ) {
	        if (kml.files) {
		        // Find closest month before
		        var smallestFile = null;
		        var minDiff;

		        kml.files.forEach(function (file) {
		            if (!smallestFile || Math.abs(file.date - date) < minDiff) {
		                minDiff = Math.abs(file.date - date);
		                smallestFile = file;
		            }
		        });
		        self.name = self.source.name + " (" + moment(smallestFile.date).format("MMM YYYY") + ")";

		        if (smallestFile) {
		            kml.url = "rest/layers/" + self.id + "/kml/" + kmlIndex + "/" + smallestFile.fileName;
		        }
	        }
	    });
	    if (updateView) {
			this.activate();
		}
    };

	module.exports = KMLLayer;
}());

},{"../util/PubSub":59,"./Layer":15}],15:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Util = require('../util/Util'),
        PubSub = require('../util/PubSub');

    /**
     * Instantiate a Layer object.
     * @class Layer
     * @classdesc A Layer class, the base class for all layer implementations.
     *
     * @param {Object} spec - The specification object.
     */
    function Layer( spec ) {
        spec = spec || {};
        this.uuid = Util.generateUuid();
        this.name = spec.name || "Unnamed Layer";
        this.domain = spec.domain;
        this.map = spec.map;
        this.showPendingTiles = spec.showPendingTiles !== undefined ? spec.showPendingTiles : true;
        this.opacity = ( spec.opacity !== undefined ) ? spec.opacity : 1.0;
        this.brightness = ( spec.brightness !== undefined ) ? spec.brightness : 1.0;
        this.contrast = ( spec.brightness !== undefined ) ? spec.brightness : 1.0;
        this.enabled = ( spec.enabled !== undefined ) ? spec.enabled : true;
    }

    Layer.prototype = {

        /**
         * Set the opacity of the layer.
         * @memberof Layer.prototype
         *
         * @param {float} opacity - opacity value from 0 to 1.
         */
        setOpacity: function( opacity ) {
            this.opacity = opacity;
            if ( this.olLayer ) {
                this.olLayer.setOpacity( opacity );
            }
            PubSub.publish( this.getChannel(), { field: 'opacity', value: opacity } );
        },

        /**
         * Returns the opacity of the layer.
         * @memberof Layer.prototype
         *
         * @returns {float} The opacity of the layer.
         */
        getOpacity: function() {
            return this.opacity;
        },

        /**
         * Set the brightness of the layer.
         * @memberof Layer.prototype
         *
         * @param {float} brightness - normalized brightness value.
         */
        setBrightness: function( brightness ) {
            this.brightness = brightness;
            if ( this.olLayer ) {
                $( this.olLayer.div ).css( '-webkit-filter', "brightness("+ (this.brightness*100) +"%) contrast("+ (this.contrast*100) +"%)" );
            }
            PubSub.publish( this.getChannel(), { field: 'brightness', value: brightness } );
        },

        /**
         * Returns the brightness of the layer.
         * @memberof Layer.prototype
         *
         * @returns {float} The brightness of the layer.
         */
        getBrightness: function() {
            return this.brightness;
        },

        /**
         * Set the contrast of the layer.
         * @memberof Layer.prototype
         *
         * @param {float} contrast - normalized contrast value.
         */
        setContrast: function( contrast ) {
            this.contrast = contrast;
            if ( this.olLayer ) {
                $( this.olLayer.div ).css( '-webkit-filter', "brightness("+ (this.brightness*100) +"%) contrast("+ (this.contrast*100) +"%)" );
            }
            PubSub.publish( this.getChannel(), { field: 'contrast', value: contrast } );
        },

        /**
         * Returns the contrast of the layer.
         * @memberof Layer.prototype
         *
         * @returns {float} The contrast of the layer.
         */
        getContrast: function() {
            return this.contrast;
        },

        /**
         * Set whether or not the layer is enabled.
         * @memberof Layer.prototype
         *
         * @param enabled {boolean} whether the layer is visible or not
         */
        setEnabled: function( enabled ) {
            this.enabled = enabled;
            if ( this.olLayer ) {
                this.olLayer.setVisibility( enabled );
            }
            PubSub.publish( this.getChannel(), { field: 'enabled', value: enabled } );
        },

        /**
         * Get whether or not the layer is enabled.
         * @memberof Layer.prototype
         *
         * @returns {boolean} If the layer is visible or not.
         */
        isEnabled: function() {
            return this.enabled;
        },

        /**
         * Returns the UUID that uniquely identifies this layer.
         * @memberof Layer.prototype
         *
         * @returns {String} The UUID of the layer.
         */
        getUUID: function() {
            return this.uuid;
        },

        /**
         * Returns the publish/subscribe channel id of this specific layer.
         * @memberof Layer.prototype
         *
         * @returns {String} The publish/subscribe channel for the layer.
         */
        getChannel: function () {
            return 'layer.' + this.domain + '.' + this.uuid;
        }
    };

    module.exports = Layer;
}());

},{"../util/PubSub":59,"../util/Util":60}],16:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @namespace LayerUtil
 * @classdesc A utility namespace containing layer related functionality.
 */
( function() {

    "use strict";

    /**
     * Parses a meta data extremum.
     * @private
     *
     * @param {*} The parsed extremum value.
     */
    function parseExtremum( extremum ) {
        var parsed;
        if ( typeof extremum === 'string' ) {
            parsed = JSON.parse( extremum );
        } else if ( extremum instanceof Array ) {
            if ( extremum.length === 1 &&
                typeof extremum[0] === 'string' ) {
                // graph meta data edge case, graph layer meta data
                // is a JSON string wrapped in an array
                parsed = JSON.parse( extremum[0] );
            } else if ( extremum.length > 0 &&
                extremum[0].maximum !== undefined ||
                extremum[0].minimum !== undefined ) {
                // bucketed tile data
                parsed = [];
                extremum.forEach( function( value ) {
                    var result = value.minimum !== undefined ? value.minimum : value.maximum;
                    parsed.push( result );
                });
            } else {
                parsed = [];
                extremum.forEach( function( value ) {
                    parsed.push( value );
                });
            }
        } else {
            parsed = extremum;
        }
        return parsed;
    }

    /**
     * Parse a given layers meta data min and max.
     * @private
     *
     * @param meta {Object} the layers meta data object.
     */
    function parseMetaMinMaxJson( meta ) {
        var minimum,
            maximum;
        try {
            // if meta value is a string, assume it is valid json
            if ( typeof meta === 'string' ) {
                // new meta data is valid json, hurray!
                return JSON.parse( meta );
            }
            if ( meta ) {
                maximum = parseExtremum( meta.maximum );
                minimum = parseExtremum( meta.minimum );
            }
            // sometimes the parsed value is also wrapped in an array
            return {
                maximum: maximum,
                minimum: minimum,
                bins: meta.bins
            };
        } catch ( e ) {
            console.error( "Error occured parsing layer meta data.");
            return null;
        }
        console.error( "Layer meta data format unrecognized.");
        return null;
    }

    /**
     * Meta data minimum and maximums are stored as malformed json
     * strings, but are usually accessed at a high frequency ( multiple
     * times per tile render ). This parses them all and stores them
     * as actual objects.
     * @private
     *
     * @param layerMeta {Object} the .meta node of the data returned for a layer
     *                           service call
     */
    function parseLevelsMinMax( layerMeta ) {
        var meta = layerMeta.meta,
            key;
        for ( key in meta ) {
            if ( meta.hasOwnProperty( key ) ) {
                if ( key !== "bucketCount" &&
                    key !== "rangeMin" &&
                    key !== "rangeMax" &&
                    key !== "topicType" &&
                    key !== "translatedTopics" ) {
                    meta[ key ] = parseMetaMinMaxJson( meta[key] );
                }
            }
        }
        return meta;
    }

    var LayerUtil = {

        /**
         * Parses a layer or an array of layer data objects, formats meta data
         * min and max and returns either the single layer, or a map of layers
         * keyed by layerId.
         * @memberof LayerUtil
         *
         * @param {Object|Array} layerData - layer data object or array of layer data objects.
         */
        parse: function( layerData ) {
            var layerMap,
                i;
            if ( !(layerData instanceof Array) ) {
                if ( layerData.meta ) {
                    parseLevelsMinMax( layerData.meta );
                }
                return layerData;
            }
            // if given an array, convert it into a map keyed by layerId
            layerMap = {};
            for ( i=0; i<layerData.length; i++ ) {
                if ( layerData[i].meta ) {
                    parseLevelsMinMax( layerData[i].meta );
                }
                layerMap[ layerData[i].id ] = layerData[i];
            }
            return layerMap;
        },

        /**
         * Given an OpenLayers.Layer class and a bounds object, return the x,
         * y, and y components of the tile.
         *
         * @param {OpenLayers.Layer) olLayer - The OpenLayers Layer object.
         * @param {OpenLayers.Bounds} bounds - The OpenLayers Bounds object.
         *
         * @returns {{x: (number), y: (number), z: integer}} The tile index.
         */
        getTileIndex: function( olLayer, bounds ) {
            var res = olLayer.map.getResolution(),
                maxBounds = olLayer.maxExtent,
                tileSize = olLayer.tileSize;
            return {
                xIndex: Math.round( (bounds.left - maxBounds.left) / (res * tileSize.w) ),
                yIndex: Math.round( (bounds.bottom - maxBounds.bottom) / (res * tileSize.h) ),
                level: olLayer.map.getZoom()
            };
        },

        /**
         * Given an OpenLayers.Layer class and a OpenLayers.Bounds object, return the
         * tilekey.
         *
         * @param {OpenLayers.Layer) olLayer - The OpenLayers Layer object.
         * @param {OpenLayers.Bounds} bounds - The OpenLayers Bounds object.
         *
         * @returns {String} The tilekey from the bounds.
         */
        getTilekey: function( olLayer, bounds ) {
            var tileIndex = LayerUtil.getTileIndex( olLayer, bounds ),
                x = tileIndex.xIndex,
                y = tileIndex.yIndex,
                z = tileIndex.level;
            return z + "," + x + "," + y;
        },

        /**
         * The getURL function passed to a OpenLayers TMS / Grid Layer to generate the
         * tile urls. Can be passed as is, or appended by using 'call'. The 'this'
         * context is set to the context of the OpenLayers layer.
         * @memberof LayerUtil
         *
         * @param {Object} bounds - The bounds object for the current tile.
         */
        getURL: function( bounds ) {
            var tileIndex = LayerUtil.getTileIndex( this, bounds ),
                x = tileIndex.xIndex,
                y = tileIndex.yIndex,
                z = tileIndex.level;
            if ( x >= 0 && y >= 0 ) {
                return this.url + this.layername + "/" + z + "/" + x + "/" + y + "." + this.type;
            }
        }
    };

    module.exports = LayerUtil;
}());

},{}],17:[function(require,module,exports){
/*
 * Copyright © 2013-2015 Uncharted Software Inc.
 *
 * Property of Uncharted™, formerly Oculus Info Inc.
 * http://uncharted.software/
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
( function() {

    "use strict";

    var ClientLayer = require('./ClientLayer'),
        PubSub = require('../util/PubSub');

    function getURLFunc( layers ) {
        return function( bounds ) {
            return layers.map( function( layer ) {
                return layer.olLayer.getURL( bounds );
            });
        };
    }

    function MultiUrlClientLayer(spec) {
        ClientLayer.call( this, spec );
        this.getURL = getURLFunc( spec.source.layers );
    }

    MultiUrlClientLayer.prototype = Object.create( ClientLayer.prototype );

    // CDB: Not working properly yet.
    MultiUrlClientLayer.prototype.setLevelMinMax = function() {
        var zoomLevel = this.map.getZoom(),
            renderer = this.renderer;
        // apply this aggregator to child laeyrs
        var levelMinMax = this.source.layers.map( function( layer ) {
            var source = layer.source,
                meta = source.meta && source.meta.meta ? source.meta.meta[ zoomLevel ] : null,
                transformData = layer.tileTransform.data || {},
                levelMinMax = meta,
                aggregated;
            if ( meta ) {
                // aggregate the data if there is an aggregator attached
                if ( renderer && renderer.aggregator ) {
                    // aggregate the meta data buckets
                    aggregated = renderer.aggregator.aggregate(
                        meta.bins || [],
                        transformData.startBucket,
                        transformData.endBucket );
                    if ( aggregated instanceof Array ) {
                        // take the first and last index, which correspond to max / min
                        levelMinMax = {
                            minimum: aggregated[aggregated.length - 1],
                            maximum: aggregated[0]
                        };
                    } else {
                        //
                        levelMinMax = {
                            minimum: aggregated,
                            maximum: aggregated
                        };
                    }
                }
            } else {
                levelMinMax = {
                    minimum: null,
                    maximum: null
                };
            }
            return levelMinMax;
        });
        this.levelMinMax = levelMinMax;
        PubSub.publish( this.getChannel(), { field: 'levelMinMax', value: levelMinMax });
    };

    module.exports = MultiUrlClientLayer;
}());

},{"../util/PubSub":59,"./ClientLayer":9}],18:[function(require,module,exports){
( function() {

    'use strict';

    var Layer = require('./Layer'),
        LayerUtil = require('./LayerUtil'),
        PendingTile = require('./PendingTile'),
        HtmlTileLayer = require('./HtmlTileLayer'),
        PubSub = require('../util/PubSub'),
        DEBOUNCE_DELAY = 400,
        _animations = {},
        _counts = {},
        _prevTilekeys = {};

    function getTileHash( tile ) {
        return LayerUtil.getTilekey( tile.layer, tile.bounds ).replace( /,/g, "-" );
    }

    function clearPendingTile( tilekey ) {
        delete _counts[ tilekey ];
        clearTimeout( _animations[ tilekey ] );
        _animations[ tilekey ] = setTimeout( function() {
            $( '.olTilePending_' + tilekey ).css('opacity', 0);
            delete _animations[ tilekey ];
        }, DEBOUNCE_DELAY );
    }

    function flagPendingTile( tilekey ) {
        _counts[ tilekey ] = 0;
        if ( _animations[ tilekey ] ) {
            clearTimeout( _animations[ tilekey ] );
            delete _animations[ tilekey ];
        }
        $( '.olTilePending_' + tilekey ).css('opacity', 1);
    }

    function incrementRequestCount( tilekey, tileId ) {
        if ( !_counts[ tilekey ] ) {
            flagPendingTile( tilekey );
        }
        _counts[ tilekey ]++;
        _prevTilekeys[ tileId ] = tilekey;
    }

    function decrementRequestCount( tilekey, tileId ) {
        if ( !_counts[ tilekey ] ) {
            // this can occur if an 'unload' event occurs while pending
            return;
        }
        _counts[ tilekey ]--;
        if ( _counts[ tilekey ] === 0 ) {
            clearPendingTile( tilekey );
        }
        _prevTilekeys[ tileId ] = null;
    }

    function reloadTile( newKey, tileId ) {
        var oldKey = _prevTilekeys[ tileId ];
        decrementRequestCount( oldKey, tileId );
        incrementRequestCount( newKey, tileId );
    }

    function trackTiles( layer ) {
        return function( message ) {
            if ( layer.olLayer && message.field === "activate" ) {
                layer.olLayer.events.register( 'addtile', layer.olLayer, function( data ) {
                    // Add listeners to tile
                    data.tile.events.register( 'loadstart', data.tile, function( arg ) {
                        incrementRequestCount( getTileHash( arg.object ), arg.object.id );
                    });
                    data.tile.events.register( 'loadend', data.tile, function( arg ) {
                        decrementRequestCount( getTileHash( arg.object ), arg.object.id );
                    });
                    data.tile.events.register( 'loaderror', data.tile, function( arg ) {
                        decrementRequestCount( getTileHash( arg.object ), arg.object.id );
                    });
                    data.tile.events.register( 'reload', data.tile, function( arg ) {
                        reloadTile( getTileHash( arg.object ), arg.object.id );
                    });
                    data.tile.events.register( 'unload', data.tile, function( arg ) {
                        var tileId = arg.object.id;
                        decrementRequestCount( _prevTilekeys[ tileId ], tileId );
                    });
                });
            }
        };
    }

    function PendingLayer( spec ) {
        Layer.call( this, spec );
        this.zIndex = 9999;
        this.domain = "pending";
        this.source = {};
        this.tileClass = PendingTile;
    }

    PendingLayer.prototype = Object.create( Layer.prototype );

    PendingLayer.prototype.activate = function() {
        // add the new layer
        this.olLayer = new HtmlTileLayer(
            'Pending Tile Layer',
            this.source.tms,
            {
                layername: this.source.id,
                type: 'json',
                maxExtent: new OpenLayers.Bounds(
                    -20037500, -20037500,
                    20037500,  20037500),
                isBaseLayer: false,
                getURL: null,
                tileClass: this.tileClass
            });
        // set whether it is enabled or not before attaching, to prevent
        // needless tile reqeests
        this.setEnabled( this.isEnabled() );
        // publish activate event before appending to map
        PubSub.publish( this.getChannel(), { field: 'activate', value: true } );
        // attach to map
        this.map.olMap.addLayer( this.olLayer );
        // set z-index after
        this.setZIndex( this.zIndex );
        // publish add event
        PubSub.publish( this.getChannel(), { field: 'add', value: true } );
    };

    PendingLayer.prototype.deactivate = function() {
        if ( this.olLayer ) {
            this.map.olMap.removeLayer( this.olLayer );
            PubSub.publish( this.getChannel(), { field: 'remove', value: true } );
            this.olLayer.destroy();
            this.olLayer = null;
        }
        PubSub.publish( this.getChannel(), { field: 'deactivate', value: true } );
    };

    PendingLayer.prototype.setZIndex = function ( zIndex ) {
        // we by-pass the OpenLayers.Map.setLayerIndex() method and manually
        // set the z-index of the layer dev. setLayerIndex sets a relative
        // index based on current map layers, which then sets a z-index. This
        // caused issues with async layer loading.
        this.zIndex = zIndex;
        if ( this.olLayer ) {
            $( this.olLayer.div ).css( 'z-index', zIndex );
        }
        PubSub.publish( this.getChannel(), { field: 'zIndex', value: zIndex });
    };

    PendingLayer.prototype.getZIndex = function () {
        return this.zIndex;
    };

    PendingLayer.prototype.register = function( layer ) {
        layer.pendingFunc = trackTiles( layer );
        PubSub.subscribe( layer.getChannel(), layer.pendingFunc );
    };

    PendingLayer.prototype.unregister = function( layer ) {
        PubSub.unsubscribe( layer.getChannel(), layer.pendingFunc );
        delete layer.pendingFunc;
    };

    module.exports = PendingLayer;

}());

},{"../util/PubSub":59,"./HtmlTileLayer":13,"./Layer":15,"./LayerUtil":16,"./PendingTile":19}],19:[function(require,module,exports){
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
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * An overridden OpenLayers.Tile object to create DOM elements based on
 * tile data. Used by HtmlTileLayers for client rendered layers. Uses
 * either Renderer objects or html functions to generate the DOM elements
 * or html strings.
 */

 ( function() {

    "use strict";

    var LayerUtil = require('./LayerUtil');

    function PendingTile() {
        OpenLayers.Tile.apply( this, arguments );
    }

    PendingTile.prototype = Object.create( OpenLayers.Tile.HTML.prototype );

    PendingTile.prototype.getURL = function() {
        return LayerUtil.getTilekey( this.layer, this.bounds ).replace( /,/g, "-" );
    };

    PendingTile.prototype.setImgSrc = function( url ) {
        var that  = this,
            img = this.imgDiv;
        if ( url ) {
            img.setAttribute( "data-url", url );
            that.onImageLoad.apply( that );
        } else {
            this.stopLoading();
            this.imgDiv = null;
            if ( img.parentNode ) {
                img.parentNode.removeChild( img );
            }
        }
    };

    PendingTile.prototype.onImageLoad = function() {
        var img = this.imgDiv;
        this.stopLoading();
        if ( img ) {
            // render the data
            this.renderHtml();
            // trigger load end
            this.events.triggerEvent("loadend");
            this.isLoading = false;
        }
    };

    PendingTile.prototype.getImage = function() {
        if ( !this.imgDiv ) {
            this.imgDiv = document.createElement( 'div' );
            this.imgDiv.className = 'olTileHtml olTilePending';
            this.imgDiv.style.position = "absolute";
        }
        return this.imgDiv;
    };

    PendingTile.prototype.renderHtml = function() {
        var imgDiv = this.imgDiv,
            url = imgDiv.getAttribute( "data-url", url );
        // clear tile contents
        imgDiv.className = 'olTileHtml olTilePending olTilePending_' + url;
		/*
		*Edit By RilaShu
		*将div内容修改为空，这样可以使得加载(css-loader)不再出现，治标了
		*/
        imgDiv.innerHTML = '<div>' +
        '</div>';
    };

    module.exports = PendingTile;

}());

},{"./LayerUtil":16}],20:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Util = require('../util/Util'),
        Layer = require('./Layer'),
        LayerUtil = require('./LayerUtil'),
        PubSub = require('../util/PubSub'),
        LegendService = require('../rest/LegendService');

    /**
     * Private: Request colour ramp image from server and set layer property when received.
     *
     * @param {Object} layer - The layer object
     * @param {Function} callback - Optional callback function.
     */
    function setRampImageUrl( layer, callback ) {
        LegendService.getEncodedImage( layer.source.id, {
                renderer: layer.renderer
            }, function ( url ) {
                layer.rampImageUrl = url;
                PubSub.publish( layer.getChannel(), { field: 'rampImageUrl', value: url });
                if ( callback ) {
                    callback( url );
                }
            });
    }

    /**
     * Private: Sets the layers min and max values for the given zoom level.
     *
     * @param layer {Object} the layer object.
     */
    function setLevelMinMax( layer ) {
        var zoomLevel = layer.map.getZoom(),
            coarseness = layer.renderer.coarseness,
            adjustedZoom = Math.max( zoomLevel - ( coarseness-1 ), 0 ),
            meta =  layer.source.meta,
            levelMinMax = meta.meta[ adjustedZoom ],
            minMax = levelMinMax ? levelMinMax : {
                minimum: null,
                maximum: null
            };
        layer.levelMinMax = minMax;
        PubSub.publish( layer.getChannel(), { field: 'levelMinMax', value: minMax });
    }

    /**
     * Private: Returns the zoom callback function to update level min and maxes.
     *
     * @param layer {ServerLayer} The layer object.
     */
    function zoomCallback( layer ) {
        return function() {
            if ( layer.olLayer ) {
                setLevelMinMax( layer );
            }
        };
    }

    /**
     * Instantiate a ServerLayer object.
     * @class ServerLayer
     * @classdesc A server rendered image layer that displays images retrieved from the server.
     *            Respective server side rendering parameters may be modified using the interface
     *            of the object.
     *
     * @param spec {Object} The Specification object.
     * <pre>
     * {
     *     opacity {float}   - The opacity of the layer. Default = 1.0.
     *     enabled {boolean} - Whether the layer is visible or not. Default = true.
     *     zIndex  {integer} - The z index of the layer. Default = 1.
     *     renderer: {
     *         coarseness {integer} - The pixel by pixel coarseness. Default based on server configuration.
     *         ramp       {String}  - The color ramp type. Default based on server configuration.
     *         rangeMin   {integer} - The minimum percentage to clamp the low end of the color ramp. Default based on server configuration.
     *         rangeMax   {integer} - The maximum percentage to clamp the high end of the color ramp. Default based on server configuration.
     *     },
     *     valueTransform: {
     *         type {String} - Value transformer type. Default based on server configuration.
     *     },
     *     tileTransform: {
     *         type {String} - Tile transformer type. Default based on server configuration.
     *         data {Object} - The tile transformer data initialization object. Default based on server configuration.
     *     }
     * }
     * </pre>
     */
    function ServerLayer( spec ) {
        var that = this,
            getURL = spec.getURL || LayerUtil.getURL;
        // call base constructor
        Layer.call( this, spec );
        // set reasonable defaults
        this.zIndex = ( spec.zIndex !== undefined ) ? parseInt( spec.zIndex, 10 ) : 1;
        spec.renderer = spec.renderer || {};
        this.renderer = spec.renderer;
        this.renderer.coarseness = ( spec.renderer.coarseness !== undefined ) ? parseInt( spec.renderer.coarseness, 10 ) : 1;
        this.renderer.rangeMin = ( spec.renderer.rangeMin !== undefined ) ? parseInt( spec.renderer.rangeMin, 10 ) : 0;
        this.renderer.rangeMax = ( spec.renderer.rangeMax !== undefined ) ? parseInt( spec.renderer.rangeMax, 10 ) : 100;
        this.valueTransform = spec.valueTransform || {};
        this.tileTransform = spec.tileTransform || {};
        this.domain = "server";
        this.source = spec.source;
        this.getURL = function( bounds ) {
            return getURL.call( this, bounds ) + that.getQueryParamString();
        };
    }

    ServerLayer.prototype = Object.create( Layer.prototype );

    /**
     * Activates the layer object. This should never be called manually.
     * @memberof ServerLayer
     * @private
     */
    ServerLayer.prototype.activate = function() {
        // set callback here so it can be removed later
        this.zoomCallback = zoomCallback( this );
        // set callback to update ramp min/max on zoom
        this.map.on( "zoomend", this.zoomCallback );
        // add the new layer
        this.olLayer = new OpenLayers.Layer.TMS(
            'Server Rendered Tile Layer',
            this.source.tms,
            {
                layername: this.source.id,
                type: 'png',
                maxExtent: new OpenLayers.Bounds(-20037500, -20037500,
                    20037500,  20037500),
                transparent: true,
                isBaseLayer: false,
                getURL: this.getURL
            });
        // set whether it is enabled or not before attaching, to prevent
        // needless tile requests
        this.setEnabled( this.isEnabled() );
        this.setTheme( this.map.getTheme() );  // sends initial request for ramp image
        this.setOpacity( this.getOpacity() );
        this.setBrightness( this.getBrightness() );
        this.setContrast( this.getContrast() );
        // publish activate event before appending to map
        PubSub.publish( this.getChannel(), { field: 'activate', value: true } );
        // attach to map
        this.map.olMap.addLayer( this.olLayer );
        // set z-index after
        this.setZIndex( this.zIndex );
        // publish add event
        PubSub.publish( this.getChannel(), { field: 'add', value: true } );
    };

    /**
     * Dectivates the layer object. This should never be called manually.
     * @memberof ServerLayer
     * @private
     */
    ServerLayer.prototype.deactivate = function() {
        if ( this.olLayer ) {
            this.map.olMap.removeLayer( this.olLayer );
            PubSub.publish( this.getChannel(), { field: 'remove', value: true } );
            this.olLayer.destroy();
            this.olLayer = null;
        }
        this.map.off( "zoomend", this.zoomCallback );
        this.zoomCallback = null;
        PubSub.publish( this.getChannel(), { field: 'deactivate', value: true } );
    };

    /**
     * Updates the theme associated with the layer.
     * @memberof ServerLayer
     *
     * @param {String} theme - The theme identifier string.
     */
    ServerLayer.prototype.setTheme = function( theme ) {
        var that = this;
        this.renderer.theme = theme;
        setRampImageUrl( that );
        this.redraw();
    };

    /**
     * Get the current theme for the layer.
     * @memberof ServerLayer
     *
     * @returns {String} The theme identifier string.
     */
    ServerLayer.prototype.getTheme = function() {
        return this.renderer.theme;
    };

    /**
     * Set the z index of the layer.
     * @memberof ServerLayer
     *
     * @param {integer} zIndex - The new z-order value of the layer, where 0 is front.
     */
    ServerLayer.prototype.setZIndex = function ( zIndex ) {
        // we by-pass the OpenLayers.Map.setLayerIndex() method and manually
        // set the z-index of the layer dev. setLayerIndex sets a relative
        // index based on current map layers, which then sets a z-index. This
        // caused issues with async layer loading.
        this.zIndex = zIndex;
        if ( this.olLayer ) {
            $( this.olLayer.div ).css( 'z-index', zIndex );
        }
        PubSub.publish( this.getChannel(), { field: 'zIndex', value: zIndex });
    };

    /**
     * Get the layers zIndex.
     * @memberof ServerLayer
     *
     * @returns {integer} The zIndex for the layer.
     */
    ServerLayer.prototype.getZIndex = function () {
        return this.zIndex;
    };

    /**
     * Set the ramp type associated with the layer.
     * @memberof ServerLayer
     *
     * @param {String} rampType - The ramp type used to render the images.
     * @param {Function} callback - Optional callback function.
     */
    ServerLayer.prototype.setRampType = function ( rampType, callback ) {
        if ( this.renderer.ramp !== rampType ) {
            this.renderer.ramp = rampType;
            setRampImageUrl( this, callback );
            this.redraw();
            PubSub.publish( this.getChannel(), {field: 'rampType', value: rampType} );
        }
    };

    /**
     * Get ramp type for layer.
     * @memberof ServerLayer
     *
     * @returns {String} The ramp identification string.
     */
    ServerLayer.prototype.getRampType = function() {
        return this.renderer.ramp;
    };

    /**
     * Get the current minimum and maximum values for the current zoom level.
     * @memberof ServerLayer
     *
     * @param {Object} The min and max of the level.
     */
    ServerLayer.prototype.getLevelMinMax = function() {
        var minMax = this.levelMinMax;

        if (this.valueTransform.layerMin && this.valueTransform.layerMin ) { // Give precedence to config override
            return {
                minimum: this.valueTransform.layerMin,
                maximum: this.valueTransform.layerMax
            };
        } else if ( minMax.maximum instanceof Array ) {
            var data = this.tileTransform.data,
                start = data.startBucket !== undefined ? data.startBucket : 0,
                stop = data.endBucket !== undefined ? data.endBucket : minMax.maximum.length-1,
                minimum = 0,
                maximum = 0,
                i;
            for ( i=start; i<=stop; i++ ) {
                minimum += minMax.minimum[i] || 0;
                maximum += minMax.maximum[i] || 0;
            }
            return {
                minimum: minimum,
                maximum: maximum
            };
        }
        return this.levelMinMax;
    };

    /**
     * Get the current ramp image URL string.
     * @memberof ServerLayer
     *
     * @returns {String} The encoded ramp image url.
     */
    ServerLayer.prototype.getRampImageUrl = function() {
        return this.rampImageUrl;
    };

    /**
     * Set the current value by which the minimum color ramp is clamped to by percentage
     * in the range [0-1].
     * @memberof ServerLayer
     *
     * @param {number} min - The range min in percentage.
     */
    ServerLayer.prototype.setRangeMinPercentage = function( min ) {
        min = Math.max( Math.min( min, 1 ), 0 ) * 100;
        if ( this.renderer.rangeMin !== min ) {
            this.renderer.rangeMin = min;
            this.redraw();
            PubSub.publish( this.getChannel(), { field: 'rangeMin', value: min });
        }
    };

    /**
     * Get the current value by which the minimum color ramp is clamped to by percentage
     * in the range [0-1].
     * @memberof ServerLayer
     *
     * @returns {number} The range max in percentage.
     */
    ServerLayer.prototype.getRangeMinPercentage = function() {
        return this.renderer.rangeMin / 100;
    };

    /**
     * Set the current value by which the maximum color ramp is clamped to by percentage
     * in the range [0-1].
     * @memberof ServerLayer
     *
     * @param {number} max - The range max in percentage.
     */
    ServerLayer.prototype.setRangeMaxPercentage = function( max ) {
        max = Math.max( Math.min( max, 1 ), 0 ) * 100;
        if ( this.renderer.rangeMax !== max ) {
            this.renderer.rangeMax = max;
            this.redraw();
            PubSub.publish( this.getChannel(), {field: 'rangeMax', value: max} );
        }
    };

    /**
     * Get the current value by which the maximum color ramp is clamped to by percentage
     * in the range [0-1].
     * @memberof ServerLayer
     *
     * @returns {number} The range min in percentage.
     */
    ServerLayer.prototype.getRangeMaxPercentage = function() {
        return this.renderer.rangeMax / 100;
    };

    /**
    * Set the current value by which the minimum color ramp is clamped to.
    * @memberof ServerLayer
    *
    * @param {number} min - The range min by value.
    */
    ServerLayer.prototype.setRangeMinValue = function( min ) {
        this.setRangeMinPercentage(
            Util.normalizeValue(
                min,
                this.getLevelMinMax(),
                this.getValueTransformType()
            )
        );
    };

    /**
    * Get the current value by which the minimum color ramp is clamped to.
    * @memberof ServerLayer
    *
    * @returns {number} The range min by value.
    */
    ServerLayer.prototype.getRangeMinValue = function() {
        return Util.denormalizeValue(
            this.getRangeMinPercentage(),
            this.getLevelMinMax(),
            this.getValueTransformType() );
    };

    /**
    * Set the current value by which the maximum color ramp is clamped to.
    * @memberof ServerLayer
    *
    * @param {number} max - The range max by value.
    */
    ServerLayer.prototype.setRangeMaxValue = function( max ) {
        this.setRangeMaxPercentage(
            Util.normalizeValue(
                max,
                this.getLevelMinMax(),
                this.getValueTransformType()
            )
        );
    };

    /**
    * Get the current value by which the maximum color ramp is clamped to.
    * @memberof ServerLayer
    *
    * @returns {number} The range max by value.
    */
    ServerLayer.prototype.getRangeMaxValue = function() {
        return Util.denormalizeValue(
            this.getRangeMaxPercentage(),
            this.getLevelMinMax(),
            this.getValueTransformType() );
    };

    /**
     * Updates the value transform function associated with the layer. Results in a POST
     * request to the server.
     * @memberof ServerLayer
     *
     * @param {String} transformType - The new new ramp function.
     */
    ServerLayer.prototype.setValueTransformType = function ( transformType ) {
        if ( this.valueTransform.type !== transformType ) {
            this.valueTransform.type = transformType;
            this.redraw();
            PubSub.publish( this.getChannel(), { field: 'valueTransformType', value: transformType });
        }
    };

    /**
     * Get the current value transform function type.
     * @memberof ServerLayer
     *
     * @return {String} The value transform type.
     */
    ServerLayer.prototype.getValueTransformType = function() {
        return this.valueTransform.type;
    };

    /**
     * Set the layers tile transform function type.
     * @memberof ServerLayer
     *
     * @param {String} transformType - The tile transformer type.
     */
    ServerLayer.prototype.setTileTransformType = function ( transformType ) {
        if ( this.tileTransform.type !== transformType ) {
            this.tileTransform.type = transformType;
            this.redraw();
            PubSub.publish( this.getChannel(), {field: 'tileTransformType', value: transformType} );
        }
    };

    /**
     * Get the layers transformer type.
     * @memberof ServerLayer
     *
     * @return {String} The tile transform type.
     */
    ServerLayer.prototype.getTileTransformType = function () {
        return this.tileTransform.type;
    };

	/**
     * Set the tile transform data based on the time range passed in
     * @memberof ServerLayer
     *
     * @param {number} start - A unix timestamp representing the start of the time range
     * @param {number} end - A unix timestamp representing the end of the time range
     */
    ServerLayer.prototype.setTileTransformRange = function ( start, end ) {
        var meta = this.source.meta.meta,
			rangeMin = meta.rangeMin,
			rangeMax = meta.rangeMax,
			numBuckets = meta.bucketCount,
            bucketSize = ( rangeMax - rangeMin ) / numBuckets;
        if ( start > rangeMax && end < rangeMin ) {
            // outside range completely, send empty request
			this.setTileTransformData({
    			startBucket: -1,
    			endBucket: -1
            });
		}
        this.setTileTransformData({
			startBucket: Math.max( 0, Math.floor( ( start - rangeMin ) / bucketSize ) ),
			endBucket: Math.min( numBuckets-1, Math.floor( ( end - rangeMin ) / bucketSize ) )
        });
	};

    /**
     * Set the tile transform data attribute
     * @memberof ServerLayer
     *
     * @param {Object} transformData - The tile transform data attribute.
     */
    ServerLayer.prototype.setTileTransformData = function ( transformData ) {
        if ( !_.isEqual( this.tileTransform.data, transformData ) ) {
            this.tileTransform.data = transformData;
            this.redraw();
            PubSub.publish( this.getChannel(), {field: 'tileTransformData', value: transformData} );
        }
    };

    /**
     * Get the transformer data attribute.
     * @memberof ServerLayer
     *
     * @returns {Object} The tile transform data attribute.
     */
    ServerLayer.prototype.getTileTransformData = function () {
        return this.tileTransform.data || {};
    };

    /**
     * Set the layers pixel coarseness.
     * @memberof ServerLayer
     *
     * @param coarseness {integer} The pixel by pixel coarseness of the layer
     */
    ServerLayer.prototype.setCoarseness = function( coarseness ) {
        if ( this.renderer.coarseness !== coarseness ) {
            this.renderer.coarseness = coarseness;
            setLevelMinMax( this ); // coarseness modifies the min/max
            this.redraw();
            PubSub.publish( this.getChannel(), { field: 'coarseness', value: coarseness });
        }
    };

    /**
     * Get the layers pixel coarseness.
     * @memberof ServerLayer
     *
     * @returns {integer} The layers coarseness in N by N pixels.
     */
    ServerLayer.prototype.getCoarseness = function() {
        return this.renderer.coarseness;
    };

    ServerLayer.prototype.setFilterParams = function( filter ) {
    	this.filterParams = filter;
    	this.redraw();
    };

    ServerLayer.prototype.getFilterParams = function(){
    	return this.filterParams ? this.filterParams : null;
    };

    /**
     * Generate query parameters based on state of layer
     * @memberof ServerLayer
     *
     * @returns {String} The query parameter string based on the attributes of this layer.
     */
    ServerLayer.prototype.getQueryParamString = function() {
        var query = {
            renderer: this.renderer,
            tileTransform: this.tileTransform,
            valueTransform: this.valueTransform,
            filter: this.getFilterParams()
        };
        return Util.encodeQueryParams( query );
    };

    /**
     * Redraws the entire layer.
     * @memberof ServerLayer
     */
    ServerLayer.prototype.redraw = function () {
        if ( this.olLayer ) {
            setLevelMinMax( this );
            this.olLayer.redraw();
            // If we're using the TileManager we need to force it into a refresh. There is no nice way to
            // do this as of 2.13.1, so we fake the expiry of the move/zoom timeout.
            if ( this.olLayer.map && this.olLayer.map.tileManager ) {
                this.olLayer.map.tileManager.updateTimeout(
                    this.olLayer.map,
                    this.olLayer.map.tileManager.zoomDelay,
                    true );
            }
        }
    };

    module.exports = ServerLayer;
}());

},{"../rest/LegendService":49,"../util/PubSub":59,"../util/Util":60,"./Layer":15,"./LayerUtil":16}],21:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var HtmlTile = require('./HtmlTile');

    function clampBounds( bounds, layer ) {
        bounds = bounds.clone();
        if ( layer.dimension === "x" ) {
            bounds.bottom = layer.map.getMaxExtent().bottom;
            bounds.top = layer.map.getMaxExtent().bottom + 1;
        } else {
            bounds.left = layer.map.getMaxExtent().left;
            bounds.right = layer.map.getMaxExtent().left + 1;
        }
        return bounds;
    }

    OpenLayers.Tile.Univariate = function() {
        OpenLayers.Tile.HTML.apply( this, arguments );
    };

    OpenLayers.Tile.Univariate.prototype = Object.create( HtmlTile.prototype );

    /**
     * Override this method to clamp the 'mapExtent' value for the map
     * object.
     */
    OpenLayers.Tile.Univariate.prototype.shouldDraw = function() {
        var withinMaxExtent = false,
            maxExtent = clampBounds( this.layer.maxExtent, this.layer );
        if ( maxExtent ) {
            var map = this.layer.map,
                bounds = map.getMaxExtent();
            var worldBounds = map.baseLayer.wrapDateLine && clampBounds( bounds, this.layer );
            if ( this.bounds.intersectsBounds( maxExtent, {inclusive: false, worldBounds: worldBounds} ) ) {
                withinMaxExtent = true;
            }
        }
        return withinMaxExtent || this.layer.displayOutsideMaxExtent;
    };

    /**
     * Override this method to inject the 'olUnivariateTile' class instead
     * of the usual olHtmlTile.
     */
    OpenLayers.Tile.Univariate.prototype.getImage = function() {
        if ( !this.imgDiv ) {
            this.imgDiv = document.createElement( 'div' );
            this.imgDiv.className = 'olTileUnivariate';
            var style = this.imgDiv.style;
            style.visibility = "hidden";
            style.opacity = 0;
            if ( this.layer.opacity < 1 ) {
                style.filter = 'alpha(opacity=' + (this.layer.opacity * 100) + ')';
            }
            style.position = "absolute";
        }
        return this.imgDiv;
    };

    /**
     * Override this method to inject the 'olUnivariateTile' class instead
     * of the usual olHtmlTile.
     */
    OpenLayers.Tile.Univariate.prototype.positionTile = function() {
        var style = this.getTile().style,
            size = this.layer.getImageSize(this.bounds),
            ratio = 1;
        if ( this.layer instanceof OpenLayers.Layer.Grid ) {
            ratio = this.layer.getServerResolution() / this.layer.map.getResolution();
        }
        style.left = this.position.x + "px";
        style.top = "-256px";
        style.width = Math.round(ratio * size.w) + "px";
        style.height = Math.round(ratio * size.h) + "px";
    };

    module.exports = OpenLayers.Tile.Univariate;
}());

},{"./HtmlTile":12}],22:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var UnivariateTile = require('./UnivariateTile');

    function clampBounds( bounds, layer ) {
        bounds = bounds.clone();
        if ( layer.dimension === "x" ) {
            bounds.bottom = layer.map.getMaxExtent().bottom;
            bounds.top = layer.map.getMaxExtent().bottom + 1;
        } else {
            bounds.left = layer.map.getMaxExtent().left;
            bounds.right = layer.map.getMaxExtent().left + 1;
        }
        return bounds;
    }

    function repositionLayer( map, layer ) {
        var $viewport = $( map.viewPortDiv ),
            $div = $( layer.div ),
            height = $viewport.height();
        if ( layer.dimension === "x" )  {
            $div.css( 'top', height );
        } else {
            $div.css( 'left', 0 );
        }
        updateTilePositions(map, layer);
    }

    function onMapMove( map, layer ) {
        return function() {
            updateTilePositions(map, layer);
        };
    }

    function updateTilePositions(map, layer) {
        var $container = $( layer.div ).parent(),
            $viewport = $( map.viewPortDiv ),
            $div = $( layer.div ),
            offset = $container.position(),
            height = $viewport.height();
        if ( layer.dimension === "x" ) {
            // reset tile position within the layer div
            $div.children().each( function() {
                $( this ).css( 'top', -256 );
            });
            // then set div position
            $div.css( 'top', height - offset.top );
        } else {
            // reset tile position within the layer div
            $div.children().each( function() {
                $( this ).css( 'left', 0 );
            });
            // then set div position
            $div.css( 'left', -offset.left );
        }
    }

    OpenLayers.Layer.Univariate = function( name, url, options ) {
        OpenLayers.Layer.Grid.call( this, name, url, options );
        this.getURL = options.getURL;
        this.layername = options.layername;
        this.dimension = options.dimension || 'x';
        this.type = options.type;
        this.tileClass = options.tileClass || UnivariateTile;
        this.html = options.html;
        this.renderer = options.renderer;
        this.CLASS_NAME = 'OpenLayers.Layer.Univariate';
    };

    OpenLayers.Layer.Univariate.prototype = Object.create( OpenLayers.Layer.Grid.prototype );

    /**
     * Override to set all children the opacity.
     */
    OpenLayers.Layer.Univariate.prototype.setOpacity = function( opacity ) {
        if ( opacity !== this.opacity ) {
            this.opacity = Math.max( Math.min( opacity, 1 ), 0 );
            var childNodes = this.div.childNodes;
            for( var i = 0, len = childNodes.length; i < len; ++i ) {
                childNodes[i].style.opacity = this.opacity;
            }
            if ( this.map !== null ) {
                this.map.events.triggerEvent( "changelayer", {
                    layer: this,
                    property: "opacity"
                });
            }
        }
    };

    /**
     * Override this method to add a positioning function to clamp
     * the layers tiles to the appropriate axis.
     */
    OpenLayers.Layer.Univariate.prototype.setMap = function( map ) {
        OpenLayers.Layer.Grid.prototype.setMap.apply( this, arguments );
        this.onMapMove = onMapMove( map, this );
        map.events.register( 'move', map, this.onMapMove );
        repositionLayer( map, this ); // set position
    };

    /**
     * Override this method to remove the positioning function to clamp
     * the layers tiles to the appropriate axis.
     */
    OpenLayers.Layer.Univariate.prototype.removeMap = function( map ) {
        OpenLayers.Layer.Grid.prototype.removeMap.apply( this, arguments );
        map.events.unregister( 'move', map, this.onMapMove );
        this.onMapMove = null;
    };

    /**
     * Override this method to re-position the layer and prevent a redraw which
     * will reposition the tiles.
     */
    OpenLayers.Layer.Univariate.prototype.setVisibility = function( visibility ) {
        OpenLayers.Layer.Grid.prototype.setVisibility.apply( this, arguments );
        if ( this.onMapMove && visibility ) {
            repositionLayer( this.map, this );
        }
    };

    OpenLayers.Layer.Univariate.prototype.getExtent = function() {
        return clampBounds( this.map.calculateBounds(), this );
    };

    OpenLayers.Layer.Univariate.prototype.redraw = function() {
        var redrawn = false;
        if (this.map) {
            // min/max Range may have changed
            this.inRange = this.calculateInRange();
            // map's center might not yet be set
            var extent = this.getExtent();
            if ( extent && this.inRange && this.visibility ) {
                var zoomChanged = true;
                this.moveTo( extent, zoomChanged, false );
                this.events.triggerEvent("moveend",
                    {"zoomChanged": zoomChanged});
                redrawn = true;
                repositionLayer( this.map, this );
            }
        }
        return redrawn;
    };

    /**
     * Override this method to clamp the 'maxExtents' value returned from the
     * map object.
     */
    OpenLayers.Layer.Univariate.prototype.moveTo = function( bounds, zoomChanged, dragging ) {

        if ( !bounds ) {
            bounds = this.map.getExtent();
        }

        if ( bounds !== null ) {

            bounds = clampBounds( bounds, this );

            // if grid is empty or zoom has changed, we *must* re-tile
            var forceReTile = !this.grid.length || zoomChanged;

            // total bounds of the tiles
            var tilesBounds = this.getTilesBounds();

            // the new map resolution
            var resolution = this.map.getResolution();

            // the server-supported resolution for the new map resolution
            var serverResolution = this.getServerResolution(resolution);

            if ( this.singleTile ) {

                // We want to redraw whenever even the slightest part of the
                //  current bounds is not contained by our tile.
                //  (thus, we do not specify partial -- its default is false)

                if ( forceReTile ||
                     ( !dragging && !tilesBounds.containsBounds( bounds ) ) ) {

                    // In single tile mode with no transition effect, we insert
                    // a non-scaled backbuffer when the layer is moved. But if
                    // a zoom occurs right after a move, i.e. before the new
                    // image is received, we need to remove the backbuffer, or
                    // an ill-positioned image will be visible during the zoom
                    // transition.

                    if ( zoomChanged && this.transitionEffect !== 'resize' ) {
                        this.removeBackBuffer();
                    }

                    if ( !zoomChanged || this.transitionEffect === 'resize' ) {
                        this.applyBackBuffer( serverResolution );
                    }

                    this.initSingleTile( bounds );
                }
            } else {

                // if the bounds have changed such that they are not even
                // *partially* contained by our tiles (e.g. when user has
                // programmatically panned to the other side of the earth on
                // zoom level 18), then moveGriddedTiles could potentially have
                // to run through thousands of cycles, so we want to reTile
                // instead (thus, partial true).
                forceReTile = forceReTile ||
                    !tilesBounds.intersectsBounds( bounds, {
                        worldBounds: this.map.baseLayer.wrapDateLine &&
                            clampBounds( this.map.getMaxExtent(), this )
                    });

                if ( resolution !== serverResolution ) {
                    bounds = this.map.calculateBounds( null, serverResolution );
                    bounds = clampBounds( bounds, this );
                    if( forceReTile ) {
                        // stretch the layer div
                        var scale = serverResolution / resolution;
                        this.transformDiv( scale );
                    }
                } else {
                    // reset the layer width, height, left, top, to deal with
                    // the case where the layer was previously transformed
                    this.div.style.width = '100%';
                    this.div.style.height = '100%';
                    this.div.style.left = '0%';
                    this.div.style.top = '0%';
                }

                if ( forceReTile ) {
                    if ( zoomChanged && this.transitionEffect === 'resize' ) {
                        this.applyBackBuffer( serverResolution );
                    }
                    this.initGriddedTiles( bounds );
                } else {
                    this.moveGriddedTiles();
                }
            }
        }
    };

    /**
     * Override this method to only shift the appropriate row or column
     * of the grid depending the the dimension this layer represents.
     */
    OpenLayers.Layer.Univariate.prototype.moveGriddedTiles = function() {
        var buffer = this.buffer + 1;
        while(true) {
            var tlTile = this.grid[0][0];
            var tlViewPort = {
                x: tlTile.position.x +
                this.map.layerContainerOriginPx.x,
                y: tlTile.position.y +
                this.map.layerContainerOriginPx.y
            };
            var ratio = this.getServerResolution() / this.map.getResolution();
            var tileSize = {
                w: Math.round(this.tileSize.w * ratio),
                h: Math.round(this.tileSize.h * ratio)
            };
            if (this.dimension === 'x') {
                if (tlViewPort.x > -tileSize.w * (buffer - 1)) {
                    this.shiftColumn(true, tileSize);
                } else if (tlViewPort.x < -tileSize.w * buffer) {
                    this.shiftColumn(false, tileSize);
                } else {
                    break;
                }
            } else {
                if (tlViewPort.y > -tileSize.h * (buffer - 1)) {
                    this.shiftRow(true, tileSize);
                } else if (tlViewPort.y < -tileSize.h * buffer) {
                    this.shiftRow(false, tileSize);
                } else {
                    break;
                }
            }
        }
    };
    module.exports = OpenLayers.Layer.Univariate;
}());

},{"./UnivariateTile":21}],23:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function() {

    "use strict";

    var Layer = require('./Layer'),
        PubSub = require('../util/PubSub');

    /**
     * Instantiate a VectorLayer object.
     * @class VectorLayer
     * @augments Layer
     * @classdesc A client rendered layer object.
     *
     * @param {Object} spec - The specification object.
     * <pre>
     * {
     *     opacity  {float}    - The opacity of the layer. Default = 1.0
     *     enabled  {boolean}  - Whether the layer is visible or not. Default = true
     *     zIndex   {integer}  - The z index of the layer. Default = 1000
     *     vectors {Array}     - Array of OpenLayers Vector objects to add to the map
     * }
     * </pre>
     */
    function VectorLayer(spec) {
        // call base constructor
        Layer.call(this, spec);
        // set reasonable defaults
        this.zIndex = spec.zIndex || 749;
        this.domain = spec.domain || "vector";
        this.source = spec.source;
        this.styleMap = spec.styleMap;
        this.strategies = spec.strategies;
        this.getData = spec.getData;
        this.teardown = spec.teardown;
        this.olFeatures = spec.olFeatures || [];
        this.group = spec.group || "";
    }

    VectorLayer.prototype = Object.create(Layer.prototype);

    /**
     * Activates the layer object. This should never be called manually.
     * @memberof VectorLayer
     * @private
     */
    VectorLayer.prototype.activate = function() {
        var layerSpec = {};
        if ( this.strategies ) {
            layerSpec.strategies = this.strategies;
        }
        if ( this.styleMap ) {
            layerSpec.styleMap = this.styleMap;
        }
        this.olLayer = new OpenLayers.Layer.Vector("Vector Layer", layerSpec);
        this.setEnabled( this.isEnabled() );
        this.setOpacity( this.getOpacity() );
        this.setBrightness( this.getBrightness() );
        this.setContrast( this.getContrast() );
        this.setTheme( this.map.getTheme() );
        // publish activate event before appending to map
        PubSub.publish( this.getChannel(), { field: 'activate', value: true } );
        this.map.olMap.addLayer( this.olLayer );
        if ( this.getData ) {
            this.getData( this );
        }
        if ( this.olFeatures ) {
            this.setFeatures( this.olFeatures );
        }
        this.setZIndex( this.zIndex );
        // publish add event
        PubSub.publish( this.getChannel(), { field: 'add', value: true } );
    };

    /**
     * Dectivates the layer object. This should never be called manually.
     * @memberof VectorLayer
     * @private
     */
    VectorLayer.prototype.deactivate = function() {
        if (this.teardown) {
            this.teardown();
        }
        if (this.olLayer) {
            if (this.olLayer.strategies) {
                this.olLayer.strategies.forEach(function(strategy) {
                    strategy.deactivate();
                });
            }
            this.olLayer.strategies = [];
            this.map.olMap.removeLayer(this.olLayer);
            PubSub.publish( this.getChannel(), { field: 'remove', value: true } );
            this.olLayer.destroyFeatures();
            this.olLayer.destroy();
            this.olLayer = null;
        }
        PubSub.publish( this.getChannel(), { field: 'deactivate', value: true } );
    };

    /**
     * Remove all features from the layer and add the new features
     * passed in
     *
     * @param {Array} featuresToAdd - Array of OpenLayers Features
     */
    VectorLayer.prototype.setFeatures = function(featuresToAdd) {
        if (this.olLayer) {
            this.olLayer.destroyFeatures();
            this.olFeatures = featuresToAdd;
            this.olLayer.addFeatures(featuresToAdd);
        }
    };

    /**
     * Updates the theme associated with the layer.
     * @memberof VectorLayer
     *
     * @param {String} theme - The theme identifier string.
     */
    VectorLayer.prototype.setTheme = function(theme) {
        this.theme = theme;
    };

    /**
     * Get the current theme for the layer.
     * @memberof VectorLayer
     *
     * @returns {String} The theme identifier string.
     */
    VectorLayer.prototype.getTheme = function() {
        return this.theme;
    };

    /**
     * Set the z index of the layer.
     * @memberof VectorLayer
     *
     * @param {integer} zIndex - The new z-order value of the layer, where 0 is front.
     */
    VectorLayer.prototype.setZIndex = function(zIndex) {
        // we by-pass the OpenLayers.Map.setLayerIndex() method and manually
        // set the z-index of the layer dev. setLayerIndex sets a relative
        // index based on current map layers, which then sets a z-index. This
        // caused issues with async layer loading.
        this.zIndex = zIndex;
        if (this.olLayer) {
            $(this.olLayer.div).css('z-index', zIndex);
            PubSub.publish(this.getChannel(), {
                field: 'zIndex',
                value: zIndex
            });
        }
    };

    /**
     * Get the layers zIndex.
     * @memberof VectorLayer
     *
     * @returns {integer} The zIndex for the layer.
     */
    VectorLayer.prototype.getZIndex = function() {
        return this.zIndex;
    };

    module.exports = VectorLayer;
}());

},{"../util/PubSub":59,"./Layer":15}],24:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Renderer = require('./Renderer'),
        RendererUtil = require('./RendererUtil'),
        injectCss,
        getLabelWidth,
        capitalize;

    injectCss = function( spec ) {
        var i;
        if ( spec.text.themes ) {
            for ( i=0; i<spec.text.themes.length; i++ ) {
                spec.text.themes[i].injectTheme({
                    selector: ".node-label"
                });
            }
        }
    };

    /**
     * Returns the pixel width of the label
     */
     getLabelWidth = function( str, fontSize ) {
        var $temp,
            width;
        $temp = $('<div class="node-label" style="font-size:'+fontSize+'px; padding-left:5px; padding-right:5px;">'+str+'</div>');
        $('body').append( $temp );
        width = $temp.outerWidth();
        $temp.remove();
        return width;
    };

    /**
     * Capitalizes the given word.
     */
    capitalize = function( str ) {
        return str.replace(/(?:^|,|\s)\S/g, function( a ) {
            return a.toUpperCase();
        });
    };

    /**
     * Instantiate a GraphLabelRenderer object.
     * @class GraphLabelRenderer
     * @augments Renderer
     * @classDesc A Renderer implementation that renders a set of graph labels.
     *
     * @param spec {Object} The specification object.
     * <pre>
     * {
     *     text: {
     *         xKey   {String|Function} - The attribute for the x coordinate.
     *         yKey   {String|Function} - The attribute for the y coordinate.
     *         themes {Array}  - The array of RenderThemes to be attached to this component.
     *     }
     * }
     * </pre>
     */
    function GraphLabelRenderer( spec ) {
        spec.rootKey = spec.rootKey || "tile.values[0].value[0].communities";
        Renderer.call( this, spec );
        injectCss( this.spec );
    }

    GraphLabelRenderer.prototype = Object.create( Renderer.prototype );

    /**
     * Implementation specific rendering function.
     * @memberof GraphLabelRenderer
     * @private
     *
     * @param {Object} data - The raw data for a tile to be rendered.
     *
     * @returns {{html: string, entries: Array}} The html to render and an array of all rendered data entries.
     */
    GraphLabelRenderer.prototype.render = function( data ) {

        var GRAPH_COORD_RANGE = 256,
            text = this.spec.text,
            levelMinMax = this.parent.getLevelMinMax(),
            communities = RendererUtil.getAttributeValue( data, this.spec.rootKey ),
            scale = Math.pow( 2, this.parent.map.getZoom() ),
            range =  GRAPH_COORD_RANGE / scale,
            labelIndex = ( text.labelIndex !== undefined ) ? text.labelIndex : 0,
            community,
            html = "",
            count,
            fontSize,
            split,
            label,
            width,
            minimumCount,
            maximumCount,
            percent,
            percentLabel,
            hierLevel,
            parentIDarray = [],
            entries = [],
            x, y, i;



        // get graph hierarchy level for this zoom level
        // assumes same hierarchy level for all tiles at a given zoom level
        hierLevel = levelMinMax.maximum.communities[0].hierLevel;

        // if hierLevel = 0, normalize label attributes by community degree
        // else normalize label attributes by num internal nodes
        if ( hierLevel === 0 ) {
            minimumCount =  levelMinMax.minimum.communities[0].degree;
            maximumCount =  levelMinMax.maximum.communities[0].degree;
        } else {
            minimumCount =  levelMinMax.minimum.communities[0].numNodes;
            maximumCount =  levelMinMax.maximum.communities[0].numNodes;
        }

        for ( i=0; i<communities.length; i++ ) {

            community = communities[i];

            // capitalize label array, split by comma
            split = community.metadata.split(",");
            // don't draw labels for isolated communities
            // and don't render if label string is empty
            // only draw one label per parent community per tile
            // only draw up to 5 labels per tile
            if ( community.degree === 0 ||
                 split[ labelIndex ] === "" ||
                 parentIDarray.length >= 5 ||
                 parentIDarray.indexOf( community.parentID ) !== -1 ) {
                // Skip this label entry
                continue;
            }
            else {
                // add this parent ID to the list, and draw the label (below
                parentIDarray.push( community.parentID );
            }

            // add to entries only if there is a legible label
            entries.push( community );

            // get label position
            x = ( community[ text.xKey ] % range ) * scale;
            y = ( community[ text.yKey ] % range ) * scale;

            // capitalize label
            label = capitalize( split[ labelIndex ].toLowerCase() );

            // get font scale based on hierarchy level
            count = ( hierLevel === 0 ) ? community.degree : community.numNodes;
            fontSize = RendererUtil.getFontSize(
                count, minimumCount, maximumCount, { type:'log' } );

            // calc percent label
            percent = RendererUtil.transformValue( count, minimumCount, maximumCount, 'log' );
            percentLabel = Math.round( ( percent*100 ) / 10 ) * 10;

            // calc width for centering
            width = getLabelWidth( label, fontSize );
            width = Math.min( width, 200 );

            html += '<div class="node-label node-label-'+percentLabel+'" style="'
                + 'left:'+x+'px;'
                + 'bottom:'+y+'px;'
                + 'font-size:' + fontSize + 'px;'
                + 'line-height:' + fontSize + 'px;'
                + 'width:' + width + 'px;'
                + 'margin-left:' + (-width/2) + 'px;'
                + 'margin-top:' + (-fontSize/2) + 'px;'
                + 'height:' + fontSize + 'px;'
                + 'z-index:' + Math.floor( fontSize ) + ';'
                + '">'+label+'</div>';

        }
        return {
            html: html,
            entries: entries
        };
    };

    module.exports = GraphLabelRenderer;
}());

},{"./Renderer":29,"./RendererUtil":30}],25:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Renderer = require('./Renderer'),
        RendererUtil = require('./RendererUtil'),
        injectCss;

    injectCss = function( spec ) {
        var i;
        if ( spec.node.themes ) {
            for (i = 0; i < spec.node.themes.length; i++) {
                spec.node.themes[i].injectTheme({
                    selector: ".community-node"
                });
            }
        }
        if ( spec.criticalNode.themes ) {
            for (i = 0; i < spec.criticalNode.themes.length; i++) {
                spec.criticalNode.themes[i].injectTheme({
                    selector: ".community-node.community-critical-node"
                });
            }
        }
        if ( spec.parentNode.themes ) {
            for (i = 0; i < spec.parentNode.themes.length; i++) {
                spec.parentNode.themes[i].injectTheme({
                    selector: ".community-parent-node"
                });
            }
        }
    };

    /**
     * Instantiate a GraphNodeRenderer object.
     * @class GraphNodeRenderer
     * @augments Renderer
     * @classDesc A Renderer implementation that renders a set of graph nodes.
     *
     * @param spec {Object} The specification object.
     * <pre>
     * {
     *     node: {
     *         xKey      {String|Function} - The attribute for the x coordinate.
     *         yKey      {String|Function} - The attribute for the y coordinate.
     *         radiusKey {String|Function} - The attribute for the node radius.
     *         themes    {Array}   The array of RenderThemes to be attached to this component.
     *     },
     *     criticalNode: {
     *         flag     {String|Function} - The boolean attribute to designate critical nodes.
     *         themes   {Array}  - The array of RenderThemes to be attached to this component.
     *     },
     *     parentNode: {
     *         xKey      {String|Function} - The attribute for the parent node x coordinate.
     *         yKey      {String|Function} - The attribute for the parent node y coordinate.
     *         radiusKey {String|Function} - The attribute for the node radius.
     *         themes    {Array}  - The array of RenderThemes to be attached to this component.
     *     }
     * }
     * </pre>
     */
    function GraphNodeRenderer( spec ) {
        spec.rootKey = spec.rootKey || "tile.values[0].value[0].communities";
        spec.node = spec.node || {};
        spec.node.xKey = spec.node.xKey || 'x';
        spec.node.yKey = spec.node.yKey || 'y';
        spec.node.radiusKey = spec.node.radiusKey || 'r';
        spec.parentNode = spec.parentNode || {};
        spec.parentNode.xKey = spec.parentNode.xKey || 'parentX';
        spec.parentNode.yKey = spec.parentNode.yKey || 'parentY';
        spec.parentNode.radiusKey = spec.parentNode.radiusKey || 'parentR';
        spec.criticalNode = spec.criticalNode || {};
        spec.criticalNode.flag = spec.criticalNode.flag || 'isPrimaryNode';
        Renderer.call( this, spec );
        injectCss( this.spec );
    }

    GraphNodeRenderer.prototype = Object.create( Renderer.prototype );

    /**
     * Implementation specific rendering function.
     * @memberof GraphNodeRenderer
     * @private
     *
     * @param {Object} data - The raw data for a tile to be rendered.
     *
     * @returns {{html: string, entries: Array}} The html to render and an array of all rendered data entries.
     */
    GraphNodeRenderer.prototype.render = function( data ) {

        var GRAPH_COORD_RANGE = 256,
            BORDER_WIDTH = 2,
            spec = this.spec,
            communities = RendererUtil.getAttributeValue( data, spec.rootKey ),
            scale = Math.pow( 2, this.parent.map.getZoom() ),
            range =  GRAPH_COORD_RANGE / scale,
            className,
            community,
            radius,
            diameter,
            parentRadius,
            parentDiameter,
            html = '',
            entries = [],
            i, x, y, px, py;

        for ( i=0; i<communities.length; i++ ) {

            community = communities[i];
            entries.push( community );

            // get node position, radius, and diameter
            x = ( community[ spec.node.xKey ] % range ) * scale;
            y = ( community[ spec.node.yKey ] % range ) * scale;
            radius = community[ spec.node.radiusKey ] * scale;
            diameter = radius*2;

            // don't draw node if radius < 1
            // or if it is an isolated community
            if ( radius < 1 || community.degree === 0 ) {
                continue;
            }

            if ( community[ spec.criticalNode.flag ] ) {
                className = 'community-node community-critical-node';
            } else {
                className = 'community-node';
            }

            // draw node
            html += '<div class="'+className+'" style="'
                  + 'height:'+diameter+'px;'
                  + 'width:'+diameter+'px;'
                  + 'border-radius:'+diameter+'px;'
                  + 'left:'+(x - radius - BORDER_WIDTH)+'px;'
                  + 'bottom:'+(y - radius - BORDER_WIDTH)+'px;'
                  + 'border-width:' + BORDER_WIDTH + 'px;'
                  + '"></div>';

            // only have the critical node draw the parent
            // assumes there is a critical node present in all communities
            if ( community[ spec.criticalNode.flag ] ) {

                // get parent node position, radius, and diameter
                px = ( community[ spec.parentNode.xKey ] % range ) * scale;
                py = ( community[ spec.parentNode.yKey ] % range ) * scale;
                parentRadius = community[ spec.parentNode.radiusKey ] * scale;
                parentDiameter = parentRadius * 2;

                // draw parent node
                html += '<div class="community-parent-node" style="'
                      + 'height:'+parentDiameter+'px;'
                      + 'width:'+parentDiameter+'px;'
                      + 'border-radius:'+parentDiameter+'px;'
                      + 'left:'+(px - parentRadius - BORDER_WIDTH)+'px;'
                      + 'bottom:'+(py - parentRadius - BORDER_WIDTH)+'px;'
                      + 'border-width:' + BORDER_WIDTH + 'px;'
                      + '"></div>';
            }
        }
        return {
            html: html,
            entries: entries
        };
    };

    module.exports = GraphNodeRenderer;
}());

},{"./Renderer":29,"./RendererUtil":30}],26:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Renderer = require('./Renderer'),
        RendererUtil = require('./RendererUtil'),
        MapUtil = require('../../map/MapUtil'),
        injectCss;

    injectCss = function( spec ) {
        var i;
        if ( spec.point.themes ) {
            for ( i = 0; i < spec.point.themes.length; i++ ) {
                spec.point.themes[i].injectTheme({
                    selector: ".point-annotation-fill",
                    parentSelector: ".point-annotation-aggregate"
                });
            }
        }
        if ( spec.aggregate.themes ) {
            for ( i = 0; i < spec.aggregate.themes.length; i++ ) {
                spec.aggregate.themes[i].injectTheme({
                    selector: ".point-annotation-border",
                    parentSelector: ".point-annotation-aggregate"
                });
            }
        }
    };

    /**
     * Instantiate a PointAggregateRenderer object.
     * @class PointAggregateRenderer
     * @augments Renderer
     * @classDesc A Renderer implementation that renders clusters of circular points for each
     * data value group.
     *
     * @param spec {Object} The specification object.
     * <pre>
     * {
     *     point: {
     *         xKey   {String|Function} - The attribute for the x coordinate.
     *         yKey   {String|Function} - The attribute for the y coordinate.
     *         themes {Array}  - The array of RenderThemes to be attached to this component.
     *     }
     *     aggregate: {
     *         themes {Array}  - The array of RenderThemes to be attached to this component.
     *     }
     * }
     * </pre>
     */
    function PointAggregateRenderer( spec ) {
        spec.rootKey = spec.rootKey || "tile.values";
        spec.point = spec.point || {};
        spec.point.xKey = spec.point.xKey || 'x';
        spec.point.yKey = spec.point.yKey || 'y';
		spec.point.magnitude.min = spec.point.magnitude.min || -1;
		spec.point.magnitude.max = spec.point.magnitude.max || -1;
        Renderer.call( this, spec );
        injectCss( this.spec );
    }

    PointAggregateRenderer.prototype = Object.create( Renderer.prototype );

    /**
     * Implementation specific rendering function.
     * @memberof PointAggregateRenderer
     * @private
     *
     * @param {Object} data - The raw data for a tile to be rendered.
     *
     * @returns {{html: string, entries: Array}} The html to render and an array of all rendered data entries.
     */
    PointAggregateRenderer.prototype.render = function( data ) {

        var spec = this.spec,
            map = this.parent.map,
            values = RendererUtil.getAttributeValue( data, spec.rootKey ),
            point = spec.point,
            entries = [],
            positionMap = {},
            positionKey,
            tilekey,
            tilePos,
            html = '',
            position,
            offset,
            value,
            i, j;

        // get tilekey
        tilekey = data.index.level + "," + data.index.xIndex + "," + data.index.yIndex;
        // get tile pos
        tilePos = MapUtil.getTopLeftViewportPixelForTile( map, tilekey );

        // for each bin
        for ( i=0; i<values.length; i++ ) {

            value = values[i].value;

            if ( value.length === 0 ) {
                continue;
            }
            entries.push( value );

            html += '<div class="point-annotation-aggregate">';

            for ( j=0; j<value.length; j++ ) {

                // get position in viewport space
                position = MapUtil.getViewportPixelFromCoord( map, value[j][point.xKey], value[j][point.yKey] );
                // get relative position from tile top left
                offset = {
                    x: position.x - tilePos.x,
                    y: position.y - tilePos.y
                };
                // prevent creating two annotations on the exact same pixel
                positionKey = Math.floor( offset.x ) + "," + Math.floor( offset.y );
                if ( !positionMap[ positionKey ] ) {
                    positionMap[ positionKey ] = true;
					// calculate proper colour based on magnitude, if present
					var percent = "";
					if ( spec.point.magnitude.min > 0 && spec.point.magnitude.max > 0 && value[j].data.magnitude ) {
						// get percent and round up to nearest 10
						var percent_value = ((value[j].data.magnitude - spec.point.magnitude.min)/(spec.point.magnitude.max - spec.point.magnitude.min))*100;
						percent = "-" + Math.ceil(percent_value/10)*10;
					}
                    html += '<div class="point-annotation point-annotation-fill' + percent + '" style="'
                          + 'left:' + offset.x + 'px;'
                          + 'top:' + offset.y + 'px;'
                          + 'border-width: 2px;"';
                    if (value[j].data.labels) {
                        html += ' title="' + value[j].data.labels + '"';
                    }
                    html += '></div>'
                          + '<div class="point-annotation point-annotation-border" style="'
                          + 'left:' + offset.x + 'px;'
                          + 'top:' + offset.y + 'px;'
                          + 'border-width: 2px"></div>';
                }
            }

            html += '</div>';
        }
        return {
            html: html,
            entries: entries
        };
    };

    module.exports = PointAggregateRenderer;
}());

},{"../../map/MapUtil":45,"./Renderer":29,"./RendererUtil":30}],27:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Renderer = require('./Renderer'),
        RendererUtil = require('./RendererUtil'),
        MapUtil = require('../../map/MapUtil'),
        injectCss;

    injectCss = function( spec ) {
        var i;
        if ( spec.point.themes ) {
            for (i = 0; i < spec.point.themes.length; i++) {
                spec.point.themes[i].injectTheme({
                    selector: ".point-annotation"
                });
            }
        }
    };

    /**
     * Instantiate a PointRenderer object.
     * @class PointRenderer
     * @augments Renderer
     * @classDesc A Renderer implementation that renders a circular point for each data
     * value.
     *
     * @param spec {Object} The specification object.
     * <pre>
     * {
     *     point: {
     *         xKey   {String|Function} - The attribute for the x coordinate.
     *         yKey   {String|Function} - The attribute for the y coordinate.
     *         themes {Array}  - The array of RenderThemes to be attached to this component.
     *     }
     * }
     * </pre>
     */
    function PointRenderer( spec ) {
        spec.rootKey = spec.rootKey || "tile.values";
        spec.point = spec.point || {};
        spec.point.xKey = spec.point.xKey || 'x';
        spec.point.yKey = spec.point.yKey || 'y';
        Renderer.call( this, spec );
        injectCss( this.spec );
    }

    PointRenderer.prototype = Object.create( Renderer.prototype );

    /**
     * Implementation specific rendering function.
     * @memberof PointRenderer
     * @private
     *
     * @param {Object} data - The raw data for a tile to be rendered.
     *
     * @returns {{html: string, entries: Array}} The html to render and an array of all rendered data entries.
     */
    PointRenderer.prototype.render = function( data ) {

        var spec = this.spec,
            map = this.parent.map,
            values = RendererUtil.getAttributeValue( data, spec.rootKey ),
            point = spec.point,
            entries = [],
            positionMap = {},
            positionKey,
            tilekey,
            tilePos,
            html = '',
            position,
            offset,
            value,
            i, j;

        // get tilekey
        tilekey = data.index.level + "," + data.index.xIndex + "," + data.index.yIndex;
        // get tile pos
        tilePos = MapUtil.getTopLeftViewportPixelForTile( map, tilekey );

        // for each bin
        for ( i=0; i<values.length; i++ ) {

            value = values[i].value;

            if ( value.length === 0 ) {
                continue;
            }

            for ( j=0; j<value.length; j++ ) {

                entries.push( value[j] );

                // get position in viewport space
                position = MapUtil.getViewportPixelFromCoord( map, value[j][point.xKey], value[j][point.yKey] );
                // get relative position from tile top left
                offset = {
                    x: position.x - tilePos.x,
                    y: position.y - tilePos.y
                };
                // prevent creating two annotations on the exact same pixel
                positionKey = Math.floor( offset.x ) + "," + Math.floor( offset.y );
                if ( !positionMap[ positionKey ] ) {
                    positionMap[ positionKey ] = true;
                    html += '<div class="point-annotation point-annotation-single" style="'
                          + 'left:' + offset.x + 'px;'
                          + 'top:' + offset.y + 'px;'
                          + 'border-width: 2px"';
                    if (value[j].data.labels) {
                        html += ' title="' + value[j].data.labels + '"';
                    }
                    html += '></div>';
                }
            }
        }
        return {
            html: html,
            entries: entries
        };
    };

    module.exports = PointRenderer;
}());

},{"../../map/MapUtil":45,"./Renderer":29,"./RendererUtil":30}],28:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var RendererUtil = require('./RendererUtil');

    function isColor( val ) {
        var split = val.replace(/\s+/g, '').split(/[\(\)]/);
        if ( split[0] === "rgb" || split[0] === "rgba" ) {
            return val;
        }
        return val[0] === "#" && ( val.length === 4 || val.length === 7 );
    }

    function injectSingleTheme( renderTheme, spec, options, percent ) {
        var theme = renderTheme.selector,
            selector = ( percent !== undefined ) ? options.selector + "-" + percent : options.selector,
            parentSelector = options.parentSelector,
            css = '';

        // set color
        if ( spec['background-color'] ) {
            css += theme + ' ' + selector + '{background-color:'+spec['background-color']+';}';
        }
        if ( spec.color ) {
            css += theme + ' ' + selector + '{color:' + spec.color + ';}';
        }
        if ( spec.opacity ) {
            css += theme + ' ' + selector + '{opacity:' + spec.opacity + ';}';
        }

        // set :hover color
        if ( parentSelector ) {
            if ( spec['background-color:hover'] ) {
                css += theme + ' '+parentSelector+':hover '+selector+' {background-color:'+spec['background-color:hover']+';}';
            }
            if ( spec['color:hover'] ) {
                css += theme + ' '+parentSelector+':hover '+selector+' {color:'+spec['color:hover']+';}';
            }
            if ( spec['opacity:hover'] ) {
                css += theme + ' '+parentSelector+':hover '+selector+' {opacity:'+spec['opacity:hover']+';}';
            }
        } else {
            if ( spec['background-color:hover'] ) {
                css += theme + ' '+selector+':hover {background-color:'+spec['background-color:hover']+';}';
            }
            if ( spec['color:hover'] ) {
                css += theme + ' '+selector+':hover {color:'+spec['color:hover']+';}';
            }
            if ( spec['opacity:hover'] ) {
                css += theme + ' '+selector+':hover {opacity:'+spec['opacity:hover']+';}';
            }
        }

        // set borders
        if ( spec['text-shadow'] ) {
            css += theme + ' ' + selector + '{' + getOutlineCss( 'text-shadow', spec['text-shadow'] ) + ';}';
        }

        if ( spec.border ) {
            css += theme + ' ' + selector + '{' + getOutlineCss( 'border', spec.border ) + ';}';
        }

        return css;
    }

    function getOutlineCss( type, value ) {


        if ( !value ) {
            return "";
        }

        if ( type === "text-shadow" ) {
            if ( isColor( value ) ) {
                return "text-shadow:"
                    + "-1px -1px 0 " + value + ","
                    + " 1px -1px 0 " + value + ","
                    + "-1px  1px 0 " + value + ","
                    + " 1px  1px 0 " + value + ","
                    + " 1px  0   0 " + value + ","
                    + "-1px  0   0 " + value + ","
                    + " 0    1px 0 " + value + ","
                    + " 0   -1px 0 " + value;
            }
            return "text-shadow:" + value + ";";
        }
        if ( type === "border" ) {
            if ( isColor( value ) ) {
                return "border: 1px solid " + value;
            }
            return "border:" + value + ";";
        }
        return "";
    }

    /**
     * Instantiate a RenderTheme object.
     * @class RenderTheme
     * @classdesc The RenderTheme class provides a mechanism to style separate components
     * generated from a Renderer object. The theme's CSS is injected into the DOM under the
     * supplied selectors. This allows switching between themes on client rendered tiles by
     * simply appending the respective selector to a parent DOM element.
     *
     * It is the Renderer implementations responsibility to ensure that the RenderTheme
     * object is utilized correctly, as different implementations may require unique
     * styling.
     *
     * An alternative to using RenderThemes would be either bypassing Renderers all together
     * and using the lower level html provider function accepted by client rendered layers, or
     * using the hook function to insert application or theme specific classes into the
     * generated html entries.
     *
     * @param theme {String} The theme identification string. Currently restricted to "dark" and "light".
     * @param spec  {Object} The specification object.
     * <pre>
     * {
     *     color                  {String} - The css color attribute for the component.
     *     color:hover            {String} - The css color attribute for the component, under hover.
     *     background-color       {String} - The css background-color attribute for the component.
     *     background-color:hover {String} - The css background-color attribute for the component, under hover.
     *     text-shadow            {String} - The css text-shadow attribute for the component.
     *     border                 {String} - The css border attribute for the component.
     * }
     * </pre>
     */
    function RenderTheme( theme, spec ) {
        spec = spec || {};
        this.selector = ( theme === 'light' ) ? ".light-theme" : ".dark-theme";
        this.spec = spec;
    }

    /**
     * Injects the themes CSS under the provided selector and parent selector. This should
     * only be called from within a Renderer class implementation, and it is the responsibility
     * of the Renderer implementation to ensure it is used correctly.
     * @private
     *
     * @param {Object} options - The options object containing the selector and parentSelector.
     */
    RenderTheme.prototype.injectTheme = function( options ) {
        var css,
            blendSpec,
            from,
            to,
            i;
        css = '<style class="render-theme" type="text/css">';
        if ( this.spec.from && this.spec.to ) {
            from = this.spec.from;
            to = this.spec.to;
            for ( i=10; i>=0; i-- ) {
                blendSpec = {};
                if ( from['background-color'] && to['background-color'] ) {
                     blendSpec['background-color'] = RendererUtil.hexBlend(
                         to['background-color'],
                         from['background-color'],
                         i/10 );
                }
                if ( from.color && to.color ) {
                     blendSpec.color = RendererUtil.hexBlend(
                         to.color,
                         from.color,
                         i/10 );
                }
                if ( from.opacity && to.opacity ) {
                    blendSpec.opacity = from.opacity + ((( to.opacity - from.opacity ) / 10)*i);
                }
                if ( from['background-color:hover'] && to['background-color:hover'] ) {
                     blendSpec['background-color:hover'] = RendererUtil.hexBlend(
                         to['background-color:hover'],
                         from['background-color:hover'],
                         i/10 );
                }
                if ( from['color:hover'] && to['color:hover'] ) {
                     blendSpec['color:hover'] = RendererUtil.hexBlend(
                         to['color:hover'],
                         from['color:hover'],
                         i/10 );
                }
                if ( from['opacity:hover'] && to['opacity:hover'] ) {
                    blendSpec['opacity:hover'] = from['opacity:hover'] + ((( to['opacity:hover'] - from['opacity:hover'] ) / 10)*i);
                }
                if ( from['text-shadow'] && to['text-shadow'] ) {
                     blendSpec['text-shadow'] = RendererUtil.hexBlend(
                         to['text-shadow'],
                         from['text-shadow'],
                         i/10 );
                }
                if ( from.border && to.border ) {
                     blendSpec.border = RendererUtil.hexBlend(
                         to.border,
                         from.border,
                         i/10 );
                }
                // inject percentage theme
                css += injectSingleTheme( this, blendSpec, options, i*10 );
                // add the theme for '100' without the '100' tag as well
                if ( i === 10 ) {
                    css += injectSingleTheme( this, blendSpec, options );
                }
            }
        } else {
            css += injectSingleTheme( this, this.spec, options );
        }

        css += '</style>';
        $( document.head ).prepend( css );
    };

    module.exports = RenderTheme;
}());

},{"./RendererUtil":30}],29:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Util = require('../../util/Util' ),
        RendererUtil = require('./RendererUtil');

    /**
     * Instantiate a Renderer object.
     * @class Renderer
     * @classdesc The Renderer class is designed to provide generic rendering capabilities
     * that can be reused across applications. This base class stores functionality that is
     * common across all renderer implementations, mainly the execution of the 'hook'
     * function to give access to the generated DOM elements to provide application
     * specific behavior.
     * <br>
     * Typically each unique component generated from a renderer will be under a separate
     * specification attribute. For example the text elements of the TextByFrequencyRenderer
     * is under 'text' and the frequency distribution elements are under 'frequency'.
     * <br>
     * Each of the separate components SHOULD accept *Key attributes to instruct it as to
     * where the relevant data should be found in the tile data object. Each of these
     * separate components SHOULD accept isolated RenderThemes (in the case that RenderThemes
     * are used).
     *
     * @param spec {Object} The specification object.
     * <pre>
     * {
     *     hook {Function} - The hook function that is executed on every rendered entry providing the following arguments:
     *         elem    {HTMLElement} - The html element for the entry.
     *         entry   {Object}      - The data entry.
     *         entries {Array}       - All entries for the tile.
     *         data    {Object}      - The raw data object for the tile.
     * }
     * </pre>
     */
    function Renderer( spec ) {
        this.spec = spec || {};
        this.uuid = Util.generateUuid();
        if ( spec.aggregator ) {
            this.aggregator = spec.aggregator;
        }
    }

    /**
     * Add a hook function to the renderer.
     * @memberof Renderer
     *
     * @param {Function} hook - the callback function.
     */
    Renderer.prototype.addHook = function( hook ) {
        if ( this.spec.hook ) {
            this.spec.hooks = [ this.spec.hook ];
            delete this.spec.hook;
        }
        this.spec.hooks = this.spec.hooks || [];
        if ( hook && typeof hook === "function" ) {
            this.spec.hooks.push( hook );
        }
    };

    /**
     * Remove a hook function from the renderer.
     * @memberof Renderer
     *
     * @param {Function} hook - the callback function.
     */
    Renderer.prototype.removeHook = function( hook ) {
        var index;
        if ( this.spec.hook && this.spec.hook === hook ) {
            delete this.spec.hook;
            this.spec.hooks = [ this.spec.hook ];
        }
        if ( this.spec.hooks ) {
            index = this.spec.hooks.indexOf( hook );
            if ( index !== -1 ) {
                this.spec.hooks.splice( index, 1 );
            }
        }
    };

    /**
     * When rendering a tile, the renderer will by default assume each immediate sibling
     * corresponds to a data entry. This function allows a renderer implementation to
     * provide a selector in situations where this is not the case. This is only relevant
     * if the hook callback is set.
     * @memberof Renderer
     * @private
     *
     * @returns {boolean|string} The DOM element selector for each rendered entry.
     */
    Renderer.prototype.getEntrySelector = function() {
        return false;
    };

    /**
     * Select all entries in the rendered layer that also share the same selected value. The
     * 'selectKey' of the 'select' option must be set.
     * @memberof Renderer
     *
     * @param {Object} selectedEntry - The selected data entry.
     */
    Renderer.prototype.select = function( selectedEntry ) {
        var $tiles = $( this.parent.olLayer.div ).find( '.olTileHtml,.olTileUnivariate' ),
            selectKey = this.spec.select.selectKey,
            selector = this.getEntrySelector(),
            uuid = this.uuid,
            selectValue,
            $entries;
        // if no key specified, exit
        if ( !selectKey ) {
            return;
        }
        // get the select value based on key
        this.selectValue = selectValue = RendererUtil.getAttributeValue( selectedEntry, selectKey );
        // if entry selector is set, use it to select entries
        $entries = selector ? $tiles.find( selector ) : $tiles.children();
        // for each entry, check if they have the matching value to the select
        $entries.each( function() {
            var $elem = $( this ),
                entry,
                value;
            // if this renderer did not create the elements, abort
            if ( uuid !== $elem.data( 'uuid' ) ) {
                return;
            }
            // get the entry and value
            entry = $elem.data( 'entry' );
            value = RendererUtil.getAttributeValue( entry, selectKey );
            if ( value === selectValue ) {
                 $elem.removeClass( 'de-emphasized' ).addClass( 'emphasized' );
            } else {
                $elem.removeClass( 'emphasized' ).addClass( 'de-emphasized' );
            }
        });
    };

    /**
     * Unselect all entries in the rendered layer.
     * @memberof Renderer
     */
    Renderer.prototype.unselect = function() {
        var $tiles = $( this.parent.olLayer.div ).find( '.olTileHtml,.olTileUnivariate' ),
            selector = this.getEntrySelector(),
            $entries;
        // if entry selector is set, use it to select entries
        $entries = selector ? $tiles.find( selector ) : $tiles.children();
        // for each entry, remove relevant classes
        $entries.each( function() {
            $( this ).removeClass( 'de-emphasized' ).removeClass( 'emphasized' );
        });
        // clear the select value
        this.selectValue = null;
    };

    /**
     * The central rendering function. This function is called for every tile containing data.
     * Returns an object containing the tiles html, along with an array of each data entry. The
     * implementation of this function is unique to each renderer.
     * @memberof Renderer
     * @private
     *
     * @returns {{html: string, entries: Array}} The html to render and an array of all rendered data entries.
     */
    Renderer.prototype.render = function() {
        return {
            html: "",
            entries: []
        };
    };

    /**
     * Attaches the renderer to its respective layer. This method should not be called
     * manually.
     * @memberof Renderer
     * @private
     *
     * @param {Layer} layer - The layer to attach to the renderer.
     */
    Renderer.prototype.attach = function( layer ) {
        if ( this.parent && this.parent !== layer ) {
            console.log( "This renderer has already been attached " +
                         "to a different layer, please use another instance." );
            return;
        }
        this.parent = layer;
        if ( this.aggregator ) {
            this.aggregator.attach( layer );
        }
    };

    /**
     * This iterates over every data entry's DOM element and if there is a current selected
     * value in the renderer, it will inject the correct emphasize and de-emphasize flags.
     * This method should not be called manually.
     * @memberof Renderer
     * @private
     *
     * @param {HTMLCollection} elements - A collection of html elements.
     * @param {Array} entries - The array of all data entries.
     */
    Renderer.prototype.injectEntries = function( elements, entries ) {
        var selector = this.getEntrySelector(),
            $elements = $( elements ),
            selectValue = this.selectValue,
            select = this.spec.select,
            uuid = this.uuid,
            selectKey;
        if ( !select || !select.selectKey ) {
            return;
        }
        // get select key
        selectKey = select.selectKey;
        // if entry selector is set, use it to select entries
        if ( selector ) {
            $elements = $elements.find( selector );
        }
        // call entry function on each entry
        $elements.each( function( index, elem ) {
            var $elem = $( elem ),
                entry = entries[index],
                value = RendererUtil.getAttributeValue( entry, selectKey );
            // store the entry data in the entry element
            $elem.data( 'entry', entry );
            // store the renderer uuid
            $elem.data( 'uuid', uuid );
            if ( selectValue && selectKey ) {
                if ( value === selectValue ) {
                    $elem.removeClass( 'de-emphasized' ).addClass( 'emphasized' );
                } else {
                    $elem.removeClass( 'emphasized' ).addClass( 'de-emphasized' );
                }
            }
        });
    };

    /**
     * The hook callback executor function. If a hook function is provided to the renderer, this
     * will execute it passing the respective element and data entry along with all entries and
     * the raw tile data. This is called by the HtmlTile object, should not be called manually.
     * @memberof Renderer
     * @private
     *
     * @param {HTMLCollection} elements - A collection of html elements.
     * @param {Array} entries - The array of all data entries.
     * @param {Object} data - The raw tile data object.
     */
    Renderer.prototype.executeHooks = function( elements, entries, data ) {

        function execHook( index, elem ) {
            hook( elem, entries[index], entries, data );
        }

        var hooks = this.spec.hook ? [ this.spec.hook ] : this.spec.hooks,
            selector = this.getEntrySelector(),
            hook,
            $elements,
            i;
        if ( hooks ) {
            for ( i=0; i<hooks.length; i++ ) {
                hook = hooks[i];
                if ( typeof hook === "function" ) {
                    // get the entries
                    $elements = $( elements );
                    // if entry selector is set, use it to select entries
                    if ( selector ) {
                        $elements = $elements.find( selector );
                    }
                    // call entry function on each entry
                    $elements.each( execHook );
                }
            }
        }
    };

    module.exports = Renderer;
}());

},{"../../util/Util":60,"./RendererUtil":30}],30:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @namespace RenderUtil
 * @classdesc A utility namespace containing renderer related functionality.
 */
( function() {

    "use strict";

    function log10(val) {
        return Math.log(val) / Math.LN10;
    }

    module.exports = {

        /**
         * Returns a y offset required to vertical centre a number of entries based
         * on spacing and offset
         * @memberof RenderUtil
         *
         * @param {integer} numEntries - The number of entries to render.
         * @param {integer} spacing - The spacing between entries in pixels.
         * @param {integer} offset - The offset from the top of the tile to centre on in pixels.
         *
         * @returns {integer} The y pixel offset.
         */
        getYOffset: function( numEntries, spacing, offset ) {
            return offset - ( ( ( numEntries - 1) / 2 ) ) * spacing;
        },

        /**
         * Transforms a value into the range [0:1] based on a min and max value
         * according to a linear or log transform.
         *
         * @param {number} value - The value to transform.
         * @param {number} min -The value to transform.
         * @param {number} max - The value to transform.
         * @param {String} type - The type of transformation ('log' or 'linear').
         *
         * @returns {number} The value between 0 and 1.
         */
        transformValue: function( value, min, max, type ) {
            var clamped = Math.max( Math.min( value, max ), min );
            if ( type === "log" ) {
                var logMin = log10( min || 1 );
        		var logMax = log10( max || 1 );
        		var oneOverLogRange = 1 / ( (logMax - logMin) || 1 );
                return ( log10( clamped || 1 ) - logMin ) * oneOverLogRange;
            } else {
                var range = max - min;
                return ( clamped - min ) / range;
            }
        },

        /**
         * Returns a font size based on the percentage of tweets relative to the total count
         * @memberof RenderUtil
         *
         * @param {integer} count - The local count.
         * @param {integer} totalCount - The global count.
         * @param {Object} options - The options object to set min and max font size and type (optional).
         *
         * @returns {integer} The interpolated font size.
         */
        getFontSize: function( value, min, max, options ) {
            options = options || {};
            var MAX_FONT_SIZE = options.maxFontSize || 22,
                MIN_FONT_SIZE = options.minFontSize || 12,
                transformed = this.transformValue( value, min, max, options.type );
            return MIN_FONT_SIZE + transformed*( MAX_FONT_SIZE - MIN_FONT_SIZE );
        },

        /**
         * Traverses an object to return a nested attribute
         * @memberof RenderUtil
         *
         * @param {Object} obj - The object to traverse.
         * @param {String|Function} attribPath - Period delimited attribute path or a function that returns one.
         *
         * @returns {*} The nested value within the object.
         */
        getAttributeValue: function( obj, attribPath ) {
            var attribs,
                arraySplit,
                attrib,
                i;
            if ( typeof attribPath === "function" ) {
                attribPath = attribPath( obj );
            }
            attribs = attribPath.split('.');
            attrib = obj;
            for (i=0; i<attribs.length; i++) {
                arraySplit = attribs[i].replace(/ /g, '' ).split(/[\[\]]/);
                if ( arraySplit.length === 1 ) {
                    // normal attribute
                    if ( attribs[i].length > 0 ) {
                        attrib = attrib[ attribs[i] ];
                    }
                } else if ( arraySplit.length === 3 ) {
                    // array index expressed, use it
                    attrib = attrib[ arraySplit[0] ][ arraySplit[1] ];
                } else {
                    // unrecognized input, default to assumption of
                    // normal attribute
                    attrib = attrib[ arraySplit[0] ];
                }
            }
            return attrib;
        },

        /**
         * Converts a hex code color to its RGB counter part.
         * @memberof RenderUtil
         *
         * @param {String} hex - The hex code color.
         *
         * @returns {Object} The RGB color values.
         */
        hexToRgb: function(hex) {
            var bigint;
            // remove #
            hex = hex.replace(/#/, '');
            // if only 3 hex values are provided, expand into 6 digit hex code
            if ( hex.length === 3 ) {
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            bigint = parseInt(hex, 16);
            return {
                r: (bigint >> 16) & 255,
                g: (bigint >> 8) & 255,
                b: bigint & 255
            };
        },

        /**
         * Converts an RGB color to its hex code counter part.
         * @memberof RenderUtil
         *
         * @param {Object} rgb - The RGB color.
         *
         * @returns {String} The hex code color value.
         */
        rgbToHex: function( rgb ) {
            var r = rgb.r,
                g = rgb.g,
                b = rgb.b;
            function componentToHex(c) {
                var hex = c.toString(16);
                return (hex.length === 1) ? "0" + hex : hex;
            }
            return "#" + componentToHex( Math.floor(r)) +
                         componentToHex( Math.floor(g)) +
                         componentToHex( Math.floor(b));
        },

        /**
         * Increases the brightness of a hex code color by a percentage factor
         * @memberof RenderUtil
         *
         * @param {String} hex - The hex code color.
         * @param {float} factor - The percentage factor of increase.
         *
         * @returns {String} The adjusted hex code color value.
         */
        hexBrightness: function( hex, factor ) {
            var rgb = this.hexToRgb( hex );
            return this.rgbToHex( { r: Math.min( Math.max( 0, rgb.r * factor ), 255 ),
                                    g: Math.min( Math.max( 0, rgb.g * factor ), 255 ),
                                    b: Math.min( Math.max( 0, rgb.b * factor ), 255 ) } );
        },

        /**
         * Converts a hex code color to greyscale using a luminosity based model
         * @memberof RenderUtil
         *
         * @param {String} hex - The  hex code color.
         *
         * @returns {String} The greyscale hex code color value.
         */
        hexGreyscale: function( hex ) {
            var rgb = this.hexToRgb( hex ),
                avg = ( rgb.r * 0.21 + rgb.g * 0.72 + rgb.b * 0.07 );
            return this.rgbToHex({
                r: avg,
                g: avg,
                b: avg
            });
        },

        /**
         * Blends two hex code colors together, defaults to 50/50 blend
         * @memberof RenderUtil
         *
         * @param {String} hexA - The hex code color A.
         * @param {String} hexB - The hex code color B.
         * @param {number} aIntoBPercentage - The percentage to blend hexA into hexB (optional).
         *
         * @returns {String} The blended hex code color value.
         */
        hexBlend: function( hexA, hexB, aIntoBPercentage ) {
            var aPerc = ( aIntoBPercentage !== undefined ) ? Math.min( 1, aIntoBPercentage ) : 0.5,
                bPerc = 1 - aPerc,
                rgb1 = this.hexToRgb( hexA ),
                rgb2 = this.hexToRgb( hexB );
            return this.rgbToHex({
                r : ( rgb1.r*aPerc + rgb2.r*bPerc ),
                g : ( rgb1.g*aPerc + rgb2.g*bPerc ),
                b : ( rgb1.b*aPerc + rgb2.b*bPerc )
            });
        }

    };

}());

},{}],31:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Renderer = require('./Renderer'),
        RendererUtil = require('./RendererUtil'),
        MAX_WORDS_DISPLAYED = 8,
        getYOffset,
        getHighestCount;

    /**
     * Utility function for positioning the labels
     */
    getYOffset = function( index, numEntries, spacing ) {
        return 118 - ( (( numEntries - 1) / 2 ) - index ) * spacing;
    };

    /**
     * Utility function to get the highest count for a topic in the tile
     */
    getHighestCount = function( values, countKey ) {
        // get the highest single count
        var highestCount = 0,
            counts = RendererUtil.getAttributeValue( values, countKey ),
            j;
        for ( j=0; j<counts.length; j++ ) {
            // get highest count
            highestCount = Math.max( highestCount, counts[j] );
        }
        return highestCount;
    };

    /**
     * Instantiate a TextByFrequencyRenderer object.
     * @class TextByFrequencyRenderer
     * @augments Renderer
     * @classDesc A Renderer implementation that renders a histogram of the frequency of
     * a particular topic over time, with the topic text next to it.
     *
     * @param spec {Object} The specification object.
     * <pre>
     * {
     *     text: {
     *         textKey  {String|Function} - The attribute for the text in the data entry.
     *         themes   {Array}  - The array of RenderThemes to be attached to this component.
     *     },
     *     frequency: {
     *         countKey {String|Function} - The attribute for the count in the data entry.
     *         themes   {Array}  - The array of RenderThemes to be attached to this component.
     *         invertOrder {Boolean} - The boolean to determine order of chart values.  Defaults to false if not present
     *     }
     * }
     * </pre>
     */
    function TextByFrequencyRenderer( spec ) {
        spec.rootKey = spec.rootKey || "tile.meta.aggregated";
        spec.frequency.invertOrder = spec.frequency.invertOrder || false;
        Renderer.call( this, spec );
        this.injectCss( this.spec );
    }

    TextByFrequencyRenderer.prototype = Object.create( Renderer.prototype );

    TextByFrequencyRenderer.prototype.getEntrySelector = function() {
        return ".text-by-frequency-label";
    };

    TextByFrequencyRenderer.prototype.injectCss = function( spec ) {
        var i;
        if ( spec.text.themes ) {
          for (i = 0; i < spec.text.themes.length; i++) {
              spec.text.themes[i].injectTheme({
                  selector: ".text-by-frequency-label",
                  parentSelector: ".text-by-frequency-entry"
              });
          }
        }
        if ( spec.frequency.themes ) {
          for (i = 0; i < spec.frequency.themes.length; i++) {
              spec.frequency.themes[i].injectTheme({
                  selector: ".text-by-frequency-bar",
                  parentSelector: ".text-by-frequency-entry"
              });
          }
        }
    };

    TextByFrequencyRenderer.prototype.getBarStyleClass = function (value, countIndex, relativePercent) {
        // class percent in increments of 10
        var percentLabel = Math.round( relativePercent / 10 ) * 10;
        return 'text-by-frequency-bar text-by-frequency-bar-' + percentLabel;
    };

    TextByFrequencyRenderer.prototype.getTextStyleClass = function () {
        return 'text-by-frequency-label';
    };

    /**
     * Implementation specific rendering function.
     * @memberof TextByFrequencyRenderer
     * @private
     *
     * @param {Object} data - The raw data for a tile to be rendered.
     *
     * @returns {{html: string, entries: Array}} The html to render and an array of all rendered data entries.
     */
    TextByFrequencyRenderer.prototype.render = function( data ) {
        var self = this,
            minFontSize = 14,
            maxFontSize = 24,
            spacing = 20,
            textKey = this.spec.text.textKey,
            frequency = this.spec.frequency,
            countKey = frequency.countKey,
            invertOrder = frequency.invertOrder,
            values = RendererUtil.getAttributeValue( data, this.spec.rootKey ),
            numEntries = Math.min( values.length, MAX_WORDS_DISPLAYED ),
            levelMinMax = this.parent.getLevelMinMax(),
            barStyleClass,
            $html = $("<div></div>"),
            entries = [],
            min = 0,
            max = 0,
            text,
            highestCount,
            counts,
            relativePercent,
            chartSize,
            visibility,
            index,
            height,
            i = 0,
            j = 0;

        var $label = $('<div class="count-summary"></div>');
        $html = $html.append( $label );

        // if zoom level max is in meta, use it, otherwise calc it from tile
        if ( levelMinMax.maximum ) {
            max = getHighestCount( levelMinMax.maximum, countKey );
        } else {
            values.forEach( function( value ) {
                max = Math.max( max, RendererUtil.getAttributeValue( value, countKey ) );
            });
        }

	      values = values.slice( 0, numEntries );
        values.forEach ( function( value ) {
            entries.push( value );
            counts = RendererUtil.getAttributeValue( value, countKey );
            text = RendererUtil.getAttributeValue( value, textKey );
            chartSize = counts.length;
            // highest count for the topic
            highestCount = getHighestCount( value, countKey );
            // scale the height based on level min / max
            height = RendererUtil.getFontSize(
                highestCount,
                min,
                max,
                {
                    minFontSize: minFontSize,
                    maxFontSize: maxFontSize,
                    type: "log"
                });

			      // create container 'entry' for chart and hashtag
            var html_string = '';
                html_string += '<div class="text-by-frequency-entry" '
                      + 'style="'
                      // ensure constant spacing independent of height
                      + 'top:' + ( getYOffset( i, numEntries, spacing ) + ( maxFontSize - height ) ) + 'px;'
                      + 'height:' + height + 'px"></div>';
			      var $entry = $(html_string);

            $entry.mouseover(function() {
                $label.show(); // show label
                $label.text( value.count );
            });
            $entry.mouseout(function() {
                $label.hide(); // hide label
            });

            // create chart
			      var $chart = $('<div class="text-by-frequency-left"></div>');

            counts.forEach ( function( count, countIndex ) {
                // if invertOrder is true, invert the order of iteration
                index = ( invertOrder ) ? chartSize - j - 1 : j;
                // get the percent relative to the highest count in the tile
                relativePercent = ( count / highestCount ) * 100;
                // if percent === 0, hide bar
                visibility = ( relativePercent > 0 ) ? '' : 'hidden';
                // Get the style class of the bar
                barStyleClass = self.getBarStyleClass(value, countIndex, relativePercent);
                // set minimum bar length
                relativePercent = Math.max( relativePercent, 20 );
                // create bar
                var bar_string = '';
                        bar_string += '<div '
                            + 'class="' + barStyleClass + '" '
                            + 'style="'
                            + 'visibility:'+visibility+';'
                            + 'height:'+relativePercent+'%;'
                            + 'width:'+ Math.floor( (105+chartSize)/chartSize ) +'px;'
                            + 'top:'+(100-relativePercent)+'%;"></div>';
                var $chartBar = $(bar_string);
                $chart.append($chartBar);
                j += 1;
            });

			      $entry.append( $chart );
            // create tag label
			      var $labelTag = $('<div class="text-by-frequency-right"></div>');
			      var label_string = '';
                label_string += '<div class="' + self.getTextStyleClass(value) + '" style="' +
                    'font-size:'+height+'px;' +
                    'line-height:'+height+'px;' +
                    'height:'+height+'px">'+text+'</div>';
            var $labelText = $(label_string);
            $labelTag.append( $labelText );
            $entry.append( $labelTag );

            $html.append($entry);
            i += 1;
        });

        return {
            html: $html,
            entries: entries
        };
    };

    module.exports = TextByFrequencyRenderer;
}());

},{"./Renderer":29,"./RendererUtil":30}],32:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * A word cloud renderer. Uses a set of words and their counts to generate a word cloud.
 */
( function() {

    "use strict";

    var Renderer = require('./Renderer'),
		createTopicWordsArrays,
        injectCss;

    injectCss = function( spec ) {
        var i, j;
        if ( spec.text.themes ) {
			// for each pair of light and dark themes, inject theme
            for ( i = 0; i < spec.text.themes.length; i++ ) {
				var themePair = spec.text.themes[ i ];
				for ( j = 0; j < themePair.length; j++ ) {
					themePair[j].injectTheme({
						selector: '.text-topic-' + i + '-label'
					});
				}
			}
        }
    };

	/**
     * Create an array of text words for each topic based on the entry's topic number
     */
	createTopicWordsArrays = function( entries, numTopics ) {
		var topicWordsArray = [];
		
		for ( var i = 0; i < numTopics; i++ ) {
			topicWordsArray[i] = [];
		}

		entries.forEach( function( entry ) {
			topicWordsArray[ entry.topicNumber ].push( entry.topic );
		});	
		
		return topicWordsArray;
	};

    /**
     * Instantiate a TextByTopicRenderer object.
     * @class TextByTopicRenderer
     * @augments Renderer
     * @classDesc A Renderer implementation that renders a word cloud.
     *
     * @param spec {Object} The specification object.
     * <pre>
     *     text: {
     *         textKey   {String|Function} - The attribute for the text in the data entry.
     *         themes    {Array}  - The array of RenderThemes to be attached to this component.
	 *         numTopics {integer} - number of topics to bin the text words under
     *     }
     * }
     * </pre>
     */
    function TextByTopicRenderer( spec ) {
        spec.rootKey = spec.rootKey || "tile.meta.raw";
        spec.text = spec.text || {};
        Renderer.call( this, spec );
        injectCss( this.spec );
    }

    TextByTopicRenderer.prototype = Object.create( Renderer.prototype );

	TextByTopicRenderer.prototype.getEntrySelector = function() {
		return ".text-by-topic-label";
	};

    /**
     * Implementation specific rendering function.
     * @memberof TextByTopicRenderer
     *
     * @param {Object} data - The raw data for a tile to be rendered.
     *
     * @returns {{html: string, entries: Array}} The html to render and an array of all rendered data entries.
     */
    TextByTopicRenderer.prototype.render = function( data ) {

        var text = this.spec.text,
            textKey = text.textKey,
			numTopics = text.numTopics ? text.numTopics : 3,
            entries = data.tile.meta.raw[0],
			$html = $('<div class="text-by-topic-box"></div>'),
			topicWords = [],
			index = 1,
            i, j;
	
		// need to get the first non-null array in the raw data
		while ( entries === null && index < data.tile.meta.raw.length ) {
			entries = data.tile.meta.raw[index];
			index++;
		}
        topicWords = createTopicWordsArrays( entries, numTopics, textKey );

		for ( i = 0; i < numTopics; i++ ) {
			var words = topicWords[i],
				wordsString = '';
				
			for ( j = 0; j < words.length; j++ ) {
				wordsString += words[j] + ' ';
			}
			var $words_html = $('<div class="text-topic-' + i + '-label text-topic-label">' + wordsString + '</div>');

			// add it to the group
			$html = $html.append( $words_html );
        }

        return {
            html: $html,
            entries: entries
        };
    };

    module.exports = TextByTopicRenderer;
}());

},{"./Renderer":29}],33:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Renderer = require('./Renderer'),
        RendererUtil = require('./RendererUtil'),
        MAX_WORDS_DISPLAYED = 5,
        MAX_BAR_WIDTH = 110,
        injectCss;

    injectCss = function( spec ) {
        var i, j;
        if ( spec.text.themes ) {
            for ( i=0; i<spec.text.themes.length; i++ ) {
                spec.text.themes[i].injectTheme({
                    selector: ".text-score-label",
                    parentSelector: ".text-score-entry"
                });
                spec.text.themes[i].injectTheme({
                    selector: ".text-score-entry-count",
                    parentSelector: ".text-score-entry"
                });
            }
            for ( i=0; i<spec.weights.length; i++ ) {
                for ( j=0; j<spec.weights[i].themes.length; j++ ) {
                    spec.weights[i].themes[j].injectTheme( {
                        selector: ".text-score-weight-" + i,
                        parentSelector: ".text-score-entry"
                    });
                }
            }
        }
    };

    /**
     * Instantiate a TextScoreRenderer object.
     * @class TextScoreRenderer
     * @augments Renderer
     * @classDesc A Renderer implementation that renders a text label scaled by its
     * frequency.
     *
     * @param spec {Object} The specification object.
     * <pre>
     * {
     *     text: {
     *         textKey  {String|Function} - The attribute for the text in the data entry.
     *         countKey {String|Function} - The attribute for the count in the data entry.
     *         themes   {Array}  - The array of RenderThemes to be attached to this component.
     *     },
     *     weights: [{
     *         weightKey {Array|Function} - The attributes for the weights in the data entry
     *         themes    {Array}  - The array of RenderThemes to be attached to this component.
     *     }],
     *     threshold: {number} - The count threshold at which to de-saturate the colors.
     * }
     * </pre>
     */
    function TextScoreWeightedRenderer( spec ) {
        spec.rootKey = spec.rootKey || "tile.meta.aggregated";
        Renderer.call( this, spec );
        injectCss( this.spec );
    }

    TextScoreWeightedRenderer.prototype = Object.create( Renderer.prototype );

    /**
     * Returns the entry selector unique to this Renderer Implementation.
     * @memberof TextScoreRenderer
     * @private
     *
     * @returns {String} The entry DOM selector.
     */
    TextScoreWeightedRenderer.prototype.getEntrySelector = function() {
        return ".text-score-entry";
    };

    /**
     * Implementation specific rendering function.
     * @memberof TextScoreRenderer
     * @private
     *
     * @param {Object} data - The raw data for a tile to be rendered.
     *
     * @returns {{html: string, entries: Array}} The html to render and an array of all rendered data entries.
     */
    TextScoreWeightedRenderer.prototype.render = function( data ) {

        var ENTRY_HEIGHT = 30,
            BAR_HEIGHT = 6,
            BOTTOM_OFFSET = ENTRY_HEIGHT - BAR_HEIGHT - 2,
            spec = this.spec,
            weights = spec.weights,
            threshold = spec.threshold || 5,
            textKey = spec.text.textKey,
            countKey = spec.text.countKey,
            values = RendererUtil.getAttributeValue( data, spec.rootKey ),
            levelMinMax = this.parent.getLevelMinMax(),
            numEntries = Math.min( values.length, MAX_WORDS_DISPLAYED ),
            minFontSize = 13,
            maxFontSize = 18,
            min = Number.MAX_VALUE,
            max = 0,
            entries = [],
            html = '',
            desaturate,
            percentLabel,
            middleWeightIndex,
            middleWeight,
            weightCounts,
            weightPercent,
            weight,
            barWidth,
            yOffset,
            value,
            text,
            count,
            fontSize,
            i,
            j;

        yOffset = RendererUtil.getYOffset( numEntries, ENTRY_HEIGHT+BAR_HEIGHT, 122 );

        // if the min for the zoom level is specified in the meta, use it
        if ( levelMinMax.minimum ) {
            min = RendererUtil.getAttributeValue( levelMinMax.minimum, countKey );
        } else {
            values.forEach( function( value ) {
                min = Math.min( min, RendererUtil.getAttributeValue( value, countKey ) );
            });
        }

        // if the max for the zoom level is specified in the meta, use it
        if ( levelMinMax.maximum ) {
            max = RendererUtil.getAttributeValue( levelMinMax.maximum, countKey );
        } else {
            values.forEach( function( value ) {
                max = Math.max( max, RendererUtil.getAttributeValue( value, countKey ) );
            });
        }

        for (i=0; i<numEntries; i++) {
            value = values[i];
            entries.push( value );
            text = RendererUtil.getAttributeValue( value, textKey );
            count = RendererUtil.getAttributeValue( value, countKey );
            desaturate = ( count < threshold ) ? "de-saturate" : "";
            fontSize = RendererUtil.getFontSize(
                count,
                min,
                max,
                {
                    minFontSize: minFontSize,
                    maxFontSize: maxFontSize,
                    type: "log"
            });
            weightPercent = (fontSize-minFontSize) / (maxFontSize-minFontSize);

            // parent
            html += '<div class="text-score-entry-parent" style="top:' + yOffset + 'px;">';

            // create entry
            html += '<div class="text-score-entry" style="height:'+ENTRY_HEIGHT+'px;">';

            html += '<div class="text-score-entry-count">'+ count +'</div>';

            // create label
            percentLabel = Math.round( (weightPercent*100) / 10 ) * 10;
            html += '<div class="text-score-label text-score-label-'
                + percentLabel+' '+desaturate+'" style="'
                + 'font-size:'+ fontSize +'px;'
                + 'line-height:'+ fontSize +'px;'
                + 'bottom:'+-(BOTTOM_OFFSET-fontSize)+'px;">'+text+'</div>';

            if ( count > 0 ) {
                // create weights
                weightCounts = [];
                for ( j=0; j<weights.length; j++ ) {
                    weight = RendererUtil.getAttributeValue( value, weights[j].weightKey );
                    weightCounts.push( weight );
                }
                // get the index of the middle weight
                middleWeightIndex = Math.floor( (weights.length-1) / 2 );
                // sum the amount of weight to centre the bar on the middle weight
                if ( weights.length % 2 === 0 ) {
                    middleWeight = weightCounts[ middleWeightIndex ];
                } else {
                    middleWeight = weightCounts[ middleWeightIndex ] / 2;
                }
                for ( j=middleWeightIndex-1; j>=0; j-- ) {
                    middleWeight += weightCounts[j];
                }
                barWidth = MAX_BAR_WIDTH;
                // create bar container
                html += '<div class="text-score-weight-bar" style="'
                    + 'width:' + barWidth + 'px;'
                    + 'height:' + BAR_HEIGHT + 'px;'
                    + 'left:' + (-barWidth*(middleWeight/count)) + 'px;">';
                for ( j=0; j<weights.length; j++ ) {
                    // create bar
                    html += '<div class="text-score-weight text-score-weight-'
                        + j +' '+desaturate+'" style="'
                        + 'width:'+((weightCounts[j]/count)*100)+'%;"></div>';
                }
                html += '</div>';
            }

            html += '</div>';
            html += '</div>';
            html += '<div class="clear"></div>';
        }

        return {
            html: html,
            entries: entries
        };
    };

    module.exports = TextScoreWeightedRenderer;
}());

},{"./Renderer":29,"./RendererUtil":30}],34:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * A word cloud renderer. Uses a set of words and their counts to generate a word cloud.
 */
( function() {

    "use strict";

    var Renderer = require('./Renderer'),
        RendererUtil = require('./RendererUtil'),
        MAX_WORDS_DISPLAYED = 10,
        HORIZONTAL_OFFSET = 10,
        VERTICAL_OFFSET = 24,
        SIZE_FUNCTION = 'log',
        MIN_FONT_SIZE = 13,
        MAX_FONT_SIZE = 28,
        spiralPosition,
        intersectTest,
        overlapTest,
        intersectWord,
        getWordDimensions,
        createWordCloud;

    /**
     * Given an initial position, return a new position, incrementally spiralled
     * outwards.
     */
    spiralPosition = function( pos ) {
        var pi2 = 2 * Math.PI,
            circ = pi2 * pos.radius,
            inc = ( pos.arcLength > circ/10) ? circ/10 : pos.arcLength,
            da = inc / pos.radius,
            nt = (pos.t+da);
        if (nt > pi2) {
            nt = nt % pi2;
            pos.radius = pos.radius + pos.radiusInc;
        }
        pos.t = nt;
        pos.x = pos.radius * Math.cos(nt);
        pos.y = pos.radius * Math.sin(nt);
        return pos;
    };

    /**
     *  Returns true if bounding box a intersects bounding box b
     */
    intersectTest = function( a, b ) {
        return (Math.abs(a.x - b.x) * 2 < (a.width + b.width)) &&
               (Math.abs(a.y - b.y) * 2 < (a.height + b.height));
    };

    /**
     *  Returns true if bounding box a is not fully contained inside bounding box b
     */
    overlapTest = function( a, b ) {
        return ( a.x + a.width/2 > b.x+b.width/2 ||
                 a.x - a.width/2 < b.x-b.width/2 ||
                 a.y + a.height/2 > b.y+b.height/2 ||
                 a.y - a.height/2 < b.y-b.height/2 );
    };

    /**
     * Check if a word intersects another word, or is not fully contained in the
     * tile bounding box
     */
    intersectWord = function( position, dimensions, cloud, bb ) {
        var box = {
                x: position.x,
                y: position.y,
                height: dimensions.height,
                width: dimensions.width
            },
            i;
        for ( i=0; i<cloud.length; i++ ) {
            if ( intersectTest( box, cloud[i] ) ) {
                return true;
            }
        }
        // make sure it doesn't intersect the border;
        if ( overlapTest( box, bb ) ) {
            // if it hits a border, increment collision count
            // and extend arc length
            position.collisions++;
            position.arcLength = position.radius;
            return true;
        }
        return false;
    };

    /**
     * Returns the pixel dimensions of the label
     */
    getWordDimensions = function( str, fontSize ) {
        var $temp,
            dimension = {};
        $temp = $('<div class="word-cloud-label-temp" style="font-size:'+fontSize+'px;">'+str+'</div>');
        $('body').append( $temp );
        dimension.width = $temp.outerWidth();
        dimension.height = $temp.outerHeight();
        $temp.remove();
        return dimension;
    };

    /**
     * Returns the word cloud words containing font size and x and y coordinates
     */
    createWordCloud = function( wordCounts, min, max, sizeFunction, minFontSize, maxFontSize ) {
        var boundingBox = {
                width: 256 - HORIZONTAL_OFFSET * 2,
                height: 256 - VERTICAL_OFFSET * 2,
                x: 0,
                y: 0
            },
            cloud = [],
            percent,
            i, word, count, dim,
            fontSize, pos;
        // sort words by frequency
        wordCounts.sort( function( a, b ) {
            return b.count - a.count;
        });
        // assemble word cloud
        for ( i=0; i<wordCounts.length; i++ ) {
            word = wordCounts[i].word;
            count = wordCounts[i].count;
            // get font size based on font size function
            fontSize = RendererUtil.getFontSize( count, min, max, {
                maxFontSize: maxFontSize,
                minFontSize: minFontSize,
                type: sizeFunction
            });
            // frequency percent
            percent = ((fontSize-minFontSize) / (maxFontSize-minFontSize))*100;
            // get dimensions of word
            dim = getWordDimensions( word, fontSize );
            // starting spiral position
            pos = {
                radius : 1,
                radiusInc : 5,
                arcLength : 5,
                x : 0,
                y : 0,
                t : 0,
                collisions : 0
            };

            var numWords = wordCounts.length;
            while( pos.collisions < numWords ) {
                // increment position in a spiral
                pos = spiralPosition( pos );
                // test for intersection
                if ( !intersectWord( pos, dim, cloud, boundingBox ) ) {
                    cloud.push({
                        word: word,
                        entry: wordCounts[i].entry,
                        fontSize: fontSize,
                        percentLabel: Math.round( percent / 10 ) * 10, // round to nearest 10
                        x:pos.x,
                        y:pos.y,
                        width: dim.width,
                        height: dim.height
                    });
                    break;
                }
            }
        }
        return cloud;
    };

    /**
     * Instantiate a WordCloudRenderer object.
     * @class WordCloudRenderer
     * @augments Renderer
     * @classDesc A Renderer implementation that renders a word cloud.
     *
     * @param spec {Object} The specification object.
     * <pre>
     *     text: {
     *         textKey  {String|Function} - The attribute for the text in the data entry.
     *         countKey {String|Function} - The attribute for the count in the data entry.
     *         themes   {Array}  - The array of RenderThemes to be attached to this component.
     *     }
     * }
     * </pre>
     */
    function WordCloudRenderer( spec ) {
        spec.rootKey = spec.rootKey || "tile.meta.aggregated";
        spec.text = spec.text || {};
        Renderer.call( this, spec );
        this.injectCss( this.spec );
    }

    WordCloudRenderer.prototype = Object.create( Renderer.prototype );

    WordCloudRenderer.prototype.getEntrySelector = function() {
        return ".word-cloud-label";
    };

    WordCloudRenderer.prototype.injectCss = function( spec ) {
        var i;
        if ( spec.text.themes ) {
            for ( i = 0; i < spec.text.themes.length; i++ ) {
                spec.text.themes[i].injectTheme({
                    selector: ".word-cloud-label"
                });
                spec.text.themes[i].injectTheme({
                    selector: ".count-summary"
                });
            }
        }
    };

    WordCloudRenderer.prototype.getWordStyleClass = function ( wordProps ) {
        return 'word-cloud-label word-cloud-label-' + wordProps.percentLabel;
    };

    /**
     * Implementation specific rendering function.
     * @memberof WordCloudRenderer
     *
     * @param {Object} data - The raw data for a tile to be rendered.
     *
     * @returns {{html: string, entries: Array}} The html to render and an array of all rendered data entries.
     */
    WordCloudRenderer.prototype.render = function( data ) {

        var self = this,
            text = this.spec.text,
            textKey = text.textKey,
            countKey = text.countKey,
            values = RendererUtil.getAttributeValue( data, this.spec.rootKey ),
            numEntries = Math.min( values.length, text.maxWords || MAX_WORDS_DISPLAYED ),
            levelMinMax = this.parent.getLevelMinMax(),
            sizeFunction = text.sizeFunction || SIZE_FUNCTION,
            minFontSize = text.minFontSize || MIN_FONT_SIZE,
            maxFontSize = text.maxFontSize || MAX_FONT_SIZE,
            min = Number.MAX_VALUE,
            max = 0,
			$html = $("<div></div>"),
            wordCounts = [],
            entries = [],
            value,
            word,
            count,
            i,
            cloud;

        for ( i=0; i<numEntries; i++ ) {
            value = values[i];
            word = RendererUtil.getAttributeValue( value, textKey );
            count = RendererUtil.getAttributeValue( value, countKey );
            min = Math.min( min, count );
            max = Math.max( max, count );
            wordCounts.push({
                word: word,
                count: count,
                entry: value
            });
        }

        // if the min for the zoom level is specified in the meta, use it
        if ( levelMinMax.minimum ) {
            min = RendererUtil.getAttributeValue( levelMinMax.minimum, countKey );
        }
        // if the max for the zoom level is specified in the meta, use it
        if ( levelMinMax.maximum ) {
            max = RendererUtil.getAttributeValue( levelMinMax.maximum, countKey );
        }

        cloud = createWordCloud(
            wordCounts,
            min,
            max,
            sizeFunction,
            minFontSize,
            maxFontSize);

		var $label = $('<div class="count-summary"></div>');
		$html = $html.append( $label );

    cloud.forEach( function( word ) {
			entries.push( word.entry );
            var $wordLabel = $('<div '
                    + 'class="' + self.getWordStyleClass(word) + '" '
                    + 'style="'
                    + 'font-size:'+word.fontSize+'px;'
                    + 'left:'+(128+word.x-(word.width/2))+'px;'
                    + 'top:'+(128+word.y-(word.height/2))+'px;'
                    + 'width:'+word.width+'px;'
                    + 'height:'+word.height+'px;">'+word.word+'</div>');
			$wordLabel.mouseover(function() {
				$label.show(); // show label
				$label.text( RendererUtil.getAttributeValue( word.entry, countKey ) );
			});
			$wordLabel.mouseout(function() {
				$label.hide(); // hide label
			});
			// add it to the group
			$html = $html.append( $wordLabel );
    });

    return {
        html: $html,
        entries: entries
    };
  };

  module.exports = WordCloudRenderer;
}());

},{"./Renderer":29,"./RendererUtil":30}],35:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    /**
     * Instantiate a Aggregator object.
     * @class Aggregator
     * @classdesc
     */
    function Aggregator() {
    }

    /**
     * Given an array of buckets, will execute the provided aggregation
     * specification against all relevant entries.
     * @memberof Aggregator
     *
     * @param {Array} buckets - The array of buckets.
     *
     * @returns {Array} The aggregated buckets.
     */
    Aggregator.prototype.aggregate = function( buckets ) {
        return buckets;
    };

    /**
     * Attaches the aggregator to its respective layer. This method should not be called
     * manually.
     * @memberof Aggregator
     * @private
     *
     * @param {Layer} layer - The layer to attach to the renderer.
     */
     Aggregator.prototype.attach = function( layer ) {
        if ( this.parent && this.parent !== layer ) {
            console.log( "This renderer has already been attached " +
                         "to a different layer, please use another instance." );
            return;
        }
        this.parent = layer;
    };

    /**
     * Returns the start and end indices for the set of buckets.
     * @memberof Aggregator
     *
     * @param {Array} buckets - The array of buckets.
     *
     * @returns {Object} The range object.
     */
    Aggregator.prototype.getBucketRange = function( buckets ) {
        var tileTransformData = this.parent.getTileTransformData(),
            start = tileTransformData.startBucket,
            end = tileTransformData.endBucket;
        return {
            start: start !== undefined ? start : 0,
            end: end !== undefined ? end : buckets.length - 1
        };
    };

    /**
     * Checks the layer metadata for a translation map. If it exists, returns
     * the translated entry for the provided topic.
     * @memberof Aggregator
     *
     * @param {String} topic - The topic to translate.
     *
     * @returns {String} The translated topic.
     */
    Aggregator.prototype.translateTopic = function( topic ) {
        var meta = this.parent.source.meta.meta;
        if ( meta.translatedTopics ) {
            return meta.translatedTopics[ topic ];
        }
        return undefined;
    };

    /**
     * Executes a function for each bucket, passing the bucket and offset
     * reduced index arguments.
     * @memberof Aggregator
     *
     * @param {Array} buckets - The array of buckets.
     * @param {Function} func - The function to execute.
     */
    Aggregator.prototype.forEach = function( buckets, func ) {
        var range = this.getBucketRange( buckets ),
            start = range.start,
            end = range.end,
            i;
        // first iterate over all buckets and organize them by id
        for ( i=start; i<=end; i++ ) {
            // subtract start to always have index 0 based
            if ( func( buckets[i], i-start ) ) {
                return;
            }
        }
    };

    module.exports = Aggregator;

}());

},{}],36:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Aggregator = require('./Aggregator'),
        Util = require('../../../util/Util');

    /**
     * Instantiate a FrequenciesByTopicAggregator object.
     * @class FrequenciesByTopicAggregator
     * @classdesc
     */
    function FrequenciesByTopicAggregator() {
    }

    FrequenciesByTopicAggregator.prototype = Object.create( Aggregator.prototype );

    /**
     * Given an array of buckets, will execute the provided aggregation
     * specification against all relevant entries.
     * @memberof FrequenciesByTopicAggregator
     *
     * @param {Array} buckets - The array of buckets.
     *
     * @returns {Array} The aggregated buckets.
     */
    FrequenciesByTopicAggregator.prototype.aggregate = function( buckets ) {
        var frequenciesByTopic = {},
            range = this.getBucketRange( buckets ),
            bucketCount = range.end - range.start + 1;
        this.forEach(
            buckets,
            function( bucket, index ) {
                var topic,
                    i;
                if ( bucket ) {
                    for ( i=0; i<bucket.length; i++ ) {
                        topic = bucket[i].topic;
                        frequenciesByTopic[ topic ] = frequenciesByTopic[ topic ] || Util.fillArray( bucketCount );
                        frequenciesByTopic[ topic ][ index ] = bucket[i].score.total;
                    }
                }
        });
        return frequenciesByTopic;
    };

    module.exports = FrequenciesByTopicAggregator;

}());

},{"../../../util/Util":60,"./Aggregator":35}],37:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Aggregator = require('./Aggregator'),
        Util = require('../../../util/Util');

    /**
     * Instantiate a FrequencyArraysByTopicAggregator object.
     * @class FrequencyArraysByTopicAggregator
     * @classdesc
     */
    function FrequencyArraysByTopicAggregator() {
    }

    FrequencyArraysByTopicAggregator.prototype = Object.create( Aggregator.prototype );

    /**
     * Given an array of buckets, will execute the provided aggregation
     * specification against all relevant entries.
     * @memberof FrequencyArraysByTopicAggregator
     *
     * @param {Array} buckets - The array of buckets.
     *
     * @returns {Array} The aggregated buckets.
     */
    FrequencyArraysByTopicAggregator.prototype.aggregate = function( buckets ) {
        var frequenciesByTopic = {},
            range = this.getBucketRange( buckets ),
            bucketCount = range.end - range.start + 1,
            length;
        this.forEach(
            buckets,
            function( bucket, index ) {
                var topic,
                    i;
                if ( bucket ) {
                    for ( i=0; i<bucket.length; i++ ) {
                        topic = bucket[i].topic;
                        length = bucket[i].score.total.length;
                        frequenciesByTopic[ topic ] = frequenciesByTopic[ topic ] || Util.fillArray( bucketCount, Util.fillArray( length ) );
                        frequenciesByTopic[ topic ][ index ] = bucket[i].score.total.slice( 0 ); // copy
                    }
                }
        });
        return frequenciesByTopic;
    };

    module.exports = FrequencyArraysByTopicAggregator;

}());

},{"../../../util/Util":60,"./Aggregator":35}],38:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Aggregator = require('./Aggregator');

    /**
     * Iterates over each bucket, and perform the aggregation.
     *
     * @param {Aggregator} aggregator - The aggregator object.
     * @param {Array} buckets - The array of buckets.
     *
     * @param {Array} The aggregated buckets.
     */
    function aggregateBucket( aggregator, buckets ) {
        var aggregation,
            score,
            total,
            i;
        // set base aggregator
        aggregation = {
            topic: buckets[0].topic,
            topicEnglish: aggregator.translateTopic( buckets[0].topic ),
            count: 0
        };
        // for each bucket of data
        for ( i=0; i<buckets.length; i++ ) {
            // add to total count
            score = buckets[i].score;
            if (score !== undefined) {
                total = ( typeof score === "number" ) ? score : score.total;
                aggregation.count += total;
            }
        }
        return aggregation;
    }

    /**
     * Instantiate a TopicCountAggregator object.
     * @class TopicCountAggregator
     * @classdesc
     */
    function TopicCountAggregator() {
    }

    TopicCountAggregator.prototype = Object.create( Aggregator.prototype );

    /**
     * Given an array of buckets, will execute the provided aggregation
     * specification against all relevant entries.
     * @memberof TopicCountAggregator
     *
     * @param {Array} buckets - The array of buckets.
     *
     * @returns {Array} The aggregated buckets.
     */
    TopicCountAggregator.prototype.aggregate = function( buckets ) {
        var bucketsByTopic = {},
            aggBuckets = [],
            topic;
        this.forEach(
            buckets,
            function( bucket ) {
                var topic,
                    i;
                if ( bucket ) {
                    for ( i=0; i<bucket.length; i++ ) {
                        topic = bucket[i].topic;
                        bucketsByTopic[ topic ] = bucketsByTopic[ topic ] || [];
                        bucketsByTopic[ topic ].push( bucket[i] );
                    }
                }
        });
        // then, for each id, aggregate the buckets
        for ( topic in bucketsByTopic ) {
            if ( bucketsByTopic.hasOwnProperty( topic ) ) {
                aggBuckets.push( aggregateBucket( this, bucketsByTopic[ topic ] ) );
            }
        }
        // finally, sort them based on count
        aggBuckets.sort( function( a, b ) {
            return b.count - a.count;
        });
        return aggBuckets;
    };

    module.exports = TopicCountAggregator;

}());

},{"./Aggregator":35}],39:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Aggregator = require('./Aggregator'),
        Util = require('../../../util/Util');

    /**
     * Iterates over each bucket, and perform the aggregation.
     *
     * @param {Aggregator} aggregator - The aggregator object.
     * @param {Array} buckets - The array of buckets.
     *
     * @param {Array} The aggregated buckets.
     */
    function aggregateBucket( aggregator, buckets ) {
        var aggregation,
            score,
            total,
            texts,
            parsed,
            i, j, k;
        // set base aggregator
        aggregation = {
            topic: buckets[0].topic,
            topicEnglish: aggregator.translateTopic( buckets[0].topic ),
            counts: Util.fillArray(buckets[0].score instanceof Array ?
	            buckets[0].score.length : buckets[0].score.total.length ),
            total: 0
        };
        // for each bucket of data
        for ( i=0; i<buckets.length; i++ ) {
            score = buckets[i].score;
            total = ( score instanceof Array ) ? score : score.total;
            // add to total count
            for ( j=0; j<total.length; j++ ) {
                aggregation.counts[j] += total[j];
                aggregation.total += total[j];
            }
            // get sentiment. 'negative', 'positive', or 'neutral'
            texts = score.texts;
            if ( texts ) {
                for ( k=0; k<texts.length; k++ ) {
                    parsed = JSON.parse( texts[k].text );
                    aggregation.sentiment = parseSentiment( parsed[2] );
                }
            }
        }
        return aggregation;
    }

    /**
     * Instantiate a TopicCountArrayAggregator object.
     * @class TopicCountArrayAggregator
     * @classdesc
     */
    function TopicCountArrayAggregator() {
    }

    TopicCountArrayAggregator.prototype = Object.create( Aggregator.prototype );

    /**
     * Given an array of buckets, will execute the provided aggregation
     * specification against all relevant entries.
     * @memberof TopicCountArrayAggregator
     *
     * @param {Array} buckets - The array of buckets.
     *
     * @returns {Array} The aggregated buckets.
     */
    TopicCountArrayAggregator.prototype.aggregate = function( buckets ) {
        var bucketsByTopic = {},
            aggBuckets = [],
            topic;
        this.forEach(
            buckets,
            function( bucket ) {
                var topic,
                    i;
                if ( bucket ) {
                    for ( i=0; i<bucket.length; i++ ) {
                        topic = bucket[i].topic;
                        bucketsByTopic[ topic ] = bucketsByTopic[ topic ] || [];
                        bucketsByTopic[ topic ].push( bucket[i] );
                    }
                }
        });
        // then, for each id, aggregate the buckets
        for ( topic in bucketsByTopic ) {
            if ( bucketsByTopic.hasOwnProperty( topic ) ) {
                aggBuckets.push( aggregateBucket( this, bucketsByTopic[ topic ] ) );
            }
        }
        // finally, sort them based on count
        aggBuckets.sort( function( a, b ) {
            return b.total - a.total;
        });
        return aggBuckets;
    };

    /**
     * Returns the sentiment id string based on the numerical value.
     *
     * @param {number} value - The sentiment value.
     *
     * @returns {String} The sentiment id.
     */
    function parseSentiment( value ) {
        if ( value === undefined ) {
            return undefined;
        }
        if ( value === -1 ) {
            return 'negative';
        } else if ( value === 1 ) {
            return 'positive';
        }
        return 'neutral';
    }

    module.exports = TopicCountArrayAggregator;

}());

},{"../../../util/Util":60,"./Aggregator":35}],40:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Aggregator = require('./Aggregator'),
        Util = require('../../../util/Util');

    /**
     * Instantiate a TopicFrequencyAggregator object.
     * @class TopicFrequencyAggregator
     * @classdesc
     */
    function TopicFrequencyAggregator() {
    }

    TopicFrequencyAggregator.prototype = Object.create( Aggregator.prototype );

    /**
     * Given an array of buckets, will execute the provided aggregation
     * specification against all relevant entries.
     * @memberof TopicFrequencyAggregator
     *
     * @param {Array} buckets - The array of buckets.
     *
     * @returns {Array} The aggregated buckets.
     */
    TopicFrequencyAggregator.prototype.aggregate = function( buckets ) {
        var that = this,
            indexByTopic = {},
            range = this.getBucketRange( buckets ),
            bucketCount = range.end - range.start + 1,
            topics = [];
        this.forEach(
            buckets,
            function( bucket, index ) {
                var topicIndex,
                    topic,
                    score,
                    total,
                    i, j,
                    val;
                if ( bucket ) {
                    for ( i=0; i<bucket.length; i++ ) {
                        topic = bucket[i].topic;
                        if ( indexByTopic[ topic ] === undefined ) {
                            // create index if it does not exist
                            indexByTopic[ topic ] = topics.length;
                            topics.push({
                                topic: topic,
                                topicEnglish: that.translateTopic( topic ),
                                count: 0,
                                frequencies: Util.fillArray( bucketCount )
                            });
                        }
                        score = bucket[i].score;
                        total = ( typeof score === "number" || score instanceof Array ) ? score : score.total;
                        topicIndex = indexByTopic[ topic ];

                        if (total instanceof Array) {
                            // Calculate total aggregate and indexed aggregate
                            if (!topics[ topicIndex ].indexedCount) {
                                topics[topicIndex].indexedCount = new Array(total.length).fill(0);
                                topics[topicIndex].indexedFrequencies = new Array(bucketCount);
                            }
                            if (!topics[topicIndex].indexedFrequencies[index]) {
                                topics[topicIndex].indexedFrequencies[index] = new Array(total.length).fill(0);
                            }

                            var summedTotal = 0;

                            for (j = 0; j < total.length; j++) {
                                val = total[j];
                                summedTotal += val;
                                topics[topicIndex].indexedCount[j] += val;
                                topics[topicIndex].indexedFrequencies[index][j] += val;
                            }
                            total = summedTotal;
                        }

                        topics[ topicIndex ].count += total;
                        topics[ topicIndex ].frequencies[ index ] = total;
                    }
                }
        });
        // sort topics based on count
        topics.sort( function( a, b ) {
            return b.count - a.count;
        });
        return topics;
    };

    module.exports = TopicFrequencyAggregator;

}());

},{"../../../util/Util":60,"./Aggregator":35}],41:[function(require,module,exports){
/*
 * Copyright (c) 2013 Oculus Info Inc.
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Aggregator = require('./Aggregator');

    /**
     * Returns the sentiment id string based on the numerical value.
     *
     * @param {number} value - The sentiment value.
     *
     * @returns {String} The sentiment id.
     */
    function parseSentiment( value ) {
        if ( value === undefined ) {
            return undefined;
        }
        if ( value === -1 ) {
            return 'negative';
        } else if ( value === 1 ) {
            return 'positive';
        }
        return 'neutral';
    }

    /**
     * Iterates over each bucket, and perform the aggregation.
     *
     * @param {Array} paths - The array of paths.
     * @param {Array} buckets - The array of buckets.
     *
     * @param {Array} The aggregated buckets.
     */
    function aggregateBucket( buckets ) {
        var tweets = [],
            parsed,
            texts,
            bucket,
            i, j;
        for ( i=0; i<buckets.length; i++ ) {
            bucket = buckets[i];
            texts = bucket.score.texts;
            for ( j=0; j<texts.length; j++ ) {
                parsed = JSON.parse( texts[j].text );
                tweets.push({
                    user: parsed[0],
                    text: parsed[1],
                    sentiment: parseSentiment( parsed[2] ),
                    timestamp: texts[j].score
                });
            }
        }
        return tweets;
    }

    /**
     * Instantiate a TweetsByTopicAggregator object.
     * @class TweetsByTopicAggregator
     * @classdesc
     */
    function TweetsByTopicAggregator() {
    }

    TweetsByTopicAggregator.prototype = Object.create( Aggregator.prototype );

    /**
     * Given an array of buckets, will execute the provided aggregation
     * specification against all relevant entries.
     * @memberof TweetsByTopicAggregator
     *
     * @param {Array} buckets - The array of buckets.
     * @param {number} startBucket - The start bucket. Optional.
     * @param {number} endBucket - The end bucket. Optional.
     *
     * @returns {Array} The aggregated buckets.
     */
    TweetsByTopicAggregator.prototype.aggregate = function( buckets ) {
        var bucketsByTopic = {},
            tweetsByTopic = {},
            topic;
        this.forEach(
            buckets,
            function( bucket ) {
                var topic,
                    i;
                if ( bucket ) {
                    for ( i=0; i<bucket.length; i++ ) {
                        topic = bucket[i].topic;
                        bucketsByTopic[ topic ] = bucketsByTopic[ topic ] || [];
                        bucketsByTopic[ topic ].push( bucket[i] );
                    }
                }
        });
        // then, for each id, aggregate the buckets
        for ( topic in bucketsByTopic ) {
            if ( bucketsByTopic.hasOwnProperty( topic ) ) {
                tweetsByTopic[ topic ] = aggregateBucket( bucketsByTopic[ topic ] );
            }
        }
        return tweetsByTopic;
    };

    module.exports = TweetsByTopicAggregator;

}());

},{"./Aggregator":35}],42:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Util = require('../util/Util'),
        PubSub = require('../util/PubSub'),
        AxisUtil = require('./AxisUtil'),
        AXIS_TITLE_CLASS = "axis-title-label",
        AXIS_DIV_CLASS_SUFFIX = "-axis",
        AXIS_HEADER_CLASS = "axis-header",
        AXIS_HEADER_CLASS_SUFFIX = "-axis-header",
        AXIS_CONTENT_CLASS = "axis-content",
        AXIS_CONTENT_CLASS_SUFFIX = "-axis-content",
        AXIS_LABEL_CLASS = "axis-marker-label",
        AXIS_POSITIONED_LABEL_CLASS_SUFFIX = "-axis-marker-label" ,
        AXIS_MARKER_CLASS = "axis-marker",
        AXIS_MARKER_SUFFIX = "-axis-marker",
        AXIS_POSITION_SUFFIX = "-axis",
        SPACING_BETWEEN_MARKER_AND_LABEL = 5,
        Z_INDEX = 2001;

    /**
     * Creates and returns a dummy marker label element to measure. This function
     * is used for measuring, as the real label func sizes the labels to the current
     * max measurements
     * @private
     *
     * @param axis   {Axis}     the axis object.
     * @param marker {Object} the marker object.
     */
    function createDummyMarkerLabelHTML( axis, marker ) {
        return '<div class="' + AXIS_LABEL_CLASS
            + ' ' + axis.horizontalOrVertical + AXIS_POSITIONED_LABEL_CLASS_SUFFIX + '"'
            + 'style="position:absolute;">'
            + axis.format( marker.label )
            + '</div>';
    }

    /**
     * Creates and returns a marker label element with proper CSS
     * @private
     *
     * @param axis   {Axis}     the axis object.
     * @param marker {Object} the marker object.
     */
    function createMarkerLabelHTML( axis, marker ) {
        var primaryPosition,
            secondaryPosition;
        if ( axis.isXAxis ) {
            // if x axis, add half of label length as text is anchored from bottom
            primaryPosition = marker.pixel - axis.MAX_LABEL_UNROTATED_WIDTH*0.5;
            secondaryPosition =  axis.LARGE_MARKER_LENGTH
                + SPACING_BETWEEN_MARKER_AND_LABEL;
        } else {
            primaryPosition = marker.pixel - axis.MAX_LABEL_HEIGHT*0.5;
            secondaryPosition =  axis.LARGE_MARKER_LENGTH
                + SPACING_BETWEEN_MARKER_AND_LABEL;
        }
        return '<div class="' + AXIS_LABEL_CLASS + ' '
            + axis.horizontalOrVertical + AXIS_POSITIONED_LABEL_CLASS_SUFFIX + '"'
            + 'style="position:absolute;'
            + 'text-align: center; '    // center text horizontally
            + 'height: ' + axis.MAX_LABEL_HEIGHT + 'px;'
            + 'line-height: ' + axis.MAX_LABEL_HEIGHT + 'px;'   // center text vertically
            + axis.leftOrTop + ":" + primaryPosition + 'px;'
            + axis.oppositePosition + ":" + secondaryPosition + 'px;">'
            + axis.format( marker.label )
            +'</div>';
    }

    /**
     * Creates and returns a large marker element with proper CSS
     * @private
     *
     * @param axis   {Axis}     the axis object.
     * @param marker {Object} the marker object.
     */
    function createLargeMarkerHTML( axis, marker ) {
        return '<div class="' + AXIS_MARKER_CLASS
            + ' large-' + axis.horizontalOrVertical + AXIS_MARKER_SUFFIX
            + ' ' + axis.position + AXIS_POSITION_SUFFIX + '"'
            + 'style="position:absolute;'
            + axis.leftOrTop + ":" + (marker.pixel - axis.LARGE_MARKER_HALF_WIDTH) + 'px;">'
            + '</div>';
    }

    /**
     * Creates and returns a major marker element with proper CSS
     * @private
     *
     * @param axis   {Axis}     the axis object.
     * @param marker {Object} the marker object.
     */
    function createMediumMarkerHTML( axis, marker ) {
        return '<div class="' + AXIS_MARKER_CLASS
            + ' medium-' + axis.horizontalOrVertical + AXIS_MARKER_SUFFIX
            + ' ' + axis.position + AXIS_POSITION_SUFFIX + '"'
            + 'style="position:absolute;'
            + axis.leftOrTop + ":" + (marker.pixel - axis.MEDIUM_MARKER_HALF_WIDTH) + 'px;">'
            + '</div>';
    }

    /**
     * Creates and returns a major marker element with proper CSS
     * @private
     *
     * @param axis   {Axis}     the axis object.
     * @param marker {Object} the marker object.
     */
    function createSmallMarkerHTML( axis, marker ) {
        return '<div class="' + AXIS_MARKER_CLASS
            + ' small-' + axis.horizontalOrVertical + AXIS_MARKER_SUFFIX
            + ' ' + axis.position + AXIS_POSITION_SUFFIX + '"'
            + 'style="position:absolute;'
            + axis.leftOrTop + ":" + (marker.pixel - axis.SMALL_MARKER_HALF_WIDTH) + 'px;">'
            + '</div>';
    }

    function measureLabelRotation( axis, $label ) {
        var matrix, values, angle;
        matrix = $label.css("-webkit-transform") ||
                 $label.css("-moz-transform")    ||
                 $label.css("-ms-transform")     ||
                 $label.css("-o-transform")      ||
                 $label.css("transform") || 'none';
        if(matrix !== 'none') {
            values = matrix.split('(')[1].split(')')[0].split(',');
            angle = Math.atan2(values[1], values[0]);
        } else {
            angle = 0;
        }
        axis.ROTATION_RADIANS = Math.abs(angle);
    }

    function measureLabelElement( axis, $label ) {
        var sinW = $label.width() * Math.sin( axis.ROTATION_RADIANS ),
            sinH = $label.height() * Math.sin( axis.ROTATION_RADIANS ),
            cosW = $label.width() * Math.cos( axis.ROTATION_RADIANS ),
            cosH = $label.height() * Math.cos( axis.ROTATION_RADIANS );
        axis.MAX_LABEL_WIDTH = Math.max( sinH + cosW, axis.MAX_LABEL_WIDTH );
        axis.MAX_LABEL_HEIGHT = Math.max( cosH + sinW, axis.MAX_LABEL_HEIGHT );
        axis.MAX_LABEL_UNROTATED_WIDTH = Math.max( $label.width(), axis.MAX_LABEL_UNROTATED_WIDTH );
    }

    function measureLabelDimensions( axis ) {
        var min = {
                pixel: 0,
                label: axis.min
            },
            max = {
                pixel: 0,
                label: axis.max
            },
            $temp;
        // clear previous measurements
        axis.MAX_LABEL_WIDTH = 0;
        axis.MAX_LABEL_HEIGHT = 0;
        axis.MAX_LABEL_UNROTATED_WIDTH = 0;
        // measure max label
        $temp = $( createDummyMarkerLabelHTML( axis, max ) ).appendTo( axis.$content );
        measureLabelElement( axis, $temp );
        $temp.remove();
        // measure min label
        $temp = $( createDummyMarkerLabelHTML( axis, min ) ).appendTo( axis.$content );
        measureLabelElement( axis, $temp );
        $temp.remove();
    }

    /**
     * This function is used to create temporary elements to determine the required run-time
     * dimensions. This is only be called once per axis as these dimensions will never change.
     * @private
     *
     * @param axis{Axis} the axis object.
     */
    function calcElementDimensions( axis ) {
        var $temp;
        // initialized all measurements to zero
        axis.LARGE_MARKER_LENGTH = 0;
        axis.LARGE_MARKER_HALF_WIDTH = 0;
        axis.MEDIUM_MARKER_HALF_WIDTH = 0;
        axis.SMALL_MARKER_HALF_WIDTH = 0;
        axis.ROTATION_RADIANS = 0;
        axis.HEADER_WIDTH = 0;
        axis.TITLE_WIDTH = 0;
        if ( axis.title ) {
            // title width
            axis.TITLE_WIDTH = axis.$title.width();
            // header width
            switch ( axis.position ) {
                case "top":
                    axis.HEADER_WIDTH = parseInt( axis.$header.css("border-top-width"), 10 );
                    break;
                case "right":
                    axis.HEADER_WIDTH = parseInt( axis.$header.css("border-right-width"), 10 );
                    break;
                case "bottom":
                    axis.HEADER_WIDTH = parseInt( axis.$header.css("border-bottom-width"), 10 );
                    break;
                case "left":
                    axis.HEADER_WIDTH = parseInt( axis.$header.css("border-left-width"), 10 );
                    break;
            }
        }
        // measure large markers
        $temp = $(createLargeMarkerHTML( axis, {pixel:0} )).hide().appendTo(axis.$content);
        axis.LARGE_MARKER_LENGTH = $temp[axis.markerWidthOrHeight]();
        axis.LARGE_MARKER_HALF_WIDTH = Math.floor( $temp[axis.axisWidthOrHeight]()*0.5 );
        $temp.remove();
        // measure medium markers
        $temp = $(createMediumMarkerHTML( axis, {pixel:0} )).hide().appendTo(axis.$content);
        axis.MEDIUM_MARKER_HALF_WIDTH = Math.floor( $temp[axis.axisWidthOrHeight]() * 0.5);
        $temp.remove();
        // measure small markers
        $temp = $(createSmallMarkerHTML( axis, {pixel:0} )).hide().appendTo(axis.$content);
        axis.SMALL_MARKER_HALF_WIDTH = Math.floor( $temp[axis.axisWidthOrHeight]() * 0.5);
        $temp.remove();
        // measure label rotation
        $temp = $( createDummyMarkerLabelHTML( axis, {pixel:0} ) ).appendTo( axis.$content );
        measureLabelRotation( axis, $temp );
        $temp.remove();
        // measure label dimensions
        measureLabelDimensions( axis );
    }

    /**
     * Creates and returns the axis label element with proper CSS.
     * @private
     *
     * @param axis {Axis} the axis object.
     */
    function createTitle( axis ) {
        var rotation = "",
            transformOrigin ="";
        if ( !axis.isXAxis ) {
            rotation = "rotate(-90deg)";
            transformOrigin = "top left";
        }
        return $('<span class="'+AXIS_TITLE_CLASS+'"'
            + 'style="position:absolute;'
            + '-webkit-transform: ' + rotation + ";"
            + '-moz-transform: ' + rotation + ";"
            + '-ms-transform: ' + rotation + ";"
            + '-o-transform: ' + rotation + ";"
            + 'transform: ' + rotation + ";"
            + '-webkit-transform-origin: ' + transformOrigin + ";"
            + '-moz-transform-origin: ' + transformOrigin + ";"
            + '-ms-transform-origin: ' + transformOrigin + ";"
            + '-o-transform-origin: ' + transformOrigin + ";"
            + 'transform-origin: ' + transformOrigin + ";"
            + '">' + axis.title + '</div>');
    }

    /**
     * Creates and returns the axis header jquery object.
     * @private
     *
     * @param axis {Axis} the axis object.
     */
    function createHeader( axis ) {
        return $('<div class="'+ AXIS_HEADER_CLASS + " " + axis.horizontalOrVertical + '-header' +" " + axis.position + AXIS_HEADER_CLASS_SUFFIX + '"'
               + 'style="z-index:'+(Z_INDEX+2)+';"></div>');
    }

    /**
     * Creates and returns the axis header background jquery object. This is used
     * to apply a box-shadow css without ugly overlap.
     * @private
     *
     * @param axis {Axis} the axis object.
     */
    function createHeaderBack( axis ) {
        return $('<div class="'+ AXIS_HEADER_CLASS + " " + AXIS_HEADER_CLASS + "-back " + axis.horizontalOrVertical + '-header-back' + '"'
               + 'style="z-index:'+(Z_INDEX+1)+';'
               + axis.position + ':0px;'
               + ( axis.isXAxis ? '' : 'top:0px;') + '"></div>' );
    }

    /**
     * Creates and returns the empty axis content jquery object.
     * @private
     *
     * @param axis {Axis} the axis object.
     */
    function createContent( axis ) {
        return $('<div class="'+ AXIS_CONTENT_CLASS
               + " " + axis.position + AXIS_CONTENT_CLASS_SUFFIX
               + '"  style="z-index:'+Z_INDEX+';"></div>');
    }

    /**
     * Creates and returns the axis parent div jquery object.
     * @private
     *
     * @param axis {Axis} the axis object.
     */
    function createAxis( axis ) {
        var $axis,
            enableSlide,
            disableSlide,
            horizontalSlide,
            verticalSlide;
        enableSlide = function() {
            // set enable / disable callbacks if collapsible axis
            if ( axis.isXAxis ) {
                axis.$header.click( verticalSlide );
                axis.$content.click( verticalSlide );
            } else {
                axis.$header.click( horizontalSlide );
                axis.$content.click( horizontalSlide );
            }
        };
        disableSlide = function() {
            axis.$header.off('click');
            axis.$content.off('click');
        };
        horizontalSlide = function() {
            axis.setEnabled( !axis.isEnabled() );
            axis.updateDimension();
            disableSlide();
            axis.$content.animate({width: 'toggle'}, {duration: 300, complete: function(){ enableSlide();} });
            axis.redraw();
            PubSub.publish( axis.getChannel(), { field: 'open', value: axis.isEnabled() } );
        };
        verticalSlide = function() {
            axis.setEnabled( !axis.isEnabled() );
            axis.updateDimension();
            disableSlide();
            axis.$content.animate({height: 'toggle'}, {duration: 300, complete: function(){ enableSlide();} });
            axis.redraw();
            PubSub.publish( axis.getChannel(), { field: 'open', value: axis.isEnabled() } );
        };
        // create axis content container and append it to root
        axis.$content = createContent( axis );
        $axis = $('<div class="axis '+ axis.position + AXIS_DIV_CLASS_SUFFIX + '"></div>');
        $axis.append( axis.$content );
        if ( axis.title  ) {
            // only create title and header IF a title is provided
            axis.$title = createTitle( axis );
            axis.$header = createHeader( axis ).append( axis.$title );
            $axis.append( axis.$header );
            $axis.append( createHeaderBack( axis ) );
            // enable callbacks, if collapsible
            if ( axis.collapsible ) {
                enableSlide();
            }
        }
        // return root
        return $axis;
    }

    /**
     * Updates the positon of the axis title of its size changes.
     * @private
     *
     * @param axis {Axis} the axis object.
     */
    function updateAxisTitle( axis ) {
        // update axis length
        var $title = axis.$title,
            axisLength,
            padding;
        // calc new axis length
        if ( axis.isXAxis ) {
            axisLength = axis.$map.outerWidth();
        } else {
            axisLength = axis.$map.outerHeight() - (axis.HEADER_WIDTH*2);
            // add position offset for vertical axes
            $title.css( axis.leftOrTop, axisLength+"px" );
        }
        // calc padding
        padding = ( axisLength/2 ) - ( axis.TITLE_WIDTH/2 );
        // add padding for hover hit box
        $title.css( 'padding-left', padding + "px" );
    }

    /**
     * Creates the axis marker elements and appends them to the content div.
     * @private
     *
     * @param axis {Axis} the axis object.
     */
    function updateAxisContent( axis ) {
        var markers,
            markersHTML = "",
            markersBySize,
            i;
        // generate array of marker labels and pixel locations
        markersBySize = AxisUtil.getMarkers( axis );
        // large markers
        markers = markersBySize.large;
        for (i = 0; i < markers.length; i++) {
            markersHTML += createLargeMarkerHTML( axis, markers[i] );
            if ( markers[i].label ) {
                markersHTML += createMarkerLabelHTML( axis, markers[i] );
            }
        }
        // medium markers
        markers = markersBySize.medium;
        for (i = 0; i < markers.length; i++) {
            markersHTML += createMediumMarkerHTML( axis, markers[i] );
            if ( markers[i].label ) {
                markersHTML += createMarkerLabelHTML( axis, markers[i] );
            }
        }
        // small markers
        markers = markersBySize.small;
        for (i = 0; i < markers.length; i++) {
            markersHTML += createSmallMarkerHTML( axis, markers[i] );
            if ( markers[i].label ) {
                markersHTML += createMarkerLabelHTML( axis, markers[i] );
            }
        }
        // append all markers and labels at once
        axis.$content[0].innerHTML = markersHTML;
    }

    /**
     * Returns the draw callback function on map 'move' event.
     * @private
     *
     * @param axis {Axis} The axis object.
     */
    function redrawCallback( axis ) {
        return function() {
            axis.redraw();
        };
    }

    /**
     * Returns the mouse marker callback function on 'mousemove' event.
     * @private
     *
     * @param axis {Axis} The axis object.
     */
    function mouseMoveCallback( axis ) {
        return function( event ) {
            if ( !axis.enabled ) {
                return;
            }
            var marker = AxisUtil.getMarker( axis, event.xy.x, event.xy.y );
            axis.$content.find( '.mouse-marker' ).remove();
            axis.$content.append( $( createLargeMarkerHTML( axis, marker ) ).addClass( 'mouse-marker' ) );
        };
    }

    /**
     * Returns the mouse hover callback function on 'mouseover' event.
     * @private
     *
     * @param axis {Axis} The axis object.
     */
    function mouseHoverCallback( axis ) {
        return function( event ) {
            var offset = axis.$content.offset(),
                position = {
                    x: event.clientX - offset.left,
                    y: event.clientY - offset.top
                },
                marker = AxisUtil.getMarker( axis, position.x, position.y ),
                $label;
            // remove existing markers
            axis.$content.find( '.axis-hover-label' ).remove();
            axis.$content.find( '.mouse-marker' ).remove();
            // create label
            $label = $('<div class="axis-hover-label hover-label" style="'+
                axis.leftOrTop+':'+ marker.pixel +'px;">'+
                    '<div class="hover-label-text">'+ axis.format( marker.label, true ) +'</div>'+
                '</div>');
            // append label
            axis.$content.append( $label );
            // position label
            if ( axis.isXAxis ) {
                $label.css( axis.oppositePosition, -( $label.outerHeight() + 10 ) );
                $label.css( 'margin-left', -$label.outerWidth()/2 );
            } else {
                $label.css( axis.oppositePosition, -( $label.outerWidth() + 10 ) );
                $label.css( 'margin-top', -$label.outerHeight()/2 );
            }
            // create and append marker
            axis.$content.append( $( createLargeMarkerHTML( axis, marker ) ).addClass( 'mouse-marker' ) );
        };
    }

    /**
     * Returns the mouse hover callback function on 'mouseout' event.
     * @private
     *
     * @param axis {Axis} The axis object.
     */
    function mouseOutCallback( axis ) {
        return function() {
            axis.$content.find( '.axis-hover-label' ).remove();
            axis.$content.find( '.mouse-marker' ).remove();
        };
    }

    /**
     * Instantiate an Axis object.
     * @class Axis
     * @classdesc A map axis object that will attach to a map edge and display coordinates based on
     *            supplied interval and unit specification.
     *
     * @param spec {Object} The specification object:
     * <pre>
	 * {
     *     position {String}  Set the position to the bottom of the map. Default = "bottom"
     *     title    {String}  Set the title of the axis label. Default = "Axis"
     *     enabled  {boolean} Have the axis initialize to an open or closed state. Default = true
     *     repeat   {boolean} Whether or not the axis repeats. Default = false
     *     intervals: {
     *         type          {String}  Whether the intervals are by "percentage" or by "value". Default = "percentage"
     *         increment     {number}  The interval increment in. Default = 10
     *         pivot         {number}  The value from with increments are generated from. Default = undefined
     *         scaleByZoom   {boolean} Whether the increments should be scaled by zoom level. Default = true
     *         minPixelWidth {number}  The minimum width for a full axis increment. Default = undefined;
     *     }
     *     units: {
     *         type     {String}  The type of unit, ["integer", "decimal", "thousands", "millions", "billions", "degrees"]. Default = "decimal"
     *         decimals {number}  The number of decimals to display, if applicable. Default = 2
     *         stepDown {boolean} Whether values should step down by unit type, if applicable. Default = true
     *     }
     * }
	 * </pre>
     */
    function Axis( spec ) {

        this.uuid = Util.generateUuid();
        this.position = ( spec.position !== undefined ) ? spec.position.toLowerCase() : 'bottom';
        this.repeat = ( spec.repeat !== undefined ) ? spec.repeat : false;
        this.title = spec.title || null;
        this.enabled = ( spec.enabled !== undefined ) ? spec.enabled : true;
        this.collapsible = ( spec.collapsible !== undefined ) ? spec.collapsible : true;
        spec.intervals = spec.intervals || {};
        this.intervals = {};
        this.intervals.type = ( spec.intervals.type !== undefined ) ? spec.intervals.type.toLowerCase() : 'percentage';
        this.intervals.increment = spec.intervals.increment || 10;
        this.intervals.pivot = spec.intervals.pivot;
        this.intervals.scaleByZoom = ( spec.intervals.scaleByZoom !== undefined ) ? spec.intervals.scaleByZoom : true;
        this.intervals.minPixelWidth = ( spec.intervals.minPixelWidth !== undefined ) ? spec.intervals.minPixelWidth : false;

        spec.units = spec.units || {};
        this.units = {};
        this.units.type = ( spec.units.type !== undefined ) ? spec.units.type.toLowerCase() : 'decimal';
        this.units.decimals = spec.units.decimals || 2;
        this.units.stepDown = ( spec.units.stepDown !== undefined ) ? spec.units.stepDown : true;
        this.units.scale = spec.units.scale || 'linear';

        // generate more attributes
        this.isXAxis = ( this.position === 'top' || this.position === 'bottom' );
        this.axisWidthOrHeight = this.isXAxis ? "width" : "height";
        this.markerWidthOrHeight = this.isXAxis ? "height" : "width";
        this.leftOrTop = this.isXAxis ? "left" : "top";
        this.horizontalOrVertical = (this.isXAxis) ? 'horizontal' : 'vertical';
        this.oppositePosition = (this.position === 'left') ? 'right' :
                                    (this.position === 'right') ? 'left' :
                                        (this.position === 'top') ? 'bottom' : 'top';
    }

    /**
     * Activates the Axis object. This should never be called manually.
     * @memberof Axis
     * @private
     */
    Axis.prototype.activate = function() {
        // create unique callbacks so they can be removed later
        this.redrawCallback = redrawCallback( this );
        this.mouseMoveCallback = mouseMoveCallback( this );
        this.mouseHoverCallback = mouseHoverCallback( this );
        this.mouseOutCallback = mouseOutCallback( this );
        // attach callbacks
        this.map.on( 'move', this.redrawCallback );
        this.map.on( 'mousemove', this.mouseMoveCallback );
        // generate the core html elements
        this.$map = $( this.map.getElement() );
        this.$axis = createAxis( this );
        this.$map.append( this.$axis );

        this.$axis.on( 'mousemove', this.mouseHoverCallback );
        this.$axis.on( 'mouseout', this.mouseOutCallback );

        // calculate the dimensions of the individual elements once
        calcElementDimensions( this );
        // check if axis starts open or closed
        if ( this.title && !this.enabled ) {
            // set enabled to true, as the triggered
            // click event will toggle the enabled flag
            // back to false
            this.enabled = true;
            // trigger close and skip animation;
            this.$header.click();
            this.$content.finish();
        }
    };

    /**
     * Dectivates the layer object. This should never be called manually.
     * @memberof Axis
     * @private
     */
    Axis.prototype.deactivate = function() {
        this.map.off( 'move', this.redrawCallback );
        this.map.off( 'mousemove', this.mouseMoveCallback );
        this.$axis.off( 'mousemove', this.mouseHoverCallback );
        this.$axis.off( 'mouseout', this.mouseOutCallback );
        this.$axis.remove();
        this.$axis = null;
        this.$title = null;
        this.$header = null;
        this.$content = null;
        this.redrawCallback = null;
        this.mouseMoveCallback = null;
        this.mouseHoverCallback = null;
        this.mouseOffCallback = null;
    };

    /**
     * Returns true if the axis is currently enabled, false if not.
     * @memberof Axis
     *
     * @returns {boolean} Whether or not the axis is enabled or not.
     */
    Axis.prototype.isEnabled = function() {
        return this.enabled;
    };

    /**
     * Enable or disable the axis.
     * @memberof Axis
     *
     * @param {boolean} - Whether to enable or disable the axis.
     */
    Axis.prototype.setEnabled = function( enabled ) {
        this.enabled = enabled;
    };

    /**
     * Returns the dimension of the content div of the axis.
     * @memberof Axis
     *
     * @returns {integer} The dimension of the content div.
     */
    Axis.prototype.getContentDimension = function() {
        var dim = this.isXAxis ? this.MAX_LABEL_HEIGHT : this.MAX_LABEL_WIDTH;
        if ( this.title ) {
            dim += this.HEADER_WIDTH;
        }
        return dim + SPACING_BETWEEN_MARKER_AND_LABEL*2 + this.LARGE_MARKER_LENGTH;
    };

    /**
     * Iterates over all axes on the map, determines the max content size, and
     * sets the content dimension to that size.
     * @memberof Axis
     *
     * @returns {integer} The max dimension of the axes attached to the map.
     */
    Axis.prototype.getMaxContentDimension = function() {
        var maxAxisLabelDim = 0;
        _.forIn( this.map.axes, function( axis ) {
            maxAxisLabelDim = Math.max( axis.getContentDimension() || 0, maxAxisLabelDim );
        });
        return maxAxisLabelDim;
    };

    /**
     * Sets the content dimension of the axis.
     * @memberof Axis
     */
    Axis.prototype.updateDimension = function() {
        var dim = this.isXAxis ? 'height' : 'width';
        this.$content[ dim ]( this.getMaxContentDimension( this.map ) );
    };

    /**
     * Checks if the mutable spec attributes have changed, if so, redraws the axis.
     * @memberof Axis
     */
    Axis.prototype.redraw = function() {
        if ( this.title ) {
            // always update title position (in case of window resize)
            updateAxisTitle( this );
        }
        // exit early if no markers are visible
        if ( !this.isEnabled() ) {
            return;
        }
        // measure label dimensions
        measureLabelDimensions( this );
        // add each marker to correct pixel location in axis DOM elements
        updateAxisContent( this );
    };

    /**
     * Format a value by the axis unit specification.
     *
     * @param {number} value - The value to format.
     * @param {boolean} verbose - Whether the formatting should be verbose. (optional)
     *
     * @returns {String} The resulting formatted value string.
     */
    Axis.prototype.format = function( value, verbose ) {
        return AxisUtil.formatText( this, value, this.units, verbose );
    };

    /**
     * Returns the publish/subscribe channel id of this specific axis.
     * @memberof Axis
     *
     * @returns {String} The publish/subscribe channel for the axis.
     */
     Axis.prototype.getChannel = function () {
        return 'axis.' + this.position + '.' + this.uuid;
    };

    module.exports = Axis;
}());

},{"../util/PubSub":59,"../util/Util":60,"./AxisUtil":43}],43:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * A utility namespace containing axis related functionality.
 */
( function() {

    "use strict";

    var Util = require('../util/Util'),
        MapUtil = require('./MapUtil'),
        MARKER_TYPE_ORDER = ['large', 'small', 'medium', 'small'];

    /**
     * Private: Given a value that is outside of the min and max of axis,
     * ensure the values rollover properly
     *
     * @param axis  {Axis}   the axis object.
     * @param value {number} original value.
     */
    function getMarkerRollover( axis, value ) {
        var rollover;
        if ( axis.repeat ) {
            // if repeat enabled ensure label value wraps past min/max properly
            if ( value > axis.max ) {
                rollover = value - axis.max + axis.min;
            } else if ( value < axis.min ) {
                rollover = value + axis.max - axis.min;
            } else {
                rollover = value;
            }
        } else {
            // non-repeat label is always value as there is no wrap around
            rollover = value;
        }
        return rollover;
    }

    /**
     * Private: Returns the pixel position for the value in viewport coordinates.
     *
     * @param axis  {Axis}   axis object.
     * @param value {number} the coordinate value.
     * @returns {int} pixel position
     */
    function getPixelPosition( axis, value ) {
        // given an axis value, get the pixel position on the page
        if ( axis.isXAxis ) {
            return MapUtil.getViewportPixelFromCoord( axis.map, value, 0 ).x;
        }
        return MapUtil.getViewportPixelFromCoord( axis.map, 0, value ).y;
    }

    /**
     * Private: Fills an array of markers by sub increments.
     *
     * @param axis      {Axis}   axis object.
     * @param start     {number} start increment.
     * @param end       {number} end increment
     * @param intervals {Object} intervals specification object.
     * @returns {{large: Array, medium: Array, small: Array}}
     */
    function fillArrayByIncrement( axis, start, end, intervals ) {
        var EPSILON = ( end - start ) * 0.000001,
            subIncrement = intervals.subIncrement,
            startingMarkerTypeIndex = intervals.startingMarkerTypeIndex,
            markers = {
                large: [],
                medium: [],
                small: []
            },
            i = Util.mod( startingMarkerTypeIndex, MARKER_TYPE_ORDER.length ),
            value,
            marker;
        // reduce sub increment by epsilon to prevent precision errors culling max point
        if ( axis.units.type !== 'time' &&
            axis.units.type !== 'date' &&
            axis.units.type !== 'i' &&
            axis.units.type !== 'int' &&
            axis.units.type !== 'integer' ) {
            subIncrement -= EPSILON;
        }
        for ( value=start; value<=end; value+=subIncrement ) {
            marker = {
                pixel: getPixelPosition( axis, value )
            };
            if ( MARKER_TYPE_ORDER[i] === "large" ) {
                marker.label = getMarkerRollover( axis, value );
            }
            markers[ MARKER_TYPE_ORDER[i] ].push( marker );
            i = (i + 1) % MARKER_TYPE_ORDER.length;
        }
        return markers;
    }

    /**
     * Private: Returns the minimum visible increment on the axis. Also sets the
     * 'startingMarkerTypeIndex' attribute on the intervals object to distinguish
     * which type of marker to start on.
     *
     * @param axis      {Axis}   axis object.
     * @param intervals {Object} intervals specification object.
     * @returns {number} minimum increment.
     */
    function getMinIncrement( axis, intervals ) {
        var minCull, // exact value of cull point, any value less will be culled from view
            incrementCount; // number of sub increments from the pivot
        if ( axis.isXAxis ) {
            minCull = MapUtil.getCoordFromViewportPixel( axis.map, 0, 0 ).x;
        } else {
            minCull = MapUtil.getCoordFromViewportPixel( axis.map, 0, axis.map.getViewportHeight() ).y;
        }
        if ( !axis.repeat && minCull < axis.min ) {
            // prevent roll-over
            minCull = axis.min;
        }
        // determine how many sub increments from the pivot to the minimum culling point
        incrementCount = Math.ceil( ( minCull - intervals.pivot ) / intervals.subIncrement, minCull );
        intervals.startingMarkerTypeIndex = incrementCount;
        // return the minimum increment that is still in view
        return intervals.pivot + intervals.subIncrement * incrementCount;
    }

    /**
     * Private: Returns the maximum visible increment on the axis.
     *
     * @param axis      {Axis}   axis object.
     * @param intervals {Object} intervals specification object.
     * @returns {number} maximum increment.
     */
    function getMaxIncrement( axis, intervals ) {
        var maxCull, // exact value of cull point, any value greater will be culled from view
            incrementCount; // number of sub increments from the pivot
        if ( axis.isXAxis ) {
            maxCull = MapUtil.getCoordFromViewportPixel( axis.map, axis.map.getViewportWidth(), 0 ).x;
        } else {
            maxCull = MapUtil.getCoordFromViewportPixel( axis.map, 0, 0 ).y;
        }
        if ( !axis.repeat && maxCull > axis.max ) {
            // prevent roll-over
            maxCull = axis.max;
        }
        // determine how many sub increments from the pivot to the maximum culling point
        incrementCount = Math.floor( ( maxCull - intervals.pivot ) / intervals.subIncrement, maxCull );
        // return the maximum increment that is still in view
        return intervals.pivot + intervals.subIncrement * incrementCount;
    }

    /**
     * Private: Rounds a value to an integer representation.
     *
     * @param value {number} the value.
     * @returns {int}
     */
    function formatInteger( value ) {
        return Math.round( value );
    }

    /**
     * Private: Formats a number in scientific notation rounding to nearest decimals.
     *
     * @param value    {number} the value.
     * @param decimals {int}    the number of decimal places.
     * @param allowStepDown {boolean} whether or not to step down units if < 1
     * @returns {string}
     */
    function formatScientificNotation( value, decimals ) {
        return value.toExponential(decimals);
    }

    /**
     * Private: Rounds a value to an floating point representation with specific decimal places.
     *
     * @param value    {number} the value.
     * @param decimals {int}    the number of decimal places.
     * @returns {string}
     */
    function formatNumber( value, decimals, allowStepDown ) {
        var truncValue = Math.pow( 10, -decimals );
        if (allowStepDown && value < truncValue) {
            return formatScientificNotation( value, decimals );
        }
        return Util.roundToDecimals( value, decimals );
    }

    /**
     * Private: Rounds a value to an floating point representation of thousands with a 'K' appended
     * onto the end.
     *
     * @param value         {number}  the value.
     * @param decimals      {int}     the number of decimal places.
     * @param allowStepDown {boolean} whether or not to step down units if < 1
     * @returns {string}
     */
    function formatThousand( value, decimals, allowStepDown ) {
        var truncValue = value / 1e3;
        if ( allowStepDown && Math.abs( truncValue ) < 1 ) {
            return formatNumber( value, decimals, true );
        }
        return Util.roundToDecimals( truncValue, decimals ) + 'K';
    }

    /**
     * Private: Rounds a value to an floating point representation of millions with an 'M' appended
     * onto the end.
     *
     * @param value         {number}  the value.
     * @param decimals      {int}     the number of decimal places.
     * @param allowStepDown {boolean} whether or not to step down units if < 1
     * @returns {string}
     */
    function formatMillion( value, decimals, allowStepDown ) {
        var truncValue = value / 1e6;
        if ( allowStepDown && Math.abs( truncValue ) < 1 ) {
            return formatThousand( value, decimals, true );
        }
        return Util.roundToDecimals( truncValue, decimals ) + 'M';
    }

    /**
     * Private: Rounds a value to an floating point representation of billions with a 'B' appended
     * onto the end.
     *
     * @param value         {number}  the value.
     * @param decimals      {int}     the number of decimal places.
     * @param allowStepDown {boolean} whether or not to step down units if < 1
     * @returns {string}
     */
    function formatBillion( value, decimals, allowStepDown ) {
        var truncValue = value / 1e9;
        if ( allowStepDown && Math.abs( truncValue ) < 1 ) {
            return formatMillion( value, decimals, true );
        }
        return Util.roundToDecimals( truncValue, decimals ) + 'B';
    }

    /**
     * Private: Formats a timestamp into a date.
     *
     * @param value {int} unix timestamp.
     * @param verbose {boolean} format to a longer more human readable date
     * @returns {string}
     */
    function formatTime( axis, value, verbose ) {
        var time = moment.utc( value );
        if ( verbose ) {
            return time.format( "MMM D, h:mm:ssa" );
        }
        var duration = moment.duration( ( axis.max - axis.min ) / Math.pow( 2, axis.map.getZoom() ) );
        if ( duration.asMonths() > 16 ) {
            return time.format( "YYYY" );
        } else if ( duration.asMonths() > 2 ) {
            return time.format( "MMM YYYY" );
        }
        return time.format( "MMM D, YYYY" );
    }

    /**
     * Private: Formats a floating point number and appends a 'degrees' symbol.
     *
     * @param value    {float} degrees value.
     * @param decimals {int}   the number of decimal places.
     * @returns {string}
     */
    function formatDegrees( value, decimals ) {
        return formatNumber( value, decimals ) + "\u00b0";
    }

    /**
     * Private: Returns a sub increment for the axis. This is scaled base on a
     * the 'minPixelWidth' interval property.
     * @param axis      {Axis}   axis object.
     * @param increment {number} increment for the axis.
     * @returns {number} sub increment value.
     */
    function getSubIncrement( axis, increment ) {
        var powerOfTwo = 1,
            subIncrement = increment / MARKER_TYPE_ORDER.length;
        if ( axis.intervals.minPixelWidth ) {
            // ensure increment is of minimum width
            while ( Math.abs( getPixelPosition( axis, increment*powerOfTwo ) -
                getPixelPosition( axis, 0 ) ) < axis.intervals.minPixelWidth ) {
                powerOfTwo *= 2;
            }
        }
        return subIncrement * powerOfTwo;
    }

    /**
     * Private: Adds a time based marker to the markers array.
     *
     * @param {Axis} axis - The axis object.
     * @param {number} start - The first visible value on the axis.
     * @param {number} end - The last visible value on the axis.
     * @param {Array} markers - The markers array.
     * @param {number} timestamp - The timestamp value to add.
     * @param {boolean} addLabel - Whether or not to add a label to the marker.
     */
    function addTimeMarker( axis, start, end, markers, timestamp, addLabel ) {
        if ( timestamp >= start && timestamp <= end ) {
            var marker = {
                pixel: getPixelPosition( axis, timestamp )
            };
            if ( addLabel ) {
                marker.label = timestamp;
            }
            markers.push( marker );
        }
    }

    /**
     * Private: Splits the time unit into non floating point units.
     *
     * @param {string} unit - The unit type.
     * @param {number} count - The number of units.
     */
    function splitTimeUnit( unit, count ) {
        // if unit is already a non floating point count, return early
        if ( count % 1 === 0 ) {
            return {
                unit: unit,
                count: count
            };
        }
        // split unit to next subunit
        var result = {};
        switch ( unit ) {
            case "year":
                result = {
                    unit: "month",
                    count: count * 12
                };
                break;
            case "month":
                result = {
                    unit: "week",
                    count: count * 4
                };
                break;
            case "week":
                result = {
                    unit: "day",
                    count: count * 7
                };
                break;
            case "day":
                result = {
                    unit: "hour",
                    count: count * 24
                };
                break;
            default:
                console.error("Cannot split time units evenly");
                return null;
        }
        // if unit still isn't split evenly, recurse further
        if ( result.count % 1 !== 0 ) {
            return splitTimeUnit( result.unit, result.count );
        }
        return result;
    }

    /**
     * Private: Adds time based markers based on some alignment.
     *
     * @param {Axis} axis - The axis object.
     * @param {Array} markers - The markers array.
     * @param {number} start - The first visible value on the axis.
     * @param {number} end - The last visible value on the axis.
     * @param {string} alignBy - The unit to align the markers by.
     * @param {string} unit - The unit by which to step by.
     * @param {number} countPerLabel - The number of units per label.
     */
    function addTimeAlignedMarkers( axis, markers, start, end, alignBy, unit, countPerLabel ) {
        var alignedStart = moment.utc( start ).startOf( alignBy ).valueOf(),
            duration = moment.duration( end - alignedStart ),
            numUnits = duration.as( unit + "s" ),
            step = countPerLabel >= 1 ? countPerLabel : 1,
            subUnit,
            aligned,
            large,
            medium,
            small,
            i, j;
        for ( i=0; i<numUnits; i+=step ) {
            // get timestamp of aligned unit
            aligned = moment.utc( alignedStart ).add( i, unit ).valueOf();
            // determine number of sub divisions
            var numSubDivisions = 1/countPerLabel;
            for ( j=0; j<numSubDivisions; j++ ) {
                var subDivided = splitTimeUnit( unit, countPerLabel );
                large = moment.utc( aligned ).add( j*subDivided.count, subDivided.unit ).valueOf();
                // add large marker
                addTimeMarker( axis, start, end, markers.large, large, true );
                // add medium marker
                subUnit = splitTimeUnit( subDivided.unit, subDivided.count / 2 );
                medium = moment.utc( large ).add( subUnit.count, subUnit.unit + "s" ).valueOf();
                addTimeMarker( axis, start, end, markers.medium, medium );
                // add small marker
                subUnit = splitTimeUnit( subDivided.unit, subDivided.count / 4 );
                small = moment.utc( large ).add( subUnit.count, subUnit.unit + "s" ).valueOf();
                addTimeMarker( axis, start, end, markers.small, small );
                small = moment.utc( large ).add( subUnit.count * 3, subUnit.unit + "s" ).valueOf();
                addTimeMarker( axis, start, end, markers.small, small );
            }
        }
    }

    /**
     * Private: Fills an array of markers by time based sub increments.
     *
     * @param axis      {Axis}   axis object.
     * @param start     {number} start increment.
     * @param end       {number} end increment
     */
    function fillArrayByTimeIncrement( axis, start, end ) {
        var duration = moment.duration( ( axis.max - axis.min ) / Math.pow( 2, axis.map.getZoom() ) ),
            markers = {
                large: [],
                medium: [],
                small: []
            };
        if ( duration.asMonths() > 16 ) {
            addTimeAlignedMarkers( axis, markers, start, end, "year", "year", 1 );
        } else if ( duration.asMonths() > 8 ) {
            addTimeAlignedMarkers( axis, markers, start, end, "year", "month", 4 );
        } else if ( duration.asMonths() > 4 ) {
            addTimeAlignedMarkers( axis, markers, start, end, "year", "month", 2 );
        } else if ( duration.asMonths() > 2 ) {
            addTimeAlignedMarkers( axis, markers, start, end, "year", "month", 1 );
        } else if ( duration.asMonths() > 1 ) {
            addTimeAlignedMarkers( axis, markers, start, end, "year", "month", 0.5 );
        } else if ( duration.asWeeks() > 2 ) {
            addTimeAlignedMarkers( axis, markers, start, end, "year", "month", 0.25 );
        } else if ( duration.asWeeks() > 1 ) {
            addTimeAlignedMarkers( axis, markers, start, end, "year", "day", 4 );
        } else if ( duration.asDays() > 4 ) {
            addTimeAlignedMarkers( axis, markers, start, end, "year", "day", 2 );
        } else {
            addTimeAlignedMarkers( axis, markers, start, end, "year", "day", 1 );
        }
        return markers;
    }

    module.exports = {

        /**
         * Formats axis marker label text.
         *
         * @param value {number} value of the label
         * @param units {Object} unit specification of the axis.
         * @param verbose {boolean} format to a more verbose format, if available.
         */
        formatText: function( axis, value, units, verbose ) {

            if ( !units ) {
                return formatNumber( value, 2 );
            }

            if (units.scale === "log10") {
                value = Math.pow(10, value);
            }

            switch ( units.type ) {

                case 'degrees':
                case 'degree':
                case 'deg':

                    return formatDegrees( value, units.decimals );

                case 'time':
                case 'date':

                    return formatTime( axis, value, verbose );

                case 'k':
                case 'thousand':
                case 'thousands':

                    return formatThousand( value, units.decimals, units.stepDown );

                case 'm':
                case 'million':
                case 'millions':

                    return formatMillion( value, units.decimals, units.stepDown );

                case 'b':
                case 'billion':
                case 'billions':

                    return formatBillion( value, units.decimals, units.stepDown );

                case 'i':
                case 'int':
                case 'integer':

                    return formatInteger( value );

                default:

                    return formatNumber( value, units.decimals );
            }
        },

        /**
         * Generates a marker value for the given viewport pixel coords.
         *
         * @param axis {Axis} the axis object.
         * @param vx   {int}  x viewport pixel coordinate
         * @param vy   {int}  y viewport pixel coordinate
         */
        getMarker: function( axis, vx, vy ) {
            var xOrY = axis.isXAxis ? 'x' : 'y',
                pixel = ( axis.isXAxis ) ? vx : vy,
                value = MapUtil.getCoordFromViewportPixel( axis.map, vx, vy )[ xOrY ];
            return {
                value: value,
                label: getMarkerRollover(axis, value),
                pixel: pixel
            };
        },

        /**
         * Generates all visible marker values, returns array of objects, containing
         * labels and pixel locations
         *
         * @param axis {Axis} the axis object.
         */
        getMarkers: function( axis ) {
            var intervals = {},
                increment,
                minIncrement,
                maxIncrement;

            // time based axis partitions aren't 'even', they should correspond based
            // on the scale at which the data is currently being shown, therefore these
            // markers will be generated as their own edge case
            if ( axis.units.type === "time" ) {
                minIncrement = getMinIncrement( axis, {
                    pivot: axis.min,
                    subIncrement: 1000 * 60 * 60
                });
                maxIncrement = getMaxIncrement( axis, {
                    pivot: axis.min,
                    subIncrement: 1000 * 60 * 60
                });
                return fillArrayByTimeIncrement( axis, minIncrement, maxIncrement );
            }

            switch ( axis.intervals.type ) {

                case "value":
                case "fixed":
                case "#":
                    // use fixed interval
                    increment = axis.intervals.increment;
                    // set pivot by value
                    intervals.pivot = ( axis.intervals.pivot !== undefined ) ? axis.intervals.pivot : axis.min;
                    break;

                default:
                    // use percentage
                    increment = axis.intervals.increment;
                    increment = ( increment > 1 ) ? increment * 0.01 : increment;
                    increment = ( axis.max - axis.min ) * increment;
                    intervals.pivot = ( axis.intervals.pivot !== undefined ) ? axis.intervals.pivot : 0;
                    // normalize percentages to [0-1] not [0-100]
                    if ( intervals.pivot > 1 ) {
                        intervals.pivot = intervals.pivot / 100;
                    }
                    // calc pivot value by percentage
                    intervals.pivot = axis.min + ( intervals.pivot * ( axis.max - axis.min ) );
                    break;
            }

            // scale increment if specified
            if ( axis.intervals.scaleByZoom ) {
                // scale increment by zoom
                increment = increment / Math.pow(2, Math.max( axis.map.getZoom() - 1, 0) );
            }

            //intervals.increment = increment;
            intervals.subIncrement = getSubIncrement( axis, increment );

            // get minimum and maximum visible increments on the axis
            minIncrement = getMinIncrement( axis, intervals );
            maxIncrement = getMaxIncrement( axis, intervals );

            // add all points between minimum visible value and maximum visible value
            return fillArrayByIncrement( axis, minIncrement, maxIncrement, intervals );
        }
    };
}());

},{"../util/Util":60,"./MapUtil":45}],44:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var Axis = require('./Axis'),
        PendingLayer = require('../layer/PendingLayer'),
        MapUtil = require('./MapUtil'),
        Layer = require('../layer/Layer'),
        Carousel = require('../layer/Carousel'),
        BaseLayer = require('../layer/BaseLayer'),
        PubSub = require('../util/PubSub'),
        AreaOfInterestTilePyramid = require('../binning/AreaOfInterestTilePyramid'),
        WebMercatorTilePyramid = require('../binning/WebMercatorTilePyramid'),
        TileIterator = require('../binning/TileIterator'),
        TILESIZE = 256,
        MARKER_Z_INDEX = 5000,
        setMapCallbacks,
        activateComponent,
        deactivateComponent,
        activateDeferredComponents,
        addBaseLayer,
        addLayer,
        addCarousel,
        addAxis,
        removeBaseLayer,
        removeLayer,
        removeCarousel,
        removeAxis,
        resetLayerZIndices;

    /**
     * Set callbacks to update the maps tile focus, identifying which tile
     * the user is currently hovering over.
     * @private
     *
     * @param map {Map} The map object.
     */
    setMapCallbacks = function( map ) {
        var previousMouse = {};
        function updateTileFocus( x, y ) {
            var tileAndBin = MapUtil.getTileAndBinFromViewportPixel( map, x, y, 1, 1 ),
                tilekey = tileAndBin.tile.level + ","
                    + tileAndBin.tile.xIndex + ","
                    + tileAndBin.tile.yIndex;
            if ( tilekey !== map.tileFocus ) {
                // only update tilefocus if it actually changes
                map.previousTileFocus = map.tileFocus;
                map.tileFocus = tilekey;
                PubSub.publish( 'layer', { field: 'tileFocus', value: tilekey });
            }
        }
        // set tile focus callbacks
        map.on('mousemove', function( event ) {
            updateTileFocus( event.xy.x, event.xy.y );
            previousMouse.x = event.xy.x;
            previousMouse.y = event.xy.y;
        });
        map.on('zoomend', function() {
            updateTileFocus( previousMouse.x, previousMouse.y );
        });
        // if mousedown while map is panning, interrupt pan
        map.olMap.events.register( "mousedown", map, function(){
            if ( map.olMap.panTween ) {
                map.olMap.panTween.callbacks = null;
                map.olMap.panTween.stop();
            }
        }, true );
        // create resize callback
        map.resizeCallback = function() {
            map.olMap.updateSize();
        };
        // set resize callback
        $( window ).on( 'resize', map.resizeCallback );
    };

    /**
     * Activates a component.
     * @private
     *
     * @param map       {Map} The map object.
     * @param component {*}   The component to activate.
     */
    activateComponent = function( map, component ) {
        if ( component instanceof Carousel ) {
            addCarousel( map, component );
        } else if ( component instanceof Layer ) {
            if ( component.carousel ) {
                console.log(
                    "You cannot add a layer that is part of a carousel to a map " +
                    "independently, remove it from the carousel first." );
                return;
            }
            addLayer( map, component );
        } else if ( component instanceof Axis ) {
            addAxis( map, component );
        }
    };

    /**
     * Deactivates a component.
     * @private
     *
     * @param map       {Map} The map object.
     * @param component {*}   The component to deactivate.
     */
    deactivateComponent = function( map, component ) {
        if ( component instanceof BaseLayer ) {
            removeBaseLayer( map, component );
        } else if ( component instanceof Carousel ) {
            removeCarousel( map, component );
        } else if ( component instanceof Layer ) {
            removeLayer( map, component );
        } else if ( component instanceof Axis ) {
            removeAxis( map, component );
        }
    };

    /**
     * Activates deferred components when the map is ready.
     * @private
     *
     * @param map {Map} The map object.
     */
    activateDeferredComponents = function( map ) {
        var i;
        for ( i=0; i<map.deferreds.length; i++ ) {
            activateComponent( map, map.deferreds[i] );
        }
        delete map.deferreds;
    };

    /**
     * Adds a base layer to the map. If no baselayer is attached, it
     * will also activate it, along with any deferred components that were attached
     * first.
     * @private
     *
     * @param map       {Map}       The map object.
     * @param baselayer {BaseLayer} The baselayer object.
     */
    addBaseLayer = function( map, baselayer ) {
        // add map to baselayer
        baselayer.map = map;
        // add to baselayer array
        map.baselayers = map.baselayers || [];
        map.baselayers.push( baselayer );
        // if first baselayer, activate the map
        if ( map.baseLayerIndex < 0 ) {
            // openlayers maps require a baselayer to operate, once
            // this baselayer is set, activate the map
            map.setBaseLayerIndex( 0 );
            // set initial viewpoint, required by openlayers
            map.olMap.zoomToMaxExtent();
            // set mouse callbacks
            setMapCallbacks( map );
            // create pending layer now
            if ( map.showPendingTiles ) {
                map.pendingLayer = new PendingLayer();
                map.pendingLayer.map = map;
                map.pendingLayer.activate();
            }
            if ( map.deferreds ) {
                activateDeferredComponents( map );
            }
        }
    };

    /**
     * Adds a layer object to the map and activates it.
     * @private
     *
     * @param map   {Map}   The map object.
     * @param layer {Layer} The layer object.
     */
    addLayer = function( map, layer ) {
        // add map to layer
        layer.map = map;
        // track layer
        if ( map.showPendingTiles && layer.showPendingTiles ) {
            map.pendingLayer.register( layer );
        }
        // activate the layer
        layer.activate();
        // add to layer array
        map.layers = map.layers || [];
        map.layers.push( layer );
        // add it to layer map
        map.layersById = map.layersById || {};
        map.layersById[ layer.getUUID() ] = layer;
    };

    /**
     * Adds a carousel object to the map and activates it.
     * @private
     *
     * @param map   {Map}   The map object.
     * @param carousel {Carousel} The carousel object.
     */
    addCarousel = function( map, carousel ) {
        // add map to carousel
        carousel.map = map;
        // activate the carousel
        carousel.activate();
        // add to carousel array
        map.carousels = map.carousels || [];
        map.carousels.push( carousel );
        // add it to carousel map
        map.carouselsById = map.carouselsById || {};
        map.carouselsById[ carousel.getUUID() ] = carousel;
    };

    /**
     * Adds an Axis object to the map and activates it.
     * @private
     *
     * @param map  {Map}  The map object.
     * @param axis {Axis} The layer object.
     */
    addAxis = function( map, axis ) {
        // set min/max based on pyramid
        if ( axis.position === 'top' || axis.position === 'bottom' ) {
            axis.min = map.pyramid.minX;
            axis.max = map.pyramid.maxX;
        } else {
            axis.min = map.pyramid.minY;
            axis.max = map.pyramid.maxY;
        }
        // activate and attach to map
        axis.map = map;
        axis.activate();
        map.axes = map.axes || {};
        map.axes[ axis.position ] = axis;
        // update dimensions
        _.forIn( map.axes, function( value ) {
            value.updateDimension();
        });
        // redraw
        _.forIn( map.axes, function( value ) {
            value.redraw();
        });
    };

    /**
     * Removes a base layer from the map. If no other baselayer is attached, it
     * will refuse to do so.
     * @private
     *
     * @param map       {Map}       The map object.
     * @param baselayer {BaseLayer} The baselayer object.
     */
    removeBaseLayer = function( map, baselayer ) {
        var index;
        // if only 1 baselayer available, ignore
        if ( !map.destroying && map.baselayers.length === 1 ) {
            console.error( 'Error: attempting to remove only baselayer from ' +
                'map, this destroys the map, use destroy() instead' );
            return;
        }
        // get index of baselayer
        index = map.baselayers.indexOf( baselayer );
         // remove baselayer from array
        map.baselayers.splice( index, 1 );
        // if we are removing an active base layer, change to
        // next index
        if ( index === map.baseLayerIndex ) {
            // get replacement index
            index = ( map.baselayers[ index ] ) ? index : index-1;
            // replace baselayer
            map.setBaseLayerIndex( index );
        } else {
            if ( index < map.baseLayerIndex ) {
                map.baseLayerIndex--;
            }
        }
        baselayer.map = null;
    };

    /**
     * Removes a layer object from the map and deactivates it.
     * @private
     *
     * @param map   {Map}   The map object.
     * @param layer {Layer} The layer object.
     */
    removeLayer = function( map, layer ) {
        var index = map.layers.indexOf( layer );
        if ( index !== -1 ) {
             // remove it from layer map
            delete map.layersById[ layer.getUUID() ];
            // remove it from layer array
            map.layers.splice( index, 1 );
            // track layer
            if ( map.showPendingTiles ) {
                map.pendingLayer.unregister( layer );
            }
            // deactivate it
            layer.deactivate();
            layer.map = null;
            // reset z-indices
            resetLayerZIndices( map );
        }
    };

    /**
     * Removes a carousel object from the map and deactivates it.
     * @private
     *
     * @param map   {Map}   The map object.
     * @param carousel {Carousel} The carousel object.
     */
    removeCarousel = function( map, carousel ) {
        var index = map.carousels.indexOf( carousel );
        if ( index !== -1 ) {
             // remove it from layer map
            delete map.carouselsById[ carousel.getUUID() ];
            // remove it from layer array
            map.carousels.splice( index, 1 );
            // deactivate it
            carousel.deactivate();
            carousel.map = null;
            // reset z-indices
            resetLayerZIndices( map );
        }
    };

    /**
     * Removes an Axis object from the map and deactivates it.
     * @private
     *
     * @param map  {Map}   The map object.
     * @param axis {Axis} The layer object.
     */
    removeAxis = function( map, axis ) {
        // remove it from axes map
        delete map.axes[ axis.position ];
        // deactivate it
        axis.deactivate();
        axis.map = null;
    };

    /**
     * Removing layers causes a z-index reset since we use css z-index rather
     * than OpenLayers's built in relative indexing (which sucks for dynamic maps).
     * This is used to reset all z-indices accordingly.
     * @private
     *
     * @param {Map} map - The map object.
     */
    resetLayerZIndices = function( map ) {
        var layers = map.layers,
            baselayer,
            i;
        if ( map.layers ) {
            for ( i=0; i<layers.length; i++ ) {
                layers[i].setZIndex( layers[i].getZIndex() );
            }
        }
        if ( map.baseLayerIndex >= 0 ) {
            baselayer = map.baselayers[ map.baseLayerIndex ];
            baselayer.resetZIndex();
        }
        if ( map.olMarkers ) {
            $( map.olMarkers.div ).css( 'z-index', MARKER_Z_INDEX );
        }
    };

    /**
     * Instantiate a Map object.
     * @class Map
     * @classdesc A map object that acts as a central container for all layers and other map
     *            components.
     *
     * @param {String} id - The DOM element id string.
     * @param {Object} spec - The specification object.
     * <pre>
     * {
     *     pyramid {String} - The pyramid type for the map. Defaults to 'WebMercator'
     *     options: {
     *         numZoomLevels {integer} - The number of zoom levels. Default = 18.
     *         units {integer} - The units used for the map. Default = 'm'.
     *         zoomDelay {integer} - The delay before requesting tiles on a zoom. Default = 400.
     *         moveDelay {integer} - The delay before requesting tiles on a pan. Default = 400.
     *     }
     * }
     * </pre>
     */
    function Map( id, spec ) {
        spec = spec || {};
        spec.options = spec.options || {};
        spec.theme = spec.theme || 'dark';
        // element id
        this.id = id;
        // set map tile pyramid
        this.setPyramid( spec.pyramid );
        // initialize base layer index to -1 for no baselayer
        this.baseLayerIndex = -1;
        // disable kinetic pan
        OpenLayers.Control.DragPan.prototype.enableKinetic = false;
		// navigation controls
		this.navigationControls = new OpenLayers.Control.Navigation({
			documentDrag: true,
			zoomBoxEnabled: false
		});
		// zoom controls
		this.zoomControls = new OpenLayers.Control.Zoom();
        // create map object
        this.olMap = new OpenLayers.Map( this.id, {
            theme: null, // prevent OpenLayers from checking for default css
            projection: new OpenLayers.Projection( "EPSG:900913" ),
            displayProjection: new OpenLayers.Projection( "EPSG:4326" ),
            maxExtent: OpenLayers.Bounds.fromArray([
                -20037508.342789244,
                -20037508.342789244,
                20037508.342789244,
                20037508.342789244
            ]),
            zoomMethod: null,
            units: spec.options.units || "m",
            numZoomLevels: spec.options.numZoomLevels || 18,
            fallThrough: true,
            controls: [
                this.navigationControls,
                this.zoomControls
            ],
            tileManager: OpenLayers.TileManager ? new OpenLayers.TileManager({
                moveDelay: spec.options.moveDelay !== undefined ? spec.options.moveDelay : 400,
                zoomDelay: spec.options.zoomDelay !== undefined ? spec.options.zoomDelay : 400
            }) : undefined
        });
        // show animation on pending tiles
        this.showPendingTiles = ( spec.showPendingTiles !== undefined ) ? spec.showPendingTiles : true;
        // set theme, default to 'dark' theme
        this.setTheme( spec.theme );
    }

    Map.prototype = {

        /**
         * Removes all components and destroys the map.
         * @memberof Map.prototype
         */
        destroy: function() {
            this.destroying = true;
            // remove pending layer
            if ( this.pendingLayer ) {
                this.pendingLayer.deactivate();
                this.pendingLayer.map = null;
                this.pendingLayer = null;
            }
            // remove marker layer
            if ( this.olMarkers ) {
                this.olMap.removeLayer( this.olMarkers );
                this.olMarkers = null;
            }
            this.layers.forEach( function( layer ) {
                this.remove( layer );
            }, this );
            _.forIn( this.axes, function( axis ) {
                this.remove( axis );
            }, this );
            this.baselayers.forEach( function( baselayer ) {
                this.remove( baselayer );
            }, this );
            // remove window resize callback
            $( window ).off( 'resize', this.resizeCallback );
            // destroy map
            this.olMap.destroy();
        },

        /**
         * Adds a component to the map.
         * @memberof Map.prototype
         *
         * @param {Layer|Axis} component - The component object.
         */
        add: function( component ) {
            if ( component instanceof BaseLayer ) {
                // if a baselayer, add it
                addBaseLayer( this, component );
                return;
            }
            if ( this.baseLayerIndex < 0 ) {
                // if no baselayer is attached yet, we cannot activate the component
                // add it to list of deferred activations
                this.deferreds = this.deferreds || [];
                this.deferreds.push( component );
                return;
            }
            // activate the component
            activateComponent( this, component );
        },

        /**
         * Removes a component from the map.
         * @memberof Map.prototype
         *
         * @param {Layer|Axis} component - The component object.
         */
        remove: function( component ) {
            if ( this.baseLayerIndex < 0 ) {
                // if no baselayer is attached yet, we cannot deactivate the component
                // remove it from the list of deferred activations
                this.deferreds = this.deferreds || [];
                this.deferreds.splice( this.deferreds.indexOf( component ), 1 );
                return;
            }
            // activate the component
            deactivateComponent( this, component );
        },

        /**
         * Enables the panning controls for the map.
         */
        enableNavigation: function() {
            this.navigationControls.activate();
        },

        /**
         * Disables the panning controls for the map.
         */
        disableNavigation: function() {
            this.navigationControls.deactivate();
        },

        /**
         * Returns the tilekey for the tile currently under the mouse.
         * @memberof Map.prototype
         *
         * @returns {String} The tilekey currently under the mouse.
         */
        getTileFocus: function() {
            return this.tileFocus;
        },

        /**
         * If multiple baselayers are attached to the map, this function is
         * used to change the currently active one by index.
         * @memberof Map.prototype
         *
         * @param {integer} index - The index of the baselayer to switch to.
         */
        setBaseLayerIndex: function( index ) {
            var oldBaseLayer = this.baselayers[ this.baseLayerIndex ],
                newBaseLayer = this.baselayers[ index ];
            if ( !newBaseLayer ) {
                console.error("Error, no baselayer for supplied index: " + index );
                return;
            }
            if ( oldBaseLayer === newBaseLayer ) {
                // same layer, don't switch
                return;
            }
            if ( oldBaseLayer ) {
                oldBaseLayer.deactivate();
            }
            newBaseLayer.activate();
            this.baseLayerIndex = index;
            // update z index, since changing baselayer resets them
            resetLayerZIndices( this );
            PubSub.publish( newBaseLayer.getChannel(), { field: 'baseLayerIndex', value: index });
        },

        /**
         * Returns the currently active baselayer index.
         * @memberof Map.prototype
         *
         * @returns {integer} The currently active baselayer index.
         */
        getBaseLayerIndex: function() {
            return this.baseLayerIndex;
        },

        /**
         * Returns the currently active baselayer, or null if there isn't one.
         * @memberof Map.prototype
         *
         * @returns {BaseLayer} The currently active baselayer.
         */
        getActiveBaseLayer: function() {
            if ( this.baseLayerIndex === -1 ) {
                return null;
            }
            return this.baselayers[ this.baseLayerIndex ];
        },

        /**
         * Set the theme of the map. Currently restricted to "dark" and "light".
         * @memberof Map.prototype
         *
         * @param {String} theme - The theme identification string of the map.
         */
        setTheme: function( theme ) {
            if ( this.theme === theme ) {
                return;
            }
            var i;
            // toggle theme in html
            if ( theme === 'light' ) {
                $( 'body' ).removeClass( "dark-theme" ).addClass( "light-theme" );
            } else {
                $( 'body' ).removeClass( "light-theme" ).addClass( "dark-theme" );
            }
            this.theme = theme;
            // update theme for all attached layers
            if ( this.layers ) {
                for ( i=0; i<this.layers.length; i++ ) {
                    if ( this.layers[i].setTheme ) {
                        this.layers[i].setTheme( theme );
                    }
                }
            }
        },

        /**
         * Returns the current theme of the map. Currently restricted to "dark"
         * and "light".
         * @memberof Map.prototype
         *
         * @returns {String} The theme of the map.
         */
        getTheme: function() {
            return this.theme;
        },

        /**
         * Returns the map DOM element. This is the element to which
         * the map object is 'attached'.
         * @memberof Map.prototype
         *
         * @returns {HTMLElement} The map div element.
         */
        getElement:  function() {
            return this.olMap.div;
        },

        /**
         * Returns the map viewport DOM element. This the element that encompasses
         * the viewable portion of the map.
         * @memberof Map.prototype
         *
         * @returns {HTMLElement} The map viewport div element.
         */
        getViewportElement:  function() {
            return this.olMap.viewPortDiv;
        },

        /**
         * Returns the map container DOM element. This is the element to which all
         * 'pannable' layers are attached to.
         * @memberof Map.prototype
         *
         * @returns {HTMLElement} The map container div element.
         */
        getContainerElement:  function() {
            return this.olMap.layerContainerDiv;
        },

        /**
         * Add a pyramid to the map. All Tile iterators returned prior to this
         * will be invalidated.
         * @memberof Map.prototype
         *
         * @param {AreaOfInterestTilePyramid|WebMercatorTilePyramid|Object} pyramid - The pyramid.
         */
        setPyramid: function( pyramid ) {
            if ( !pyramid ) {
                this.pyramid = new WebMercatorTilePyramid();
            } else if ( pyramid instanceof AreaOfInterestTilePyramid ||
                pyramid instanceof WebMercatorTilePyramid ) {
                this.pyramid = pyramid;
            } else if ( pyramid.type && pyramid.type.toLowerCase() === "areaofinterest" ) {
                this.pyramid = new AreaOfInterestTilePyramid( pyramid );
            } else {
                this.pyramid = new WebMercatorTilePyramid();
            }
        },

        /**
         * Returns the tile pyramid used by the map.
         * @memberof Map.prototype
         *
         * @returns {AreaOfInterestTilePyramid|WebMercatorTilePyramid} The TilePyramid object.
         */
        getPyramid: function() {
            return this.pyramid;
        },

        /**
         * Returns a TileIterator object. This TileIterator contains all tiles currently
         * visible in the map.
         * @memberof Map.prototype
         *
         * @returns {TileIterator} A TileIterator object containing all visible tiles.
         */
        getTileIterator: function() {
            var level = this.olMap.getZoom(),
                // Current map bounds, in meters
                bounds = this.olMap.getExtent(),
                // Total map bounds, in meters
                extents = this.olMap.getMaxExtent(),
                // Pyramid for the total map bounds
                pyramid = new AreaOfInterestTilePyramid({
                    minX: extents.left,
                    minY: extents.bottom,
                    maxX: extents.right,
                    maxY: extents.top
                });
            // determine all tiles in view
            return new TileIterator({
                pyramid: pyramid,
                level: level,
                minX: bounds.left,
                minY: bounds.bottom,
                maxX: bounds.right,
                maxY: bounds.top
            });
        },

        /**
         * Returns an array of all tilekeys currently visible in the map.
         * @memberof Map.prototype
         *
         * @returns {Array} An array of tilekey strings.
         */
        getTilesInView: function() {
            var tiles = this.getTileIterator().getRest(),
                culledTiles = [],
                maxTileIndex = Math.pow(2, this.getZoom() ),
                tile,
                i;
            for (i=0; i<tiles.length; i++) {
                tile = tiles[i];
                if ( tile.xIndex >= 0 && tile.yIndex >= 0 &&
                     tile.xIndex < maxTileIndex && tile.yIndex < maxTileIndex ) {
                     culledTiles.push( tile.level + "," + tile.xIndex + "," + tile.yIndex );
                }
            }
            return culledTiles;
        },

        /**
         * Zooms the map to a particular coordinate and zoom level. The
         * transition is instantaneous.
         * @memberof Map.prototype
         *
         * @param {number} x - The x coordinate (longitude for geospatial).
         * @param {number} y - The y coordinate (latitude for geospatial).
         * @param {integer} zoom - The zoom level.
         */
        zoomTo: function( x, y, zoom ) {
            var viewportPx = MapUtil.getViewportPixelFromCoord( this, x, y ),
                lonlat = this.olMap.getLonLatFromViewPortPx( viewportPx );
            this.olMap.setCenter( lonlat, zoom );
        },

        /**
         * Zooms the map to a particular bounding box. The transition is
         * instantaneous.
         * @memberof Map.prototype
         *
         * @param {Object} bounds - The bounding box to zoom to.
         */
        zoomToExtent: function( bounds ) {
            var minViewportPx = MapUtil.getViewportPixelFromCoord( this, bounds.minX, bounds.minY ),
                maxViewportPx = MapUtil.getViewportPixelFromCoord( this, bounds.maxX, bounds.maxY ),
                minLonLat = this.olMap.getLonLatFromViewPortPx( minViewportPx ),
                maxLonLat = this.olMap.getLonLatFromViewPortPx( maxViewportPx ),
                olBounds = new OpenLayers.Bounds();
            olBounds.extend( minLonLat );
            olBounds.extend( maxLonLat );
            this.olMap.zoomToExtent( olBounds );
        },

        /**
         * Restricts the map extents to a particular bounding box. If no arg is
         * provided, this removes previous restrictions.
         * @memberof Map.prototype
         *
         * @param {Object} bounds - The bounding box to zoom to.
         */
        restrictExtent: function( bounds ) {
            if ( !bounds ) {
                this.olMap.restrictedExtent = null;
                this.olMap.zoomToMaxExtent();
                return;
            }
            var minViewportPx = MapUtil.getViewportPixelFromCoord( this, bounds.minX, bounds.minY ),
                maxViewportPx = MapUtil.getViewportPixelFromCoord( this, bounds.maxX, bounds.maxY ),
                minLonLat = this.olMap.getLonLatFromViewPortPx( minViewportPx ),
                maxLonLat = this.olMap.getLonLatFromViewPortPx( maxViewportPx ),
                olBounds = new OpenLayers.Bounds();
            olBounds.extend( minLonLat );
            olBounds.extend( maxLonLat );
            this.olMap.restrictedExtent = olBounds;
            this.olMap.zoomToExtent( olBounds );
        },

        /**
         * Pans the map to a particular coordinate. The transition is
         * animated if the region is currently in view, instantaneous if
         * not.
         * @memberof Map.prototype
         *
         * @param {number} x - The x coordinate (longitude for geospatial).
         * @param {number} y - The y coordinate (latitude for geospatial).
         */
        panTo: function( x, y ) {
            var viewportPx = MapUtil.getViewportPixelFromCoord( this, x, y ),
                lonlat = this.olMap.getLonLatFromViewPortPx( viewportPx );
            this.olMap.panTo( lonlat );
        },


        /**
         * Creates a marker at the specified position of the map.
         * @memberof Map.prototype
         *
         * @param {number} x - The x coordinate (longitude for geospatial).
         * @param {number} y - The y coordinate (latitude for geospatial).
         * @param {Marker} marker - The Marker object to add.
         *
         * @returns {Marker} The added marker.
         */
        addMarker: function( x, y, marker ) {
            if ( !this.olMarkers ) {
                this.olMarkers = new OpenLayers.Layer.Markers( "Markers" );
                this.olMap.addLayer( this.olMarkers );
            }
            // always update the z-index of this div
            $( this.olMarkers.div ).css( 'z-index', 5000 );
            marker.map = this;
            marker.activate( x, y );
            return marker;
        },

        /**
         * Removes a marker from the map.
         *
         * @param {OpenLayers.Marker} marker - The marker object.
         */
        removeMarker: function( marker ) {
            if ( this.olMarkers ) {
                marker.deactivate();
                marker.map = null;
            }
        },

        /**
         * Removes all markers from the map.
         */
        clearMarkers: function() {
            if ( this.olMarkers ) {
                this.olMarkers.clearMarkers();
            }
        },

        /**
         * Returns the width of the entire map in pixels.
         * @memberof Map.prototype
         *
         * @returns {integer} The width of the map in pixels.
         */
        getWidth: function() {
            return TILESIZE * Math.pow( 2, this.getZoom() );
        },

        /**
         * Returns the height of the entire map in pixels.
         * @memberof Map.prototype
         *
         * @returns {integer} The height of the map in pixels.
         */
        getHeight: function() {
            return TILESIZE * Math.pow( 2, this.getZoom() );
        },

        /**
         * Returns the width of the viewport in pixels.
         * @memberof Map.prototype
         *
         * @returns {integer} The width of the viewport in pixels.
         */
        getViewportWidth: function() {
            return this.olMap.viewPortDiv.clientWidth;
        },

        /**
         * Returns the height of the viewport in pixels.
         * @memberof Map.prototype
         *
         * @returns {integer} The height of the viewport in pixels.
         */
        getViewportHeight: function() {
            return this.olMap.viewPortDiv.clientHeight;
        },

        /**
         * Returns the maps current zoom level. Level 0 is contains the most
         * of aggregation.
         * @memberof Map.prototype
         *
         * @returns {integer} The zoom level.
         */
        getZoom: function () {
            return this.olMap.getZoom();
        },

        /**
         * Returns the x and y coordinates at the centre of the map.
         *
         * @return {OpenLayers.LonLat}
         */
        getCenterProjected: function() {
            return MapUtil.getCoordFromViewportPixel(
                this,
                this.getViewportWidth() / 2,
                this.getViewportHeight() / 2 );
        },

        /**
         * Get the top-left and bottom-right extents of the visible map.
         *
         * @return {Object}
         */
        getMapExtents: function() {
            return {
                topLeft: MapUtil.getCoordFromViewportPixel(
                    this,
                    0,
                    0 ),
                bottomRight: MapUtil.getCoordFromViewportPixel(
                    this,
                    this.getViewportWidth(),
                    this.getViewportHeight() )
            };
        },

        /**
         * Set a map event callback. Supports all of the following OpenLayers.Map events:
         * <pre>
         *     movestart - triggered after the start of a drag, pan, or zoom.  The event object may include a zoomChanged property that tells whether the zoom has changed.
         *     move - triggered after each drag, pan, or zoom
         *     moveend - triggered after a drag, pan, or zoom completes
         *     zoomstart - triggered when a zoom starts.  Listeners receive an object with center and zoom properties, for the target center and zoom level.
         *     zoomend - triggered after a zoom completes
         *     mouseover - triggered after mouseover the map
         *     mouseout - triggered after mouseout the map
         *     mousemove - triggered after mousemove the map
         * </pre>
         * @memberof Map.prototype
         *
         * @param {String} eventType - The event type.
         * @param {Function} callback - The callback.
         */
        on: function( eventType, callback ) {
            this.olMap.events.register( eventType, this.olMap, callback );
        },

        /**
         * Remove a map event callback. Supports all of the following OpenLayers.Map events:
         * <pre>
         *     movestart - triggered after the start of a drag, pan, or zoom.  The event object may include a zoomChanged property that tells whether the zoom has changed.
         *     move - triggered after each drag, pan, or zoom
         *     moveend - triggered after a drag, pan, or zoom completes
         *     zoomstart - triggered when a zoom starts.  Listeners receive an object with center and zoom properties, for the target center and zoom level.
         *     zoomend - triggered after a zoom completes
         *     mouseover - triggered after mouseover the map
         *     mouseout - triggered after mouseout the map
         *     mousemove - triggered after mousemove the map
         * </pre>
         * @memberof Map.prototype
         *
         * @param {String} eventType - The event type.
         * @param {Function} callback - The callback.
         */
        off: function( eventType, callback ) {
            this.olMap.events.unregister( eventType, this.olMap, callback );
        },

        /**
         * Trigger a map event. Supports all of the following OpenLayers.Map events:
         * <pre>
         *     movestart - triggered after the start of a drag, pan, or zoom.  The event object may include a zoomChanged property that tells whether the zoom has changed.
         *     move - triggered after each drag, pan, or zoom
         *     moveend - triggered after a drag, pan, or zoom completes
         *     zoomstart - triggered when a zoom starts.  Listeners receive an object with center and zoom properties, for the target center and zoom level.
         *     zoomend - triggered after a zoom completes
         *     mouseover - triggered after mouseover the map
         *     mouseout - triggered after mouseout the map
         *     mousemove - triggered after mousemove the map
         * </pre>
         * @memberof Map.prototype
         *
         * @param {String} eventType - The event type.
         * @param {Object} event - The event object to be passed to the event.
         */
        trigger: function( eventType, event ) {
            this.olMap.events.triggerEvent( eventType, event );
        }
    };

    module.exports = Map;
}());

},{"../binning/AreaOfInterestTilePyramid":2,"../binning/TileIterator":3,"../binning/WebMercatorTilePyramid":4,"../layer/BaseLayer":7,"../layer/Carousel":8,"../layer/Layer":15,"../layer/PendingLayer":18,"../util/PubSub":59,"./Axis":42,"./MapUtil":45}],45:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * A utility namespace containing map coordinate conversion functionality.
 */
( function() {

	"use strict";

	var Util = require('../util/Util'),
        getMapMinAndMaxInViewportPixels,
        TILESIZE = 256;

    /**
     * Private: Returns the maps min and max pixels in viewport pixels.
     *
     * @param map {Map} The map object.
     * NOTE:    viewport [0,0] is TOP-LEFT
     *          map [0,0] is BOTTOM-LEFT
     */
    getMapMinAndMaxInViewportPixels = function( map ) {
        var olMap = map.olMap;
		return {
			min: olMap.getViewPortPxFromLonLat(
					new OpenLayers.LonLat(
						olMap.maxExtent.left,
						olMap.maxExtent.bottom ) ),
			max: olMap.getViewPortPxFromLonLat(
					new OpenLayers.LonLat(
						olMap.maxExtent.right,
						olMap.maxExtent.top ) )
		};
    };

    module.exports = {

        /**
		 * Transforms a point from data coordinates to viewport pixel coordinates
         *
         * @param map {Map}    The map object.
         * @param x   {number} The x coordinate of the data.
         * @param y   {number} The y coordinate of the data.
		 * NOTE:    viewport [0,0] is TOP-LEFT
		 *          data [0,0] is BOTTOM-LEFT
		 */
		getViewportPixelFromCoord: function( map, x, y ) {
			var mapPixel = this.getMapPixelFromCoord( map, x, y );
			return this.getViewportPixelFromMapPixel( map, mapPixel.x, mapPixel.y );
		},

		/**
		 * Transforms a point from map pixel coordinates to viewport pixel coordinates
         *
         * @param map {Map}    The map object.
         * @param mx  {number} The x pixel coordinate of the map.
         * @param my  {number} The y pixel coordinate of the map.
		 * NOTE:    viewport [0,0] is TOP-LEFT
		 *          map [0,0] is BOTTOM-LEFT
		 */
		getViewportPixelFromMapPixel: function( map, mx, my ) {
			var viewportMinMax = getMapMinAndMaxInViewportPixels( map );
			return {
				x: mx + viewportMinMax.min.x,
				y: map.getWidth() - my + viewportMinMax.max.y
			};
		},

		/**
		 * Transforms a point from data coordinates to map pixel coordinates
         *
         * @param map {Map} The map object.
         * @param x   {int} The x coordinate of the data.
         * @param y   {int} The y coordinate of the data.
		 * NOTE:    data and map [0,0] are both BOTTOM-LEFT
		 */
		getMapPixelFromCoord: function( map, x, y ) {
			var tile = map.pyramid.rootToFractionalTile( x, y, map.getZoom(), TILESIZE ),
			    bin = map.pyramid.rootToFractionalBin( x, y, tile);
			return {
				x: tile.xIndex * TILESIZE + bin.x,
				y: tile.yIndex * TILESIZE + TILESIZE - 1 - bin.y
			};
		},

		/**
		 * Transforms a point from viewport pixel coordinates to map pixel coordinates
         *
         * @param map {Map} The map object.
         * @param vx  {int} The x pixel coordinate of the viewport.
         * @param vy  {int} The y pixel coordinate of the viewport.
		 * NOTE:    viewport [0,0] is TOP-LEFT
		 *          map [0,0] is BOTTOM-LEFT
		 */
		getMapPixelFromViewportPixel: function( map, vx, vy ) {
            var viewportMinMax = getMapMinAndMaxInViewportPixels( map ),
			    totalPixelSpan = map.getWidth();
            return {
				x: totalPixelSpan + vx - viewportMinMax.max.x,
				y: totalPixelSpan - vy + viewportMinMax.max.y
			};
		},

		/**
		 * Transforms a point from map pixel coordinates to data coordinates
         *
         * @param map {Map}    The map object.
         * @param mx  {number} The x pixel coordinate of the map.
         * @param my  {number} The y pixel coordinate of the map.
		 * NOTE:    data and map [0,0] are both BOTTOM-LEFT
		 */
		getCoordFromMapPixel: function( map, mx, my ) {
            var tileAndBin = this.getTileAndBinFromMapPixel( map, mx, my, TILESIZE, TILESIZE ),
			    bounds = map.pyramid.getBinBounds( tileAndBin.tile, tileAndBin.bin );
			return {
				x: bounds.minX,
				y: bounds.minY
			};
		},

		/**
		 * Transforms a point from viewport pixel coordinates to data coordinates
         *
         * @param map {Map} The map object.
         * @param vx  {int} The x pixel coordinate of the viewport.
         * @param vy  {int} The y pixel coordinate of the viewport.
		 * NOTE:    viewport [0,0] is TOP-LEFT
		 *          data [0,0] is BOTTOM-LEFT
		 */
		getCoordFromViewportPixel: function( map, vx, vy ) {
			var mapPixel = this.getMapPixelFromViewportPixel( map, vx, vy );
			return this.getCoordFromMapPixel( map, mapPixel.x, mapPixel.y );
		},

		/**
		 * Returns the tile and bin index corresponding to the given viewport pixel coordinate
         *
         * @param map {Map} The map object.
         * @param vx  {int} The x pixel coordinate of the viewport.
         * @param vy  {int} The y pixel coordinate of the viewport.
         * @param xBinCount {int} The number of bins in the x dimension of the tile.
         * @param yBinCount {int} The number of bins in the y dimension of the tile.
		 */
		getTileAndBinFromViewportPixel: function( map, vx, vy, xBinCount, yBinCount ) {
			var mapPixel = this.getMapPixelFromViewportPixel( map, vx, vy );
			return this.getTileAndBinFromMapPixel( map, mapPixel.x, mapPixel.y, xBinCount, yBinCount );
		},

		/**
         * Returns the tile and bin index corresponding to the given map pixel coordinate
         *
         * @param map {Map}    The map object.
         * @param mx  {number} The x pixel coordinate of the map.
         * @param my  {number} The y pixel coordinate of the map.
         * @param xBinCount {int} The number of bins in the x dimension of the tile.
         * @param yBinCount {int} The number of bins in the y dimension of the tile.
         */
        getTileAndBinFromMapPixel: function( map, mx, my, xBinCount, yBinCount ) {
            var tileIndexX = Math.floor( mx / TILESIZE ),
                tileIndexY = Math.floor( my / TILESIZE ),
                tilePixelX = Util.mod( mx , TILESIZE ),
                tilePixelY = Util.mod( my, TILESIZE );
            return {
                tile: {
                    level : map.getZoom(),
                    xIndex : tileIndexX,
                    yIndex : tileIndexY,
                    xBinCount : xBinCount,
                    yBinCount : yBinCount
                },
                bin: {
                    x : Math.floor( tilePixelX / (TILESIZE / xBinCount ) ),
                    y : (yBinCount - 1) - Math.floor( tilePixelY / (TILESIZE / yBinCount) ) // bin [0,0] is top left
                }
            };
        },

        /**
		 * Returns the tile and bin index corresponding to the given data coordinate
         *
         * @param map {Map} The map object.
         * @param x   {int} The x coordinate of the data.
         * @param y   {int} The y coordinate of the data.
         * @param xBinCount {int} The number of bins in the x dimension of the tile.
         * @param yBinCount {int} The number of bins in the y dimension of the tile.
		 */
		getTileAndBinFromCoord: function( map, x, y, xBinCount, yBinCount ) {
			var mapPixel = this.getMapPixelFromCoord( map, x, y );
			return this.getTileAndBinFromMapPixel( map, mapPixel.x, mapPixel.y, xBinCount, yBinCount );
		},

        /**
         * Returns the top left pixel location in viewport coordinates from a tilekey..
         *
         * @param map     {Map}    The map object.
         * @param tilekey {string} The tilekey.
         */
        getTopLeftViewportPixelForTile: function( map, tilekey ) {
            var mapPixel = this.getTopLeftMapPixelForTile( map, tilekey );
            return this.getViewportPixelFromMapPixel( map, mapPixel.x, mapPixel.y );
        },

        /**
         * Returns the top left pixel location in viewport coord from a tile index.
         *
         * @param map     {Map}    The map object.
         * @param tilekey {string} The tilekey.
         */
        getTopLeftMapPixelForTile: function( map, tilekey ) {
            var parsedValues = tilekey.split( ',' ),
                x = parseInt( parsedValues[1], 10 ),
                y = parseInt( parsedValues[2], 10 ),
                mx = x * TILESIZE,
                my = y * TILESIZE + TILESIZE;
            return {
                x : mx,
                y : my
            };
        },

        /**
         * Returns the data coordinate value corresponding to the top left pixel of the tile
         *
         * @param map     {Map}    The map object.
         * @param tilekey {string} The tilekey.
         */
        getTopLeftCoordForTile: function( map, tilekey ) {
            var mapPixel = this.getTopLeftMapPixelForTile( map, tilekey );
            return this.getCoordFromMapPixel( map, mapPixel.x, mapPixel.y );
        }

	};
}());

},{"../util/Util":60}],46:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function() {

    "use strict";

    var MapUtil = require('./MapUtil');

    /**
     * Instantiate a Marker object.
     * @class Marker
     * @classdesc A marker object that is pinned to the map.
     */
    function Marker( imgUrl, imgWidth, imgHeight ) {
        this.width = imgWidth || 50;
        this.height = imgHeight || 50;
        this.icon = new OpenLayers.Icon(
            imgUrl,
            new OpenLayers.Size( this.width, this.height ),
            new OpenLayers.Pixel( -this.width/2, -this.height ) );
    }

    Marker.prototype = {

        /**
         * Activates the marker object. This should never be called manually.
         * @memberof Marker
         * @private
         */
        activate: function( x, y ) {
            this.x = x;
            this.y = y;
            var viewportPx = MapUtil.getViewportPixelFromCoord( this.map, x, y ),
                lonlat = this.map.olMap.getLonLatFromViewPortPx( viewportPx );
            this.olMarker = new OpenLayers.Marker( lonlat, this.icon.clone() );
            this.map.olMarkers.addMarker( this.olMarker );
        },

        /**
         * De-activates the marker object. This should never be called manually.
         * @memberof Marker
         * @private
         */
        deactivate: function() {
            if ( this.olMarker && this.map.olMarkers ) {
                this.map.olMarkers.removeMarker( this.olMarker );
                this.olMarker.destroy();
                this.olMarker = null;
                this.x = null;
                this.y = null;
            }
        },

        /**
         * Returns the markers div element.
         * @memberof Map.prototype
         *
         * @returns {HTMLElement} The marker div.
         */
        getElement: function() {
            if ( this.olMarker ) {
                return this.olMarker.icon.imageDiv;
            }
            return null;
        }

    };

    module.exports = Marker;
}());

},{"./MapUtil":45}],47:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @namespace AnnotationService
 * @classdesc A utility namespace that provides annotation service REST functionality.
 */
( function() {

    "use strict";

    var Util = require('../util/Util');

    module.exports = {

        /**
         * Get a tiles worth of annotations from the server. Upon success, will execute success
         * callback function passing the resulting object as first argument.
         * @memberof AnnotationService
         *
         * @param {String} layerId - The annotation layer identification string.
         * @param {integer} level - The zoom level.
         * @param {integer} x - The tile x index.
         * @param {integer} y - The tile y index.
         * @param {Object} params - The query parameter configuration overrides (optional).
         * @param {Function} success - The callback function executed after success received (optional).
         */
        getTileJSON: function( layerId, level, x, y, params, success ) {
            var _params = ( typeof params === "object" ) ? params : null,
                _success = ( typeof success === "function" )
                    ? success
                    : ( typeof params === "function" )
                        ? params
                        : null;
            $.get(
                'rest/v1.0/annotation/'
                + layerId + "/"
                + level + "/"
                + x + "/"
                + y + ".json" + Util.encodeQueryParams( _params )
            ).then(
                _success,
                Util.handleHTTPError
            );
        },

        /**
         * Write an annotation to the server. Upon success, will execute success
         * callback function passing the resulting certificate as first argument.
         * @memberof AnnotationService
         *
         * @param {String} layerId - The annotation layer identification string.
         * @param {Object} annotation - The annotation to be written.
         * @param {Function} success - The callback function executed after success received (optional).
         */
        writeAnnotation: function( layerId, annotation, success ) {
            var _success = ( typeof success === "function" ) ? success : null;
            $.post(
                'rest/v1.0/annotation',
                JSON.stringify({
                    type: "write",
                    annotation: annotation,
                    layer: layerId
                })
            ).then(
                _success,
                Util.handleHTTPError
            );
        },

        /**
         * Modify an annotation on the server. Upon success, will execute success
         * callback function passing the resulting certificate as first argument.
         * @memberof AnnotationService
         *
         * @param {String} layerId - The annotation layer identification string.
         * @param {Object} annotation - The annotation to be modified.
         * @param {Function} success - The callback function executed after success received (optional).
         */
        modifyAnnotation: function( layerId, annotation, success ) {
            var _success = ( typeof success === "function" ) ? success : null;
            $.post(
                'rest/v1.0/annotation',
                JSON.stringify({
                    type: "modify",
                    annotation: annotation,
                    layer: layerId
                })
            ).then(
                _success,
                Util.handleHTTPError
            );
        },

        /**
         * Remove an annotation from the server.
         * @memberof AnnotationService
         *
         * @param {String} layerId - The annotation layer identification string.
         * @param {Object} certificate - The certificate of the annotation to be removed.
         * @param {Function} success - The callback function executed after success received (optional).
         */
        removeAnnotation: function( layerId, certificate, success ) {
            var _success = ( typeof success === "function" ) ? success : null;
            $.post(
                'rest/v1.0/annotation',
                JSON.stringify({
                    type: "remove",
                    certificate: certificate,
                    layer: layerId
                })
            ).then(
                _success,
                Util.handleHTTPError
            );
        }

    };
}());

},{"../util/Util":60}],48:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @namespace LayerService
 * @classdesc A utility namespace that provides layer service REST functionality.
 */
( function() {

    "use strict";

    var Util = require('../util/Util');

    module.exports = {

        /**
         * Request all layers from the server. Upon success, will execute success
         * callback function passing the resulting object as first argument.
         * @memberof LayerService
         *
         * @param {Function} success - The callback function executed after success received (optional).
         */
        getLayers: function( success ) {
            var _success = ( typeof success === "function" ) ? success : null;
            $.get(
                'rest/v1.0/layers'
            ).then(
                _success,
                Util.handleHTTPError
            );
        },

        /**
         * Request a specific layer from the server. Upon success, will execute success
         * callback function passing the resulting object as first argument.
         * @memberof LayerService
         *
         * @param {String} layerId - The layer identification string.
         * @param {Function} success - The callback function executed after success received (optional).
         */
        getLayer: function( layerId, success ) {
            var _success = ( typeof success === "function" ) ? success : null;
            $.get(
                'rest/v1.0/layers/' + layerId
            ).then(
                _success,
                Util.handleHTTPError
            );
        },

        /**
         * Store a configuration state on the server. Upon success, will execute success
         * callback function passing the resulting object as first argument.
         * @memberof LayerService
         *
         * @param {String} layerId - The layer identification string.
         * @param {Object} params - The parameter configuration overrides (optional).
         * @param {Function} success - The callback function executed after success received (optional).
         */
        saveLayerState: function( layerId, params, success ) {
            var _success = ( typeof success === "function" ) ? success : null;
            $.post(
                'rest/v1.0/layers/' + layerId + '/states',
                JSON.stringify( params )
            ).then(
                _success,
                Util.handleHTTPError
            );
        },

        /**
         * Get all configuration states for a layer on the server. Upon success, will execute
         * success callback function passing the resulting object as first argument.
         * @memberof LayerService
         *
         * @param {String} layerId - The layer identification string.
         * @param {Function} success - The callback function executed after success received (optional).
         */
        getLayerStates: function( layerId, success ) {
            var _success = ( typeof success === "function" ) ? success : null;
            $.get(
                'rest/v1.0/layers/' + layerId + '/states'
            ).then(
                _success,
                Util.handleHTTPError
            );
        },

        /**
         * Get a configuration state for a layer on the server by state id. Upon success,
         * will execute success callback function passing the resulting object as first argument.
         * @memberof LayerService
         *
         * @param {String} layerId - The layer identification string.
         * @param {String} stateId - The state identification string.
         * @param {Function} success - The callback function executed after success received (optional).
         */
        getLayerState: function( layerId, stateId, success ) {
            var _success = ( typeof success === "function" ) ? success : null;
            $.get(
                'rest/v1.0/layers/' + layerId + '/states/' + stateId
            ).then(
                _success,
                Util.handleHTTPError
            );
        }
    };
}());

},{"../util/Util":60}],49:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * @namespace LegendService
 * @classdesc A utility namespace that provides legend service REST functionality.
 */
( function() {

    "use strict";

    var Util = require('../util/Util');

    module.exports = {

        /**
         * Get an encoded image string representing the rendering legend. Upon success,
         * will execute success callback function passing the resulting string as first
         * argument.
         * @memberof LegendService
         *
         * @param {String} layerId - The layer identification string.
         * @param {Object} params - The query parameter configuration overrides (optional).
         * @param {Function} success - The callback function executed after success received (optional).
         */
        getEncodedImage: function( layerId, params, success ) {
            var _params = ( typeof params === "object" ) ? params : null,
                _success = ( typeof success === "function" )
                    ? success
                    : ( typeof params === "function" )
                        ? params
                        : null;
            $.get(
                'rest/v1.0/legend/' + layerId + Util.encodeQueryParams( _params )
            ).then(
                _success,
                Util.handleHTTPError
            );
        },

        /**
         * Get a png image representing the rendering legend.
         * @memberof LegendService
         *
         * @param {String} layerId - The layer identification string.
         * @param {Object} params - The query parameter configuration overrides (optional).
         * @param {Function} success - The callback function executed after success received (optional).
         */
        getImage: function( layerId, params, success ) {
            var _params = ( typeof params === "object" ) ? params : {},
                _success = ( typeof success === "function" )
                    ? success
                    : ( typeof params === "function" )
                        ? params
                        : null;
            // explicitly set output type to png image
            _params.output = 'png';
            $.get(
                'rest/v1.0/legend/' + layerId + Util.encodeQueryParams( _params )
            ).then(
                _success,
                Util.handleHTTPError
            );
        }
    };
}());

},{"../util/Util":60}],50:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @namespace TileService
 * @classdesc A utility namespace that provides tile service REST functionality.
 */
( function() {
    
    "use strict";

    var Util = require('../util/Util');

    module.exports = {

        /**
         * Get a tile worth of data in JSON format. Upon success, will execute success
         * callback function passing the resulting object as first argument.
         * @memberof TileService
         *
         * @param {String} layerId - The layer identification string.
         * @param {integer} level - The zoom level.
         * @param {integer} x - The tile x index.
         * @param {integer} y - The tile y index.
         * @param {Object} params - The query parameter configuration overrides (optional).
         * @param {Function} success - The callback function executed after success received (optional).
         */
        getTileJSON: function( layerId, level, x, y, params, success ) {
            var _params = ( typeof params === "object" ) ? params : null,
                _success = ( typeof success === "function" )
                    ? success
                    : ( typeof params === "function" )
                        ? params
                        : null;
            $.get(
                'rest/v1.0/tile/'
                + layerId + "/"
                + level + "/"
                + x + "/"
                + y + ".json" + Util.encodeQueryParams( _params )
            ).then(
                _success,
                Util.handleHTTPError
            );
        },

        /**
         * Get a tile rendered as an image. Upon success, will execute success
         * callback function passing the resulting object as first argument.
         * @memberof TileService
         *
         * @param {String} layerId - The layer identification string.
         * @param {integer} level - The zoom level.
         * @param {integer} x - The tile x index.
         * @param {integer} y - The tile y index.
         * @param {Object} params - The query parameter configuration overrides (optional).
         * @param {Function} success - The callback function executed after success received (optional).
         */
        getTileImage: function( layerId, level, x, y, params, success ) {
            var _params = ( typeof params === "object" ) ? params : null,
                _success = ( typeof success === "function" )
                    ? success
                    : ( typeof params === "function" )
                        ? params
                        : null;
            $.get(
                'rest/v1.0/tile/'
                + layerId + "/"
                + level + "/"
                + x + "/"
                + y + ".png" + Util.encodeQueryParams( _params )
            ).then(
                _success,
                Util.handleHTTPError
            );
        }
    };
}());

},{"../util/Util":60}],51:[function(require,module,exports){
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

( function() {

    "use strict";

    var PubSub = require('../util/PubSub');

    module.exports = {

        /**
         * Creates a coarseness dropdown menu and binds it to the provided layer.
         *
         * @param {Layer} layer - The layer object.
         *
         * @returns {JQuery} - The JQuery element.
         */
        create: function( layer ) {
            var $coarsenessControls = $( '<div class="coarseness-controls"></div>' ),
                $coarsenessLabel = $( '<div class="controls-label">Coarseness</div>' ),
                $coarsenessMenu = $( '<div class="control-menu">' ),
                $menuItems = $('<ul class="dropdown-menu"></ul>'),
                setCoarseness = function() {
                    layer.setCoarseness( $( this ).data( 'coarseness' ) );
                    $menuItems.children().each( function() {
                        $( this ).removeClass( 'active' );
                    });
                    $( this ).addClass( 'active' );
                },
                updateMenu = function( coarseness ) {
                    $menuItems.children().each( function() {
                        $( this ).removeClass( 'active' );
                        if ( $( this ).data( 'coarseness' ) === coarseness ) {
                            $( this ).addClass( 'active' );
                        }
                    });
                },
                items = [
                    {
                        id: 1,
                        name: "1x1"
                    },
                    {
                        id: 2,
                        name: "2x2"
                    },
                    {
                        id: 3,
                        name: "4x4"
                    },
                    {
                        id: 4,
                        name: "8x8"
                    }],
                $item,
                i;
            $menuItems.click( function() {
                $menuItems.toggleClass("dropdown-menu-open");
            });
            for ( i=0; i<items.length; i++ ) {
                $item = $( 
                    '<li class="menu-item">'+
                        '<a href="#" class="menu-item-link">'+items[i].name+'</a>'+
                    '</li>' );
                $item.data( 'coarseness', items[i].id );
                $item.click( setCoarseness );
                $menuItems.append( $item );
            }
            updateMenu( layer.getCoarseness() );
            PubSub.subscribe( layer.getChannel(), function( message ) {
                if ( message.field === "coarseness" ) {
                    updateMenu( message.value );
                }
            });
            $coarsenessControls.append( $coarsenessLabel );
            $coarsenessControls.append( $coarsenessMenu.append( $menuItems ) );
            return $coarsenessControls;
        }

    };

}());
},{"../util/PubSub":59}],52:[function(require,module,exports){
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

( function() {

    "use strict";

    var SliderUtil = require('./SliderUtil'),
        Util = require('../util/Util'),
        AxisUtil = require('../map/AxisUtil'),
        PubSub = require('../util/PubSub');

    function createFilterAxis( minMax, transform ) {
        var NUM_MAJOR_MARKERS = 5;
        return $( '<div class="filter-axis"></div>' )
            .append( createAxisMarkers( NUM_MAJOR_MARKERS ) )
            .append( createAxisLabels( NUM_MAJOR_MARKERS, minMax, transform ) );
    }

    function createAxisMarkers( numMajorMarkers ) {
        var $container = $('<div class="filter-axis-ticks-container"></div>'),
            numMarkers = (numMajorMarkers-1)*2,
            margin = 100/numMarkers,
            isMajor = true,
            i;
        for( i = 0; i<numMarkers; i++ ) {
            if ( isMajor ) {
                $container.append( '<div class="filter-axis-marker filter-major-marker" style="margin-right:calc('+margin+'% - 1px);"></div>' );
            } else {
                $container.append( '<div class="filter-axis-marker filter-minor-marker" style="margin-right:calc('+margin+'% - 1px);"></div>' );
            }
            isMajor = !isMajor;
        }
        $container.append( '<div class="filter-axis-marker filter-major-marker" style="margin-left:-1px;"></div>' );
        return $container;
    }

    function createAxisLabels( numMajorMarkers, minMax, transform ){
        var $container = $('<div class="filter-axis-label-container"></div>'),
            margin = 100/(numMajorMarkers-1),
            options = {
                'stepDown' : true,
                'decimals' : 1,
                'type': 'b'
            },
            val,
            i;
        for ( i = 0; i<numMajorMarkers; i++ ) {
            val = Util.denormalizeValue( i / (numMajorMarkers-1), minMax, transform );
            $container.append(
                $( '<div class="filter-axis-label" style="position:absolute; left:'+(margin*i)+'%; width:'+margin+'%; margin-left:-'+(margin/2)+'%;">'+
                      AxisUtil.formatText( val, options ) +
                  '</div>' )
            );
        }
        return $container;
    }

    module.exports = {

        /**
         * Creates a filter jquery-ui slider and binds it to the provided layer.
         *
         * @param {Layer} layer - The layer object.
         *
         * @returns {JQuery} - The JQuery element.
         */
        create: function( layer ) {
            var $filterControls = $( '<div class="filter-controls"></div>' ),
                $filterLabel = $( '<div class="controls-label">Filter</div>' ),
                $sliderBorder = $( '<div class="slider-border">' ),
                $filterSlider = $( '<div class="filter-slider"></div>' ),
                MIN_VAL = 0,
                MAX_VAL = 100;
            $filterSlider.slider({
                range: true,
                min: MIN_VAL,
                max: MAX_VAL,
                values: [
                    layer.getRangeMinPercentage() * MAX_VAL,
                    layer.getRangeMaxPercentage() * MAX_VAL
                ],
                change: function () {
                    var result = $( this ).slider( "option", "values" );
                    // set by percentage
                    layer.setRangeMinPercentage( result[0] / MAX_VAL );
                    layer.setRangeMaxPercentage( result[1] / MAX_VAL );
                },
                slide: function( event, ui ) {
                    var handleIndex = $( ui.handle ).index() - 1,
                        values = ui.values,
                        value = Util.denormalizeValue(
                            values[ handleIndex ] / MAX_VAL,
                            layer.getLevelMinMax(),
                            layer.getValueTransformType() );
                    SliderUtil.createLabel( $( $filterSlider[0].children[ 1 + handleIndex ] ), value );
                },
                start: function( event, ui ) {
                    var handleIndex = $(ui.handle).index() - 1,
                        values = ui.values,
                        value = Util.denormalizeValue(
                            values[ handleIndex ] / MAX_VAL,
                            layer.getLevelMinMax(),
                            layer.getValueTransformType() );
                    SliderUtil.createLabel( $( $filterSlider[0].children[ 1 + handleIndex ] ), value );
                },
                stop: function( event, ui ) {
                    var handleIndex = $(ui.handle).index() - 1,
                        $handle = $( $filterSlider[0].children[ 1 + handleIndex ] );
                    if ( !$handle.is(':hover') ) {
                        // normally this label is removed on mouse out, in the case that
                        // the user has moused out while dragging, this will cause the label to
                        // be removed
                        SliderUtil.removeLabel( $handle );
                    }
                }
            });
            // bind slider label mouseover and mouseout callbacks to each handle of the slider
            $filterSlider.find( '.ui-slider-handle' ).each( function( index, elem ) {
                $( elem ).mouseover( function() {
                    var value = ( index === 0 ) ? layer.getRangeMinValue() : layer.getRangeMaxValue();
                    SliderUtil.createLabel( $( this ), value );
                });
                $( elem ).mouseout( function() {
                    SliderUtil.removeLabel( $( this ) );
                });
            });
            $filterSlider.append( createFilterAxis( layer.getLevelMinMax(), layer.getValueTransformType() ) );
            $filterSlider.find( '.ui-slider-handle' ).first().addClass( "filter-min-handle" );
            $filterSlider.find( '.ui-slider-handle' ).last().addClass( "filter-max-handle" );
            $filterControls.append( $filterLabel );
            $filterControls.append( $sliderBorder.append( $filterSlider ) );
            PubSub.subscribe( layer.getChannel(), function( message ) {
                switch ( message.field ) {

                    case 'rangeMin':

                        $filterSlider.slider( 'values', 0, layer.getRangeMinPercentage() * MAX_VAL );
                        break;

                    case 'rangeMax':

                        $filterSlider.slider( 'values', 1, layer.getRangeMaxPercentage() * MAX_VAL );
                        break;

                    case 'rampImageUrl':

                        $filterSlider.find( ".ui-slider-range" ).css({
                            "background": "url(" + message.value + ")",
                            "background-size": "contain"
                        });
                        break;

                    case 'levelMinMax':

                        $filterSlider.find( ".filter-axis" ).replaceWith(
                            createFilterAxis( layer.getLevelMinMax(), layer.getValueTransformType() )
                        );
                        break;
                }
            });
            return $filterControls;
        }
    };

}());

},{"../map/AxisUtil":43,"../util/PubSub":59,"../util/Util":60,"./SliderUtil":58}],53:[function(require,module,exports){
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

( function() {

    "use strict";

    var LayerEntry = require('./LayerEntry');

    module.exports = {
        /**
         * Creates a minimal layer controls UI component and binds it to all provided layers.
         *
         * @param {Array} layers - The array of layers.
         *
         * @returns {JQuery} The layers control element.
         */

        create: function( layers ) {
            var $controls = $( '<div class="tiles-layer-controls"></div>' );
            _.forEach( layers, function( layer ) {
                $controls.append( LayerEntry.create( layer ) );
            });
            return $controls;
        }
    };

}());
},{"./LayerEntry":54}],54:[function(require,module,exports){
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

( function() {

    "use strict";

    var LayerEntryHead = require('./LayerEntryHead'),
        LayerEntryBody = require('./LayerEntryBody'),
        PubSub = require('../util/PubSub');

    module.exports = {

        /**
         * Creates the UI component that holds the controls header and body for a layer.
         *
         * @param {Layer} layer - The layer object.
         *
         * @returns {JQuery} - The JQuery element.
         */
        create: function( layer ) {
            var $layerEntry = $( '<div class="layer-entry"></div>' ),
                $layerHeader = LayerEntryHead.create( layer ),
                $layerBody = LayerEntryBody.create( layer );
            PubSub.subscribe( layer.getChannel(), function( message ) {
                if ( message.field === "enabled" ) {
                    if ( message.value ) {
                        $layerBody.css( 'display', "" );
                    } else {
                        $layerBody.css( 'display', "none" );
                    }
                }
            });
            if ( layer.isEnabled() ) {
                $layerBody.css( 'display', "" );
            } else {
                $layerBody.css( 'display', "none" );
            }
            $layerEntry.append( $layerHeader );
            $layerEntry.append( $layerBody );
            return $layerEntry;
        }

    };

}());
},{"../util/PubSub":59,"./LayerEntryBody":55,"./LayerEntryHead":56}],55:[function(require,module,exports){
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

( function() {

    "use strict";

    var OpacityControls = require('./OpacityControls'),
        FilterControls = require('./FilterControls'),
        CoarsenessControls = require('./CoarsenessControls');

    module.exports = {

        /**
         * Creates the UI component that holds the controls for a layer.
         *
         * @param {Layer} layer - The layer object.
         *
         * @returns {JQuery} - The JQuery element.
         */
        create: function( layer ) {
            var $entryBody = $( '<div class="layer-entry-body"></div>' );
            if ( layer.domain === "client" || layer.domain === "annotation" ) {
                $entryBody.append( OpacityControls.create( layer ).addClass( 'opacity-controls-client' ) );
            } else {
                $entryBody.append( OpacityControls.create( layer ).addClass( 'opacity-controls-server' ) );
                $entryBody.append( FilterControls.create( layer ) );
                $entryBody.append( CoarsenessControls.create( layer ) );
            }
            $entryBody.append( '<div class="clear"></div>');
            return $entryBody;
        }

    };

}());
},{"./CoarsenessControls":51,"./FilterControls":52,"./OpacityControls":57}],56:[function(require,module,exports){
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

( function() {

    "use strict";

    var PubSub = require('../util/PubSub');

    module.exports = {

        /**
         * Creates the UI component that holds the layer controls header.
         *
         * @param {Layer} layer - The layer object.
         *
         * @returns {JQuery} - The JQuery element.
         */
        create: function( layer ) {
            var ENABLED_CLASS = 'fa-check-square-o',
                DISABLED_CLASS = 'fa-square-o',
                iconClass = layer.isEnabled() ? ENABLED_CLASS : DISABLED_CLASS,
                $layerHeader = $( '<div class="layer-entry-head"></div>' ),
                $layerToggleIcon = $( '<i class="fa '+iconClass+'"></i>'),
                $layerToggleButton = $('<div class="layer-toggle"></div>'),
                $layerTitle = $( '<div class="layer-title">'+layer.source.name+'</div>');

            $layerHeader.click( function() {
                if ( layer.isEnabled() ) {
                    layer.setEnabled( false );
                } else {
                    layer.setEnabled( true );
                }              
            });
            PubSub.subscribe( layer.getChannel(), function( message ) {
                if ( message.field === "enabled" ) {
                    if ( message.value ) {
                        $layerToggleIcon.removeClass( DISABLED_CLASS );
                        $layerToggleIcon.addClass( ENABLED_CLASS );
                    } else {
                        $layerToggleIcon.removeClass( ENABLED_CLASS );
                        $layerToggleIcon.addClass( DISABLED_CLASS );
                    } 
                }
            });
            $layerHeader.append( $layerToggleButton.append( $layerToggleIcon ) );
            $layerHeader.append( $layerTitle );
            return $layerHeader;
        }
    };

}());
},{"../util/PubSub":59}],57:[function(require,module,exports){
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

( function() {

    "use strict";

    var SliderUtil = require('./SliderUtil'),
        PubSub = require('../util/PubSub');

    module.exports = {

        /**
         * Creates an opacity jquery-ui slider and binds it to the provided layer.
         *
         * @param {Layer} layer - The layer object.
         *
         * @returns {JQuery} - The JQuery element.
         */
        create: function( layer ) {
            var $opacityControls = $( '<div class="opacity-controls"></div>' ),
                $opacityLabel = $( '<div class="controls-label">Opacity</div>' ),
                $sliderBorder = $( '<div class="slider-border">' ),
                $opacitySlider = $( '<div class="opacity-slider"></div>' ),
                MIN_VAL = 0,
                MAX_VAL = 100;
            $opacitySlider.slider({
                range: "min",
                min: MIN_VAL,
                max: MAX_VAL,
                value: layer.getOpacity() * MAX_VAL,
                slide: function( event, ui ) {
                    $( '.olTileImage' ).addClass( 'no-transition' );
                    $( '.olTileHtml' ).addClass( 'no-transition' );
                    layer.setOpacity( ui.value / MAX_VAL );
                    SliderUtil.createLabel( $( this ).find(".ui-slider-handle"), ui.value / MAX_VAL );
                },
                start: function( event, ui ) {
                    SliderUtil.createLabel( $( this ).find(".ui-slider-handle"), ui.value / MAX_VAL );
                },
                stop: function() {
                    var $handle = $( this ).find(".ui-slider-handle");
                    if ( !$handle.is(':hover') ) {
                        // normally this label is removed on mouse out, in the case that
                        // the user has moused out while dragging, this will cause the label to
                        // be removed
                        SliderUtil.removeLabel( $handle );
                    }                       
                    $( '.olTileImage' ).removeClass( 'no-transition' );
                    $( '.olTileHtml' ).removeClass( 'no-transition' );
                }
            });   
            // bind slider label mouseover and mouseout callbacks
            $opacitySlider.find( ".ui-slider-handle" ).mouseover( function() {
                SliderUtil.createLabel( $( this ), layer.getOpacity() );
            });
            $opacitySlider.find( ".ui-slider-handle" ).mouseout( function() {
                SliderUtil.removeLabel( $( this ) );
            });
            PubSub.subscribe( layer.getChannel(), function( message ) {
                if ( message.field === "opacity" ) {
                    $opacitySlider.slider('value', layer.getOpacity()*MAX_VAL );
                }
            });
            $opacityControls.append( $opacityLabel );
            $opacityControls.append( $sliderBorder.append( $opacitySlider ) );
            return $opacityControls;
        }
    };

}());
},{"../util/PubSub":59,"./SliderUtil":58}],58:[function(require,module,exports){
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

( function() {

    'use strict';

    var AxisUtil = require('../map/AxisUtil');

    module.exports = {

        /**
         * Creates and appends a label to the supplied element.
         *
         * @param {jQuery} $elem - The element to which the label is appended onto.
         * @param {number} value - The value to be written on the label.
         */
        createLabel: function( $elem, value ) {
            var options = {
                    'stepDown' : true,
                    'decimals' : 2,
                    'type': 'b'
                },
                $label = $('<div class="hover-label" style="left:'+ ($elem.width()/2) +'px; top:0px;">'+
                              '<div class="hover-label-text">'+ AxisUtil.formatText( value, options ) +'</div>'+
                           '</div>');
            // remove previous label if it exists
            $elem.find('.hover-label').finish().remove();
            // add new label
            $elem.append( $label );
            // reposition to be centred above cursor
            $label.css( {"margin-top": -$label.outerHeight()*1.2, "margin-left": -$label.outerWidth()/2 } );
        },

        /**
         * Removes a label from the element. Fades the element out first.
         *
         * @param {jQuery} $elem - The element to which the label is appended onto.
         */
        removeLabel: function( $elem ) {
            $elem.find('.hover-label').animate({
                    opacity: 0
                },
                {
                    complete: function() {
                        $elem.find('.hover-label').remove();
                    },
                    duration: 800
                }
            );
        }

    };

}());

},{"../map/AxisUtil":43}],59:[function(require,module,exports){
/**
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @namespace PubSub
 * @classdesc A hierarchical publish and subscribe namespace. Channels consist of strings, sub-channels
 * are separated with a period ('.'). Publishing to a target channel will propagate the message
 * breadth first from the root of the hierarchy to the target channel, then from the target channel to
 * all its existing sub-channels.
 * <pre>
 * Ex.
 *
 *     Hierarchy:
 *
 *         layer -> server -> abc28d05-9b9d-4e03-9f53-9f88cf7078c7
 *                            fb943cca-cac3-4bbf-ba03-91a1559fee28
 *                            67fd55b5-dc3a-40cf-8adc-9e634b82d474
 *                  client -> 3392103f-7f50-4422-ae59-2c2c0971951f
 *                            7bc33c81-c347-4bea-9cfb-c22328bcb648
 *
 *     Publishing to 'layer.server' will publish:
 *
 *         From root to target:
 *
 *             1) layer
 *
 *     From target to all sub-channels:
 *
 *             2) layer.server
 *             3) layer.server.abc28d05-9b9d-4e03-9f53-9f88cf7078c7
 *             4) layer.server.fb943cca-cac3-4bbf-ba03-91a1559fee28
 *             5) layer.server.67fd55b5-dc3a-40cf-8adc-9e634b82d474
 *
 *     Publishing to 'layer.client.3392103f-7f50-4422-ae59-2c2c0971951f' will publish:
 *
 *         From root to target:
 *
 *             1) layer
 *             2) layer.client
 *
 *         From target to all sub-channels:
 *
 *             3) layer.client.3392103f-7f50-4422-ae59-2c2c0971951f
 * </pre>
 */
( function() {

    "use strict";

    function createChannel( path ) {
        return {
            path : path,
            subscribers : [],
            children : {}
        };
    }

    module.exports = {

        /**
         * Subscribe a listener function to the specific channel path.
         * @memberof PubSub
         *
         * @param channelPath {string}   A '.' delimited channel path.
         * @param subscriber  {Function} The subscriber function associated with the provided path.
         */
        subscribe: function( channelPath, subscriber ) {

            var paths = channelPath.split('.'),
                path,
                currentPath = '',
                channel;

            this.channels = this.channels || {
                subscribers : [],
                children : {}
            };

            channel = this.channels;

            while ( paths.length > 0 ) {
                path = paths.shift();
                currentPath += ( currentPath.length > 0 ) ? '.' + path : path;
                if ( !channel.children[ path ] ) {
                    channel.children[ path ] = createChannel( currentPath );
                }
                channel = channel.children[ path ];
            }
            channel.subscribers.push( subscriber );
        },

        /**
         * Unsubscribe a listener function from the specific channel path.
         * @memberof PubSub
         *
         * @param channelPath {string}   A '.' delimited channel path.
         * @param subscriber  {Function} The subscriber function associated with the provided path.
         */
        unsubscribe: function( channelPath, subscriber ) {

            var paths = channelPath.split('.'),
                path,
                currentPath = '',
                channel;

            this.channels = this.channels || {
                subscribers : [],
                children : {}
            };

            channel = this.channels;

            while ( paths.length > 0 ) {
                path = paths.shift();
                currentPath += ( currentPath.length > 0 ) ? '.' + path : path;
                if ( !channel.children[ path ] ) {
                    channel.children[ path ] = createChannel( currentPath );
                }
                channel = channel.children[ path ];
            }
            var index = channel.subscribers.indexOf( subscriber );
            if ( index !== -1 ) {
                channel.subscribers.splice( index, 1 );
            }
        },

        /**
         * Publish a message to a channel path. Publishing to a target channel will propagate the message
         * breadth first from the root of the hierarchy to the target channel, then from the target channel
         * to all existing sub-channels
         * @memberof PubSub
         *
         * @param channelPath {string}   A '.' delimited channel path.
         * @param message  {*}       The messsage to be published.
         */
        publish: function( channelPath, message ) {

            var paths = channelPath.split('.'),
                children,
                subscribers,
                queue = [],
                path, i, sub,
                leafChannel,
                currentPath = '',
                channel = this.channels || {
                    subscribers : [],
                    children : {}
                };

            // find channel
            while ( paths.length > 0 ) {
                path = paths.shift();
                currentPath += ( currentPath.length > 0 ) ? '.' + path : path;
                if ( !channel.children[ path ] ) {
                    channel.children[ path ] = createChannel( currentPath );
                }
                channel = channel.children[ path ];
                queue.push( channel );
            }

            leafChannel = queue.pop();

            // breadth first publishing from root to target
            while ( queue.length > 0 ) {
                channel = queue.shift();
                subscribers = channel.subscribers;
                // publish to current channel
                for ( i=0; i<subscribers.length; i++ ) {
                    subscribers[i]( message, channelPath );
                }
            }

            queue = [ leafChannel ];

            // breadth first publishing from target to all children
            while ( queue.length > 0 ) {
                channel = queue.shift();
                subscribers = channel.subscribers;
                children = channel.children;
                // publish to current channel
                for ( i=0; i<subscribers.length; i++ ) {
                    subscribers[i]( message, channelPath );
                }
                // queue up children for leaf channel
                for ( sub in children ) {
                    if ( children.hasOwnProperty( sub ) ) {
                        queue.push( children[ sub ] );
                    }
                }
            }
        }
    };
}());

},{}],60:[function(require,module,exports){
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

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * A utility namespace containing commonly used functionality.
 */
( function() {

    "use strict";

    var propagateEvent;

    /**
     * Private: A propagation handler that will temporarily de-activate the
     * DOM element and propagate the event through to any underlying element.
     * @param event {Event} The event object.
     */
    propagateEvent = function( event ) {
        var newEvent = new event.constructor( event.type, event ),
            element,
            before,
            below;
        element = event.currentTarget;
        before = element.style['pointer-events'];
        element.style['pointer-events'] = 'none';
        below = document.elementFromPoint( event.clientX, event.clientY );
        if ( below ) {
            below.dispatchEvent( newEvent );
        }
        element.style['pointer-events'] = before;
    };

    module.exports = {

        /**
         * Generates an RFC4122 version 4 compliant UUID string.
         *
         * @returns {string}
         */
        generateUuid: function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = (c === 'x') ? r : (r&0x3|0x8);
                return v.toString(16);
            });
        },

        /**
         * Allows the given DOM element or jQuery object events to propagate through
         * and interact with underlying elements
         *
         * @param elem     {HTMLElement | jQuery} The DOM element.
         * @param [events] {Array}                 Array of events to propagate through (optional).
         */
        enableEventPropagation: function( elem, events ) {
            var domElement = ( elem instanceof $ ) ? elem[0] : elem,
                i;
            if ( !events ) {
                domElement.addEventListener( 'mousedown', propagateEvent );
                domElement.addEventListener( 'mouseup', propagateEvent );
                domElement.addEventListener( 'mousemove', propagateEvent );
                domElement.addEventListener( 'wheel', propagateEvent );
                domElement.addEventListener( 'scroll', propagateEvent );
                domElement.addEventListener( 'click', propagateEvent );
                domElement.addEventListener( 'dblclick', propagateEvent );
            } else {
                events = ( events instanceof Array ) ? events : [ events ];
                for ( i=0; i<events.length; i++ ) {
                    domElement.addEventListener( events[i], propagateEvent );
                }
            }
        },

        /**
         * Removes previously enabled event propagation.
         *
         * @param elem     {HTMLElement | jQuery} The DOM element.
         * @param [events] {Array}               Array of events to remove (optional).
         */
        disableEventPropagation: function( elem, events ) {
            var domElement = ( elem instanceof $ ) ? elem[0] : elem,
                i;
            if ( !events ) {
                domElement.removeEventListener( 'mousedown', propagateEvent );
                domElement.removeEventListener( 'mouseup', propagateEvent );
                domElement.removeEventListener( 'mousemove', propagateEvent );
                domElement.removeEventListener( 'wheel', propagateEvent );
                domElement.removeEventListener( 'scroll', propagateEvent );
                domElement.removeEventListener( 'click', propagateEvent );
                domElement.removeEventListener( 'dblclick', propagateEvent );
            } else {
                events = ( events instanceof Array ) ? events : [ events ];
                for ( i=0; i<events.length; i++ ) {
                    domElement.removeEventListener( events[i], propagateEvent );
                }
            }
        },

        /**
         * Returns a proper modulo as the % operator in javascript is the 'remainder' operator.
         * @param value {number} the value
         * @param n     {number} the divisor
         * @returns {number}
         */
        mod: function( value, n ) {
           return ( (value % n) + n) % n;
        },

        /**
         * Rounds a number towards another number.
         * @param value {number} the value
         * @returns {number}
         */
         roundTowards: function( value, num ) {
            if ( value < num ) {
                return Math.ceil( value );
            }
            return Math.floor( value );
        },

        /**
         * Rounds a given value to a set number of decimals. Defaults to 2.
         *
         * @param value    {number} value to round
         * @param decimals {int}    number of decimals
         * @returns {string} rounded value
         */
        roundToDecimals: function( value, decimals ) {
            var numDec = decimals || 2,
                pow10 = Math.pow( 10, numDec );
            return parseFloat( Math.round( value * pow10 ) / pow10 ).toFixed( decimals );
        },

        /**
         * Converts a value from the range [0, 1] to a value from the
         * range [minMax.min, minMax.max] based on a value transform function.
         *
         * @param {number} percentage - The range percentage in range [0, 1].
         * @param {Object} minMax - The min and max values of the range.
         * @param {String} transform - The transform type, either 'log10' or 'linear'.
         *
         * @returns {number} The value from [minMax.min, minMax.max].
         */
        denormalizeValue: function( percentage, minMax, transform ) {
            var range = minMax.maximum- minMax.minimum,
                val;
            function log10(val) {
                return Math.log(val) / Math.LN10;
            }
            //iterate over the inner labels
            if ( transform === "log10" ) {
                var logMin = (minMax.minimum === 0) ? 0 : log10(minMax.minimum);
                var logMax = (minMax.maximum === 0) ? 0 : log10(minMax.maximum);
                val =  Math.pow(10, logMin + (logMax - logMin) * percentage);
            } else {
                val = percentage * range + minMax.minimum;
            }
            return val;
        },

        /**
         * Converts a value from the range [minMax.min, minMax.max] to a value in
         * the range [0, 1] based on a value transform function.
         *
         * @param {number} value - The range percentage in range [minMax.min, minMax.max].
         * @param {Object} minMax - The min and max values of the range.
         * @param {String} transform - The transform type, either 'log10' or 'linear'.
         *
         * @returns {number} The value percentage from [0, 1].
         */
        normalizeValue: function( value, minMax, transform ) {
            var range = minMax.maximum - minMax.minimum,
                val;
            function log10(val) {
                return Math.log(val) / Math.LN10;
            }
            function checkLogInput( value ) {
                return ( value === 0 || value === 1 ) ? 0 : log10( value ) / log10( value );
            }
            //iterate over the inner labels
            if ( transform === "log10" ) {
                val = checkLogInput( minMax.maximum );
            } else {
                val = ( ( value - minMax.minimum ) / range );
            }
            return val;
        },

        /**
         * Registers a click handler that only fires if the click isn't part of
         * a double click.
         *
         * @param element  {HTMLElement} The DOM element to attach the event.
         * @param callback {Function}    The callback function.
         * @param [timout] {int}            The timeout in ms (optional).
         */
        timeSensitiveClick: function( element, callback, timeout ) {
            var clicks = 0;
            element.addEventListener( "click", function( event ) {
		    	clicks++;
		    	if ( clicks === 1 ) {
		        	setTimeout( function() {
		        		if ( clicks === 1 ) {
							callback.call( element, event );
				        }
		        		clicks = 0;
		        	}, timeout || 300);
			    }
		    });
        },

        /**
         * Registers a click handler that only fires if the click didn't
         * involve a map drag. Since the map is moving under the mouse cursor
         * the browser will still register a click despite mouse movement. This
         * guards against that.
         *
         * @param element     {HTMLElement} The DOM element to attach the event.
         * @param callback    {Function}    The callback function.
         * @param [threshold] {int}         The movement threshold (optional).
         */
        dragSensitiveClick: function( element, callback, threshold ) {
            var dragStart = {x: null, y: null};
            threshold = threshold || 10;
            element.addEventListener( "mousedown", function( evt ) {
                dragStart.x = evt.pageX;
                dragStart.y = evt.pageY;
            });
            element.addEventListener( "click", function( evt ) {
                if (Math.abs( dragStart.x - evt.pageX ) < threshold &&
                    Math.abs( dragStart.y - evt.pageY ) < threshold ) {
                    callback.call( this, evt );
                }
            });
        },

        /**
         * Registers a click handler that only fires if the click didn't
         * involve a map drag and was not part of a double click.
         *
         * @param element     {HTMLElement} The DOM element to attach the event.
         * @param callback    {Function}    The callback function.
         */
        dragAndTimeSensitiveClick: function( element, callback ) {
            var dragStart = {x: null, y: null},
                threshold = threshold || 10;
            element.addEventListener( "mousedown", function( evt ) {
                dragStart.x = evt.pageX;
                dragStart.y = evt.pageY;
            });
            this.timeSensitiveClick( element, function( evt ) {
                if (Math.abs( dragStart.x - evt.pageX ) < threshold &&
                    Math.abs( dragStart.y - evt.pageY ) < threshold ) {
                    callback.call( this, evt );
                }
            });
        },

        /**
         * Return an object containing all parameters and values in the current
         * URL.
         *
         * @returns {Object}
         */
        getURLParameters: function() {
            var url = window.location.search.substring(1),
                urlVars = url.split('&'),
                result = {},
                keyValue,
                i;
            for ( i=0; i<urlVars.length; ++i ) {
                keyValue = urlVars[i].split('=');
                result[ keyValue[0] ] = keyValue[1];
            }
            return result;
        },

        /**
         * Return the value of a specific parameters in the current URL.
         *
         * @param key {string} The url parameter key.
         * @returns {string}
         */
        getURLParameter: function( key ) {
            return this.getURLParameters()[ key ];
        },

        /**
         * HTTP REST Error handling function.
         *
         * @param xhr {XmlHttpRequest} XmlHttpRequest object
         */
        handleHTTPError: function( xhr ) {
            console.error( xhr.responseText );
            console.error( xhr );
        },

        /**
         * Returns a string of an object in query parameter dot notation.
         *
         * @param params {Object} The query parameter object.
         * @returns {string}
         */
        encodeQueryParams: function( params ) {
            var query;
            function traverseParams( params, query ) {
                var result = "";
                _.forIn( params, function( value, key ) {
                    if ( typeof value !== "object" ) {
                        result += query + key + '=' + value + "&";
                    } else {
                        result += traverseParams( params[ key ], query + key + "." );
                    }
                });
                // if string ends in ".", it resulted in an empty leaf node, return
                // nothing in that case
                return ( result[0] !== "." ) ? result : "";
            }
            query = "?" + traverseParams( params, '' );
            // remove last '&' character
            return query.slice( 0, query.length - 1 );
        },

        /**
         * Creates and fills an array with the provided value.
         *
         * @param {number} length - The length of the array.
         * @param {*} value - The value to fill. Defaults to 0.
         *
         * @returns {Array} The filled array.
         */
        fillArray: function( length, value ) {
            value = value !== undefined ? value : 0;
            var arr = [],
                i;
            for ( i=0; i<length; i++ ) {
                arr.push( value );
            }
            return arr;
        },

			    /**
			     * Creates and fills an array with the provided value.
			     *
			     * @param {number} length - The length of the array.
			     * @param {*} value - The value to fill. Defaults to 0.
			     *
			     * @returns {Array} The filled array.
			     */
			    fillArrayByFunc: function( length, func ) {
				    var arr = [],
					    i;
				    for ( i=0; i<length; i++ ) {
					    arr.push( func() );
				    }
				    return arr;
			    },

        /**
         * Returns true if an object has no parameters.
         *
         * @param obj {Object} The object.
         * @returns {boolean}
         */
        isEmpty: function( obj ) {
            var prop;
            for ( prop in obj ) {
                if ( obj.hasOwnProperty( prop ) ) {
                    return false;
                }
            }
            return true;
        },

        /**
         * Extend class a by class b. Does not recurse, simply overlays top attributes.
         *
         * @param {Object} a - Object a which is extended.
         * @param {Object} b - Object b which extends a.
         *
         * @returns {Object} The extended object.
         */
        extend: function( a, b ) {
            var key;
            for( key in b ) {
                if( b.hasOwnProperty( key ) ) {
                    a[ key ] = b[ key ];
                }
            }
            return a;
        },


    };
}());

},{}]},{},[1])(1)
});