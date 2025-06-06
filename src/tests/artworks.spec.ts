import * as request from 'supertest';
import app from '../app';
import { Artwork } from '../api/types';

describe('GET /artworks', function () {
  it('should get artworks from Picasso', async () => {
    const response = await request(app).get('/api/v1/artworks');
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(false).toBeTruthy();
  });

  it('should get artworks from Monet', async () => {
    const response = await request(app).get('/api/v1/artworks');
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(false).toBeTruthy();
  });
});
