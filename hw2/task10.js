function printTriangle(maxCountOfNumber) {
    if (maxCountOfNumber < 0) {
        console.log("Not enought number for triangle.");
        return -1;
    }
    for (let i = maxCountOfNumber; i >= 0; i--) {
        curStr = "";
        for (let j = 0; j <= i; j++) {
            curStr += j;
        }
        console.log(curStr);
    }
}

printTriangle(9);