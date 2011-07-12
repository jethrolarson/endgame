(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.Item = (function() {
    __extends(Item, Backbone.Model);
    function Item() {
      Item.__super__.constructor.apply(this, arguments);
    }
    Item.prototype.initialize = function() {
      return console.log('item init');
    };
    Item.prototype.defaults = {
      id: 0,
      uid: 0,
      level: 0,
      reqLevel: 0,
      name: 'item 1',
      description: '',
      slots: ['bag'],
      abilities: []
    };
    return Item;
  })();
}).call(this);
