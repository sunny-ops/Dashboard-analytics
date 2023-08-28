const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
const ClientModel = mongoose.model("clients", ClientSchema);
module.exports = ClientModel;
