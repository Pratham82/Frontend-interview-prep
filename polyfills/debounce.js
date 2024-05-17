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
