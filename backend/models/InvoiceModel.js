const mongoose = require("mongoose");
const InvoiceSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  avatarURL: String,
  total: Number,
  date: String,
  balance: Number,
});
const InvoiceModel = mongoose.model("invoices", InvoiceSchema);
module.exports = InvoiceModel;
