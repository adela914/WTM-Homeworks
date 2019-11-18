const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')
const RestaurentService = require('../services/restaurent-service')
const CommentService = require('../services/comment-service')

router.get('/users', async(req, res) => {
    const users = await userService.findAll()
    res.render('list', { items: users })

})

router.post('/users', async(req, res) => {
    const user = await UserService.add(req.body)
    res.render(user)
})

router.get('/users/:id', async(req, res) => {
    const user = await UserService.find(req.params.id)
    res.render('data', { data: user })
})
router.delete('/users/:id', async(req, res) => {
    const user = await UserService.del(req.params.id)
    res.send(user)
})





module.exports = router