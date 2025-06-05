import * as dotenv from 'dotenv';
import { PoolOptions } from 'mysql2';
import { StoreDriver } from '../types';

dotenv.config();
interface Config {
  port: number;
  nodeEnv: string;
  mysql: PoolOptions;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV ?? 'development',
  mysql: {
    database: process.env.MYSQL_DB ?? 'db',
    user: process.env.MYSQL_USER ?? 'root',
    password: process.env.MYSQL_PASSWORD ?? '',
    host: process.env.MYSQL_HOST ?? 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
  },
};

export default config;
