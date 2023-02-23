const mongoose = require('mongoose');

const move = new mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    regNo: {
        type: String,
        required: true
      },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    reason:String,
    activity: {
        type: String,
        enum: ['going', 'coming'],
        required: true
      },
      location: {
        type: String,
        required: true
      }

     
})

module.exports = mongoose.model('reportMoves',move);