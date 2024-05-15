var length = 10

function fn() {
  console.log(this.length)
}

fn()

var obj2 = {
  length: 5,
  method: function (fn) {
    fn()
    arguments[0]()
  },
}

obj2.method(fn, 1)
