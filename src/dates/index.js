// import moment here; use this package in each function
const moment = require('moment')


const today = () => {
  // write code for dates.today
  // Hint: moment().format(?)
  let value = moment().format('dddd')
  return value
}

const calendar = () => {
  // write code for dates.calendar
  // Hint: moment().format(?)
  console.log(moment().format('MMMM DD, YYYY'))
  return moment().format('MMM DD, YYYY')
  // return moment().format('LL')
}

const currentTime = () => {
  // write code for dates.currentTime
  // Hint: moment().format(?)
  return moment().format('hh:mm:ss A')
}

module.exports = {
  today,
  calendar,
  currentTime
}