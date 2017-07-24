const img = require('../lib/img')
const phrase = require('../lib/phrase')
module.exports = function (request, reply) {
  var text = phrase()
  text = text.substr(0, text.length-1).toUpperCase() // strip off period and uppercase
  img(text, function(err, image){
    reply(image).header('Content-type','image/jpeg')
  })
}
