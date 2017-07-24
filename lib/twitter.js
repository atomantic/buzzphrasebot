const Twitter = require('twit')
const client = new Twitter({
  consumer_key: process.env.TWITTER_BPB_CLIENT,
  consumer_secret: process.env.TWITTER_BPB_SECRET,
  access_token: process.env.TWITTER_BPB_ATOKEN,
  access_token_secret: process.env.TWITTER_BPB_ASECRET
})
const postStatus = function(params){
  client.post('statuses/update', params, function(error, tweet, response) {
    if(error){
      console.error(error, tweet)
    }else {
      console.log('@'+tweet.user.screen_name, tweet.text)
    }
  })
}
module.exports = {
  client: client,
  post: function(msg, img){
    if(img){
      console.log('uploading image')
      // first we must post the media to Twitter
      client.post('media/upload', { media_data: img.toString('base64') }, function (err, data, response) {
        if(err){
          console.log(err, response)
          throw err
        }
        // now we can assign alt text to the media, for use by screen readers and
        // other text-based presentations and interpreters
        var mediaIdStr = data.media_id_string
        var meta_params = {
          media_id: mediaIdStr,
          alt_text: { text: msg }
        }

        client.post('media/metadata/create', meta_params, function (err, data, response) {
          if (err) {
            throw err
          }
          // now we can reference the media and post a tweet (media will attach to the tweet)
          postStatus({
            status: msg,
            media_ids: [mediaIdStr]
          })
        })
      })
    }else{
      postStatus({status: msg})
    }
  }
}
