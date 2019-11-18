const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')
const RestaurentService = require('../services/restaurent-service')
const CommentService = require('../services/comment-service')



router.get('/restaurents', async(req, res) => {
    const restaurents = await RestaurentService.findAll()
    res.render('list', { items: restaurents })

})

router.post('/restaurents', async(req, res) => {
    const restaurent = await RestaurentService.add(req.body)
    res.render(restaurent)
})

router.get('/:id', async(req, res) => {
    const restaurent = await RestaurentService.find(req.params.id)
    res.render('data', { data: restaurent })
})

router.delete('/:id', async(req, res) => {
    const restaurent = await ResataurentService.del(req.params.id)
    res.send(restaurent)
})



module.exports = router