const config = require('../knexfile').development
const connection = require('knex')(config)

module.exports = {
  getBets
}

// The server has asked the database to return
// the selected columns from the bets table
function getBets (testDb) {
  const db = testDb || connection
  return db('bets')
    .select('id', 'person', 'couple', 'sport', 'bet', 'amount_bet as amountBet', 'amount_won as amountWon', 'percentage')
}
