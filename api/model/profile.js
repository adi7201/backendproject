const mongoose = require('mongoose');

const profile = new mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    name: String,
    regNo: String,
    phoneNo: Number,
    roomNumber: Number,
    branch: String,

})

module.exports = mongoose.model('profiledetails',profile);