rawtmpls =
	meter: """
		<meter min=0 max=<%=this.max%> class="@class" title="@name @value/@max" value="<%=this.value||0%>"></meter>
	"""
	ui: """
	"""
	mob: """
		<section>
			<header>@name</header>
			<%=window.tmpl.meter({"class":"hp",name:"Health",value:this.health, max: this.maxHealth})%>
			<%=window.tmpl.meter({"class":"mana",name:"Mana",value:this.mana, max: this.maxHana})%>
		</section>
	"""
	hotBar: """
		<ul class="hnav">
			<%this.abilities.forEach(function(item,i){%>
				<%=window.tmpl.ability(item)%>
			<%});%>
		</ul>
	"""
	ability: """
		<a title="@description">@name</a>
	"""

real = (vars...)->
	for v in vars
		return v if typeof v not 'undefined'

tmpl = {}
for key,str of rawtmpls
	tmpl[key] = _tmpl(str)
window.templates = window.tmpl = tmpl