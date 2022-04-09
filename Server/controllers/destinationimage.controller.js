
const DestinationImage = require('../models/destination.image.model')
const imagekit = require('../config/imagekit.config')
exports.create = (req,res) => {
    if(!req.files){
        res.status(400).send({
            message: "Content cannot be empty"
        })
        return
    }
    console.log('destid: ', req.body.destinationid)
    console.log(req.files)
    req.files.map((file) => {
        imagekit.upload({
            file: file.buffer.toString('base64'),
            fileName: file.originalname,
            folder: 'destination_image'
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
                const newDestinationImage = new DestinationImage({
                    id: response.fileId, 
                    type: response.fileType,
                    name: response.name,
                    imagesrc: response.url,
                    destinationid: req.body.destinationid
                })
                DestinationImage.create(newDestinationImage, (err,data) => {
                    if(err){
                        console.log(err)
                        res.status(500).send({
                            message: err.message || "some error occured while creating new destinationimage"
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

    DestinationImage.findBy(req.params.id, 'id', (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while getting destination image by id"
            })

        res.send(data)
    })
}

exports.findByDestination = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    DestinationImage.findBy()
}