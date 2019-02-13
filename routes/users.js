const express = require('express');
const router = express.Router();

//login page
router.get('/login', (req, res) => res.render('login'))

//register page
router.get('/register', (req, res) => res.render('register'));

//register handle
router.post('/register', (req, res) => {
    const {name, email, password, password2} = req.body;
    let errors = [];

    //check required fields
    if(!name || !email || !password || !password2) {
        errors.push({message: 'please fill in all fields'});
    }
    //check passwords match
    if(password !== password2) {
        errors.push({message: 'passwords must match'});
    }
    //check password length
    if(password.length < 6) {
        errors.push({message: 'password must be at leat 6 characters'});
    }

    if(errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        })
    }
    else {
        res.send('pass')
    }
    console.log(errors)
})

module.exports = router;