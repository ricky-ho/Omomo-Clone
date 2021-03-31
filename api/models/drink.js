const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: { type: String },
  abbr: { type: String },
  price: { type: Number },
  imgMenu: { type: String },
  imgModal: { type: String },
});

module.exports = mongoose.model("drink", drinkSchema);
