const axios = require('axios');
exports.verifypayment = (req,res) => {
    console.log('verify payment called', req.body)

    let data = {
        "token": req.body.token,
        "amount": req.body.amount
    };

    // console.log(req.headers)
    
    let config = {
        headers: {'Authorization': req.headers.authorization}
    };

	axios.post("https://khalti.com/api/v2/payment/verify/", data, config)
    .then(response => {
        console.log(response.data);
        // res.send({'message': 'payment successful'})
    })
    .catch(error => {
        console.log(error);
    });

}