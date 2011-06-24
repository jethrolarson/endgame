(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.models = {};
  models.Mob = (function() {
    __extends(Mob, Backbone.Model);
    function Mob() {
      Mob.__super__.constructor.apply(this, arguments);
    }
    Mob.prototype.initialize = function() {
      console.log('creature init');
      if (!this.get('health')) {
        return this.set({
          health: this.get('maxHealth')
        });
      }
    };
    Mob.prototype.defaults = {
      id: 0,
      name: 'creature 1',
      level: 100,
      type: 'beast',
      health: 1000,
      maxHealth: 1000,
      abilities: [],
      mana: 100,
      maxMana: 100
    };
    return Mob;
  })();
  models.Player = (function() {
    __extends(Player, models.Mob);
    function Player() {
      Player.__super__.constructor.apply(this, arguments);
    }
    Player.prototype.initialize = function() {
      console.log('player init');
      this.set({
        abilities: new Backbone.Collection
      });
      this.addAbility('Attack');
      return this.bind('change:target', function() {
        return console.log('target set');
      });
    };
    Player.prototype.addAbility = function(name) {
      return this.get('abilities').add(new abilities[name]({
        owner: this
      }));
    };
    Player.prototype.defaults = {
      name: 'player 1',
      level: 100,
      type: 'human',
      health: 1000,
      maxHealth: 1000
    };
    return Player;
  })();
}).call(this);
