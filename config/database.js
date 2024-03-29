module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '124.158.107.34'),
      // host: env('DATABASE_HOST', '192.168.88.78'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'bagshinfo'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'RelativitY@9'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
