// add whatever parameters you deem necessary
function sameFrequency(n1, n2) {
    let num1Arr = [...String(n1)]
    let num2Arr = [...String(n2)]
    let num1Obj = {}
    let num2Obj = {}
    for (let num of num1Arr) {
        num1Obj[num] = num1Obj[num] + 1 || 1
    }
    for (let num of num2Arr) {
        num2Obj[num] = num2Obj[num] + 1 || 1
    }
    for (let key of num1Arr) {
        if (num1Obj[key] !== num2Obj[key]) {
            return false
        }
    }
    return true
}

module.exports = sameFrequency;