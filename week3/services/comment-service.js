const BaseService = require('./base-service')
const CommentModel = require('../models/comment')

class CommentService extends BaseService {
    constructor() {
        super(CommentModel, `${__dirname}/../comment-database.json`)
    }
}

module.exports = new CommentService()