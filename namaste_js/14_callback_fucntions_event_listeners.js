// JavaScript is a synchronous and single-threaded language
//* What is a Callback Function in JavaScript

// function x() {}

// here y is callback function
// x(function y() {})

// Blocking the main thread
// * we should not block the main thread, any operation which is supposed to take much time should be async.
setTimeout(() => {
  console.log({
    'Current Time': new Date().toLocaleString(),
  })
  console.log('Timer stopped')
}, 5000)

function x(func) {
  console.log('x')
  func()
}

x(function y() {
  console.log('y')
})

console.log({
  'Current Time': new Date().toLocaleString(),
})

// Deep about Event listeners
// Closures Demo with Event Listeners
function attachEventListener() {
  // * this will form a closure
  let count = 0
  const btn = document.getElementById('my-btn')
  btn.addEventListener('click', function () {
    console.log({ msg: 'My button clicked' })
    count++
  })
  console.log({ count })
}
attachEventListener()

// Power of Callbacks?
// Scope Demo with Event listeners
