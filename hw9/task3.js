"use strict";
const { faker } = require('@faker-js/faker');
const majors = ["Computer Science", "Business Administration", "Mechanical Engineering", "Psychology"];
const baseHourSalary = 20;
const weeksInYear = 52;

class Person {
    #gender;
    constructor(firstName, lastName, age, gender, ocupation) {
        if (new.target === Person) {
            throw new Error("Нельзя создать экземпляр абстрактного класса");
        }
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.#gender = gender;
        this.ocupation = ocupation;
    }

    get gender() {
        return this.gender;
    }

    printFullNameAndOcupation() {
        console.log(this.firstName + " " + this.lastName + " " + this.ocupation)
    }
}

class SchoolEmployee extends Person {
    #salaryPerYear;
    constructor(firstnName, lastName, age, gender, title, salaryPerYear) {
        if (new.target === Person) {
            throw new Error("Нельзя создать экземпляр абстрактного класса");
        }
        super(firstnName, lastName, age, gender, title);
        this.title = title;
        this.#salaryPerYear = salaryPerYear;
    }

    get salary() {
        return this.#salaryPerYear;
    }
}

class Teacher extends SchoolEmployee {
    constructor(firstnName = faker.person.firstName(), lastName = faker.person.lastName(), age = faker.number.int({ min: 10, max: 99 }),
        gender = faker.person.gender(), hoursPerWeek = faker.number.int({ min: 10, max: 40 })) {
        super(firstnName, lastName, age, gender, "Teacher", baseHourSalary * hoursPerWeek * weeksInYear);
    }
}

class Decan extends SchoolEmployee {
    static salaryCoeff = 2;
    constructor(firstnName = faker.person.firstName(), lastName = faker.person.lastName(), age = faker.number.int({ min: 10, max: 99 }),
        gender = faker.person.gender(), hoursPerWeek = faker.number.int({ min: 10, max: 40 })) {
        let decanSalary = baseHourSalary * hoursPerWeek * Decan.salaryCoeff * weeksInYear;
        super(firstnName, lastName, age, gender, "Decan", decanSalary);
    }
    getBonus() {
        return this.salary / 12;
    }
}

class Director extends SchoolEmployee {
    static salaryCoeff = 3;
    static hoursPerWeek = 40;
    constructor(firstnName = faker.person.firstName(), lastName = faker.person.lastName(), age = faker.number.int({ min: 10, max: 99 }),
        gender = faker.person.gender()) {
        let directorsSalary = baseHourSalary * Director.hoursPerWeek * Director.salaryCoeff * weeksInYear;
        super(firstnName, lastName, age, gender, "Director", directorsSalary);
    }
    getBonus() {
        return this.salary / 6;
    }
}

class Student extends Person {
    constructor(firstnName = faker.person.firstName(), lastName = faker.person.lastName(), age = faker.number.int({ min: 10, max: 99 }),
        gender = faker.person.gender(), course = faker.number.int({ min: 1, max: 5 }),
        major = faker.helpers.arrayElement(majors), gpa = faker.number.float({ min: 0, max: 4, precision: 0.01 })) {

        super(firstnName, lastName, age, gender, "Student");
        this.course = course;
        this.major = major;
        this.gpa = gpa;
    }
}



const director = new Director();
console.log(director.salary);
console.log(director.getBonus());

const decans = new Array(3).fill(null).map(e => new Decan());
const teachers = new Array(12).fill(null).map(e => new Teacher());
const students = new Array(150).fill(null).map(e => new Student());

// director.printFullNameAndOcupation();
// decans.forEach(e => e.printFullNameAndOcupation());
// teachers.forEach(e => e.printFullNameAndOcupation());
// students.forEach(e => e.printFullNameAndOcupation());

let maxGpa = students.sort()[0].gpa;
students.filter(s => s.gpa === maxGpa).forEach(s => console.log(s.firstName + " " + s.lastName));
