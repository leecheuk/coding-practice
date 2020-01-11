/**
 * Returns indices of two numbers in arr array that sums to target. 
 * Assume there exists one solution. 
 * 
 * @param {number[]} arr 
 * @param {number} target 
 * @returns {number[]}
 */

function two_sum(arr, target) {
    var dict = {};
    for(var i = 0; i < arr.length; i++) {
        var rem = target - arr[i];
        if (typeof dict[rem] !== 'undefined') {
            return [dict[rem], i];
        }
        dict[arr[i]] = i;
    }
}

module.exports = {two_sum};