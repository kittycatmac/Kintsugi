module.exports = function (sequelize, DataTypes) {
	var Business = sequelize.define('businessKanji', {
			kanji_ID: {
				type: DataTypes.INTEGER,
				primaryKey: true
			},
			allowNull: false,
			symbol: DataTypes.STRING,
			saying: DataTypes.STRING
	}, {
		timestamps: false,
		freezeTableName: true
	});
	return Business;
};

