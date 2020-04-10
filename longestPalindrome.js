/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	// if s is a palindrome, then s is longest substring
	if (isPalindrome(s)) {
		return s;
	}

	let longest_palindrome = '';
	let sub = '';

	// brute force loop
	for (let i = 0; i < s.length; i++) {
		for (var j = i + 1; j <= s.length; j++) {
			sub = s.substring(i, j);
			if (isPalindrome(sub) && (sub.length > longest_palindrome.length)) {
				longest_palindrome = sub;
			}
		}
	}

	return longest_palindrome;

	function isPalindrome(s) {
		return s == s.split("").reverse().join("");
	}
};