// * Throttle without waiting args
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

//* Throttle with args
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
