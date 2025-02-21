function checkBracketsPairs(inputStr) {
    let countOfSimpleRightBracket = 0;
    let countOfCurlyRightBracket = 0;
    for (let i = 0; i < inputStr.length; i++) {
        switch (inputStr[i]) {
            case "(":
                countOfSimpleRightBracket++;
                break;
            case ")":
                if (countOfSimpleRightBracket-- <= 0) {
                    return false;
                }
                break;
            case "{":
                countOfCurlyRightBracket++;
                break;
            case "}":
                if (countOfCurlyRightBracket-- <= 0) {
                    return false;
                }
                break;
        }
    }
    return (countOfSimpleRightBracket === 0) && (countOfCurlyRightBracket === 0);
}

testArr = ['(', ')', '(', ')', ')'];
console.log(checkBracketsPairs(testArr));