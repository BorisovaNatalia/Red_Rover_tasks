function getCountOfDays(hightOfWall, upStep, downStep) {
    function goUp(upStep) {
        currentLevel += upStep;
    }

    function goDown(downStep) {
        countOfDay++;
        currentLevel -= downStep;
    }

    if (upStep <= downStep) {
        return -1;
    }
    currentLevel = 0;
    countOfDay = 0;
    while (currentLevel < hightOfWall) {
        goUp(upStep)
        if (currentLevel >= hightOfWall) {
            return countOfDay;
        }
        else {
            goDown(downStep);
        }
    }
}

console.log(getCountOfDays(5, 3, 2));