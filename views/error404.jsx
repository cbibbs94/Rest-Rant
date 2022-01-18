const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: Bruh, What are you even doing??</h1>

            </main>
            <body>
            <h3>You know damn well you're not supposed to be here. Turn around and leave the way you came and there won't be any trouble alright?</h3>
            <iframe src="https://giphy.com/embed/Pl4PHOXVpPPDG" width="480" height="252" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dont-be-a-menace-movie-Pl4PHOXVpPPDG">via GIPHY</a></p>
            </body>
        </Def>
    )
}

module.exports = error404