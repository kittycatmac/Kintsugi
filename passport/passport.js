var passport = require ("passport");
var GoogleStrategy = require("passport-google-oauth20");

module.exports = app => {

		// google passport
	app.use(passport.initialize());
	app.use(passport.session());
	
	// PASSPORT SETUP
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id)
				.then(user => {
						done(null, user);
				});
	});

// Tell passport to make use of GoogleStrategy
passport.use(
  new GoogleStrategy({
		clientID: "206437889113-sioe43rlfeon8iocfbcnh50fcg8jme9d.apps.googleusercontent.com",
		clientSecret: "Sx9AFgqBY96dIztmsbndoS7I",
		callbackURL: "http://localhost:3000/auth/google/callback"
  }, 
  async (accessToken, refreshToken, profile, done) => {
			// const existingUser = await User.findOne({ googleId: profile.id })
			console.log(profile);
      
      // if(existingUser) {
      //     return done(null, existingUser);
      // }
// Mongoose to be set to mysql
      // const user = await new User({ googleId: profile.id }).save()


      // console.log("USER: ", user);
			done(null, profile);
			// done(null, user);
	})
	);
}


