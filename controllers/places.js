const router = require('express').Router()
const db = require('../models')

//home page
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', {places})
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

//New Place Form POST route
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
            let message = 'You might have left something Out'
            
            //Todo: Find all Validation Errors

            res.render('places/new', {message})
        }
       else {
           res.render['error404']
       }
    })
})

//New Place Form
router.get('/new', (req, res) => {
    res.render('places/new')
})

//Show page for places
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        //console.log(place.comments)
        res.render('places/show', {place})
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

//Edit a Place
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', {place})
    })
    .catch(err => {
        res.render('error404')
        console.log("This is what happened" + err)
    })
})

//Sending edited place
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() =>{
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err =>{
        console.log('err', err)
        res.render('error404')
    })
})

//Delete a Place
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


//comment editing
router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    req.body.rant = req.body.rant ? true : false
    
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then( ()=> {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })

})

router.delete('/:id/rant/:rantId', (req, res) => {
    db.Comment.findByIdAndDelete(req.params.commentId)
    .then (() => {
        console.log("its gone")
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log("err", err)
        res.render('error404')
    })
})

module.exports= router