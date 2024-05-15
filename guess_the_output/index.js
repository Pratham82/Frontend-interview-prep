/*
console.log(typeof undefined) // "undefined"
console.log(typeof null) // "object"
console.log(typeof true) // "boolean"
console.log(typeof 42) // "number"
console.log(typeof 'Hello') // "string"
console.log(typeof Symbol('foo')) // "symbol"
console.log(typeof function () {}) // "function"
console.log(typeof {}) // "object"
console.log(typeof []) // "object"
console.log(typeof new Date()) // "object"
console.log(typeof /regex/) // "object"
console.log(typeof new Map()) // "object"
console.log(typeof new Set()) // "object"
*/

function foo() {
  // 'use strict'
  // prettier-ignore
  let a = b = 0
  a++
}

foo()

// without strict
console.log(typeof a) // undefined
console.log(typeof b) // number

// with strict
console.log(typeof a) // undefined
console.log(typeof b) // ReferenceError: b is not defined

// soln: https://chat.openai.com/share/73c06aec-d9e4-40fc-b653-414dc3348e67

for (var i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}

/**
 * When the setTimeout function is called inside the loop, it creates a closure over the variable i. However, the callback function inside setTimeout does not execute immediately; it is scheduled to run after 1000 milliseconds.
 *
 * By the time the callback function runs, the loop has already completed and the value of i is 4 because the loop condition i < 4 evaluates to false, and the loop stops. Since the callback functions share the same closure over i, they all access the same variable i, which holds the final value of 4 when they execute.
 */

// 5 5 5 5 5
//

//* Fixing this without let: using closures

for (var i = 0; i < 4; i++) {
  // * here the value of i will not be taken from same memory space, instead of that it will be taken from new copy of i
  function closure(val) {
    setTimeout(function () {
      console.log(val)
    }, 1000)
  }
  closure(i)
}

//* Fixing this without let: with IFFIE

for (var i = 0; i < 4; i++) {
  // * here the value of i will not be taken from same memory space, instead of that it will be taken from new copy of i with the iffie
  ;(newI => {
    setTimeout(function () {
      console.log(newI)
    }, 1000)
  })(i)
}

//* Fixing  this with le
for (let i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}

// 0 1 2 3

const arr = [1, 2, 3, 4, 5]
const arr2 = ['prathamesh', 'test', '889', 4, 5, { a: '000' }]
const obj = { ...arr2 }

const promise = new Promise(res => res(2))

/*
promise
  .then(v => {
    console.log(v)
    return v * 2
  })
  .then(v => {
    console.log(v)
    return v * 2
  })
  .finally(v => {
    console.log({ msg: 'finally', v }) //  * finally value will be always undefined, even if promise is fulfilled or rejected
    return 0
  })
  .then(v => {
    console.log(v)
  })
*/

// for (let i in arr3) {
//   console.log(i)
// }

// for (let i of arr3) {
//   console.log(i)
// }
// const arr3 = [3, 4, 5, 6]

// arr3.foo = 'Hi'
// console.log(arr3)
