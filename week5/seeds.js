const mongoose = require("mongoose");
const Restaurent = require("./models/restaurent");
const Comment = require("./models/comment");




const seeds = [{
        name: "Kokio",
        location: "Prenzlauer Berg",
        image: "https://img.theculturetrip.com/1024x574/smart/wp-content/uploads/2015/03/shutterstock_288572099.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Arirang",
        location: "Prenzlauer Berg",
        image: "https://img.theculturetrip.com/1024x/smart/wp-content/uploads/2019/07/hfnnc1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Sesam",
        location: "Friedrichshain",
        image: "https://img.theculturetrip.com/1024x/smart/wp-content/uploads/2019/07/hy0wey.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
];

async function seedDB() {
    try {
        await Restaurent.remove({});
        console.log('Restaurents removed');
        await Comment.remove({});
        console.log('Comments removed');

        for (const seed of seeds) {
            const restaurent = await Restaurent.create(seed);
            console.log('Restaurent created');
            const comment = await Comment.create({
                text: 'This place is great, but I wish there was internet',
                author: 'Homer'
            })
            console.log('Comment created');
            restaurent.comments.push(comment);
            restaurent.save();
            console.log('Comment added to restaurent');
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = seedDB;