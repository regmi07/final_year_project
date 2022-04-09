const auth = require('./auth')
const verifySignup = require('./verifySignup')
const upload = require('./upload')
const mail = require('./sendmail')
const geocoding = require('./forwardGeocoding')
// const passport = require('./passport')

module.exports = {
    auth,
    verifySignup,
    upload,
    mail,
    geocoding
}