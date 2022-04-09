const passport = require("passport")
const cookieSession = require('cookie-session');
module.exports = app => {
    require('../middleware/passport')
    const adminauth = require("../controllers/auth.controller")
    const {verifySignup, auth} = require("../middleware/index")
    var router = require("express").Router()

    app.use(cookieSession({
        name: 'google-auth-session',
        keys: ['key1', 'key2']
      }))

    app.use(passport.initialize());
    app.use(passport.session());

    //admin register
    router.post('/register', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRoleExists], adminauth.register)

    // router.post('/find',adminauth.findBy)

    //admin signin
    router.post('/login',auth.isEmailVerified,adminauth.signin)

    router.get('/failed', (req,res) => {
        console.log('failed')
        res.send('Failed')
    })

    router.get('/success', (req,res) => {[
        res.send(`Welcome ${req.user.email}`)
    ]})

    router.get('/google', passport.authenticate('google', {
        scope: ['email','profile']
    }))

    router.get('/google/callback', passport.authenticate('google', {
        failureRedirect: '/failed',
    }),
        (req,res) => {
            res.redirect('/success')
        }
    )
    
    app.use('/auth', router)
}