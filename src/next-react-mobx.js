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
        // deletes
        delete options.key;
        global[options.key] = nx.mix({ $app: app }, options);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxReactMobx;
  }
})();