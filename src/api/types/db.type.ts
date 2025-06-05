import { ColumnType, Insertable, Selectable, Updateable } from 'kysely';

export enum DbTable {
  ARTWORK = 'artwork',
}

export interface Database {
  [DbTable.ARTWORK]: ArtworkTable;
}

export interface ArtworkTable {
  id: number;
  image_id: string;
  title: string;
  description: string;
  dimensions: string;
  place_of_origin: string;
  artist_display: string;
  date_display: ColumnType<Date, string, string>;
}

export type SelectArtwork = Selectable<ArtworkTable>;
export type NewArtwork = Insertable<ArtworkTable>;
export type ArtworkUpdate = Updateable<ArtworkTable>;
