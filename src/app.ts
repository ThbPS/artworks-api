import express, { Router } from 'express';
import { storeArtworks } from './api/controllers/artwork.controller';

const app = express();
const router = Router();
router.get('/artworks', storeArtworks);

app.use(express.json());
app.use('/api/v1/', router);

export default app;