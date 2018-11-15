module.exports = function (sequelize, DataTypes) {
	var Card = sequelize.define('CardSchema', {
			deck_ID: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			front: DataTypes.STRING,
			back: DataTypes.STRING
	}, {
		timestamps: false,
		freezeTableName: true
	});
	return Card;
};