function checkBracketPairs(inputStr) {
    let res = true;
    let countOfOpenedRightBracket = 0;
    for (let i = 0; i < str.lenght; i++) {
        switch (inputStr) {
            case "(":
                countOfOpenedRightBracket++;
                break;
            case ")":
                if (countOfOpenedRightBracket <= 0) {
                    return false;
                }
                else {
                    countOfOpenedRightBracket--;
                }
        }
    }
    return countOfOpenedRightBracket === 0;

}

console.log("123");