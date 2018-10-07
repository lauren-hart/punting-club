const config = require('../knexfile').development
const connection = require('knex')(config)

module.exports = {
  getBets,
  deleteBet,
  addBet
}

// GET bets from database
function getBets (testDb) {
  const db = testDb || connection
  return db('bets')
    .select('id', 'person', 'couple', 'sport', 'bet', 'amount_bet as amountBet', 'amount_won as amountWon', 'percentage')
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
      amount_won: bet.amountWon
    })
}
