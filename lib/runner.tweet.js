const countdown = require('countdown')
const memory = require('./memory')
const phrase = require('./phrase')
const rand = require('lodash.random')
const twitter = require('./twitter')

const nextTweet = function(){
  // post a buzzphrase
  memory.lastPost = phrase()
  twitter.post(memory.lastPost)
  // next tweet will happen in 1-12 hours
  const delay = rand(3600000, 43200000)
  memory.nextPost = new Date(new Date()+delay).toISOString()
  console.log(
    'next tweet in',
    countdown(delay),
    memory.nextPost
  )
  setTimeout(nextTweet, delay)
}

module.exports = nextTweet
