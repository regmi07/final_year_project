const Payment = require("../models/payment.model.js")

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