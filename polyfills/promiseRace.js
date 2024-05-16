const myPromiseRace = promises => {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise)
        .then(resolve, reject) // * resolve, when any of the input promise resolve
        .catch(reject) // * reject, when any of the input promise rejects
    })
  })
}

const p3 = new Promise(res => setTimeout(() => res('Delayed promise'), 3000))
const p2 = new Promise((res, rej) => res(2))
const p1 = new Promise((res, rej) => res(1))
const p4 = new Promise((res, rej) => setTimeout(() => res('Resolved'), 500))
// const p5 = new Promise((res, rej) =>
//   setTimeout(() => rej('Rejected!!!'), 600)
// ).catch(e => console.log(e))

const resolvedPromises = [p2, p1, p3, p4]

;(async () => {
  try {
    const res = await myPromiseRace(resolvedPromises)
    console.log('🚀 ~ ; ~ res:', res)
  } catch (error) {
    console.log(error)
  }
})()
