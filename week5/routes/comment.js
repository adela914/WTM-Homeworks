const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')
const RestaurentService = require('../services/restaurent-service')
const CommentService = require('../services/comment-service')



module.exports = router