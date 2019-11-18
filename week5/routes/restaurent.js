const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const UserService = require('../services/user-service')
const RestaurentService = require('../services/restaurent-service')
const CommentService = require('../services/comment-service')




router.get('/restaurents', async(req, res) => {
    const restaurents = await RestaurentService.findAll()
    res.render('list', { items: restaurents })

})

router.post('/restaurents', async(req, res) => {
    const restaurent = await RestaurentService.add(req.body)

})


router.get('/:id', async(req, res) => {
    const restaurent = await RestaurentService.find(req.params.id)
    res.render('data', { data: restaurent })
})

router.delete('/:id', async(req, res) => {
    const restaurent = await RestaurentService.del(req.params.id)

})

router.get('/restaurents/new', function(req, res) {
    res.render('new');
})

router.post('/restaurents/new', function(req, res) {
    const name = req.body.name
    console.log(name);


});

module.exports = router