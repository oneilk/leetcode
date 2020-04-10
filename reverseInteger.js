/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	let str = x.toString();
	let neg = false;
	let result = 0;
	let upper_limit = 2147483648;
	let lower_limit = -2147483648;
	str = str.split("");
	if (str[0] != null && str[0] == '-') {
		neg = true;
		str.shift();
	}
	str = str.reverse();
	for (let i = 0; i < str.length; i++) {
		result = result*10 + Number.parseInt(str[i]);
	}

	result = neg ? '-'+result.toString() : result;

    if (result < lower_limit || result > upper_limit) {
        return 0;
    } else {
        return Number.parseInt(result);
    }
	return result;

};