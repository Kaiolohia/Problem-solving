// add whatever parameters you deem necessary
function isSubsequence(str1, str2, ptr1 = str1.length, ptr2 = str2.length) {
    if ( ptr1 === 0 ) return true;
    if ( ptr2 === 0 ) return false;
    if (str1[ptr1 - 1] === str2[ptr2 - 1]) return isSubsequence(str1, str2, ptr1 - 1, ptr2 - 1);
    return isSubsequence(str1, str2,ptr1, ptr2 - 1)
}

module.exports = isSubsequence;