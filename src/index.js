module.exports = function reverse (n) {
    let array = Array.from(String(n));
    if(array[0] === '-') {
        array.splice(0, 1);
    }
    if(array[array.length-1] === '0') {
        array.splice(array.length - 1, 1)
    }
    let result = array.reverse().join("")
    return Number(result)
}
