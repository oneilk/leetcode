/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
	let sortedIntervals;
    let map = new Map();
    let checkedIntervals = new Map();
    let mergedIntervals = [];

    // test case: [[2,3],[4,5],[6,7],[8,9],[1,10]]

    // sort intervals
    sortedIntervals = intervals.sort(function (a, b) {
    	return a[0] - b[0];
    });

    let pointer = -1;

    for (let i = 0; i < sortedIntervals.length; i++) {
    	if (mergedIntervals.length == 0 || !overlap(sortedIntervals[i], mergedIntervals[pointer])) {
			mergedIntervals.push(sortedIntervals[i]);
			pointer++;
    	} else {
			mergedIntervals[pointer] = getNewInterval(sortedIntervals[i], mergedIntervals[pointer]);
    	}
    }

    return mergedIntervals;

    /**
    * @param {number[][]} interval_a
    * @param {number[][]} interval_b
    * @return {number[][]}
    */
    function overlap(interval_a, interval_b) {
        return interval_a[0] <= interval_b[1] && interval_b[0] <= interval_a[1];
    }

        /**
    * @param {number[][]} interval_a
    * @param {number[][]} interval_b
    * @return {number[][]}
    */
    function getNewInterval(interval_a, interval_b) {
        let lowerBound;
        let upperBound;
        lowerBound = upperBound = interval_a[0];
        // get lowerBound
		if (lowerBound > interval_a[1]) {
			lowerBound = interval_a[1];
		}
		if (lowerBound > interval_b[0]) {
			lowerBound = interval_b[0];
		}
		if (lowerBound > interval_b[1]) {
			lowerBound = interval_b[1];
		}
		// get upperBound
		if (upperBound < interval_a[1]) {
			upperBound = interval_a[1];
		}
		if (upperBound < interval_b[0]) {
			upperBound = interval_b[0];
		}
		if (upperBound < interval_b[1]) {
			upperBound = interval_b[1];
		}
		return [lowerBound, upperBound];
    }
};