function getSumOfNumbers(arr) {
    return arr.filter(e => (typeof e === "number") && (!isNaN(e))).reduce((sum, e) => sum + e, 0);
}

console.log(getSumOfNumbers(["12", -1, NaN, 123, -50, "123", "000000000"]));
