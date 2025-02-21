function minElementFromArray(array) {
    min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
let testArr = [4, 81, 3, -12, 99, 14];

console.log(minElementFromArray(testArr));