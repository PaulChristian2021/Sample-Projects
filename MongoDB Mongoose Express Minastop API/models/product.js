const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ratingrate: {
    type: Number,
    required: true,
  },
  ratingcount: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema)