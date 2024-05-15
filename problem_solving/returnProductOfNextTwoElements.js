// Given an array, return an array where the each value is the product of the next two items:
// E.g. [3, 4, 5] -> [20, 15, 12]
// i.e 1 + 2 | 2 + 0 | 0 + 1

const getProductOfNextTwo = arr => {
  const result = []
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log({
      first: arr[i + 1],
      second: arr[i + 2],
    })
    result.push(arr[i + 1] * arr[i + 2])
  }
  return result
}

// const res = getProductOfNextTwo([3, 4, 5])
const res = getProductOfNextTwo([3, 4, 5])
console.log('🚀 ~ res:', res)
