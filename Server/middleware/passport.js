const passport = require('passport')
const GoogleTokenStrategy = require('passport-google-token').Strategy
const User = require("../models/user.model.js");

const getProfile = (profile) => {
    const {id, displayName, emails, provider } = profile
    if(emails && emails.length){
        const email = emails[0].value
        return {googleId: id, name: displayName, email, provider}
    }
    return null
}


passport.use(new GoogleTokenStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        // callbackURL: 'http://localhost:8082/auth/google/callback',
        // passReqToCallback: true
    },
        (accessToken, refreshToken, profile, done) => {
            // try{

            // }catch(e){
            //     throw new Error(e)
            // }
            console.log(profile)
            return (null,profile)
        }
))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err,data) => {
        if(!err)
            done(null,data.user)
    })
})