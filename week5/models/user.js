var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    location: String,
    savedRestaurants: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "restaurant"
        },
        name: String
    }
})



const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel