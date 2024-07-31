const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: { type: String, auto: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const Accounts = mongoose.model('User', UserSchema);

module.exports = { UserSchema, Accounts };
