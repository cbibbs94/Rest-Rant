const db = require('../models')

async function seed() {
    //get place
    let place = await db.Place.findOne({name:'H-Thai-ML'})

    //create the comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'This was dope! Telling everybody about it.'
    },{
        author: "Just a Really Angry Joe",
        rant: true,
        stars: 2.5,
        content: 'Honestly there was nothing wrong. Everything was fantastic; from the service to the food itself. I just like writing bad reviews to bring attention to great service. Confusing Right?'
    })

    //add comment to the place's comment array
    place.comments.push(comment.id)

    //save the place with the comment attached
    await place.save()

    //Exit the Program
    process.exit()
}

seed()