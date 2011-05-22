process.title = 'node-dummy'
process.addListener 'uncaughtException', (err, stack) ->
	console.log 'Caught exception: ' + err
	console.log err.stack.split '\n'

connect = require 'connect'
assetManager = require 'connect-assetmanager'
assetHandler = require 'connect-assetmanager-handlers'
express = require 'express'
dummyHelper = require './lib/dummy-helper'
SocketServer = require './lib/socket-server'
fs = require 'fs'

stylus = require 'stylus'
nib = require 'nib'

styl_compile = (file, path, index, isLast, callback)->
	if path.match /\.styl$/
		console.log typeof file
		stylus(file).use(nib()).render (err, css)->
			if err 
				console.log err
			else
				callback css
				console.log "style compiled: " + path
	else
		callback file
assets = assetManager {
	js: {
		route: /\/static\/js\/[0-9]+\/.*\.js/
		path: './public/js/'
		dataType: 'js'
		files: [
			'application.js'
			'util.js'
		]
		preManipulate:
			'^': [
				(file, path, index, isLast, callback)->
					if path.match /jquery.client/
						callback file.replace /'#socketIoPort#'/, port
					else
						callback file
		]
		postManipulate:
			'^': [
				assetHandler.uglifyJsOptimize
				(file, path, index, isLast, callback)->
					callback file
					dummyTimestamps.content = Date.now()
			]
		}
	css: {
		route: /\/static\/css\/[0-9]+\/.*\.css/
		path: './public/css/'
		dataType: 'css'
		files: ['styles.styl']
		preManipulate:
			'^': [styl_compile]
		postManipulate:
			'^': [
				assetHandler.yuiCssOptimize
				(file, path, index, isLast, callback)->
					callback(file)
					dummyTimestamps.css = Date.now()
			]
	}
}#/assetManager

port = 3000
console.log "Using port " + port
app = module.exports = express.createServer()

app.configure ->
	app.set 'view engine', 'jade'
	app.set 'views', __dirname + '/views'

app.configure ->
	app.use connect.bodyParser()
	app.use connect.logger 
		format: ':req[x-real-ip]\t:status\t:method\t:url\t'
	app.use assets
	app.use connect.static(__dirname + '/public')

app.dynamicHelpers 'cacheTimeStamps': (req, res)-> assets.cacheTimestamps

#setup the errors
app.error (err, req, res, next)->
	console.log err.stack.split '\n'
	res.render '500', 
		locals: 
			err: err

#A route for creating a 500 error (useful to keep around for testing the page)
app.get '/500', (req, res)->
	throw new Error 'This is a 500 Error'


# Your routes
app.get '/', (req, res)->
	locals = 'key': 'value'
	locals = dummyHelper.add_overlay(app, req, locals)
	res.render('index', locals)

# Keep this just above .listen()
dummyTimestamps = new dummyHelper.DummyHelper app

#The 404 route (ALWAYS keep this as the last route)
app.get '/*', (req, res)->
	res.render '404'

app.listen port, null
new SocketServer app
