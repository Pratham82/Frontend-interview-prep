;(function () {
  console.log(1)
  setTimeout(function () {
    console.log({ msg: 'outer fn' }, 2)
  }, 0)

  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log({ msg: 'promise fn' }, 3)
      resolve()
    }, 1000)
  }).then(function () {
    console.log(5)
  })

  console.log(4)
})()

// Task
