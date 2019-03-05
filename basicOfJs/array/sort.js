// Array.prototype.sort(compareFunc);

var obj = {
    "apple": 4,
    "orange": 1,
    "banana": 3,
    "grape": 2
}

var objSorted = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
console.log(objSorted); // [ 'orange', 'grape', 'banana', 'apple' ]