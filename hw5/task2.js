function buildTriangle(maxNumber) {
    if (maxNumber < 0) {
        console.log("Wrong parameter");
        return -1;
    }
    const result = [];
    for (let j = maxNumber; j >= 1; j--) {
        baseString = "1";
        for (let i = 2; i <= j; i++) {
            baseString = i + " " + baseString + " " + i;
        }
        result.push("  ".repeat(maxNumber - j) + baseString);
        if (j < maxNumber) { result.unshift("  ".repeat(maxNumber - j) + baseString) }
    }
    result.forEach(a => console.log(a));

}

buildTriangle(19);

