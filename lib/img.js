const Jimp = require("jimp")
const x = 20
const y = 20
const wrap = 500

module.exports = function(text, cb){
  Jimp.read("https://unsplash.it/768/768/?random", function (err, image) {
      if (err) throw err
      Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (bfont) {
        Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(function (wfont) {
          image
            .background(0xFFFFFFFF)
            .opacity(0.8)
            // .greyscale().sepia()
            // lazy font bordering (not part of the lib)
            .print(bfont, x-1, x-1, text, wrap)
            .print(bfont, x-1, x+1, text, wrap)
            .print(bfont, x+1, x-1, text, wrap)
            .print(bfont, x+1, x+1, text, wrap)
            .print(wfont, x, y, text, wrap)
          image.getBuffer( 'image/jpeg', cb )
        })
      })
  })
}
