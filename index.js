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

server.start((err) => {
    if (err) {
        throw err
    }
    console.log(`Server running at: ${server.info.uri}`)
    // kick it off
    runner()
})

// TODO: listen for mentions and respond
