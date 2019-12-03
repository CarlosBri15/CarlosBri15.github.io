/* eslint-disable consistent-return */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: [true, 'email requiered'] },
  password: { type: String, required: [true, 'password requiered'] },
  firstname: { type: String, required: [true, 'firstname requiered'] },
  surname: { type: String, required: [true, 'surname requiered'] },
  avatarImage: { type: String },
  phone: { type: String, minlength: 9, maxlength: 9 },
  signUpDate: { type: Date, default: Date.now() },
});

userSchema.pre('save', function encrypt(next) {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (error, salt) => {
    if (error) return next();

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});


module.exports = mongoose.model('User', userSchema);
