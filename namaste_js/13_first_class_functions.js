// dummy() // Executes since dummy is stored while memory creation phase
// dummy2() // TypeError b is no a function
// * Function statement aka Function Declaration
function dummy() {
  console.log('dummy called')
}

// * Function expression
var dummy2 = function () {
  console.log('dummy 2 called')
  return 'dummy2'
}

// * Anonymous Function
/**
 function(){

 }
 */

// * Named function expression
const dummy3 = function newDummy() {
  console.log('newDummy called')
}

dummy3()
// newDummy() // ReferenceError: newDummy is not defined

// Difference Parameters and Arguments
const dummy4 = function ({ parameter1, parameter2 }) {
  console.log({ parameter1, parameter2 })
}

dummy4({ parameter1: 'argument 1', parameter2: 'argument 2' }) // the values which are being passed

// * First class functions in JS
// * The ability to use functions as values, and can be passed as arguments to another functions and can be returned from the functions this ability is known as first class functions

function testFunction() {
  console.log('Test function logged')
}

const functionRunner = function (param) {
  return param
}

const val = functionRunner(testFunction)
val()
