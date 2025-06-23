import { Kysely } from 'kysely';
import { DbTable } from '../types';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable(DbTable.ARTWORK)
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('image_id', 'text', (col) => col.notNull())
    .addColumn('title', 'text', (col) => col.notNull())
    .addColumn('description', 'text')
    .addColumn('dimensions', 'text', (col) => col.notNull())
    .addColumn('place_of_origin', 'text', (col) => col.notNull())
    .addColumn('date_display', 'text', (col) => col.notNull())
    .execute();
}


export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable(DbTable.ARTWORK).execute();
}
