import * as fs from 'async-file';

async function getItems() {
  try {
    const res =  await fs.readFile('/home/anastasiia/Documents/captify/src/data.json');
    //console.log(res.toString())
    return res.toString();
  } catch (error) {
    console.error(error)
  }
};

async function insertItem(value) {
  try {
    const res =  await fs.appendFile('/home/anastasiia/Documents/captify/src/data.json', value);
    console.log(res)
  } catch (error) {
    console.error(error)
  }
};

export default {
  getItems,
  insertItem
}