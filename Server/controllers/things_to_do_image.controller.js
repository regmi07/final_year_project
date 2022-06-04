const ThingsToDoImage = require('../models/things_to_do_image.model')
const imagekit = require('../config/imagekit.config')
exports.create = (req,res) => {
    if(!req.files){
        res.status(400).send({
            message: "Content cannot be empty"
        })
        return
    }

    req.files.map((file) => {
        imagekit.upload({
            file: file.buffer.toString('base64'),
            fileName: file.originalname,
            folder: 'things_to_do_image'
        }, (err,response) => {
            if(err){
                console.log('err occured')
                console.log(err)
                return res.status(500).json({
                    status: "failed",
                    message: "An error occured during file upload. Please try again."
                  })
            }else{
                console.log('uploaded')
                const newThingsToDoImage = new ThingsToDoImage({
                    id: response.fileId, 
                    type: response.fileType,
                    name: response.name,
                    imagesrc: response.url,
                    thingstodoid: req.body.thingstodoid
                })
                ThingsToDoImage.create(newThingsToDoImage, (err,data) => {
                    if(err){
                        console.log(err)
                        res.status(500).send({
                            message: err.message || "some error occured while creating new things to do image"
                        })
                        return
                    }
                })
            } 
        })

    })
    res.status(200).send({message: 'Images successfully uploaded'})
}

exports.findOne = (res,req) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    ThingsToDoImage.findBy(req.params.id, 'id', (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while getting things to do image by id"
            })

        res.send(data)
    })
}
