module.exports = {
  port: process.env.PORT || 3002,
  db: process.env.MONGODB || 'mongodb://localhost:27017/hoteldb',
  SECRET_TOKEN: 'tokensecretauth'
}
