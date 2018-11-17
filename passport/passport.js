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
		console.log(id);
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
		callbackURL: "http://localhost:3000/auth/google/callback"
  }, async (accessToken, refreshToken, profile, done) => {
		console.log("PROFILE: ", profile);
		const new_user = {
			user_ID: profile.id,
			Bio: '',
			badges: '1',
			study_cards: ''
		}

		const existingUser = await db.UserSchema.findById(profile.id );
		
		console.log("existingUser: ", existingUser);
		if(existingUser) {
			    return done(null, existingUser);
			};

		const user = await db.UserSchema.create(new_user).then(user => user.dataValues);
		console.log("USER: ", user);
		return done(null, user);
			

	})
	);
}



// User.create({ username: 'fnord', job: 'omnomnom' })
//   .then(() => User.findOrCreate({where: {username: 'fnord'}, defaults: {job: 'something else'}}))
//   .spread((user, created) => {
//     console.log(user.get({
//       plain: true
//     }))
//     console.log(created)

//     /*
//     In this example, findOrCreate returns an array like this:
//     [ {
//         username: 'fnord',
//         job: 'omnomnom',
//         id: 2,
//         createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
//         updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
//       },
//       false
//     ]
//     The array returned by findOrCreate gets spread into its 2 parts by the "spread" on line 69, and the parts will be passed as 2 arguments to the callback function beginning on line 69, which will then treat them as "user" and "created" in this case. (So "user" will be the object from index 0 of the returned array and "created" will equal "false".)
//     */
//   })