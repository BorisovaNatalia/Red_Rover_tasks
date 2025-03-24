function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

let word = "ABAB";
const countInWord = new Map();
const countThatLess = new Map();
const wordArr = word.split("");
const letterSet = [...new Set(wordArr)].sort();

let result = 0;
for (let i = 0; i < wordArr.length - 1; i++) {
    let currentLetter = wordArr[i];
    let tailStr = wordArr.slice(i + 1);
    let sortedLettersSetOfTailStr = [...new Set(tailStr)].sort();
    for (let j = 0; sortedLettersSetOfTailStr[j] < currentLetter; j++) {
        currentCombinationCount = factorial(tailStr.length);
        let tailStrWithSwithedLetters = Array.from(tailStr);
        tailStrWithSwithedLetters[tailStr.indexOf(sortedLettersSetOfTailStr[j])] = currentLetter;
        const s = [...new Set(tailStrWithSwithedLetters)];
        for (let k = 0; k < s.length; k++) {
            let count = tailStrWithSwithedLetters.reduce((sum, n) => {
                if (n == s[k]) { sum++ };
                return sum;
            }, 0);
            currentCombinationCount /= factorial(count);

        }
        result += currentCombinationCount;
    }
}
console.log(result);