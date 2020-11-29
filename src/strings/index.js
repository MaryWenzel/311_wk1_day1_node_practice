const split = (str, delim) => {
  // write code for strings.split
  // Hint: split
  let splitString = str.split(delim)
  return splitString
}

const pairs = (str) => {
  // write code for strings.pairs
  // Hint: For loop, increment by 2 (Ask help to figure out the for loop)
  return str.match(/.{2}/g)
}


const reverse = (str) => {
  // write code for strings.reverse
  // Hint: split, reverse, join
  return str.split('').reverse().join('')
}

module.exports = {
  split,
  pairs,
  reverse
}