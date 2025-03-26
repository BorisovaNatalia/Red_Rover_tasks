"use strict";

class Shape {
    constructor(name, sides, sideLength) {
        this._name = name;
        this._sides = sides;
        this._sideLength = sideLength;
    }

    calcPerimeter() {
        console.log(`The perimeter is ${this._sides * this._sideLength}`);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super("squre", 4, sideLength);
    }
    calcArea() {
        return this._sideLength * this._sideLength;
    }
}

let square = new Square(5);
square.calcPerimeter();
console.log(square.calcArea());

let triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();