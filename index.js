const arrObj = [
    {name: 'rakib', age: 20, gender: 'male'},
    {name: 'tamim', age: 22, gender:'male'},
    {name: 'sinthia', age: 19, gender: 'female'},
]

function filterFemale(arr){
    const arrWithoutFemale = arr.filter(item => item.gender.toLowerCase() !== 'female');
    const namesArray = arrWithoutFemale.map(item => item.name);
    console.log(namesArray)
}

filterFemale(arrObj);

const books = [
    {title: 'The Red Line', author: 'Mr. Green', year: 2000},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960},
    {title: '1984', author: 'George Orwell', year: 1949},
]

function bookTitlePrinter(bookArr){
    const bookTitle = bookArr.map(item => item.title);
    console.log(bookTitle)
}

bookTitlePrinter(books);


function squareNumber(number){
    return number*number;
}

function doubleNumber(number){
    return number*2;
}

function addFive(number){
    return number+5;
}

function combineFunc(number){
    return addFive(doubleNumber(squareNumber(number)))
}

console.log(combineFunc(5));


const cars = [
    {make: 'BMW', model: 'X5', year: 2020},
    {make: 'Ford', model: 'Mustang', year: 2015},
    {make: 'Tesla', model: 'Model S', year: 2021},
]

function sortCarByYear(carsArr){
    const sortedCars = carsArr.sort((a, b) => a.year - b.year);
    console.log(sortedCars)
}

sortCarByYear(cars);

const students = [
    {name: 'John', grades: [3, 3.5, 4, 4.5]},
    {name: 'Alice', grades: [2.5, 3, 3.5, 4]},
    {name: 'Bob', grades: [3.5, 4, 4.5, 4.5]},
]

function averageGrade(grades) {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

function sortStudentByAvgGrade(students) {
    const sortedStudents = students.sort((a, b) => averageGrade(b.grades) - averageGrade(a.grades));
    console.log(sortedStudents);
}

sortStudentByAvgGrade(students);