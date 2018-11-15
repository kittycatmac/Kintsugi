var db = require('../models');

module.exports = function (app) {
	// Load index page
	app.get('/', function (req, res) {
		db.LearningSchema.findAll().then(function (dbExamples) {
			console.log("DBEXAMPLES USERS: ", dbExamples);
			res.render('index', {
				msg: 'Welcome!',
				examples: dbExamples
			});
		});
	});

	// Load example page and pass in an example by id
	app.get('/example/:id', function (req, res) {
		db.UserSchema.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
			res.render('example', {
				example: dbExample
			});
		});
	});

	// Render 404 page for any unmatched routes
	app.get('*', function (req, res) {
		res.render('404');
	});
};

















// [ 
// 	UserSchema {
// 	dataValues: 
// 	 { user_ID: 'test user',
// 		 Bio: 'test info for user',
// 		 badges: '15.0000',
// 		 study_cards: 'cards' },
// 	_previousDataValues: 
// 	 { user_ID: 'test user',
// 		 Bio: 'test info for user',
// 		 badges: '15.0000',
// 		 study_cards: 'cards' },
// 	_changed: {},
// 	_modelOptions: 
// 	 { timestamps: false,
// 		 validate: {},
// 		 freezeTableName: true,
// 		 underscored: false,
// 		 underscoredAll: false,
// 		 paranoid: false,
// 		 rejectOnEmpty: false,
// 		 whereCollection: null,
// 		 schema: null,
// 		 schemaDelimiter: '',
// 		 defaultScope: {},
// 		 scopes: [],
// 		 indexes: [],
// 		 name: [Object],
// 		 omitNull: false,
// 		 sequelize: [Object],
// 		 hooks: {},
// 		 uniqueKeys: {} },
// 	_options: 
// 	 { isNewRecord: false,
// 		 _schema: null,
// 		 _schemaDelimiter: '',
// 		 raw: true,
// 		 attributes: [Array] },
// 	__eagerlyLoadedAssociations: [],
// 	isNewRecord: false },
// UserSchema {
// 	dataValues: 
// 	 { user_ID: 'userID',
// 		 Bio: 'bio',
// 		 badges: '1.0000',
// 		 study_cards: 'study_card' },
// 	_previousDataValues: 
// 	 { user_ID: 'userID',
// 		 Bio: 'bio',
// 		 badges: '1.0000',
// 		 study_cards: 'study_card' },
// 	_changed: {},
// 	_modelOptions: 
// 	 { timestamps: false,
// 		 validate: {},
// 		 freezeTableName: true,
// 		 underscored: false,
// 		 underscoredAll: false,
// 		 paranoid: false,
// 		 rejectOnEmpty: false,
// 		 whereCollection: null,
// 		 schema: null,
// 		 schemaDelimiter: '',
// 		 defaultScope: {},
// 		 scopes: [],
// 		 indexes: [],
// 		 name: [Object],
// 		 omitNull: false,
// 		 sequelize: [Object],
// 		 hooks: {},
// 		 uniqueKeys: {} },
// 	_options: 
// 	 { isNewRecord: false,
// 		 _schema: null,
// 		 _schemaDelimiter: '',
// 		 raw: true,
// 		 attributes: [Array] },
// 	__eagerlyLoadedAssociations: [],
// 	isNewRecord: false } ]

