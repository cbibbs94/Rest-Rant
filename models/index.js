require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,
     {useNewUrlParser: true,
        useUnifiedTopology: true},
      () => { console.log('Oh Snap! We got that exclusive intel!! Its at:', process.env.MONGO_URI)
  }
)

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')