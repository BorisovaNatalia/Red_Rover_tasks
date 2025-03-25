"use strict";

class Song {
    constructor(name, author) {
        this._name = name;
        this._author = author;
    }

    get author() {
        return this._author;
    }

    set author(writer) {
        this._author = writer;
    }
}

let sadSong = new Song("cry", "NN");
sadSong._author = "NewMan";
console.log(sadSong._author);

