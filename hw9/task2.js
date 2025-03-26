"use strict";

class User {
    #password;
    #isDeleted;
    constructor(userName) {
        this.userName = userName;
        this.#isDeleted = false;
    }

    get isDeleted() {
        return this.#isDeleted;
    }

    _makeDeleted() {
        this.#isDeleted = true;
    }
    #updatePassword(newPassword) { this.#password = newPassword; }
    resetPassword(newPassword) { this.#updatePassword(newPassword); }
}

class Admin extends User {
    constructor(adminName) {
        super(adminName);
        this.isAdmin = true;
    }
    deleteUser(userToDelete) {
        if (userToDelete instanceof User) {
            userToDelete._makeDeleted();
        }
        else {
            console.log("в метод deleteUser в качестве параметра передан не User");
        }
    }
}

let user = new User("Vasilii");
let admin = new Admin("Petr");

user.resetPassword("newPass");
admin.deleteUser(user);
console.log(user.isDeleted);
let result = [user, admin];