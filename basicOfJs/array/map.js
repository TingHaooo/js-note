let numbers = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callback) {
  // copy original array
  let copyArray = Array.prototype.slice.call(this);
  for (let i = 0; i < copyArray.length; i++) {
    copyArray[i] = callback(copyArray[i], i);
  }
  return copyArray;
}

let squareNumbers = numbers.map((item, index) => {
  return Math.pow(item, 2);
});

// print answer
console.log(squareNumbers);
