import { join } from 'path';

export default () => ({
  mysqlOptions: {
    type: 'mysql',
    host: process.env.DB_SERVER_HOST,
    port: Number(process.env.DB_SERVER_PORT),
    username: process.env.DB_SERVER_USERNAME,
    password: process.env.DB_SERVER_PASSWORD,
    database: process.env.DATABASE,
    entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
    autoLoadEntities: !(
      process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production'
    ),
    synchronize: !(
      process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production'
    ),
  },
});
