import { ArtworkSearch, Artwork, APIPayload, APIConfig } from '../types';
import axios from 'axios';

export class ArtworkService {
  private readonly apiBaseURL: string = 'https://api.artic.edu/api/v1';

  async searchArtworks(): Promise<ArtworkSearch[]> {
    const artWorksEndpoint = `${this.apiBaseURL}/artworks/search`;
    const result = await axios.get(artWorksEndpoint, {
      params: {
        q: '(jack) OR (michel)',
        limit: 1,
        page: 1,
      },
    });
    return result.data.data;
  }

  async getArtwork(artworkID: number): Promise<APIPayload> {
    const artworksImageEndpoint = `${this.apiBaseURL}/artworks/${artworkID}`;
    const { data } = await axios.get(artworksImageEndpoint);

    return {
      data: data.data,
      config: data.config,
    };
  }

  async getArtworks(artworkIDs: number[]): Promise<APIPayload> {
    const artworksImageEndpoint = `${this.apiBaseURL}/artworks`;
    const { data } = await axios.get(artworksImageEndpoint, {
      params: {
        ids: artworkIDs.join(','),
      },
    });

    return {
      data: data.data,
      config: data.config,
    };
  }

  async downloadArtworkImage(
    artwork: Artwork,
    APIConfig: APIConfig,
  ): Promise<string> {
    const artworkImageURL = `${APIConfig.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`;
    const result = await axios.get(artworkImageURL, {
      responseType: 'arraybuffer',
    });
    return result.data;
  }
}
