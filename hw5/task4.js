function printTriangle(countOfRow) {
    if (countOfRow < 0) {
        console.log("Wrong parameter");
    }

    for (let i = 1; i <= countOfRow; i++) {
        baseString = "" + i;
        let nextNumber = i;
        for (let j = 2; j <= i; j++) {
            nextNumber += countOfRow - j + 1;
            baseString += " " + nextNumber;
        }
        console.log(baseString);
    }

}

printTriangle(15);