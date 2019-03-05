var numbers = [1, 2, 3, 4, 5, 6];
// retrun true if every element pass passes a test, vice versa
console.log(numbers.every(item => item > 0)); // true
console.log(numbers.every(item => item > 3)); // false
