var multipleArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

Array.prototype.myReduce = function(callback, init) {
  if (this.length === 0) throw "Reduce array shold not be empty";
  let result = init ? init : this[0];
  let i = init ? 0 : 1;
  for (; i < this.length; i++) {
    result = callback(result, this[i]);
  }
  return result;
}

var combineArray = multipleArrays.myReduce((a, b) => a.concat(b), []); // 10 + 100
console.log(combineArray);
