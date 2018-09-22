// @ts-check
const mongoose = require('mongoose');

const { Schema } = mongoose;
const settingsSchema = new Schema(
  {
    name: String,
  },
  {
    collection: 'settings',
    read: 'nearest',
  },
);
const Settings = mongoose.model('Settings', settingsSchema);
module.exports = Settings;
