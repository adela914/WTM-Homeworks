const express = require("express")
const router = express.Router()

const UserService = require("../services/user-service")
const RestaurantService = require("../services/restaurant-service")
const CommentService = require("../services/comment-service")




router.get("/", async(req, res) => {
    const restaurants = await RestaurantService.findAll()
    res.render("list", { restaurants })

})

router.get("/json", async(req, res) => {
    const restaurants = await RestaurantService.findAll()
    res.send(restaurants)

})

router.get("/new", function(req, res) {
    res.render("new");
})




router.get("/:id", async(req, res) => {
    const restaurant = await RestaurantService.find(req.params.id)
    if (!restaurant) res.status(404)
    res.render("restaurant", { restaurant: restaurant })
})

router.get("/:id/json", async(req, res) => {
    const restaurant = await RestaurantService.find(req.params.id)
    if (!restaurant) res.status(404)
    res.render("data", { data: restaurant })
})



router.post("/new", async function(req, res) {

    try {

        const newRestaurant = req.body
        const restaurant = await RestaurantService.add(newRestaurant)
        res.send(restaurant)
        res.redirect("/")

        console.log("a new restaurant is sucessfully added!")

    } catch (err) {
        console.error(err.message);
        res.status(500).send(`Server error: ${err.message}`);

    }


});


router.delete('/:id', async(req, res) => {
    const restaurant = await RestaurantService.del(req.params.id)
    res.send(restaurant)
})

module.exports = router