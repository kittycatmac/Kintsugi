module.exports = function (sequelize, DataTypes) {
	var Business = sequelize.define('businessKanji', {
			kanji_ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			symbol: DataTypes.STRING,
			saying: DataTypes.STRING
	}, {
		timestamps: false,
		freezeTableName: true
	});
	return Business;
};

