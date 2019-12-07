const express = require("express")
const router = express.Router()


//root route

router.get("/", function(req, res) {
    res.render("index")
})

// show register form

router.get("/register", function(req, res) {
    res.render("register")
})

//handle sign up logic to be added 


//show login form

router.get("/login", function(req, res) {
    res.render("login")
})

//handling login logic to be added 

// logout route to be added 

module.exports = router