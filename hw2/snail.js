a = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
let size = a.length;
const rightBorder = [];
const leftBorder = [];
const innerArray = [];
for (let i = 1; i < size - 1; i++) {
    rightBorder.push(a[i][size - 1]);
    leftBorder.unshift(a[i][0]);
    innerArray.push(a[i].slice(1, size - 1));
}


console.log([...a[0], ...rightBorder, ...a[size - 1].reverse(), ...leftBorder]);
console.log(innerArray.flat());

let str = "MMCM"


let result = 0;
if (str.includes("CM")) {
    result += 900 + 1000 * str.indexOf("CM");
    str = str.replace("CM", "--");
}
console.log(result);