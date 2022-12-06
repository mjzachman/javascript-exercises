const findTheOldest = function(arr) {
    let oldest = {};
    let oldestAge = 0;
    let currentAge= 0;
    
    for (let i = 0; i < arr.length; i++){
        
        if (!Object.hasOwn(arr[i], 'yearOfDeath')) {currentAge = 2022 - arr[i].yearOfBirth}
        else{currentAge = arr[i].yearOfDeath - arr[i].yearOfBirth;}
    
        if (currentAge > oldestAge){
            oldest = arr[i];
            oldestAge = currentAge;
        }
    }

    return oldest;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
