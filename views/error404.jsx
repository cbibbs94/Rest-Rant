const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: Bruh, What are you even doing??</h1>
                <p>You know damn well you're not supposed to be here. Turn around and leave the way you came and there won't be any trouble alright?</p>

            </main>
        </Def>
    )
}

module.exports = error404