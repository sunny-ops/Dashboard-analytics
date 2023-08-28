const mongoose = require("mongoose");
// import json data

let clients = [
  { username: "sunny", email: "sunny@gmail.com", password: "123456" },
];

// import Mongoose Model
const ClientModel = require("./ClientModel");
console.log(clients);

mongoose.connect("mongodb://127.0.0.1:27017/datas");

mongoose.connection.once("open", () => {
  console.log("mongoose connection success");
  ClientModel.create(clients);
});
