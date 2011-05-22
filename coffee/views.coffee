
#this is the master view
class window.UI extends Backbone.View
	id: 'page'
	initialize: ->
		@player = new window.Player {
			name: 'Jethro'
		}
		@playerView = new window.PlayerView
			model: @player
		@render()
	render: ->
		$(@el).html window.templates.ui()
		@$('#player').html(@playerView.render().el)
		@

class window.PlayerView extends Backbone.View
	class: 'player'
	render: ->
		$(@el).html templates.player(@model.toJSON())
		@


class window.MobView extends Backbone.View
	class: 'mob'
	
	render: ->
		$(@el).html window.templates.mob()
		@
