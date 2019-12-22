// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
      connection: 'postgres://localhost/new_years'
    }
  },


  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
