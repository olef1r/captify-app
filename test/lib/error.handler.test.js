import sinon from 'sinon';
import { expect } from 'chai';
import errorHandler from '../../src/lib/error.handler';

describe('errorHandler', () => {
  it('should return the correct error', () => {
    const res = { json: sinon.fake(), status: sinon.fake() };
    errorHandler(res, {});
    expect(res.json.calledOnce);
    expect(res.status.calledOnce);
    errorHandler(res, new Error('error message'));
    expect(res.json.calledTwice);
    expect(res.status.calledTwice);
    expect(res.status.firstCall.args[0]).to.equal(500);
    expect(res.status.secondCall.args[0]).to.equal(500);
    expect(res.json.secondCall.args[0].extraInfo).to.equal('error message');
  });
});
