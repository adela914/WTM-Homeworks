/// Don't need user service yet. will be added...

// const express = require('express')
// const router = express.Router()

// const UserService = require('../services/user-service')
// const RestaurantService = require('../services/restaurant-service')
// const CommentService = require('../services/comment-service')

// router.get('/', async(req, res) => {
//     const users = await UserService.findAll()
//     res.send(users)

// })

// router.post("/", async(req, res) => {
//     try {
//         console.log(req.body);
//         const user = await UserService.add(req.body);
//         res.send(user)
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send(`Server error: ${err.message}`);
//     }
// });

// router.get("/:id", async(req, res) => {
//     const { id } = req.params;
//     try {
//         const user = await UserService.find(id);
//         if (!user) {
//             res.status(404).send(`Error: Could not find user for id >${id}<`);
//         } else {
//             res.send(user);
//         }
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send(`Server error: ${err.message}`);
//     }
// });

// //Save a resturant in user's list
// router.post("/:userId/save/:restaurantId", async(req, res) => {

//     const { userId, restaurantId } = req.params
//     try {

//         const user = await UserService.find(userId)
//         const restaurant = await RestaurantService.find(restaurantId)
//         await UserService.saveRestaurant(user, restaurant)
//         res.send(user)

//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send(`Server error: ${err.message}`);
//     }
// });



// router.delete('/:id', async(req, res) => {
//     const user = await UserService.del(req.params.id)
//     res.send(user)
// })





// module.exports = router