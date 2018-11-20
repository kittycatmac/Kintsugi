const db = require('../models');

var passport = require ("passport");
var GoogleStrategy = require("passport-google-oauth20");

module.exports = app => {

		// google passport
	app.use(passport.initialize());
	app.use(passport.session());
	
	// PASSPORT SETUP
	passport.serializeUser((user, done) => {
		done(null, user.user_ID);
	});

	passport.deserializeUser((id, done) => {
		db.UserSchema.findById(id)
				.then(user => {
						done(null, user);
				});
	});

// Tell passport to make use of GoogleStrategy
passport.use(
  new GoogleStrategy({
		clientID: "206437889113-sioe43rlfeon8iocfbcnh50fcg8jme9d.apps.googleusercontent.com",
		clientSecret: "Sx9AFgqBY96dIztmsbndoS7I",
		callbackURL: "https://tranquil-garden-79849.herokuapp.com/auth/google/callback"
  }, async (accessToken, refreshToken, profile, done) => {	
		const existingUser = await db.UserSchema.findById(profile.id );
	
		if(existingUser) {
			return done(null, existingUser);
		};

		const new_user = {
			user_ID: profile.id,
			Bio: '',
			badges: '',
			study_cards: ''
		};

		const user = await db.UserSchema.create(new_user).then(user => user.dataValues);
		return done(null, user);
	})
	);
}
