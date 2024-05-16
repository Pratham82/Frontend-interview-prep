// Given an array, return an array where the each value is the product of the next two items: E.g. [3, 4, 5] -> [20, 15, 12]

const arr = [3, 4, 5, 6]
let output = []

arr.forEach((item, i) => {
  let prod = 1

  if (arr.length - 1 == i) {
    prod = arr[0] * arr[1]
    output.push(prod)
  } else if (arr.length - 2 == i) {
    prod = arr[arr.length - 1] * arr[0]
    output.push(prod)
  } else {
    prod = arr[i + 1] * arr[i + 2]
    output.push(prod)
  }
})

// console.log(output);
