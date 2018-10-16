const path = require('path')
const express = require('express')

const bets = require('./routes/bets')
const members = require('./routes/members')
const users = require('./routes/users')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/bets', bets)
server.use('/api/v1/members', members)
server.use('/api/v1/users', users)

module.exports = server
