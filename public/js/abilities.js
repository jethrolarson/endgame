(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.abilities = {};
  window.Ability = (function() {
    __extends(Ability, Backbone.Model);
    function Ability() {
      Ability.__super__.constructor.apply(this, arguments);
    }
    Ability.prototype.use = function() {
      return console.log('Ability ' + this.get('name') + ' activated');
    };
    Ability.prototype.defaults = {
      name: 'ability 1',
      description: 'no description'
    };
    return Ability;
  })();
  abilities.Attack = (function() {
    __extends(Attack, Ability);
    function Attack() {
      Attack.__super__.constructor.apply(this, arguments);
    }
    Attack.prototype.defaults = {
      name: 'Attack',
      description: 'Attack current target'
    };
    Attack.prototype.onTick = function(e) {
      if (this.get('target')) {
        return this.get('target').addEffect(new effects.hitTarget(this.get('owner')));
      }
    };
    Attack.prototype.use = function(target) {
      var _ref;
            if ((_ref = this.target) != null) {
        _ref;
      } else {
        this.target = target;
      };
      return Attack.__super__.use.call(this);
    };
    return Attack;
  })();
}).call(this);
