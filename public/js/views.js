(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.UI = (function() {
    __extends(UI, Backbone.View);
    function UI() {
      UI.__super__.constructor.apply(this, arguments);
    }
    UI.prototype.id = 'page';
    UI.prototype.initialize = function() {
      this.player = new window.Player({
        name: 'Jethro'
      });
      this.playerView = new window.PlayerView({
        model: this.player
      });
      return this.render();
    };
    UI.prototype.render = function() {
      $(this.el).html(window.templates.ui());
      this.$('#player').html(this.playerView.render().el);
      return this;
    };
    return UI;
  })();
  window.PlayerView = (function() {
    __extends(PlayerView, Backbone.View);
    function PlayerView() {
      PlayerView.__super__.constructor.apply(this, arguments);
    }
    PlayerView.prototype["class"] = 'player';
    PlayerView.prototype.render = function() {
      $(this.el).html(templates.player(this.model.toJSON()));
      return this;
    };
    return PlayerView;
  })();
  window.MobView = (function() {
    __extends(MobView, Backbone.View);
    function MobView() {
      MobView.__super__.constructor.apply(this, arguments);
    }
    MobView.prototype["class"] = 'mob';
    MobView.prototype.render = function() {
      $(this.el).html(window.templates.mob());
      return this;
    };
    return MobView;
  })();
}).call(this);
