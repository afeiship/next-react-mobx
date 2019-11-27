/*!
 * name: @feizheng/next-react-mobx
 * url: https://github.com/afeiship/next-react-mobx
 * version: 1.0.0
 * date: 2019-11-27T07:09:15.511Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var EventMitt = global.EventMitt || require('@feizheng/event-mitt');
  var DEFAULT_OPTIONS = { key: 'esbi' };

  var NxReactMobx = nx.declare('nx.ReactMobx', {
    statics: {
      bootstrap: function(inApp, inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        var app = nx.mix(inApp, EventMitt);
        var key = options.key;
        // deletes
        delete options.key;
        global[key] = nx.mix({ $app: app }, options);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxReactMobx;
  }
})();

//# sourceMappingURL=next-react-mobx.js.map
