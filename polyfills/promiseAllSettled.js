const myPromiseAllSettled = promises => {
  const mappedPromises = promises.map(promise =>
    Promise.resolve(promise)
      .then(result => ({
        value: result,
        status: 'fulfilled',
      }))
      .catch(e => ({
        status: 'rejected',
        reason: e,
      }))
  )
  return Promise.all(mappedPromises)
}

const p1 = new Promise((res, rej) => res(1))
const p3 = new Promise(res => setTimeout(() => res('Delayed promise'), 3000))
const p2 = new Promise((res, rej) => res(2))
const p4 = new Promise((res, rej) => setTimeout(() => res('Resolved'), 500))
// const p5 = new Promise((res, rej) =>
//   setTimeout(() => rej('Rejected!!!'), 600)
// ).catch(e => console.log(e))

const resolvedPromises = [p1, p2, p3, p4]

;(async () => {
  try {
    const res = await myPromiseAllSettled(resolvedPromises)
    console.log('🚀 ~ ; ~ res:', res)
  } catch (error) {
    console.log(error)
  }
})()
