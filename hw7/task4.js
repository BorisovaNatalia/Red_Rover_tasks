let developers = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
    { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
    { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
    { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
    { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
    { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
    { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
];
console.log(developers.filter(e => e.language === "JavaScript").length > 0 ? "yes" : "no");