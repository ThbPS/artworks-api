import { Request, Response, NextFunction } from 'express';
import { ArtworkService } from '../services/artwork.service';
import { StoreService } from '../services/store-service';
import { Artwork } from '../types';

const artworkService = new ArtworkService();
const storeService = new StoreService();

export const storeArtworks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const artworksSearch = await artworkService.searchArtworks();
  const artworkIDs = [];

  for (const artwork of artworksSearch) {
    artworkIDs.push(artwork.id);
  }

  const { data, config } = await artworkService.getArtworks(artworkIDs);

  if (!Array.isArray(data)) {
    throw new Error(`No artworks found with IDS ${artworkIDs.join(',')}`);
  }

  for (const artwork of data) {
    const imageBuffer = await artworkService.downloadArtworkImage(
      artwork,
      config,
    );
  }

  res.status(200).json(data);
};
