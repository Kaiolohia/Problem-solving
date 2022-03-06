// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let freqItems = new Map()
    let count = 0
    for (let num of arr) {
        if (!freqItems.has(num)) freqItems.set(num, 1)
        else freqItems.set(num, freqItems.get(num) + 1)
    }
    for (let num of arr) {
        if (freqItems.has(target - num)) {
            count++
        }
    }
    return Math.floor(count / 2)
}

module.exports = countPairs;