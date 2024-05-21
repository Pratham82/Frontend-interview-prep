function curry(fn) {
  return function curried(...args) {
    // check if the arguments length is greater than fn length, the return fn with args
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      // else return a wrapper function with, curried function and extra args
      return function (...nextArgs) {
        return curried(...args, ...nextArgs)
      }
    }
  }
}

const add = (a, b, c, d) => {
  return a + b + c + d
}

const res = add(1, 2, 3, 4)
console.log('🚀 ~ res:', res)

const curriedAdd = curry(add)
const res2 = curriedAdd(1)(2)(3, 4)
console.log('🚀 ~ res2:', res2)
