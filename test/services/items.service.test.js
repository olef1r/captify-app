import { expect } from 'chai';
import { stub } from 'sinon';
import faker from 'faker';
import Items from '../../src/services/itemService';
import { Items as ItemsModel } from '../../src/models';

describe('<Items>', () => {
  let findAllStub, createStub;
  beforeEach(() => {
    findAllStub = stub(ItemsModel, 'findAll').resolves({ rows: [], count: 0 });
    createStub = stub(ItemsModel, 'create').resolves({ success: true });
  });
  afterEach(() => {
    findAllStub.restore();
    createStub.restore();
  });
  describe('getAll', () => {
    it('should be defined', () => {
      expect(Items.getAll).not.to.be.undefined;
    });
    it('should be possible to get items', async () => {
      const result = await Items.getAll();
      expect(result).to.eql({ rows: [], count: 0 });
      expect(findAllStub.calledOnce).to.be.true;
    });
  });
  describe('insert', () => {
    it('should be defined', () => {
      expect(Items.insert).not.to.be.undefined;
    });
    it('should be possible to insert item', async () => {
      const result = await Items.insert({ data: 'some data'});
      expect(result).to.eql({ success: true });
      expect(createStub.calledOnce).to.be.true;
    });
  });
});
