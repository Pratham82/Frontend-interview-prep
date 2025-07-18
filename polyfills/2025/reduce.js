Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") throw new TypeError(callback + " is not a function")

  let i = 0,
    acc

  if (initialValue !== undefined) {
    acc = initialValue
  } else {
    while (!(i in this) && i < this.length) i++
    if (i === this.length) throw new TypeError("Reduce of empty array with no initial value")
    acc = this[i++]
  }

  for (; i < this.length; i++) {
    if (i in this) acc = callback(acc, this[i], i, this)
  }

  return acc
}
