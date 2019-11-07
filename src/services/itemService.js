import Sequelize from 'sequelize';
import config from './config';
// eslint-disable-next-line import/named
import { Items } from '../models';

export const sequelize = new Sequelize(config.database, config.username, config.password, config);

async function insert(model) {
  return Items.create(model);
}

async function getAll() {
  return Items.findAll({ limit: 10 });
}

export default { insert, getAll };
