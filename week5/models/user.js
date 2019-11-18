var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: String,
    location: String,
    savedRestaurents: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Restaurent"
        },
        name: String
    }
})



const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel