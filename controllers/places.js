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

//Show
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
    
})

//Delete
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})

module.exports= router