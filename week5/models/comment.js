var mongoose = require("mongoose");
var commentSchema = mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
}, {
    timestamps: true
})

const CommentModel = mongoose.model('comment', commentSchema)

module.exports = CommentModel