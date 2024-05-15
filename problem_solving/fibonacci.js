// const functionStore = {
//   increase(){
//     console.log(this.score++)
//   }
// }

// const user = Object.create(functionStore)
// user.score = 0
// console.log(user)
// user.increase()

// 1 1 2 3 5 8 13 21 34 55

const nthFibonacciNumber = n => {
  if (n < 2) return n

  return nthFibonacciNumber(n - 1) + nthFibonacciNumber(n - 2)
}

// console.log(nthFibonacciNumber(8));

// const mypromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('promise is resolve'), 1000)
// })
// mypromise.then(data => {
//   console.log(data)
// })

const printNthFibonacciNumber = n => {
  if (n <= 1) return n
  return printNthFibonacciNumber(n - 1) + printNthFibonacciNumber(n - 2)
}

const printToNFibo = n => {
  for (let i = 0; i < n; i++) {
    console.log(printNthFibonacciNumber(i))
  }
}

printToNFibo(10)
const n = printNthFibonacciNumber(1)
console.log('🚀 ~ n:', n)
