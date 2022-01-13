const router = require('express').Router()

//GET Places
router.get('/', (req, res) => {
    let places = [{
        name:'H-Thai-ML',
        city:'Seattle',
        state:'WA',
        cuisine:'Thai, Pan-Asian',
        pic: 'https://images.huffingtonpost.com/2016-04-04-1459778795-3582863-padthai921884_960_720.jpg'
    }, {
        name:'Coding Cat Cafe',
        city:'Phoenix',
        state:'AZ',
        cuisine:'Coffee, Bakery',
        pic: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/03/I-create-adorable-cat-sweets9__605.jpg'
    }]
    res.render('places/index',{places})
})


module.exports= router