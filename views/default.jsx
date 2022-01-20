const React = require('react')

function Def (html) {
    return(
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add a Spot</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
                <div class="content">
                     <h5>Contact us</h5>
                </div>
                <footer class="footer"></footer>
            </body>
        </html>
    )
}

module.exports = Def