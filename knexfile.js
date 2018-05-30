module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/users'
  },
  test: {},
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
