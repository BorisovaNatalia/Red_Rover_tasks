function codeWithKey(shiftKey, str) {
    shiftKey %= 26;
    return str.split("").map(a => String.fromCharCode(a.charCodeAt(0) + shiftKey)).join("");

}

function deCodeWithKey(shiftKey, str) {
    shiftKey %= 26;
    return str.split("").map(a => String.fromCharCode(a.charCodeAt(0) - shiftKey)).join("");

}

console.log(codeWithKey(27, "You are the best QA ever"))
console.log(deCodeWithKey(3, codeWithKey(3, "abcde")))