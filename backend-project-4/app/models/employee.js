const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  reason: String,
  location: String,
  from_time: String,
  to_time: String,
  from_date: String,
  to_date: String,
  days: [String],
  url:String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  state:{
      type:Boolean,
      default: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Emplyee', employeeSchema)
