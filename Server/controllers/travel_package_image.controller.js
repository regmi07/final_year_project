const TravelPackageImage = require('../models/travel_package_image.model.js');
const imageKit = require('../config/imagekit.config');

exports.create = (req,res) => {
    if(!req.files){
        res.status(400).send({
            message: "Content cannot be empty"
        })
        return
    }

    req.files.map((file) => {
        imageKit.upload({
            file: file.buffer.toString('base64'),
            fileName: file.originalname,
            folder: 'travel_package_image'
        }, (err,response) => {
            if(err){
                console.log('err occured while uploading travel package image')
                return res.status(500).json({
                    status: "failed",
                    message: "An error occured during file upload. Please try again."
                  })
            }else{
                console.log('uploaded')
                const newTravelPackageImage = new TravelPackageImage({
                    id: response.fileId, 
                    type: response.fileType,
                    name: response.name,
                    imagesrc: response.url,
                    travelPackageId: req.body.travel_package_id
                })
                TravelPackageImage.create(newTravelPackageImage, (err,data) => {
                    if(err){
                        res.status(500).send({
                            message: err.message || "some error occured while creating new travel_package_image"
                        })
                        return
                    }
                })
            }
        })
    })
    res.status(200).send({message: 'Travel Package Images successfully uploaded'})
}

exports.remove = (req,res) => {
    const id = req.params.travel_package_image_id
    TravelPackageImage.remove(id, (err,data) => {
        if(err){
            console.log('error while removing travel_package_image by id:  ', err)
            res.status(500).send({
                message: err.message || "Some error occured while deleting instructed liked hotel review"
            })
        }else
            res.send(data)
    })
}