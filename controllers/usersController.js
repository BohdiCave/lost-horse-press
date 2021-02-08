const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Defining methods for the usersController
module.exports = {

    // @route POST api/users/register -- @desc Register user -- @access Public
    register: (req, res) => {
        // Form validation check
        const { errors, isValid } = validateRegisterInput(req.body);
        if (!isValid) { return res.status(400).json(errors); }
        // Check if login name already exists in the db, add if not        
        db.User
          .findOne({ user_login: req.body.user_login })
          .then(user => {
            if (user) { return res.status(400).json({ user_login: "Login already exists" }); } 
            else { 
                const newUser = {
                    user_login: req.body.user_login,
                    user_pass: req.body.user_pass,
                    user_email: req.body.user_email,
                    user_registered: Date.now()
                }
                // Hash password before saving in database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.user_pass, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.user_pass = hash;
                    });
                });
            }
          })
          .create(newUser)
          .then(user => res.json(user))
          .catch(err => res.status(422).json(err)); 
    },
    // @route POST api/users/login -- @desc Login user and return JWT token -- @access Public
    login: (req, res) => {
        // Form validation check
        const { errors, isValid } = validateLoginInput(req.body);
        if (!isValid) { return res.status(400).json(errors); }
        
        const user_login = req.body.user_login;
        const user_pass = req.body.user_pass;
        
        // Find user by email
        db.User
          .findOne({ user_login })
          .then(user => { 
            // Check if user exists
            if (!user) { return res.status(404).json({ usernotfound: "User not found" }); }
            // Check password
            bcrypt.compare(user_pass, user.user_pass)
                .then(isMatch => {
                if (isMatch) {
                    // Create JWT Payload
                    const payload = {
                        id: user.id,
                        name: user.user_login
                    };
                    // Sign token
                    jwt.sign( payload, keys.secretOrKey, { expiresIn: 31556926}, /* 1 year in seconds */
                        (err, token) => { 
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                    );
                } else {
                    return res.status(400).json({ passincorrect: "Password incorrect" });
                }
                });
          });
    },
    // update: function(req, res) {
    //     db.User
    //     .findOneAndUpdate({ _id: req.params.id }, req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    // remove: function(req, res) {
    //     db.User
    //     .findById({ _id: req.params.id })
    //     .then(dbModel => dbModel.remove())
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
};