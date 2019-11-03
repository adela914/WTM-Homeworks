module.exports = class Restaurent {
    constructor(name, location, whoLikedIt = [], whoDislikedIt = [], comments = [], ratings = [], id) {
        this.name = name
        this.location = location
        this.whoLikedIt = whoLikedIt
        this.whoDislikedIt = whoDislikedIt
        this.comments = comments
        this.ratings = ratings
        this.id = id

    }

    static create({ name, location, whoLikedIt = [], whoDislikedIt = [], comments = [], ratings = [], id }) {
        return new Restaurent(name, location, whoLikedIt = [], whoDislikedIt = [], comments = [], ratings = [], id)

    }


    printWhoLikedIt() {
        this.whoLikedUs.forEach(person => console.log(person.name))
    }
    printWhoDislikedIt() {
        this.whoDislikedIt.forEach(person => console.log(person.name))
    }
    checkRatings() {
        const total = this.ratings.reduce((acc, c) => acc + c, 0);
        const averageRate = total / this.ratings.length;
        console.log("This restaurent's average rate is " + averageRate)

    }


}