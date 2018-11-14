module.exports = function (sequelize, DataTypes) {
	var Card = sequelize.define('CardSchema', {
			deck_ID: DataTypes.INTEGER,
			front: DataTypes.STRING,
			back: DataTypes.STRING
	});
	return Card;
};