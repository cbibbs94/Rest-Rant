const React = require('react')
const Def = require('../default')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Edit Page</h1>
                <form method='POST' action={`./places/${data.id}?_method=PUT`}>
                    <div className='form-group'>
                        {/* name */}
                        <label htmlFor="name">Place Name</label>
                        <input className='form-control' id="name" name="name" value={data.places.name} required/>
                    </div>
                    <div className='form-group'>
                        {/* Pic */}
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' type="url" id="pic" name="pic" value={data.places.pic}/>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            {/* city */}
                            <label htmlFor="city">City Name</label>
                            <input className='form-control' id='city' name='city' value={data.places.city}/>
                        </div>
                        <div className='form-group col-sm-6'>
                            {/* state */}
                            <label htmlFor="state">State Name</label>
                            <select className='form-control' id='state' name='state' value={data.places.state}>
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
                    </div>
                    <div className='form-group'>
                        {/* cuisine */}
                        <label htmlFor="cuisine">Cuisine</label>
                        <input className='form-control' id='cuisine' name='cuisine' required value={data.places.cuisine} />
                    </div>
                    <input className='btn btn-primary' type="submit" value='Add a Place'/>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form