Array.prototype.myFilter = function (callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result
}

const arr = [1, 2, 3, 4]

const res = arr.myFilter(val => val >= 2)
console.log('🚀 ~ res:', res)
