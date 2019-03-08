// Create Array by array like object
// Array.from(Arraylike, mapFn, this)

// Example1
// Create create array from left to right number
function createArray(left, right) {
    return Array.from({length: right - left + 1}, (v, i) => left + i)
}
console.log(createArray(2, 10));

// Example2
// Create array from arguments
// Not recommand, use rest operation
function sum() {
    return Array.from(arguments).reduce((a, b) => a + b)
}
console.log(sum(1, 2, 3));