const User = require("./user");
const Restaurent = require("./restaurent")
const Comment = require("./comment")
const Database = require("./database")




// creating some users, restaurents and comments.


kai = new User("Kai", "Prenzlauer Berg")
yuna = new User("yuna", "Mitte")
koen = new User("Koen", "Prenzlauer Berg")

const users = [kai, yuna, koen]



arirang = new Restaurent("Arirang Bulgogi")
abonim = new Restaurent("Abonim")
kokio = new Restaurent("Kokio")

const restaurents = [arirang, abonim, kokio]



const firstComment = new Comment(kai, arirang, "Very authentic korean restaurent! Recommend it to everyone!")
const secondComment = new Comment(yuna, abonim, "Korean & Japanese restaurent. pretty good fish quality for the Berlin standard")
const thirdComment = new Comment(kai, kokio, "They have Korean fried chickens in Berlin")


const comments = [firstComment, secondComment, thirdComment]

///interactions///

kai.like(arirang)
yuna.dislike(kokio)
yuna.rate(kokio, 2)

kokio.checkRatings()

///save datas in to database///

// Database.save("users.json", users)
// Database.save("restaurents.json", restaurents)
// Database.save("comments.json", comments)

// ///load datas from database///

const loadedUsers = Database.load("users.json")
const loadedRestaurents = Database.load("restaurents.json")
const loadedComments = Database.load("comments.json")
console.log(loadedUsers)
console.log(loadedRestaurents)
console.log(loadedComments)