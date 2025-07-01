console.log(
  "==============================\nSection: 10 Closures Demo\n=============================="
)

// function x() {
//   var a = 199
//   function y() {
//     console.log(a)
//   }
//   return y
// }

// closure with variable change
// function x() {
//   var a = 199
//   function y() {
//     console.log(a)
//   }
//   a = 299
//   return y
// }

// multi function closure
function outermost() {
  var a = 199
  function outer() {
    var b = 299
    function inner() {
      console.log(a, b)
    }
    // return inner
    inner()
  }
  // return outer
  outer()
}
outermost()

// function x() {
//   const a = 199
//   return function y() {
//     console.log(a)
//   }
// }

// const z = x()
// console.log(z)
// z()
