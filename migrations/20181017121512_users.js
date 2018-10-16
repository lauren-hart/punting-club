exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('email').unique()
    t.string('password')
    t.string('couple')
    t.string('imagesolo')
    t.string('imagecouple')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
