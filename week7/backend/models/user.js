/// User-Model will be needed to be updated once login feature is added.

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    location: String,
    savedRestaurants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurant",
        autopopulate: {
            maxDepth: 1
        }
    }]
})


userSchema.plugin(require('mongoose-autopopulate'))

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel