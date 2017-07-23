const buzzphrase = require('buzzphrase')
const capitalize = require('lodash.capitalize')
module.exports = function(){
  // capitalize first letter
  return capitalize(buzzphrase.getImperative()) + '.'
}
