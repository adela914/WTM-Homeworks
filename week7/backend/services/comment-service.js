const BaseService = require("./base-service")
const CommentModel = require("../models/comment")

class CommentService extends BaseService {
    model = CommentModel

    async leaveComment(restaurant, comment) {
        restaurant.comments.push(comment)
        await restaurant.save()
        console.log("successfully added comment!")
    }
}

module.exports = new CommentService()