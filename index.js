const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Welcome to this outstanding page. What do you want??")
})

app.listen(3000, () => {
     console.log("Shhhhh They're here, Look professional")
})