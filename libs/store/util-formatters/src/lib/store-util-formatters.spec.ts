import { formatRating } from './store-util-formatters';

describe('storeUtilFormatters', () => {
  it('should work', () => {
    expect(formatRating(0.1349823498)).toEqual('1.3 / 10');
  });
});
