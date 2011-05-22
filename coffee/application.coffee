# coffee -o public/js/ --watch coffee/
$ ->
	$('.meter').click ->
		$(this).toggleClass 'on'

	app = new window.UI 
		el: $('#content')[0]