const express = require('express')
const db = require('../db')
const router = express.Router()
router.use(express.json())

// GET ROUTES (get members)

router.get('/', (req, res) => {
  db.getMembers()
    .then(result => {
      res.json({result})
    })
})

// DELETE ROUTES (delete member by id)
router.delete('/:id', (req, res) => {
  const memberId = req.params.id
  db.deleteMember(memberId)
    .then(() => {
      res.json({})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' +
      err.message)
    })
})

// POST ROUTES (add new member)
router.post('/addmember', (req, res) => {
  const member = req.body
  db.addMember(member)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' +
      err.message)
    })
})

module.exports = router
