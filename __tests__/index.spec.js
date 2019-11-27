(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxReactMobx = require('../src/next-react-mobx');

  describe('NxReactMobx.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
