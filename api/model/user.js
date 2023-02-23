const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    userType: {
        type: String,
        required: true
      },
    name:  {
        type: String,
        required: true
      },
    regNo: {
        type: String,
        required: true
      },
    phoneNo: {
        type: Number,
        required: true
      },
    roomNumber: {
        type: Number,
        required: true
      },
    branch:  {
        type: String,
        required: true
      },
    email: {
        type: String,
        required: true
      },
    username: {
        type: Number,
        required: true
      },
    password: {
        type: String,
        required: true
      },
})


module.exports = mongoose.model('users',userSchema);