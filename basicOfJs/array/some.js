var numbers = [1, 2, 3, 4, 5, 6];
// If any elemnt pass the test, return true, vice versa
console.log(numbers.some(number => number % 2 === 0)); // return true
console.log(numbers.some(number => number < 0)); // return false
