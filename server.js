require('dotenv').config();
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require("body-parser");
var expressSession = require("express-session");
var passport = require("passport");

const keys = require('./config/keys');
const path = require('path');


var db = require('./models');

// require('./models/User');
// console.log("KEYS: ", keys);
const expSession = {
  secret: "asuyfugakugbeugatykwgetykauwlkeytasey",
  cookie: {}
};

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession(expSession));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));





// Handlebars
app.engine(
	'handlebars',
	exphbs({
		defaultLayout: 'main'
	})
);
app.set('view engine', 'handlebars');

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
	syncOptions.force = true;
}

require("./passport/passport")(app);


	
	app.listen(PORT, () => {
		console.log('app listening on port: ', PORT);
	})


// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function () {
// 	app.listen(PORT, function () {
// 		console.log(
// 			'==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
// 			PORT,
// 			PORT
// 		);
// 	});
// });

// module.exports = app;
