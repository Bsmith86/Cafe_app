const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt');


module.exports = async function(passport) {


    passport.use(
        new localStrategy({usernameField: "email"}, async (email, password, done) => {
            const user = await User.findOne({email: email});
            console.log(email, password, user);
            if (!user) {
                return done(null, false, {message: "Email or password incorrect"});
            }
            //if yes
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {message: "Email or password incorrect"})
                } 
            })
        })
    )
        passport.serializeUser((user, cb) => {
            cb(null, user)
        })


        passport.deserializeUser(async (id, cb) => {
            return cb(null, await User.findById(id))
        })
}

