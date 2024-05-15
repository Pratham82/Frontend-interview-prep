const getEveryOtherCapitalized = word => {
  if (!word) {
    return word
  }
  return word
    .split('')
    .map((c, i) => c.toLowerCase())
    .map((c, i) => (i % 2 ? c : c.toUpperCase()))
    .join('')
}

console.log(getEveryOtherCapitalized(''))
console.log(getEveryOtherCapitalized('Hello'))
