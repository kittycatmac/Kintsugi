var db = require('../models');

module.exports = function (app) {

	// Load index page
	app.get('/', function (req, res) {
		console.log("hit");
		db.CardSchema.findAll().then((flashcards => {
			db.LearningSchema.findAll().then((symbols) => {
				console.log(flashcards,symbols);
				const { user } = req;
				res.render('home', {
					user,
					flashcards,symbols
				})
			
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