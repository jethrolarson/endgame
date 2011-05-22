(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.Mob = (function() {
    __extends(Mob, Backbone.Model);
    function Mob() {
      Mob.__super__.constructor.apply(this, arguments);
    }
    Mob.prototype.initialize = function() {
      return console.log('creature init');
    };
    Mob.prototype.defaults = {
      id: 0,
      name: 'creature 1',
      level: 100,
      type: 'beast',
      health: 1000,
      abilities: []
    };
    return Mob;
  })();
  window.Player = (function() {
    __extends(Player, Mob);
    function Player() {
      Player.__super__.constructor.apply(this, arguments);
    }
    Player.prototype.initialize = function() {
      return console.log('player init');
    };
    Player.prototype.defaults = {
      name: 'player 1',
      level: 100,
      type: 'human',
      health: 1000
    };
    return Player;
  })();
  window.effect = (function() {
    __extends(effect, Backbone.Model);
    function effect() {
      effect.__super__.constructor.apply(this, arguments);
    }
    effect.prototype.initialize = function() {
      return console.log('ability init');
    };
    effect.prototype.defaults = {
      name: 'ability 1'
    };
    return effect;
  })();
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
  window.skill = (function() {
    __extends(skill, window.Item);
    function skill() {
      skill.__super__.constructor.apply(this, arguments);
    }
    skill.prototype.initialize = function() {
      return console.log('skill init');
    };
    skill.prototype.defaults = {
      name: 'skill 1',
      icon: '',
      slots: ['skill']
    };
    return skill;
  })();
}).call(this);
