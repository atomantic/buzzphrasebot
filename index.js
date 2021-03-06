require('dotenv').config()

const runner = require('./lib/runner.tweet')

const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({ port: 3000 })

server.route({
    method: 'GET',
    path: '/',
    handler: require('./api/root')
})

// testing API so I can get a random image
server.route({
    method: 'GET',
    path: '/test',
    handler: require('./api/test')
})

server.start((err) => {
    if (err) {
        throw err
    }
    console.log(`Server running at: ${server.info.uri}`)
    // kick it off
    runner()
})

// TODO: listen for mentions and respond
