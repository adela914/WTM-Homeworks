var mongoose = require("mongoose");
var restaurentSchema = new mongoose.Schema({
    name: String,
    location: String,
    image: String,
    description: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
        autopopulate: {
            maxDepth: 1
        }

    }],
    author: {
        username: String,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            autopopulate: {
                maxDepth: 1
            }
        }
    }
});

restaurentSchema.plugin(require('mongoose-autopopulate'))

const RestaurentModel = mongoose.model('restaurent', restaurentSchema)

module.exports = RestaurentModel