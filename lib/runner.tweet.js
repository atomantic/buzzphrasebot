const countdown = require('countdown')
const memory = require('./memory')
const phrase = require('./phrase')
const rand = require('lodash.random')
const twitter = require('./twitter')
const img = require('./img')

const nextTweet = function(){
  // post a buzzphrase
  memory.lastPost = phrase()

  // strip off period and uppercase for image overlay
  var text = memory.lastPost.substr(0, memory.lastPost.length-1).toUpperCase()
  img(text, function(err, image) {
    if(err){
      throw err
    }
    twitter.post(memory.lastPost, image)
    // next tweet will happen in 1-12 hours
    const delay = rand(3600000, 43200000)
    const nextDate = new Date(new Date()+(delay))
    memory.nextPost = nextDate.toISOString()
    console.log(
      'next tweet in',
      countdown(nextDate).toString(),
      memory.nextPost
    )
    setTimeout(nextTweet, delay)
  })

}

module.exports = nextTweet
