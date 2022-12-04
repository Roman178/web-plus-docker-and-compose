export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  db: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'student',
    password: process.env.POSTGRES_PASSWORD || 'student',
    databaseName: process.env.POSTGRES_DB || 'kupipodariday',
  },
  jwtSecret: process.env.JWT_SECRET || 'jwtSecret',
  emailDistributionSMTPT: {
    email: 'VasTopVas@yandex.ru',
    password: 'psqrvrudhxjvqwnk',
    host: 'smtp.yandex.ru',
    port: 465,
    testHost: 'smtp.ethereal.email',
    testPort: 587,
  },
});
