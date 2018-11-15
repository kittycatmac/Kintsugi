module.exports = function (sequelize, DataTypes) {
	var Business = sequelize.define('businessKanji', {
			kanji_ID: DataTypes.INTEGER,
			allowNull: false,
			symbol: DataTypes.STRING,
			saying: DataTypes.STRING
	});
	return Business;
};

