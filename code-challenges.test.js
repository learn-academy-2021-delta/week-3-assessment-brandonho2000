// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// describe('fibonacci sequence', () => {
//     test('takes in a number and outputs the fib sequence', () => {
//       expect(fib(6)).toEqual([1, 1, 2, 3, 5, 8])
//       expect(fib(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//     })
//   })
  
  // b) Create the function that makes the test pass.
  // i create a for loop to run through the fib sequence that loops back arround the length of the array
  // i set the start length at 1 and 1
  // the sequence addds the last number to the next 2 numbers
  

  const fib = (array) => {
    let start = [1,1]
    for (let i=2; i<array; i++){ 
      start.push((start[(start.length - 1)]) + (start[(start.length - 2)]))
    }
    return start
  }
  
//   console.log(fib(6))




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// i created a a for loop to run thorugh the arrays and filter all non numbers and even numbers out of the array.
// i gather all the odd numbers and sort them using .sort for smallest to largest numnbers.


var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe('sort the array into numbers and least to greatest', (array) => {
    test('sort the arrays', () =>{
        expect(oddArray(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddArray(fullArr2)).toEqual([-823, 7, 23])
    })
})
// sweet. it failed.
// b) Create the function that makes the test pass.
const oddArray = (array) => {
    let newArray = []
    for(let i=0; i<array.length; i++){
        if(typeof array[i] === "number" && array[i]% 2 !== 0 ){
        newArray.push(array[i])
      }
}
return newArray.sort((a, b) => a - b)
}

// console.log(oddArray(fullArr1))

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe('takes each number of an array and adding it to the next number and outputting it', () => {
    test('if each number added to the next will equal to the next item in the output', ()=>{
        expect(addNums(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(addNums(numbersToAdd2)).toEqual([0, 7, -8, 12])
        expect(addNums(numbersToAdd3)).toEqual([])
    })
})


// b) Create the function that makes the test pass.

// const addNums = (array) => {
    let newArr1 = []
    // for(let i=0; i<array.length; i++){
        if(numbersToAdd1[0] === "number"){
           return array[i][0], array[i][0] + array[i][1], array[i][0] + array[i][1] + array[i][2], array[i][0] + array[i][1] + array[i][2] + array[i][3], newArr1.push(array[i])
            
        }else{
         []
        }
    // }
    return newArr1
// }

    
    //i created a for loop to itterate throught the entore length of the array.
    // i set the function to loop through the array and add state teh first number, then the first and second, then first second and third, etc.
    // i believe my code would Work, but i couldnt figure out my return statement 