
// 1. Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.




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


// 2. Task: Object Manipulation

// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.


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



// 3. Task: Function Composition

// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.


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




// 4. Task: Sorting Objects

// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.



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




// 05. Task: Advanced Sorting

// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.


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