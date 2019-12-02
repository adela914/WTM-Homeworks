const express = require("express")
const router = express.Router()

const UserService = require("../services/user-service")
const RestaurantService = require("../services/restaurant-service")
const CommentService = require("../services/comment-service")


// Get all  restaurants

router.get("/", async(req, res) => {
    const restaurants = await RestaurantService.findAll()
    res.send(restaurants)

})

// Get a restaurant


router.get("/:id", async(req, res) => {
    const restaurant = await RestaurantService.find(req.params.id)
    if (!restaurant) res.status(404)
    res.send(restaurant)

})

//create a new restaurant

router.post("/new", async function(req, res) {

        const newRestaurant = req.body
        const restaurant = await RestaurantService.add(newRestaurant)
        res.status(200).send(restaurant)


    })
    // update a restaurant

router.put("/update/:id", async(req, res) => {

    const restaurant = await RestaurantService.find(req.params.id)

    await RestaurantService.update(req.params.id, req.body)
    res.status(200).send(restaurant)



})

// delete a restaurant

router.delete("/:id", async(req, res) => {
    const restaurant = await RestaurantService.del(req.params.id)
    res.send(restaurant)
})


router.get("/rank", async(req, res) => {

    const hotRes = await RestaurantService.sortRes(3)
    res.send(hotRes)
    console.log(hotRes)
})

router.get("/search/:name", async(req, res) => {
    const foundRes = await RestaurantService.findByName(req.params.name)
    console.log(foundRes)
    res.send(foundRes)

})

module.exports = router