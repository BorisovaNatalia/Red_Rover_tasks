function getCurString(currentCountOfStars, maxCountOfStars) {
    spaceSymb = " ";
    starSymb = "*";
    curSpaceCount = (maxCountOfStars - currentCountOfStars) / 2;
    return spaceSymb.repeat(curSpaceCount) + starSymb.repeat(currentCountOfStars) + spaceSymb.repeat(curSpaceCount);
}

function printRomb(maxCountOfStars) {
    if (maxCountOfStars < 3) {
        console.log("Not enought stars for romb.");
        return -1;
    }
    if (maxCountOfStars % 2 === 0) {
        console.log(`Max count of stars should be even. The ${--maxCountOfStars}-star will be printed.`);
    }

    for (let i = 1; i < maxCountOfStars; i += 2) {
        console.log(getCurString(i, maxCountOfStars));
    }

    for (let i = maxCountOfStars; i > 0; i -= 2) {
        console.log(getCurString(i, maxCountOfStars));
    }
}

printRomb(2);