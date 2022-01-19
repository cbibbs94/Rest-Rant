const router = require('express').Router()

//GET New Form
router.get('/new',(req, res) => {
    res.render('places/new')
})

//Post Route
router.post('/',(req,res) => {
    console.log(req.body)
    res.send('POST /places');
})

//GET Places
router.get('/', (req, res) => {
    let places = [{
        name:'H-Thai-ML',
        city:'Seattle',
        state:'WA',
        cuisine:'Thai, Pan-Asian',
        pic: '/images/padthai.jpg'
    }, {
        name:'Coding Cat Cafe',
        city:'Phoenix',
        state:'AZ',
        cuisine:'Coffee, Bakery',
        pic: '/images/catSweets.jpg'
    }]
    res.render('places/index',{places})
})


module.exports= router