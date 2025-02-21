function printRomb(first, last) {
    sum = 0;
    for (let i = first; i <= last; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printRomb(2, 8);