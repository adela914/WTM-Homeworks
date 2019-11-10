module.exports = class Comment {
    constructor(user, restaurent, comment, id) {
        this.user = user
        this.restaurent = restaurent
        this.comment = comment
        this.id = id
        restaurent.comments.push(this.comment)
        console.log("Your comment is posted!")
    }


    static create({ user, restaurent, comment, id }) {
        return new Comment(user, restaurent, comment, id)
    }


}