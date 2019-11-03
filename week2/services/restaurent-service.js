const BaseService = require('./base-service')
const RestaurentModel = require('../models/restaurent')

class RestaurentService extends BaseService {
    constructor() {
        super(RestaurentModel, `${__dirname}/../restaurent-database.json`)
    }
}

module.exports = new RestaurentService()