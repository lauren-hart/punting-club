const express = require('express')
const db = require('../db')
const router = express.Router()
router.use(express.json())

// GET ROUTES (get bets)

router.get('/', (req, res) => {
  db.getBets()
    .then(result => {
      res.json({result})
    })
})

// DELETE ROUTES (delete bet by id)
router.delete('/:id', (req, res) => {
  const betId = req.params.id
  db.deleteBet(betId)
    .then(() => {
      res.json({})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' +
      err.message)
    })
})

module.exports = router
