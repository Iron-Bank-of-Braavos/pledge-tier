const db = require('./index.js');
const mongoose = require('mongoose');

const pledgeSchema = mongoose.Schema({
  pledge_ammount: {type: Number, required: true},
  reward: {type: String, required: true},
  eta: {type: String, required: true},
  shipping_location: {type: String, required: true},
  backers: {type: Number, required: true}
});

const Pledge = mongoose.model('Pledge', pledgeSchema);
//Pledge #
//Reward(s)
//ETA date
//shipping location
//Backere #
module.exports = { Pledge };
