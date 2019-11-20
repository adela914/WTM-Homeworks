const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const seedDB = require("./seeds")


const userRouter = require('./routes/user')
const restaurentRouter = require('./routes/restaurent')
const commentRouter = require('./routes/comment')

require('./mongo-connection')

const app = express();


app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(userRouter);
app.use(restaurentRouter);
app.use(commentRouter);
seedDB();


app.listen(3000, function() {
    console.log("app is running on 3000");
});

app.get('/', function(req, res) {
    res.render('index');
});