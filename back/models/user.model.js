const mongoose = require("mongoose");
const { isEmail } = require("validator");

const schema = mongoose.Schema;

const userSchema = new schema({
  pseudo: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 55,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail],
    lowercase: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    minlength: 6,
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
