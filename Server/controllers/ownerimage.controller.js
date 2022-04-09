
const OwnerImage = require('../models/owner.image.model')
const imagekit = require('../config/imagekit.config')
exports.create = (req,res) => {
    if(!req.files){
        res.status(400).send({
            message: "Content cannot be empty"
        })
        return
    }
    console.log('ownerid: ', req.body.ownerid)
    console.log(req.files)
    req.files.map((file) => {
        imagekit.upload({
            file: file.buffer.toString('base64'),
            fileName: file.originalname,
            folder: 'hotel_image'
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
                const newOwnerImage = new OwnerImage({
                    id: response.fileId, 
                    type: response.fileType,
                    name: response.name,
                    imagesrc: response.url,
                    ownerid: req.body.ownerid
                })
                OwnerImage.create(newOwnerImage, (err,data) => {
                    if(err){
                        console.log(err)
                        res.status(500).send({
                            message: err.message || "some error occured while creating new hotelimage"
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

    OwnerImage.findBy(req.params.id, 'id', (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while getting owner image by id"
            })

        res.send(data)
    })
}

exports.findByOwner = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    OwnerImage.findBy(req.params.ownerid, 'ownerid', (err, data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while getting owner image by ownerid"
            })

        res.send(data)
    })
}