import { expect } from 'chai';
import { spy } from 'sinon';
import faker from 'faker';
import * as items from '../../src/controllers/items.controller';

describe('items - Controller', () => {
  describe('insert', () => {
    it('should be defined', () => {
      expect(items.insertItem).not.to.be.undefined;
    });
    it('should be able to insert item', async () => {
      const res = {
        json: spy(),
        status: spy()
      };
      await items.insertItem(
        {
          body: {
            item: faker.random.word()
          }
        },
        res
      );
      expect(res.status.args[0][0]).to.equal(201);
    });
    it('should throw an exception if the body is incorrect', async () => {
      const res = {
        json: spy(),
        status: spy()
      };
      await items.insertItem({ body: {} }, res);
      expect(res.json.calledOnce).to.be.true;
      expect(res.status.args[0][0]).to.equal(500);
    });
  });
  describe('getAll', () => {
    it('should be defined', () => {
      expect(items.getItems).not.to.be.undefined;
    });
    it('should be able to get all items', async () => {
      const res = {
        json: spy(),
        status: spy()
      };
      await items.getItems({}, res);
      expect(res.json.calledOnce).to.be.true;
      expect(res.status.args[0][0]).to.equal(200);
    });
  });
});
