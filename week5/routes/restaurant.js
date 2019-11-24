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
    res.render("restaurant", { restaurant: restaurant })
})

router.get("/restaurants/:id/json", async(req, res) => {
    const restaurant = await RestaurantService.find(req.params.id)
    res.render("data", { data: restaurant })
})



router.post("/restaurants/new", async function(req, res) {

    try {

        const newRestaurant = req.body.restaurant
        await RestaurantService.add(newRestaurant)

        res.redirect("/restaurants")

        console.log("a new restaurant is sucessfully added!")
        console.log(newRestaurant)

    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Server error: ${err.message}`);

    }


});


router.delete('/restaurants/:id', async(req, res) => {
    const restaurant = await RestaurantService.del(req.params.id)
    res.send(restaurant)
})

module.exports = router