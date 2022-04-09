module.exports = app => {
    // const passport = require('../middleware/passport')
    const passport = require('passport')
    const auth = require("../controllers/auth.controller.js")

    var router = require("express").Router()

    router.post("/", passport.authenticate('google-token', {session: false}), auth.googleSignIn)

    app.use('/googleauth', router)
}