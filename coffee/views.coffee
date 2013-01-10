window.views = {}
#this is the master view
class views.UI extends Backbone.View
	initialize: ->
		window.player = new models.Player
			name: 'Jethro'
		@allTargets = new collections.AllTargets()
		@getEnemies()
		@render()
	render: ->
		$(@el).html templates.ui()
		$(@el).append (new views.Mob model: player, id: 'player').render().el
		# $(@el).append (new views.Target).el
		$(@el).append (new views.Console).render().el
		$(@el).append (new views.HotBar collection: player.get 'abilities').render().el
		$(@el).append @enemiesView.render().el

		@
	getEnemies: ->
		enemies = new Backbone.Collection
		for i in [0..5]
			enemies.add new models.Mob mobs.goblin
		@enemiesView = new views.Enemies
			collection: enemies
		@

class views.Mob extends Backbone.View
	className: 'mob'
	events: 
		click: 'targetedBy'
	targetedBy: ->
		$(@el).addClass 'target'
		
		player.set target: @model
	untargetedBy: ->
		$(@el).removeClass 'target'
	render: ->
		$(@el).html templates.mob @model.toJSON()
		@

class views.HotBar extends Backbone.View
	className: 'hotbar'
	tagName: 'ul'
	initialize: ->
		@collection.bind 'add',     @addOne
		@collection.bind 'refresh', @addAll
		@collection.bind 'all',     @render
	render: ->
		@addAll()
	addAll: ->
		$(@el).empty()
		@collection.each (item,i)=>
			@addOne item
		@
	addOne: (ability)->
		$(@el).append new views.Ability( model: ability ).render().el
		@

class views.Ability extends Backbone.View
	tagName: 'li'
	events: 
		click: 'use'
	initialize: ->
		
	render: ->
		$(@el).html templates.ability @model.toJSON()
		@
	use: ->
		@model.use()
		
class views.Enemies extends Backbone.View
	id: 'enemies'
	tagName: 'ul'
	render: ->
		@addAll()
	addAll: ->
		$(@el).empty()
		@collection.each (item,i)=>
			@addOne item
		@
	addOne: (enemy)->
		$(@el).append new views.Mob( model: enemy ).render().el
		@

class views.Console extends Backbone.View
	id: "console"
	tagName: 'ul'
	render: ->
		@
	addOne: (message)->
		$(@el).append '<li>'+message+'</li>'
		@