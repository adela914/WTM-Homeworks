const BaseService = require('./base-service')
const CommentModel = require('../models/comment')

class CommentService extends BaseService {
    model = CommentModel

    async leaveComment(restaurent, comment) {
        await model.create(comment)
        await restaurent.comments.push(comment)
        await restaurent.save()
        await comment.save()
        console.log("successfully added comment!")


    }
}

module.exports = new CommentService()