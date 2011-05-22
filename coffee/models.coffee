class window.Mob extends Backbone.Model
	initialize: ->
		console.log 'creature init'
	defaults:
		id: 0
		name: 'creature 1'
		level: 100
		type: 'beast'
		health: 1000
		abilities: []

class window.Player extends Mob
	initialize: ->
		console.log 'player init'
	defaults:
		name: 'player 1'
		level: 100
		type: 'human'
		health: 1000

class window.effect extends Backbone.Model
	initialize: ->
		console.log('ability init')
	defaults: 
		name: 'ability 1'
		
class window.Item extends Backbone.Model
	initialize: ->
		console.log('item init')
	defaults:
		id: 0
		uid: 0
		level: 0
		reqLevel: 0
		name: 'item 1'
		description: ''
		slots: ['bag']
		abilities: []

class window.skill extends window.Item
	initialize: ->
		console.log 'skill init'
	defaults: 
		name: 'skill 1'
		icon: ''
		slots: ['skill']