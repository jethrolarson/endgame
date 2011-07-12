(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.Effect = (function() {
    __extends(Effect, Backbone.Model);
    function Effect() {
      Effect.__super__.constructor.apply(this, arguments);
    }
    Effect.prototype.initialize = function() {
      return console.log('ability init');
    };
    Effect.prototype.defaults = {
      name: 'ability 1'
    };
    return Effect;
  })();
}).call(this);
