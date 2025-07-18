Array.prototype.myReduce = function (callback, initialValue) {
  // error validation

  let acc
  let i = 0

  if (initialValue !== undefined) {
    initialValue = acc
  } else {
    while (!(i in this) && i < this.length) i++
    acc = this[i++]
  }

  for (; i < this.length; i++) {
    if (i in this) {
      acc = callback(acc, this[i], i, this)
    }
  }
  return acc
}

const arr = [1, 2, 3, 4]

const sum = arr.myReduce((a, b) => a + b)
// const sum = arr.myReduce((a, b) => a + b, 0)
console.log({ msg: "here" })
console.log("🚀 ~ sum:", sum)
