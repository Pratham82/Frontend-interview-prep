// console.log('START')

// setTimeout(() => {
//   console.log('Callback')
// }, 5000)

// console.log('END')

/*
 * some code which need lot of time to execute
 * This code will block the main thread, and won't allow the callback queue to perform it's operations
 * So if the following line of code is taking 10 seconds to execute,
 * the callback inside the setTimeout will be ran after that, since the main thread is still blocked
 */

// -------------------------------
// * Simulation of blocking thread

console.log('START')
setTimeout(() => {
  console.log('Callback')
}, 1000)

console.log('END')

let startDate = new Date().getTime()
let endDate = startDate

while (endDate < startDate + 5000) {
  endDate = new Date().getTime()
}

console.log('While expires')

/*
Output:

START
END
While expires (Expired after 5 sec)
Callback (After main thread is free, this callback is executed)
*/
