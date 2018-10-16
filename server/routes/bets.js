const express = require('express')
const db = require('../db')
const router = express.Router()
router.use(express.json())

// GET ROUTES (get bets)

router.get('/', (req, res) => {
  db.getBets()
    .then(result => {
      console.log(result)
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

// POST ROUTES (add new bet)
router.post('/addbet', (req, res) => {
  const bet = req.body
  db.addBet(bet)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' +
      err.message)
    })
})

// PUT ROUTE (edit bet)
router.put('/editbet/:id', (req, res) => {
  const id = req.params.id
  const bet = req.body
  db.editBet(id, bet)
    .then(bet => {
    /* eslint-disable no-console */
      console.log('sending back edited bet')
      res.json({bet})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' +
      err.message)
    })
})

module.exports = router
