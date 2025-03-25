class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    sayFullName() {
        return this.firstName + " " + this.lastName;
    }

    static greetExtraTerrestrials(raceName) {
        return `Welcome to the Planet Earth, ${raceName}`;
    }
}
console.log(Person.greetExtraTerrestrials("Bruno"));
let newMan = new Person();
console.log(newMan.sayFullName());