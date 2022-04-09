const multer = require("multer")

const imageFilter = (req,file,cb) => {
    if(file.mimetype.startsWith("image")){
        console.log(file)
        cb(null, true)
    }else{
        cb('Please upload image images', false)
    }
}

var storage = multer.memoryStorage()

var uploadFile = multer({storage: storage, fileFilter: imageFilter})
module.exports = uploadFile