/**
 * * Polyfills in JS *
 */

// *********************************************/
//** Polyfills                                 */
// *********************************************/

const arr = [1, 2, 3, 4, 5]

// * Map
// * arr.map((value, index, array))
Array.prototype.myMap = function (callback) {
  let finalArr = []
  for (let i = 0; i < this.length; i++) {
    finalArr.push(callback(this[i], i, this))
  }
  return finalArr
}

const mul3 = arr.myMap(val => val * 3)
console.log('🚀 ~ mul3:', mul3)

// * Filter
// * arr.filter((value, index, array))
Array.prototype.myFilter = function (callback) {
  let finalArr = []
  for (let i = 0; i < this.length; i++) {
    // check if the condition evaluates to true,
    if (callback(this[i], i, this)) {
      //if it does then push element in final array
      finalArr.push(this[i])
    }
  }
  return finalArr
}

const greaterThan3 = arr.myFilter(val => val > 3)
console.log('🚀 ~ greaterThan3:', greaterThan3)

console.log({ arr })

// * Reduce
// * arr.reduce((accumulator, currentElement, index) => {}, initialValue)
Array.prototype.myReduce = function (callback, initialValue) {
  // initialize accumulator with initialValue
  let accumulator = initialValue

  //iterate over the array
  for (let i = 0; i < this.length; i++) {
    // check if the accumulator is truthy(if the initial value is passed with the callback)
    // if it's present then use accumulator or use the first element in array
    accumulator = accumulator
      ? callback(accumulator, this[i], i, initialValue)
      : this[i]
  }
  return accumulator
}

// const sumOfArr = arr.reduce((prev, curr, i) => prev + curr, 0)
const sumOfArr = arr.myReduce((prev, curr, i) => prev + curr, 0)
console.log('🚀 ~ sumOfArr:', sumOfArr)

// const mulBy2 = arr.map(val => val * 2)

// console.log('🚀 ~ mulBy2:', mulBy2)
// console.log('🚀 ~ arr:', arr)

// ** Slice and splice
// const slicedArr = arr.slice(2) // Slice will create a new copy of an array
// console.log('🚀 ~ slicedArr:', slicedArr)
// console.log('🚀 ~ arr:', arr)
// const splicedArr = arr.splice(2, 1) // This will mutate the array
// console.log('🚀 ~ splicedArr:', splicedArr)
// console.log('🚀 ~ arr:', arr)

// *********************************************/
//** map, filter and reduce OP based questions */
// *********************************************/

// * Question 1 - return only name of the students in capital
let students = [
  { name: 'John', rollNumber: 101, marks: 85 },
  { name: 'Emily', rollNumber: 102, marks: 92 },
  { name: 'David', rollNumber: 103, marks: 78 },
  { name: 'Sarah', rollNumber: 104, marks: 90 },
  { name: 'Michael', rollNumber: 105, marks: 88 },
  { name: 'Jessica', rollNumber: 106, marks: 95 },
  { name: 'Daniel', rollNumber: 107, marks: 82 },
  { name: 'Emma', rollNumber: 108, marks: 89 },
  { name: 'Christopher', rollNumber: 109, marks: 75 },
  { name: 'Olivia', rollNumber: 110, marks: 94 },
]

let result = students.map(({ name }) => name.toUpperCase())

// * Question 2 - return only name of the students who score more than 90
result = students.filter(({ marks }) => marks > 90).map(({ name }) => name)

// * Question 3 - return the sum of the marks
result = students.reduce((acc, { marks: currMarks }) => acc + currMarks, 0)
console.log('🚀 ~ result:', result)
