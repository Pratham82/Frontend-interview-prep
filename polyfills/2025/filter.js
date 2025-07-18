/**
 * Creates a new array with all elements that pass the test implemented by the provided callback function.
 *
 * @param {Function} callback - Function to test each element of the array. Called with arguments (element, index, array).
 * @param {*} [thisArgs] - Value to use as `this` when executing callback.
 * @returns {Array} A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
 * @throws {TypeError} If the callback is not a function.
 */

// .filter() creates a new array with only the elements that pass a test (provided by a callback function).

Array.prototype.myFilter = function (callback, thisArgs) {
  if (typeof callback !== "function") {
    throw TypeError(`${callback} is not a function`)
  }

  const result = []
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArgs, this[i], i, this)) {
        result.push(this[i])
      }
    }
  }
  return result
}

const arr = [1, 2, 3, 4, 5, 6]
const res = arr.myFilter(val => val % 2 === 0)
console.log("🚀 ~ res:", res)
