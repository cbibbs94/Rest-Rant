//Modules and Global Variables
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
// const { get } = require('express/lib/response');
// const res = require('express/lib/response');
const app = express()

//Middleware settings
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Controllers and routes
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})


//Listen for server connection
app.listen(process.env.PORT, () => {
     console.log("Shhhhh They're here, Look professional")
})