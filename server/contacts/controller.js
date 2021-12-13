const Model = require("./model");
const STATUS_CODE = require("../status_codes");

const Controller = {};

Controller.get = async (req, res) => {
  try {
    const result = await Model.find(req.query);
    res.status(STATUS_CODE.SUCCESS).json(result);
  } catch (err) {
    console.error("Error in getting items - " + err);
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json([]);
  }
};

Controller.create = async (req, res) => {
  try {
    const item = new Model(req.body);
    const result = await item.save();
    res.status(STATUS_CODE.SUCCESS).json(result);
  } catch (err) {
    console.error("Error in creating items - " + err);
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json([]);
  }
};

Controller.update = async (req, res) => {
  try {
    const id = req.body._id;
    delete req.body._id;
    const result = await Model.updateOne({ _id: id }, req.body);
    res.status(STATUS_CODE.SUCCESS).json({ _id: id, ...req.body });
  } catch (err) {
    console.error("Error in updating items - " + err);
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json([]);
  }
};

Controller.delete = async (req, res) => {
  try {
    const result = await Model.findByIdAndRemove(req.params.id);
    res.status(STATUS_CODE.SUCCESS).json({ _id: req.params.id });
  } catch (err) {
    console.error("Error in deleting items - " + err);
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json([]);
  }
};

Controller.getById = async (req, res) => {
  try {
    console.log(req.params.id);
    const result = await Model.findById(req.params.id);
    console.log(result);
    res.status(STATUS_CODE.SUCCESS).json(result);
  } catch (err) {
    console.error("Error in getting items - " + err);
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json([]);
  }
};

module.exports = Controller;
