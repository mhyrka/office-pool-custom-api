exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_picks', table => {
    table.increments('id')
    table.text('user_name')
    table.specificType('picks', "text[]")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_picks')
}
