window.models = {}
class models.Mob extends Backbone.Model
	initialize: ->
		console.log 'creature init'
		@set( health: @get 'maxHealth' ) unless @get 'health'
	defaults:
		id: 0
		name: 'creature 1'
		level: 100
		type: 'beast'
		health: 1000
		maxHealth: 1000
		abilities: []
		mana: 100
		maxMana: 100

class models.Player extends models.Mob
	#abilities
	#inventory
	#equipment
	initialize: ->
		console.log 'player init'
		@set abilities: new Backbone.Collection
		@addAbility 'Attack'
		@bind 'change:target' , -> console.log 'target set'
	addAbility: (name)->
		@get('abilities').add new abilities[name] 
			owner: this
	defaults:
		name: 'player 1'
		level: 100
		type: 'human'
		health: 1000
		maxHealth: 1000
