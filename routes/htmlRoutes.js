var db = require('../models');

module.exports = function (app) {
	// Load index page
	app.get('/', function (req, res) {
		console.log(req.user);
		res.render('home', { username: req.user });
		// db.LearningSchema.findAll().then(function (dbExamples) {
		// 	console.log("DBEXAMPLES USERS: ", dbExamples);
		// 	res.render('index', {
		// 		msg: 'Welcome!',
		// 		examples: dbExamples
		// 	});
		// });
	});

	app.get('/toast', function (req, res) {
		console.log(req.user);
		res.render('home', { user: req.user });
		// db.LearningSchema.findAll().then(function (dbExamples) {
		// 	console.log("DBEXAMPLES USERS: ", dbExamples);
		// 	res.render('index', {
		// 		msg: 'Welcome!',
		// 		examples: dbExamples
		// 	});
		// });
	});
};