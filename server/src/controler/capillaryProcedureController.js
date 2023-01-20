const expressRoute = require('express')
const capilarModelRoutes = require('../model/Capillary.js')
const cliente = require('./clientController')

const router = expressRoute.Router()

module.exports = router