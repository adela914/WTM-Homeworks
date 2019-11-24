const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')
const RestaurantService = require('../services/restaurant-service')
const CommentService = require('../services/comment-service')

router.get('/', async(req, res) => {
    const users = await UserService.findAll()
    res.send(users)

})

router.post("/", async(req, res) => {
    try {
        console.log(req.body);
        const user = await UserService.add(req.body);
        res.send(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Server error: ${err.message}`);
    }
});

router.get('/:id', async(req, res) => {
    const user = await UserService.find(req.params.id)
    if (!user) res.status(404)
    res.send(user)
})

router.get('/:id/json', async(req, res) => {
    const user = await UserService.find(req.params.id)
    if (!user) res.status(404)
    res.send(user)
})


router.delete('/:id', async(req, res) => {
    const user = await UserService.del(req.params.id)
    res.send(user)
})





module.exports = router