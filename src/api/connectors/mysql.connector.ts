import config from '../config';
import { createPool } from 'mysql2';
import { Kysely, MysqlDialect, FileMigrationProvider, Migrator } from 'kysely';
import { Database } from '../types/db.type';
import { promises as fs } from 'fs';
import * as path from 'path';

const dialect = new MysqlDialect({
  pool: createPool(config.mysql),
});

export const mysqlDB = new Kysely<Database>({
  dialect,
});

export const migrator = new Migrator({
  db: mysqlDB,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(__dirname, '../migration'),
  }),
  allowUnorderedMigrations: true,
});
