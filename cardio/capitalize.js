// Input a string and return capitalize string
function capitalize(str) {
    return (
       str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
        .join(" ")
    )
}

// test
console.log(capitalize("i love javasctipt")) // return I Love Javascript
