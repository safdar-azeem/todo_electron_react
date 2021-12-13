const Router = require("express").Router();
const Controller = require("./controller");

Router.get("/", Controller.get);
Router.get('/get_contact/:id', Controller.getById);
Router.post("/", Controller.create);
Router.patch("/:id", Controller.update);
Router.delete("/:id", Controller.delete);

module.exports = Router;
