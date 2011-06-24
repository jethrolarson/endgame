# coffee -o public/js/ --watch coffee/
$ ->
	$('.meter').click ->
		$(this).toggleClass 'on'

	app = new views.UI 
		el: $('#page')[0]