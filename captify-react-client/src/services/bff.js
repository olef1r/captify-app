import axios from 'axios';
import{ HOST } from '../constants';

export async function postItem(value) {
  return await axios.post(HOST, value);
};

export async function getItems() {
  return await axios.get(HOST);
}; 