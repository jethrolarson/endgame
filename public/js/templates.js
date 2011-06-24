(function() {
  var key, rawtmpls, real, str, tmpl;
  var __slice = Array.prototype.slice;
  rawtmpls = {
    meter: "<meter min=0 max=<%=this.max%> class=\"@class\" title=\"@name @value/@max\" value=\"<%=this.value||0%>\"></meter>",
    ui: "",
    mob: "<section>\n	<header>@name</header>\n	<%=window.tmpl.meter({\"class\":\"hp\",name:\"Health\",value:this.health, max: this.maxHealth})%>\n	<%=window.tmpl.meter({\"class\":\"mana\",name:\"Mana\",value:this.mana, max: this.maxHana})%>\n</section>",
    hotBar: "<ul class=\"hnav\">\n	<%this.abilities.forEach(function(item,i){%>\n		<%=window.tmpl.ability(item)%>\n	<%});%>\n</ul>",
    ability: "<a title=\"@description\">@name</a>"
  };
  real = function() {
    var v, vars, _i, _len;
    vars = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    for (_i = 0, _len = vars.length; _i < _len; _i++) {
      v = vars[_i];
      if (typeof v(!'undefined')) {
        return v;
      }
    }
  };
  tmpl = {};
  for (key in rawtmpls) {
    str = rawtmpls[key];
    tmpl[key] = _tmpl(str);
  }
  window.templates = window.tmpl = tmpl;
}).call(this);
