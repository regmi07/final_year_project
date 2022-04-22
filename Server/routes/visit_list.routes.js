module.exports = app => {
    const visitList = require('../controllers/visit_list.controller.js');
    const {auth} = require('../middleware')

    var router = require("express").Router()

    router.post("/", auth.verifyToken, visitList.create)

    router.get("/plantovisitlist/user/:user", auth.verifyToken, visitList.findPlanToVisitListByUser)
    router.get("/visitedlist/user/:user", auth.verifyToken, visitList.findVisitedListByUser)
    router.get("/visitedlist/destination/:destination", visitList.findVisitedListByDestiation)
    router.get("/byid", visitList.findVisitedListById)

    router.delete("/delete/:destination", auth.verifyToken, visitList.deleteVisitedListById)

    app.use('/visitlist', router)
}