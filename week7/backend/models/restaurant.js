var mongoose = require("mongoose");
var restaurantSchema = new mongoose.Schema(

    {
        name: String,
        author: String,
        location: String,
        image: String,
        description: String,
        password: String,
        likes: {
            type: Number,
            default: 0
        },
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment",
            autopopulate: {
                maxDepth: 1
            }
        }]

    }, {
        timestamps: true
    }
);

restaurantSchema.plugin(require('mongoose-autopopulate'))

const RestaurantModel = mongoose.model('restaurant', restaurantSchema)

module.exports = RestaurantModel