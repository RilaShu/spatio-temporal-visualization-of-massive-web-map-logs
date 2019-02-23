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
