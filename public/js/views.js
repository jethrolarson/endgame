(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.views = {};
  views.UI = (function() {
    __extends(UI, Backbone.View);
    function UI() {
      UI.__super__.constructor.apply(this, arguments);
    }
    UI.prototype.initialize = function() {
      window.player = new models.Player({
        name: 'Jethro'
      });
      this.allTargets = new collections.AllTargets();
      this.getEnemies();
      return this.render();
    };
    UI.prototype.render = function() {
      $(this.el).html(templates.ui());
      $(this.el).append((new views.Mob({
        model: player,
        id: 'player'
      })).render().el);
      $(this.el).append((new views.Console).render().el);
      $(this.el).append((new views.HotBar({
        collection: player.get('abilities')
      })).render().el);
      $(this.el).append(this.enemiesView.render().el);
      return this;
    };
    UI.prototype.getEnemies = function() {
      var enemies, i;
      enemies = new Backbone.Collection;
      for (i = 0; i <= 5; i++) {
        enemies.add(new models.Mob(mobs.goblin));
      }
      this.enemiesView = new views.Enemies({
        collection: enemies
      });
      return this;
    };
    return UI;
  })();
  views.Mob = (function() {
    __extends(Mob, Backbone.View);
    function Mob() {
      Mob.__super__.constructor.apply(this, arguments);
    }
    Mob.prototype.className = 'mob';
    Mob.prototype.events = {
      click: 'targetedBy'
    };
    Mob.prototype.targetedBy = function() {
      $(this.el).addClass('target');
      return player.set({
        target: this.model
      });
    };
    Mob.prototype.untargetedBy = function() {
      return $(this.el).removeClass('target');
    };
    Mob.prototype.render = function() {
      $(this.el).html(templates.mob(this.model.toJSON()));
      return this;
    };
    return Mob;
  })();
  views.HotBar = (function() {
    __extends(HotBar, Backbone.View);
    function HotBar() {
      HotBar.__super__.constructor.apply(this, arguments);
    }
    HotBar.prototype.className = 'hotbar';
    HotBar.prototype.tagName = 'ul';
    HotBar.prototype.initialize = function() {
      this.collection.bind('add', this.addOne);
      this.collection.bind('refresh', this.addAll);
      return this.collection.bind('all', this.render);
    };
    HotBar.prototype.render = function() {
      return this.addAll();
    };
    HotBar.prototype.addAll = function() {
      $(this.el).empty();
      this.collection.each(__bind(function(item, i) {
        return this.addOne(item);
      }, this));
      return this;
    };
    HotBar.prototype.addOne = function(ability) {
      $(this.el).append(new views.Ability({
        model: ability
      }).render().el);
      return this;
    };
    return HotBar;
  })();
  views.Ability = (function() {
    __extends(Ability, Backbone.View);
    function Ability() {
      Ability.__super__.constructor.apply(this, arguments);
    }
    Ability.prototype.tagName = 'li';
    Ability.prototype.events = {
      click: 'use'
    };
    Ability.prototype.initialize = function() {};
    Ability.prototype.render = function() {
      $(this.el).html(templates.ability(this.model.toJSON()));
      return this;
    };
    Ability.prototype.use = function() {
      return this.model.use();
    };
    return Ability;
  })();
  views.Enemies = (function() {
    __extends(Enemies, Backbone.View);
    function Enemies() {
      Enemies.__super__.constructor.apply(this, arguments);
    }
    Enemies.prototype.id = 'enemies';
    Enemies.prototype.tagName = 'ul';
    Enemies.prototype.render = function() {
      return this.addAll();
    };
    Enemies.prototype.addAll = function() {
      $(this.el).empty();
      this.collection.each(__bind(function(item, i) {
        return this.addOne(item);
      }, this));
      return this;
    };
    Enemies.prototype.addOne = function(enemy) {
      $(this.el).append(new views.Mob({
        model: enemy
      }).render().el);
      return this;
    };
    return Enemies;
  })();
  views.Console = (function() {
    __extends(Console, Backbone.View);
    function Console() {
      Console.__super__.constructor.apply(this, arguments);
    }
    Console.prototype.id = "console";
    Console.prototype.tagName = 'ul';
    Console.prototype.render = function() {
      return this;
    };
    Console.prototype.addOne = function(message) {
      $(this.el).append('<li>' + message + '</li>');
      return this;
    };
    return Console;
  })();
}).call(this);
