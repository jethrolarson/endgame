window.abilities = {}
class window.Ability extends Backbone.Model
	use: ->
		console.log 'Ability '+@get('name')+' activated' 
	defaults:
		name: 'ability 1'
		description: 'no description'

class abilities.Attack extends Ability
	# requires owner
	defaults:
		name: 'Attack'
		description: 'Attack current target'

	onTick: (e)->
		if @get 'target'
			@get('target').addEffect(new effects.hitTarget(@get 'owner'))

	use: (target)->
		@target ?= target
		super()