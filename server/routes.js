const Router = require("express").Router();
const authProtect = require("./middleware");
const ListRoutes = require("./contacts");

Router.use("/contacts", authProtect, ListRoutes);

module.exports = Router;
