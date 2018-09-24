exports.up = (knex, Promise) => {
  return knex.schema.createTable('bets', function (t) {
    t.increments('id')
    t.string('person')
    t.string('couple')
    t.string('sport')
    t.string('bet')
    t.string('amount_bet')
    t.string('amount_won')
    t.string('percentage')
    t.string('date')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('bets')
}
