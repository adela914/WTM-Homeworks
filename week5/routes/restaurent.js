const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const UserService = require('../services/user-service')
const RestaurentService = require('../services/restaurent-service')
const CommentService = require('../services/comment-service')




router.get('/restaurents', async(req, res) => {
    const restaurents = await RestaurentService.findAll()
    res.render('list', { restaurents })

})


router.get('/restaurents/new', function(req, res) {
    res.render('new');
})

router.post('/restaurents/new', async function(req, res) {
    const name = req.body.name
    const location = req.body.location
    const image = req.body.image
    const description = req.body.description
    const newRestaurent = { name, location, image, description }

    await RestaurentService.add(newRestaurent)

    res.redirect('/restaurents')
    console.log('a new restaurent is sucessfully added!');


});

module.exports = router