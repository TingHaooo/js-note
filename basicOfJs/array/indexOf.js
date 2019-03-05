// Implement array.prototype.indexOf

Array.prototype.myIndexOf = function (target, startIndex) {
    let i = startIndex || 0;
    for (i; i < this.length; i++) {
        if (this[i] === target) return i;
    }
}

// test
let arr = [1, 2, 3, 4, 1];
console.log(arr.myIndexOf(1)); // return 0
console.log(arr.myIndexOf(1, 1)); // return 4