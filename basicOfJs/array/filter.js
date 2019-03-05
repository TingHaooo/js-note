let numbers = [1, 2, 3, 4, 5, 6];

Array.prototype.myFilter = function(callback) {
  // this point to instance of number (ex: numbers)
  let filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) filteredArray.push(this[i])
  }
  return filteredArray;
}

var evenNumbers = numbers.myFilter((item, index, array) => {
  // keep number if is even
  return (array[index] % 2 === 0);
});

console.log(evenNumbers); // [2, 4, 6]
