import { APIConfig } from './api-config.type';
import { Artwork } from './artwork.type';

export type APIPayload = {
  data: Artwork | Artwork[];
  config: APIConfig;
};
