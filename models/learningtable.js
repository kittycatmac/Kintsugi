module.exports = function (sequelize, DataTypes) {
	var Learning = sequelize.define('LearningSchema', {
			learning_ID: {
				type: DataTypes.INTEGER,
				primaryKey: true
			},
			symbol: DataTypes.STRING,
			saying: DataTypes.STRING
	}, {
		timestamps: false,
		freezeTableName: true
	});
	return Learning;
};
