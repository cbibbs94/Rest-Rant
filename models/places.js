const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: {type: String, default: 'http://placekitten.com/350/350'},
    cuisine: {type: String, required: true},
    city: {type: String, default: 'Anywhere'}, 
    state: {type: String, default: 'USA'},
    founded: {
        type: Number,
        min: [1673, "Damn older than that?!"],
        max: [new Date().getFullYear(), "It seems like your trying to get a future date Time Travler"]
    },
    comments: [{type: mongoose.Schema.Types.ObjectID, ref: 'Comment'}]
})

// placeSchema.virtual('comments', {
//     ref: "Comment",
//     localField: '_id',
//     foreignField: 'place'
// })

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('place', placeSchema)