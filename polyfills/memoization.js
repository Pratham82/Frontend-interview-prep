//* Write a memoization function

function memoize(func) {
  // create cache store
  const cache = {}

  return function (...args) {
    // stringify the args
    const keys = JSON.stringify(args)
    // check if the args are in the cache
    if (cache[keys]) {
      // if present then call the cached function
      console.log('Cache hit!')
      return cache[keys]
    } else {
      // if args not present in cache recall the function
      console.log('Cache miss!')
      const result = func.apply(this, args)
      // add the result in cache, for next calculation
      cache[keys] = result
      // return result
      return result
    }
  }
}

const memoizeV2 = func => {
  const cache = new Map()
  return function (...args) {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)
    } else {
      const result = func(...args)
      cache.set(key, result)
      return result
    }
  }
}

function expensiveOperation(n) {
  console.log('Calculating...')
  return n * 2
}
const memoizedOperation = memoizeV2(expensiveOperation)

console.log(memoizedOperation(5)) // Output: Calculating... \n Cache miss! \n 10
console.log(memoizedOperation(5)) // Output: Cache hit! \n 10
