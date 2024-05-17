const personObj1 = {
  name: 'Prathamesh',
  getName: function () {
    console.log(`My Name is ${this.name}`)
  },
}

const personObj2 = {
  name: 'Luke',
}

Function.prototype.myBind = function (ctx, ...args) {
  const resultFn = this
  return function () {
    return resultFn.apply(ctx, args)
  }
}

const getNameCopy = personObj1.getName.myBind(personObj2)
getNameCopy()
