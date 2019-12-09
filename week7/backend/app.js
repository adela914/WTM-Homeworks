const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')


const landingRouter = require("./routes/landing")
const restaurantRouter = require("./routes/restaurant")
const commentRouter = require("./routes/comment")
const subscribeRouter = require("./routes/subscribe")


require("./mongo-connection")

const app = express()

app.use(cors())
app.set("view engine", "pug")
app.use(express.json()) // no more body-parser
app.use(express.static("public"))

app.use(landingRouter)
app.use('/restaurants', restaurantRouter)
app.use(commentRouter)
app.use(subscribeRouter)
app.use(bodyParser.urlencoded({ extended: true }));



module.exports = app;