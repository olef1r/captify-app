import express from 'express';
import { getItems, insertItem } from '../controllers/items.controller';

const itemsRouter = new express.Router();

itemsRouter.get('/', getItems);
itemsRouter.post('/', insertItem);

export default itemsRouter;