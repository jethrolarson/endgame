window.collections = {}
class AllTargets extends Backbone.Collection
	initialize: ->
	model: models.Mob
	clearTargets: ->
		@models.each (item,i)->
			
		
collections.allTargets = new AllTargets()
		