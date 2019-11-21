const express = require("express")
const router = express.Router()

const UserService = require("../services/user-service")
const RestaurantService = require("../services/restaurant-service")
const CommentService = require("../services/comment-service")




router.get("/restaurants", async(req, res) => {
    const restaurants = await RestaurantService.findAll()
    res.render("list", { restaurants })

})


router.get("/restaurants/new", function(req, res) {
    res.render("new");
})




router.get("/restaurants/:id", async(req, res) => {
    const restaurant = await RestaurantService.find(req.params.id)
    res.render("data", { restaurant: restaurant })
})




router.post("/restaurants/new", async function(req, res) {

    try {
        const name = req.body.name
        const location = req.body.location
        const image = req.body.image
        const description = req.body.description
        const newRestaurant = { name, location, image, description }

        await RestaurantService.add(newRestaurant)

        res.redirect("/restaurants")
        console.log("a new restaurant is sucessfully added!");

    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Server error: ${err.message}`);

    }


});

module.exports = router