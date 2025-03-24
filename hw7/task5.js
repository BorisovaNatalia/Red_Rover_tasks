const { faker } = require('@faker-js/faker');
const genres = [
    "Fantasy", "Science Fiction", "Mystery", "Thriller", "Romance",
    "Horror", "Historical Fiction", "Non-fiction", "Biography", "Self-help"
];

function Book(author, bookName, isbn, year, genre, countPages, popularityRait, firstSentence) {
    this.isbn = (isbn === undefined) ? faker.commerce.isbn() : isbn;
    this.bookName = (bookName === undefined) ? faker.commerce.productName() : bookName;
    this.author = (author === undefined) ? faker.person.fullName() : author;
    this.year = (year === undefined) ? faker.number.int({ min: 1800, max: 2025 }) : year;
    this.genre = (genre === undefined) ? faker.helpers.arrayElement(genres) : genre;
    this.countPages = (countPages === undefined) ? faker.number.int({ min: 10, max: 1025 }) : countPages;
    this.popularityRait = (popularityRait === undefined) ? faker.number.int({ min: 1, max: 5 }) : popularityRait;
    this.firstSentence = (firstSentence === undefined) ? faker.lorem.words(3) : firstSentence;
}
const kingCollection = [];
const twenCollection = [];
const puskinCollection = [];

for (let i = 0; i < 5; i++) {
    kingCollection.push(new Book("Stivin King"));
    twenCollection.push(new Book("Mark Twen"));
    puskinCollection.push(new Book("Alexandr Pushkin"));
}
const library = [...kingCollection, ...twenCollection, ...puskinCollection];
//library.forEach((e) => { console.log(e.bookName, e.author, e.popularityRait) });
const authorSet = new Set(library.map((e) => e.author));

authorSet.forEach((author) => console.log(library.filter(book => book.author === author)
    .sort((a, b) => b.popularityRait - a.popularityRait)[0].bookName));

library.sort((a, b) => b.year - a.year);
library.forEach((e) => { console.log(e.bookName, e.author, e.year) });

