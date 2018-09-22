// @ts-check
const mongoose = require('mongoose');

const { Schema } = mongoose;
const heroSchema = new Schema(
  {
    id: String,
    name: String,
    description: String,
  },
  {
    collection: 'heroes',
    read: 'nearest',
  },
);
const Hero = mongoose.model('Hero', heroSchema);
module.exports = Hero;
