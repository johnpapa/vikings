// @ts-check
const mongoose = require('mongoose');

const { Schema } = mongoose;
const villainSchema = new Schema(
  {
    id: String,
    name: String,
    description: String,
  },
  {
    collection: 'villains',
    read: 'nearest',
  },
);

const Villain = mongoose.model('Villain', villainSchema);

module.exports = Villain;
