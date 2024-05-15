// Write a sum function: sum(1)(2)(3)(4)

const infiniteCurrying = a => {
  return b => {
    return b ? infiniteCurrying(a + b) : a
  }
}

console.log(infiniteCurrying(1)(2)(3)())
