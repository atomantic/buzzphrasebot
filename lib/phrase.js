const buzzphrase = require('buzzphrase')
const capitalize = require('lodash.capitalize')
const sample = require('lodash.sample')
const formats = [
  '{a} {v} {n}',
  '{V} {a} {N}'
]
module.exports = function(){
  // capitalize first letter
  return capitalize(buzzphrase.get({
    format: sample(formats)
  })) + '.'
}
