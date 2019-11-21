const BaseService = require('./base-service')
const RestaurantModel = require('../models/restaurant')

class RestaurantService extends BaseService {

    model = RestaurantModel
}

module.exports = new RestaurantService()