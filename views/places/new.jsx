const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method='POST' action="/places">
                    <div className='form-group'>
                        {/* name */}
                        <label htmlFor="name">Place Name</label>
                        <input className='form-control' id="name" name="name" required/>
                    </div>
                    <div className='form-group'>
                        {/* Pic */}
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' type="url" id="pic" name="pic" />
                    </div>
                    <div className='form-group'>
                        {/* city */}
                        <label htmlFor="city">City Name</label>
                        <input className='form-control' id='city' name='city' />
                    </div>
                    <div className='form-group'>
                        {/* state */}
                        <label htmlFor="state">State Name</label>
                        <input className='form-control' id='state' name='state' />
                    </div>
                    <div className='form-group'>
                        {/* cuisine */}
                        <label htmlFor="cuisine">Cuisine</label>
                        <input className='form-control' id='cuisine' name='cuisine' required />
                    </div>
                    <input className='btn btn-primary' type="submit" value='Add a Place' />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form