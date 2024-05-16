Array.prototype.myReduce = function (callback, initialValue) {
  // set accumulator with initialValue
  let accumulator = initialValue

  for (let i = 0; i < this.length; i++) {
    // check if accumulator is present
    accumulator = accumulator
      ? callback(accumulator, this[i], i, initialValue)
      : this[i]
  }
  return accumulator
}

const arr = [1, 2, 3, 4]

const sum = arr.myReduce((a, b) => a + b)
// const sum = arr.myReduce((a, b) => a + b, 0)
console.log('🚀 ~ sum:', sum)
