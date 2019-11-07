import Sequelize from 'sequelize';
import config from './config';
import { Items } from '../models';

export const sequelize = new Sequelize(config.database, config.username, config.password, config);

async function insert(model) {
  return Items.create(model);
}

async function getAll() {
  return Items.findAll();
}

export default { insert, getAll };