const express = require("express")
const router = express.Router()


const CommentService = require("../services/comment-service")
const RestaurantService = require("../services/restaurant-service")

router.get("/comments", async(req, res) => {
    const comments = await CommentService.findAll()
    res.render("data", { data: comments })
    res.send(comments)
})


router.post('/restaurants/:id/', async(req, res) => {
    const restaurant = await RestaurantService.find(req.params.id)
    const newComment = await CommentService.add(req.body.comment)
    await CommentService.leaveComment(restaurant, newComment)

    console.log(newComment)
    res.redirect("/restaurants/" + restaurant._id)
})



router.delete('comments/:id', async(req, res) => {
    const comment = await CommentService.del(req.params.id)
    res.send(comment)
})


module.exports = router