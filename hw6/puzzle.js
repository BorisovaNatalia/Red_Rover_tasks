function getSutableArr(currentLine) {
    result = [];
    for (let i = 0; i < currentLine.length; i++) {
        if (currentLine[i] === 0) { result.push(i); }
    }
    return result;
}
function checkColumn(puzzle, columnNum, targetValue) {
    for (let i = 0; i < 9; i++) {
        if (puzzle[i][columnNum] === targetValue) {
            return true;
        }
    }
    return false;
}

function checkSqr(puzzle, rowNum, columnNum, targetValue) {
    let fullSqrArr = getSqrtsArr(puzzle);
    let currentSqr = fullSqrArr[Math.floor(rowNum / 3)][Math.floor(columnNum / 3)];
    return currentSqr.includes(targetValue);
}
function getColumnsArr(puzzle) {
    let result = [];
    for (let i = 0; i < puzzle.length; i++) {
        let curentColumn = [];
        for (let j = 0; j < puzzle.length; j++) {
            curentColumn.push(puzzle[j][i]);
        }
        result.push(curentColumn);
    }
    return result;
}
function getSqrtsArr(puzzle) {
    let result = [];
    for (let i = 0; i < 3; i++) {
        let currentRow = [];
        for (let j = 0; j < 3; j++) {
            let currentSqr = [];
            currentSqr.push(puzzle[i * 3][j * 3]);
            currentSqr.push(puzzle[i * 3][j * 3 + 1]);
            currentSqr.push(puzzle[i * 3][j * 3 + 2]);

            currentSqr.push(puzzle[i * 3 + 1][j * 3]);
            currentSqr.push(puzzle[i * 3 + 1][j * 3 + 1]);
            currentSqr.push(puzzle[i * 3 + 1][j * 3 + 2]);

            currentSqr.push(puzzle[i * 3 + 2][j * 3]);
            currentSqr.push(puzzle[i * 3 + 2][j * 3 + 1]);
            currentSqr.push(puzzle[i * 3 + 2][j * 3 + 2]);
            currentRow.push(currentSqr);
        }
        result.push(currentRow);
    }
    return result;
}

function sudoku(puzzle) {
    let isFinished = false;
    while (!isFinished) {

        for (let i = 0; i < 9; i++) {
            for (let j = 1; j <= 9; j++) {
                if (!puzzle[i].includes(j)) {
                    let sutableSpaseArr = getSutableArr(puzzle[i]);
                    for (let k = 0; (sutableSpaseArr.length > 1) && (k < sutableSpaseArr.length); k++) {
                        if (checkColumn(puzzle, sutableSpaseArr[k], j) || checkSqr(puzzle, i, sutableSpaseArr[k], j)) {
                            sutableSpaseArr.splice(k, 1);
                            k--;
                            continue;
                        }
                    }
                    if (sutableSpaseArr.length === 1) {
                        puzzle[i][sutableSpaseArr[0]] = j;
                    }
                }
            }
        }

        let sqrtsArr = getSqrtsArr(puzzle);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let n = 1; n <= 9; n++) {
                    if (!sqrtsArr[i][j].includes(n)) {
                        let sutableSpaseArr = getSutableArr(sqrtsArr[i][j]);
                        for (let k = 0; (sutableSpaseArr.length > 1) && (k < sutableSpaseArr.length); k++) {
                            if (puzzle[i * 3 + Math.floor(sutableSpaseArr[k] / 3)].includes(n) ||
                                checkColumn(puzzle, j * 3 + (sutableSpaseArr[k] % 3), n)) {
                                sutableSpaseArr.splice(k, 1);
                                k--;
                                continue;
                            }
                        }
                        if (sutableSpaseArr.length === 1) {
                            puzzle[i * 3 + Math.floor(sutableSpaseArr[0] / 3)][j * 3 + (sutableSpaseArr[0] % 3)] = n;
                        }
                    }
                }
            }
        }
        isFinished = true;
        for (let i = 0; (i < puzzle.length) && isFinished; i++) {
            for (let j = 0; (j < puzzle[i].length) && isFinished; j++) {
                if (puzzle[i][j] === 0) { isFinished = false; }
            }
        }
    }
    return puzzle;
}


let puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]];



console.log(sudoku(puzzle).forEach(e => console.log(e)));
// 5 3 4 6 7 8 9 1 2
// 6 7 2 1 9 5 3 4 8
// 1 9 8 3 4 2 5 6 7
// 8 5 9 7 6 1 4 2 3
// 4 2 6 8 5 3 7 9 1
// 7 1 3 9 2 4 8 5 6
// 9 6 1 5 3 7 2 8 4
// 2 8 7 4 1 9 6 3 5
// 3 4 5 2 8 6 1 7 9
