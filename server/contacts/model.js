const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = Schema({
  name: { type: String, default: "" },
  phone: { type: String, default: "" },
  email: { type: String, default: "" },
});

const ListModel = mongoose.model("List", ListSchema);

module.exports = ListModel;
