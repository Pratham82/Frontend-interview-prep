console.log(
  "==============================\nSection: 10 Closures Interview questions \n=============================="
)

// function x() {
//   var i = 1
//   setTimeout(() => {
//     console.log(i) // logs 1 after 1 second
//   }, 1000)
//   console.log("Hello") // logs immediately
// }

// x()

// why this don't work ?
/*

* Explanation

This happens because of how JavaScript closures and the var keyword work.
Step-by-step explanation
The variable i is declared with var, so it has function scope (not block scope).
1. The setTimeout callback is a closure that captures the reference to i, not its value at the time the callback was created.
2. By the time any of the setTimeout callbacks run (after the loop finishes), the loop has already completed and i is now 6.
3. Each callback logs the current value of i, which is 6. But since the loop runs from 1 to 5, you see 6 logged five times (not 5).

Example output:
How to fix it
Use let instead of var to give i block scope, so each callback captures its own value of i:

Now, each callback logs 1, 2, 3, 4, 5 as expected.

Gotcha
Using var in loops with asynchronous code often leads to this kind of bug.
Always prefer let or const for block-scoped variables in modern JavaScript.
*/
TODO: Code
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000)
  }
}

/*
* Explanation 

This works because of **closures** and the use of an **Immediately Invoked Function Expression (IIFE)** with an arrow function.

### Step-by-step explanation

- The loop uses `var i`, which is function-scoped. Normally, if you used `setTimeout` directly inside the loop, all callbacks would log the final value of `i` (which would be 6 after the loop ends).
- To capture the current value of `i` for each iteration, the code wraps the `setTimeout` in an IIFE: `;(i => { ... })(i)`.
- This IIFE takes the current value of `i` as an argument and creates a new scope for each iteration.
- The arrow function inside `setTimeout` forms a closure over the parameter `i` of the IIFE, preserving its value at the time the IIFE was called.
- As a result, each `setTimeout` callback logs the correct value (1, 2, 3, 4, 5) at 1s, 2s, 3s, 4s, and 5s intervals.

### Key concept

**Closure** allows the inner function (the arrow function in `setTimeout`) to "remember" the value of `i` from when the IIFE was executed.

### Gotcha

If you removed the IIFE and just did:

```javascript
for (var i = 1; i <= 5; i++) {
  setTimeout(() => console.log(i), i * 1000)
}
```

All outputs would be `6`, because the callbacks reference the same `i` variable, which ends up as `6` after the loop.

### Suggestion

If you use `let` instead of `var`, you don't need the IIFE, because `let` is block-scoped:

```javascript
for (let i = 1; i <= 5; i++) {
  setTimeout(() => console.log(i), i * 1000)
}
```

This also works as expected. because let has block scope
*/
function x() {
  for (var i = 1; i <= 5; i++) {
    ;(i => {
      setTimeout(() => {
        console.log(i)
      }, i * 1000)
    })(i)
  }
}

// function x() {
//   for (let i = 1; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i)
//     }, i * 1000)
//   }
// }

x()
