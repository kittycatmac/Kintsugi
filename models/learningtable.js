module.exports = function (sequelize, DataTypes) {
	var Learning = sequelize.define('LearningSchema', {
			id: DataTypes.INTEGER,
			symbol: DataTypes.STRING,
			saying: DataTypes.STRING
	});
	return Learning;
};