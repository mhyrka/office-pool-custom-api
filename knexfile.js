module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/users'
  },
  test: {},
  production: {
    client: 'pg',
    connection: 'postgres://lwszogzwaqfsil:16cfe93c2101800fbb7b344c347b1d47273c4aabf24bfffc4ec571a985075e53@ec2-107-20-133-82.compute-1.amazonaws.com:5432/dcmjr80gmgutcs'
  }
}
