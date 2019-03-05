// splice(start[, deleteCount[, item1[, item2[, ...]]]])

// start - start point
// deleteCount(optional)
// item(optional)
// return "the array of elements being deleted"

var months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months.splice(1, 1, "New Feb")); // delete "Feb", add "New Feb"
console.log(months); // ["Jan", "New Feb", "Mar", "Apr"];

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice(2)); // delete [3, 4, 5], deleteCount equals to length to the end
console.log(numbers); // [1, 2]
