module.exports = function (sequelize, DataTypes) {
	var Learning = sequelize.define('LearningSchema', {
			learning_ID: DataTypes.INTEGER,
			// primaryKey: true,
			symbol: DataTypes.STRING,
			saying: DataTypes.STRING
	});
	return Learning;
};
