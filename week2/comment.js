module.exports = class Comment {
    constructor(user, restaurent, comment) {
        this.user = user
        this.restaurent = restaurent
        this.comment = comment
        restaurent.comments.push(this.comment)
        console.log("Your comment is posted!")
    }

    tagFriend(user) {
        user.taggedcomments.push(this)
        console.log("You tagged " + user.name + "!")
    }


}
printName = person => console.log(person.name)