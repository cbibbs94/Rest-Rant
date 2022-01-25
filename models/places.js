const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: {type: String},
    cuisine: {type: String, required: true},
    city: {type: String, default: 'Anywhere'}, 
    state: {type: String, default: 'USA'},
    founded: {Type: Number}
})

module.exports = mongoose.model('place', placeSchema)