// require('dotenv').config()
const phrase = require('./lib/phrase')
const twitter = require('./lib/twitter')
const rand = require('lodash.random')

const nextTweet = function(){
  // post a buzzphrase
  twitter.post(phrase())
  // next tweet will happen in 1-24 hours
  const delay = rand(3600000, 86400000)
  console.log('next tweet in', delay/1000/60, 'minutes')
  setTimeout(nextTweet, delay)
}

// kick it off
nextTweet()

// TODO: listen for mentions and respond
