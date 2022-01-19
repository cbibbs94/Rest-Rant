const router = require('express').Router()
const places = require('../models/places')

//GET New Form
router.get('/new',(req, res) => {
    res.render('places/new')
})

//Post Route
router.post('/',(req,res) => {
    if ( !req.body.pic) {
        //default image if one isn't provided
        req.body.pic = '\\images\\storeDefault.jpg'
    }
    if (!req.body.city) {
        req.body.city = 'Anywhere'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places');
})

//GET Places
router.get('/', (req, res) => {
       
    res.render('places/index',{places})
})


module.exports= router