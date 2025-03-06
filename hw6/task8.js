function getLongWords(strArr) {
    return strArr.filter(s => s.length > 5);
}

let longWordArr = getLongWords(["123456,", "123", "000000000"]);
longWordArr.forEach(e => console.log(e));

