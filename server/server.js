const path = require('path')
const express = require('express')

const bets = require('./routes/bets')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/bets', bets)

module.exports = server
