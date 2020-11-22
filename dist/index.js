/*!
 * name: @jswork/next-react-mobx
 * description: Next toolkit for mobx app.
 * homepage: https://github.com/afeiship/next-react-mobx
 * version: 1.0.0
 * date: 2020-11-22 18:36:02
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var EventMitt = global.EventMitt || require('@jswork/event-mitt');
  var DEFAULT_OPTIONS = { key: 'nxmx' };

  var NxReactMobx = nx.declare('nx.ReactMobx', {
    statics: {
      bootstrap: function (inApp, inOptions) {
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
