var mongoose = require("mongoose");
var commentSchema = mongoose.Schema(

    {
        author: String,
        text: String

    }, {
        timestamps: true
    }


)

const CommentModel = mongoose.model('comment', commentSchema)

module.exports = CommentModel