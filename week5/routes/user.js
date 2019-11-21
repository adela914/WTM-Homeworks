const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')
const RestaurantService = require('../services/restaurant-service')
const CommentService = require('../services/comment-service')

router.get('/users', async(req, res) => {
    const users = await userService.findAll()
    res.render('list', { items: users })

})

router.post("/users", async(req, res) => {
    try {
        console.log(req.body);
        const user = await UserService.add(req.body);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Server error: ${err.message}`);
    }
});

router.get('/users/:id', async(req, res) => {
    const user = await UserService.find(req.params.id)
    res.render('data', { data: user })
})


router.delete('/users/:id', async(req, res) => {
    const user = await UserService.del(req.params.id)
    res.send(user)
})





module.exports = router