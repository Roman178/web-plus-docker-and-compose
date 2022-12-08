module.exports = [
  {
    name: 'app-backend',
    script: 'dist/main.js',
    env: {
      POSTGRES_HOST: 'postgres',
      POSTGRES_PORT: 5432,
      POSTGRES_USER: 'postgres',
      POSTGRES_PASSWORD: 'postgres',
      POSTGRES_DB: 'postgres',
      JWT_SECRET: 'jwtSecret',
    },
  },
];
