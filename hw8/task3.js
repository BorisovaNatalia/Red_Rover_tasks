class Employee {
    constructor(name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }

    get age() {
        return this._age;
    }

    get position() {
        return this._position;
    }

    get salary() {
        return this._salary;
    }

    set age(newAge) {
        this._age = newAge;
    }

    set position(newPosition) {
        this._position = newPosition;
    }

    set salary(newSalary) {
        this._salary = newSalary;
    }

}

let e = new Employee("N", 10, "P", 100);
console.log(e.name);
console.log(e._age);
console.log(e._position);
console.log(e._salary);

e._age = 12;
e._position = "R";
e._salary = 200;

console.log(e.name);
console.log(e._age);
console.log(e._position);
console.log(e._salary);
