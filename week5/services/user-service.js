const BaseService = require('./base-service')
const UserModel = require('../models/user')

class UserService extends BaseService {
    model = UserModel

    async saveRestaurent(user, restaurent) {
        user.savedRestaurents.push(restaurent)
        await user.save()
    }
}

module.exports = new UserService()