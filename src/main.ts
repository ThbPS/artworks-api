import * as express from 'express';
import { Router } from 'express';
import config from './api/config';
import { storeArtworks } from './api/controllers/artwork.controller';

const app = express();
const router = Router();
router.get('/artworks', storeArtworks);

app.use(express.json());
app.use('/api/v1/', router);
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
