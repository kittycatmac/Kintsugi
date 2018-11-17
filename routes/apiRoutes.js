var db = require('../models');
var passport = require('passport');

module.exports = function (app) {
	// Get all examples
	app.get('/api/examples', function (req, res) {
		db.Example.findAll({}).then(function (dbExamples) {
			res.json(dbExamples);
		});
	});

	// Create a new example
	app.post('/api/examples', function (req, res) {
		db.Example.create(req.body).then(function (dbExample) {
			res.json(dbExample);
		});
	});

	// Delete an example by id
	app.delete('/api/examples/:id', function (req, res) {
		db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
			res.json(dbExample);
		});
	});



	// routes below
	app.get('/auth/google', passport.authenticate('google', {
		prompt: 'select_account',
		scope: ['profile', 'email']
	}));

	app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function (req, res) {
		// Successful authentication, redirect home.
		res.redirect('/');
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});




};
