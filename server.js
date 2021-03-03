// getting all dependencies installed
const express = require('express'),
	  consign = require('consign'),
	  bodyParser = require('body-parser'),
	  path = require('path'),
	  session = require('express-session'),
	  validator = require('express-validator')

const app = express()

// setting the view engine
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'app','views'))

// body-parser to recovery the body on form send
app.use(bodyParser.urlencoded({ extended : true }))

// setting the static files,like css and java script
app.use(express.static(path.join(__dirname,'app','public')))

// the express session to create sessions
app.use(session({
	secret : 'randomword',
	resave : false,
	saveUninitialized : false
}))

// express-validator to validate fields
app.use(validator())

// consign to make the auto load of our files
consign()
	.include('/app/controllers')
	.then('/app/models')
	.then('/app/routes')
	.into(app)

module.exports = app