var db = require('../models');

module.exports = function (app) {
	// Load table page
	app.get('/table', function (req, res) {
		db.LearningSchema.findAll().then((learningtable => {
			const { user } = req;
			res.render('home', {
			user,learningtable
			});
		}));
	});
	
	// Load index page
	app.get('/', function (req, res) {
		db.CardSchema.findAll().then((flashcards => {
			const { user } = req;
			res.render('home', {
				user,
				flashcards
			
			});
		}));
	});


	app.get('/user_profile',function (req, res) {
		if (req.user) {
			res.render('user', { user: req.user });
		} else {
			res.redirect('/');
		}
	});


};