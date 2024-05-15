function delay(ms, callback) {
  return new Promise(resolve =>
    setTimeout(() => {
      if (typeof callback === 'function') {
        callback()
      }
      resolve()
    }, ms)
  ).catch(e => console.log(e))
}

for (let i = 1; i <= 10; i++) {
  delay(i * 1000, () => console.log(i))
}
