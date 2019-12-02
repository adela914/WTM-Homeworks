module.exports = class Service {
    async findAll() {
        return this.model.find()
    }

    async add(item) {
        return this.model.create(item)
    }

    async del(itemId) {
        return this.model.deleteOne({ _id: itemId })
    }

    async find(itemId) {
        return this.model.findById(itemId)
    }

    async update(itemId, itemBody) {
        return this.model.updateOne({ _id: itemId }, itemBody, { new: true })
    }

    async findByParameter(param) {
        return this.model.find(param)
    }


}