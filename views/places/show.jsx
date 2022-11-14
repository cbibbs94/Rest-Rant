const React = require('react')
const Def = require('../default')

function show (data) {
    //console.log(data)
    let comments= (
        <h3 className="inactive">
            no comments yet
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet Rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = sumRatings / data.place.comments.length
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '🌟'
        }
        rating= (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method="POST" action={`/places/${data.place.id}/comments/${c.id}?_method=DELETE`}>
                        <input type="submit" className="btn btn-danger" value="Delete " />
                    </form>
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
                        {rating}
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
                    <a href={`./${data.place.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
                <hr/>
                <h2>Got anything you wanna say about this Place?</h2>
                <form action={`/places/${data.place.id}/comment`} method='POST'>
                    <div className="row">
                        {/* Content of the Comment */}
                        <div className="form-group col-sm-12">
                            <label htmlFor="content">Content</label>
                            <textarea name="content" id="content" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        {/* Author */}
                        <div className="form-group col-sm-4">
                            <label htmlFor="author">Author</label>
                            <input id="author" name="author" className="form-control" />
                        </div>
                        {/* Star Rating */}
                        <div className="form-group col-sm-4">
                            <label htmlFor="stars">Star Rating</label>
                            <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                        </div>
                        {/* Rant CheckBox */}
                        <div className="form-group col-sm-2">
                            <label htmlFor="rant">Are you Ranting?</label>
                            <input type="checkbox" id="rant" name="rant" className="form-control" />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Add Comment" />
                </form>
            </main>
        </Def>
    )
}

module.exports = show