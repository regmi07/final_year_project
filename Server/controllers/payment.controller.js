const Payment = require("../models/payment.model.js")
const axios = require('axios');

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

    const newPayment = new Payment({
        paymenttype: req.body.payment_type,
        paidamount: req.body.paid_amount,
        total_amount: req.body.total_amount
    })

    Payment.create(newPayment, (err,data) => {
        if(err)
            res.status(500).send({
                message: err.message || "some error occured while creating new payment for booking"
            })
        else
            res.send(data)
    })
}

exports.createKhaltiPayment = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        })
    }

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

    console.log(req.body, " :rew.body")

    const newpayment = new Payment({
        paymenttype: 'khalti',
    })
}