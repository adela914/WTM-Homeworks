const express = require("express")
const router = express.Router()


const UserService = require("../services/user-service")
const RestaurantService = require("../services/restaurant-service")
const CommentService = require("../services/comment-service")

router.get("/", function(req, res) {
    res.render("index");
});


module.exports = router