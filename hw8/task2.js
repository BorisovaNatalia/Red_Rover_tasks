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

let square = new Shape("square", 4, 5);
square.calcPerimeter();

let triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();