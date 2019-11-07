import { postItem } from '../../services/bff';
describe('<postItem> - Async Function', () => {
  async function apiRequestGET(done) {
    const response = await postItem({item: 'test'});
    expect(response.status).toEqual(200);
    expect(response.json).toHaveLength(10);
    done();
  }
it('returns 200 and the response on a valid GET call', apiRequestGET);
});