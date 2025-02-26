function printTriangle(maxNumber) {
    if (maxNumber < 0) {
        console.log("Wrong parameter");
    }
    for (let j = maxNumber; j >= 0; j--) {
        baseString = "0";
        for (let i = 1; i <= j; i++) {
            baseString = i + " " + baseString + " " + i;
        }
        console.log("  ".repeat(maxNumber - j) + baseString);
    }

}

printTriangle(15);