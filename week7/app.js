const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')


const landingRouter = require("./routes/landing")
const userRouter = require("./routes/user")
const restaurantRouter = require("./routes/restaurant")
const commentRouter = require("./routes/comment")

require("./mongo-connection")

const app = express();

app.use(cors())

app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(landingRouter);
app.use('/users', userRouter);
app.use('/restaurants', restaurantRouter);
app.use(commentRouter);


module.exports = app;