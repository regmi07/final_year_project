const axios = require('axios')

forwardGeocoding = async(req, res, next) => {
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(req.body.name)}.json?country=np&access_token=${process.env.MAP_BOX_ACCESS_TOKEN}&limit=1`
    const response = await axios.get(url)
    if(response.data.features.length !== 0){
        console.log(response.data)
        req.body['location'] = response.data.features[0].place_name
        req.body['longitude'] = response.data.features[0].center[0]
        req.body['latitude'] = response.data.features[0].center[1]
    }
    else
        res.status(500).send({
            message: `couldn't find ${req.body.name}`
        })
    next()
}

const geocoding = {
    forwardGeocoding: forwardGeocoding
}

module.exports = geocoding