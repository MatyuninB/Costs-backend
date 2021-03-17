const mongoose = require('mongoose');

const { Schema } = mongoose;

const costScheme = new Schema({
  shop: String,
  date: String,
  cost: Number
});



module.exports = Costs = mongoose.model('cost', costScheme);  