const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <p>
                    <img src={data.place.pic} alt={data.place.name} />
                </p>
                <div>
                   <h3>What Would you rate this Spot?</h3>
                        <p>No Ratings Yet</p> 
                </div>
                <div>
                    <h3>Description</h3>
                        <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisine}</p>
                </div>
                <div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
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