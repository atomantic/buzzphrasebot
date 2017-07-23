const Twitter = require('twit')
const client = new Twitter({
  consumer_key: process.env.TWITTER_BPB_CLIENT,
  consumer_secret: process.env.TWITTER_BPB_SECRET,
  access_token: process.env.TWITTER_BPB_ATOKEN,
  access_token_secret: process.env.TWITTER_BPB_ASECRET
})
module.exports = {
  client: client,
  post: function(msg){
    client.post('statuses/update', {status: msg}, function(error, tweet, response) {
      if(error){
        console.error(error, tweet)
      }else {
        console.log('@'+tweet.user.screenname, tweet.text)
      }
    })
  }
}
