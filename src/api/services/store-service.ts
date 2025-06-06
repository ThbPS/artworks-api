import { writeFile, readFile, mkdir, access } from 'fs/promises';
import { join, dirname } from 'path';
import { Stream } from 'stream';
import { mysqlDB } from '../connectors/mysql.connector';
import {
  DbTable,
  NewArtwork,
  ArtworkUpdate,
  SelectArtwork,
  StoreDriver,
} from '../types';

export class StoreService {
  private readonly LOG_CONTEXT = StoreService.name;
  private readonly STORE_DIR = join(dirname(__dirname), 'db');
  private readonly driver: StoreDriver;

  constructor(driver: StoreDriver = StoreDriver.FILESYSTEM) {
    this.driver = driver;
  }

  async getCollection<T extends SelectArtwork>(id: number): Promise<T> {
    if (this.driver === StoreDriver.MYSQL) {
      const artwork = await mysqlDB
        .selectFrom(DbTable.ARTWORK)
        .selectAll()
        .where('id', '=', id)
        .executeTakeFirstOrThrow();
      return artwork as T;
    }

    const hasArtCollection = await this.hasCollection(id);
    if (!hasArtCollection) {
      throw new Error(
        `[${this.LOG_CONTEXT}] Storage directory for collectionID ${id} doesn't exists`,
      );
    }

    const path = this.getCollectionPath(id);
    const json = await readFile(path, { encoding: 'utf-8' });
    return JSON.parse(json);
  }

  async setCollection<T>(collectionID: number, payload: T): Promise<void> {
    if (this.driver === StoreDriver.MYSQL) {
      const artwork = await mysqlDB
        .selectFrom(DbTable.ARTWORK)
        .select('id')
        .where('id', '=', collectionID)
        .executeTakeFirst();

      if (artwork === undefined) {
        await mysqlDB
          .insertInto(DbTable.ARTWORK)
          .values(payload as NewArtwork)
          .execute();
      } else {
        await mysqlDB
          .updateTable(DbTable.ARTWORK)
          .set(payload as ArtworkUpdate)
          .where('id', '=', collectionID)
          .execute();
      }

      return;
    }

    const artCollectionDir = join(this.STORE_DIR, collectionID.toString());
    const artCollectionFilename = join(
      artCollectionDir,
      `${collectionID}.json`,
    );

    await mkdir(artCollectionDir, {
      recursive: true,
    });

    await writeFile(artCollectionFilename, JSON.stringify(payload, null, 2));
  }

  async setCollectionImage<T>(
    collectionID: number,
    imageID: string,
    payload: string | Buffer | Stream,
  ) {
    const artCollectionDir = join(this.STORE_DIR, collectionID.toString());
    const artCollectionImagePath = join(artCollectionDir, `${imageID}.jpg`);

    await mkdir(artCollectionDir, {
      recursive: true,
    });

    await writeFile(artCollectionImagePath, payload);
  }

  private getCollectionPath(id: number): string {
    const artCollectionDir = join(this.STORE_DIR, id.toString());
    return join(artCollectionDir, `${id}.json`);
  }

  private async hasCollection(id: number): Promise<boolean> {
    try {
      const path = this.getCollectionPath(id);
      await access(path);
      return true;
    } catch (error: any) {
      return false;
    }
  }
}
