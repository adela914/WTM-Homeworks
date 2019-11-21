const BaseService = require("./base-service")
const CommentModel = require("../models/comment")

class CommentService extends BaseService {
    model = CommentModel

    async leaveComment(restaurent, comment) {
        CommentModel.create(comment)
        restaurent.comments.push(comment)
        await restaurent.save()
        console.log("successfully added comment!")


    }
}

module.exports = new CommentService()