/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	// example: "abcabcbb"
	// brute force
	let sub;
	let longest_sub = '';
	for (let i = 0; i < s.length; i++) {
		inner: for (let j = 0; j < s.length; j++) {
			sub = s.substring(i, j);
			if (hasRepeatingCharacters(sub)) {
				continue inner;
			}
			// we have a substring with no repeating characters
			if (sub.length > longest_sub.length) {
				longest_sub = sub;
			}
		}
	}
	return longest_sub.length;

	function hasRepeatingCharacters(s) {
		let s_array = s.split("");
		let map = new Map();
		for (let i = 0; i < s_array.length; i++) {
			if (map.get(s_array[i]) != undefined) {
				return true;
			} else {
				map.set(s_array[i], true);
			}
		}

		return false;
	}
};