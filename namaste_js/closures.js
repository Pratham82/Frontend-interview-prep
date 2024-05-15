/**
 * * Closure: function along with it's lexical scope bundled together forms a closure
 *
 */

/**
 * The function x() returns the inner function y().
We assign the result of x() (which is y()) to the variable closureExample.
We then call closureExample(), which still has access to the variable a due to closure, and it logs 7
 * 
*/
// function x() {
//   var a = 7
//   function y() {
//     console.log(a)
//   }
//   return y // Returning the inner function y
// }

// var closureExample = x() // Now closureExample holds the function y
// closureExample() // This will log 7

function outest() {
  var c = 90
  function outer(b) {
    function inner() {
      console.log({ a, b, c })
    }

    // let a = 80
    return inner
  }
  return outer
}

let a = 100 // If the reference of a is not found in the whole lexical scope of parent function then, this value of will be considered and logged
// value of a is not present anywhere then it will be reference error since a is not defined anywhere

const exec = outest()('outerParams')
exec()
