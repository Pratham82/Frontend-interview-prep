const personObj1 = {
  name: 'Prathamesh',
  getName: function () {
    console.log(`My Name is ${this.name}`)
  },
}

const personObj2 = {
  name: 'Luke',
}

Function.prototype.myCall = function (ctx, ...args) {
  ctx.fn = this
  return ctx.fn(...args)
}

personObj1.getName.myCall(personObj2)
