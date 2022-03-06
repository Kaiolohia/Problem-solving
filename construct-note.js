// add whatever parameters you deem necessary
function constructNote(str1, str2) {
    let messageArr = [...str1]
    let lettersObj = {}
    for (let letter of str2) {
        lettersObj[letter] = lettersObj[letter] + 1 || 1
    }
    return messageArr.every(letter => {
        if (!lettersObj[letter]) {
            return false
        }
        lettersObj[letter] --
        return true
    })

}

module.exports = constructNote;