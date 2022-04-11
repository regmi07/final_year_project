const sql = require('./database.js');

const Payment = function(payment) {
    this.paymenttype = payment.paymenttype
    this.paidamount = payment.paidamount
    this.total_amount = payment.total_amount
}

Payment.create = (newPayment, result) => {
    sql.query(`INSERT INTO payment SET ?`, newPayment, (err,res) => {
        if(err){
            console.log('error occured while creating payment')
            result(err,null)
            return
        }

        console.log('created new payment: ', {id: res.insertId, ...newPayment})
        result(null, {id: res.insertId, ...newPayment})
    })
}

Payment.updatePaidAmount = (paymentid, paid_amount, result) => {
    sql.query(`UPDATE payment SET paidamount = ${paid_amount} WHERE payment_id = ${paymentid}`, (err,res) => {
        if(err){
            console.log('error while updating paid amount')
            result(err, null)
            return
        }

        if(res.length){
            console.log('found payment', res)
            result(null,res)
            return
        }

        result({kind: "not_found"},null)
    })
}

module.exports = Payment

