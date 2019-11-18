const BaseService = require('./base-service')
const RestaurentModel = require('../models/restaurent')

class RestaurentService extends BaseService {

    model = RestaurentModel
}

module.exports = new RestaurentService()