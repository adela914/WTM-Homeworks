const express = require("express");
const bodyParser = require("body-parser");
const seedDB = require("./seeds")

const landingRouter = require("./routes/landing")
const userRouter = require("./routes/user")
const restaurantRouter = require("./routes/restaurant")
const commentRouter = require("./routes/comment")

require("./mongo-connection")

const app = express();


app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(landingRouter);
app.use(userRouter);
app.use(restaurantRouter);
app.use(commentRouter);
seedDB();


module.exports = app;