'use strict'

//Modelo
const Hotel = require('../models/hotel')

function saveHotel(req, res) {
  let hotel = new Hotel()
	hotel.name = req.body.name
	hotel.stars = req.body.stars
	hotel.images = req.body.images
	hotel.price = req.body.price
	hotel.description = req.body.description

	hotel.save((err, hotelStored) => {
		if(err) res.status(500).send({ message: `Error al insertar la información en la base de datos: ${err}` })

		res.status(200).send({ message: hotelStored })
	})
}

function getHotel(req, res) {
  let hotelId = req.params.hotelId

	Hotel.findById(hotelId, (err, hotel) => {
		if(err) return res.status(500).send({ message: `Error al realizar la petición ${err}` })
		if(!hotel) return res.status(404).send({ message: 'El hotel que intenta buscar no existe' })

		res.status(200).send({ hotel })
	})
}

function getHotels(req, res) {
  Hotel.find({}, (err, hotels) => {
		if(err) return res.status(500).send({ message: `Error al realizar la petición ${err}` })
		if(!hotels) return res.status(404).send({ message: 'No existen hoteles en el momento' })

		res.send(200, { hotels })
	})
}

function updateHotel(req, res) {
  let hotelId = req.params.hotelId
	let update = req.body

	Hotel.findByIdAndUpdate(hotelId, update, (err, hotelUpdated) => {
		if(!hotelUpdated) return res.status(404).send({ message: 'El hotel que intenta actualizar no existe' })
		if(err) return res.status(500).send({ message: `Error al actualizar el hotel: ${err}` })

		res.status(200).send({ message: 'Hotel actualizado correctamente' })
	})
}

function deleteHotel(req, res) {
  let hotelId = req.params.hotelId

	Hotel.findById(hotelId, (err, hotel) => {
		if(!hotel) return res.status(404).send({ message: 'El hotel que intenta eliminar no existe' })

		if(err) return res.status(500).send({ message: `Error al eliminar el hotel: ${err}` })

		hotel.remove(err => {
			if(err) res.status(500).send({ message: `Error al eliminar el hotel: ${err}` })
			res.status(200).send({ message: 'El hotel ha sido eliminado correctamente' })
		})
	})
}

module.exports = {
  saveHotel,
  getHotel,
  getHotels,
  updateHotel,
  deleteHotel,
}
