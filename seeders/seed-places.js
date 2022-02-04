const db = require('../models')

db.Place.create([
{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisine: 'Thai, Pan-Asian',
    pic: '/images/padthai.jpg',
    founded: 1989
},
{
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisine: 'Coffee, Bakery',
    pic: '/images/catSweets.jpg',
    founded: 2020 
}])
.then(()=>{
    console.log('Success!!')
    process.exit()
})
.catch(err => {
    console.log('We failed! This could be the issue', err)
    process.exit()
})