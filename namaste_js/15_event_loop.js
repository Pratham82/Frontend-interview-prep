//
/**
 * * Web APIs
 * 1. setTimeout()
 * 2. DOM APIs
 * 3. fetch()
 * 4. localStorage()
 * 5. console.log()
 * 6. location
 *
 * * All of the above Web APIs are accessible via window object in JS call stack
 */

// console.log('Start')
// setTimeout(() => {
//   console.log('Callback')
// }, 3000)
// console.log('End')

/*

console.log('Start')

* if the event handler will stay in the web apis environment, we explicitly remove that event listener or we close the browser
document.getElementById('btn').addEventListener('click', function cb() {
  console.log('Button clicked')
})
console.log('End')
*/

/**
// * Why do we need a callback queue
  For handling the callbacks to execute in order and sending it to call stack one by one
 */

// console.log('A')
// setTimeout(() => console.log('C'), 1000)
// Promise.resolve().then(() => console.log('B'))
// console.log('D')

/*
 * Execution order: 
  1. A Synchronous calls, no timers or promises involved so just goes to call stack and gets executed
  2. D -\\ -
  3. B Since promises runs in Microtask queue it will be executed first (Microtask queue has higher priority in than callback queue)
  4. C After the timer completed the callback goes to callback queue and executes it in the end

 */

console.log('A')
setTimeout(() => console.log('C'), 1000)
Promise.resolve().then(setTimeout(() => console.log('B'), 1000))
console.log('D')

/**
 * A D C B
 * Since in the promises there's also a setTimeout so it will run in the order. First callback in setTimeout and second callback in setTimeout
 */
