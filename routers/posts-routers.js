import express from 'express';

import { index, show } from '../controllers/posts-controllers.js';

const router = express.Router();
router.get('/', index);
router.get('/', show);

export default router;