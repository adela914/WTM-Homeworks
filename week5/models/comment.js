var mongoose = require("mongoose");
var commentSchema = mongoose.Schema({
    text: String
}, {
    timestamps: true
})

const CommentModel = mongoose.model('comment', commentSchema)

module.exports = CommentModel