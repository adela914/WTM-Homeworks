var mongoose = require("mongoose");
var restaurentSchema = new mongoose.Schema({
    name: String,
    location: String,
    image: String,
    description: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }],
    author: {
        username: String,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }
});

const RestaurentModel = mongoose.model('restaurent', restaurentSchema)

module.exports = RestaurentModel