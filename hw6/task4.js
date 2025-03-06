function getGreetings() {
    return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
}

getGreetings().forEach(e => console.log(e));

let fun = function () {
    return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
}

console.log(fun());

console.log([""].map(e => ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"])[0]);
