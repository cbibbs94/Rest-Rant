const router = require('express').Router()
const places = require('../models/places')

//GET Places
router.get('/', (req, res) => {
       
    res.render('places/index',{places})
})

//GET New Form
router.get('/new',(req, res) => {
    res.render('places/new')
})

//edit
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/edit' , {places: places[id], id})
    }
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

// create Post Route
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

//update
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        //make sure info is valid from req.body
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
        //save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`,)
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