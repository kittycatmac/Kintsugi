var db = require('../models');

module.exports = function (app) {
	// Load index page
	app.get('/', function (req, res) {
		db.CardSchema.findAll().then(flashcards => {
			const { user } = req;
			res.render('home', {
				user,
				flashcards
			});
		});
	});

	app.get('/user_profile',function (req, res) {
		if (req.user) {
			res.render('user', { user: req.user });
		} else {
			res.redirect('/');
		}
		// db.LearningSchema.findAll().then(function (dbExamples) {
		// 	console.log("DBEXAMPLES USERS: ", dbExamples);
		// 	res.render('index', {
		// 		msg: 'Welcome!',
		// 		examples: dbExamples
		// 	});
		// });
	});
};