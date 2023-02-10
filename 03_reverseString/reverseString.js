const reverseString = function(str) {
    let arr = str.split('');
    let revArr = arr.reverse();
    let result = revArr.join('');

    return result;

};

// Do not edit below this line
module.exports = reverseString;
