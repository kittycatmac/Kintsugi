require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const expressSession = require("express-session");

const keys = require('./config/keys');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const expSession = {
	secret: keys.expSession,
	cookie: {}
};

// Requiring our models for syncing
var db = require("./models");


// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession(expSession));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Handlebars / view engine
app.engine(
	'handlebars',
	exphbs({
		defaultLayout: 'main'
	})
);
app.set('view engine', 'handlebars');

// passport
require("./passport/passport")(app);
// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
