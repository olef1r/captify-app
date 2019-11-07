import itemService from '../services/itemService';
import errorHandler from '../lib/error.handler';

export  async function getItems(req, res) {
  try {
    const result = await itemService.getAll();
    const data = result.map(i => i.item);
    res.status(200);
    res.json(data);
  } catch (e) {
    
    errorHandler(res, e);
  };
}

export async function insertItem(req, res) {
  try { 
    await itemService.insert(req.body);
    res.status(201);
  } catch (e) {
    errorHandler(res, e);
  };
}