function printNumbers(n) {
  if (n > 1) {
    printNumbers(n - 1)
  }
  console.log(n)
}

const a = printNumbers(5)
