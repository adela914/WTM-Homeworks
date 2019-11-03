module.exports = class User {
    constructor(name, location, likedrestaurents = [], dislikedrestaurents = [], taggedcomments = [], wishList = [], id) {
        this.name = name
        this.location = location
        this.likedrestaurents = likedrestaurents
        this.dislikedrestaurents = dislikedrestaurents
        this.taggedcomments = taggedcomments
        this.wishList = wishList
        this.id = id

    }

    like(restaurent) {

        if (this.likedrestaurents.indexOf(restaurent) === -1) {
            this.likedrestaurents.push(restaurent.name);
            restaurent.whoLikedIt.push(this.name)
            console.log("You liked " + restaurent.name, "❤️");
        } else {
            console.log("You already liked " + restaurent.name, "❤️");
        }

    }



    dislike(restaurent) {

        if (this.dislikedrestaurents.indexOf(restaurent) === -1) {
            this.dislikedrestaurents.push(restaurent.name);
            restaurent.whoDislikedIt.push(this.name)
            console.log("You disliked " + restaurent.name, "💔")
        } else {
            console.log("You already disliked " + restaurent.name, "❤️");

        }
    }

    rate(restaurent, star) {
        if (star > 5 || star < 1) {
            console.log("You can give stars between 1 to 5")
        } else {
            restaurent.ratings.push(star);
            console.log("Thank you for your opinion! ⭐️")
        }

    }

    addWishlist(restaurent) {
        this.wishList.push(restaurent.name);

    }

    static create({ name, location, likedrestaurents, dislikedrestaurents, taggedcomments, wishList, id }) {

        return new User(name, location, likedrestaurents, dislikedrestaurents, taggedcomments, wishList, id);
    }



}