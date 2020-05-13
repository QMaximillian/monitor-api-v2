// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    version: '11.4',
    connection: {
      host: '127.0.0.1',
      user: 'quinnlashinsky',
      password: '',
      database: process.env.DATABASE_DEVELOPMENT,
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds',
    },
  },

  staging: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_STAGING,
      host: '127.0.0.1',
      user: 'quinnlashinsky',
      password: '',
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_PRODUCTION,
      user: 'quinnlashinsky',
      password: '',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
