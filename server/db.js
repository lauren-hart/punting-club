const config = require('../knexfile').development
const connection = require('knex')(config)

module.exports = {
  getBets,
  deleteBet
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
