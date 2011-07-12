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