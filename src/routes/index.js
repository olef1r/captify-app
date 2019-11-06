import express from 'express';
import items from './items.router';

const router = express.Router();

router.use('/', items);

export default router;