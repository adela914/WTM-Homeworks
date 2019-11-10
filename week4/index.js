// const User = require("./models/user");
// const Restaurent = require("./models/restaurent")
// const Comment = require("./models/comment")
const UserService = require('./services/user-service')
const CommentService = require('./services/comment-service')
const RestaurentService = require('./services/restaurent-service')
const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios');


const app = express();
app.use(bodyParser.json());

app.set('view engine', 'pug')


app.get('/', function(req, res) {
    res.render('home');
});




app.get('/restaurents', async function(req, res) {
    const restaurents = await RestaurentService.findAll();
    res.render('restaurents', { restaurents: restaurents })

});



app.get('/restaurents/:id', async function(req, res) {
    const restaurentId = req.params.id;
    const restaurent = await RestaurentService.find(restaurentId);
    res.render('restaurent', { restaurent: restaurent })


});


app.get('/users', async function(req, res) {
    const people = await UserService.findAll();
    res.render('users', { people: people })
});



app.post('/', async function(req, res) {
    const restaurent = await RestaurentService.add(req.body);
    res.send(restaurent);


});

app.post('/users', async function(req, res) {
    const user = await UserService.add(req.body);
    res.send(user);
});


app.listen(3000, function() {
    console.log('Hello World!');

});