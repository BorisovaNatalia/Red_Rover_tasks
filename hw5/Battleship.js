function markAsOk(i, j, field) {
    field[i][j] = 2;
    if (j < 9) {
        field[i][j + 1] = 2;
    }
    if (i < 9) {
        if (j > 0) { field[i + 1][j - 1] = 2; }
        field[i + 1][j - 1] = 2;
        if (j < 9) { field[i + 1][j + 1] = 2; }
    }
}

function checkShip(i, j, field, len, s) {
    if (len > 4) { return false; }
    let isFinal = true;
    if (i < 9) {
        if ((j > 0) && (field[i + 1][j - 1] === 1)) { return false; }
        if ((j < 9) && (field[i + 1][j + 1] === 1)) { return false; }
        if ((field[i + 1][j] === 1)) {
            isFinal = false;
            if ((j < 9) && (field[i][j + 1] === 1)) { return false; }
            if (!checkShip(i + 1, j, field, len + 1, s)) { return false; };
        }
    }
    if ((j < 9) && (field[i][j + 1] === 1)) {
        isFinal = false;
        if (!checkShip(i, j + 1, field, len + 1, s)) { return false };
    }
    markAsOk(i, j, field);
    if (isFinal) {
        if (s[len - 1] === 0) { return false; }
        s[len - 1]--;
    }
    return true;
}
function validateBattlefield(field) {
    // write your magic here
    const s = [4, 3, 2, 1]

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (field[i][j] === 1) {
                if (!checkShip(i, j, field, 1, s)) { return false }
            }
        }
    }
    return ((s[0] === 0) && (s[1] === 0) && (s[2] === 0) && (s[3] === 0))
}

const f = [
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

if (validateBattlefield(f)) {
    f.forEach(f => console.log(f));
}
