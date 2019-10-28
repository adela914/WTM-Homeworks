module.exports = class Restaurent {
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