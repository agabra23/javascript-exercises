const repeatString = function(str, num) {
    let result = str
   
    if(num === 0){return ''}
    if (num < 0) {return 'ERROR'}
    if (num === 1){return str;}
    
    for (let i = 2; i <= num; i++){
        result += str;
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
