const express = require("express")
const router = express.Router()


const UserService = require("../services/user-service")
const RestaurentService = require("../services/restaurent-service")
const CommentService = require("../services/comment-service")

router.post("/restaurents/:id", async(req, res) => {
    try {
        const restaurent = await RestaurentService.find(req.params.id)
        const comment = req.body.comment
        await CommentService.leaveComment(restaurent, comment)
        await res.redirect("/restaurents/" + restaurent._id)

    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Server error: ${err.message}`);
    }


})



module.exports = router