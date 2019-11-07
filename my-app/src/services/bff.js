import axios from 'axios';

const HOST = 'http://localhost:3001'

export async function postValue(value) {
  await axios.post(HOST, value);
};

export async function getItems() {
  return await axios.get(HOST);
};