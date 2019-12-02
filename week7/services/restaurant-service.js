const BaseService = require('./base-service')
const RestaurantModel = require('../models/restaurant')

class RestaurantService extends BaseService {

    model = RestaurantModel

    async findByName(name) {
        const foundRes = await this.findByParameter({ "name": name })
        return foundRes
    }
    async sortRes(num) {
        const hotRes = await this.findAll().sort({ "likes": -1 }).limit(num).lean()
        return hotRes
    }
}

module.exports = new RestaurantService()