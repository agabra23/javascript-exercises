//Rules:
//div by 4 == leap
//div by 400 == leap
//div by 100 == not leap
//else == not leap

const leapYears = function() {
const year = arguments[0];
    if (year % 400 === 0){return true}
    else if (year % 100 === 0){return false}
    else if (year % 4 === 0){return true}
    return false;
};

// Do not edit below this line
module.exports = leapYears;
