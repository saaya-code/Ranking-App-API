const mongoose = require('mongoose')

const Etudiant = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  moyenne: {
    type: Number,
    required: true
  },
  classe: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('etudiant', Etudiant)
