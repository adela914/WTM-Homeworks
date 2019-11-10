module.exports = class Restaurent {
    constructor(name, location, comments = [], ratings = [], id) {
        this.name = name
        this.location = location
        this.comments = comments
        this.ratings = ratings
        this.id = id

    }

    static create({ name, location, comments, ratings, id }) {
        return new Restaurent(name, location, comments, ratings, id)

    }


    checkRatings() {
        const total = this.ratings.reduce((acc, c) => acc + c, 0);
        const averageRate = total / this.ratings.length;
        console.log("This restaurent's average rate is " + averageRate)

    }


}