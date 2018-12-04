const express = require ("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 3005

const bookRoutes = require("./routes/book")
const authorRoutes = require("./routes/author")
const bookAuthorRoutes = require("./routes/author")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use("/book", bookRoutes)
app.use("/author", authorRoutes)
app.use("/book-author", bookAuthorRoutes)


app.use(notFound)

app.use(errorHandler)

function notFound(req, res, next) {
    res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}

function errorHandler(err, req, res, next) {
    console.error('ERROR', err)
    const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}


app.listen(port, () => console.log("server is running on port 3005"))