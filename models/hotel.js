'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HotelSchema = Schema({
  name: String,
  stars: { type: String, default: '0' },
  images: { type: String, default: 'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg' },
  price: { type: Number, default: 0 },
  description: String
})

module.exports = mongoose.model('Hotel', HotelSchema)
