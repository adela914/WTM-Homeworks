const express = require("express")
const router = express.Router()
const request = require('request')

router.post('/signup', (req, res) => {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    // Construct req data
    const data = {
        members: [{
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };

    const postData = JSON.stringify(data);

    const options = {
        url: 'https://us4.api.mailchimp.com/3.0/lists/e750d9dc4d',
        method: 'POST',
        headers: {
            Authorization: 'auth 7338382d5b265c1c05e7a2781d07b593-us4'
        },
        body: postData
    };

    request(options, (err, response, body) => {
        if (err) {
            console.log(err)
        } else {
            if (response.statusCode === 200) {
                console.log("good")
            } else {
                console.log("hmmm")
            }
        }
    });
});



module.exports = router