const palindromes = function () {
    let target = arguments[0];
    let str = target;

    str = str.toLowerCase();
    target = target.toLowerCase();
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    target = target.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g ,"");

    str = str.replace(/\s/g, '');
    target = target.replace(/\s/g, '');

    let arr = str.split('')
    arr.reverse();
    str = arr.join('');
    return (str === target)
};

// Do not edit below this line
module.exports = palindromes;
