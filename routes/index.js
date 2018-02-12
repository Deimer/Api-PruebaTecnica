'use strict'

const express = require('express')
const hotelController = require('../controllers/hotel')
const userController = require('../controllers/auth');
const auth = require('../middlewares/auth')
const api = express.Router()

/******************** Rutas para usuarios estandar ********************/

//Ruta para obtener una lista de hoteles
api.get('/m/v1/hotels', hotelController.getHotels)
//Ruta para obtener un hotel por su id
api.get('/m/v1/hotel/:hotelId', hotelController.getHotel)
//Ruta para crear un nuevo objeto hotel
api.post('/m/v1/admin/hotel', auth, hotelController.saveHotel)
//Ruta para actualizar la información de un hotel
api.put('/m/v1/admin/hotel/:hotelId', auth, hotelController.updateHotel)
//Ruta para eliminar un objeto hotel
api.delete('/m/v1/admin/hotel/:hotelId', auth, hotelController.deleteHotel)

/******************** Rutas para usuarios logueados ********************/

//Ruta para validar la autenticación
api.get('/m/v1/admin', auth, (req, res) => {
  res.status(200).send({ message: 'Acceso permitido' })
})
//Ruta para registrar un nuevo usuario
api.post('/register', userController.signUp)
//Ruta para la autenticación de usuario
api.post('/login', userController.signIn)

module.exports = api
