const curry = function () {
    // your code will go here ...
};

//Returns and store the inner function.
let sum = curry();

console.log(sum(5)); //5
console.log(sum(3)); //8
console.log(sum(4)); //12
console.log(sum(0)); //12
console.log(sum()); //12