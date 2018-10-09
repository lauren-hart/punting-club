exports.up = (knex, Promise) => {
  return knex.schema.createTable('members', function (t) {
    t.increments('id')
    t.string('person')
    t.string('couple')
    t.string('email')
    t.string('imagesolo')
    t.string('imagecouple')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('members')
}
