const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  // _id: ObjectId,
  _id: String,
  level1_1: Schema.Types.Mixed,
  level1_2: Schema.Types.Mixed,
  level1_3: Schema.Types.Mixed
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;
