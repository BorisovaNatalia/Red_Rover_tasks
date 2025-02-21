function printTriangle(maxCountOfStars) {
    if (maxCountOfStars < 1) {
        console.log("Not enought stars for triangle.");
        return -1;
    }
    for (let i = 1; i < maxCountOfStars; i += 2) {
        console.log("*".repeat(i));
    }
}

printTriangle(7);