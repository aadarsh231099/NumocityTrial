const {expect} = require('chai');
const size=require('../tshirts/tshirts_size');

describe('tests for tshirt-size:', function() {
  it('should return "Enter positive value" when the value is less than 0', function() {
    expect(size(-2)).equals('Enter positive value');
  });
  it('should return "S" when the value is 38', function() {
    expect(size(38)).equals('S');
  });
  it('should return "M" when the value is 39', function() {
    expect(size(39)).equals('M');
  });
  it('should return "L" when the value is 42', function() {
    expect(size(43)).equals('L');
  });
  it('should return "Value out of size limits" when the value is more than 50', function() {
    expect(size(51)).equals('Value out of size limits');
  });
});
