// commafy str
function commafy(number) {
    return(
        number 
        && 
        number
            .toString()
            .replace(/(\d)(?=(\d{3})+\.)/g, (chr) => chr + ",")
    );
}

// Test
console.log(commafy(12345.890));// "12,345.890";
console.log(commafy(1234567.123));// "1,234,567.123"