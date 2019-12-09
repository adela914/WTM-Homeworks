/// User-service will be needed to be updated once login feature is added.


const BaseService = require('./base-service')
const UserModel = require('../models/user')

class UserService extends BaseService {
    model = UserModel

    async saveRestaurant(user, restaurant) {
        user.savedRestaurants.push(restaurant)
        await user.save()
    }
}

module.exports = new UserService()