const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const seedDB = require("./seeds")

const indexRouter = require("./routes/index")
const userRouter = require("./routes/user")
const restaurantRouter = require("./routes/restaurant")
const commentRouter = require("./routes/comment")

require("./mongo-connection")

const app = express();


app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(indexRouter);
app.use(userRouter);
app.use(restaurantRouter);
app.use(commentRouter);
seedDB();


app.listen(3000, function() {
    console.log("app is running on 3000");
});