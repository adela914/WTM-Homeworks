var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    location: String,
    savedRestaurents: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "restaurent"
        },
        name: String
    }
})



const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel