const express = require("express")
const router = express.Router()


const CommentService = require("../services/comment-service")
const RestaurantService = require("../services/restaurant-service")


//Get all the comments
router.get("/comments", async(req, res) => {
    const comments = await CommentService.findAll()
    res.status(200).send(comments)

})

// Create a new comment
router.post('/restaurants/:id', async(req, res) => {
    const restaurant = await RestaurantService.find(req.params.id)
    const newComment = await CommentService.add(req.body)
    await CommentService.leaveComment(restaurant, newComment)

    res.status(200).send(restaurant)
})


// Delete a comment
router.delete('/comments/:id', async(req, res) => {
    const comment = await CommentService.del(req.params.id)
    res.status(200).send(comment)


})


module.exports = router