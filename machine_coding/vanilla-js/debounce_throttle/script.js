/**
 *  * Important links
 *  * Difference between debounce and throttle:https://stackoverflow.com/questions/25991367/difference-between-throttling-and-debouncing-a-function
 *  * visualization: https://web.archive.org/web/20220117092326/http://demo.nimius.net/debounce_throttle/
 *  * visualization: https://kettanaito.com/blog/debounce-vs-throttle
 *
 */
// ** Implementation without using array
const inputField = document.getElementById('input-text')
const debounceText = document.getElementById('debounce')
const defaultText = document.getElementById('default')
const throttleText = document.getElementById('throttle')

const updateDebouncedText = debounce(text => {
  // The debounceText will be updated with the current value of the inputField after a delay of 500 milliseconds from the last input event. If the user types again within that 500 milliseconds, the update will be delayed further until there is a 500 milliseconds pause in typing.
  debounceText.textContent = text
}, 500)

const updateThrottledText = throttle(text => {
  throttleText.textContent = text
}, 500)

inputField.addEventListener('input', e => {
  // console.log(e)
  defaultText.textContent = e.target.value
  updateDebouncedText(e.target.value)
  updateThrottledText(e.target.value)
})

/**
 *
 * @param {*} callBack function
 * @param {*} delay number
 * @returns
 * @description
 * * The debounce function is a utility function used to create debounced versions of functions.
 * * It takes a callBack function and a delay parameter, which defaults to 1000 milliseconds.
 * * It returns a new function that, when called, will execute the callBack function after the specified delay.
 * * If the debounced function is called again before the delay has elapsed, the previous timeout is cleared and a new timeout is set.
 * * Uses: buttons, input fields where api calls are made. To prevent duplicate nd
 */
function debounce(callBack, delay = 1000) {
  // creating timeout instance
  let timeoutInstance = null

  // taking whatever arguments are required
  return (...args) => {
    // clearing timeout instance every time we create a new function
    clearTimeout(timeoutInstance)
    // adding delay to the callback function
    timeoutInstance = setTimeout(() => callBack(...args), delay)
  }
}

// * Throttle without waiting args
/*
function throttle(callBack, delay) {
  let shouldWait = false

  return (...args) => {
    if (shouldWait) return

    // * This will be executed every time when the should wait is false i.e when the function is executed for the first time
    callBack(...args)

    // * Just after executing the function we are setting should wait to true because we don't want to invoke the function just after the first call
    shouldWait = true

    setTimeout(() => {
      // * To invoke the function after the set delay we are resetting the value of shouldWait to false
      shouldWait = false
    }, delay)
  }
}

*/

// * Throttle with waiting args, to save the consecutive calls which were made between the delay
function throttle(callBack, delay) {
  let shouldWait = false
  let waitingArgs
  const timeOutFunction = () => {
    if (waitingArgs == null) {
      // * To invoke the function after the set delay we are resetting the value of shouldWait to false
      shouldWait = false
    } else {
      // * calling the callBack with waitingArgs
      callBack(...waitingArgs)
      // * clear the waiting args
      waitingArgs = null
      // * After executing the throttled function, it resets waitingArgs to null, indicating that there are no more waiting arguments. Then, it schedules the next execution of timeOutFunction after the delay interval (delay) using setTimeout.
      setTimeout(timeOutFunction, delay)
    }
  }

  return (...args) => {
    if (shouldWait) {
      // * Saving the args which were made in the waiting stage, so that we can call the function with these args
      waitingArgs = args
      return
    }

    // * This will be executed every time when the should wait is false i.e when the function is executed for the first time
    callBack(...args)

    // * Just after executing the function we are setting should wait to true because we don't want to invoke the function just after the first call
    shouldWait = true

    setTimeout(timeOutFunction, delay)
  }
}

// **
function throttle(callBack, delay) {
  let shouldWait = false
  let waitingArgs
  const timeOutFunction = () => {
    if (waitingArgs == null) {
      shouldWait = false
    } else {
      callBack(...waitingArgs)
      waitingArgs = null

      setTimeout(timeOutFunction, delay)
    }
  }

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args
      return
    }

    callBack(...args)
    shouldWait = true

    setTimeout(timeOutFunction, delay)
  }
}
