import config from './api/config';
import { mysqlDB, migrator } from './api/connectors/mysql.connector';
import app from './app';

app.listen(config.port, async () => {
  console.log(`Server running on port ${config.port}`);
  await mysqlDB.connection().execute(async (db) => {
    console.log(
      `MySQL running on host ${config.mysql.host} and port ${config.mysql.port}`,
    );
    console.log(`Start MySQL migrations`);
    await migrator.migrateToLatest();
    console.log(`End MySQL migrations`);
  });
});