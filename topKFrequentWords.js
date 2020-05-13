/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = new Map();

    // iterate through words and count frequencies
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (!map.has(word)) {
            map.set(word, 0);
        }
        map.set(word, map.get(word) + 1);
    }

    // compile our data
    let iterator = map.entries();
    let list = [];
    let set = iterator.next();
    while (!set.done) {
        list.push(set.value);
        set = iterator.next();
    }
    // sort our data
    list.sort(function (a, b) {
        let diff = b[1] - a[1];
        if (diff != 0) {
            return diff
        }

        return a[0].localeCompare(b[0]);
    });

    // retrieve the first k elements of our data
    let ans = [];
    for (let i = 0; i < k; i++) {
        ans.push(list[i][0]);
    }
    return ans;

};

// 23280666596968