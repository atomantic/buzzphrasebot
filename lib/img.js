const Jimp = require("jimp")
const width = 768
const height = 512
const x = 30
const y = 30
const wrap = 700
const borderFont = Jimp.FONT_SANS_64_BLACK
const textFont = Jimp.FONT_SANS_64_WHITE

module.exports = function(text, cb){
  Jimp.read('https://unsplash.it/'+width+'/'+height+'/?random', function (err, image) {
      if (err) throw err
      Jimp.loadFont(borderFont).then(function (bfont) {
        Jimp.loadFont(textFont).then(function (tfont) {
          image
            .background(0xFFFFFFFF)
            .opacity(0.8)
            // .greyscale().sepia()
            // lazy font bordering (not part of the lib)
            .print(bfont, x-1, x-1, text, wrap)
            .print(bfont, x-1, x+1, text, wrap)
            .print(bfont, x+1, x-1, text, wrap)
            .print(bfont, x+1, x+1, text, wrap)
            .print(tfont, x, y, text, wrap)
          image.getBuffer( 'image/jpeg', cb )
        })
      })
  })
}
