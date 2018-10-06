const express = require('express')

const db = require('../db')

const router = express.Router()

router.use(express.json())

// API client has requested getBets from server
// we are requesting a response from the db now
// we want the response to be a json object
router.get('/', (req, res) => {
  db.getBets()
    .then(result => {
      res.json({result})
    })
})

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  db.deleteBets(id)
    .then(bet => {
      res.status(200).json({
        ok: true,
        message: 'Product has been deleted.'
      })
    })
    .catch(({message}) => {
      res.status(500).json({
        ok: false,
        message
      })
    })
})

module.exports = router
