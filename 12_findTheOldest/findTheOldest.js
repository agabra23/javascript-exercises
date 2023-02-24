const findTheOldest = function(people) {
 
    return people.reduce((firstPerson, nextPerson) => {
         const firstAge = whatAge(firstPerson.yearOfDeath, firstPerson.yearOfBirth);
         const nextAge = whatAge(nextPerson.yearOfDeath, nextPerson.yearOfBirth);
         if (firstAge < nextAge) {
             return nextPerson;
         }
         else {
             return firstPerson;
         }
     })
     
  };
 
  function whatAge(YoD, YoB) {
     if (YoD === undefined) {
         YoD = new Date().getFullYear();
     }
     return YoD - YoB;
  }

// Do not edit below this line
module.exports = findTheOldest;
