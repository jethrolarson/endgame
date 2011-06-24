window.requestAnimFrame = (->
	window.requestAnimationFrame || 
	window.webkitRequestAnimationFrame || 
	window.mozRequestAnimationFrame || 
	window.oRequestAnimationFrame || 
	window.msRequestAnimationFrame || 
	(callback, element)->
		window.setTimeout callback, 1000 / 60
)()

### 
	Simple javascript templating
	Adapted from John Resig's microtemplates
	#takes @tm: #string text of template
	#returns compiled template #function which takes a context as its only param
###
`
window._tmpl = function(txt){
	return new Function("obj","var p=[];(function(){p.push('" +
		txt.replace(/[\r\t]/g, " ")
			.replace(/[\n]/g, "\\n")
			.replace(/@([\w]+)/g,"<%=this.$1%>")
			.split("<%").join("\t")
			.replace(/((^|%>)[^\t]*)'/g, "$1\r")
			 // escape other single quotes
			.split("'").join("\\'")
			.replace(/\t=(.*?)%>/g, "',$1,'")
			.split("\t").join("');")
			.split("%>").join("p.push('")
			.split("\r").join("\\'")
		+ "');}).call(obj); return p.join('');");
}
`
