const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBets,
  deleteBet,
  addBet,
  getMembers,
  deleteMember,
  editBet,
  createUser,
  userExists
}

// GET bets from database
function getBets (testDb) {
  const db = testDb || connection
  return db('bets')
    .select('id', 'person', 'couple', 'sport', 'bet', 'amount_bet as amountBet', 'amount_won as amountWon', 'percentage', 'date')
}

// DELETE bet from database by id
function deleteBet (id, testDb) {
  const db = testDb || connection
  return db('bets')
    .where('id', id)
    .del()
}

// ADD bet to database
function addBet (bet, testDb) {
  const db = testDb || connection
  return db('bets')
    .insert({
      person: bet.person,
      couple: bet.couple,
      sport: bet.sport,
      bet: bet.bet,
      amount_bet: bet.amountBet,
      amount_won: bet.amountWon,
      date: bet.date
    })
}

// GET members from database
function getMembers (testDb) {
  const db = testDb || connection
  return db('members')
    .select()
}

// DELETE member from database by id
function deleteMember (id, testDb) {
  const db = testDb || connection
  return db('members')
    .where('id', id)
    .del()
}

// PUT edit bet from database by id
function editBet (id, bet, testDb) {
  const db = testDb || connection
  return db('bets')
    .where('id', id)
    .update({
      person: bet.person,
      couple: bet.couple,
      sport: bet.sport,
      bet: bet.bet,
      amount_bet: bet.amountBet,
      amount_won: bet.amountWon,
      date: bet.date,
      percentage: bet.percentage
    })
}

// POST user to database
function createUser (username, password, conn) {
  const db = conn || connection
  return db('users')
    .insert({username, hash: password})
}

function userExists (username, conn) {
  const db = conn || connection
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}