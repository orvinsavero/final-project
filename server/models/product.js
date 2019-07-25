const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ApiSchema = new Schema({
  name: String,
  created_at: Date,
  status: String,
  images: [{ type: String }],
  category: String,
  initialPrice: Number,
  bidPrices : [{ type: Number }],
  details: { type: String },
  UserId: { type: Schema.Types.ObjectId, ref: 'User'}
});

const Api = mongoose.model("Api", ApiSchema);

module.exports = Api;