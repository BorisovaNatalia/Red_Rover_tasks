function printRomb(hightOfWall, upPerDay, downPerNight) {
    if (upPerDay <= downPerNight) {
        return -1;
    }
    currentLevel = 0;
    countOfDay = 0;
    while (currentLevel < hightOfWall) {
        currentLevel += upPerDay;
        if (currentLevel >= hightOfWall) {
            return countOfDay;
        }
        else {
            countOfDay++;
            currentLevel -= downPerNight;
        }

    }
}

console.log(printRomb(5, 3, 2));