const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => { 
        return (
        <div className='col-sm-6'>
            <h2>
                <a href={`/places/${place.id}`}>
                    {place.name}
                </a>
            </h2>
            <p className='text-center'>
                {place.cuisine}
            </p>
            <img src={place.pic} alt={place.name}/>
            <p className='text-center'>
                Located in {place.city}, {place.state}
            </p>
        </div>
    )
    })
    return (
    <Def>
        <main>
            <div className='col text-center' key={index}>
            <h1>Places Index Page</h1>
            </div>
             <div className='row'>
                {placesFormatted}
            </div>
                <a href="/places/new">
                    <button className='btn-primary'>Add a New Spot</button>
                </a>
        </main>       
    </Def>
)
}

module.exports = index
