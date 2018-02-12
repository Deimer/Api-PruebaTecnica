'use strict'

//Imports
const express = require('express')
const bodyParser = require('body-parser')
//Plantilla
const hbs = require('express-handlebars')
//Variables de configuración
const app = express()
//Controladores
const api = require('./routes')

app.use(bodyParser.urlencoded({ exteded: false }))
app.use(bodyParser.json())
app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/login', (req, res) => {
  res.render('login')
})

module.exports = app
