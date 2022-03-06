// add whatever parameters you deem necessary
function separatePositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Math.sign(arr[i]) === 0 || Math.sign(arr[i]) === 1) {
            arr.unshift(arr.splice(i,1)[0])
        }
    }
    return arr
}

module.exports = separatePositive;