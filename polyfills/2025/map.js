/**
 * Creates a new array populated with the results of calling a provided function on every element in the calling array.
 *
 * The .map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

 * @param {Function} callback - Function that is called for every element of the array. Each time callback executes, the returned value is added to the new array.
 * @param {*} [thisArgs] - Value to use as `this` when executing callback.
 * @returns {Array} A new array with each element being the result of the callback function.
 * @throws {TypeError} If the callback provided is not a function.
 */
Array.prototype.myMap = function (callback, thisArgs) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`)
  }
  const result = []

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result.push(callback.call(thisArgs, this[i], i, this))
    }
  }
  return result
}

const arr = [1, 2, 3]
const res = arr.myMap(val => val * 2)
console.log("🚀 ~ res:", res)

/*
| Argument  | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `thisArg` | What you want `this` to refer to **inside the callback**       |
| `this[i]` | The current element of the array                               |
| `i`       | The current index                                              |
| `this`    | The whole array (`this` refers to the array being mapped over) |
*/
