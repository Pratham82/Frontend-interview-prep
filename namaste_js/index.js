// *********************************************/
//** 9. Block Scope & Shadowing in JS          */
// *********************************************/

/*
{
  var a = 10
  let b = 100
  const c = 1000
}

console.log(a)
*/
// console.log(b) // Reference Error since variable declare with let is block scoped
// console.log(c) // Reference Error since variable declare with const is block scoped

// ** Shadowing
var a = 100
{
  var a = 10 /*
  this declaration will also change the global value of a, 
  so after any point if the a is
   */
  console.log(a)
}

console.log(a)

/*

let b = 100
{
  var b = 200 // SyntaxError: Identifier 'b' has already been declared
  console.log(b)
}

*/
