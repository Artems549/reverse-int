module.exports = function reverse (n) {
    let array = Array.from(String(n), Number);
    let result = array.reverse().join("")
    return Number(result)
}
