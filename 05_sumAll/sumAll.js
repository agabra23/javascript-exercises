//store start and end
//create result var
//iterate from start to (and including) end
//add each iteration to the result
//return the result after looping

const sumAll = function() {
    if (arguments.length > 2) {return 'ERROR'}

   if (!(Number(arguments[0]) === arguments[0]) || !(Number(arguments[1]) === arguments[1])) {return 'ERROR'}

    const start = Math.min(arguments[0], arguments[1]);
    const end = Math.max(arguments[0], arguments[1]);
    if (start < 0) {return 'ERROR'}
    if (end < 0) {return 'ERROR'}

    let result = 0;

    for (let i = start; i <= end; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
