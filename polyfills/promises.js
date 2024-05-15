// * Basic promise example
const myPromise = new Promise((res, rej) => res('Promise Resolved'))

// ;(async () => {
//   try {
//     const res = await myPromise
//     console.log({ res })
//   } catch (error) {
//     console.log(error)
//   }
// })()

// * Delay/Sleep function
const sleep = delay =>
  new Promise((res, rej) => setTimeout(() => res('Ran after sleep..'), delay))

// ;(async () => {
//   try {
//     const res = await sleep(2000)
//     console.log('🚀 ~res:', res)
//   } catch (error) {}
// })()

/*
* Promise.all: 
* Promise.all: 
* 1. If any of the input promises is rejected, the entire returned promise will immediately reject with the reason of the first rejected promise.
* 2. Resolves only if all input promises are resolved successfully. The resolved value is an array containing the resolved values of the input promises in the same order.
* use case: Useful when you want to wait for multiple asynchronous operations to complete and need all of them to be successful before proceeding. For example, making multiple API requests in parallel and waiting for all responses.

* Promise.allSettled: 
* 1. The returned promise always resolves, regardless of whether individual promises were fulfilled or rejected.
* 2. Resolves with an array of objects, one for each input promise. These objects contain the status of each promise ("fulfilled" or "rejected") along with the value (if resolved) or reason (if rejected).
* use case: Useful when you want to gather the results of multiple asynchronous operations, regardless of whether they succeeded or failed. It's often used when you want to know the outcome of all promises, even if some of them are rejected.

* Promise.race:
* As the name suggests, race returns first promise with shortest delay whether it is resolved or rejected.
* use case: This can be useful when you're interested in the result of the first promise to complete, regardless of whether it's a success or failure.
* resolution: Resolves as soon as the first promise in the input array settles, whether it's resolved or rejected. The returned promise adopts the outcome (either resolve or reject) of the first settled promise
* use case: useful when you want to implement scenarios like a timeout mechanism where you want to respond to the first promise to complete, regardless of whether it succeeds or fails.

* Promise.any():
* It will return with first resolved promise.
* resolution: Resolves as soon as any one of the input promises resolves. It doesn't matter if the other promises reject. The returned promise adopts the resolved value of the first resolved promise.
* use case: Useful when you want to handle the case where at least one promise out of multiple promises succeeds, and you're interested in the result of the first resolving promise
*/

// * Promise All
// const p1 = new Promise((res, rej) => res(1))
// const p3 = new Promise(res => setTimeout(() => res('Delayed promise'), 3000))
// const p2 = new Promise((res, rej) => res(2))
// const p4 = new Promise((res, rej) => setTimeout(() => rej('Rejected'), 500))

// * Promise.all
// ;(async () => {
//   try {
//     const res = await Promise.all([p1, p2, p3, p4])
//     console.log('🚀 ~ ; ~ res:', res)
//   } catch (error) {
//     console.log('🚀 ~ ; ~ error:', error)
//   }
// })()

// * Promise.allSettled
// ;(async () => {
//   try {
//     const res = await Promise.allSettled([p1, p2, p3, p4])
//     console.log('🚀 ~ ; ~ res:', res)
//   } catch (error) {
//     console.log({ error })
//   }
// })()

/**
 { res: 'Promise Resolved' }
🚀 ~ ; ~ res: [
  { status: 'fulfilled', value: 1 },
  { status: 'fulfilled', value: 2 },
  { status: 'fulfilled', value: 'Delayed promise' },
  { status: 'rejected', reason: 'Rej' }
]
 */

// * Promise.race
// ;(async () => {
//   try {
//     const res = await Promise.race([p1, p2, p3, p4])
//     console.log('🚀 ~ ; ~ res:', res)
//   } catch (error) {
//     console.log({ error })
//   }
// })()

// * Promise.any
// ;(async () => {
//   try {
//     const res = await Promise.any([p1, p2, p3, p4])
//     console.log('🚀 ~ ; ~ res:', res)
//   } catch (error) {
//     console.log({ error })
//   }
// })()

// * -------------------- Polyfills --------------------

const p1 = new Promise((res, rej) => res(1))
const p3 = new Promise(res => setTimeout(() => res('Delayed promise'), 3000))
const p2 = new Promise((res, rej) => res(2))
const p4 = new Promise((res, rej) => setTimeout(() => res('Resolved'), 500))
const p5 = new Promise((res, rej) => setTimeout(() => rej('Rejected!!!'), 600))

// const resolvedPromises = [p1, p2, p3, p4]
const rejectedPromises = [p1, p2, p3, p4, p5]

const myPromiseAll = function (promises) {
  let result = []
  let total = 0
  const promise = new Promise(function (resolve, reject) {
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then(res => {
          result[index] = res
          total++
          if (total === promises.length) resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  })
  return promise
}

const myPromiseAllFunction = promises => {
  let results = []
  let completed = 0

  // Create new promise
  const finalPromise = new Promise((resolve, reject) => {
    // * Loop over promises
    promises.forEach((item, index) => {
      // * resolve each promise
      Promise.resolve(item)
        .then(res => {
          //* if resolved add the result in results array
          results[index] = res
          completed++
          // * when end is reached resolve the promise
          if (completed === promises.length) resolve(results)
        })
        .catch(e => reject(e))
    })
  })
  // * return the final promise
  return finalPromise
}

const myPromiseAllSettled = promises => {
  // const mappedPromises = promises.map(Promise.resolve(p).then(res =>{}))
  const mappedPromises = promises.map(p =>
    Promise.resolve(p)
      .then(value => ({
        status: 'fullfilled',
        value,
      }))
      .catch(e => ({
        status: 'rejected',
        reason: e,
      }))
  )
  return Promise.all(mappedPromises)
}

const myPromiseRace = promises => {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise)
        .then(resolve, reject) // * resolve, when any of the input promise resolve
        .catch(reject) // * reject, when any of the input promise rejects
    })
  })
}

;(async () => {
  try {
    const res = await myPromiseRace(rejectedPromises)
    console.log('🚀 ~ ; ~ res:', res)
  } catch (error) {
    console.log(error)
  }
})()
