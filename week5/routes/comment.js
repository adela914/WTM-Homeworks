const express = require("express")
const router = express.Router()


const UserService = require("../services/user-service")
const RestaurantService = require("../services/restaurant-service")
const CommentService = require("../services/comment-service")

router.post("/restaurants/:id", async(req, res) => {
    try {
        const restaurant = await RestaurantService.find(req.params.id)
        const comment = req.body.comment
        await CommentService.leaveComment(restaurant, comment)
        await res.redirect("/restaurants/" + restaurant._id)

    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Server error: ${err.message}`);
    }


})



module.exports = router