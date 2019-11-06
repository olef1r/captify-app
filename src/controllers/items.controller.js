import itemService from '../services/itemService';
import { getValues } from '../lib/getValues';
export  async function getItems(req, res) {
  try {
    let resu = await itemService.getItems();
    resu = getValues(resu);
    res.json(resu)
  } catch (e) {
    console.error(e)
  };
}

export  async function insertItem(req, res) {
    try { 
      const value = req.body.item;
      const resu = await itemService.insertItem(`${value},`);
      res.json(resu)
    } catch (e) {
      console.error(e)
    };
  }