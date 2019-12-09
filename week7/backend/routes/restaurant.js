const express = require("express")
const router = express.Router()

const RestaurantService = require("../services/restaurant-service")


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

    const editRes = await RestaurantService.update(req.params.id, req.body)
    const restaurant = await RestaurantService.find(req.params.id)

    console.log(restaurant)
    res.status(200).send(restaurant)
})

// delete a restaurant

router.delete("/:id", async(req, res) => {
    const restaurant = await RestaurantService.del(req.params.id)
    res.status(200).send(restaurant)
})

// Get 3 most liked restaurants / test needed

router.get("/hot/show", async(req, res) => {

    const hotRes = await RestaurantService.sortRes(3)
    res.status(200).send(hotRes)
})

// Search a restaurant by name / test needed

router.get("/search/:name", async(req, res) => {
    const foundRes = await RestaurantService.findByName(req.params.name)
    res.status(200).send(foundRes)

})

// Like a restaurant / test needed

router.put('/like/:id', async(req, res) => {
    const restaurant = await RestaurantService.find(req.params.id)
    await RestaurantService.likeRes(restaurant)
    res.status(200).send(restaurant)
})

module.exports = router