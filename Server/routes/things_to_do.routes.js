module.exports = app => {
    const thingsToDo = require("../controllers/things_to_do.controller.js");
    const {auth} = require("../middleware")

    var router = require("express").Router();

    router.post("/", [auth.verifyToken, auth.isAdmin],thingsToDo.create);

    router.get("/", thingsToDo.findAll);
    router.get("/bydestination/:destination_id", thingsToDo.findByDestination)
    router.get("/:id", thingsToDo.findOne);

    router.put("/:id", [auth.verifyToken, auth.isAdmin], thingsToDo.update);

    router.delete(":/id", [auth.verifyToken, auth.isAdmin], thingsToDo.delete);

    app.use('/thingstodo', router);
}