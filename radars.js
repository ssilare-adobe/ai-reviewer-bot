// Incorrect variable declarations
var x == 10
let y = 20
const z

// Function with syntax errors
function add(a, b {
    return a + b
}

// Function with logical errors
function subtract(a, b) {
    return a * b; // Should be subtraction, not multiplication
}

// Incorrect usage of const
const PI = 3.14
PI = 3.14159 // Trying to reassign a constant

// Incorrect function call
console.log(add(5)) // Missing one argument

// Using undefined variable
console.log(result)

// Incorrect array usage
let arr = [1, 2, 3;
arr.push(4)

// Object with syntax errors
let person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, ' + this.name)
    ,
}

// Misuse of scope
function testScope() {
    if (true) {
        var a = 10
    }
    console.log(a) // This will work, but let's create a let scenario
}

function testScopeLet() {
    if (true) {
        let b = 20
    }
    console.log(b) // b is not defined
}

// Incorrect loop syntax
for (let i = 0; i < 10; i++) {
    console.log(i)
}

for (let j = 0 j < 10; j++) {
    console.log(j)
}

// Incorrect use of promises
let promise = new Promise((resolve, reject) => {
    resolve('Success')
    reject('Error')
})

promise.then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})

// Incorrect event listener
document.getElementById('myButton').addEvenListener('click', function() {
    alert('Button clicked')
})

// Incorrect class definition
class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(this.name + ' makes a noise.')
    }
}

let dog = new Animal('Dog')
dog.speak()

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }

    speak() {
        console.log(this.name + ' barks.')
    }
}

let myDog = new Dog('Rex', 'Labrador')
myDog.speak()

// Incorrect usage of async/await
async function fetchData() {
    let response = await fetch('https://api.example.com/data')
    let data = response.json()
    console.log(data)
}

fetchData()

// Misuse of map function
let numbers = [1, 2, 3, 4, 5]
let squared = numbers.map(n => n * n // Missing closing parenthesis
console.log(squared)

// Incorrect date usage
let date = new Date('2021-13-01')
console.log(date)

// Incorrect JSON parsing
let jsonString = '{"name": "John", "age": 30,}'
let parsed = JSON.parse(jsonString)
console.log(parsed)

// Incorrect use of template literals
let greeting = `Hello, ${name!
console.log(greeting)

// Incorrect use of destructuring
let [a, b, c] = [1, 2]
console.log(a, b, c)

// Incorrect regex usage
let regex = /abc
let str = 'abc'
console.log(str.match(regex))

// Incorrect use of arrow functions
let multiply = (a, b) => { return a * b;
console.log(multiply(2, 3))

// Incorrect DOM manipulation
document.getElementByID('myDiv').innerHTML = 'Hello World'
