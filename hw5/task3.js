function printTriangle(countOfRow) {
    if (countOfRow < 0) {
        console.log("Wrong parameter");
    }
    let counter = 1;
    for (let i = 0; i < countOfRow; i++) {
        baseString = "" + counter++;
        for (let j = 1; j <= i; j++) {
            baseString += " " + counter++;
        }
        console.log(baseString);
    }

}

printTriangle(7);