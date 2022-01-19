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
                        <select className='form-control' id='state' name='state'>
                            <option readonly value="N/A">Please Choose Your State</option>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="Tennessee">Tenessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virgina</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                </select>

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