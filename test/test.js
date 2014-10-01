var assert = require('assert');
var is = require('..');

describe('BrowserIs', function() {

  function test(name, userAgents, shouldBeTrue) {

    it('detects ' + name, function() {
      userAgents.forEach(function(ua) {
        var request = { headers: { 'user-agent': ua } };
        var results = is(request);
        Object.keys(results).forEach(function(key) {
          if (shouldBeTrue.indexOf(key) === -1) {
            assert(!results[key]);
          } else {
            assert(results[key]);
          }
        });
      });
    });

  }

  test('IE6', [
    'Mozilla/5.0 (compatible; MSIE 6.0; Windows NT 5.1)',
    'Mozilla/4.0 (compatible; MSIE 6.0b; Windows NT 5.1)',
    'Mozilla/4.0 (compatible; MSIE 6.1; Windows XP)'
  ], [
    'ie', 'ie6', 'desktop', 'windows'
  ]);

});
