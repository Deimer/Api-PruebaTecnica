'use strict'
//Imports
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
	if(err) {
		console.error(`Error al conectar con base de datos: ${err}`)
	} else {
		console.log('Conexión a la base de datos establecida')

		app.listen(config.port, () => {
			console.log(`API REST iniciada en http://localhost:${config.port}`)
		})
	}
})
