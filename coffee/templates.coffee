rawtmpls =
	meter: """
		<meter min=0 max=<%=this.max||100%> class="@class" title="@name" value="<%=this.value||0%>"></meter>
	"""
	ui: """
		<div id=ui>
			<div id="player">Player</div>
		UI</div>
	"""
	player: """
		<section class="mob player">
			<header>@name</header>
			<%=window.tmpl.meter({"class":"hp",name:"Health",value:100})%>
			<%=window.tmpl.meter({"class":"mana",name:"Mana",value:90})%>
		</section>
	"""
window.real = (vars...)->
	for v in vars
		return v if typeof v not 'undefined'

tmpl = {}
for key,str of rawtmpls
	tmpl[key] = _tmpl(str)
window.templates = window.tmpl = tmpl