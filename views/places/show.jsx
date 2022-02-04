const React = require('react')
const Def = require('../default')

function show (data) {
    console.log(data)
    let comments= (
        <h3 className="inactive">
            no comments yet
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <div>
                    <img src={data.place.pic} alt={data.place.name} />
                </div>
                <div className="row">
                   <h2>What Would you rate this Spot?</h2>
                        <p>No Ratings Yet</p>
                    <h2>Comments</h2>
                        {comments}
                </div>
                <div>
                    <h2>Description</h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3> 
                    <h4>
                        serving {data.place.cuisine}
                    </h4>
                </div>
                <div>
                    <a href={`./${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show