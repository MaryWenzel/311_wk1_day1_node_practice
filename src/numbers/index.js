const { numbers } = require("..");

const isEven = (num) => {
  // write code for numbers.isEven
  // Hint: Modulus %
  if (num % 2 == 0){
    return true
  }else{
    return false
  }
}

const sum = (arr) => {
  // write code for numbers.sum 
  // Hint: reduce()
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
  return sum
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  // Hint: Loop in loop OR indexOf for diff
  for (let x in arr) {
    for (let y in arr) {
      if (x + y == sum) {
        return true
      } else {
        return false
      }
    }
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}