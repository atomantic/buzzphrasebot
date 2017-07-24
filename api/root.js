const memory = require('../lib/memory')
const pjson = require('../package')

module.exports = function (request, reply) {
    reply({
      name: pjson.name,
      version: pjson.version,
      lastPost: memory.lastPost,
      nextPost: memory.nextPost
    });
}
