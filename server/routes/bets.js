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

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  db.deleteBets(id)
    .then(bet => {
      res.status(200).json({
        ok: true,
        message: 'Bet has been deleted.'
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
