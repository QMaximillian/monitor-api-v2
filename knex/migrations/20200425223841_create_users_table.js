exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.uuid('id').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.unique('email');
    table.unique('id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
