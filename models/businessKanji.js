module.exports = function (sequelize, DataTypes) {
	var Business = sequelize.define('LearningSchema', {
			id: DataTypes.INTEGER,
			symbol: DataTypes.STRING,
			saying: DataTypes.STRING
	});
	return Business;
};

