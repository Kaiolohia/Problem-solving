// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let right = arr.length - 1
    for (let left = 0; left < right; left ++) {
        while (left < right && arr[left] + arr[right] > target * 2) right--;
        if (left !== right && (arr[left] + arr[right]) === target * 2) return true; 
    }
    return false;
}

module.exports = averagePair;