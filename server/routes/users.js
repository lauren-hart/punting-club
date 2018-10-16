const express = require('express')
const db = require('../db')
const router = express.Router()
router.use(express.json())

// GET ROUTES (get members)

router.get('/', (req, res) => {
  db.getUsers()
    .then(result => {
      res.json({result})
    })
})

module.exports = router
