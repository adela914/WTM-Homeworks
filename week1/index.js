User = class {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.likedrestaurents = []
        this.dislikedrestaurents = []
        this.taggedcomments = []
        this.wishList = []

    }

    like(restaurent) {

        if (this.likedrestaurents.indexOf(restaurent) === -1) {
            this.likedrestaurents.push(restaurent);
            restaurent.whoLikedIt.push(this)
            console.log("You liked " + restaurent.name, "❤️");
        } else {
            console.log("You already liked " + restaurent.name, "❤️");
        }

    }



    dislike(restaurent) {

        if (this.dislikedrestaurents.indexOf(restaurent) === -1) {
            this.dislikedrestaurents.push(restaurent);
            restaurent.whoDislikedIt.push(this)
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
        this.wishList.push(restaurent);

    }



}


Restaurent = class {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.whoLikedIt = []
        this.whoDislikedIt = []
        this.comments = []
        this.ratings = []

    }
    printWhoLikedIt() {
        this.whoLikedUs.forEach(printName)
    }
    printWhoDislikedIt() {
        this.whoDislikedIt.forEach(printName)
    }
    checkRatings() {
        const total = this.ratings.reduce((acc, c) => acc + c, 0);
        const averageRate = total / this.ratings.length;
        console.log("This restaurent's average rate is " + averageRate)

    }


}

Comment = class {
    constructor(user, restaurent, comment) {
        this.user = user
        this.restaurent = restaurent
        this.comment = comment
        restaurent.comments.push(this)
        console.log("Your comment is posted!")
    }

    tagFriend(user) {
        user.taggedcomments.push(this)
        console.log("You tagged " + user.name + "!")
    }


}
printName = person => console.log(person.name)



/// creating some users, restaurents and comments.

kai = new User("Kai", "Prenzlauer Berg")
yuna = new User("yuna", "Mitte")


arirang = new Restaurent("Arirang Bulgogi")
abonim = new Restaurent("Abonim")

firstComment = new Comment(kai, arirang, "Very authentic korean restaurent! Recommend it to everyone!")
secondComment = new Comment(yuna, abonim, "Korean & Japanese restaurent. pretty good fish quality for the Berlin standard")