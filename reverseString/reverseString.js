const reverseString = function(string) {
    let array = Array.from(string);
    let arrayReversed = "";
    for(let i=array.length-1; i>=0; i--){
        arrayReversed += array[i];
    }
    return arrayReversed;
}

module.exports = reverseString
