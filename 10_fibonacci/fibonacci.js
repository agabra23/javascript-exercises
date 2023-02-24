const fibonacci = function() {
    let num = parseInt(arguments[0]);
    if (num < 1) return 'OOPS'
    let n1 = 0, n2 = 1, nextNum;

    for (let i = 1; i <= num; i++) {
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }

    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
