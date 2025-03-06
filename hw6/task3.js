function calculate(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return NaN;
    }

}
console.log(calculate(1, 2, "+"));
console.log(calculate(1, 2, "-"));
console.log(calculate(1, 2, "*"));
console.log(calculate(1, 2, "/"));