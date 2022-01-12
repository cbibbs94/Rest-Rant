require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Welcome to this outstanding page. What do you want??")
})

app.get('*', (req, res) => {
    res.status(404).send(<h1>"Bruh what are you doing here, Whatever you are looking for it ain't here."</h1>)
})

app.listen(process.env.PORT, () => {
     console.log("Shhhhh They're here, Look professional")
})