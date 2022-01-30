const mongoose = require("mongoose");

const helpArticleSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
 
});

module.exports = mongoose.model('help_articles', helpArticleSchema)