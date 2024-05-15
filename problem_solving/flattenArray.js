// Write a function to flatten an array
// const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, [9]]] => . [1,2,3,4,5,6,7,8,9];
const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, [9]]]

const flattenArray = arr => {
  let res = []
  if (!arr) {
    return
  }
  for (const el of arr) {
    if (Array.isArray(el)) {
      res = res.concat(flattenArray(el))
    } else {
      res.push(el)
    }
  }
  return res
}

const res = flattenArray(nestedArray)
console.log('🚀 ~ res:', res)
