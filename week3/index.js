const User = require("./models/user");
const Restaurent = require("./models/restaurent")
const Comment = require("./models/comment")
const UserService = require('./services/user-service')
const CommentService = require('./services/comment-service')
const RestaurentService = require('./services/restaurent-service')


console.log('Hello World!')



async function main() {
    const mert = new User('Mert', 34)
    const byeol = new User("Byeol", 24)
    const kai = new User('Kai', 28)
    const koen = new User('Koen', 33)

    const arirang = new Restaurent("arirang", "mitte")
    const chanchan = new Restaurent("chanchan", "p-berg")
    const buchkaffe = new Restaurent("buchkaffe", "p-berg")
    const comment1 = new Comment(kai, arirang, "good!!!!")

    kai.like(arirang)
    koen.dislike(arirang)

    await UserService.add(kai)
    await UserService.add(koen)
    await UserService.add(byeol)
    await UserService.add(mert)

    const people = await UserService.findAll()

    console.log(people)

    await RestaurentService.add(arirang)
    await RestaurentService.add(chanchan)
    await RestaurentService.add(buchkaffe)
    await CommentService.add(comment1)

    const restaurents = await RestaurentService.findAll()

    console.log(restaurents);
    console.log(arirang);
    console.log(comment1);



}

main()