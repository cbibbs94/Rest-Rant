//Modules and Global Variables
require('dotenv').config()
const express = require('express')
const app = express()

//Middleware settings
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers and routes
app.use('/places', require('./controllers/places') )

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