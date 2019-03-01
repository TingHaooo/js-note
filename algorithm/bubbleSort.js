Array.prototype.bubbleSort = function(sortingMethod) {
    for (let i = 0; i < this.length; i ++) {
        for (let j = 0; j < (this.length - i - 1); j++) {
            console.log(this[j]);
            if (sortingMethod(this[j], this[j + 1])) {
                // swap
                [this[j], this[j+ 1]] = [this[j + 1], this[j]];
            }
        }
    }
    return this
};

// test
var arr = [4, 3, 2, 8, 9, 1];
console.log(arr.bubbleSort((a, b) => a > b)); // return [1, 2, 3, 4, 8, 9]