const mongoose = require("mongoose");
// import json data
const browsers = require("../jsons/browsers.json");

// import Mongoose Model
const BrowserModel = require("./BrowserModel");

mongoose.connect("mongodb://127.0.0.1:27017/datas");

mongoose.connection.once("open", () => {
  console.log("mongoose connection success");
  BrowserModel.create(browsers);
});
