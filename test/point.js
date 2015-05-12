import Point from '../lib/point';
var assert = require('assert');

describe('Point', function(){
  it('should do return a point value', function(){
    let point = new Point(1, 2);
    assert.equal(point, '(1, 2)');
  });
});
