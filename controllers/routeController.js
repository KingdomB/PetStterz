const express = require('express')
const router = express.Router()
const db = require('../models')

// router.get('/profile', (req, res) => {

//     user.userProfile(function (userData) {
//         res.render("userprofile", {
//             userprofile: userData
//         });
//         res.end()
//     })
// })


router.get('/register', (req, res) => {
    res.render('signup')
})


//post signup data to the database.
router.post('/register', (req, res) => {
    console.log('this is body', req.body);

    db.User.create(req.body)
        .then(user => {
            // console.log('\n', '\n', user);
            console.log('from the server', user);

            res.send(user)
            // res.redirect('profile')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        });
})

module.exports = router;