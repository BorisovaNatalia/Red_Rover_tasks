function maxElementFromArray(array) {
    max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
let testArr = [4, 81, 3, -12, 99, 14];
console.log(maxElementFromArray(testArr));