var is = require('../');

describe('BrowserIs', function() {

  function test(ua) {
    var request = { headers: { 'user-agent': ua } };
    return is(request);
  };

  it('detects IE6', function() {
    var results = test('Mozilla/5.0 (compatible; MSIE 6.0; Windows NT 5.1)');
    results.ie.should.be.true;
  });

});
