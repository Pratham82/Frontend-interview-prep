const personObj1 = {
  name: 'Prathamesh',
  getName: function () {
    console.log(`My Name is ${this.name}`)
  },
}

const personObj2 = {
  name: 'Luke',
}

Function.prototype.myApply = function (ctx, ...args) {
  ctx.fn = this
  return args ? ctx.fn(...args) : ctx.fn()
}

personObj1.getName.myApply(personObj2)
