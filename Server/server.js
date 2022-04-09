const express = require("express")
const cors = require("cors")

const app = express()

var corsOption = {
    origin: ["http://localhost:3000","http://localhost:3006"]
}

global.__basedir = __dirname;

app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get("/", (req,res) => {
    res.json({message: "Welcome to nodejs"})
})

require("dotenv").config()
require("./routes/destination.routes.js")(app);
require("./routes/user.routes.js")(app)
require('./routes/auth.routes.js')(app)
require('./routes/owner.routes.js')(app)
require('./routes/upload_destination_image.routes.js')(app)
require('./routes/ownerimage.routes.js')(app)
require('./routes/mail.routes.js')(app)
require('./routes/payment.routes')(app)
require('./routes/reviews.routes.js')(app)
require('./routes/liked_hotel_reviews.routes.js')(app)
require('./routes/google.auth.routes.js')(app)

const PORT = process.env.PORT || 8082
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})