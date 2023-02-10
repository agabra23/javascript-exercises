//create working arr
//slice out up to index of item (in for loop) to new arr
//slice out from index of item to arr.length to new arr
//pop() from second arr
//concat both arrays
//make that concatenation arr the new working arr

const removeFromArray = function() {
    let workingArr = arguments[0];      //store the array
    for(let i = 1; i < arguments.length; i++){      //go through each item to remove
        if (!workingArr.includes(arguments[i])){continue;} //ignore items not incl.

        let itemIndex = arguments[0].indexOf(arguments[i]);      //index of item
        if(workingArr[0] === arguments[i]){
            workingArr.shift()                      //if first in array, remove it now
        }else {
            let arr1 = workingArr.slice(0, itemIndex);      //slice out before item
            let arr2 = workingArr.slice(itemIndex, workingArr.length);      //slice at item
            arr2.shift();       //remove target item in arr2
            workingArr = arr1.concat(arr2);     //join arrays and reset workingArr
        }
        
    }
    return workingArr;
};

// Do not edit below this line
module.exports = removeFromArray;
